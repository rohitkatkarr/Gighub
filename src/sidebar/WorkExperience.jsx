import React from 'react'
import InputField from '../components/InputField'

const WorkExperience = ({handleChange}) => {
  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Work Experience</h4>
      <div>
        <label className='sidebar-label-container'>
          <input type="radio" name="test" id="test" value="" onChange={handleChange}/>
          <span className='checkmark'></span>Any Experience
        </label>

        <InputField 
          handleChange={handleChange}
          value="Internship"
          title="Internship"
          name="test"
        />

        <InputField 
          handleChange={handleChange}
          value="Work Remotely"
          title="Work Remotely"
          name="test"
        />

      </div>
    </div>
  )
}

export default WorkExperience