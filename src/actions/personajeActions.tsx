export const traerTodos = () => (dispatch: any) => {
    dispatch({
        type: 'GET_PERSONAJES',
        payload: [1,2,3]
    })
}
