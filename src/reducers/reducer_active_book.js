// Reducers are only ever called when an action occurs and receive 2 arguments, 
// the current state and the action itself.
// State argument is nor application state, only the state this reducer is responsible for
export default function(state = null, action) {
    switch(action.type) {
        case 'BOOK_SELECTED':
        return action.payload;
    }
    // I don't care about this action, do nothing
    return state; // Always need return a non undefined value for state.
}