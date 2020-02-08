import { ALL_PLANTS, FIND_PLANT, SUBMIT_COMMENT } from './types'

export const findPlant = (id) => {
  console.log("findPlant 1", id)
  return (dispatch) => {
    return dispatch({
      type: FIND_PLANT,
      payload: id
    });
  };
};

export const submitComment = (id, comment) => {
  console.log("hit submit", comment)
  return (dispatch) => {
    return dispatch({
      type: SUBMIT_COMMENT,
      id: id,
      payload: comment
    })
  }
}

export const fetchAllPlants = () => {
  return {
    type: ALL_PLANTS
  };
};
