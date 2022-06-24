type If<C extends boolean, T, F> = C extends true ? T : F;

type A = If<true, 'a', 'b'>; // expected to be 'a'
type B = If<false, 'a', 'b'>; // expected to be 'b'


/*
  C extends trueはCがtrueの部分型であればという意味。
  trueの部分型はtrueのみなので、つまりCがtrueであればというふうに言い換えられる。
*/
