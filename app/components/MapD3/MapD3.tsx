'use client'

import { useState, useEffect } from 'react';
import MainMap from './MainMap/MainMap';
import Sidebar from './Sidebar/Sidebar';

import houseLegislatorsJson from './data/houseLegislators.json';
import senateLegislatorsJson from './data/senateLegislators.json';
import districtsJson from './data/districts.json';

const NUM_HOUSE_DISTRICTS = 105;
const NUM_SENATE_DISTRICTS = 39;
const houseDistricts = districtsJson.geometries.slice(0, NUM_HOUSE_DISTRICTS);
const senateDistricts = districtsJson.geometries.slice(NUM_HOUSE_DISTRICTS, NUM_HOUSE_DISTRICTS+NUM_SENATE_DISTRICTS);

interface IMapD3Props {
    isHouse: boolean;
}

export default function MapD3({ isHouse }: IMapD3Props) {

    const [districts, setDistricts] = useState(isHouse ? houseDistricts : senateDistricts);
    const [legislators, setLegislators] = useState(isHouse ? houseLegislatorsJson : senateLegislatorsJson);
 
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

    useEffect(() => {
        if (isHouse) {
            setDistricts(houseDistricts);
            setLegislators(houseLegislatorsJson);
        }
        else {
            setDistricts(senateDistricts);
            setLegislators(senateLegislatorsJson);
        }
    }, [isHouse])

    return (
        <div className="grid md:grid-cols-12 md:gap-4">
            <div className={`md:col-span-7 pt-10`}>
                <MainMap
                    setLegislator={setLegislator}
                    legislators={legislators}
                    districts={districts}
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
