import axios from "axios";

const instance = axios .create({
    baseURL: 'https://us-central1-clone-e655c.cloudfunctions.net/api'

    // 'http://localhost:5001/clone-e655c/us-central1/api'
    // 'http://localhost:5001/clone-e655c/us-central1/api' // THE API (cloud function) URL --> en local host 
});

export default instance;