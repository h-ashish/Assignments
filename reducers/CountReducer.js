let initialState = {count:0, title:'default title', todo:'default todo'}
function CountReducer (state = initialState, action){
    console.log(action)
    console.log(state);
    switch (action.type){
        case 'counter/increase':
            console.log('came in action counter/increase');
                return {...state, count:state.count+1}
        case 'counter/decrease':
            console.log('came in action counter/decrease');
                return {...state, count:state.count-1}
        case 'counter/reset':
            console.log('came in action counter/reset');
                return {...state, count:0}
        case 'counter/square':
            console.log('came in action counter/square');
                return {...state, count: state.count*state.count};
        case 'counter/squareroot':
            console.log('came in action counter/squareroot');
                return {...state, count:Math.sqrt(state.count)};
        case 'counter/changeTitle':
            let newState ={...state,title: action.title};
            return newState;
        case 'todo/add':
            console.log('action to add todo')
            return{...state, todo:action.todo};
        default:
            return state;
    }
}
export default CountReducer;