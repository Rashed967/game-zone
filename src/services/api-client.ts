import axios, {CanceledError} from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: "1345bb59d86a4ad98576d649795dee9d"
    }
})

export {CanceledError} 