'use client'

import { useState } from 'react';
import MainMap from './MainMap/MainMap';
import Sidebar from './Sidebar/Sidebar';

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
        <div className="grid grid-cols-12 gap-4">
            <div className={`col-span-7 pt-10`}>
                <MainMap setLegislator={setLegislator} />
            </div>
            <div className="col-span-5">
                <Sidebar legislator={legislator} />
            </div>
        </div>
    );
}
