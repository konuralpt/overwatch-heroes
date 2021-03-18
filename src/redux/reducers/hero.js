import { SET_SELECTED_HERO } from "../actionTypes";

const initialState = {
    selectedHero: {
      "id": 1,
      "name": "D.Va",
      "mediaSource": "dva",
      "role": "tank"
    },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_SELECTED_HERO: {
      const { selectedHero } = action.payload;
      return {
        ...state,
        selectedHero,
      };
    }
    default:
      return state;
  }
}
