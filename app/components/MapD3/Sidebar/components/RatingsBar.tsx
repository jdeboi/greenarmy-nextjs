
import { ILegislator } from '@/app/types';
import { getRatingColor } from '@/app/utilities/colors';
import { BAR_COLORS } from '@/app/utilities/colors';

const barColors = [BAR_COLORS.SUPPORTED, BAR_COLORS.OPPOSED, BAR_COLORS.ABSENT];
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

    return (
        <>
            <div className="min-h-[140px]">

                {/* score text */}
                {legislator.score == "N/A" &&
                    <div className="text-slate-300">
                        <span className="text-2xl">Score N/A</span>
                    </div>
                }
                {/* If the score is N/A */}
                {legislator.score && legislator.score !== "N/A" &&
                    <div style={{ color: getRatingColor(legislator.score) }}>
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
            {legislator.score && legislator.score !== "N/A" &&
                <div className="flex flex-row">
                    {barColors.map((col, index) => {
                        return (
                            <div
                                className="btn btn-xs"
                                key={index}
                                style={{
                                    backgroundColor: col,
                                    color: index == 2 ? "black" : "white",
                                    pointerEvents: "none"
                                }}>
                                {buttonStates[index]}
                            </div>
                        )
                    })}
                </div>
            }
        </>
    )
};

