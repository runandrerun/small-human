import { ALL_PLANTS, FIND_PLANT, SUBMIT_COMMENT, SUBMIT_LIKE } from '../actions/types';

const initialState = {
  plants: [
      {
        type: 'succulent',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        favoriteBy: 'Adam',
        imageUrl: 'https://res.cloudinary.com/dx34xrygi/image/upload/v1581275936/succulent.jpg',
        id: 1,
        linkUrl: 'shop/1',
        likes: 21,
        userLiked: false,
        comments: ["Pretty cool!", "Managed to keep it alive lol"]
      },
      {
        type: 'rose',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        favoriteBy: 'Ava',
        imageUrl: 'https://res.cloudinary.com/dx34xrygi/image/upload/v1581275936/roses.jpg',
        id: 2,
        linkUrl: 'shop/2',
        likes: 10,
        userLiked: false,
        comments: ["Nice!", "so pretty!"]
      },
      {
        type: 'lotus',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        favoriteBy: 'Laura',
        imageUrl: 'https://res.cloudinary.com/dx34xrygi/image/upload/v1581275818/lotus.jpg',
        id: 3,
        linkUrl: 'shop/3',
        likes: 11,
        userLiked: false,
        comments: ["Brings peace!"]
      },
      {
        type: 'orchid',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        favoriteBy: 'Ruth',
        imageUrl: 'https://res.cloudinary.com/dx34xrygi/image/upload/v1581275818/orchid.jpg',
        id: 4,
        linkUrl: 'shop/4',
        likes: 19,
        userLiked: false,
        comments: ["Very bright", "It's great!"]
      },
      {
        type: 'hydrangae',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        favoriteBy: 'Barbara',
        imageUrl: 'https://res.cloudinary.com/dx34xrygi/image/upload/v1581275707/hydrangae.jpg',
        id: 5,
        linkUrl: 'shop/5',
        likes: 10,
        userLiked: false,
        comments: ["Brings lots of energy", "takes some work, but fun!"]
      },
      {
        type: 'cactus',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        favoriteBy: 'Maria',
        imageUrl: 'https://res.cloudinary.com/dx34xrygi/image/upload/v1581275430/cactus.jpg',
        id: 6,
        linkUrl: 'shop/6',
        likes: 8,
        userLiked: false,
        comments: ["Simple! Not much work"]
      },
      {
        type: 'peonies',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        favoriteBy: 'Anthony',
        imageUrl: 'https://res.cloudinary.com/dx34xrygi/image/upload/v1581275682/peonies.jpg',
        size: 'large',
        id: 7,
        linkUrl: 'shop/7',
        likes: 15,
        userLiked: false,
        comments: []
      },
      {
        type: 'tulips',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        favoriteBy: 'Dan',
        imageUrl: 'https://res.cloudinary.com/dx34xrygi/image/upload/v1581275562/tulips.jpg',
        size: 'large',
        id: 8,
        linkUrl: 'shop/7',
        likes: 20,
        userLiked: false,
        comments: ["Tough for a beginner plant!"]
      }
    ],
    selectedPlant: {}
};

const plantsReducer = (state = initialState, action) => {

  switch (action.type) {

    case ALL_PLANTS:
    return { plants: this.state.plants }

    case FIND_PLANT:
    return {
      ...state,
      selectedPlant: state.plants.find(plant => parseInt(plant.id) === parseInt(action.payload) ? plant : null)
    }

    case SUBMIT_COMMENT:
    const updatedPlantComments = state.plants.find(plant => {
      if (parseInt(plant.id) === parseInt(parseInt(action.id))) {
        plant.comments = [ ...plant.comments, action.payload];
        return plant;
      };
    });
    return {
      ...state,
      selectedPlant: updatedPlantComments
    };

    case SUBMIT_LIKE:
    const updatedPlantLikes = state.plants.find(plant => {
      if (parseInt(plant.id) === parseInt(parseInt(action.payload))) {
        if (plant.userLiked === false) {
          plant.likes = plant.likes + 1;
          plant.userLiked = true;
          return plant;
        } else {
          plant.likes = plant.likes - 1;
          plant.userLiked = false;
          return plant;
        };
      };
    });
    return {
      ...state,
      selectedPlant: updatedPlantLikes
    };

    default:
    return state
  };
};

export default plantsReducer;
