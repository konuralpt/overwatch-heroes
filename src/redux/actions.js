import { SET_SELECTED_HERO } from "./actionTypes";

export const setSelectedHero = ({ hero }) => ({
  type: SET_SELECTED_HERO,
  payload: { selectedHero: hero }
});