import { combineReducers } from 'redux';

import todosReducer from './features/todos/todosSlice';
import filtersReducer from './features/filters/filtersSlice';

// This is basically what the combineReducers() function does
// export default function rootReducer(state = {}, action) {
//   return {
//     todos: todosReducer(state.todos, action),
//     filters: filtersReducer(state.filters, action)
//   };
// }

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filtersReducer
});

export default rootReducer;