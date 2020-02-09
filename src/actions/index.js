import { ALL_PLANTS, FIND_PLANT, SUBMIT_COMMENT, SUBMIT_LIKE } from './types'

export const findPlant = (id) => {
  return (dispatch) => {
    return dispatch({
      type: FIND_PLANT,
      payload: id
    });
  };
};

export const submitComment = (id, comment) => {
  return (dispatch) => {
    return dispatch({
      type: SUBMIT_COMMENT,
      id: id,
      payload: comment
    });
  };
};

export const submitLike = (id) => {
  return (dispatch) => {
    return dispatch({
      type: SUBMIT_LIKE,
      payload: id
    });
  };
};

export const fetchAllPlants = () => {
  return {
    type: ALL_PLANTS
  };
};
