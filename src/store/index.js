import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import notesReducer from './reducers/notes';

const persistConfig = {
  key: 'notesReducer',
  storage: storage,
};

const pReducer = persistReducer(persistConfig, notesReducer);
// const middleware = applyMiddleware(thunk, logger);
const store = createStore(pReducer);
const persistor = persistStore(store);

export { persistor, store };