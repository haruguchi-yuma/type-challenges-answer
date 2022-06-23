type MyExclude<T, U> = T extends U ? never : T

type User = {
  name: string;
  age: number;
  country: string;
};

type UserWithoutAge = Pick<User, MyExclude<keyof User, 'age'>>


type NumberType = MyExclude<'foo' | 'bar' | 'baz' | 1 | 2, string>

/*
  // Conditional typesでUnion型の場合は分配法則が適用される

  T extends K ? never : T
-> T = (U1 | U2 | U3)とする
-> (U1 extends K ? never : U1) | (U2 extends K ? never : U2) | (U3 extends K ? never : U3)

  参考:https://www.pandanoir.info/entry/2020/04/25/222913
*/
