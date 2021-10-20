// Globals
declare const BUILD_VERSION: string;

// File extensions
declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}

declare module '*.md' {
  export = string;
}

// TODO: Remove once typescript is updated to 3.5 or higher
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type Maybe<T> = T | null | undefined;

// https://stackoverflow.com/questions/49401866/all-possible-keys-of-an-union-type
type UnionKeys<T> = T extends any ? keyof T : never;
