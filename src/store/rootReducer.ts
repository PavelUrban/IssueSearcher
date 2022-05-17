import { combineReducers } from 'redux';

import { STATE_FEATURES } from '@models/state';

import { reposSlice } from './repos';

export const rootReducer = combineReducers({
  [STATE_FEATURES.REPOS]: reposSlice.reducer,
});
