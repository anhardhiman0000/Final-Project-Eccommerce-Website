import axios from 'axios';

const products = async () => {

    const { data } = await axios.get('http://localhost:10000/product/');

    console.log('in AXIOS ', data)
    return data;

}
const addproduct = async data => await axios.post('http://localhost:10000/product/addproduct', data);

const modifyproduct = async data => await axios.put(`http://localhost:10000/product/editproduct/${data._id}`, data);

const removeproduct = async data => await axios.delete(`http://localhost:10000/product/deleteproduct/${data._id}`);

export default { products, addproduct, modifyproduct, removeproduct };

