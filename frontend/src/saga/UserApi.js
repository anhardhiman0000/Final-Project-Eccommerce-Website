import axios from 'axios';

const adduser = async data=> await axios.get(`http://localhost:100000/user/specificproduct/${data.username}`);

export default {adduser};