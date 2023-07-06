import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PlatformCreate from "./pages/create/PlatformCreate";
import Page404 from "./pages/error/Page404";
import PlatformCreateStapTow from "./pages/create/step/PlatformCreateStapTow";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route index element={<App />} />
            <Route path="platforms/create" element={<PlatformCreate />} />
            <Route path="platforms/create/step/tow" element={<PlatformCreateStapTow />} />
            <Route path="*" element={<Page404 />} />
        </Routes>
    </BrowserRouter>
);

reportWebVitals();
