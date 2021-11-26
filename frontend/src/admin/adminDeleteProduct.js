import { useDispatch } from 'react-redux';
import { deleteProduct } from '../action/ProductAction';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

export function AdminDeleteProduct() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const hello = window.location.pathname.split('/');
        const _id = hello[hello.length - 1];

        console.log("Admin Delete Product is: ", _id);

        dispatch(deleteProduct({ _id }))
        navigate('/admin')

    }, [])
    return (
        null
    )
}