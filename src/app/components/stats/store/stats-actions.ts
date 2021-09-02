import { Action } from "@ngrx/store";

//Defining action types
export const LIST_TOURNAMENTS = '[TOURNAMENTS] List tournaments'

export class ListTournaments implements Action {
  readonly type = LIST_TOURNAMENTS;
}

export type TournamentActions = ListTournaments