
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
            <div className="mb-4">
                <LegislatorInfo legislator={legislator} />
            </div>
            <div className="mb-4">
                <RatingsBar legislator={legislator} svgWidth={svgWidth} />
            </div>
            <div className="mb-4">
                <BillsChart legislator={legislator} svgWidth={svgWidth} />
            </div>
        </>
    )
};

