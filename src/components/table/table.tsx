import { FC } from "react";
import { IMatch, StatusEnum } from "../../types";
import crownIcon from "../../assets/svg/crown.svg";
import { cn } from "../../utils";

const Table: FC<{ matches: IMatch[] }> = ({ matches }) => {
  return (
    <div className="flex flex-col gap-3 ">
      {matches.map((match) => {
        return (
          <div className="flex justify-between bg-[#0B0E12] rounded-sm p-4 w-full">
            <div className="flex items-center gap-3.5">
              <img
                className="w-[48px] h-[48px]"
                src={crownIcon}
                alt="team-icon"
              />
              <p>{match.awayTeam.name}</p>
            </div>
            <div className="flex flex-col items-center gap-1 w-[92px]">
              <div>
                {match.awayScore} : {match.homeScore}
              </div>
              <div
                className={cn(
                  "flex justify-center items-center w-full px-0.5 py-1.5  rounded-sm",
                  {
                    "bg-[#43AD28]": match.status === StatusEnum.SCHEDULED,
                    "bg-[#EB0237]": match.status === StatusEnum.FINISHED,
                    "bg-[#EB6402]": match.status === StatusEnum.ONGOING,
                  }
                )}
              >
                <span className="text-xs">{match.status}</span>
              </div>
            </div>
            <div className="flex items-center gap-3.5">
              <p>{match.homeTeam.name}</p>
              <img
                className="w-[48px] h-[48px] "
                src={crownIcon}
                alt="team-icon"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Table;
