import { types } from 'mobx-state-tree';

const TodoStore = types
  .model({
    todoArr: types.optional(types.array(types.string), ['123', '456']),
  })
  .views((self) => ({
    getValidArray() {
      return self.todoArr.length > 6;
    },
  }))
  .actions((self) => ({
    add(todo: string) {
      self.todoArr.push(todo);
    },
  }));
export default TodoStore;
