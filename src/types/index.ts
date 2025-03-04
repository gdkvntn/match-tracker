export enum StatusEnum {
  SCHEDULED = "Scheduled",
  ONGOING = "Ongoing",
  FINISHED = "Finished",
}

export interface IPlayer {
  username: string;
  kills: number;
}

export interface ITeam {
  name: string;
  players: IPlayer[];
  points: number;
  place: number;
  total_kills: number;
}

export interface IMatch {
  time: string;
  title: string;
  homeTeam: ITeam;
  awayTeam: ITeam;
  homeScore: number;
  awayScore: number;
  status: StatusEnum;
}

export interface IApiResponse {
  ok: boolean;
  data: {
    matches: IMatch[];
  };
}
