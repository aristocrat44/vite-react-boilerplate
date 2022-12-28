// eslint-disable-next-line import/named
import { Instance, types } from 'mobx-state-tree';
import { createContext, useContext } from 'react';
import TodoStore from './TodoStore/index';

const Store = types.model({
  todo_: types.optional(TodoStore, {}),
});

export default Store;

export type StoreInstance = Instance<typeof Store>;

export const StoreContext = createContext({} as StoreInstance);

export const useStore = () => useContext(StoreContext);
