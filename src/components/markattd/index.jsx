import React, { useEffect, useState } from 'react';
import { services } from '../../services';

const MarkAttd = () => {
    let sectionId = window.location.search.split('=')[1];
    let date = new Date();

    const [students, setStudents] = useState([]);
    const [currentStudentIndex, setCurrentStudentIndex] = useState(0);
    const [attendance , setAttendance ] = useState([])

    useEffect(() => {
        console.log(sectionId)
        services.user.read()
        .then(res => {
            setStudents(res.data.filter(user => user.role && user.role.toLowerCase() === 'student'));
        });
    }, []);

    const markPresent = (studentId) => {
        setAttendance([...attendance, true])
        setCurrentStudentIndex(prevIndex => prevIndex + 1);
    };

    const markAbsent = (studentId) => {
        setAttendance([...attendance, false]) 
        setCurrentStudentIndex(prevIndex => prevIndex + 1);
    };

    return (
        <div>
            {currentStudentIndex < students.length && (
                <div key={students[currentStudentIndex].id}>
                    {students[currentStudentIndex].name}
                    <form>
                        <input type="button" value="Present" onClick={() => markPresent(students[currentStudentIndex].id)} />
                        <input type="button" value="Absent" onClick={() => markAbsent(students[currentStudentIndex].id)} />
                    </form>
                </div>
            )}
        </div>
    );
};

export default MarkAttd;
