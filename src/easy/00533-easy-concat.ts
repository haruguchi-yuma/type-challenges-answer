type Concat<T extends any[], S extends any[]> = [...T, ...S]

type Result = Concat<[1], [2]>; // expected to be [1, 2]


/*
  ...型で型を展開できる
*/
