import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import App from '../App.js';
import Pricing from '../components/Pricing.component';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Routes>
                <Route path="/" element={<App />} exact={true} />
                <Route path="/pricing" element={<Pricing />} />
            </Routes>
        </div>
    </BrowserRouter>
);

export default AppRouter;