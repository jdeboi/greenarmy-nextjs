
import { ILegislator } from '@/app/types';

import LegislatorInfo from './components/LegislatorInfo';
import RatingsBar from './components/RatingsBar';
import BillsChart from './components/BillsChart';


interface BillSidebarProps {
    legislator: ILegislator;
    isHouse: boolean;
}

const svgWidth = 370;

export default function Sidebar({ isHouse,legislator }: BillSidebarProps) {


    return (
        <>
            <div className="mb-4">
                <LegislatorInfo isHouse={isHouse} legislator={legislator} />
            </div>
            <div className="mb-4">
                <RatingsBar legislator={legislator} svgWidth={svgWidth} />
            </div>
            <div className="mb-4">
                <BillsChart
                    legislator={legislator}
                    isHouse={isHouse}
                    svgWidth={svgWidth}
                />
            </div>
        </>
    )
};

