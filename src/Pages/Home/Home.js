import React from 'react';
import Banner from '../Banner/Banner';
import Bestsellingproducts from '../Bestsellingproducts/Bestsellingproducts';
import Iphone from '../Filtering/Phones/Iphones/Iphone';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Products from '../Products/Products';
import Reviews from '../Review/Reviews';
import Topproducts from '../Topproducts/Topproducts';




const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Products></Products>

            <Topproducts></Topproducts>
            <Reviews></Reviews>
            <Bestsellingproducts></Bestsellingproducts>
            {/* <Iphone></Iphone> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;