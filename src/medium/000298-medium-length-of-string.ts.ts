type LengthOfString<S extends string, A extends any[] = []> = S extends `${infer F}${infer R}` ? LengthOfString<R, [F, ...A]> : A['length']

type Size = LengthOfString<'banana'>
