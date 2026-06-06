// TODO: Import action type constants
// TODO: Define a FiltersState interface/type with a `category` field (string | null)
// TODO: Export a filtersReducer function (using `export function` or `export const`)
//       - Default state: { category: null }
//       - Handle SET_FILTER: return { category: action.payload }
//       - Handle CLEAR_FILTERS: return { category: null }
//       - Default: return state

import { CLEAR_FILTERS, SET_FILTER } from "./actionTypes";

export interface FiltersState {
  category: string | null;
}

const initialState: FiltersState = {
  category: null,
};

export type FiltersAction =
  | {
      type: typeof SET_FILTER;
      payload: string;
    }
  | {
      type: typeof CLEAR_FILTERS;
    };

export function filtersReducer(
  state = initialState,
  action: FiltersAction,
): FiltersState {
  switch (action.type) {
    case SET_FILTER:
      return {
        category: action.payload,
      };

    case CLEAR_FILTERS:
      return {
        category: null,
      };

    default:
      return state;
  }
}
