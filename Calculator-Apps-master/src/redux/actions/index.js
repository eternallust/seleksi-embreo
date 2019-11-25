export const pressButton = (value) => {
    return {
        type : "PRESS_BUTTON",
        value
    }
} 
export const pressEqual = () => {
    return {
        type : "PRESS_EQUALS",
    }
} 
export const pressReset = () => {
    return {
        type : "PRESS_RESET",
    }
} 
export const pressPlusMin = () => {
    return {
        type : "PRESS_PLUS_MIN",
    }
} 
export const pressPercentage = () => {
    return {
        type : "PRESS_PERCENTAGE",
    }
}
