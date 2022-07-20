{
  type Fn = (a: number, b: string) => number

  type AppendArgument<Fn extends (...args: any[]) => any, A> = Fn extends (...args: infer R) => infer T ? (...args: [...R, A]) => T : never

  type Result = AppendArgument<Fn, boolean>
  // expected be (a: number, b: string, x: boolean) => number
}

/*
  任意の関数を表す方法として
　(...args: any[]) => unknown
　(...args: any) => any
としているものもあったが何がベストなのかはわからない
*/
