const initialstate = { 
    screen: '', 
    history: [] 
}


const calculator = (state = initialstate, action) => {
    switch (action.type) {
        case "PRESS_BUTTON":
        return {
        ...state,
        screen: (state.screen + '' + action.value)
        }

    case "PRESS_EQUALS":
        const newState = { ...state }
        newState.screen = (eval(state.screen))
        return newState
    case "PRESS_RESET":
        return {
        ...state,
        screen: ''
    }
    case "PRESS_PLUS_MIN":
        return {
        ...state,
        screen: parseFloat(state.screen) * -1
    }
    case "PRESS_PERCENTAGE":
        return {
        ...state,
        screen: parseFloat(state.screen) * 0.01
    }
    default:
        return state
    }
}
export default calculator