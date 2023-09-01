import axios from "axios";

const server = "http://localhost:8080";

export const getAttendance = async () => {
    const { data } = await axios.get(`${server}/tracker`);
    console.log(
        `apiCalls.js: got attendance from server \n ${JSON.stringify(data)}`
    );
    return data;
};
