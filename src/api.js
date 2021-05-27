import axios from 'axios';
const URL = 'https://reqres.in/api/users?page=1'

export const GetUser = async () => {
    try {
        const res = await axios.get(`${URL}`)
        return res;
    }
    catch (error) {
        console.log(error.message);
        throw error;
    }
}