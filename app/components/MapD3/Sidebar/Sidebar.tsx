
import { IPolitician } from '@/app/types';
import { voteColorSpectrum } from '@/app/utilities';

interface BillSidebarProps {
    politician: IPolitician
}

export default function VoteSlider({ politician }: BillSidebarProps) {

    const barH = 35;
    const barColors = ["#2ABD12", "#F00000", "#CF6"];
    const buttonStates = ["Supported", "Opposed", "Absent"]

    const getVoteWidth = (voteNum: number) => {
        if (politician.score == "N/A") return 0;

        let votes = 0;
        if (voteNum == 0) votes = +politician.supported;
        else if (voteNum == 1) votes = +politician.opposed;
        else votes = +politician.absent;

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
        return voteColorSpectrum.getVoteHex(politician.score);
    }

    const buttonStyle = {

    }


    return (
        <>

            <div className="min-h-[160px]">
                {/* score text */}
                {politician.score == "N/A" &&
                    <div style={{ color: "gray" }}>
                        <span className="text-3xl">Score N/A</span>
                    </div>
                }
                {politician.score && politician.score !== "N/A" &&
                    <div style={{ color: getTextColor() }}>
                        <span className="text-8xl">{politician.score}</span>
                        <span className="text-6xl">%</span>
                    </div>
                }

                {/* score horizontal bar chart */}
                <svg width={370} height={barH}>
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
            {politician.score &&
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

            {/* politician details */}
            <div>
                {politician.name ?
                    <>
                        <h2>{politician.name}</h2>
                        <div><span className="font-bold">City: </span>{politician.city}</div>
                        <div><span className="font-bold">District: </span>{politician.district}</div>
                        <div><span className="font-bold">Phone: </span>{politician.phone}</div>
                        <div><span className="font-bold">Email: </span>{politician.email}</div>
                    </> :
                    null
                }
            </div>
        </>
    )
};

