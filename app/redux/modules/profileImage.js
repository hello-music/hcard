const SAVE_IMAGE = 'SAVE_IMAGE';

export function saveImage (imageUrl) {
  return {
    type: SAVE_IMAGE,
    imageUrl,
  };
}

export default function profileImage (state = {src: ''}, action) {
  switch (action.type) {
    case SAVE_IMAGE:
      return {...state, src: action.imageUrl};
    default :
      return state;
  }
}

