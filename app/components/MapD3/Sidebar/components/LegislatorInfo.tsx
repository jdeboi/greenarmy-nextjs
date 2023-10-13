import { ILegislator } from '@/app/types';
import * as React from 'react';

export interface ILegislatorInfoProps {
    legislator: ILegislator
}

export default function LegislatorInfo({ legislator }: ILegislatorInfoProps) {
    return (

        <div>
            {legislator.name ?
                <>
                    <h2>{legislator.name}</h2>
                    <div><span className="font-bold">City: </span>{legislator.city}</div>
                    <div><span className="font-bold">District: </span>{legislator.district}</div>
                    <div><span className="font-bold">Phone: </span>{legislator.phone}</div>
                    <div><span className="font-bold">Email: </span>{legislator.email}</div>
                </> :
                null
            }
        </div>
    );
}
