const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type TupleToObject<T extends readonly string[]> = {
  [key in T[number]]: key
}

type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

/*
  Tはstring[]型
  T[number]はタプルからvalueのユニオン型を作る
  'tesla', 'model 3', 'model X', 'model Y'
*/
