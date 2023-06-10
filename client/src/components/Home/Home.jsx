import { useEffect } from 'react';
import Banner from './Banner/Banner'
import Category from './Category/Category'
import Products from '../Products/Products'
import { fetchData } from '../../utils/api';

const Home = () => {

    useEffect(()=>{
        getCategories();
    },[])

    const getCategories = () => {
        fetchData("/api/categories").then((res)=>{
            console.log(res)
        })
    }

    return (
    <>
    <main>
        <Banner/>
        <Category/>
        <Products/>
    </main>
    </>
        );
};

export default Home;
