import React, { useEffect, useState } from 'react'
import { services } from '../../services'

const StudentRole = ({ section, setSection }) => {
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
      <input list="sections" name="section" id="section"/>
      <datalist id="sections" required value={section} onChange={(e) => setSection(e.target.value)}>
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
