
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model BLOG
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type BLOG = $Result.DefaultSelection<Prisma.$BLOGPayload>
/**
 * Model ENGLISH
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type ENGLISH = $Result.DefaultSelection<Prisma.$ENGLISHPayload>
/**
 * Model VISIT_RECORDER
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type VISIT_RECORDER = $Result.DefaultSelection<Prisma.$VISIT_RECORDERPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more BLOGS
 * const bLOGS = await prisma.bLOG.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more BLOGS
   * const bLOGS = await prisma.bLOG.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.bLOG`: Exposes CRUD operations for the **BLOG** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BLOGS
    * const bLOGS = await prisma.bLOG.findMany()
    * ```
    */
  get bLOG(): Prisma.BLOGDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eNGLISH`: Exposes CRUD operations for the **ENGLISH** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ENGLISHES
    * const eNGLISHES = await prisma.eNGLISH.findMany()
    * ```
    */
  get eNGLISH(): Prisma.ENGLISHDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vISIT_RECORDER`: Exposes CRUD operations for the **VISIT_RECORDER** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VISIT_RECORDERS
    * const vISIT_RECORDERS = await prisma.vISIT_RECORDER.findMany()
    * ```
    */
  get vISIT_RECORDER(): Prisma.VISIT_RECORDERDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    BLOG: 'BLOG',
    ENGLISH: 'ENGLISH',
    VISIT_RECORDER: 'VISIT_RECORDER'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "bLOG" | "eNGLISH" | "vISIT_RECORDER"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      BLOG: {
        payload: Prisma.$BLOGPayload<ExtArgs>
        fields: Prisma.BLOGFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BLOGFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BLOGPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BLOGFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BLOGPayload>
          }
          findFirst: {
            args: Prisma.BLOGFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BLOGPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BLOGFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BLOGPayload>
          }
          findMany: {
            args: Prisma.BLOGFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BLOGPayload>[]
          }
          create: {
            args: Prisma.BLOGCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BLOGPayload>
          }
          createMany: {
            args: Prisma.BLOGCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BLOGDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BLOGPayload>
          }
          update: {
            args: Prisma.BLOGUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BLOGPayload>
          }
          deleteMany: {
            args: Prisma.BLOGDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BLOGUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BLOGUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BLOGPayload>
          }
          aggregate: {
            args: Prisma.BLOGAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBLOG>
          }
          groupBy: {
            args: Prisma.BLOGGroupByArgs<ExtArgs>
            result: $Utils.Optional<BLOGGroupByOutputType>[]
          }
          count: {
            args: Prisma.BLOGCountArgs<ExtArgs>
            result: $Utils.Optional<BLOGCountAggregateOutputType> | number
          }
        }
      }
      ENGLISH: {
        payload: Prisma.$ENGLISHPayload<ExtArgs>
        fields: Prisma.ENGLISHFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ENGLISHFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ENGLISHPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ENGLISHFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ENGLISHPayload>
          }
          findFirst: {
            args: Prisma.ENGLISHFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ENGLISHPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ENGLISHFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ENGLISHPayload>
          }
          findMany: {
            args: Prisma.ENGLISHFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ENGLISHPayload>[]
          }
          create: {
            args: Prisma.ENGLISHCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ENGLISHPayload>
          }
          createMany: {
            args: Prisma.ENGLISHCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ENGLISHDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ENGLISHPayload>
          }
          update: {
            args: Prisma.ENGLISHUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ENGLISHPayload>
          }
          deleteMany: {
            args: Prisma.ENGLISHDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ENGLISHUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ENGLISHUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ENGLISHPayload>
          }
          aggregate: {
            args: Prisma.ENGLISHAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateENGLISH>
          }
          groupBy: {
            args: Prisma.ENGLISHGroupByArgs<ExtArgs>
            result: $Utils.Optional<ENGLISHGroupByOutputType>[]
          }
          count: {
            args: Prisma.ENGLISHCountArgs<ExtArgs>
            result: $Utils.Optional<ENGLISHCountAggregateOutputType> | number
          }
        }
      }
      VISIT_RECORDER: {
        payload: Prisma.$VISIT_RECORDERPayload<ExtArgs>
        fields: Prisma.VISIT_RECORDERFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VISIT_RECORDERFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VISIT_RECORDERPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VISIT_RECORDERFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VISIT_RECORDERPayload>
          }
          findFirst: {
            args: Prisma.VISIT_RECORDERFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VISIT_RECORDERPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VISIT_RECORDERFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VISIT_RECORDERPayload>
          }
          findMany: {
            args: Prisma.VISIT_RECORDERFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VISIT_RECORDERPayload>[]
          }
          create: {
            args: Prisma.VISIT_RECORDERCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VISIT_RECORDERPayload>
          }
          createMany: {
            args: Prisma.VISIT_RECORDERCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VISIT_RECORDERDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VISIT_RECORDERPayload>
          }
          update: {
            args: Prisma.VISIT_RECORDERUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VISIT_RECORDERPayload>
          }
          deleteMany: {
            args: Prisma.VISIT_RECORDERDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VISIT_RECORDERUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VISIT_RECORDERUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VISIT_RECORDERPayload>
          }
          aggregate: {
            args: Prisma.VISIT_RECORDERAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVISIT_RECORDER>
          }
          groupBy: {
            args: Prisma.VISIT_RECORDERGroupByArgs<ExtArgs>
            result: $Utils.Optional<VISIT_RECORDERGroupByOutputType>[]
          }
          count: {
            args: Prisma.VISIT_RECORDERCountArgs<ExtArgs>
            result: $Utils.Optional<VISIT_RECORDERCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    bLOG?: BLOGOmit
    eNGLISH?: ENGLISHOmit
    vISIT_RECORDER?: VISIT_RECORDEROmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model BLOG
   */

  export type AggregateBLOG = {
    _count: BLOGCountAggregateOutputType | null
    _avg: BLOGAvgAggregateOutputType | null
    _sum: BLOGSumAggregateOutputType | null
    _min: BLOGMinAggregateOutputType | null
    _max: BLOGMaxAggregateOutputType | null
  }

  export type BLOGAvgAggregateOutputType = {
    ID: number | null
  }

  export type BLOGSumAggregateOutputType = {
    ID: number | null
  }

  export type BLOGMinAggregateOutputType = {
    ID: number | null
    BLOG_CREATE_TIME: Date | null
    BLOG_UPDATE_TIME: Date | null
    BLOG_TITLE: string | null
    BLOG_CONTENT: string | null
    IS_DELETE: string | null
    BLOG_TAGS: string | null
  }

  export type BLOGMaxAggregateOutputType = {
    ID: number | null
    BLOG_CREATE_TIME: Date | null
    BLOG_UPDATE_TIME: Date | null
    BLOG_TITLE: string | null
    BLOG_CONTENT: string | null
    IS_DELETE: string | null
    BLOG_TAGS: string | null
  }

  export type BLOGCountAggregateOutputType = {
    ID: number
    BLOG_CREATE_TIME: number
    BLOG_UPDATE_TIME: number
    BLOG_TITLE: number
    BLOG_CONTENT: number
    IS_DELETE: number
    BLOG_TAGS: number
    _all: number
  }


  export type BLOGAvgAggregateInputType = {
    ID?: true
  }

  export type BLOGSumAggregateInputType = {
    ID?: true
  }

  export type BLOGMinAggregateInputType = {
    ID?: true
    BLOG_CREATE_TIME?: true
    BLOG_UPDATE_TIME?: true
    BLOG_TITLE?: true
    BLOG_CONTENT?: true
    IS_DELETE?: true
    BLOG_TAGS?: true
  }

  export type BLOGMaxAggregateInputType = {
    ID?: true
    BLOG_CREATE_TIME?: true
    BLOG_UPDATE_TIME?: true
    BLOG_TITLE?: true
    BLOG_CONTENT?: true
    IS_DELETE?: true
    BLOG_TAGS?: true
  }

  export type BLOGCountAggregateInputType = {
    ID?: true
    BLOG_CREATE_TIME?: true
    BLOG_UPDATE_TIME?: true
    BLOG_TITLE?: true
    BLOG_CONTENT?: true
    IS_DELETE?: true
    BLOG_TAGS?: true
    _all?: true
  }

  export type BLOGAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BLOG to aggregate.
     */
    where?: BLOGWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BLOGS to fetch.
     */
    orderBy?: BLOGOrderByWithRelationInput | BLOGOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BLOGWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BLOGS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BLOGS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BLOGS
    **/
    _count?: true | BLOGCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BLOGAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BLOGSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BLOGMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BLOGMaxAggregateInputType
  }

  export type GetBLOGAggregateType<T extends BLOGAggregateArgs> = {
        [P in keyof T & keyof AggregateBLOG]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBLOG[P]>
      : GetScalarType<T[P], AggregateBLOG[P]>
  }




  export type BLOGGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BLOGWhereInput
    orderBy?: BLOGOrderByWithAggregationInput | BLOGOrderByWithAggregationInput[]
    by: BLOGScalarFieldEnum[] | BLOGScalarFieldEnum
    having?: BLOGScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BLOGCountAggregateInputType | true
    _avg?: BLOGAvgAggregateInputType
    _sum?: BLOGSumAggregateInputType
    _min?: BLOGMinAggregateInputType
    _max?: BLOGMaxAggregateInputType
  }

  export type BLOGGroupByOutputType = {
    ID: number
    BLOG_CREATE_TIME: Date | null
    BLOG_UPDATE_TIME: Date | null
    BLOG_TITLE: string | null
    BLOG_CONTENT: string | null
    IS_DELETE: string | null
    BLOG_TAGS: string | null
    _count: BLOGCountAggregateOutputType | null
    _avg: BLOGAvgAggregateOutputType | null
    _sum: BLOGSumAggregateOutputType | null
    _min: BLOGMinAggregateOutputType | null
    _max: BLOGMaxAggregateOutputType | null
  }

  type GetBLOGGroupByPayload<T extends BLOGGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BLOGGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BLOGGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BLOGGroupByOutputType[P]>
            : GetScalarType<T[P], BLOGGroupByOutputType[P]>
        }
      >
    >


  export type BLOGSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    BLOG_CREATE_TIME?: boolean
    BLOG_UPDATE_TIME?: boolean
    BLOG_TITLE?: boolean
    BLOG_CONTENT?: boolean
    IS_DELETE?: boolean
    BLOG_TAGS?: boolean
  }, ExtArgs["result"]["bLOG"]>



  export type BLOGSelectScalar = {
    ID?: boolean
    BLOG_CREATE_TIME?: boolean
    BLOG_UPDATE_TIME?: boolean
    BLOG_TITLE?: boolean
    BLOG_CONTENT?: boolean
    IS_DELETE?: boolean
    BLOG_TAGS?: boolean
  }

  export type BLOGOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID" | "BLOG_CREATE_TIME" | "BLOG_UPDATE_TIME" | "BLOG_TITLE" | "BLOG_CONTENT" | "IS_DELETE" | "BLOG_TAGS", ExtArgs["result"]["bLOG"]>

  export type $BLOGPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BLOG"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ID: number
      BLOG_CREATE_TIME: Date | null
      BLOG_UPDATE_TIME: Date | null
      BLOG_TITLE: string | null
      BLOG_CONTENT: string | null
      IS_DELETE: string | null
      BLOG_TAGS: string | null
    }, ExtArgs["result"]["bLOG"]>
    composites: {}
  }

  type BLOGGetPayload<S extends boolean | null | undefined | BLOGDefaultArgs> = $Result.GetResult<Prisma.$BLOGPayload, S>

  type BLOGCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BLOGFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BLOGCountAggregateInputType | true
    }

  export interface BLOGDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BLOG'], meta: { name: 'BLOG' } }
    /**
     * Find zero or one BLOG that matches the filter.
     * @param {BLOGFindUniqueArgs} args - Arguments to find a BLOG
     * @example
     * // Get one BLOG
     * const bLOG = await prisma.bLOG.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BLOGFindUniqueArgs>(args: SelectSubset<T, BLOGFindUniqueArgs<ExtArgs>>): Prisma__BLOGClient<$Result.GetResult<Prisma.$BLOGPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BLOG that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BLOGFindUniqueOrThrowArgs} args - Arguments to find a BLOG
     * @example
     * // Get one BLOG
     * const bLOG = await prisma.bLOG.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BLOGFindUniqueOrThrowArgs>(args: SelectSubset<T, BLOGFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BLOGClient<$Result.GetResult<Prisma.$BLOGPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BLOG that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BLOGFindFirstArgs} args - Arguments to find a BLOG
     * @example
     * // Get one BLOG
     * const bLOG = await prisma.bLOG.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BLOGFindFirstArgs>(args?: SelectSubset<T, BLOGFindFirstArgs<ExtArgs>>): Prisma__BLOGClient<$Result.GetResult<Prisma.$BLOGPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BLOG that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BLOGFindFirstOrThrowArgs} args - Arguments to find a BLOG
     * @example
     * // Get one BLOG
     * const bLOG = await prisma.bLOG.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BLOGFindFirstOrThrowArgs>(args?: SelectSubset<T, BLOGFindFirstOrThrowArgs<ExtArgs>>): Prisma__BLOGClient<$Result.GetResult<Prisma.$BLOGPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BLOGS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BLOGFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BLOGS
     * const bLOGS = await prisma.bLOG.findMany()
     * 
     * // Get first 10 BLOGS
     * const bLOGS = await prisma.bLOG.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const bLOGWithIDOnly = await prisma.bLOG.findMany({ select: { ID: true } })
     * 
     */
    findMany<T extends BLOGFindManyArgs>(args?: SelectSubset<T, BLOGFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BLOGPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BLOG.
     * @param {BLOGCreateArgs} args - Arguments to create a BLOG.
     * @example
     * // Create one BLOG
     * const BLOG = await prisma.bLOG.create({
     *   data: {
     *     // ... data to create a BLOG
     *   }
     * })
     * 
     */
    create<T extends BLOGCreateArgs>(args: SelectSubset<T, BLOGCreateArgs<ExtArgs>>): Prisma__BLOGClient<$Result.GetResult<Prisma.$BLOGPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BLOGS.
     * @param {BLOGCreateManyArgs} args - Arguments to create many BLOGS.
     * @example
     * // Create many BLOGS
     * const bLOG = await prisma.bLOG.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BLOGCreateManyArgs>(args?: SelectSubset<T, BLOGCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BLOG.
     * @param {BLOGDeleteArgs} args - Arguments to delete one BLOG.
     * @example
     * // Delete one BLOG
     * const BLOG = await prisma.bLOG.delete({
     *   where: {
     *     // ... filter to delete one BLOG
     *   }
     * })
     * 
     */
    delete<T extends BLOGDeleteArgs>(args: SelectSubset<T, BLOGDeleteArgs<ExtArgs>>): Prisma__BLOGClient<$Result.GetResult<Prisma.$BLOGPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BLOG.
     * @param {BLOGUpdateArgs} args - Arguments to update one BLOG.
     * @example
     * // Update one BLOG
     * const bLOG = await prisma.bLOG.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BLOGUpdateArgs>(args: SelectSubset<T, BLOGUpdateArgs<ExtArgs>>): Prisma__BLOGClient<$Result.GetResult<Prisma.$BLOGPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BLOGS.
     * @param {BLOGDeleteManyArgs} args - Arguments to filter BLOGS to delete.
     * @example
     * // Delete a few BLOGS
     * const { count } = await prisma.bLOG.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BLOGDeleteManyArgs>(args?: SelectSubset<T, BLOGDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BLOGS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BLOGUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BLOGS
     * const bLOG = await prisma.bLOG.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BLOGUpdateManyArgs>(args: SelectSubset<T, BLOGUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BLOG.
     * @param {BLOGUpsertArgs} args - Arguments to update or create a BLOG.
     * @example
     * // Update or create a BLOG
     * const bLOG = await prisma.bLOG.upsert({
     *   create: {
     *     // ... data to create a BLOG
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BLOG we want to update
     *   }
     * })
     */
    upsert<T extends BLOGUpsertArgs>(args: SelectSubset<T, BLOGUpsertArgs<ExtArgs>>): Prisma__BLOGClient<$Result.GetResult<Prisma.$BLOGPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BLOGS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BLOGCountArgs} args - Arguments to filter BLOGS to count.
     * @example
     * // Count the number of BLOGS
     * const count = await prisma.bLOG.count({
     *   where: {
     *     // ... the filter for the BLOGS we want to count
     *   }
     * })
    **/
    count<T extends BLOGCountArgs>(
      args?: Subset<T, BLOGCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BLOGCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BLOG.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BLOGAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BLOGAggregateArgs>(args: Subset<T, BLOGAggregateArgs>): Prisma.PrismaPromise<GetBLOGAggregateType<T>>

    /**
     * Group by BLOG.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BLOGGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BLOGGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BLOGGroupByArgs['orderBy'] }
        : { orderBy?: BLOGGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BLOGGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBLOGGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BLOG model
   */
  readonly fields: BLOGFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BLOG.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BLOGClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BLOG model
   */
  interface BLOGFieldRefs {
    readonly ID: FieldRef<"BLOG", 'Int'>
    readonly BLOG_CREATE_TIME: FieldRef<"BLOG", 'DateTime'>
    readonly BLOG_UPDATE_TIME: FieldRef<"BLOG", 'DateTime'>
    readonly BLOG_TITLE: FieldRef<"BLOG", 'String'>
    readonly BLOG_CONTENT: FieldRef<"BLOG", 'String'>
    readonly IS_DELETE: FieldRef<"BLOG", 'String'>
    readonly BLOG_TAGS: FieldRef<"BLOG", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BLOG findUnique
   */
  export type BLOGFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BLOG
     */
    select?: BLOGSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BLOG
     */
    omit?: BLOGOmit<ExtArgs> | null
    /**
     * Filter, which BLOG to fetch.
     */
    where: BLOGWhereUniqueInput
  }

  /**
   * BLOG findUniqueOrThrow
   */
  export type BLOGFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BLOG
     */
    select?: BLOGSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BLOG
     */
    omit?: BLOGOmit<ExtArgs> | null
    /**
     * Filter, which BLOG to fetch.
     */
    where: BLOGWhereUniqueInput
  }

  /**
   * BLOG findFirst
   */
  export type BLOGFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BLOG
     */
    select?: BLOGSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BLOG
     */
    omit?: BLOGOmit<ExtArgs> | null
    /**
     * Filter, which BLOG to fetch.
     */
    where?: BLOGWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BLOGS to fetch.
     */
    orderBy?: BLOGOrderByWithRelationInput | BLOGOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BLOGS.
     */
    cursor?: BLOGWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BLOGS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BLOGS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BLOGS.
     */
    distinct?: BLOGScalarFieldEnum | BLOGScalarFieldEnum[]
  }

  /**
   * BLOG findFirstOrThrow
   */
  export type BLOGFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BLOG
     */
    select?: BLOGSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BLOG
     */
    omit?: BLOGOmit<ExtArgs> | null
    /**
     * Filter, which BLOG to fetch.
     */
    where?: BLOGWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BLOGS to fetch.
     */
    orderBy?: BLOGOrderByWithRelationInput | BLOGOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BLOGS.
     */
    cursor?: BLOGWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BLOGS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BLOGS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BLOGS.
     */
    distinct?: BLOGScalarFieldEnum | BLOGScalarFieldEnum[]
  }

  /**
   * BLOG findMany
   */
  export type BLOGFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BLOG
     */
    select?: BLOGSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BLOG
     */
    omit?: BLOGOmit<ExtArgs> | null
    /**
     * Filter, which BLOGS to fetch.
     */
    where?: BLOGWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BLOGS to fetch.
     */
    orderBy?: BLOGOrderByWithRelationInput | BLOGOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BLOGS.
     */
    cursor?: BLOGWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BLOGS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BLOGS.
     */
    skip?: number
    distinct?: BLOGScalarFieldEnum | BLOGScalarFieldEnum[]
  }

  /**
   * BLOG create
   */
  export type BLOGCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BLOG
     */
    select?: BLOGSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BLOG
     */
    omit?: BLOGOmit<ExtArgs> | null
    /**
     * The data needed to create a BLOG.
     */
    data?: XOR<BLOGCreateInput, BLOGUncheckedCreateInput>
  }

  /**
   * BLOG createMany
   */
  export type BLOGCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BLOGS.
     */
    data: BLOGCreateManyInput | BLOGCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BLOG update
   */
  export type BLOGUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BLOG
     */
    select?: BLOGSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BLOG
     */
    omit?: BLOGOmit<ExtArgs> | null
    /**
     * The data needed to update a BLOG.
     */
    data: XOR<BLOGUpdateInput, BLOGUncheckedUpdateInput>
    /**
     * Choose, which BLOG to update.
     */
    where: BLOGWhereUniqueInput
  }

  /**
   * BLOG updateMany
   */
  export type BLOGUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BLOGS.
     */
    data: XOR<BLOGUpdateManyMutationInput, BLOGUncheckedUpdateManyInput>
    /**
     * Filter which BLOGS to update
     */
    where?: BLOGWhereInput
    /**
     * Limit how many BLOGS to update.
     */
    limit?: number
  }

  /**
   * BLOG upsert
   */
  export type BLOGUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BLOG
     */
    select?: BLOGSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BLOG
     */
    omit?: BLOGOmit<ExtArgs> | null
    /**
     * The filter to search for the BLOG to update in case it exists.
     */
    where: BLOGWhereUniqueInput
    /**
     * In case the BLOG found by the `where` argument doesn't exist, create a new BLOG with this data.
     */
    create: XOR<BLOGCreateInput, BLOGUncheckedCreateInput>
    /**
     * In case the BLOG was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BLOGUpdateInput, BLOGUncheckedUpdateInput>
  }

  /**
   * BLOG delete
   */
  export type BLOGDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BLOG
     */
    select?: BLOGSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BLOG
     */
    omit?: BLOGOmit<ExtArgs> | null
    /**
     * Filter which BLOG to delete.
     */
    where: BLOGWhereUniqueInput
  }

  /**
   * BLOG deleteMany
   */
  export type BLOGDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BLOGS to delete
     */
    where?: BLOGWhereInput
    /**
     * Limit how many BLOGS to delete.
     */
    limit?: number
  }

  /**
   * BLOG without action
   */
  export type BLOGDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BLOG
     */
    select?: BLOGSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BLOG
     */
    omit?: BLOGOmit<ExtArgs> | null
  }


  /**
   * Model ENGLISH
   */

  export type AggregateENGLISH = {
    _count: ENGLISHCountAggregateOutputType | null
    _avg: ENGLISHAvgAggregateOutputType | null
    _sum: ENGLISHSumAggregateOutputType | null
    _min: ENGLISHMinAggregateOutputType | null
    _max: ENGLISHMaxAggregateOutputType | null
  }

  export type ENGLISHAvgAggregateOutputType = {
    ID: number | null
  }

  export type ENGLISHSumAggregateOutputType = {
    ID: number | null
  }

  export type ENGLISHMinAggregateOutputType = {
    ID: number | null
    CONTENT: string | null
    CREATE_TIME: Date | null
    UPDATE_TIME: Date | null
  }

  export type ENGLISHMaxAggregateOutputType = {
    ID: number | null
    CONTENT: string | null
    CREATE_TIME: Date | null
    UPDATE_TIME: Date | null
  }

  export type ENGLISHCountAggregateOutputType = {
    ID: number
    CONTENT: number
    CREATE_TIME: number
    UPDATE_TIME: number
    _all: number
  }


  export type ENGLISHAvgAggregateInputType = {
    ID?: true
  }

  export type ENGLISHSumAggregateInputType = {
    ID?: true
  }

  export type ENGLISHMinAggregateInputType = {
    ID?: true
    CONTENT?: true
    CREATE_TIME?: true
    UPDATE_TIME?: true
  }

  export type ENGLISHMaxAggregateInputType = {
    ID?: true
    CONTENT?: true
    CREATE_TIME?: true
    UPDATE_TIME?: true
  }

  export type ENGLISHCountAggregateInputType = {
    ID?: true
    CONTENT?: true
    CREATE_TIME?: true
    UPDATE_TIME?: true
    _all?: true
  }

  export type ENGLISHAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ENGLISH to aggregate.
     */
    where?: ENGLISHWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ENGLISHES to fetch.
     */
    orderBy?: ENGLISHOrderByWithRelationInput | ENGLISHOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ENGLISHWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ENGLISHES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ENGLISHES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ENGLISHES
    **/
    _count?: true | ENGLISHCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ENGLISHAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ENGLISHSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ENGLISHMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ENGLISHMaxAggregateInputType
  }

  export type GetENGLISHAggregateType<T extends ENGLISHAggregateArgs> = {
        [P in keyof T & keyof AggregateENGLISH]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateENGLISH[P]>
      : GetScalarType<T[P], AggregateENGLISH[P]>
  }




  export type ENGLISHGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ENGLISHWhereInput
    orderBy?: ENGLISHOrderByWithAggregationInput | ENGLISHOrderByWithAggregationInput[]
    by: ENGLISHScalarFieldEnum[] | ENGLISHScalarFieldEnum
    having?: ENGLISHScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ENGLISHCountAggregateInputType | true
    _avg?: ENGLISHAvgAggregateInputType
    _sum?: ENGLISHSumAggregateInputType
    _min?: ENGLISHMinAggregateInputType
    _max?: ENGLISHMaxAggregateInputType
  }

  export type ENGLISHGroupByOutputType = {
    ID: number
    CONTENT: string
    CREATE_TIME: Date
    UPDATE_TIME: Date
    _count: ENGLISHCountAggregateOutputType | null
    _avg: ENGLISHAvgAggregateOutputType | null
    _sum: ENGLISHSumAggregateOutputType | null
    _min: ENGLISHMinAggregateOutputType | null
    _max: ENGLISHMaxAggregateOutputType | null
  }

  type GetENGLISHGroupByPayload<T extends ENGLISHGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ENGLISHGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ENGLISHGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ENGLISHGroupByOutputType[P]>
            : GetScalarType<T[P], ENGLISHGroupByOutputType[P]>
        }
      >
    >


  export type ENGLISHSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    CONTENT?: boolean
    CREATE_TIME?: boolean
    UPDATE_TIME?: boolean
  }, ExtArgs["result"]["eNGLISH"]>



  export type ENGLISHSelectScalar = {
    ID?: boolean
    CONTENT?: boolean
    CREATE_TIME?: boolean
    UPDATE_TIME?: boolean
  }

  export type ENGLISHOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID" | "CONTENT" | "CREATE_TIME" | "UPDATE_TIME", ExtArgs["result"]["eNGLISH"]>

  export type $ENGLISHPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ENGLISH"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ID: number
      CONTENT: string
      CREATE_TIME: Date
      UPDATE_TIME: Date
    }, ExtArgs["result"]["eNGLISH"]>
    composites: {}
  }

  type ENGLISHGetPayload<S extends boolean | null | undefined | ENGLISHDefaultArgs> = $Result.GetResult<Prisma.$ENGLISHPayload, S>

  type ENGLISHCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ENGLISHFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ENGLISHCountAggregateInputType | true
    }

  export interface ENGLISHDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ENGLISH'], meta: { name: 'ENGLISH' } }
    /**
     * Find zero or one ENGLISH that matches the filter.
     * @param {ENGLISHFindUniqueArgs} args - Arguments to find a ENGLISH
     * @example
     * // Get one ENGLISH
     * const eNGLISH = await prisma.eNGLISH.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ENGLISHFindUniqueArgs>(args: SelectSubset<T, ENGLISHFindUniqueArgs<ExtArgs>>): Prisma__ENGLISHClient<$Result.GetResult<Prisma.$ENGLISHPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ENGLISH that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ENGLISHFindUniqueOrThrowArgs} args - Arguments to find a ENGLISH
     * @example
     * // Get one ENGLISH
     * const eNGLISH = await prisma.eNGLISH.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ENGLISHFindUniqueOrThrowArgs>(args: SelectSubset<T, ENGLISHFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ENGLISHClient<$Result.GetResult<Prisma.$ENGLISHPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ENGLISH that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ENGLISHFindFirstArgs} args - Arguments to find a ENGLISH
     * @example
     * // Get one ENGLISH
     * const eNGLISH = await prisma.eNGLISH.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ENGLISHFindFirstArgs>(args?: SelectSubset<T, ENGLISHFindFirstArgs<ExtArgs>>): Prisma__ENGLISHClient<$Result.GetResult<Prisma.$ENGLISHPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ENGLISH that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ENGLISHFindFirstOrThrowArgs} args - Arguments to find a ENGLISH
     * @example
     * // Get one ENGLISH
     * const eNGLISH = await prisma.eNGLISH.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ENGLISHFindFirstOrThrowArgs>(args?: SelectSubset<T, ENGLISHFindFirstOrThrowArgs<ExtArgs>>): Prisma__ENGLISHClient<$Result.GetResult<Prisma.$ENGLISHPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ENGLISHES that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ENGLISHFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ENGLISHES
     * const eNGLISHES = await prisma.eNGLISH.findMany()
     * 
     * // Get first 10 ENGLISHES
     * const eNGLISHES = await prisma.eNGLISH.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const eNGLISHWithIDOnly = await prisma.eNGLISH.findMany({ select: { ID: true } })
     * 
     */
    findMany<T extends ENGLISHFindManyArgs>(args?: SelectSubset<T, ENGLISHFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ENGLISHPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ENGLISH.
     * @param {ENGLISHCreateArgs} args - Arguments to create a ENGLISH.
     * @example
     * // Create one ENGLISH
     * const ENGLISH = await prisma.eNGLISH.create({
     *   data: {
     *     // ... data to create a ENGLISH
     *   }
     * })
     * 
     */
    create<T extends ENGLISHCreateArgs>(args: SelectSubset<T, ENGLISHCreateArgs<ExtArgs>>): Prisma__ENGLISHClient<$Result.GetResult<Prisma.$ENGLISHPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ENGLISHES.
     * @param {ENGLISHCreateManyArgs} args - Arguments to create many ENGLISHES.
     * @example
     * // Create many ENGLISHES
     * const eNGLISH = await prisma.eNGLISH.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ENGLISHCreateManyArgs>(args?: SelectSubset<T, ENGLISHCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ENGLISH.
     * @param {ENGLISHDeleteArgs} args - Arguments to delete one ENGLISH.
     * @example
     * // Delete one ENGLISH
     * const ENGLISH = await prisma.eNGLISH.delete({
     *   where: {
     *     // ... filter to delete one ENGLISH
     *   }
     * })
     * 
     */
    delete<T extends ENGLISHDeleteArgs>(args: SelectSubset<T, ENGLISHDeleteArgs<ExtArgs>>): Prisma__ENGLISHClient<$Result.GetResult<Prisma.$ENGLISHPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ENGLISH.
     * @param {ENGLISHUpdateArgs} args - Arguments to update one ENGLISH.
     * @example
     * // Update one ENGLISH
     * const eNGLISH = await prisma.eNGLISH.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ENGLISHUpdateArgs>(args: SelectSubset<T, ENGLISHUpdateArgs<ExtArgs>>): Prisma__ENGLISHClient<$Result.GetResult<Prisma.$ENGLISHPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ENGLISHES.
     * @param {ENGLISHDeleteManyArgs} args - Arguments to filter ENGLISHES to delete.
     * @example
     * // Delete a few ENGLISHES
     * const { count } = await prisma.eNGLISH.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ENGLISHDeleteManyArgs>(args?: SelectSubset<T, ENGLISHDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ENGLISHES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ENGLISHUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ENGLISHES
     * const eNGLISH = await prisma.eNGLISH.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ENGLISHUpdateManyArgs>(args: SelectSubset<T, ENGLISHUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ENGLISH.
     * @param {ENGLISHUpsertArgs} args - Arguments to update or create a ENGLISH.
     * @example
     * // Update or create a ENGLISH
     * const eNGLISH = await prisma.eNGLISH.upsert({
     *   create: {
     *     // ... data to create a ENGLISH
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ENGLISH we want to update
     *   }
     * })
     */
    upsert<T extends ENGLISHUpsertArgs>(args: SelectSubset<T, ENGLISHUpsertArgs<ExtArgs>>): Prisma__ENGLISHClient<$Result.GetResult<Prisma.$ENGLISHPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ENGLISHES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ENGLISHCountArgs} args - Arguments to filter ENGLISHES to count.
     * @example
     * // Count the number of ENGLISHES
     * const count = await prisma.eNGLISH.count({
     *   where: {
     *     // ... the filter for the ENGLISHES we want to count
     *   }
     * })
    **/
    count<T extends ENGLISHCountArgs>(
      args?: Subset<T, ENGLISHCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ENGLISHCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ENGLISH.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ENGLISHAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ENGLISHAggregateArgs>(args: Subset<T, ENGLISHAggregateArgs>): Prisma.PrismaPromise<GetENGLISHAggregateType<T>>

    /**
     * Group by ENGLISH.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ENGLISHGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ENGLISHGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ENGLISHGroupByArgs['orderBy'] }
        : { orderBy?: ENGLISHGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ENGLISHGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetENGLISHGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ENGLISH model
   */
  readonly fields: ENGLISHFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ENGLISH.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ENGLISHClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ENGLISH model
   */
  interface ENGLISHFieldRefs {
    readonly ID: FieldRef<"ENGLISH", 'Int'>
    readonly CONTENT: FieldRef<"ENGLISH", 'String'>
    readonly CREATE_TIME: FieldRef<"ENGLISH", 'DateTime'>
    readonly UPDATE_TIME: FieldRef<"ENGLISH", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ENGLISH findUnique
   */
  export type ENGLISHFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ENGLISH
     */
    select?: ENGLISHSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ENGLISH
     */
    omit?: ENGLISHOmit<ExtArgs> | null
    /**
     * Filter, which ENGLISH to fetch.
     */
    where: ENGLISHWhereUniqueInput
  }

  /**
   * ENGLISH findUniqueOrThrow
   */
  export type ENGLISHFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ENGLISH
     */
    select?: ENGLISHSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ENGLISH
     */
    omit?: ENGLISHOmit<ExtArgs> | null
    /**
     * Filter, which ENGLISH to fetch.
     */
    where: ENGLISHWhereUniqueInput
  }

  /**
   * ENGLISH findFirst
   */
  export type ENGLISHFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ENGLISH
     */
    select?: ENGLISHSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ENGLISH
     */
    omit?: ENGLISHOmit<ExtArgs> | null
    /**
     * Filter, which ENGLISH to fetch.
     */
    where?: ENGLISHWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ENGLISHES to fetch.
     */
    orderBy?: ENGLISHOrderByWithRelationInput | ENGLISHOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ENGLISHES.
     */
    cursor?: ENGLISHWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ENGLISHES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ENGLISHES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ENGLISHES.
     */
    distinct?: ENGLISHScalarFieldEnum | ENGLISHScalarFieldEnum[]
  }

  /**
   * ENGLISH findFirstOrThrow
   */
  export type ENGLISHFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ENGLISH
     */
    select?: ENGLISHSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ENGLISH
     */
    omit?: ENGLISHOmit<ExtArgs> | null
    /**
     * Filter, which ENGLISH to fetch.
     */
    where?: ENGLISHWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ENGLISHES to fetch.
     */
    orderBy?: ENGLISHOrderByWithRelationInput | ENGLISHOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ENGLISHES.
     */
    cursor?: ENGLISHWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ENGLISHES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ENGLISHES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ENGLISHES.
     */
    distinct?: ENGLISHScalarFieldEnum | ENGLISHScalarFieldEnum[]
  }

  /**
   * ENGLISH findMany
   */
  export type ENGLISHFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ENGLISH
     */
    select?: ENGLISHSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ENGLISH
     */
    omit?: ENGLISHOmit<ExtArgs> | null
    /**
     * Filter, which ENGLISHES to fetch.
     */
    where?: ENGLISHWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ENGLISHES to fetch.
     */
    orderBy?: ENGLISHOrderByWithRelationInput | ENGLISHOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ENGLISHES.
     */
    cursor?: ENGLISHWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ENGLISHES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ENGLISHES.
     */
    skip?: number
    distinct?: ENGLISHScalarFieldEnum | ENGLISHScalarFieldEnum[]
  }

  /**
   * ENGLISH create
   */
  export type ENGLISHCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ENGLISH
     */
    select?: ENGLISHSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ENGLISH
     */
    omit?: ENGLISHOmit<ExtArgs> | null
    /**
     * The data needed to create a ENGLISH.
     */
    data: XOR<ENGLISHCreateInput, ENGLISHUncheckedCreateInput>
  }

  /**
   * ENGLISH createMany
   */
  export type ENGLISHCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ENGLISHES.
     */
    data: ENGLISHCreateManyInput | ENGLISHCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ENGLISH update
   */
  export type ENGLISHUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ENGLISH
     */
    select?: ENGLISHSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ENGLISH
     */
    omit?: ENGLISHOmit<ExtArgs> | null
    /**
     * The data needed to update a ENGLISH.
     */
    data: XOR<ENGLISHUpdateInput, ENGLISHUncheckedUpdateInput>
    /**
     * Choose, which ENGLISH to update.
     */
    where: ENGLISHWhereUniqueInput
  }

  /**
   * ENGLISH updateMany
   */
  export type ENGLISHUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ENGLISHES.
     */
    data: XOR<ENGLISHUpdateManyMutationInput, ENGLISHUncheckedUpdateManyInput>
    /**
     * Filter which ENGLISHES to update
     */
    where?: ENGLISHWhereInput
    /**
     * Limit how many ENGLISHES to update.
     */
    limit?: number
  }

  /**
   * ENGLISH upsert
   */
  export type ENGLISHUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ENGLISH
     */
    select?: ENGLISHSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ENGLISH
     */
    omit?: ENGLISHOmit<ExtArgs> | null
    /**
     * The filter to search for the ENGLISH to update in case it exists.
     */
    where: ENGLISHWhereUniqueInput
    /**
     * In case the ENGLISH found by the `where` argument doesn't exist, create a new ENGLISH with this data.
     */
    create: XOR<ENGLISHCreateInput, ENGLISHUncheckedCreateInput>
    /**
     * In case the ENGLISH was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ENGLISHUpdateInput, ENGLISHUncheckedUpdateInput>
  }

  /**
   * ENGLISH delete
   */
  export type ENGLISHDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ENGLISH
     */
    select?: ENGLISHSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ENGLISH
     */
    omit?: ENGLISHOmit<ExtArgs> | null
    /**
     * Filter which ENGLISH to delete.
     */
    where: ENGLISHWhereUniqueInput
  }

  /**
   * ENGLISH deleteMany
   */
  export type ENGLISHDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ENGLISHES to delete
     */
    where?: ENGLISHWhereInput
    /**
     * Limit how many ENGLISHES to delete.
     */
    limit?: number
  }

  /**
   * ENGLISH without action
   */
  export type ENGLISHDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ENGLISH
     */
    select?: ENGLISHSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ENGLISH
     */
    omit?: ENGLISHOmit<ExtArgs> | null
  }


  /**
   * Model VISIT_RECORDER
   */

  export type AggregateVISIT_RECORDER = {
    _count: VISIT_RECORDERCountAggregateOutputType | null
    _avg: VISIT_RECORDERAvgAggregateOutputType | null
    _sum: VISIT_RECORDERSumAggregateOutputType | null
    _min: VISIT_RECORDERMinAggregateOutputType | null
    _max: VISIT_RECORDERMaxAggregateOutputType | null
  }

  export type VISIT_RECORDERAvgAggregateOutputType = {
    ID: number | null
  }

  export type VISIT_RECORDERSumAggregateOutputType = {
    ID: number | null
  }

  export type VISIT_RECORDERMinAggregateOutputType = {
    ID: number | null
    IP: string | null
    CREATE_TIME: Date | null
  }

  export type VISIT_RECORDERMaxAggregateOutputType = {
    ID: number | null
    IP: string | null
    CREATE_TIME: Date | null
  }

  export type VISIT_RECORDERCountAggregateOutputType = {
    ID: number
    IP: number
    CREATE_TIME: number
    _all: number
  }


  export type VISIT_RECORDERAvgAggregateInputType = {
    ID?: true
  }

  export type VISIT_RECORDERSumAggregateInputType = {
    ID?: true
  }

  export type VISIT_RECORDERMinAggregateInputType = {
    ID?: true
    IP?: true
    CREATE_TIME?: true
  }

  export type VISIT_RECORDERMaxAggregateInputType = {
    ID?: true
    IP?: true
    CREATE_TIME?: true
  }

  export type VISIT_RECORDERCountAggregateInputType = {
    ID?: true
    IP?: true
    CREATE_TIME?: true
    _all?: true
  }

  export type VISIT_RECORDERAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VISIT_RECORDER to aggregate.
     */
    where?: VISIT_RECORDERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VISIT_RECORDERS to fetch.
     */
    orderBy?: VISIT_RECORDEROrderByWithRelationInput | VISIT_RECORDEROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VISIT_RECORDERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VISIT_RECORDERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VISIT_RECORDERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VISIT_RECORDERS
    **/
    _count?: true | VISIT_RECORDERCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VISIT_RECORDERAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VISIT_RECORDERSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VISIT_RECORDERMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VISIT_RECORDERMaxAggregateInputType
  }

  export type GetVISIT_RECORDERAggregateType<T extends VISIT_RECORDERAggregateArgs> = {
        [P in keyof T & keyof AggregateVISIT_RECORDER]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVISIT_RECORDER[P]>
      : GetScalarType<T[P], AggregateVISIT_RECORDER[P]>
  }




  export type VISIT_RECORDERGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VISIT_RECORDERWhereInput
    orderBy?: VISIT_RECORDEROrderByWithAggregationInput | VISIT_RECORDEROrderByWithAggregationInput[]
    by: VISIT_RECORDERScalarFieldEnum[] | VISIT_RECORDERScalarFieldEnum
    having?: VISIT_RECORDERScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VISIT_RECORDERCountAggregateInputType | true
    _avg?: VISIT_RECORDERAvgAggregateInputType
    _sum?: VISIT_RECORDERSumAggregateInputType
    _min?: VISIT_RECORDERMinAggregateInputType
    _max?: VISIT_RECORDERMaxAggregateInputType
  }

  export type VISIT_RECORDERGroupByOutputType = {
    ID: number
    IP: string | null
    CREATE_TIME: Date
    _count: VISIT_RECORDERCountAggregateOutputType | null
    _avg: VISIT_RECORDERAvgAggregateOutputType | null
    _sum: VISIT_RECORDERSumAggregateOutputType | null
    _min: VISIT_RECORDERMinAggregateOutputType | null
    _max: VISIT_RECORDERMaxAggregateOutputType | null
  }

  type GetVISIT_RECORDERGroupByPayload<T extends VISIT_RECORDERGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VISIT_RECORDERGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VISIT_RECORDERGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VISIT_RECORDERGroupByOutputType[P]>
            : GetScalarType<T[P], VISIT_RECORDERGroupByOutputType[P]>
        }
      >
    >


  export type VISIT_RECORDERSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    IP?: boolean
    CREATE_TIME?: boolean
  }, ExtArgs["result"]["vISIT_RECORDER"]>



  export type VISIT_RECORDERSelectScalar = {
    ID?: boolean
    IP?: boolean
    CREATE_TIME?: boolean
  }

  export type VISIT_RECORDEROmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID" | "IP" | "CREATE_TIME", ExtArgs["result"]["vISIT_RECORDER"]>

  export type $VISIT_RECORDERPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VISIT_RECORDER"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ID: number
      IP: string | null
      CREATE_TIME: Date
    }, ExtArgs["result"]["vISIT_RECORDER"]>
    composites: {}
  }

  type VISIT_RECORDERGetPayload<S extends boolean | null | undefined | VISIT_RECORDERDefaultArgs> = $Result.GetResult<Prisma.$VISIT_RECORDERPayload, S>

  type VISIT_RECORDERCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VISIT_RECORDERFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VISIT_RECORDERCountAggregateInputType | true
    }

  export interface VISIT_RECORDERDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VISIT_RECORDER'], meta: { name: 'VISIT_RECORDER' } }
    /**
     * Find zero or one VISIT_RECORDER that matches the filter.
     * @param {VISIT_RECORDERFindUniqueArgs} args - Arguments to find a VISIT_RECORDER
     * @example
     * // Get one VISIT_RECORDER
     * const vISIT_RECORDER = await prisma.vISIT_RECORDER.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VISIT_RECORDERFindUniqueArgs>(args: SelectSubset<T, VISIT_RECORDERFindUniqueArgs<ExtArgs>>): Prisma__VISIT_RECORDERClient<$Result.GetResult<Prisma.$VISIT_RECORDERPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VISIT_RECORDER that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VISIT_RECORDERFindUniqueOrThrowArgs} args - Arguments to find a VISIT_RECORDER
     * @example
     * // Get one VISIT_RECORDER
     * const vISIT_RECORDER = await prisma.vISIT_RECORDER.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VISIT_RECORDERFindUniqueOrThrowArgs>(args: SelectSubset<T, VISIT_RECORDERFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VISIT_RECORDERClient<$Result.GetResult<Prisma.$VISIT_RECORDERPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VISIT_RECORDER that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VISIT_RECORDERFindFirstArgs} args - Arguments to find a VISIT_RECORDER
     * @example
     * // Get one VISIT_RECORDER
     * const vISIT_RECORDER = await prisma.vISIT_RECORDER.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VISIT_RECORDERFindFirstArgs>(args?: SelectSubset<T, VISIT_RECORDERFindFirstArgs<ExtArgs>>): Prisma__VISIT_RECORDERClient<$Result.GetResult<Prisma.$VISIT_RECORDERPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VISIT_RECORDER that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VISIT_RECORDERFindFirstOrThrowArgs} args - Arguments to find a VISIT_RECORDER
     * @example
     * // Get one VISIT_RECORDER
     * const vISIT_RECORDER = await prisma.vISIT_RECORDER.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VISIT_RECORDERFindFirstOrThrowArgs>(args?: SelectSubset<T, VISIT_RECORDERFindFirstOrThrowArgs<ExtArgs>>): Prisma__VISIT_RECORDERClient<$Result.GetResult<Prisma.$VISIT_RECORDERPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VISIT_RECORDERS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VISIT_RECORDERFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VISIT_RECORDERS
     * const vISIT_RECORDERS = await prisma.vISIT_RECORDER.findMany()
     * 
     * // Get first 10 VISIT_RECORDERS
     * const vISIT_RECORDERS = await prisma.vISIT_RECORDER.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const vISIT_RECORDERWithIDOnly = await prisma.vISIT_RECORDER.findMany({ select: { ID: true } })
     * 
     */
    findMany<T extends VISIT_RECORDERFindManyArgs>(args?: SelectSubset<T, VISIT_RECORDERFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VISIT_RECORDERPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VISIT_RECORDER.
     * @param {VISIT_RECORDERCreateArgs} args - Arguments to create a VISIT_RECORDER.
     * @example
     * // Create one VISIT_RECORDER
     * const VISIT_RECORDER = await prisma.vISIT_RECORDER.create({
     *   data: {
     *     // ... data to create a VISIT_RECORDER
     *   }
     * })
     * 
     */
    create<T extends VISIT_RECORDERCreateArgs>(args: SelectSubset<T, VISIT_RECORDERCreateArgs<ExtArgs>>): Prisma__VISIT_RECORDERClient<$Result.GetResult<Prisma.$VISIT_RECORDERPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VISIT_RECORDERS.
     * @param {VISIT_RECORDERCreateManyArgs} args - Arguments to create many VISIT_RECORDERS.
     * @example
     * // Create many VISIT_RECORDERS
     * const vISIT_RECORDER = await prisma.vISIT_RECORDER.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VISIT_RECORDERCreateManyArgs>(args?: SelectSubset<T, VISIT_RECORDERCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VISIT_RECORDER.
     * @param {VISIT_RECORDERDeleteArgs} args - Arguments to delete one VISIT_RECORDER.
     * @example
     * // Delete one VISIT_RECORDER
     * const VISIT_RECORDER = await prisma.vISIT_RECORDER.delete({
     *   where: {
     *     // ... filter to delete one VISIT_RECORDER
     *   }
     * })
     * 
     */
    delete<T extends VISIT_RECORDERDeleteArgs>(args: SelectSubset<T, VISIT_RECORDERDeleteArgs<ExtArgs>>): Prisma__VISIT_RECORDERClient<$Result.GetResult<Prisma.$VISIT_RECORDERPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VISIT_RECORDER.
     * @param {VISIT_RECORDERUpdateArgs} args - Arguments to update one VISIT_RECORDER.
     * @example
     * // Update one VISIT_RECORDER
     * const vISIT_RECORDER = await prisma.vISIT_RECORDER.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VISIT_RECORDERUpdateArgs>(args: SelectSubset<T, VISIT_RECORDERUpdateArgs<ExtArgs>>): Prisma__VISIT_RECORDERClient<$Result.GetResult<Prisma.$VISIT_RECORDERPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VISIT_RECORDERS.
     * @param {VISIT_RECORDERDeleteManyArgs} args - Arguments to filter VISIT_RECORDERS to delete.
     * @example
     * // Delete a few VISIT_RECORDERS
     * const { count } = await prisma.vISIT_RECORDER.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VISIT_RECORDERDeleteManyArgs>(args?: SelectSubset<T, VISIT_RECORDERDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VISIT_RECORDERS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VISIT_RECORDERUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VISIT_RECORDERS
     * const vISIT_RECORDER = await prisma.vISIT_RECORDER.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VISIT_RECORDERUpdateManyArgs>(args: SelectSubset<T, VISIT_RECORDERUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VISIT_RECORDER.
     * @param {VISIT_RECORDERUpsertArgs} args - Arguments to update or create a VISIT_RECORDER.
     * @example
     * // Update or create a VISIT_RECORDER
     * const vISIT_RECORDER = await prisma.vISIT_RECORDER.upsert({
     *   create: {
     *     // ... data to create a VISIT_RECORDER
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VISIT_RECORDER we want to update
     *   }
     * })
     */
    upsert<T extends VISIT_RECORDERUpsertArgs>(args: SelectSubset<T, VISIT_RECORDERUpsertArgs<ExtArgs>>): Prisma__VISIT_RECORDERClient<$Result.GetResult<Prisma.$VISIT_RECORDERPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VISIT_RECORDERS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VISIT_RECORDERCountArgs} args - Arguments to filter VISIT_RECORDERS to count.
     * @example
     * // Count the number of VISIT_RECORDERS
     * const count = await prisma.vISIT_RECORDER.count({
     *   where: {
     *     // ... the filter for the VISIT_RECORDERS we want to count
     *   }
     * })
    **/
    count<T extends VISIT_RECORDERCountArgs>(
      args?: Subset<T, VISIT_RECORDERCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VISIT_RECORDERCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VISIT_RECORDER.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VISIT_RECORDERAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VISIT_RECORDERAggregateArgs>(args: Subset<T, VISIT_RECORDERAggregateArgs>): Prisma.PrismaPromise<GetVISIT_RECORDERAggregateType<T>>

    /**
     * Group by VISIT_RECORDER.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VISIT_RECORDERGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VISIT_RECORDERGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VISIT_RECORDERGroupByArgs['orderBy'] }
        : { orderBy?: VISIT_RECORDERGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VISIT_RECORDERGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVISIT_RECORDERGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VISIT_RECORDER model
   */
  readonly fields: VISIT_RECORDERFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VISIT_RECORDER.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VISIT_RECORDERClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VISIT_RECORDER model
   */
  interface VISIT_RECORDERFieldRefs {
    readonly ID: FieldRef<"VISIT_RECORDER", 'Int'>
    readonly IP: FieldRef<"VISIT_RECORDER", 'String'>
    readonly CREATE_TIME: FieldRef<"VISIT_RECORDER", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VISIT_RECORDER findUnique
   */
  export type VISIT_RECORDERFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VISIT_RECORDER
     */
    select?: VISIT_RECORDERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VISIT_RECORDER
     */
    omit?: VISIT_RECORDEROmit<ExtArgs> | null
    /**
     * Filter, which VISIT_RECORDER to fetch.
     */
    where: VISIT_RECORDERWhereUniqueInput
  }

  /**
   * VISIT_RECORDER findUniqueOrThrow
   */
  export type VISIT_RECORDERFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VISIT_RECORDER
     */
    select?: VISIT_RECORDERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VISIT_RECORDER
     */
    omit?: VISIT_RECORDEROmit<ExtArgs> | null
    /**
     * Filter, which VISIT_RECORDER to fetch.
     */
    where: VISIT_RECORDERWhereUniqueInput
  }

  /**
   * VISIT_RECORDER findFirst
   */
  export type VISIT_RECORDERFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VISIT_RECORDER
     */
    select?: VISIT_RECORDERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VISIT_RECORDER
     */
    omit?: VISIT_RECORDEROmit<ExtArgs> | null
    /**
     * Filter, which VISIT_RECORDER to fetch.
     */
    where?: VISIT_RECORDERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VISIT_RECORDERS to fetch.
     */
    orderBy?: VISIT_RECORDEROrderByWithRelationInput | VISIT_RECORDEROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VISIT_RECORDERS.
     */
    cursor?: VISIT_RECORDERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VISIT_RECORDERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VISIT_RECORDERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VISIT_RECORDERS.
     */
    distinct?: VISIT_RECORDERScalarFieldEnum | VISIT_RECORDERScalarFieldEnum[]
  }

  /**
   * VISIT_RECORDER findFirstOrThrow
   */
  export type VISIT_RECORDERFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VISIT_RECORDER
     */
    select?: VISIT_RECORDERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VISIT_RECORDER
     */
    omit?: VISIT_RECORDEROmit<ExtArgs> | null
    /**
     * Filter, which VISIT_RECORDER to fetch.
     */
    where?: VISIT_RECORDERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VISIT_RECORDERS to fetch.
     */
    orderBy?: VISIT_RECORDEROrderByWithRelationInput | VISIT_RECORDEROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VISIT_RECORDERS.
     */
    cursor?: VISIT_RECORDERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VISIT_RECORDERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VISIT_RECORDERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VISIT_RECORDERS.
     */
    distinct?: VISIT_RECORDERScalarFieldEnum | VISIT_RECORDERScalarFieldEnum[]
  }

  /**
   * VISIT_RECORDER findMany
   */
  export type VISIT_RECORDERFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VISIT_RECORDER
     */
    select?: VISIT_RECORDERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VISIT_RECORDER
     */
    omit?: VISIT_RECORDEROmit<ExtArgs> | null
    /**
     * Filter, which VISIT_RECORDERS to fetch.
     */
    where?: VISIT_RECORDERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VISIT_RECORDERS to fetch.
     */
    orderBy?: VISIT_RECORDEROrderByWithRelationInput | VISIT_RECORDEROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VISIT_RECORDERS.
     */
    cursor?: VISIT_RECORDERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VISIT_RECORDERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VISIT_RECORDERS.
     */
    skip?: number
    distinct?: VISIT_RECORDERScalarFieldEnum | VISIT_RECORDERScalarFieldEnum[]
  }

  /**
   * VISIT_RECORDER create
   */
  export type VISIT_RECORDERCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VISIT_RECORDER
     */
    select?: VISIT_RECORDERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VISIT_RECORDER
     */
    omit?: VISIT_RECORDEROmit<ExtArgs> | null
    /**
     * The data needed to create a VISIT_RECORDER.
     */
    data?: XOR<VISIT_RECORDERCreateInput, VISIT_RECORDERUncheckedCreateInput>
  }

  /**
   * VISIT_RECORDER createMany
   */
  export type VISIT_RECORDERCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VISIT_RECORDERS.
     */
    data: VISIT_RECORDERCreateManyInput | VISIT_RECORDERCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VISIT_RECORDER update
   */
  export type VISIT_RECORDERUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VISIT_RECORDER
     */
    select?: VISIT_RECORDERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VISIT_RECORDER
     */
    omit?: VISIT_RECORDEROmit<ExtArgs> | null
    /**
     * The data needed to update a VISIT_RECORDER.
     */
    data: XOR<VISIT_RECORDERUpdateInput, VISIT_RECORDERUncheckedUpdateInput>
    /**
     * Choose, which VISIT_RECORDER to update.
     */
    where: VISIT_RECORDERWhereUniqueInput
  }

  /**
   * VISIT_RECORDER updateMany
   */
  export type VISIT_RECORDERUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VISIT_RECORDERS.
     */
    data: XOR<VISIT_RECORDERUpdateManyMutationInput, VISIT_RECORDERUncheckedUpdateManyInput>
    /**
     * Filter which VISIT_RECORDERS to update
     */
    where?: VISIT_RECORDERWhereInput
    /**
     * Limit how many VISIT_RECORDERS to update.
     */
    limit?: number
  }

  /**
   * VISIT_RECORDER upsert
   */
  export type VISIT_RECORDERUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VISIT_RECORDER
     */
    select?: VISIT_RECORDERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VISIT_RECORDER
     */
    omit?: VISIT_RECORDEROmit<ExtArgs> | null
    /**
     * The filter to search for the VISIT_RECORDER to update in case it exists.
     */
    where: VISIT_RECORDERWhereUniqueInput
    /**
     * In case the VISIT_RECORDER found by the `where` argument doesn't exist, create a new VISIT_RECORDER with this data.
     */
    create: XOR<VISIT_RECORDERCreateInput, VISIT_RECORDERUncheckedCreateInput>
    /**
     * In case the VISIT_RECORDER was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VISIT_RECORDERUpdateInput, VISIT_RECORDERUncheckedUpdateInput>
  }

  /**
   * VISIT_RECORDER delete
   */
  export type VISIT_RECORDERDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VISIT_RECORDER
     */
    select?: VISIT_RECORDERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VISIT_RECORDER
     */
    omit?: VISIT_RECORDEROmit<ExtArgs> | null
    /**
     * Filter which VISIT_RECORDER to delete.
     */
    where: VISIT_RECORDERWhereUniqueInput
  }

  /**
   * VISIT_RECORDER deleteMany
   */
  export type VISIT_RECORDERDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VISIT_RECORDERS to delete
     */
    where?: VISIT_RECORDERWhereInput
    /**
     * Limit how many VISIT_RECORDERS to delete.
     */
    limit?: number
  }

  /**
   * VISIT_RECORDER without action
   */
  export type VISIT_RECORDERDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VISIT_RECORDER
     */
    select?: VISIT_RECORDERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VISIT_RECORDER
     */
    omit?: VISIT_RECORDEROmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BLOGScalarFieldEnum: {
    ID: 'ID',
    BLOG_CREATE_TIME: 'BLOG_CREATE_TIME',
    BLOG_UPDATE_TIME: 'BLOG_UPDATE_TIME',
    BLOG_TITLE: 'BLOG_TITLE',
    BLOG_CONTENT: 'BLOG_CONTENT',
    IS_DELETE: 'IS_DELETE',
    BLOG_TAGS: 'BLOG_TAGS'
  };

  export type BLOGScalarFieldEnum = (typeof BLOGScalarFieldEnum)[keyof typeof BLOGScalarFieldEnum]


  export const ENGLISHScalarFieldEnum: {
    ID: 'ID',
    CONTENT: 'CONTENT',
    CREATE_TIME: 'CREATE_TIME',
    UPDATE_TIME: 'UPDATE_TIME'
  };

  export type ENGLISHScalarFieldEnum = (typeof ENGLISHScalarFieldEnum)[keyof typeof ENGLISHScalarFieldEnum]


  export const VISIT_RECORDERScalarFieldEnum: {
    ID: 'ID',
    IP: 'IP',
    CREATE_TIME: 'CREATE_TIME'
  };

  export type VISIT_RECORDERScalarFieldEnum = (typeof VISIT_RECORDERScalarFieldEnum)[keyof typeof VISIT_RECORDERScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const BLOGOrderByRelevanceFieldEnum: {
    BLOG_TITLE: 'BLOG_TITLE',
    BLOG_CONTENT: 'BLOG_CONTENT',
    IS_DELETE: 'IS_DELETE',
    BLOG_TAGS: 'BLOG_TAGS'
  };

  export type BLOGOrderByRelevanceFieldEnum = (typeof BLOGOrderByRelevanceFieldEnum)[keyof typeof BLOGOrderByRelevanceFieldEnum]


  export const ENGLISHOrderByRelevanceFieldEnum: {
    CONTENT: 'CONTENT'
  };

  export type ENGLISHOrderByRelevanceFieldEnum = (typeof ENGLISHOrderByRelevanceFieldEnum)[keyof typeof ENGLISHOrderByRelevanceFieldEnum]


  export const VISIT_RECORDEROrderByRelevanceFieldEnum: {
    IP: 'IP'
  };

  export type VISIT_RECORDEROrderByRelevanceFieldEnum = (typeof VISIT_RECORDEROrderByRelevanceFieldEnum)[keyof typeof VISIT_RECORDEROrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type BLOGWhereInput = {
    AND?: BLOGWhereInput | BLOGWhereInput[]
    OR?: BLOGWhereInput[]
    NOT?: BLOGWhereInput | BLOGWhereInput[]
    ID?: IntFilter<"BLOG"> | number
    BLOG_CREATE_TIME?: DateTimeNullableFilter<"BLOG"> | Date | string | null
    BLOG_UPDATE_TIME?: DateTimeNullableFilter<"BLOG"> | Date | string | null
    BLOG_TITLE?: StringNullableFilter<"BLOG"> | string | null
    BLOG_CONTENT?: StringNullableFilter<"BLOG"> | string | null
    IS_DELETE?: StringNullableFilter<"BLOG"> | string | null
    BLOG_TAGS?: StringNullableFilter<"BLOG"> | string | null
  }

  export type BLOGOrderByWithRelationInput = {
    ID?: SortOrder
    BLOG_CREATE_TIME?: SortOrderInput | SortOrder
    BLOG_UPDATE_TIME?: SortOrderInput | SortOrder
    BLOG_TITLE?: SortOrderInput | SortOrder
    BLOG_CONTENT?: SortOrderInput | SortOrder
    IS_DELETE?: SortOrderInput | SortOrder
    BLOG_TAGS?: SortOrderInput | SortOrder
    _relevance?: BLOGOrderByRelevanceInput
  }

  export type BLOGWhereUniqueInput = Prisma.AtLeast<{
    ID?: number
    AND?: BLOGWhereInput | BLOGWhereInput[]
    OR?: BLOGWhereInput[]
    NOT?: BLOGWhereInput | BLOGWhereInput[]
    BLOG_CREATE_TIME?: DateTimeNullableFilter<"BLOG"> | Date | string | null
    BLOG_UPDATE_TIME?: DateTimeNullableFilter<"BLOG"> | Date | string | null
    BLOG_TITLE?: StringNullableFilter<"BLOG"> | string | null
    BLOG_CONTENT?: StringNullableFilter<"BLOG"> | string | null
    IS_DELETE?: StringNullableFilter<"BLOG"> | string | null
    BLOG_TAGS?: StringNullableFilter<"BLOG"> | string | null
  }, "ID">

  export type BLOGOrderByWithAggregationInput = {
    ID?: SortOrder
    BLOG_CREATE_TIME?: SortOrderInput | SortOrder
    BLOG_UPDATE_TIME?: SortOrderInput | SortOrder
    BLOG_TITLE?: SortOrderInput | SortOrder
    BLOG_CONTENT?: SortOrderInput | SortOrder
    IS_DELETE?: SortOrderInput | SortOrder
    BLOG_TAGS?: SortOrderInput | SortOrder
    _count?: BLOGCountOrderByAggregateInput
    _avg?: BLOGAvgOrderByAggregateInput
    _max?: BLOGMaxOrderByAggregateInput
    _min?: BLOGMinOrderByAggregateInput
    _sum?: BLOGSumOrderByAggregateInput
  }

  export type BLOGScalarWhereWithAggregatesInput = {
    AND?: BLOGScalarWhereWithAggregatesInput | BLOGScalarWhereWithAggregatesInput[]
    OR?: BLOGScalarWhereWithAggregatesInput[]
    NOT?: BLOGScalarWhereWithAggregatesInput | BLOGScalarWhereWithAggregatesInput[]
    ID?: IntWithAggregatesFilter<"BLOG"> | number
    BLOG_CREATE_TIME?: DateTimeNullableWithAggregatesFilter<"BLOG"> | Date | string | null
    BLOG_UPDATE_TIME?: DateTimeNullableWithAggregatesFilter<"BLOG"> | Date | string | null
    BLOG_TITLE?: StringNullableWithAggregatesFilter<"BLOG"> | string | null
    BLOG_CONTENT?: StringNullableWithAggregatesFilter<"BLOG"> | string | null
    IS_DELETE?: StringNullableWithAggregatesFilter<"BLOG"> | string | null
    BLOG_TAGS?: StringNullableWithAggregatesFilter<"BLOG"> | string | null
  }

  export type ENGLISHWhereInput = {
    AND?: ENGLISHWhereInput | ENGLISHWhereInput[]
    OR?: ENGLISHWhereInput[]
    NOT?: ENGLISHWhereInput | ENGLISHWhereInput[]
    ID?: IntFilter<"ENGLISH"> | number
    CONTENT?: StringFilter<"ENGLISH"> | string
    CREATE_TIME?: DateTimeFilter<"ENGLISH"> | Date | string
    UPDATE_TIME?: DateTimeFilter<"ENGLISH"> | Date | string
  }

  export type ENGLISHOrderByWithRelationInput = {
    ID?: SortOrder
    CONTENT?: SortOrder
    CREATE_TIME?: SortOrder
    UPDATE_TIME?: SortOrder
    _relevance?: ENGLISHOrderByRelevanceInput
  }

  export type ENGLISHWhereUniqueInput = Prisma.AtLeast<{
    ID?: number
    AND?: ENGLISHWhereInput | ENGLISHWhereInput[]
    OR?: ENGLISHWhereInput[]
    NOT?: ENGLISHWhereInput | ENGLISHWhereInput[]
    CONTENT?: StringFilter<"ENGLISH"> | string
    CREATE_TIME?: DateTimeFilter<"ENGLISH"> | Date | string
    UPDATE_TIME?: DateTimeFilter<"ENGLISH"> | Date | string
  }, "ID">

  export type ENGLISHOrderByWithAggregationInput = {
    ID?: SortOrder
    CONTENT?: SortOrder
    CREATE_TIME?: SortOrder
    UPDATE_TIME?: SortOrder
    _count?: ENGLISHCountOrderByAggregateInput
    _avg?: ENGLISHAvgOrderByAggregateInput
    _max?: ENGLISHMaxOrderByAggregateInput
    _min?: ENGLISHMinOrderByAggregateInput
    _sum?: ENGLISHSumOrderByAggregateInput
  }

  export type ENGLISHScalarWhereWithAggregatesInput = {
    AND?: ENGLISHScalarWhereWithAggregatesInput | ENGLISHScalarWhereWithAggregatesInput[]
    OR?: ENGLISHScalarWhereWithAggregatesInput[]
    NOT?: ENGLISHScalarWhereWithAggregatesInput | ENGLISHScalarWhereWithAggregatesInput[]
    ID?: IntWithAggregatesFilter<"ENGLISH"> | number
    CONTENT?: StringWithAggregatesFilter<"ENGLISH"> | string
    CREATE_TIME?: DateTimeWithAggregatesFilter<"ENGLISH"> | Date | string
    UPDATE_TIME?: DateTimeWithAggregatesFilter<"ENGLISH"> | Date | string
  }

  export type VISIT_RECORDERWhereInput = {
    AND?: VISIT_RECORDERWhereInput | VISIT_RECORDERWhereInput[]
    OR?: VISIT_RECORDERWhereInput[]
    NOT?: VISIT_RECORDERWhereInput | VISIT_RECORDERWhereInput[]
    ID?: IntFilter<"VISIT_RECORDER"> | number
    IP?: StringNullableFilter<"VISIT_RECORDER"> | string | null
    CREATE_TIME?: DateTimeFilter<"VISIT_RECORDER"> | Date | string
  }

  export type VISIT_RECORDEROrderByWithRelationInput = {
    ID?: SortOrder
    IP?: SortOrderInput | SortOrder
    CREATE_TIME?: SortOrder
    _relevance?: VISIT_RECORDEROrderByRelevanceInput
  }

  export type VISIT_RECORDERWhereUniqueInput = Prisma.AtLeast<{
    ID?: number
    AND?: VISIT_RECORDERWhereInput | VISIT_RECORDERWhereInput[]
    OR?: VISIT_RECORDERWhereInput[]
    NOT?: VISIT_RECORDERWhereInput | VISIT_RECORDERWhereInput[]
    IP?: StringNullableFilter<"VISIT_RECORDER"> | string | null
    CREATE_TIME?: DateTimeFilter<"VISIT_RECORDER"> | Date | string
  }, "ID">

  export type VISIT_RECORDEROrderByWithAggregationInput = {
    ID?: SortOrder
    IP?: SortOrderInput | SortOrder
    CREATE_TIME?: SortOrder
    _count?: VISIT_RECORDERCountOrderByAggregateInput
    _avg?: VISIT_RECORDERAvgOrderByAggregateInput
    _max?: VISIT_RECORDERMaxOrderByAggregateInput
    _min?: VISIT_RECORDERMinOrderByAggregateInput
    _sum?: VISIT_RECORDERSumOrderByAggregateInput
  }

  export type VISIT_RECORDERScalarWhereWithAggregatesInput = {
    AND?: VISIT_RECORDERScalarWhereWithAggregatesInput | VISIT_RECORDERScalarWhereWithAggregatesInput[]
    OR?: VISIT_RECORDERScalarWhereWithAggregatesInput[]
    NOT?: VISIT_RECORDERScalarWhereWithAggregatesInput | VISIT_RECORDERScalarWhereWithAggregatesInput[]
    ID?: IntWithAggregatesFilter<"VISIT_RECORDER"> | number
    IP?: StringNullableWithAggregatesFilter<"VISIT_RECORDER"> | string | null
    CREATE_TIME?: DateTimeWithAggregatesFilter<"VISIT_RECORDER"> | Date | string
  }

  export type BLOGCreateInput = {
    BLOG_CREATE_TIME?: Date | string | null
    BLOG_UPDATE_TIME?: Date | string | null
    BLOG_TITLE?: string | null
    BLOG_CONTENT?: string | null
    IS_DELETE?: string | null
    BLOG_TAGS?: string | null
  }

  export type BLOGUncheckedCreateInput = {
    ID?: number
    BLOG_CREATE_TIME?: Date | string | null
    BLOG_UPDATE_TIME?: Date | string | null
    BLOG_TITLE?: string | null
    BLOG_CONTENT?: string | null
    IS_DELETE?: string | null
    BLOG_TAGS?: string | null
  }

  export type BLOGUpdateInput = {
    BLOG_CREATE_TIME?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    BLOG_UPDATE_TIME?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    BLOG_TITLE?: NullableStringFieldUpdateOperationsInput | string | null
    BLOG_CONTENT?: NullableStringFieldUpdateOperationsInput | string | null
    IS_DELETE?: NullableStringFieldUpdateOperationsInput | string | null
    BLOG_TAGS?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BLOGUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    BLOG_CREATE_TIME?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    BLOG_UPDATE_TIME?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    BLOG_TITLE?: NullableStringFieldUpdateOperationsInput | string | null
    BLOG_CONTENT?: NullableStringFieldUpdateOperationsInput | string | null
    IS_DELETE?: NullableStringFieldUpdateOperationsInput | string | null
    BLOG_TAGS?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BLOGCreateManyInput = {
    ID?: number
    BLOG_CREATE_TIME?: Date | string | null
    BLOG_UPDATE_TIME?: Date | string | null
    BLOG_TITLE?: string | null
    BLOG_CONTENT?: string | null
    IS_DELETE?: string | null
    BLOG_TAGS?: string | null
  }

  export type BLOGUpdateManyMutationInput = {
    BLOG_CREATE_TIME?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    BLOG_UPDATE_TIME?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    BLOG_TITLE?: NullableStringFieldUpdateOperationsInput | string | null
    BLOG_CONTENT?: NullableStringFieldUpdateOperationsInput | string | null
    IS_DELETE?: NullableStringFieldUpdateOperationsInput | string | null
    BLOG_TAGS?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BLOGUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    BLOG_CREATE_TIME?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    BLOG_UPDATE_TIME?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    BLOG_TITLE?: NullableStringFieldUpdateOperationsInput | string | null
    BLOG_CONTENT?: NullableStringFieldUpdateOperationsInput | string | null
    IS_DELETE?: NullableStringFieldUpdateOperationsInput | string | null
    BLOG_TAGS?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ENGLISHCreateInput = {
    CONTENT: string
    CREATE_TIME?: Date | string
    UPDATE_TIME?: Date | string
  }

  export type ENGLISHUncheckedCreateInput = {
    ID?: number
    CONTENT: string
    CREATE_TIME?: Date | string
    UPDATE_TIME?: Date | string
  }

  export type ENGLISHUpdateInput = {
    CONTENT?: StringFieldUpdateOperationsInput | string
    CREATE_TIME?: DateTimeFieldUpdateOperationsInput | Date | string
    UPDATE_TIME?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ENGLISHUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    CONTENT?: StringFieldUpdateOperationsInput | string
    CREATE_TIME?: DateTimeFieldUpdateOperationsInput | Date | string
    UPDATE_TIME?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ENGLISHCreateManyInput = {
    ID?: number
    CONTENT: string
    CREATE_TIME?: Date | string
    UPDATE_TIME?: Date | string
  }

  export type ENGLISHUpdateManyMutationInput = {
    CONTENT?: StringFieldUpdateOperationsInput | string
    CREATE_TIME?: DateTimeFieldUpdateOperationsInput | Date | string
    UPDATE_TIME?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ENGLISHUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    CONTENT?: StringFieldUpdateOperationsInput | string
    CREATE_TIME?: DateTimeFieldUpdateOperationsInput | Date | string
    UPDATE_TIME?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VISIT_RECORDERCreateInput = {
    IP?: string | null
    CREATE_TIME?: Date | string
  }

  export type VISIT_RECORDERUncheckedCreateInput = {
    ID?: number
    IP?: string | null
    CREATE_TIME?: Date | string
  }

  export type VISIT_RECORDERUpdateInput = {
    IP?: NullableStringFieldUpdateOperationsInput | string | null
    CREATE_TIME?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VISIT_RECORDERUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    IP?: NullableStringFieldUpdateOperationsInput | string | null
    CREATE_TIME?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VISIT_RECORDERCreateManyInput = {
    ID?: number
    IP?: string | null
    CREATE_TIME?: Date | string
  }

  export type VISIT_RECORDERUpdateManyMutationInput = {
    IP?: NullableStringFieldUpdateOperationsInput | string | null
    CREATE_TIME?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VISIT_RECORDERUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    IP?: NullableStringFieldUpdateOperationsInput | string | null
    CREATE_TIME?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BLOGOrderByRelevanceInput = {
    fields: BLOGOrderByRelevanceFieldEnum | BLOGOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BLOGCountOrderByAggregateInput = {
    ID?: SortOrder
    BLOG_CREATE_TIME?: SortOrder
    BLOG_UPDATE_TIME?: SortOrder
    BLOG_TITLE?: SortOrder
    BLOG_CONTENT?: SortOrder
    IS_DELETE?: SortOrder
    BLOG_TAGS?: SortOrder
  }

  export type BLOGAvgOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type BLOGMaxOrderByAggregateInput = {
    ID?: SortOrder
    BLOG_CREATE_TIME?: SortOrder
    BLOG_UPDATE_TIME?: SortOrder
    BLOG_TITLE?: SortOrder
    BLOG_CONTENT?: SortOrder
    IS_DELETE?: SortOrder
    BLOG_TAGS?: SortOrder
  }

  export type BLOGMinOrderByAggregateInput = {
    ID?: SortOrder
    BLOG_CREATE_TIME?: SortOrder
    BLOG_UPDATE_TIME?: SortOrder
    BLOG_TITLE?: SortOrder
    BLOG_CONTENT?: SortOrder
    IS_DELETE?: SortOrder
    BLOG_TAGS?: SortOrder
  }

  export type BLOGSumOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ENGLISHOrderByRelevanceInput = {
    fields: ENGLISHOrderByRelevanceFieldEnum | ENGLISHOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ENGLISHCountOrderByAggregateInput = {
    ID?: SortOrder
    CONTENT?: SortOrder
    CREATE_TIME?: SortOrder
    UPDATE_TIME?: SortOrder
  }

  export type ENGLISHAvgOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type ENGLISHMaxOrderByAggregateInput = {
    ID?: SortOrder
    CONTENT?: SortOrder
    CREATE_TIME?: SortOrder
    UPDATE_TIME?: SortOrder
  }

  export type ENGLISHMinOrderByAggregateInput = {
    ID?: SortOrder
    CONTENT?: SortOrder
    CREATE_TIME?: SortOrder
    UPDATE_TIME?: SortOrder
  }

  export type ENGLISHSumOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type VISIT_RECORDEROrderByRelevanceInput = {
    fields: VISIT_RECORDEROrderByRelevanceFieldEnum | VISIT_RECORDEROrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VISIT_RECORDERCountOrderByAggregateInput = {
    ID?: SortOrder
    IP?: SortOrder
    CREATE_TIME?: SortOrder
  }

  export type VISIT_RECORDERAvgOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type VISIT_RECORDERMaxOrderByAggregateInput = {
    ID?: SortOrder
    IP?: SortOrder
    CREATE_TIME?: SortOrder
  }

  export type VISIT_RECORDERMinOrderByAggregateInput = {
    ID?: SortOrder
    IP?: SortOrder
    CREATE_TIME?: SortOrder
  }

  export type VISIT_RECORDERSumOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}