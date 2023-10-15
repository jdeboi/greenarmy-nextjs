'use client'

import { useState } from 'react';
import MainMap from './MainMap/MainMap';
import Sidebar from './Sidebar/Sidebar';


interface IMapD3Props {
    isHouse: boolean;
}

export default function MapD3({ isHouse }: IMapD3Props) {

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
                <MainMap
                    setLegislator={setLegislator}
                    isHouse={isHouse}
                />
            </div>
            <div className="md:col-span-5">
                <Sidebar
                    isHouse={isHouse}
                    legislator={legislator}
                />
            </div>
        </div>
    );
}
