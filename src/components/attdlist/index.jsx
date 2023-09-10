import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { services } from '../../services'; // Import the services
import Wrapper from './style';

const AttdList = () => {
    const [studentsInSection, setStudentsInSection] = useState([]);
    const [attendance, setAttendance] = useState([]);
    const [subjects, setSubjects] = useState([]); // State to store subjects

    const userSection = JSON.parse(window.localStorage.getItem("USERINFO")).user.sectionId;
    const userContact = JSON.parse(window.localStorage.getItem("USERINFO")).user.contact;

    useEffect(() => {
        axios.get('https://quizattendace.onrender.com/api/attendance/read')
            .then(res => {
                setAttendance(res.data);
            })
            .catch(error => {
                console.log('Error fetching student data:', error);
            });

        axios.get('https://quizattendace.onrender.com/api/user/read')
            .then(res => {
                const studentList = res.data.filter(user => user.role && user.role.toLowerCase() === 'student');
                setStudentsInSection(studentList.filter(student => student.sectionId === userSection));
            })
            .catch(error => {
                console.log('Error fetching student data:', error);
            });

        // Fetch subjects from the service and set the subjects state
        services.getSubjects()
            .then(response => {
                setSubjects(response.data);
            })
            .catch(error => {
                console.log('Error fetching subjects:', error);
            });
    }, [userSection]);

    const calculateSubjectAttendance = (subject) => {
        let totalPresents = 0;
        let totalAbsents = 0;

        if (attendance[userSection] && attendance[userSection][subject]) {
            const subjectAttendance = attendance[userSection][subject];
            const userIndex = studentsInSection.findIndex(student => student.contact === userContact);

            if (userIndex >= 0) {
                Object.keys(subjectAttendance).forEach(timestamp => {
                    if (subjectAttendance[timestamp][userIndex]) {
                        totalPresents++;
                    } else {
                        totalAbsents++;
                    }
                });
            }
        }

        return { totalPresents, totalAbsents };
    };

    return (
        <Wrapper>
            <div className="inner">
                    <h1>Your Attendance</h1>
                    {subjects.map((subject) => {
                        const presentCount = calculateSubjectAttendance(subject.id).totalPresents;
                        const absentCount = calculateSubjectAttendance(subject.id).totalAbsents;
                        const attendancePercent = (presentCount===0)? 0.00 : (presentCount / (presentCount + absentCount)) * 100;
                        return (
                            <div className='card' key={subject.id}>
                                <h2>{subject.name}</h2>
                                <p>Presents: {presentCount}</p>
                                <p>Absents: {absentCount}</p>
                                <p>Attendance: {attendancePercent.toFixed(2)}%</p>
                            </div>
                        );
                    })}
            </div>
        </Wrapper>
    );
};

export default AttdList;
