import { createStore, } from 'redux';

// eslint-disable-next-line import/no-anonymous-default-export
export default (reducers) => {
  return createStore(reducers);
};
