import { createStore } from 'redux';
import filterName from '../reducers/filterName'

const initialState = {
    filterName: "",

};

const store = createStore(filterName,initialState);

export default store;
