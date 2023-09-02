const getAllPH = "SELECT * FROM PUBLIC_HOLIDAY";

const getDateRangePH = (start, end) =>
    `SELECT * FROM PUBLIC_HOLIDAY WHERE PH_DATE>='${start}' AND PH_DATE <='${end}'`;

const getDateRangeWFH = (start, end) =>
    `SELECT * FROM WFH WHERE WFH_DATE>='${start}' AND WFH_DATE <='${end}'`;

const getDateRangeLeaves = (start, end) =>
    `SELECT * FROM LEAVES WHERE LEAVE_DATE>='${start}' AND LEAVE_DATE <='${end}'`;

const createPH = (ph_name, ph_date) =>
    `INSERT INTO PUBLIC_HOLIDAY (ph_name, ph_date) VALUES ('${ph_name}', '${ph_date}')`;
const createLeave = (leave_name, leave_date) =>
    `INSERT INTO LEAVES (leave_name, leave_date) VALUES ('${leave_name}', '${leave_date}')`;
const createWFH = (wfh_day, wfh_date) =>
    `INSERT INTO WFH (wfh_day, wfh_date) VALUES ('${wfh_day}', '${wfh_date}')`;

module.exports = {
    getAllPH,
    getDateRangePH,
    getDateRangeWFH,
    getDateRangeLeaves,
    createPH,
    createLeave,
    createWFH,
};
