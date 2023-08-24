import React, { useEffect, useState } from 'react'
import { services } from '../../services'

const StudentRole = ({section,setSection}) => {
  const [sections,setSections] = useState('')
  useEffect(() => {
    services.getSections()
        .then(response => {
    
            setSections(response.data);
        })
        .catch(error => {
            console.error('Error fetching sections:', error);
        });
}, []);
  return (
    <div>
  <select required value={section} onChange={(e)=>setSection(e.target.value)}>
      <option value='' selected disabled>--SelectYear--</option>
      {sections.map(section => <option value={section.id}>{section.name}</option>)}
  </select>
    </div>
  )
}

export default StudentRole
