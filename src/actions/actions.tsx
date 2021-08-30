export const setFavorite = (payload: any) => ({
    type: 'SET_FAVORITE',
    payload,
})

export const deleteFavorite = (payload: any) => ({
    type: 'DELETE_FAVORITE',
    payload,
})

export const loginRequest = (payload: any) => ({
    type: 'LOGIN_REQUEST',
    payload,
})
