import { createStore } from 'redux';

// import  { todoReducer } from './reducers/todoReducer';

// import { profileReducer } from './reducers/profileReducer';

import  rootReducer  from './reducers';

export const store = createStore(rootReducer)