 import axios from "axios";

const URL_TASKS = "https://backtodoapp-production.up.railway.app/task";

export const getTask = async () => {
    try {
        const { data } = await axios.get(URL_TASKS);
        return data;
    } catch (error) {
        console.log(error);
    }
};
