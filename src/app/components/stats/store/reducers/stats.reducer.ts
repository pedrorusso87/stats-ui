import * as fromStats from '../stats-actions';
import { Tournament } from "../models/tournament.model";

const initialState: Tournament[] = [{
  name: 'Tournament 1'
},
{
  name: 'Tournament 2'
}]

export function reducer(state = initialState, action: fromStats.ListTournaments) {
  switch(action.type) {
    case fromStats.LIST_TOURNAMENTS: {
      return state
    }
  }
}