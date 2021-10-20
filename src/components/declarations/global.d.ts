declare namespace NodeJS {
  interface Global {
    BUILD_VERSION: string;

    [prop: string]: any;
  }
}
