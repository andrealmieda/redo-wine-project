import { createStore } from 'redux';

const createReduxStore = (initialState) => {
    const reducers = () => {

    };

    const store = createStore(reducers, initialState);

    return store;
};


export default createReduxStore;
