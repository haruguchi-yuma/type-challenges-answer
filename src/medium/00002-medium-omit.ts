interface Todo {
  title: string
  description: string
  completed: boolean
}

type MyOmit<T, U extends keyof T> = { [P in Exclude<keyof T, U>]: T[P]}

{
  type TodoPreview = MyOmit<Todo, 'description' | 'title'>

  const todo: TodoPreview = {
    completed: false,
  }
}

/*
  Exclude は TからUを除く
*/
