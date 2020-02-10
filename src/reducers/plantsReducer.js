import { ALL_PLANTS, FIND_PLANT, SUBMIT_COMMENT, SUBMIT_LIKE, SUBMIT_COMMENT_LIKE } from '../actions/types';

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
        comments: [
          {
            id: 1,
            comment: "Pretty cool!",
            likes: 2,
            userLiked: false
          },
          {
            id: 2,
            comment: "Managed to keep it alive lol",
            likes: 3,
            userLiked: true
          }
        ]
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
        comments: [
          {
            id: 1,
            comment: "Nice!",
            likes: 5,
            userLiked: false
          },
          {
            id: 2,
            comment: "so pretty!",
            likes: 10,
            userLiked: false
          }
        ]
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
        comments: [
          {
            id: 1,
            comment: "Brings peace!",
            likes: 11,
            userLiked: true
          }
        ]
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
        comments: [
          {
            id: 1,
            comment: "Very bright",
            likes: 4,
            userLiked: false
          },
          {
            id: 2,
            comment: "It's great!",
            likes: 9,
            userLiked: true,
          }
        ]
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
        comments: [
          {
            id: 1,
            comment: "Brings lots of energy",
            likes: 7,
            userLiked: true,
          },
          {
            id: 2,
            comment: "takes some work, but fun!",
            likes: 4,
            userLiked: false,
          }
        ]
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
        comments: [
          {
            id: 1,
            comment: "Simple! Not much work",
            likes: 13,
            userLiked: true
          }
        ]
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
        linkUrl: 'shop/8',
        likes: 20,
        userLiked: false,
        comments: [
          {
            id: 1,
            comment:"Tough for a beginner plant!",
            likes: 15,
            userLiked: true,
          }
        ]
      },
      {
        type: 'monstera',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        favoriteBy: 'Kary',
        imageUrl: 'https://res.cloudinary.com/dx34xrygi/image/upload/v1581367129/monstera.jpg',
        id: 9,
        linkUrl: 'shop/9',
        likes: 7,
        userLiked: false,
        comments: [
          {
            id: 1,
            comment:"Tough for a beginner plant!",
            likes: 15,
            userLiked: true,
          }
        ]

      },
      {
        type: 'bonsai',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        favoriteBy: 'Peter',
        imageUrl: 'https://res.cloudinary.com/dx34xrygi/image/upload/v1581367129/bonsai.jpg',
        id: 10,
        linkUrl: 'shop/10',
        likes: 8,
        userLiked: false,
        comments: [
          {
            id: 1,
            comment:"Tough, but fun if dedicated!",
            likes: 15,
            userLiked: true,
          },
          {
            id: 1,
            comment:"Very satisfying, but requires a lot of work",
            likes: 12,
            userLiked: false,
          }
        ]
      },
      {
        type: 'sunflower',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        favoriteBy: 'Jenny',
        imageUrl: 'https://res.cloudinary.com/dx34xrygi/image/upload/v1581367129/sunflower.jpg',
        id: 11,
        linkUrl: 'shop/11',
        likes: 13,
        userLiked: false,
        comments: [
          {
            id: 1,
            comment:"Tough for a beginner plant!",
            likes: 15,
            userLiked: true,
          }
        ]
      },
      {
        type: 'weeping fig',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        favoriteBy: 'Richard',
        imageUrl: 'https://res.cloudinary.com/dx34xrygi/image/upload/v1581367510/weeping-fig.jpg',
        id: 12,
        linkUrl: 'shop/12',
        likes: 20,
        userLiked: true,
        comments: [
          {
            id: 1,
            comment:"Really love this one",
            likes: 3,
            userLiked: true,
          }
        ]
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
        plant.comments = [
          ...plant.comments,
          {
            id: plant.comments.length >= 1 ? plant.comments.length + 1 : 1,
            comment: action.payload,
            likes: 0,
            userLiked: false,
          }
        ];
        return plant;
      };
    });
    return {
      ...state,
      selectedPlant: updatedPlantComments
    };

    case SUBMIT_COMMENT_LIKE:
    const updatedPlantCommentLikes = state.plants.find(plant => {
      if (parseInt(plant.id) === parseInt(action.plantId)) {
        plant.comments.find(comment => {
          if (parseInt(comment.id) === parseInt(action.commentId)) {
            if (comment.userLiked === false) {
             comment.likes = comment.likes + 1;
             comment.userLiked = true;
            } else {
             comment.likes = comment.likes - 1;
             comment.userLiked = false;
            };
          };
        });
        return plant;
      };
    });
    return {
      ...state,
      selectedPlant: updatedPlantCommentLikes
    };

    case SUBMIT_LIKE:
    const updatedPlantLikes = state.plants.find(plant => {
      if (parseInt(plant.id) === parseInt(action.payload)) {
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
