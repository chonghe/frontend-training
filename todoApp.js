const todoApi = {
  todos: [
    {
      content: "write some code",
      isCompleted: false,
    },
    {
      content: "watch some movies",
      isCompleted: true,
    },
    {
      content: "listen some music",
      isCompleted: false,
    },
  ],
  getAllTodos: async function () {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          todos: this.todos,
        });
      }, 500);
    });
  },
  addTodo: async function (todo) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!todo || !todo.content) {
          reject({
            error: "content is empty !",
          });
        }
        this.todos.push(todo);
        console.log(this.todos);
        resolve({
          addTodo: "succeed",
        });
      }, 500);
    });
  },
  modTodo: async function (index) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          !Number.isInteger(index) ||
          index < 0 ||
          index >= this.todos.length
        ) {
          reject({
            error: "index is not valid !",
          });
        }

        this.todos[index].isCompleted = !this.todos[index].isCompleted;
        resolve({
          modTodo: "succeed",
        });
      }, 500);
    });
  },
  delTodo: async function (index) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          !Number.isInteger(index) ||
          index < 0 ||
          index >= this.todos.length
        ) {
          reject({ error: "index is not valid !" });
        }

        this.todos = [
          ...this.todos.slice(0, index),
          ...this.todos.slice(index + 1),
        ];
        resolve({ delTodo: "succeed" });
      }, 500);
    });
  },
};
