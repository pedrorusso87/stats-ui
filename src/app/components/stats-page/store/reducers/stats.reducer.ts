import * as fromStats from '../stats-actions';
import { TournamentState } from '../tournament.state';

const initialState: TournamentState = {
  tournamentList: null,
  getTournamentsPending: false,
  error: null
}

export function reducer(state = initialState, action: fromStats.TournamentActions) {
  switch(action.type) {
    case fromStats.GET_TOURNAMENTS: {
      return  {
        ...state,
        getTournamentsPending: true
      }
    }
  }
}