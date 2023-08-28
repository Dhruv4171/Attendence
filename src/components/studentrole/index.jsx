import React, { useEffect, useState } from 'react'
import { services } from '../../services'

const StudentRole = ({ sectionId, setSectionId }) => {

  const [sections, setSections] = useState([])

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
      <input list="sections" name="section" id="section"  value={sectionId} 
            onChange={(e) => setSectionId(e.target.value)} placeholder='---Select Section---' 
            required/>
      <datalist id="sections">
        {
          sections.map(sec => {
            return (<option value={sec.id}>
              {sec.name}
            </option>)
          })
        }
      </datalist>
    </div>
  )
}

export default StudentRole
