import React, { useEffect, useState } from "react";
import { getAttendance } from "../apiCalls";

const Temp = () => {
    const [attendance, setAttendance] = useState({});
    const getAttendanceData = async () => {
        const attendanceData = await getAttendance();
        setAttendance((attendance) => ({
            ...attendanceData,
        }));
    };

    useEffect(() => {
        getAttendanceData();
    }, []);

    return (
        <div>
            <p>Start: {attendance.start}</p>
            <p>End: {attendance.end}</p>
            <p>PH Days: {attendance.ph_no}</p>
            <p>Leave Days: {attendance.leaves_no}</p>
            <p>WFH Days: {attendance.wfh_no}</p>
            <p>
                Percentage: <b>{attendance.attendance}</b>
            </p>
        </div>
    );
};

export default Temp;
