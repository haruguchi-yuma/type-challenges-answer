type Replace<
  S extends string,
  From extends string,
  To extends string
> = From extends '' ? S : S extends `${infer F}${From}${infer L}` ? `${F}${To}${L}` : S

type replaced = Replace<'types are fun!', 'fun', 'awesome'>; // expected to be 'types are awesome!'

/* 最初に考えたもの
  type Replace<S extends string, From extends string, To extends string> = S extends `${infer F}${From}${infer L}` ? `${F}${To}${L}` : S
  模範解答を見るとFromが空文字列の時の処理が必要そうだった。
*/
