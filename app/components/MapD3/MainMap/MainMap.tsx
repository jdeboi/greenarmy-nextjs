// components/BarChart.js
'use client'

import { useState, Dispatch, SetStateAction } from 'react';
import * as d3 from 'd3';

import legislatorsJson from './data/legislators.json';
import districtsJson from './data/districts.json';


import { IPolitician } from '@/app/types';
import { voteColorSpectrum } from '../../../utilities';

interface MainMapProps {
  setPolitician: Dispatch<SetStateAction<IPolitician>>,
}

const numHouseDistricts = 105;
const houseDistricts = districtsJson.geometries.slice(0, numHouseDistricts);

const MainMap = ({ setPolitician }: MainMapProps) => {

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // new state

  const projection = d3.geoAlbers()
    .scale(7190)
    .translate([-253.6512, -708.433]);

  const pathGenerator = d3.geoPath()
    .projection(projection);

  const getFillColor = (index: number) => {
    const scoreStr = legislatorsJson[index].Score
    if (scoreStr == "N/A")
      return "gray";
    let score = parseInt(scoreStr) || 0;
    return voteColorSpectrum.getVoteHex(score);
  }

  const handleMouseEnter = (index: number) => {
    const d = legislatorsJson[index];
    setPolitician({
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

    setHoveredIndex(index);
  }

  const handleMouseLeave = (index: number) => {
    // prevent edge case where onMouseEnter() is called before leave?
    if (hoveredIndex == index)
      setHoveredIndex(null);
  }

  return (
    <>

      <svg width={"100%"} height={500}>
        <g className="houseDistricts gTransform">
          {houseDistricts.map((district, index) => {
            return (
              <path
                d={pathGenerator(district)}
                key={index}
                fill={getFillColor(index)}
                opacity={index == hoveredIndex ? .5 : 1}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              />
            )
          })}
        </g>
      </svg>
    </>
  );
};

export default MainMap;

