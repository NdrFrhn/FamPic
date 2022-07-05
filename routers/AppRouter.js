import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Picture from '../components/Picture'
import Picture1 from '../components/Picture1'
import Picture2 from "../components/Picture2";
import Picture3 from "../components/Picture3";
import NotFoundPage from "../components/NotFound";
import Header from "../components/Header";

const AppRouter = () => (
    <BrowserRouter>
        <div className="container">
            <Header />
            <Routes>
                <Route path='/' exact={true} element={<Picture />} />
                <Route path='/London' element={<Picture1 />} />
                <Route path='/Venezia' element={<Picture2 />}/>
                <Route path='/Swansea' element={<Picture3 />} />
                <Route element={<NotFoundPage />}/>
            </Routes>
        </ div>
    </ BrowserRouter>
);

export default AppRouter;