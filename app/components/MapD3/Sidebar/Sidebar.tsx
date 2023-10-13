
import { ILegislator } from '@/app/types';

import LegislatorInfo from './components/LegislatorInfo';
import RatingsBar from './components/RatingsBar';
import BillsChart from './components/BillsChart';


interface BillSidebarProps {
    legislator: ILegislator
}

export default function Sidebar({ legislator }: BillSidebarProps) {
    const svgWidth = 370;

    return (
        <>
            <LegislatorInfo legislator={legislator} />
            <br />
            <RatingsBar legislator={legislator} svgWidth={svgWidth} />
            <br />
            <BillsChart legislator={legislator} svgWidth={svgWidth} />
        </>
    )
};

