type Includes<T extends readonly any[], S> = S extends T[number] ? true : false

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`


/*
  自分の解答はreadonlyがなかった

  このような解答が多かったがまだ理解できていない。
  type Includes<T extends readonly any[], U> = T extends [infer X, ...infer Y] ? (Equal<X, U>  extends true ? true : Includes<Y, U>) : false;
*/
