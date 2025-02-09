export type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export type Defined<T> = Exclude<T, undefined | null>;

export type ConstToUnion<T extends object> = T[keyof T];
