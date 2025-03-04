import { Table } from "./components";
import errorIcon from "./assets/svg/error.svg";
import RefreshIcon from "./assets/svg/refresh.svg?react";
import { useQuery } from "@tanstack/react-query";
import { IApiResponse } from "./types";
import { cn } from "./utils";

const getMatches = async (): Promise<IApiResponse> => {
  const response = await fetch(
    "https://app.ftoyd.com/fronttemp-service/fronttemp"
  );

  return await response.json();
};

function App() {
  const {
    data: matchesData,
    isError,

    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["get-data"],
    queryFn: getMatches,
    retry: 1,
  });

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="font-tactic italic text-[32px]">Match Tracker</h1>
        <div className="flex gap-3">
          {isError && (
            <div className="w-[480px] h-14 p-4 bg-[#0f1318] rounded justify-center items-center gap-2.5 inline-flex overflow-hidden">
              <div className="relative">
                <img src={errorIcon} alt="" />
              </div>
              <div className="text-white text-lg font-medium">
                Ошибка: не удалось загрузить информацию
              </div>
            </div>
          )}

          <button
            onClick={() => refetch()}
            disabled={isFetching}
            className="group btn w-[204px] h-14 p-4 bg-[#eb0237] active:bg-[#A01131] disabled:bg-[#701328] rounded justify-center items-center gap-2.5 inline-flex overflow-hidden"
          >
            <div className="text-white text-lg font-semibold group-disabled:text-[#787878]  ">
              Обновить
            </div>
            <RefreshIcon
              className={cn("group-disabled:fill-[#787878] ", {
                "animate-spin-rotate": isFetching,
              })}
            />
          </button>
        </div>
      </div>
      <div className="mt-5">
        {matchesData && <Table matches={matchesData.data.matches} />}
      </div>
    </div>
  );
}

export default App;
