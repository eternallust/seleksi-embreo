import React, { Component } from 'react';
import { createStore, combineReducers} from 'redux'

import calculator from './reducers/calculator'

const reducer = combineReducers({
    calculator
})

const store = createStore(reducer)

export default store



