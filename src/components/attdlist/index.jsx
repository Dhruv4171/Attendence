import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AttdList = () => {
    const [studentsInSection, setStudentsInSection] = useState([]);
    const [attendance, setAttendance] = useState([]);
    const userSection = JSON.parse(window.localStorage.getItem("userinfo")).user.section;
    const userContact = JSON.parse(window.localStorage.getItem("userinfo")).user.contact;

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
                setStudentsInSection(studentList.filter(student => student.section === userSection));
            })
            .catch(error => {
                console.log('Error fetching student data:', error);
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
        <div>
            <h1>Your Attendance</h1>
            {Object.keys(attendance[userSection] || {}).map((subject, index) => (
                <div key={index}>
                    <h2>{subject}</h2>
                    <p>Total Presents: {calculateSubjectAttendance(subject).totalPresents}</p>
                    <p>Total Absents: {calculateSubjectAttendance(subject).totalAbsents}</p>
                </div>
            ))}
        </div>
    );
};

export default AttdList;
