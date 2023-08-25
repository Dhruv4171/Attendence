import React, { useEffect, useState } from 'react'
import { services } from '../../services'
import { useNavigate } from 'react-router'
import { Wrapper } from './style'

const Subject = () => {
    const [subjects, setSubjects] = useState([])
    const [filteredSubjects, setfilteredSubjects] = useState(subjects)

    const sectionId = new URLSearchParams(window.location.search).get('sectionId');

    const navigate = useNavigate()
    useEffect(() => {
        services.getSubjects()
            .then(res => {
                setSubjects(res.data)
                setfilteredSubjects(res.data)
            })
    }, [])
    const filter = (e) => {
        setfilteredSubjects([...subjects].filter(subject => subject.name.toLowerCase().startsWith(e.target.value.toLowerCase())))
    }

    const gotoSheet = (subject) => {
        navigate(`/markattd?sectionId=${sectionId}&subjectId=${subject.id}`)
    }

    return (
        <Wrapper>
            <h1>Select Subject</h1>
            <div className="inner">

                <input
                    type="search"
                    placeholder='Filter the subjects here ...'
                    onChange={filter}
                />

                <div className="subjects">
                    {
                        filteredSubjects.map(subject => <input type="button" key={subject.id} className='subject' value={subject.name} onClick={e => gotoSheet(subject)} />)
                    }
                </div>
            </div>
        </Wrapper>
    )
}

export default Subject;