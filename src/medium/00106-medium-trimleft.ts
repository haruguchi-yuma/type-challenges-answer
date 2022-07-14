type Space = ' '| '\n' | '\t'
type TrimLeft<T extends string> = T extends `${Space}${infer Rest}` ? TrimLeft<Rest> : T

type trimed = TrimLeft<'  Hello World  '> // expected to be 'Hello World  '
