import { ILegislator } from '@/app/types';
import * as React from 'react';

export interface ILegislatorInfoProps {
    legislator: ILegislator,
    isHouse: boolean
}



export default function LegislatorInfo({ legislator, isHouse }: ILegislatorInfoProps) {

    return (

        <div>
            {legislator.name ?
                <>
                    <h2><span className="italic text-">{isHouse ? "Rep." : "Sen."} </span>{legislator.name}</h2>

                    <div><span className="pr-1 text-gray-400">City: </span>{legislator.city}</div>
                    <div><span className="pr-1 text-gray-400">District: </span>{legislator.district}</div>
                    <div><span className="pr-1 text-gray-400">Phone: </span>{legislator.phone}</div>
                    <div><span className="pr-1 text-gray-400">Email: </span>{legislator.email}</div>
                </> :
                null
            }
        </div>
    );
}
