import React, {useEffect, useState} from 'react'
import Banner from '../components/Banner'
import Card from '../components/Card'
import Jobs from './Jobs'
import Sidebar from '../sidebar/Sidebar'
import Newsletter from '../components/Newsletter'

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [jobs, setJobs] = useState([])

    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 6;
    
    useEffect(() =>{
        setIsLoading(true);
        fetch("jobs.json").then(res => res.json()).then(data => {
            setJobs(data)
            setIsLoading(false)
        })
    }, [])

    const [query, setQuery] = useState('')
    const handleInputChange = (event) =>{
        setQuery(event.target.value)
    }

    // Filter Jobs by jobTitle
    const filteredItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1)

    // Filter Jobs by Radio Filtering
    const handleChange = (event) => {
        setSelectedCategory(event.target.value)
    }

    // Filter Jobs by Button
    const handleClick = (event) => {
        setSelectedCategory(event.target.value)
    }

    // Calculate Index range
    const calculatePageRange = () =>{
        const startIndex = (currentPage - 1) * itemsPerPage
        const endIndex = startIndex + itemsPerPage
        return {startIndex, endIndex};
    }

    // Function for the next Page >>
    const nextPage = () => {
        if(currentPage < Math.ceil(filteredItems.length / itemsPerPage)){
            setCurrentPage(currentPage + 1 )
        }
    }

    // Function for the previous Page <<
    const prevPage = () => {
        if(currentPage > 1){
            setCurrentPage(currentPage -1)
        }
    }


    // Primary Function
    const filteredData = (jobs, selected, query) => {
        let filteredJobs = jobs;
        
        // filtering input items
        if(query){
            filteredJobs = filteredItems;
        }

        // Category filtering
        if(selected){
            filteredJobs = filteredJobs.filter(
                ({
                    jobLocation,
                    maxPrice,
                    experienceLevel,
                    salaryType,
                    employmentType,
                    postingDate,
                }) => 
                    jobLocation.toLowerCase() === selected.toLowerCase() ||
                    parseInt(maxPrice) <= parseInt(selected) ||
                    postingDate >= selected ||
                    salaryType.toLowerCase() === selected.toLowerCase() ||
                    experienceLevel.toLowerCase() === selected.toLowerCase() ||
                    employmentType.toLowerCase() === selected.toLowerCase()
            )
            console.log(filteredJobs)
        }

        // Slice the data based on current page
        const {startIndex, endIndex} = calculatePageRange()
        filteredJobs = filteredJobs.slice(startIndex, endIndex)

        return filteredJobs.map((data, i)=> <Card key={i} data={data}/> )
    }

    const result = filteredData(jobs, selectedCategory, query)
    return (
        <div>
            <Banner query={query} handleInputChange={handleInputChange}/>

            <div className='bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12'>

                {/* Filters Card */}
                <div className='bg-white p-4 rounded'>
                    <Sidebar handleChange={handleChange} handleClick={handleClick}/>
                </div>

                {/* Job Cards */}
                <div className='col-span-2 bg-white p-4 rounded'>
                    {
                        isLoading ? (<p className='font-medium'>Loading...</p>) :  result.length > 0 ? (<Jobs result={result}/>) : <>
                        <h3 className='text-lg font-bold mb-2'>{result.length} Jobs</h3>
                        <p>No data found!</p>
                        </>
                    }

                    {/* Pagination */}
                    {
                        result.length > 0 ? (
                            <div className='flex justify-center mt-4 space-x-8'>
                                <button onClick={prevPage} disabled={currentPage === 1} className='hover:underline'>Previous</button>
                                <span className='mx-6'>Page {currentPage} of {Math.ceil(filteredItems.length / itemsPerPage)}</span>
                                <button onClick={nextPage} disabled={currentPage === Math.ceil(filteredItems.length / itemsPerPage)} className='hover:underline'>Next</button>
                            </div>
                        ) : ""
                    }
                </div>

                {/* Newsletter Card */}
                <div className='bg-white p-4 rounded'>
                    <Newsletter/>
                </div>
            </div>
        </div>

    )
}

export default Home