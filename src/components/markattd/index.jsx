import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import Wrapper from './style';

const MarkAttd = () => {
    let sectionId = new URLSearchParams(window.location.search).get('sectionId');
    let subjectId = new URLSearchParams(window.location.search).get('subjectId');

    const [students, setStudents] = useState([]);
    const [currentStudentIndex, setCurrentStudentIndex] = useState(0);
    const [attendance, setAttendance] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('https://quizattendace.onrender.com/api/user/read')
            .then(res => {
                const studentList = res.data.filter(user => user.role && user.role.toLowerCase() === 'student');
                const studentsInSection = studentList.filter(student => student.sectionId === sectionId);
                setStudents(studentsInSection);
                setAttendance(new Array(studentsInSection.length).fill(false));
            })
            .catch(error => {
                console.log('Error fetching student data:', error);
            });
    }, [sectionId]);

    const markAttendance = () => {
        axios.post('https://quizattendace.onrender.com/api/attendance/mark', {
            sectionId: sectionId,
            subjectId: subjectId,
            attendance
        })
            .then(res => {
                console.log('Attendance marked successfully:', res.data);
                alert("Attendance Marked Successfully!!")
                navigate('/facpanel')
            })
            .catch(error => {
                console.error('Error marking attendance:', error);
            });
    };

    const [studentsPresentCount, setStudentsPresentCount] = useState(0);
    const [studentsAbsentCount, setStudentsAbsentCount] = useState(0);

    useEffect(() => {
        const presentCount = attendance.filter(status => status).length;
        const absentCount = attendance.length - presentCount;
        setStudentsPresentCount(presentCount);
        setStudentsAbsentCount(absentCount);
    }, [attendance]);

    const toggleAttendance = (studentIndex, status) => {
        const updatedAttendance = [...attendance];
        updatedAttendance[studentIndex] = status;
        setAttendance(updatedAttendance);
        setCurrentStudentIndex(prevIndex => prevIndex + 1);
    };

    const currentStudent = students[currentStudentIndex];

    const retakeAttendance = () => {
        setAttendance(new Array(students.length).fill(false));
        setCurrentStudentIndex(0);
    };

    return (
        <Wrapper>
            <div className="inner">
                <div className="attendance-sheet">
                    {currentStudent && (
                        <div className="student-row" key={currentStudent.id}>
                            <div className="student-info">
                                <img src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' alt={currentStudent.name} />
                                <h2>{currentStudent.name}</h2>
                            </div>
                            <div className="attendance-buttons">
                                <button
                                    className={attendance[currentStudentIndex] ? "present" : ""}
                                    onClick={() => toggleAttendance(currentStudentIndex, true)}
                                >
                                    Present
                                </button>
                                <button
                                    className={!attendance[currentStudentIndex] ? "absent" : ""}
                                    onClick={() => toggleAttendance(currentStudentIndex, false)}
                                >
                                    Absent
                                </button>
                            </div>
                        </div>
                    )}
                    {currentStudentIndex === students.length && (
                        <div className='final-attendance'>
                            <div className='attendance-summary'>
                                <h3>Attendance Summary</h3>
                                <p>Students Present: {studentsPresentCount}</p>
                                <p>Students Absent : {studentsAbsentCount}</p>
                                <p>Attendance List : </p>
                                <ul>
                                    {students.map((student, index) => (
                                        <li key={student.id}>
                                            {student.name}: {attendance[index] ? "Present" : "Absent"}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='submitattd-buttons'>
                            <input type="button" value="Retake Attendance" className='retake-attendance' onClick={retakeAttendance}  />
                            <input type="button" value="Submit Attendance" className="mark-input" onClick={markAttendance} />
                            </div>
                        </div>


                    )}
                </div>
            </div>
        </Wrapper>
    );
};

export default MarkAttd;
