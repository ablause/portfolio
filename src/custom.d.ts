declare module '*.module.css' {
  const classes: { [key: string]: string }
  export default classes
}

declare module '*.jpg' {
  const value: string
  export default value;
}

declare module '*.jpeg' {
  const value: string
  export default value;
}

type ExtraProps<L, R> = R & Pick<L, Exclude<keyof L, keyof R>>