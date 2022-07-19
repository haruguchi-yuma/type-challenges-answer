{
  type ReplaceAll<
    S extends string,
    From extends string,
    To extends string
  > = From extends '' ? S : S extends `${infer Left}${infer From}${infer Right}` ? `${Left}${To}${ReplaceAll<Right, From, To>}` : S

  type replaced = ReplaceAll<'t y p e s', ' ', ''>; // expected to be 'types'
}

// 再帰呼び出しできるの知らなかった。
