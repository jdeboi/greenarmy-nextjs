'use client'

import { useState } from 'react';
import MainMap from './components/MapD3/MainMap/MainMap';
import Sidebar from './components/MapD3/Sidebar/Sidebar';

export default function MapD3() {

    const [legislator, setLegislator] = useState({
        name: "",
        district: "",
        city: "",
        email: "",
        phone: "",
        supported: "",
        opposed: "",
        absent: "",
        score: ""
    });

    return (
        <div className="grid md:grid-cols-12 md:gap-4">
            <div className={`md:col-span-7 pt-10`}>
                <MainMap setLegislator={setLegislator} />
            </div>
            <div className="md:col-span-5">
                <Sidebar legislator={legislator} />
            </div>
        </div>
    );
}
