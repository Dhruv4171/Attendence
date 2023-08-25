import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
const MarkAttd = () => {
    const { sectionId } = useParams();
    const { studentId } = useParams();
    let date = new Date();

    const [students, setStudents] = useState([]);
    const [currentStudentIndex, setCurrentStudentIndex] = useState(0);
    const [attendance , setAttendance ] = useState([])

    useEffect( () => {
        axios.get('https://quizattendace.onrender.com/api/user/read')
        .then((res) => {
          console.log(res.data);
          setStudents(res.data);
        })
        .catch((error) => {  
          console.log(error.message);
        });
      }, [])

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
