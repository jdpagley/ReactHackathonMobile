export const LIKE='ADD_LIKE'
export const REMOVE_FROM_LIKES='REMOVE_FROM_LIKES'
export const DISLIKE='ADD_DISLIKE'
export const REMOVE_FROM_DISLIKES='REMOVE_FROM_DISLIKES'
export const ADD_CATEGORY = 'ADD_CATEGORY'
export const REMOVE_CATEGORY = 'REMOVE_CATEGORY'
export const ADD_USER = 'ADD_USER'

export function dislike(gif) {
  return {
    type: DISLIKE,
    payload: {gif}
  };
}

export function like(gif) {
  return {
    type: LIKE,
    payload: {gif}
  };
}

export function removeFromLikes(gif) {
  return {
    type: REMOVE_FROM_LIKES,
    payload: {gif}
  };
}

export function removeFromDislikes(gif) {
  return {
    type: REMOVE_FROM_DISLIKES,
    payload: {gif}
  };
}

export function addCategory(category) {
  return {
    type: ADD_CATEGORY,
    payload: {category}
  };
}

export function removeCategory(category) {
  return {
    type: REMOVE_CATEGORY,
    payload: {category}
  };
}
export function addUser(username) {
  return {
    type: ADD_USER,
    username,
  }
}
