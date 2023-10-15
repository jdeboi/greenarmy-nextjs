// components/BarChart.js
'use client'

import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import * as d3 from 'd3';



import { ILegislator } from '@/app/types';
import { getRatingColor } from '../../../utilities/colors';

type IDistricts = ({
  type: string;
  coordinates: number[][][];
} | {
  type: string;
  coordinates: number[][][][];
})[];

type ILegislators = {
  ID: string;
  Score: string;
  Grade: string;
  Description: string;
  First: string;
  Last: string;
  Party: string;
  District: string;
  City: string;
  Email: string;
  Phone: string;
  Chamber: string;
  Supported: string;
  Absent: string;
  Opposed: string;
  Picture: string;
  loadID: string;
}[];

interface MainMapProps {
  setLegislator: Dispatch<SetStateAction<ILegislator>>,
  districts: IDistricts,
  legislators: ILegislators,
}


export default function MainMap({ districts, legislators, setLegislator }: MainMapProps) {

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // new state
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const projection = d3.geoAlbers()
    .scale(7190)
    .translate([-253.6512, -708.433]);

  const pathGenerator = d3.geoPath().projection(projection);

  const getDistrictFillColor = (index: number) => {
    const scoreStr = getLegislator(index)?.Score;
    return getRatingColor(scoreStr);
  }

  const getLegislator = (districtIndex: number) => {
    return legislators.find((legis) => +legis.District == (districtIndex + 1));
  }

  const setLegislatorIndex = (index: number) => {
    const d = getLegislator(index);
    if (d) {
      setLegislator({
        name: `${d.First} ${d.Last}`,
        city: d.City,
        district: d.District,
        email: d.Email,
        phone: d.Phone,
        supported: d.Supported,
        opposed: d.Opposed,
        absent: d.Absent,
        score: d.Score
      })
    }
  }

  const handleMouseEnter = (index: number) => {
    if (clickedIndex !== null) return;
    setHoveredIndex(index);
    setLegislatorIndex(index);
  }

  const handleMouseLeave = (index: number) => {
    // prevent edge case where onMouseEnter() is called before leave?
    if (clickedIndex == null)
      setHoveredIndex(null);
  }

  const handleMouseDown = (index: number) => {
    if (index == clickedIndex)
      setClickedIndex(null);
    else {
      setClickedIndex(index);
      setHoveredIndex(index);
      setLegislatorIndex(index);
    }


  }

  useEffect(() => {
    setLegislatorIndex(0);
    setHoveredIndex(0);
  }, [])


  return (
    <>

      <svg width={"100%"} height={500}>
        <g className="districts gTransform">
          {districts.map((district, index) => {
            const pathD = pathGenerator(district as d3.GeoPermissibleObjects);
            if (!pathD) return null;
            return (
              <path
                d={pathD}
                key={index}
                fill={getDistrictFillColor(index)}
                opacity={index == hoveredIndex ? .5 : 1}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                onMouseDown={() => handleMouseDown(index)}
              />
            )
          })}
        </g>
      </svg>
    </>
  );
};
