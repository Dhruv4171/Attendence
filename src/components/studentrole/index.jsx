import React, { useEffect, useState } from 'react'
import { services } from '../../services'

const StudentRole = ({ sectionid, setSectionid }) => {
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
      <input list="sections" name="section" id="section" required value={sectionid} onChange={(e) => setSectionid(e.target.value)} placeholder='---Select Section---'/>
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
