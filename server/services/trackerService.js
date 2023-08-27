//* More for functions that controller will call like gettingPercentage
//* static calculations and getting 12 week window put in util
//* dates and stuff put in dateService
const db = require("../data/db");

const calculatePercentage = (totalWeekdays, ph, leaves, wfh) => {
    const officialOfficeDays = totalWeekdays - ph.length - leaves.length;
    const inOfficeDays = officialOfficeDays - wfh.length;
    const attendance = ((inOfficeDays / officialOfficeDays) * 100).toFixed(2);

    console.log(
        `Percentage: ${attendance}%, Official Office Days: ${officialOfficeDays}, inOfficeDays: ${inOfficeDays}, PH Days: ${ph.length}, Leave Days: ${leaves.length}, WFH Days: ${wfh.length}`
    );

    return attendance;
};

module.exports = {
    calculatePercentage,
};
