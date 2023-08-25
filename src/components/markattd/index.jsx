import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

const MarkAttd = () => {
    let sectionId = new URLSearchParams(window.location.search).get('sectionId');
    let subjectId = new URLSearchParams(window.location.search).get('subjectId');

    // let date = new Date();

    const [students, setStudents] = useState([]);
    const [currentStudentIndex, setCurrentStudentIndex] = useState(0);
    const [attendance, setAttendance] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('https://quizattendace.onrender.com/api/user/read')
            .then(res => {
                console.log(res.data)
                const studentList = res.data.filter(user => user.role && user.role.toLowerCase() === 'student');
                const studentsInSection = studentList.filter(student => student.section == sectionId);
                setStudents(studentsInSection);
                setAttendance(new Array(studentList.length).fill(false)); // Initialize attendance array
                
            })
            .catch(error => {
                console.log('Error fetching student data:', error);
            });
    }, []);
    
    const markAttendance = () => {
        console.log(students)
        console.log(sectionId)
        console.log(subjectId)
        console.log(attendance)
        axios.post('https://quizattendace.onrender.com/api/attendance/mark', {
            sectionId: sectionId,
            subjectId: subjectId,
            attendance
        })
        .then(res => {
                console.log('Attendance marked successfully:', res.data);
                alert("Attendance Marked Successfully!!")
                navigate('/facpanel')
                // You can perform any additional actions after marking attendance
        })
        .catch(error => {
                console.error('Error marking attendance:', error);
        });
    };

    const toggleAttendance = (studentIndex, status) => {
        const updatedAttendance = [...attendance];
        updatedAttendance[studentIndex] = status;
        setAttendance(updatedAttendance);
        setCurrentStudentIndex(prevIndex => prevIndex + 1);
    };
    const currentStudent = students[currentStudentIndex];
    return (
        <div className="attendance-sheet">
            {currentStudent && (
                <div className="student-row" key={currentStudent.id}>
                    <div className="student-info">
                        <img src={currentStudent.photoUrl} alt={currentStudent.name} />
                        <p>{currentStudent.name}</p>
                    </div>
                    <div className="attendance-buttons">
                        <button
                            className={attendance[currentStudentIndex] === true ? "present" : ""}
                            onClick={() => toggleAttendance(currentStudentIndex, true)}
                        >
                            Present
                        </button>
                        <button
                            className={attendance[currentStudentIndex] === false ? "absent" : ""}
                            onClick={() => toggleAttendance(currentStudentIndex, false)}
                        >
                            Absent
                        </button>
                    </div>
                </div>
            )}
            {currentStudentIndex === students.length && (
                <button className="mark-button" onClick={markAttendance}>Submit Attendance</button>
            )}
        </div>
    );
};

export default MarkAttd;
