import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Sharepage/Footer/Footer';
// import { Outlet } from 'react-router-dom';
import Header from '../Sharepage/Header/Header';
import Topheader from '../Sharepage/Topheader/Topheader';


const Main = () => {
    return (
        <div>
            <Topheader></Topheader>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;