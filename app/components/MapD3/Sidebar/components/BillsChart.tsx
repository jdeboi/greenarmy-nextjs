import { useEffect } from 'react';
import { ILegislator } from '@/app/types';
import { useState } from 'react';
import houseVotes from '../../data/houseVotes.json';
import senateVotes from '../../data/senateVotes.json';

import billsJson from '../../data/billsData.json';
const houseBills = billsJson.filter((bill) => !["v4", "v6", "v11"].includes(bill.Label))
const senateBills = billsJson.filter((bill) => !["v3", "v6"].includes(bill.Label))

import { getHouseBillLabel, getSenateBillLabel, getShadeColor, getVoteColor } from '@/app/utilities/colors';


interface IBillsChartProps {
    legislator: ILegislator,
    svgWidth: number,
    isHouse: boolean
}


interface IBillData {
    "Label": string;
    "Date": string;
    "Group": string;
    "Subject": string;
    "Number": string;
    "GA Position": string;
    "Notes": string;
}

const billW = 25;
const spacing = 10;


export default function BillsChart({ isHouse, legislator, svgWidth }: IBillsChartProps) {
    const numPerRow = Math.floor(svgWidth / (billW + spacing));

    const [billNotes, setBillNotes] = useState('');
    const [billSubject, setBillSubject] = useState('');
    const [billNumber, setBillNumber] = useState('');
    const [billHighlighted, setBillHighlighted] = useState<number | null>(null);
    const [billClicked, setBillClicked] = useState<number | null>(null);

    const [bills, setBills] = useState(isHouse ? houseBills : senateBills);
    const [votes, setVotes] = useState(isHouse ? houseVotes : senateVotes);

    useEffect(() => {
        setBills(isHouse ? houseBills : senateBills);
        setVotes(isHouse ? houseVotes : senateVotes);
    }, [isHouse]);

    useEffect(() => {
        const bill = bills[0];
        setBillNumber(bill.Number);
        setBillNotes(bill.Notes);
        setBillSubject(bill.Subject);
        setBillHighlighted(0);
    }, [])



    const getBillColor = (index: number) => {
        let district = legislator.district;
        let legislatorVotes = votes.find((vote) => vote.district == district);
       
        if (!legislatorVotes)
            return "black";

        const label = isHouse ? getHouseBillLabel(index) : getSenateBillLabel(index);
        const vote = legislatorVotes[label];

        let col = getShadeColor(getVoteColor(vote), 0); // -.40
        return col;
    }

    const getX = (index: number) => {
        return (index % numPerRow) * (billW + spacing);
    }

    const getY = (index: number) => {
        return Math.floor(index / numPerRow) * (billW + spacing);
    }

    const handleMouseEnter = (bill: IBillData, index: number) => {
        if (billClicked == null) {
            setBillNumber(bill.Number);
            setBillNotes(bill.Notes);
            setBillSubject(bill.Subject);
            setBillHighlighted(index);
        }
    }

    const handleMouseDown = (bill: IBillData, index: number) => {
        if (billClicked == index) {
            setBillHighlighted(null);
            setBillClicked(null);
        }
        else {
            setBillHighlighted(index);
            setBillClicked(index);
            setBillNumber(bill.Number);
            setBillNotes(bill.Notes);
            setBillSubject(bill.Subject);
        }

    }

    return (
        <>
            {legislator.name &&
                <>
                    <svg width={svgWidth} height={2 * (billW + 10)} >
                        {bills.map((bill, index) => {
                            return (
                                <rect
                                    fill={getBillColor(index)}
                                    stroke={index == billHighlighted ? "white" : "none"}
                                    x={getX(index)}
                                    y={getY(index)}
                                    width={billW}
                                    height={billW}
                                    key={index}
                                    onMouseEnter={() => handleMouseEnter(bill, index)}
                                    onMouseDown={() => handleMouseDown(bill, index)}
                                />
                            )
                        })}
                    </svg>

                    <div className="text-sm pt-2">
                        <div className="font-bold">{billSubject}</div>
                        <div className="italic">{billNumber}</div>
                        <div className="text-sm text-gray-400">{billNotes}</div>
                    </div>
                </>}
        </>
    );
}
