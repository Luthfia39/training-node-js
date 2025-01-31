
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
 * Model mst_notif
 * 
 */
export type mst_notif = $Result.DefaultSelection<Prisma.$mst_notifPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Mst_notifs
 * const mst_notifs = await prisma.mst_notif.findMany()
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
   * // Fetch zero or more Mst_notifs
   * const mst_notifs = await prisma.mst_notif.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.mst_notif`: Exposes CRUD operations for the **mst_notif** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mst_notifs
    * const mst_notifs = await prisma.mst_notif.findMany()
    * ```
    */
  get mst_notif(): Prisma.mst_notifDelegate<ExtArgs>;
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
   * Prisma Client JS version: 6.0.1
   * Query Engine version: 5dbef10bdbfb579e07d35cc85fb1518d357cb99e
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    mst_notif: 'mst_notif'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "mst_notif"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      mst_notif: {
        payload: Prisma.$mst_notifPayload<ExtArgs>
        fields: Prisma.mst_notifFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mst_notifFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_notifPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mst_notifFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_notifPayload>
          }
          findFirst: {
            args: Prisma.mst_notifFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_notifPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mst_notifFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_notifPayload>
          }
          findMany: {
            args: Prisma.mst_notifFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_notifPayload>[]
          }
          create: {
            args: Prisma.mst_notifCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_notifPayload>
          }
          createMany: {
            args: Prisma.mst_notifCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.mst_notifCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_notifPayload>[]
          }
          delete: {
            args: Prisma.mst_notifDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_notifPayload>
          }
          update: {
            args: Prisma.mst_notifUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_notifPayload>
          }
          deleteMany: {
            args: Prisma.mst_notifDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mst_notifUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.mst_notifUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_notifPayload>
          }
          aggregate: {
            args: Prisma.Mst_notifAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMst_notif>
          }
          groupBy: {
            args: Prisma.mst_notifGroupByArgs<ExtArgs>
            result: $Utils.Optional<Mst_notifGroupByOutputType>[]
          }
          count: {
            args: Prisma.mst_notifCountArgs<ExtArgs>
            result: $Utils.Optional<Mst_notifCountAggregateOutputType> | number
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
   * Model mst_notif
   */

  export type AggregateMst_notif = {
    _count: Mst_notifCountAggregateOutputType | null
    _avg: Mst_notifAvgAggregateOutputType | null
    _sum: Mst_notifSumAggregateOutputType | null
    _min: Mst_notifMinAggregateOutputType | null
    _max: Mst_notifMaxAggregateOutputType | null
  }

  export type Mst_notifAvgAggregateOutputType = {
    id: number | null
  }

  export type Mst_notifSumAggregateOutputType = {
    id: number | null
  }

  export type Mst_notifMinAggregateOutputType = {
    id: number | null
    notif_name: string | null
  }

  export type Mst_notifMaxAggregateOutputType = {
    id: number | null
    notif_name: string | null
  }

  export type Mst_notifCountAggregateOutputType = {
    id: number
    notif_name: number
    _all: number
  }


  export type Mst_notifAvgAggregateInputType = {
    id?: true
  }

  export type Mst_notifSumAggregateInputType = {
    id?: true
  }

  export type Mst_notifMinAggregateInputType = {
    id?: true
    notif_name?: true
  }

  export type Mst_notifMaxAggregateInputType = {
    id?: true
    notif_name?: true
  }

  export type Mst_notifCountAggregateInputType = {
    id?: true
    notif_name?: true
    _all?: true
  }

  export type Mst_notifAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mst_notif to aggregate.
     */
    where?: mst_notifWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_notifs to fetch.
     */
    orderBy?: mst_notifOrderByWithRelationInput | mst_notifOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mst_notifWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_notifs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_notifs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mst_notifs
    **/
    _count?: true | Mst_notifCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Mst_notifAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Mst_notifSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Mst_notifMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Mst_notifMaxAggregateInputType
  }

  export type GetMst_notifAggregateType<T extends Mst_notifAggregateArgs> = {
        [P in keyof T & keyof AggregateMst_notif]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMst_notif[P]>
      : GetScalarType<T[P], AggregateMst_notif[P]>
  }




  export type mst_notifGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mst_notifWhereInput
    orderBy?: mst_notifOrderByWithAggregationInput | mst_notifOrderByWithAggregationInput[]
    by: Mst_notifScalarFieldEnum[] | Mst_notifScalarFieldEnum
    having?: mst_notifScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Mst_notifCountAggregateInputType | true
    _avg?: Mst_notifAvgAggregateInputType
    _sum?: Mst_notifSumAggregateInputType
    _min?: Mst_notifMinAggregateInputType
    _max?: Mst_notifMaxAggregateInputType
  }

  export type Mst_notifGroupByOutputType = {
    id: number
    notif_name: string
    _count: Mst_notifCountAggregateOutputType | null
    _avg: Mst_notifAvgAggregateOutputType | null
    _sum: Mst_notifSumAggregateOutputType | null
    _min: Mst_notifMinAggregateOutputType | null
    _max: Mst_notifMaxAggregateOutputType | null
  }

  type GetMst_notifGroupByPayload<T extends mst_notifGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Mst_notifGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Mst_notifGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Mst_notifGroupByOutputType[P]>
            : GetScalarType<T[P], Mst_notifGroupByOutputType[P]>
        }
      >
    >


  export type mst_notifSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    notif_name?: boolean
  }, ExtArgs["result"]["mst_notif"]>

  export type mst_notifSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    notif_name?: boolean
  }, ExtArgs["result"]["mst_notif"]>

  export type mst_notifSelectScalar = {
    id?: boolean
    notif_name?: boolean
  }


  export type $mst_notifPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mst_notif"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      notif_name: string
    }, ExtArgs["result"]["mst_notif"]>
    composites: {}
  }

  type mst_notifGetPayload<S extends boolean | null | undefined | mst_notifDefaultArgs> = $Result.GetResult<Prisma.$mst_notifPayload, S>

  type mst_notifCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<mst_notifFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Mst_notifCountAggregateInputType | true
    }

  export interface mst_notifDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mst_notif'], meta: { name: 'mst_notif' } }
    /**
     * Find zero or one Mst_notif that matches the filter.
     * @param {mst_notifFindUniqueArgs} args - Arguments to find a Mst_notif
     * @example
     * // Get one Mst_notif
     * const mst_notif = await prisma.mst_notif.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mst_notifFindUniqueArgs>(args: SelectSubset<T, mst_notifFindUniqueArgs<ExtArgs>>): Prisma__mst_notifClient<$Result.GetResult<Prisma.$mst_notifPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Mst_notif that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {mst_notifFindUniqueOrThrowArgs} args - Arguments to find a Mst_notif
     * @example
     * // Get one Mst_notif
     * const mst_notif = await prisma.mst_notif.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mst_notifFindUniqueOrThrowArgs>(args: SelectSubset<T, mst_notifFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mst_notifClient<$Result.GetResult<Prisma.$mst_notifPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Mst_notif that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_notifFindFirstArgs} args - Arguments to find a Mst_notif
     * @example
     * // Get one Mst_notif
     * const mst_notif = await prisma.mst_notif.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mst_notifFindFirstArgs>(args?: SelectSubset<T, mst_notifFindFirstArgs<ExtArgs>>): Prisma__mst_notifClient<$Result.GetResult<Prisma.$mst_notifPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Mst_notif that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_notifFindFirstOrThrowArgs} args - Arguments to find a Mst_notif
     * @example
     * // Get one Mst_notif
     * const mst_notif = await prisma.mst_notif.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mst_notifFindFirstOrThrowArgs>(args?: SelectSubset<T, mst_notifFindFirstOrThrowArgs<ExtArgs>>): Prisma__mst_notifClient<$Result.GetResult<Prisma.$mst_notifPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Mst_notifs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_notifFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mst_notifs
     * const mst_notifs = await prisma.mst_notif.findMany()
     * 
     * // Get first 10 Mst_notifs
     * const mst_notifs = await prisma.mst_notif.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mst_notifWithIdOnly = await prisma.mst_notif.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends mst_notifFindManyArgs>(args?: SelectSubset<T, mst_notifFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mst_notifPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Mst_notif.
     * @param {mst_notifCreateArgs} args - Arguments to create a Mst_notif.
     * @example
     * // Create one Mst_notif
     * const Mst_notif = await prisma.mst_notif.create({
     *   data: {
     *     // ... data to create a Mst_notif
     *   }
     * })
     * 
     */
    create<T extends mst_notifCreateArgs>(args: SelectSubset<T, mst_notifCreateArgs<ExtArgs>>): Prisma__mst_notifClient<$Result.GetResult<Prisma.$mst_notifPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Mst_notifs.
     * @param {mst_notifCreateManyArgs} args - Arguments to create many Mst_notifs.
     * @example
     * // Create many Mst_notifs
     * const mst_notif = await prisma.mst_notif.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mst_notifCreateManyArgs>(args?: SelectSubset<T, mst_notifCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mst_notifs and returns the data saved in the database.
     * @param {mst_notifCreateManyAndReturnArgs} args - Arguments to create many Mst_notifs.
     * @example
     * // Create many Mst_notifs
     * const mst_notif = await prisma.mst_notif.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mst_notifs and only return the `id`
     * const mst_notifWithIdOnly = await prisma.mst_notif.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends mst_notifCreateManyAndReturnArgs>(args?: SelectSubset<T, mst_notifCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mst_notifPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Mst_notif.
     * @param {mst_notifDeleteArgs} args - Arguments to delete one Mst_notif.
     * @example
     * // Delete one Mst_notif
     * const Mst_notif = await prisma.mst_notif.delete({
     *   where: {
     *     // ... filter to delete one Mst_notif
     *   }
     * })
     * 
     */
    delete<T extends mst_notifDeleteArgs>(args: SelectSubset<T, mst_notifDeleteArgs<ExtArgs>>): Prisma__mst_notifClient<$Result.GetResult<Prisma.$mst_notifPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Mst_notif.
     * @param {mst_notifUpdateArgs} args - Arguments to update one Mst_notif.
     * @example
     * // Update one Mst_notif
     * const mst_notif = await prisma.mst_notif.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mst_notifUpdateArgs>(args: SelectSubset<T, mst_notifUpdateArgs<ExtArgs>>): Prisma__mst_notifClient<$Result.GetResult<Prisma.$mst_notifPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Mst_notifs.
     * @param {mst_notifDeleteManyArgs} args - Arguments to filter Mst_notifs to delete.
     * @example
     * // Delete a few Mst_notifs
     * const { count } = await prisma.mst_notif.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mst_notifDeleteManyArgs>(args?: SelectSubset<T, mst_notifDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mst_notifs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_notifUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mst_notifs
     * const mst_notif = await prisma.mst_notif.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mst_notifUpdateManyArgs>(args: SelectSubset<T, mst_notifUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mst_notif.
     * @param {mst_notifUpsertArgs} args - Arguments to update or create a Mst_notif.
     * @example
     * // Update or create a Mst_notif
     * const mst_notif = await prisma.mst_notif.upsert({
     *   create: {
     *     // ... data to create a Mst_notif
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mst_notif we want to update
     *   }
     * })
     */
    upsert<T extends mst_notifUpsertArgs>(args: SelectSubset<T, mst_notifUpsertArgs<ExtArgs>>): Prisma__mst_notifClient<$Result.GetResult<Prisma.$mst_notifPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Mst_notifs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_notifCountArgs} args - Arguments to filter Mst_notifs to count.
     * @example
     * // Count the number of Mst_notifs
     * const count = await prisma.mst_notif.count({
     *   where: {
     *     // ... the filter for the Mst_notifs we want to count
     *   }
     * })
    **/
    count<T extends mst_notifCountArgs>(
      args?: Subset<T, mst_notifCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Mst_notifCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mst_notif.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mst_notifAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Mst_notifAggregateArgs>(args: Subset<T, Mst_notifAggregateArgs>): Prisma.PrismaPromise<GetMst_notifAggregateType<T>>

    /**
     * Group by Mst_notif.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_notifGroupByArgs} args - Group by arguments.
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
      T extends mst_notifGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mst_notifGroupByArgs['orderBy'] }
        : { orderBy?: mst_notifGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, mst_notifGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMst_notifGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mst_notif model
   */
  readonly fields: mst_notifFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mst_notif.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mst_notifClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the mst_notif model
   */ 
  interface mst_notifFieldRefs {
    readonly id: FieldRef<"mst_notif", 'Int'>
    readonly notif_name: FieldRef<"mst_notif", 'String'>
  }
    

  // Custom InputTypes
  /**
   * mst_notif findUnique
   */
  export type mst_notifFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_notif
     */
    select?: mst_notifSelect<ExtArgs> | null
    /**
     * Filter, which mst_notif to fetch.
     */
    where: mst_notifWhereUniqueInput
  }

  /**
   * mst_notif findUniqueOrThrow
   */
  export type mst_notifFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_notif
     */
    select?: mst_notifSelect<ExtArgs> | null
    /**
     * Filter, which mst_notif to fetch.
     */
    where: mst_notifWhereUniqueInput
  }

  /**
   * mst_notif findFirst
   */
  export type mst_notifFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_notif
     */
    select?: mst_notifSelect<ExtArgs> | null
    /**
     * Filter, which mst_notif to fetch.
     */
    where?: mst_notifWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_notifs to fetch.
     */
    orderBy?: mst_notifOrderByWithRelationInput | mst_notifOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mst_notifs.
     */
    cursor?: mst_notifWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_notifs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_notifs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mst_notifs.
     */
    distinct?: Mst_notifScalarFieldEnum | Mst_notifScalarFieldEnum[]
  }

  /**
   * mst_notif findFirstOrThrow
   */
  export type mst_notifFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_notif
     */
    select?: mst_notifSelect<ExtArgs> | null
    /**
     * Filter, which mst_notif to fetch.
     */
    where?: mst_notifWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_notifs to fetch.
     */
    orderBy?: mst_notifOrderByWithRelationInput | mst_notifOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mst_notifs.
     */
    cursor?: mst_notifWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_notifs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_notifs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mst_notifs.
     */
    distinct?: Mst_notifScalarFieldEnum | Mst_notifScalarFieldEnum[]
  }

  /**
   * mst_notif findMany
   */
  export type mst_notifFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_notif
     */
    select?: mst_notifSelect<ExtArgs> | null
    /**
     * Filter, which mst_notifs to fetch.
     */
    where?: mst_notifWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_notifs to fetch.
     */
    orderBy?: mst_notifOrderByWithRelationInput | mst_notifOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mst_notifs.
     */
    cursor?: mst_notifWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_notifs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_notifs.
     */
    skip?: number
    distinct?: Mst_notifScalarFieldEnum | Mst_notifScalarFieldEnum[]
  }

  /**
   * mst_notif create
   */
  export type mst_notifCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_notif
     */
    select?: mst_notifSelect<ExtArgs> | null
    /**
     * The data needed to create a mst_notif.
     */
    data: XOR<mst_notifCreateInput, mst_notifUncheckedCreateInput>
  }

  /**
   * mst_notif createMany
   */
  export type mst_notifCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mst_notifs.
     */
    data: mst_notifCreateManyInput | mst_notifCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mst_notif createManyAndReturn
   */
  export type mst_notifCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_notif
     */
    select?: mst_notifSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many mst_notifs.
     */
    data: mst_notifCreateManyInput | mst_notifCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mst_notif update
   */
  export type mst_notifUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_notif
     */
    select?: mst_notifSelect<ExtArgs> | null
    /**
     * The data needed to update a mst_notif.
     */
    data: XOR<mst_notifUpdateInput, mst_notifUncheckedUpdateInput>
    /**
     * Choose, which mst_notif to update.
     */
    where: mst_notifWhereUniqueInput
  }

  /**
   * mst_notif updateMany
   */
  export type mst_notifUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mst_notifs.
     */
    data: XOR<mst_notifUpdateManyMutationInput, mst_notifUncheckedUpdateManyInput>
    /**
     * Filter which mst_notifs to update
     */
    where?: mst_notifWhereInput
  }

  /**
   * mst_notif upsert
   */
  export type mst_notifUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_notif
     */
    select?: mst_notifSelect<ExtArgs> | null
    /**
     * The filter to search for the mst_notif to update in case it exists.
     */
    where: mst_notifWhereUniqueInput
    /**
     * In case the mst_notif found by the `where` argument doesn't exist, create a new mst_notif with this data.
     */
    create: XOR<mst_notifCreateInput, mst_notifUncheckedCreateInput>
    /**
     * In case the mst_notif was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mst_notifUpdateInput, mst_notifUncheckedUpdateInput>
  }

  /**
   * mst_notif delete
   */
  export type mst_notifDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_notif
     */
    select?: mst_notifSelect<ExtArgs> | null
    /**
     * Filter which mst_notif to delete.
     */
    where: mst_notifWhereUniqueInput
  }

  /**
   * mst_notif deleteMany
   */
  export type mst_notifDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mst_notifs to delete
     */
    where?: mst_notifWhereInput
  }

  /**
   * mst_notif without action
   */
  export type mst_notifDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_notif
     */
    select?: mst_notifSelect<ExtArgs> | null
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


  export const Mst_notifScalarFieldEnum: {
    id: 'id',
    notif_name: 'notif_name'
  };

  export type Mst_notifScalarFieldEnum = (typeof Mst_notifScalarFieldEnum)[keyof typeof Mst_notifScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type mst_notifWhereInput = {
    AND?: mst_notifWhereInput | mst_notifWhereInput[]
    OR?: mst_notifWhereInput[]
    NOT?: mst_notifWhereInput | mst_notifWhereInput[]
    id?: IntFilter<"mst_notif"> | number
    notif_name?: StringFilter<"mst_notif"> | string
  }

  export type mst_notifOrderByWithRelationInput = {
    id?: SortOrder
    notif_name?: SortOrder
  }

  export type mst_notifWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: mst_notifWhereInput | mst_notifWhereInput[]
    OR?: mst_notifWhereInput[]
    NOT?: mst_notifWhereInput | mst_notifWhereInput[]
    notif_name?: StringFilter<"mst_notif"> | string
  }, "id">

  export type mst_notifOrderByWithAggregationInput = {
    id?: SortOrder
    notif_name?: SortOrder
    _count?: mst_notifCountOrderByAggregateInput
    _avg?: mst_notifAvgOrderByAggregateInput
    _max?: mst_notifMaxOrderByAggregateInput
    _min?: mst_notifMinOrderByAggregateInput
    _sum?: mst_notifSumOrderByAggregateInput
  }

  export type mst_notifScalarWhereWithAggregatesInput = {
    AND?: mst_notifScalarWhereWithAggregatesInput | mst_notifScalarWhereWithAggregatesInput[]
    OR?: mst_notifScalarWhereWithAggregatesInput[]
    NOT?: mst_notifScalarWhereWithAggregatesInput | mst_notifScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"mst_notif"> | number
    notif_name?: StringWithAggregatesFilter<"mst_notif"> | string
  }

  export type mst_notifCreateInput = {
    notif_name: string
  }

  export type mst_notifUncheckedCreateInput = {
    id?: number
    notif_name: string
  }

  export type mst_notifUpdateInput = {
    notif_name?: StringFieldUpdateOperationsInput | string
  }

  export type mst_notifUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    notif_name?: StringFieldUpdateOperationsInput | string
  }

  export type mst_notifCreateManyInput = {
    id?: number
    notif_name: string
  }

  export type mst_notifUpdateManyMutationInput = {
    notif_name?: StringFieldUpdateOperationsInput | string
  }

  export type mst_notifUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    notif_name?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type mst_notifCountOrderByAggregateInput = {
    id?: SortOrder
    notif_name?: SortOrder
  }

  export type mst_notifAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type mst_notifMaxOrderByAggregateInput = {
    id?: SortOrder
    notif_name?: SortOrder
  }

  export type mst_notifMinOrderByAggregateInput = {
    id?: SortOrder
    notif_name?: SortOrder
  }

  export type mst_notifSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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