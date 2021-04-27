let initialState = {forum:[]}

export default function ForumReducer(state = initialState, action){
    switch(action.type){
        case 'forum/add':
            return{...state, forum:action.forum};
        default:
            return state;
    }
}