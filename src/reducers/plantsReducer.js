import { ALL_PLANTS, FIND_PLANT, SUBMIT_COMMENT } from '../actions/types';

const initialState = {
  plants: [
      {
        type: 'succulent',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        favoriteBy: 'Adam',
        imageUrl: 'https://via.placeholder.com/300',
        id: 1,
        linkUrl: 'shop/1',
        likes: 5,
        comments: ["Pretty cool!", "Managed to keep it alive lol"]
      },
      {
        type: 'rose',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        favoriteBy: 'Ava',
        imageUrl: 'https://via.placeholder.com/300',
        id: 2,
        linkUrl: 'shop/2',
        likes: 10,
        comments: ["Nice!", "so pretty!"]
      },
      {
        type: 'peace-lilly',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        favoriteBy: 'Laura',
        imageUrl: 'https://via.placeholder.com/300',
        id: 3,
        linkUrl: 'shop/3',
        likes: 10,
        comments: ["Brings peace!"]
      },
      {
        type: 'orchid',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        favoriteBy: 'Ruth',
        imageUrl: 'https://via.placeholder.com/400',
        size: 'large',
        id: 4,
        linkUrl: 'shop/4',
        likes: 10,
        comments: ["Very bright", "It's great!"]
      },
      {
        type: 'hydrangae',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        favoriteBy: 'Barbara',
        imageUrl: 'https://via.placeholder.com/400',
        size: 'large',
        id: 5,
        linkUrl: 'shop/5',
        likes: 10,
        comments: ["Brings lots of energy", "takes some work, but fun!"]
      }
    ],
    selectedPlant: {}
};

const plantsReducer = (state = initialState, action) => {
  console.log(action.payload)
  switch (action.type) {

    case ALL_PLANTS:
    return { plants: this.state.plants }

    case FIND_PLANT:
    return {
      ...state,
      selectedPlant: state.plants.find(plant => parseInt(plant.id) === parseInt(action.payload) ? plant : null)
    }

    case SUBMIT_COMMENT:
    const updatedPlant = state.plants.find(plant => {
      if (parseInt(plant.id) === parseInt(parseInt(action.id))) {
        plant.comments = [ ...plant.comments, action.payload];
        return plant
      };
    });
    return {
      ...state,
      selectedPlant: updatedPlant
    }

    default:
    return state
  };
};

export default plantsReducer;
