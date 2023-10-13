
import { ILegislator } from '@/app/types';
import { voteColorSpectrum } from '@/app/utilities';
import { barColors } from '@/app/utilities';

interface BillSidebarProps {
    legislator: ILegislator,
    svgWidth: number
}

export default function RatingsBar({ legislator, svgWidth }: BillSidebarProps) {

    const barH = 25;
    const buttonStates = ["Supported", "Opposed", "Absent"];

    const getVoteWidth = (voteNum: number) => {
        if (legislator.score == "N/A") return 0;

        let votes = 0;
        if (voteNum == 0) votes = +legislator.supported;
        else if (voteNum == 1) votes = +legislator.opposed;
        else votes = +legislator.absent;

        const totalW = 370;
        let num = (votes) / 100 * totalW;
        return num;
    }

    const getVoteX = (num: number) => {
        if (num == 0) return 0;
        else if (num == 1) return getVoteWidth(0)
        else return getVoteWidth(0) + getVoteWidth(1)
    }


    const getTextColor = () => {
        return voteColorSpectrum.getVoteHex(legislator.score);
    }


    return (
        <>
            <div className="min-h-[140px]">
                {legislator.name == "" &&
                    <div className="text-slate-300 text-2xl">
                        Hover over the map to get a rating...
                    </div>
                }

                {/* score text */}
                {legislator.score == "N/A" &&
                    <div className="text-slate-300">
                        <span className="text-2xl">Score N/A</span>
                    </div>
                }
                {legislator.score && legislator.score !== "N/A" &&
                    <div style={{ color: getTextColor() }}>
                        <span className="text-8xl">{legislator.score}</span>
                        <span className="text-6xl">%</span>
                    </div>
                }

                {/* score horizontal bar chart */}
                <svg width={svgWidth} height={barH}>
                    {barColors.map((col, index) =>
                        <rect
                            key={index}
                            x={getVoteX(index)}
                            y={0}
                            width={getVoteWidth(index)}
                            height={barH}
                            fill={col}
                        />
                    )}

                </svg>
            </div>

            {/* bar chart key */}
            {legislator.score &&
                <div className="flex flex-row">
                    {barColors.map((col, index) => {
                        return (
                            <div
                                className="btn btn-xs"
                                key={index}
                                style={{ backgroundColor: barColors[index], color: index == 2 ? "black" : "white" }}>
                                {buttonStates[index]}
                            </div>
                        )
                    })}
                </div>
            }
        </>
    )
};

