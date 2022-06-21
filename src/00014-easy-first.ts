type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type First<T extends any[]> = T extends [] ? never : T[0]

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3


type arr3 = []
type head = First<arr3> // never
/*
  最初こう考えていた
  type First<K extends (string | number)[]> = K[0]

  type arr3 = [1, 'hoge', true]みたいなものに対応できない

  また、この場合は[]空配列に対応していない
  type First<T extends any[]> = T[0]
*/
