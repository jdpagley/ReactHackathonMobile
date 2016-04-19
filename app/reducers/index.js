import {combineReducers} from 'redux'
import {
  DISLIKE,
  LIKE,
  REMOVE_FROM_LIKES,
  REMOVE_FROM_DISLIKES,
  ADD_CATEGORY,
  REMOVE_CATEGORY,
  ADD_USER
} from '../actions'

/**
 * ********************
 * Start User Reducers
 */
function like(state = [], action){
  switch(action.type) {
    case LIKE:
      return [...state, action.payload.gif];
    case REMOVE_FROM_LIKES:
      return removeFromArray(state, action.payload) ;
    default:
      return state;
  }
}

function dislike(state = [], action) {
  switch(action.type) {
    case DISLIKE:
      return [...state, action.payload.gif];
    case REMOVE_FROM_DISLIKES:
      return removeFromArray(state, action.payload) ;
    default:
      return state;
  }
}

function userCategories(state = [], action) {
  console.log('userCategories: ', action);
  switch(action.type) {
    case ADD_CATEGORY:
      //If category is already in array just return array.
      return existsInArray(state, action.payload) ? 
        state : [...state, action.payload.category];
    case REMOVE_CATEGORY:
      return removeFromArray(state, action.payload.category) ;
    default:
      return state;
  }
}
function addUser(state = {}, action) {
  switch (action.type) {
    case 'ADD_USER':
      return Object.assign({}, state, {
        username: action.username
      });

    default:
        return state;
    }
}

function user(state = {name: 'React Hacker', liked: [], disliked: [], categories: []}, action) {
  switch(action.type) {
    case ADD_USER:
      return Object.assign({}, state, {
        username: action.username,
      });
    case LIKE:
    case REMOVE_FROM_LIKES:
      return Object.assign({}, state, {
        liked: like(state.liked, action)
      });
    case DISLIKE:
    case REMOVE_FROM_DISLIKES:
      return Object.assign({}, state, {
        disliked: dislike(state.disliked, action)
      });
    case ADD_CATEGORY:
    case REMOVE_CATEGORY:
      return Object.assign({}, state, {
        categories: userCategories(state.categories, action)
      });
    default: 
      return state;
  }
}

function existsInArray(array, item) {
  let index = array.indexOf(item);
  return index !== -1;
}

function removeFromArray(array, item) {
  let index = array.indexOf(item);
  array.splice(index, 1); 
  return array;
}

/**
 * End User Reducers
 * ********************
 */

/**
 * ********************
 * Start Gif Reducers
 */
function gifs(state = [], action) {
  return state;
}
/**
 * End User Reducers
 * ********************
 */

/**
 * ********************
 * Start Category Reducers
 */
function categories(state = [], action) {
  return state;
}
/**
 * End Category Reducers
 * ********************
 */

const rootReducer = combineReducers({
  user,
  gifs,
  categories
});

export default rootReducer
