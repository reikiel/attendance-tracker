const getAllPH = "SELECT * FROM PUBLIC_HOLIDAY";

const getDateRangePH = (start, end) =>
    `SELECT * FROM PUBLIC_HOLIDAY WHERE PH_DATE>='${start}' AND PH_DATE <='${end}'`;

const getDateRangeWFH = (start, end) =>
    `SELECT * FROM WFH WHERE WFH_DATE>='${start}' AND WFH_DATE <='${end}'`;

const getDateRangeLeaves = (start, end) =>
    `SELECT * FROM LEAVES WHERE LEAVE_DATE>='${start}' AND LEAVE_DATE <='${end}'`;

module.exports = {
    getAllPH,
    getDateRangePH,
    getDateRangeWFH,
    getDateRangeLeaves,
};
