export default (state = [], action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return [ ...state, action.payload ]
        case "DELETE_ITEM":
            return state.filter(item => item !=)
        case "CHANGE_DONE":
        default:
            return state;
    }
}