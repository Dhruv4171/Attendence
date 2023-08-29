import React, { useEffect, useState } from 'react'
import Wrapper from './style'
import { services } from '../../services'
import { useNavigate } from 'react-router'

const Facpanel = () => {
  const [sections, setSections] = useState([])
  const [filteredSections, setFilteredSections] = useState(sections)

  const navigate = useNavigate()

  useEffect(() => {
    services.getSections()
      .then(res => {
        setSections(res.data)
        setFilteredSections(res.data)
        
      })
  }, [])

  const filter = (e) => {
    setFilteredSections([...sections].filter(section => section.name.toLowerCase().startsWith(e.target.value.toLowerCase())))
  }

  const gotoSheet = (section) => {
    navigate(`/subject?sectionId=${section.id}`);
  }

  return (
    <Wrapper>
      <h1>Select Section</h1>
      <div className="inner">

        <input
          type="search"
          placeholder='Filter the sections here ...'
          onChange={filter}
        />

        <div className="sections">
          {
            filteredSections.map(section => <input type="button" key={section.id} className='section' value={section.name} onClick={(e) => gotoSheet(section)} />)
          }
        </div>
      </div>
    </Wrapper>
  )
}

export default Facpanel
