
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
 * Model Drone
 * 
 */
export type Drone = $Result.DefaultSelection<Prisma.$DronePayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model Trip
 * 
 */
export type Trip = $Result.DefaultSelection<Prisma.$TripPayload>
/**
 * Model Leg
 * 
 */
export type Leg = $Result.DefaultSelection<Prisma.$LegPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const DroneStatus: {
  IDLE: 'IDLE',
  CHARGING: 'CHARGING',
  MAINTENANCE: 'MAINTENANCE'
};

export type DroneStatus = (typeof DroneStatus)[keyof typeof DroneStatus]


export const OrderPriority: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH'
};

export type OrderPriority = (typeof OrderPriority)[keyof typeof OrderPriority]


export const OrderStatus: {
  PENDING: 'PENDING',
  SCHEDULED: 'SCHEDULED',
  DELIVERED: 'DELIVERED',
  CANCELLED: 'CANCELLED'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]

}

export type DroneStatus = $Enums.DroneStatus

export const DroneStatus: typeof $Enums.DroneStatus

export type OrderPriority = $Enums.OrderPriority

export const OrderPriority: typeof $Enums.OrderPriority

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Drones
 * const drones = await prisma.drone.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Drones
   * const drones = await prisma.drone.findMany()
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
   * `prisma.drone`: Exposes CRUD operations for the **Drone** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Drones
    * const drones = await prisma.drone.findMany()
    * ```
    */
  get drone(): Prisma.DroneDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trip`: Exposes CRUD operations for the **Trip** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trips
    * const trips = await prisma.trip.findMany()
    * ```
    */
  get trip(): Prisma.TripDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leg`: Exposes CRUD operations for the **Leg** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Legs
    * const legs = await prisma.leg.findMany()
    * ```
    */
  get leg(): Prisma.LegDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
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
    Drone: 'Drone',
    Order: 'Order',
    Trip: 'Trip',
    Leg: 'Leg'
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
      modelProps: "drone" | "order" | "trip" | "leg"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Drone: {
        payload: Prisma.$DronePayload<ExtArgs>
        fields: Prisma.DroneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DroneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DronePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DroneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DronePayload>
          }
          findFirst: {
            args: Prisma.DroneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DronePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DroneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DronePayload>
          }
          findMany: {
            args: Prisma.DroneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DronePayload>[]
          }
          create: {
            args: Prisma.DroneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DronePayload>
          }
          createMany: {
            args: Prisma.DroneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DroneCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DronePayload>[]
          }
          delete: {
            args: Prisma.DroneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DronePayload>
          }
          update: {
            args: Prisma.DroneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DronePayload>
          }
          deleteMany: {
            args: Prisma.DroneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DroneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DroneUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DronePayload>[]
          }
          upsert: {
            args: Prisma.DroneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DronePayload>
          }
          aggregate: {
            args: Prisma.DroneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDrone>
          }
          groupBy: {
            args: Prisma.DroneGroupByArgs<ExtArgs>
            result: $Utils.Optional<DroneGroupByOutputType>[]
          }
          count: {
            args: Prisma.DroneCountArgs<ExtArgs>
            result: $Utils.Optional<DroneCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      Trip: {
        payload: Prisma.$TripPayload<ExtArgs>
        fields: Prisma.TripFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TripFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TripFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          findFirst: {
            args: Prisma.TripFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TripFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          findMany: {
            args: Prisma.TripFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>[]
          }
          create: {
            args: Prisma.TripCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          createMany: {
            args: Prisma.TripCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TripCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>[]
          }
          delete: {
            args: Prisma.TripDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          update: {
            args: Prisma.TripUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          deleteMany: {
            args: Prisma.TripDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TripUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TripUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>[]
          }
          upsert: {
            args: Prisma.TripUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          aggregate: {
            args: Prisma.TripAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrip>
          }
          groupBy: {
            args: Prisma.TripGroupByArgs<ExtArgs>
            result: $Utils.Optional<TripGroupByOutputType>[]
          }
          count: {
            args: Prisma.TripCountArgs<ExtArgs>
            result: $Utils.Optional<TripCountAggregateOutputType> | number
          }
        }
      }
      Leg: {
        payload: Prisma.$LegPayload<ExtArgs>
        fields: Prisma.LegFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LegFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LegFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegPayload>
          }
          findFirst: {
            args: Prisma.LegFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LegFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegPayload>
          }
          findMany: {
            args: Prisma.LegFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegPayload>[]
          }
          create: {
            args: Prisma.LegCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegPayload>
          }
          createMany: {
            args: Prisma.LegCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LegCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegPayload>[]
          }
          delete: {
            args: Prisma.LegDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegPayload>
          }
          update: {
            args: Prisma.LegUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegPayload>
          }
          deleteMany: {
            args: Prisma.LegDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LegUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LegUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegPayload>[]
          }
          upsert: {
            args: Prisma.LegUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LegPayload>
          }
          aggregate: {
            args: Prisma.LegAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeg>
          }
          groupBy: {
            args: Prisma.LegGroupByArgs<ExtArgs>
            result: $Utils.Optional<LegGroupByOutputType>[]
          }
          count: {
            args: Prisma.LegCountArgs<ExtArgs>
            result: $Utils.Optional<LegCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    drone?: DroneOmit
    order?: OrderOmit
    trip?: TripOmit
    leg?: LegOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type DroneCountOutputType
   */

  export type DroneCountOutputType = {
    Trip: number
  }

  export type DroneCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Trip?: boolean | DroneCountOutputTypeCountTripArgs
  }

  // Custom InputTypes
  /**
   * DroneCountOutputType without action
   */
  export type DroneCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DroneCountOutputType
     */
    select?: DroneCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DroneCountOutputType without action
   */
  export type DroneCountOutputTypeCountTripArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
  }


  /**
   * Count Type TripCountOutputType
   */

  export type TripCountOutputType = {
    legs: number
  }

  export type TripCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    legs?: boolean | TripCountOutputTypeCountLegsArgs
  }

  // Custom InputTypes
  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripCountOutputType
     */
    select?: TripCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountLegsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LegWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Drone
   */

  export type AggregateDrone = {
    _count: DroneCountAggregateOutputType | null
    _avg: DroneAvgAggregateOutputType | null
    _sum: DroneSumAggregateOutputType | null
    _min: DroneMinAggregateOutputType | null
    _max: DroneMaxAggregateOutputType | null
  }

  export type DroneAvgAggregateOutputType = {
    id: number | null
    maxPayloadKg: number | null
    maxRangeKm: number | null
    batteryPct: number | null
    baseX: number | null
    baseY: number | null
  }

  export type DroneSumAggregateOutputType = {
    id: number | null
    maxPayloadKg: number | null
    maxRangeKm: number | null
    batteryPct: number | null
    baseX: number | null
    baseY: number | null
  }

  export type DroneMinAggregateOutputType = {
    id: number | null
    name: string | null
    maxPayloadKg: number | null
    maxRangeKm: number | null
    batteryPct: number | null
    status: $Enums.DroneStatus | null
    baseX: number | null
    baseY: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DroneMaxAggregateOutputType = {
    id: number | null
    name: string | null
    maxPayloadKg: number | null
    maxRangeKm: number | null
    batteryPct: number | null
    status: $Enums.DroneStatus | null
    baseX: number | null
    baseY: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DroneCountAggregateOutputType = {
    id: number
    name: number
    maxPayloadKg: number
    maxRangeKm: number
    batteryPct: number
    status: number
    baseX: number
    baseY: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DroneAvgAggregateInputType = {
    id?: true
    maxPayloadKg?: true
    maxRangeKm?: true
    batteryPct?: true
    baseX?: true
    baseY?: true
  }

  export type DroneSumAggregateInputType = {
    id?: true
    maxPayloadKg?: true
    maxRangeKm?: true
    batteryPct?: true
    baseX?: true
    baseY?: true
  }

  export type DroneMinAggregateInputType = {
    id?: true
    name?: true
    maxPayloadKg?: true
    maxRangeKm?: true
    batteryPct?: true
    status?: true
    baseX?: true
    baseY?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DroneMaxAggregateInputType = {
    id?: true
    name?: true
    maxPayloadKg?: true
    maxRangeKm?: true
    batteryPct?: true
    status?: true
    baseX?: true
    baseY?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DroneCountAggregateInputType = {
    id?: true
    name?: true
    maxPayloadKg?: true
    maxRangeKm?: true
    batteryPct?: true
    status?: true
    baseX?: true
    baseY?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DroneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Drone to aggregate.
     */
    where?: DroneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drones to fetch.
     */
    orderBy?: DroneOrderByWithRelationInput | DroneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DroneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Drones
    **/
    _count?: true | DroneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DroneAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DroneSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DroneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DroneMaxAggregateInputType
  }

  export type GetDroneAggregateType<T extends DroneAggregateArgs> = {
        [P in keyof T & keyof AggregateDrone]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDrone[P]>
      : GetScalarType<T[P], AggregateDrone[P]>
  }




  export type DroneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DroneWhereInput
    orderBy?: DroneOrderByWithAggregationInput | DroneOrderByWithAggregationInput[]
    by: DroneScalarFieldEnum[] | DroneScalarFieldEnum
    having?: DroneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DroneCountAggregateInputType | true
    _avg?: DroneAvgAggregateInputType
    _sum?: DroneSumAggregateInputType
    _min?: DroneMinAggregateInputType
    _max?: DroneMaxAggregateInputType
  }

  export type DroneGroupByOutputType = {
    id: number
    name: string
    maxPayloadKg: number
    maxRangeKm: number
    batteryPct: number
    status: $Enums.DroneStatus
    baseX: number
    baseY: number
    createdAt: Date
    updatedAt: Date
    _count: DroneCountAggregateOutputType | null
    _avg: DroneAvgAggregateOutputType | null
    _sum: DroneSumAggregateOutputType | null
    _min: DroneMinAggregateOutputType | null
    _max: DroneMaxAggregateOutputType | null
  }

  type GetDroneGroupByPayload<T extends DroneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DroneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DroneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DroneGroupByOutputType[P]>
            : GetScalarType<T[P], DroneGroupByOutputType[P]>
        }
      >
    >


  export type DroneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    maxPayloadKg?: boolean
    maxRangeKm?: boolean
    batteryPct?: boolean
    status?: boolean
    baseX?: boolean
    baseY?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Trip?: boolean | Drone$TripArgs<ExtArgs>
    _count?: boolean | DroneCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["drone"]>

  export type DroneSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    maxPayloadKg?: boolean
    maxRangeKm?: boolean
    batteryPct?: boolean
    status?: boolean
    baseX?: boolean
    baseY?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["drone"]>

  export type DroneSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    maxPayloadKg?: boolean
    maxRangeKm?: boolean
    batteryPct?: boolean
    status?: boolean
    baseX?: boolean
    baseY?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["drone"]>

  export type DroneSelectScalar = {
    id?: boolean
    name?: boolean
    maxPayloadKg?: boolean
    maxRangeKm?: boolean
    batteryPct?: boolean
    status?: boolean
    baseX?: boolean
    baseY?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DroneOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "maxPayloadKg" | "maxRangeKm" | "batteryPct" | "status" | "baseX" | "baseY" | "createdAt" | "updatedAt", ExtArgs["result"]["drone"]>
  export type DroneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Trip?: boolean | Drone$TripArgs<ExtArgs>
    _count?: boolean | DroneCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DroneIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DroneIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DronePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Drone"
    objects: {
      Trip: Prisma.$TripPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      maxPayloadKg: number
      maxRangeKm: number
      batteryPct: number
      status: $Enums.DroneStatus
      baseX: number
      baseY: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["drone"]>
    composites: {}
  }

  type DroneGetPayload<S extends boolean | null | undefined | DroneDefaultArgs> = $Result.GetResult<Prisma.$DronePayload, S>

  type DroneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DroneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DroneCountAggregateInputType | true
    }

  export interface DroneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Drone'], meta: { name: 'Drone' } }
    /**
     * Find zero or one Drone that matches the filter.
     * @param {DroneFindUniqueArgs} args - Arguments to find a Drone
     * @example
     * // Get one Drone
     * const drone = await prisma.drone.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DroneFindUniqueArgs>(args: SelectSubset<T, DroneFindUniqueArgs<ExtArgs>>): Prisma__DroneClient<$Result.GetResult<Prisma.$DronePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Drone that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DroneFindUniqueOrThrowArgs} args - Arguments to find a Drone
     * @example
     * // Get one Drone
     * const drone = await prisma.drone.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DroneFindUniqueOrThrowArgs>(args: SelectSubset<T, DroneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DroneClient<$Result.GetResult<Prisma.$DronePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Drone that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroneFindFirstArgs} args - Arguments to find a Drone
     * @example
     * // Get one Drone
     * const drone = await prisma.drone.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DroneFindFirstArgs>(args?: SelectSubset<T, DroneFindFirstArgs<ExtArgs>>): Prisma__DroneClient<$Result.GetResult<Prisma.$DronePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Drone that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroneFindFirstOrThrowArgs} args - Arguments to find a Drone
     * @example
     * // Get one Drone
     * const drone = await prisma.drone.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DroneFindFirstOrThrowArgs>(args?: SelectSubset<T, DroneFindFirstOrThrowArgs<ExtArgs>>): Prisma__DroneClient<$Result.GetResult<Prisma.$DronePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Drones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Drones
     * const drones = await prisma.drone.findMany()
     * 
     * // Get first 10 Drones
     * const drones = await prisma.drone.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const droneWithIdOnly = await prisma.drone.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DroneFindManyArgs>(args?: SelectSubset<T, DroneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DronePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Drone.
     * @param {DroneCreateArgs} args - Arguments to create a Drone.
     * @example
     * // Create one Drone
     * const Drone = await prisma.drone.create({
     *   data: {
     *     // ... data to create a Drone
     *   }
     * })
     * 
     */
    create<T extends DroneCreateArgs>(args: SelectSubset<T, DroneCreateArgs<ExtArgs>>): Prisma__DroneClient<$Result.GetResult<Prisma.$DronePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Drones.
     * @param {DroneCreateManyArgs} args - Arguments to create many Drones.
     * @example
     * // Create many Drones
     * const drone = await prisma.drone.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DroneCreateManyArgs>(args?: SelectSubset<T, DroneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Drones and returns the data saved in the database.
     * @param {DroneCreateManyAndReturnArgs} args - Arguments to create many Drones.
     * @example
     * // Create many Drones
     * const drone = await prisma.drone.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Drones and only return the `id`
     * const droneWithIdOnly = await prisma.drone.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DroneCreateManyAndReturnArgs>(args?: SelectSubset<T, DroneCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DronePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Drone.
     * @param {DroneDeleteArgs} args - Arguments to delete one Drone.
     * @example
     * // Delete one Drone
     * const Drone = await prisma.drone.delete({
     *   where: {
     *     // ... filter to delete one Drone
     *   }
     * })
     * 
     */
    delete<T extends DroneDeleteArgs>(args: SelectSubset<T, DroneDeleteArgs<ExtArgs>>): Prisma__DroneClient<$Result.GetResult<Prisma.$DronePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Drone.
     * @param {DroneUpdateArgs} args - Arguments to update one Drone.
     * @example
     * // Update one Drone
     * const drone = await prisma.drone.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DroneUpdateArgs>(args: SelectSubset<T, DroneUpdateArgs<ExtArgs>>): Prisma__DroneClient<$Result.GetResult<Prisma.$DronePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Drones.
     * @param {DroneDeleteManyArgs} args - Arguments to filter Drones to delete.
     * @example
     * // Delete a few Drones
     * const { count } = await prisma.drone.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DroneDeleteManyArgs>(args?: SelectSubset<T, DroneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Drones
     * const drone = await prisma.drone.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DroneUpdateManyArgs>(args: SelectSubset<T, DroneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drones and returns the data updated in the database.
     * @param {DroneUpdateManyAndReturnArgs} args - Arguments to update many Drones.
     * @example
     * // Update many Drones
     * const drone = await prisma.drone.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Drones and only return the `id`
     * const droneWithIdOnly = await prisma.drone.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DroneUpdateManyAndReturnArgs>(args: SelectSubset<T, DroneUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DronePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Drone.
     * @param {DroneUpsertArgs} args - Arguments to update or create a Drone.
     * @example
     * // Update or create a Drone
     * const drone = await prisma.drone.upsert({
     *   create: {
     *     // ... data to create a Drone
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Drone we want to update
     *   }
     * })
     */
    upsert<T extends DroneUpsertArgs>(args: SelectSubset<T, DroneUpsertArgs<ExtArgs>>): Prisma__DroneClient<$Result.GetResult<Prisma.$DronePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Drones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroneCountArgs} args - Arguments to filter Drones to count.
     * @example
     * // Count the number of Drones
     * const count = await prisma.drone.count({
     *   where: {
     *     // ... the filter for the Drones we want to count
     *   }
     * })
    **/
    count<T extends DroneCountArgs>(
      args?: Subset<T, DroneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DroneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Drone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DroneAggregateArgs>(args: Subset<T, DroneAggregateArgs>): Prisma.PrismaPromise<GetDroneAggregateType<T>>

    /**
     * Group by Drone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroneGroupByArgs} args - Group by arguments.
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
      T extends DroneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DroneGroupByArgs['orderBy'] }
        : { orderBy?: DroneGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DroneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDroneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Drone model
   */
  readonly fields: DroneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Drone.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DroneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Trip<T extends Drone$TripArgs<ExtArgs> = {}>(args?: Subset<T, Drone$TripArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Drone model
   */
  interface DroneFieldRefs {
    readonly id: FieldRef<"Drone", 'Int'>
    readonly name: FieldRef<"Drone", 'String'>
    readonly maxPayloadKg: FieldRef<"Drone", 'Float'>
    readonly maxRangeKm: FieldRef<"Drone", 'Float'>
    readonly batteryPct: FieldRef<"Drone", 'Int'>
    readonly status: FieldRef<"Drone", 'DroneStatus'>
    readonly baseX: FieldRef<"Drone", 'Int'>
    readonly baseY: FieldRef<"Drone", 'Int'>
    readonly createdAt: FieldRef<"Drone", 'DateTime'>
    readonly updatedAt: FieldRef<"Drone", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Drone findUnique
   */
  export type DroneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drone
     */
    select?: DroneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drone
     */
    omit?: DroneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInclude<ExtArgs> | null
    /**
     * Filter, which Drone to fetch.
     */
    where: DroneWhereUniqueInput
  }

  /**
   * Drone findUniqueOrThrow
   */
  export type DroneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drone
     */
    select?: DroneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drone
     */
    omit?: DroneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInclude<ExtArgs> | null
    /**
     * Filter, which Drone to fetch.
     */
    where: DroneWhereUniqueInput
  }

  /**
   * Drone findFirst
   */
  export type DroneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drone
     */
    select?: DroneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drone
     */
    omit?: DroneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInclude<ExtArgs> | null
    /**
     * Filter, which Drone to fetch.
     */
    where?: DroneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drones to fetch.
     */
    orderBy?: DroneOrderByWithRelationInput | DroneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drones.
     */
    cursor?: DroneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drones.
     */
    distinct?: DroneScalarFieldEnum | DroneScalarFieldEnum[]
  }

  /**
   * Drone findFirstOrThrow
   */
  export type DroneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drone
     */
    select?: DroneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drone
     */
    omit?: DroneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInclude<ExtArgs> | null
    /**
     * Filter, which Drone to fetch.
     */
    where?: DroneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drones to fetch.
     */
    orderBy?: DroneOrderByWithRelationInput | DroneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drones.
     */
    cursor?: DroneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drones.
     */
    distinct?: DroneScalarFieldEnum | DroneScalarFieldEnum[]
  }

  /**
   * Drone findMany
   */
  export type DroneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drone
     */
    select?: DroneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drone
     */
    omit?: DroneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInclude<ExtArgs> | null
    /**
     * Filter, which Drones to fetch.
     */
    where?: DroneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drones to fetch.
     */
    orderBy?: DroneOrderByWithRelationInput | DroneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Drones.
     */
    cursor?: DroneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drones.
     */
    skip?: number
    distinct?: DroneScalarFieldEnum | DroneScalarFieldEnum[]
  }

  /**
   * Drone create
   */
  export type DroneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drone
     */
    select?: DroneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drone
     */
    omit?: DroneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInclude<ExtArgs> | null
    /**
     * The data needed to create a Drone.
     */
    data: XOR<DroneCreateInput, DroneUncheckedCreateInput>
  }

  /**
   * Drone createMany
   */
  export type DroneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Drones.
     */
    data: DroneCreateManyInput | DroneCreateManyInput[]
  }

  /**
   * Drone createManyAndReturn
   */
  export type DroneCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drone
     */
    select?: DroneSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Drone
     */
    omit?: DroneOmit<ExtArgs> | null
    /**
     * The data used to create many Drones.
     */
    data: DroneCreateManyInput | DroneCreateManyInput[]
  }

  /**
   * Drone update
   */
  export type DroneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drone
     */
    select?: DroneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drone
     */
    omit?: DroneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInclude<ExtArgs> | null
    /**
     * The data needed to update a Drone.
     */
    data: XOR<DroneUpdateInput, DroneUncheckedUpdateInput>
    /**
     * Choose, which Drone to update.
     */
    where: DroneWhereUniqueInput
  }

  /**
   * Drone updateMany
   */
  export type DroneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Drones.
     */
    data: XOR<DroneUpdateManyMutationInput, DroneUncheckedUpdateManyInput>
    /**
     * Filter which Drones to update
     */
    where?: DroneWhereInput
    /**
     * Limit how many Drones to update.
     */
    limit?: number
  }

  /**
   * Drone updateManyAndReturn
   */
  export type DroneUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drone
     */
    select?: DroneSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Drone
     */
    omit?: DroneOmit<ExtArgs> | null
    /**
     * The data used to update Drones.
     */
    data: XOR<DroneUpdateManyMutationInput, DroneUncheckedUpdateManyInput>
    /**
     * Filter which Drones to update
     */
    where?: DroneWhereInput
    /**
     * Limit how many Drones to update.
     */
    limit?: number
  }

  /**
   * Drone upsert
   */
  export type DroneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drone
     */
    select?: DroneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drone
     */
    omit?: DroneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInclude<ExtArgs> | null
    /**
     * The filter to search for the Drone to update in case it exists.
     */
    where: DroneWhereUniqueInput
    /**
     * In case the Drone found by the `where` argument doesn't exist, create a new Drone with this data.
     */
    create: XOR<DroneCreateInput, DroneUncheckedCreateInput>
    /**
     * In case the Drone was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DroneUpdateInput, DroneUncheckedUpdateInput>
  }

  /**
   * Drone delete
   */
  export type DroneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drone
     */
    select?: DroneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drone
     */
    omit?: DroneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInclude<ExtArgs> | null
    /**
     * Filter which Drone to delete.
     */
    where: DroneWhereUniqueInput
  }

  /**
   * Drone deleteMany
   */
  export type DroneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Drones to delete
     */
    where?: DroneWhereInput
    /**
     * Limit how many Drones to delete.
     */
    limit?: number
  }

  /**
   * Drone.Trip
   */
  export type Drone$TripArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    where?: TripWhereInput
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    cursor?: TripWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Drone without action
   */
  export type DroneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drone
     */
    select?: DroneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drone
     */
    omit?: DroneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    customerX: number | null
    customerY: number | null
    weightKg: number | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    customerX: number | null
    customerY: number | null
    weightKg: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    customerX: number | null
    customerY: number | null
    weightKg: number | null
    priority: $Enums.OrderPriority | null
    status: $Enums.OrderStatus | null
    createdAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    customerX: number | null
    customerY: number | null
    weightKg: number | null
    priority: $Enums.OrderPriority | null
    status: $Enums.OrderStatus | null
    createdAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    customerX: number
    customerY: number
    weightKg: number
    priority: number
    status: number
    createdAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
    customerX?: true
    customerY?: true
    weightKg?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
    customerX?: true
    customerY?: true
    weightKg?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    customerX?: true
    customerY?: true
    weightKg?: true
    priority?: true
    status?: true
    createdAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    customerX?: true
    customerY?: true
    weightKg?: true
    priority?: true
    status?: true
    createdAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    customerX?: true
    customerY?: true
    weightKg?: true
    priority?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: number
    customerX: number
    customerY: number
    weightKg: number
    priority: $Enums.OrderPriority
    status: $Enums.OrderStatus
    createdAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerX?: boolean
    customerY?: boolean
    weightKg?: boolean
    priority?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerX?: boolean
    customerY?: boolean
    weightKg?: boolean
    priority?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerX?: boolean
    customerY?: boolean
    weightKg?: boolean
    priority?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    customerX?: boolean
    customerY?: boolean
    weightKg?: boolean
    priority?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerX" | "customerY" | "weightKg" | "priority" | "status" | "createdAt", ExtArgs["result"]["order"]>

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      customerX: number
      customerY: number
      weightKg: number
      priority: $Enums.OrderPriority
      status: $Enums.OrderStatus
      createdAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'Int'>
    readonly customerX: FieldRef<"Order", 'Int'>
    readonly customerY: FieldRef<"Order", 'Int'>
    readonly weightKg: FieldRef<"Order", 'Float'>
    readonly priority: FieldRef<"Order", 'OrderPriority'>
    readonly status: FieldRef<"Order", 'OrderStatus'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
  }


  /**
   * Model Trip
   */

  export type AggregateTrip = {
    _count: TripCountAggregateOutputType | null
    _avg: TripAvgAggregateOutputType | null
    _sum: TripSumAggregateOutputType | null
    _min: TripMinAggregateOutputType | null
    _max: TripMaxAggregateOutputType | null
  }

  export type TripAvgAggregateOutputType = {
    id: number | null
    droneId: number | null
    totalDistance: number | null
  }

  export type TripSumAggregateOutputType = {
    id: number | null
    droneId: number | null
    totalDistance: number | null
  }

  export type TripMinAggregateOutputType = {
    id: number | null
    droneId: number | null
    totalDistance: number | null
    createdAt: Date | null
  }

  export type TripMaxAggregateOutputType = {
    id: number | null
    droneId: number | null
    totalDistance: number | null
    createdAt: Date | null
  }

  export type TripCountAggregateOutputType = {
    id: number
    droneId: number
    totalDistance: number
    createdAt: number
    _all: number
  }


  export type TripAvgAggregateInputType = {
    id?: true
    droneId?: true
    totalDistance?: true
  }

  export type TripSumAggregateInputType = {
    id?: true
    droneId?: true
    totalDistance?: true
  }

  export type TripMinAggregateInputType = {
    id?: true
    droneId?: true
    totalDistance?: true
    createdAt?: true
  }

  export type TripMaxAggregateInputType = {
    id?: true
    droneId?: true
    totalDistance?: true
    createdAt?: true
  }

  export type TripCountAggregateInputType = {
    id?: true
    droneId?: true
    totalDistance?: true
    createdAt?: true
    _all?: true
  }

  export type TripAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trip to aggregate.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trips
    **/
    _count?: true | TripCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TripAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TripSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripMaxAggregateInputType
  }

  export type GetTripAggregateType<T extends TripAggregateArgs> = {
        [P in keyof T & keyof AggregateTrip]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrip[P]>
      : GetScalarType<T[P], AggregateTrip[P]>
  }




  export type TripGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
    orderBy?: TripOrderByWithAggregationInput | TripOrderByWithAggregationInput[]
    by: TripScalarFieldEnum[] | TripScalarFieldEnum
    having?: TripScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripCountAggregateInputType | true
    _avg?: TripAvgAggregateInputType
    _sum?: TripSumAggregateInputType
    _min?: TripMinAggregateInputType
    _max?: TripMaxAggregateInputType
  }

  export type TripGroupByOutputType = {
    id: number
    droneId: number
    totalDistance: number
    createdAt: Date
    _count: TripCountAggregateOutputType | null
    _avg: TripAvgAggregateOutputType | null
    _sum: TripSumAggregateOutputType | null
    _min: TripMinAggregateOutputType | null
    _max: TripMaxAggregateOutputType | null
  }

  type GetTripGroupByPayload<T extends TripGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripGroupByOutputType[P]>
            : GetScalarType<T[P], TripGroupByOutputType[P]>
        }
      >
    >


  export type TripSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    droneId?: boolean
    totalDistance?: boolean
    createdAt?: boolean
    drone?: boolean | DroneDefaultArgs<ExtArgs>
    legs?: boolean | Trip$legsArgs<ExtArgs>
    _count?: boolean | TripCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trip"]>

  export type TripSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    droneId?: boolean
    totalDistance?: boolean
    createdAt?: boolean
    drone?: boolean | DroneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trip"]>

  export type TripSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    droneId?: boolean
    totalDistance?: boolean
    createdAt?: boolean
    drone?: boolean | DroneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trip"]>

  export type TripSelectScalar = {
    id?: boolean
    droneId?: boolean
    totalDistance?: boolean
    createdAt?: boolean
  }

  export type TripOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "droneId" | "totalDistance" | "createdAt", ExtArgs["result"]["trip"]>
  export type TripInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drone?: boolean | DroneDefaultArgs<ExtArgs>
    legs?: boolean | Trip$legsArgs<ExtArgs>
    _count?: boolean | TripCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TripIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drone?: boolean | DroneDefaultArgs<ExtArgs>
  }
  export type TripIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drone?: boolean | DroneDefaultArgs<ExtArgs>
  }

  export type $TripPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trip"
    objects: {
      drone: Prisma.$DronePayload<ExtArgs>
      legs: Prisma.$LegPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      droneId: number
      totalDistance: number
      createdAt: Date
    }, ExtArgs["result"]["trip"]>
    composites: {}
  }

  type TripGetPayload<S extends boolean | null | undefined | TripDefaultArgs> = $Result.GetResult<Prisma.$TripPayload, S>

  type TripCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TripFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TripCountAggregateInputType | true
    }

  export interface TripDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trip'], meta: { name: 'Trip' } }
    /**
     * Find zero or one Trip that matches the filter.
     * @param {TripFindUniqueArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TripFindUniqueArgs>(args: SelectSubset<T, TripFindUniqueArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trip that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TripFindUniqueOrThrowArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TripFindUniqueOrThrowArgs>(args: SelectSubset<T, TripFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trip that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindFirstArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TripFindFirstArgs>(args?: SelectSubset<T, TripFindFirstArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trip that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindFirstOrThrowArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TripFindFirstOrThrowArgs>(args?: SelectSubset<T, TripFindFirstOrThrowArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trips
     * const trips = await prisma.trip.findMany()
     * 
     * // Get first 10 Trips
     * const trips = await prisma.trip.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tripWithIdOnly = await prisma.trip.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TripFindManyArgs>(args?: SelectSubset<T, TripFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trip.
     * @param {TripCreateArgs} args - Arguments to create a Trip.
     * @example
     * // Create one Trip
     * const Trip = await prisma.trip.create({
     *   data: {
     *     // ... data to create a Trip
     *   }
     * })
     * 
     */
    create<T extends TripCreateArgs>(args: SelectSubset<T, TripCreateArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trips.
     * @param {TripCreateManyArgs} args - Arguments to create many Trips.
     * @example
     * // Create many Trips
     * const trip = await prisma.trip.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TripCreateManyArgs>(args?: SelectSubset<T, TripCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Trips and returns the data saved in the database.
     * @param {TripCreateManyAndReturnArgs} args - Arguments to create many Trips.
     * @example
     * // Create many Trips
     * const trip = await prisma.trip.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Trips and only return the `id`
     * const tripWithIdOnly = await prisma.trip.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TripCreateManyAndReturnArgs>(args?: SelectSubset<T, TripCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trip.
     * @param {TripDeleteArgs} args - Arguments to delete one Trip.
     * @example
     * // Delete one Trip
     * const Trip = await prisma.trip.delete({
     *   where: {
     *     // ... filter to delete one Trip
     *   }
     * })
     * 
     */
    delete<T extends TripDeleteArgs>(args: SelectSubset<T, TripDeleteArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trip.
     * @param {TripUpdateArgs} args - Arguments to update one Trip.
     * @example
     * // Update one Trip
     * const trip = await prisma.trip.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TripUpdateArgs>(args: SelectSubset<T, TripUpdateArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trips.
     * @param {TripDeleteManyArgs} args - Arguments to filter Trips to delete.
     * @example
     * // Delete a few Trips
     * const { count } = await prisma.trip.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TripDeleteManyArgs>(args?: SelectSubset<T, TripDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trips
     * const trip = await prisma.trip.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TripUpdateManyArgs>(args: SelectSubset<T, TripUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trips and returns the data updated in the database.
     * @param {TripUpdateManyAndReturnArgs} args - Arguments to update many Trips.
     * @example
     * // Update many Trips
     * const trip = await prisma.trip.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Trips and only return the `id`
     * const tripWithIdOnly = await prisma.trip.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TripUpdateManyAndReturnArgs>(args: SelectSubset<T, TripUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Trip.
     * @param {TripUpsertArgs} args - Arguments to update or create a Trip.
     * @example
     * // Update or create a Trip
     * const trip = await prisma.trip.upsert({
     *   create: {
     *     // ... data to create a Trip
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trip we want to update
     *   }
     * })
     */
    upsert<T extends TripUpsertArgs>(args: SelectSubset<T, TripUpsertArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripCountArgs} args - Arguments to filter Trips to count.
     * @example
     * // Count the number of Trips
     * const count = await prisma.trip.count({
     *   where: {
     *     // ... the filter for the Trips we want to count
     *   }
     * })
    **/
    count<T extends TripCountArgs>(
      args?: Subset<T, TripCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TripAggregateArgs>(args: Subset<T, TripAggregateArgs>): Prisma.PrismaPromise<GetTripAggregateType<T>>

    /**
     * Group by Trip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripGroupByArgs} args - Group by arguments.
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
      T extends TripGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TripGroupByArgs['orderBy'] }
        : { orderBy?: TripGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TripGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trip model
   */
  readonly fields: TripFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trip.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TripClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    drone<T extends DroneDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DroneDefaultArgs<ExtArgs>>): Prisma__DroneClient<$Result.GetResult<Prisma.$DronePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    legs<T extends Trip$legsArgs<ExtArgs> = {}>(args?: Subset<T, Trip$legsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LegPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Trip model
   */
  interface TripFieldRefs {
    readonly id: FieldRef<"Trip", 'Int'>
    readonly droneId: FieldRef<"Trip", 'Int'>
    readonly totalDistance: FieldRef<"Trip", 'Float'>
    readonly createdAt: FieldRef<"Trip", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Trip findUnique
   */
  export type TripFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip findUniqueOrThrow
   */
  export type TripFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip findFirst
   */
  export type TripFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip findFirstOrThrow
   */
  export type TripFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip findMany
   */
  export type TripFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trips to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip create
   */
  export type TripCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The data needed to create a Trip.
     */
    data: XOR<TripCreateInput, TripUncheckedCreateInput>
  }

  /**
   * Trip createMany
   */
  export type TripCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trips.
     */
    data: TripCreateManyInput | TripCreateManyInput[]
  }

  /**
   * Trip createManyAndReturn
   */
  export type TripCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * The data used to create many Trips.
     */
    data: TripCreateManyInput | TripCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trip update
   */
  export type TripUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The data needed to update a Trip.
     */
    data: XOR<TripUpdateInput, TripUncheckedUpdateInput>
    /**
     * Choose, which Trip to update.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip updateMany
   */
  export type TripUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trips.
     */
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyInput>
    /**
     * Filter which Trips to update
     */
    where?: TripWhereInput
    /**
     * Limit how many Trips to update.
     */
    limit?: number
  }

  /**
   * Trip updateManyAndReturn
   */
  export type TripUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * The data used to update Trips.
     */
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyInput>
    /**
     * Filter which Trips to update
     */
    where?: TripWhereInput
    /**
     * Limit how many Trips to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trip upsert
   */
  export type TripUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The filter to search for the Trip to update in case it exists.
     */
    where: TripWhereUniqueInput
    /**
     * In case the Trip found by the `where` argument doesn't exist, create a new Trip with this data.
     */
    create: XOR<TripCreateInput, TripUncheckedCreateInput>
    /**
     * In case the Trip was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TripUpdateInput, TripUncheckedUpdateInput>
  }

  /**
   * Trip delete
   */
  export type TripDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter which Trip to delete.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip deleteMany
   */
  export type TripDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trips to delete
     */
    where?: TripWhereInput
    /**
     * Limit how many Trips to delete.
     */
    limit?: number
  }

  /**
   * Trip.legs
   */
  export type Trip$legsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leg
     */
    select?: LegSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leg
     */
    omit?: LegOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegInclude<ExtArgs> | null
    where?: LegWhereInput
    orderBy?: LegOrderByWithRelationInput | LegOrderByWithRelationInput[]
    cursor?: LegWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LegScalarFieldEnum | LegScalarFieldEnum[]
  }

  /**
   * Trip without action
   */
  export type TripDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
  }


  /**
   * Model Leg
   */

  export type AggregateLeg = {
    _count: LegCountAggregateOutputType | null
    _avg: LegAvgAggregateOutputType | null
    _sum: LegSumAggregateOutputType | null
    _min: LegMinAggregateOutputType | null
    _max: LegMaxAggregateOutputType | null
  }

  export type LegAvgAggregateOutputType = {
    id: number | null
    tripId: number | null
    orderId: number | null
    sequence: number | null
    distance: number | null
  }

  export type LegSumAggregateOutputType = {
    id: number | null
    tripId: number | null
    orderId: number | null
    sequence: number | null
    distance: number | null
  }

  export type LegMinAggregateOutputType = {
    id: number | null
    tripId: number | null
    orderId: number | null
    sequence: number | null
    distance: number | null
  }

  export type LegMaxAggregateOutputType = {
    id: number | null
    tripId: number | null
    orderId: number | null
    sequence: number | null
    distance: number | null
  }

  export type LegCountAggregateOutputType = {
    id: number
    tripId: number
    orderId: number
    sequence: number
    distance: number
    _all: number
  }


  export type LegAvgAggregateInputType = {
    id?: true
    tripId?: true
    orderId?: true
    sequence?: true
    distance?: true
  }

  export type LegSumAggregateInputType = {
    id?: true
    tripId?: true
    orderId?: true
    sequence?: true
    distance?: true
  }

  export type LegMinAggregateInputType = {
    id?: true
    tripId?: true
    orderId?: true
    sequence?: true
    distance?: true
  }

  export type LegMaxAggregateInputType = {
    id?: true
    tripId?: true
    orderId?: true
    sequence?: true
    distance?: true
  }

  export type LegCountAggregateInputType = {
    id?: true
    tripId?: true
    orderId?: true
    sequence?: true
    distance?: true
    _all?: true
  }

  export type LegAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leg to aggregate.
     */
    where?: LegWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Legs to fetch.
     */
    orderBy?: LegOrderByWithRelationInput | LegOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LegWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Legs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Legs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Legs
    **/
    _count?: true | LegCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LegAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LegSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LegMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LegMaxAggregateInputType
  }

  export type GetLegAggregateType<T extends LegAggregateArgs> = {
        [P in keyof T & keyof AggregateLeg]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeg[P]>
      : GetScalarType<T[P], AggregateLeg[P]>
  }




  export type LegGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LegWhereInput
    orderBy?: LegOrderByWithAggregationInput | LegOrderByWithAggregationInput[]
    by: LegScalarFieldEnum[] | LegScalarFieldEnum
    having?: LegScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LegCountAggregateInputType | true
    _avg?: LegAvgAggregateInputType
    _sum?: LegSumAggregateInputType
    _min?: LegMinAggregateInputType
    _max?: LegMaxAggregateInputType
  }

  export type LegGroupByOutputType = {
    id: number
    tripId: number
    orderId: number
    sequence: number
    distance: number
    _count: LegCountAggregateOutputType | null
    _avg: LegAvgAggregateOutputType | null
    _sum: LegSumAggregateOutputType | null
    _min: LegMinAggregateOutputType | null
    _max: LegMaxAggregateOutputType | null
  }

  type GetLegGroupByPayload<T extends LegGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LegGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LegGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LegGroupByOutputType[P]>
            : GetScalarType<T[P], LegGroupByOutputType[P]>
        }
      >
    >


  export type LegSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    orderId?: boolean
    sequence?: boolean
    distance?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leg"]>

  export type LegSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    orderId?: boolean
    sequence?: boolean
    distance?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leg"]>

  export type LegSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    orderId?: boolean
    sequence?: boolean
    distance?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leg"]>

  export type LegSelectScalar = {
    id?: boolean
    tripId?: boolean
    orderId?: boolean
    sequence?: boolean
    distance?: boolean
  }

  export type LegOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tripId" | "orderId" | "sequence" | "distance", ExtArgs["result"]["leg"]>
  export type LegInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }
  export type LegIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }
  export type LegIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }

  export type $LegPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Leg"
    objects: {
      trip: Prisma.$TripPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tripId: number
      orderId: number
      sequence: number
      distance: number
    }, ExtArgs["result"]["leg"]>
    composites: {}
  }

  type LegGetPayload<S extends boolean | null | undefined | LegDefaultArgs> = $Result.GetResult<Prisma.$LegPayload, S>

  type LegCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LegFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LegCountAggregateInputType | true
    }

  export interface LegDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Leg'], meta: { name: 'Leg' } }
    /**
     * Find zero or one Leg that matches the filter.
     * @param {LegFindUniqueArgs} args - Arguments to find a Leg
     * @example
     * // Get one Leg
     * const leg = await prisma.leg.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LegFindUniqueArgs>(args: SelectSubset<T, LegFindUniqueArgs<ExtArgs>>): Prisma__LegClient<$Result.GetResult<Prisma.$LegPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Leg that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LegFindUniqueOrThrowArgs} args - Arguments to find a Leg
     * @example
     * // Get one Leg
     * const leg = await prisma.leg.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LegFindUniqueOrThrowArgs>(args: SelectSubset<T, LegFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LegClient<$Result.GetResult<Prisma.$LegPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leg that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegFindFirstArgs} args - Arguments to find a Leg
     * @example
     * // Get one Leg
     * const leg = await prisma.leg.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LegFindFirstArgs>(args?: SelectSubset<T, LegFindFirstArgs<ExtArgs>>): Prisma__LegClient<$Result.GetResult<Prisma.$LegPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leg that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegFindFirstOrThrowArgs} args - Arguments to find a Leg
     * @example
     * // Get one Leg
     * const leg = await prisma.leg.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LegFindFirstOrThrowArgs>(args?: SelectSubset<T, LegFindFirstOrThrowArgs<ExtArgs>>): Prisma__LegClient<$Result.GetResult<Prisma.$LegPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Legs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Legs
     * const legs = await prisma.leg.findMany()
     * 
     * // Get first 10 Legs
     * const legs = await prisma.leg.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const legWithIdOnly = await prisma.leg.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LegFindManyArgs>(args?: SelectSubset<T, LegFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LegPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Leg.
     * @param {LegCreateArgs} args - Arguments to create a Leg.
     * @example
     * // Create one Leg
     * const Leg = await prisma.leg.create({
     *   data: {
     *     // ... data to create a Leg
     *   }
     * })
     * 
     */
    create<T extends LegCreateArgs>(args: SelectSubset<T, LegCreateArgs<ExtArgs>>): Prisma__LegClient<$Result.GetResult<Prisma.$LegPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Legs.
     * @param {LegCreateManyArgs} args - Arguments to create many Legs.
     * @example
     * // Create many Legs
     * const leg = await prisma.leg.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LegCreateManyArgs>(args?: SelectSubset<T, LegCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Legs and returns the data saved in the database.
     * @param {LegCreateManyAndReturnArgs} args - Arguments to create many Legs.
     * @example
     * // Create many Legs
     * const leg = await prisma.leg.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Legs and only return the `id`
     * const legWithIdOnly = await prisma.leg.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LegCreateManyAndReturnArgs>(args?: SelectSubset<T, LegCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LegPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Leg.
     * @param {LegDeleteArgs} args - Arguments to delete one Leg.
     * @example
     * // Delete one Leg
     * const Leg = await prisma.leg.delete({
     *   where: {
     *     // ... filter to delete one Leg
     *   }
     * })
     * 
     */
    delete<T extends LegDeleteArgs>(args: SelectSubset<T, LegDeleteArgs<ExtArgs>>): Prisma__LegClient<$Result.GetResult<Prisma.$LegPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Leg.
     * @param {LegUpdateArgs} args - Arguments to update one Leg.
     * @example
     * // Update one Leg
     * const leg = await prisma.leg.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LegUpdateArgs>(args: SelectSubset<T, LegUpdateArgs<ExtArgs>>): Prisma__LegClient<$Result.GetResult<Prisma.$LegPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Legs.
     * @param {LegDeleteManyArgs} args - Arguments to filter Legs to delete.
     * @example
     * // Delete a few Legs
     * const { count } = await prisma.leg.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LegDeleteManyArgs>(args?: SelectSubset<T, LegDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Legs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Legs
     * const leg = await prisma.leg.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LegUpdateManyArgs>(args: SelectSubset<T, LegUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Legs and returns the data updated in the database.
     * @param {LegUpdateManyAndReturnArgs} args - Arguments to update many Legs.
     * @example
     * // Update many Legs
     * const leg = await prisma.leg.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Legs and only return the `id`
     * const legWithIdOnly = await prisma.leg.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LegUpdateManyAndReturnArgs>(args: SelectSubset<T, LegUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LegPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Leg.
     * @param {LegUpsertArgs} args - Arguments to update or create a Leg.
     * @example
     * // Update or create a Leg
     * const leg = await prisma.leg.upsert({
     *   create: {
     *     // ... data to create a Leg
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Leg we want to update
     *   }
     * })
     */
    upsert<T extends LegUpsertArgs>(args: SelectSubset<T, LegUpsertArgs<ExtArgs>>): Prisma__LegClient<$Result.GetResult<Prisma.$LegPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Legs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegCountArgs} args - Arguments to filter Legs to count.
     * @example
     * // Count the number of Legs
     * const count = await prisma.leg.count({
     *   where: {
     *     // ... the filter for the Legs we want to count
     *   }
     * })
    **/
    count<T extends LegCountArgs>(
      args?: Subset<T, LegCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LegCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Leg.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LegAggregateArgs>(args: Subset<T, LegAggregateArgs>): Prisma.PrismaPromise<GetLegAggregateType<T>>

    /**
     * Group by Leg.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegGroupByArgs} args - Group by arguments.
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
      T extends LegGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LegGroupByArgs['orderBy'] }
        : { orderBy?: LegGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LegGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLegGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Leg model
   */
  readonly fields: LegFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Leg.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LegClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trip<T extends TripDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TripDefaultArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Leg model
   */
  interface LegFieldRefs {
    readonly id: FieldRef<"Leg", 'Int'>
    readonly tripId: FieldRef<"Leg", 'Int'>
    readonly orderId: FieldRef<"Leg", 'Int'>
    readonly sequence: FieldRef<"Leg", 'Int'>
    readonly distance: FieldRef<"Leg", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Leg findUnique
   */
  export type LegFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leg
     */
    select?: LegSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leg
     */
    omit?: LegOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegInclude<ExtArgs> | null
    /**
     * Filter, which Leg to fetch.
     */
    where: LegWhereUniqueInput
  }

  /**
   * Leg findUniqueOrThrow
   */
  export type LegFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leg
     */
    select?: LegSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leg
     */
    omit?: LegOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegInclude<ExtArgs> | null
    /**
     * Filter, which Leg to fetch.
     */
    where: LegWhereUniqueInput
  }

  /**
   * Leg findFirst
   */
  export type LegFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leg
     */
    select?: LegSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leg
     */
    omit?: LegOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegInclude<ExtArgs> | null
    /**
     * Filter, which Leg to fetch.
     */
    where?: LegWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Legs to fetch.
     */
    orderBy?: LegOrderByWithRelationInput | LegOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Legs.
     */
    cursor?: LegWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Legs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Legs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Legs.
     */
    distinct?: LegScalarFieldEnum | LegScalarFieldEnum[]
  }

  /**
   * Leg findFirstOrThrow
   */
  export type LegFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leg
     */
    select?: LegSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leg
     */
    omit?: LegOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegInclude<ExtArgs> | null
    /**
     * Filter, which Leg to fetch.
     */
    where?: LegWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Legs to fetch.
     */
    orderBy?: LegOrderByWithRelationInput | LegOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Legs.
     */
    cursor?: LegWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Legs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Legs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Legs.
     */
    distinct?: LegScalarFieldEnum | LegScalarFieldEnum[]
  }

  /**
   * Leg findMany
   */
  export type LegFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leg
     */
    select?: LegSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leg
     */
    omit?: LegOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegInclude<ExtArgs> | null
    /**
     * Filter, which Legs to fetch.
     */
    where?: LegWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Legs to fetch.
     */
    orderBy?: LegOrderByWithRelationInput | LegOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Legs.
     */
    cursor?: LegWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Legs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Legs.
     */
    skip?: number
    distinct?: LegScalarFieldEnum | LegScalarFieldEnum[]
  }

  /**
   * Leg create
   */
  export type LegCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leg
     */
    select?: LegSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leg
     */
    omit?: LegOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegInclude<ExtArgs> | null
    /**
     * The data needed to create a Leg.
     */
    data: XOR<LegCreateInput, LegUncheckedCreateInput>
  }

  /**
   * Leg createMany
   */
  export type LegCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Legs.
     */
    data: LegCreateManyInput | LegCreateManyInput[]
  }

  /**
   * Leg createManyAndReturn
   */
  export type LegCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leg
     */
    select?: LegSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Leg
     */
    omit?: LegOmit<ExtArgs> | null
    /**
     * The data used to create many Legs.
     */
    data: LegCreateManyInput | LegCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Leg update
   */
  export type LegUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leg
     */
    select?: LegSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leg
     */
    omit?: LegOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegInclude<ExtArgs> | null
    /**
     * The data needed to update a Leg.
     */
    data: XOR<LegUpdateInput, LegUncheckedUpdateInput>
    /**
     * Choose, which Leg to update.
     */
    where: LegWhereUniqueInput
  }

  /**
   * Leg updateMany
   */
  export type LegUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Legs.
     */
    data: XOR<LegUpdateManyMutationInput, LegUncheckedUpdateManyInput>
    /**
     * Filter which Legs to update
     */
    where?: LegWhereInput
    /**
     * Limit how many Legs to update.
     */
    limit?: number
  }

  /**
   * Leg updateManyAndReturn
   */
  export type LegUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leg
     */
    select?: LegSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Leg
     */
    omit?: LegOmit<ExtArgs> | null
    /**
     * The data used to update Legs.
     */
    data: XOR<LegUpdateManyMutationInput, LegUncheckedUpdateManyInput>
    /**
     * Filter which Legs to update
     */
    where?: LegWhereInput
    /**
     * Limit how many Legs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Leg upsert
   */
  export type LegUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leg
     */
    select?: LegSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leg
     */
    omit?: LegOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegInclude<ExtArgs> | null
    /**
     * The filter to search for the Leg to update in case it exists.
     */
    where: LegWhereUniqueInput
    /**
     * In case the Leg found by the `where` argument doesn't exist, create a new Leg with this data.
     */
    create: XOR<LegCreateInput, LegUncheckedCreateInput>
    /**
     * In case the Leg was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LegUpdateInput, LegUncheckedUpdateInput>
  }

  /**
   * Leg delete
   */
  export type LegDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leg
     */
    select?: LegSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leg
     */
    omit?: LegOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegInclude<ExtArgs> | null
    /**
     * Filter which Leg to delete.
     */
    where: LegWhereUniqueInput
  }

  /**
   * Leg deleteMany
   */
  export type LegDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Legs to delete
     */
    where?: LegWhereInput
    /**
     * Limit how many Legs to delete.
     */
    limit?: number
  }

  /**
   * Leg without action
   */
  export type LegDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leg
     */
    select?: LegSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leg
     */
    omit?: LegOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LegInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DroneScalarFieldEnum: {
    id: 'id',
    name: 'name',
    maxPayloadKg: 'maxPayloadKg',
    maxRangeKm: 'maxRangeKm',
    batteryPct: 'batteryPct',
    status: 'status',
    baseX: 'baseX',
    baseY: 'baseY',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DroneScalarFieldEnum = (typeof DroneScalarFieldEnum)[keyof typeof DroneScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    customerX: 'customerX',
    customerY: 'customerY',
    weightKg: 'weightKg',
    priority: 'priority',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const TripScalarFieldEnum: {
    id: 'id',
    droneId: 'droneId',
    totalDistance: 'totalDistance',
    createdAt: 'createdAt'
  };

  export type TripScalarFieldEnum = (typeof TripScalarFieldEnum)[keyof typeof TripScalarFieldEnum]


  export const LegScalarFieldEnum: {
    id: 'id',
    tripId: 'tripId',
    orderId: 'orderId',
    sequence: 'sequence',
    distance: 'distance'
  };

  export type LegScalarFieldEnum = (typeof LegScalarFieldEnum)[keyof typeof LegScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'DroneStatus'
   */
  export type EnumDroneStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DroneStatus'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'OrderPriority'
   */
  export type EnumOrderPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderPriority'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    
  /**
   * Deep Input Types
   */


  export type DroneWhereInput = {
    AND?: DroneWhereInput | DroneWhereInput[]
    OR?: DroneWhereInput[]
    NOT?: DroneWhereInput | DroneWhereInput[]
    id?: IntFilter<"Drone"> | number
    name?: StringFilter<"Drone"> | string
    maxPayloadKg?: FloatFilter<"Drone"> | number
    maxRangeKm?: FloatFilter<"Drone"> | number
    batteryPct?: IntFilter<"Drone"> | number
    status?: EnumDroneStatusFilter<"Drone"> | $Enums.DroneStatus
    baseX?: IntFilter<"Drone"> | number
    baseY?: IntFilter<"Drone"> | number
    createdAt?: DateTimeFilter<"Drone"> | Date | string
    updatedAt?: DateTimeFilter<"Drone"> | Date | string
    Trip?: TripListRelationFilter
  }

  export type DroneOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    maxPayloadKg?: SortOrder
    maxRangeKm?: SortOrder
    batteryPct?: SortOrder
    status?: SortOrder
    baseX?: SortOrder
    baseY?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Trip?: TripOrderByRelationAggregateInput
  }

  export type DroneWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DroneWhereInput | DroneWhereInput[]
    OR?: DroneWhereInput[]
    NOT?: DroneWhereInput | DroneWhereInput[]
    name?: StringFilter<"Drone"> | string
    maxPayloadKg?: FloatFilter<"Drone"> | number
    maxRangeKm?: FloatFilter<"Drone"> | number
    batteryPct?: IntFilter<"Drone"> | number
    status?: EnumDroneStatusFilter<"Drone"> | $Enums.DroneStatus
    baseX?: IntFilter<"Drone"> | number
    baseY?: IntFilter<"Drone"> | number
    createdAt?: DateTimeFilter<"Drone"> | Date | string
    updatedAt?: DateTimeFilter<"Drone"> | Date | string
    Trip?: TripListRelationFilter
  }, "id">

  export type DroneOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    maxPayloadKg?: SortOrder
    maxRangeKm?: SortOrder
    batteryPct?: SortOrder
    status?: SortOrder
    baseX?: SortOrder
    baseY?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DroneCountOrderByAggregateInput
    _avg?: DroneAvgOrderByAggregateInput
    _max?: DroneMaxOrderByAggregateInput
    _min?: DroneMinOrderByAggregateInput
    _sum?: DroneSumOrderByAggregateInput
  }

  export type DroneScalarWhereWithAggregatesInput = {
    AND?: DroneScalarWhereWithAggregatesInput | DroneScalarWhereWithAggregatesInput[]
    OR?: DroneScalarWhereWithAggregatesInput[]
    NOT?: DroneScalarWhereWithAggregatesInput | DroneScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Drone"> | number
    name?: StringWithAggregatesFilter<"Drone"> | string
    maxPayloadKg?: FloatWithAggregatesFilter<"Drone"> | number
    maxRangeKm?: FloatWithAggregatesFilter<"Drone"> | number
    batteryPct?: IntWithAggregatesFilter<"Drone"> | number
    status?: EnumDroneStatusWithAggregatesFilter<"Drone"> | $Enums.DroneStatus
    baseX?: IntWithAggregatesFilter<"Drone"> | number
    baseY?: IntWithAggregatesFilter<"Drone"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Drone"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Drone"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: IntFilter<"Order"> | number
    customerX?: IntFilter<"Order"> | number
    customerY?: IntFilter<"Order"> | number
    weightKg?: FloatFilter<"Order"> | number
    priority?: EnumOrderPriorityFilter<"Order"> | $Enums.OrderPriority
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    createdAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    customerX?: SortOrder
    customerY?: SortOrder
    weightKg?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    customerX?: IntFilter<"Order"> | number
    customerY?: IntFilter<"Order"> | number
    weightKg?: FloatFilter<"Order"> | number
    priority?: EnumOrderPriorityFilter<"Order"> | $Enums.OrderPriority
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    createdAt?: DateTimeFilter<"Order"> | Date | string
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    customerX?: SortOrder
    customerY?: SortOrder
    weightKg?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Order"> | number
    customerX?: IntWithAggregatesFilter<"Order"> | number
    customerY?: IntWithAggregatesFilter<"Order"> | number
    weightKg?: FloatWithAggregatesFilter<"Order"> | number
    priority?: EnumOrderPriorityWithAggregatesFilter<"Order"> | $Enums.OrderPriority
    status?: EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type TripWhereInput = {
    AND?: TripWhereInput | TripWhereInput[]
    OR?: TripWhereInput[]
    NOT?: TripWhereInput | TripWhereInput[]
    id?: IntFilter<"Trip"> | number
    droneId?: IntFilter<"Trip"> | number
    totalDistance?: FloatFilter<"Trip"> | number
    createdAt?: DateTimeFilter<"Trip"> | Date | string
    drone?: XOR<DroneScalarRelationFilter, DroneWhereInput>
    legs?: LegListRelationFilter
  }

  export type TripOrderByWithRelationInput = {
    id?: SortOrder
    droneId?: SortOrder
    totalDistance?: SortOrder
    createdAt?: SortOrder
    drone?: DroneOrderByWithRelationInput
    legs?: LegOrderByRelationAggregateInput
  }

  export type TripWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TripWhereInput | TripWhereInput[]
    OR?: TripWhereInput[]
    NOT?: TripWhereInput | TripWhereInput[]
    droneId?: IntFilter<"Trip"> | number
    totalDistance?: FloatFilter<"Trip"> | number
    createdAt?: DateTimeFilter<"Trip"> | Date | string
    drone?: XOR<DroneScalarRelationFilter, DroneWhereInput>
    legs?: LegListRelationFilter
  }, "id">

  export type TripOrderByWithAggregationInput = {
    id?: SortOrder
    droneId?: SortOrder
    totalDistance?: SortOrder
    createdAt?: SortOrder
    _count?: TripCountOrderByAggregateInput
    _avg?: TripAvgOrderByAggregateInput
    _max?: TripMaxOrderByAggregateInput
    _min?: TripMinOrderByAggregateInput
    _sum?: TripSumOrderByAggregateInput
  }

  export type TripScalarWhereWithAggregatesInput = {
    AND?: TripScalarWhereWithAggregatesInput | TripScalarWhereWithAggregatesInput[]
    OR?: TripScalarWhereWithAggregatesInput[]
    NOT?: TripScalarWhereWithAggregatesInput | TripScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Trip"> | number
    droneId?: IntWithAggregatesFilter<"Trip"> | number
    totalDistance?: FloatWithAggregatesFilter<"Trip"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Trip"> | Date | string
  }

  export type LegWhereInput = {
    AND?: LegWhereInput | LegWhereInput[]
    OR?: LegWhereInput[]
    NOT?: LegWhereInput | LegWhereInput[]
    id?: IntFilter<"Leg"> | number
    tripId?: IntFilter<"Leg"> | number
    orderId?: IntFilter<"Leg"> | number
    sequence?: IntFilter<"Leg"> | number
    distance?: FloatFilter<"Leg"> | number
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
  }

  export type LegOrderByWithRelationInput = {
    id?: SortOrder
    tripId?: SortOrder
    orderId?: SortOrder
    sequence?: SortOrder
    distance?: SortOrder
    trip?: TripOrderByWithRelationInput
  }

  export type LegWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LegWhereInput | LegWhereInput[]
    OR?: LegWhereInput[]
    NOT?: LegWhereInput | LegWhereInput[]
    tripId?: IntFilter<"Leg"> | number
    orderId?: IntFilter<"Leg"> | number
    sequence?: IntFilter<"Leg"> | number
    distance?: FloatFilter<"Leg"> | number
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
  }, "id">

  export type LegOrderByWithAggregationInput = {
    id?: SortOrder
    tripId?: SortOrder
    orderId?: SortOrder
    sequence?: SortOrder
    distance?: SortOrder
    _count?: LegCountOrderByAggregateInput
    _avg?: LegAvgOrderByAggregateInput
    _max?: LegMaxOrderByAggregateInput
    _min?: LegMinOrderByAggregateInput
    _sum?: LegSumOrderByAggregateInput
  }

  export type LegScalarWhereWithAggregatesInput = {
    AND?: LegScalarWhereWithAggregatesInput | LegScalarWhereWithAggregatesInput[]
    OR?: LegScalarWhereWithAggregatesInput[]
    NOT?: LegScalarWhereWithAggregatesInput | LegScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Leg"> | number
    tripId?: IntWithAggregatesFilter<"Leg"> | number
    orderId?: IntWithAggregatesFilter<"Leg"> | number
    sequence?: IntWithAggregatesFilter<"Leg"> | number
    distance?: FloatWithAggregatesFilter<"Leg"> | number
  }

  export type DroneCreateInput = {
    name: string
    maxPayloadKg: number
    maxRangeKm: number
    batteryPct?: number
    status?: $Enums.DroneStatus
    baseX?: number
    baseY?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Trip?: TripCreateNestedManyWithoutDroneInput
  }

  export type DroneUncheckedCreateInput = {
    id?: number
    name: string
    maxPayloadKg: number
    maxRangeKm: number
    batteryPct?: number
    status?: $Enums.DroneStatus
    baseX?: number
    baseY?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Trip?: TripUncheckedCreateNestedManyWithoutDroneInput
  }

  export type DroneUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    maxPayloadKg?: FloatFieldUpdateOperationsInput | number
    maxRangeKm?: FloatFieldUpdateOperationsInput | number
    batteryPct?: IntFieldUpdateOperationsInput | number
    status?: EnumDroneStatusFieldUpdateOperationsInput | $Enums.DroneStatus
    baseX?: IntFieldUpdateOperationsInput | number
    baseY?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Trip?: TripUpdateManyWithoutDroneNestedInput
  }

  export type DroneUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    maxPayloadKg?: FloatFieldUpdateOperationsInput | number
    maxRangeKm?: FloatFieldUpdateOperationsInput | number
    batteryPct?: IntFieldUpdateOperationsInput | number
    status?: EnumDroneStatusFieldUpdateOperationsInput | $Enums.DroneStatus
    baseX?: IntFieldUpdateOperationsInput | number
    baseY?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Trip?: TripUncheckedUpdateManyWithoutDroneNestedInput
  }

  export type DroneCreateManyInput = {
    id?: number
    name: string
    maxPayloadKg: number
    maxRangeKm: number
    batteryPct?: number
    status?: $Enums.DroneStatus
    baseX?: number
    baseY?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DroneUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    maxPayloadKg?: FloatFieldUpdateOperationsInput | number
    maxRangeKm?: FloatFieldUpdateOperationsInput | number
    batteryPct?: IntFieldUpdateOperationsInput | number
    status?: EnumDroneStatusFieldUpdateOperationsInput | $Enums.DroneStatus
    baseX?: IntFieldUpdateOperationsInput | number
    baseY?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DroneUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    maxPayloadKg?: FloatFieldUpdateOperationsInput | number
    maxRangeKm?: FloatFieldUpdateOperationsInput | number
    batteryPct?: IntFieldUpdateOperationsInput | number
    status?: EnumDroneStatusFieldUpdateOperationsInput | $Enums.DroneStatus
    baseX?: IntFieldUpdateOperationsInput | number
    baseY?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    customerX: number
    customerY: number
    weightKg: number
    priority: $Enums.OrderPriority
    status?: $Enums.OrderStatus
    createdAt?: Date | string
  }

  export type OrderUncheckedCreateInput = {
    id?: number
    customerX: number
    customerY: number
    weightKg: number
    priority: $Enums.OrderPriority
    status?: $Enums.OrderStatus
    createdAt?: Date | string
  }

  export type OrderUpdateInput = {
    customerX?: IntFieldUpdateOperationsInput | number
    customerY?: IntFieldUpdateOperationsInput | number
    weightKg?: FloatFieldUpdateOperationsInput | number
    priority?: EnumOrderPriorityFieldUpdateOperationsInput | $Enums.OrderPriority
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerX?: IntFieldUpdateOperationsInput | number
    customerY?: IntFieldUpdateOperationsInput | number
    weightKg?: FloatFieldUpdateOperationsInput | number
    priority?: EnumOrderPriorityFieldUpdateOperationsInput | $Enums.OrderPriority
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyInput = {
    id?: number
    customerX: number
    customerY: number
    weightKg: number
    priority: $Enums.OrderPriority
    status?: $Enums.OrderStatus
    createdAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    customerX?: IntFieldUpdateOperationsInput | number
    customerY?: IntFieldUpdateOperationsInput | number
    weightKg?: FloatFieldUpdateOperationsInput | number
    priority?: EnumOrderPriorityFieldUpdateOperationsInput | $Enums.OrderPriority
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerX?: IntFieldUpdateOperationsInput | number
    customerY?: IntFieldUpdateOperationsInput | number
    weightKg?: FloatFieldUpdateOperationsInput | number
    priority?: EnumOrderPriorityFieldUpdateOperationsInput | $Enums.OrderPriority
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripCreateInput = {
    totalDistance: number
    createdAt?: Date | string
    drone: DroneCreateNestedOneWithoutTripInput
    legs?: LegCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateInput = {
    id?: number
    droneId: number
    totalDistance: number
    createdAt?: Date | string
    legs?: LegUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripUpdateInput = {
    totalDistance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drone?: DroneUpdateOneRequiredWithoutTripNestedInput
    legs?: LegUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    droneId?: IntFieldUpdateOperationsInput | number
    totalDistance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    legs?: LegUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripCreateManyInput = {
    id?: number
    droneId: number
    totalDistance: number
    createdAt?: Date | string
  }

  export type TripUpdateManyMutationInput = {
    totalDistance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    droneId?: IntFieldUpdateOperationsInput | number
    totalDistance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LegCreateInput = {
    orderId: number
    sequence: number
    distance: number
    trip: TripCreateNestedOneWithoutLegsInput
  }

  export type LegUncheckedCreateInput = {
    id?: number
    tripId: number
    orderId: number
    sequence: number
    distance: number
  }

  export type LegUpdateInput = {
    orderId?: IntFieldUpdateOperationsInput | number
    sequence?: IntFieldUpdateOperationsInput | number
    distance?: FloatFieldUpdateOperationsInput | number
    trip?: TripUpdateOneRequiredWithoutLegsNestedInput
  }

  export type LegUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tripId?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    sequence?: IntFieldUpdateOperationsInput | number
    distance?: FloatFieldUpdateOperationsInput | number
  }

  export type LegCreateManyInput = {
    id?: number
    tripId: number
    orderId: number
    sequence: number
    distance: number
  }

  export type LegUpdateManyMutationInput = {
    orderId?: IntFieldUpdateOperationsInput | number
    sequence?: IntFieldUpdateOperationsInput | number
    distance?: FloatFieldUpdateOperationsInput | number
  }

  export type LegUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tripId?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    sequence?: IntFieldUpdateOperationsInput | number
    distance?: FloatFieldUpdateOperationsInput | number
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
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumDroneStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DroneStatus | EnumDroneStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DroneStatus[]
    notIn?: $Enums.DroneStatus[]
    not?: NestedEnumDroneStatusFilter<$PrismaModel> | $Enums.DroneStatus
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

  export type TripListRelationFilter = {
    every?: TripWhereInput
    some?: TripWhereInput
    none?: TripWhereInput
  }

  export type TripOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DroneCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    maxPayloadKg?: SortOrder
    maxRangeKm?: SortOrder
    batteryPct?: SortOrder
    status?: SortOrder
    baseX?: SortOrder
    baseY?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DroneAvgOrderByAggregateInput = {
    id?: SortOrder
    maxPayloadKg?: SortOrder
    maxRangeKm?: SortOrder
    batteryPct?: SortOrder
    baseX?: SortOrder
    baseY?: SortOrder
  }

  export type DroneMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    maxPayloadKg?: SortOrder
    maxRangeKm?: SortOrder
    batteryPct?: SortOrder
    status?: SortOrder
    baseX?: SortOrder
    baseY?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DroneMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    maxPayloadKg?: SortOrder
    maxRangeKm?: SortOrder
    batteryPct?: SortOrder
    status?: SortOrder
    baseX?: SortOrder
    baseY?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DroneSumOrderByAggregateInput = {
    id?: SortOrder
    maxPayloadKg?: SortOrder
    maxRangeKm?: SortOrder
    batteryPct?: SortOrder
    baseX?: SortOrder
    baseY?: SortOrder
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumDroneStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DroneStatus | EnumDroneStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DroneStatus[]
    notIn?: $Enums.DroneStatus[]
    not?: NestedEnumDroneStatusWithAggregatesFilter<$PrismaModel> | $Enums.DroneStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDroneStatusFilter<$PrismaModel>
    _max?: NestedEnumDroneStatusFilter<$PrismaModel>
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

  export type EnumOrderPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderPriority | EnumOrderPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.OrderPriority[]
    notIn?: $Enums.OrderPriority[]
    not?: NestedEnumOrderPriorityFilter<$PrismaModel> | $Enums.OrderPriority
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[]
    notIn?: $Enums.OrderStatus[]
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    customerX?: SortOrder
    customerY?: SortOrder
    weightKg?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder
    customerX?: SortOrder
    customerY?: SortOrder
    weightKg?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    customerX?: SortOrder
    customerY?: SortOrder
    weightKg?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    customerX?: SortOrder
    customerY?: SortOrder
    weightKg?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder
    customerX?: SortOrder
    customerY?: SortOrder
    weightKg?: SortOrder
  }

  export type EnumOrderPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderPriority | EnumOrderPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.OrderPriority[]
    notIn?: $Enums.OrderPriority[]
    not?: NestedEnumOrderPriorityWithAggregatesFilter<$PrismaModel> | $Enums.OrderPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderPriorityFilter<$PrismaModel>
    _max?: NestedEnumOrderPriorityFilter<$PrismaModel>
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[]
    notIn?: $Enums.OrderStatus[]
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type DroneScalarRelationFilter = {
    is?: DroneWhereInput
    isNot?: DroneWhereInput
  }

  export type LegListRelationFilter = {
    every?: LegWhereInput
    some?: LegWhereInput
    none?: LegWhereInput
  }

  export type LegOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TripCountOrderByAggregateInput = {
    id?: SortOrder
    droneId?: SortOrder
    totalDistance?: SortOrder
    createdAt?: SortOrder
  }

  export type TripAvgOrderByAggregateInput = {
    id?: SortOrder
    droneId?: SortOrder
    totalDistance?: SortOrder
  }

  export type TripMaxOrderByAggregateInput = {
    id?: SortOrder
    droneId?: SortOrder
    totalDistance?: SortOrder
    createdAt?: SortOrder
  }

  export type TripMinOrderByAggregateInput = {
    id?: SortOrder
    droneId?: SortOrder
    totalDistance?: SortOrder
    createdAt?: SortOrder
  }

  export type TripSumOrderByAggregateInput = {
    id?: SortOrder
    droneId?: SortOrder
    totalDistance?: SortOrder
  }

  export type TripScalarRelationFilter = {
    is?: TripWhereInput
    isNot?: TripWhereInput
  }

  export type LegCountOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    orderId?: SortOrder
    sequence?: SortOrder
    distance?: SortOrder
  }

  export type LegAvgOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    orderId?: SortOrder
    sequence?: SortOrder
    distance?: SortOrder
  }

  export type LegMaxOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    orderId?: SortOrder
    sequence?: SortOrder
    distance?: SortOrder
  }

  export type LegMinOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    orderId?: SortOrder
    sequence?: SortOrder
    distance?: SortOrder
  }

  export type LegSumOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    orderId?: SortOrder
    sequence?: SortOrder
    distance?: SortOrder
  }

  export type TripCreateNestedManyWithoutDroneInput = {
    create?: XOR<TripCreateWithoutDroneInput, TripUncheckedCreateWithoutDroneInput> | TripCreateWithoutDroneInput[] | TripUncheckedCreateWithoutDroneInput[]
    connectOrCreate?: TripCreateOrConnectWithoutDroneInput | TripCreateOrConnectWithoutDroneInput[]
    createMany?: TripCreateManyDroneInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type TripUncheckedCreateNestedManyWithoutDroneInput = {
    create?: XOR<TripCreateWithoutDroneInput, TripUncheckedCreateWithoutDroneInput> | TripCreateWithoutDroneInput[] | TripUncheckedCreateWithoutDroneInput[]
    connectOrCreate?: TripCreateOrConnectWithoutDroneInput | TripCreateOrConnectWithoutDroneInput[]
    createMany?: TripCreateManyDroneInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumDroneStatusFieldUpdateOperationsInput = {
    set?: $Enums.DroneStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TripUpdateManyWithoutDroneNestedInput = {
    create?: XOR<TripCreateWithoutDroneInput, TripUncheckedCreateWithoutDroneInput> | TripCreateWithoutDroneInput[] | TripUncheckedCreateWithoutDroneInput[]
    connectOrCreate?: TripCreateOrConnectWithoutDroneInput | TripCreateOrConnectWithoutDroneInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutDroneInput | TripUpsertWithWhereUniqueWithoutDroneInput[]
    createMany?: TripCreateManyDroneInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutDroneInput | TripUpdateWithWhereUniqueWithoutDroneInput[]
    updateMany?: TripUpdateManyWithWhereWithoutDroneInput | TripUpdateManyWithWhereWithoutDroneInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type TripUncheckedUpdateManyWithoutDroneNestedInput = {
    create?: XOR<TripCreateWithoutDroneInput, TripUncheckedCreateWithoutDroneInput> | TripCreateWithoutDroneInput[] | TripUncheckedCreateWithoutDroneInput[]
    connectOrCreate?: TripCreateOrConnectWithoutDroneInput | TripCreateOrConnectWithoutDroneInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutDroneInput | TripUpsertWithWhereUniqueWithoutDroneInput[]
    createMany?: TripCreateManyDroneInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutDroneInput | TripUpdateWithWhereUniqueWithoutDroneInput[]
    updateMany?: TripUpdateManyWithWhereWithoutDroneInput | TripUpdateManyWithWhereWithoutDroneInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type EnumOrderPriorityFieldUpdateOperationsInput = {
    set?: $Enums.OrderPriority
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type DroneCreateNestedOneWithoutTripInput = {
    create?: XOR<DroneCreateWithoutTripInput, DroneUncheckedCreateWithoutTripInput>
    connectOrCreate?: DroneCreateOrConnectWithoutTripInput
    connect?: DroneWhereUniqueInput
  }

  export type LegCreateNestedManyWithoutTripInput = {
    create?: XOR<LegCreateWithoutTripInput, LegUncheckedCreateWithoutTripInput> | LegCreateWithoutTripInput[] | LegUncheckedCreateWithoutTripInput[]
    connectOrCreate?: LegCreateOrConnectWithoutTripInput | LegCreateOrConnectWithoutTripInput[]
    createMany?: LegCreateManyTripInputEnvelope
    connect?: LegWhereUniqueInput | LegWhereUniqueInput[]
  }

  export type LegUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<LegCreateWithoutTripInput, LegUncheckedCreateWithoutTripInput> | LegCreateWithoutTripInput[] | LegUncheckedCreateWithoutTripInput[]
    connectOrCreate?: LegCreateOrConnectWithoutTripInput | LegCreateOrConnectWithoutTripInput[]
    createMany?: LegCreateManyTripInputEnvelope
    connect?: LegWhereUniqueInput | LegWhereUniqueInput[]
  }

  export type DroneUpdateOneRequiredWithoutTripNestedInput = {
    create?: XOR<DroneCreateWithoutTripInput, DroneUncheckedCreateWithoutTripInput>
    connectOrCreate?: DroneCreateOrConnectWithoutTripInput
    upsert?: DroneUpsertWithoutTripInput
    connect?: DroneWhereUniqueInput
    update?: XOR<XOR<DroneUpdateToOneWithWhereWithoutTripInput, DroneUpdateWithoutTripInput>, DroneUncheckedUpdateWithoutTripInput>
  }

  export type LegUpdateManyWithoutTripNestedInput = {
    create?: XOR<LegCreateWithoutTripInput, LegUncheckedCreateWithoutTripInput> | LegCreateWithoutTripInput[] | LegUncheckedCreateWithoutTripInput[]
    connectOrCreate?: LegCreateOrConnectWithoutTripInput | LegCreateOrConnectWithoutTripInput[]
    upsert?: LegUpsertWithWhereUniqueWithoutTripInput | LegUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: LegCreateManyTripInputEnvelope
    set?: LegWhereUniqueInput | LegWhereUniqueInput[]
    disconnect?: LegWhereUniqueInput | LegWhereUniqueInput[]
    delete?: LegWhereUniqueInput | LegWhereUniqueInput[]
    connect?: LegWhereUniqueInput | LegWhereUniqueInput[]
    update?: LegUpdateWithWhereUniqueWithoutTripInput | LegUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: LegUpdateManyWithWhereWithoutTripInput | LegUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: LegScalarWhereInput | LegScalarWhereInput[]
  }

  export type LegUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<LegCreateWithoutTripInput, LegUncheckedCreateWithoutTripInput> | LegCreateWithoutTripInput[] | LegUncheckedCreateWithoutTripInput[]
    connectOrCreate?: LegCreateOrConnectWithoutTripInput | LegCreateOrConnectWithoutTripInput[]
    upsert?: LegUpsertWithWhereUniqueWithoutTripInput | LegUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: LegCreateManyTripInputEnvelope
    set?: LegWhereUniqueInput | LegWhereUniqueInput[]
    disconnect?: LegWhereUniqueInput | LegWhereUniqueInput[]
    delete?: LegWhereUniqueInput | LegWhereUniqueInput[]
    connect?: LegWhereUniqueInput | LegWhereUniqueInput[]
    update?: LegUpdateWithWhereUniqueWithoutTripInput | LegUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: LegUpdateManyWithWhereWithoutTripInput | LegUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: LegScalarWhereInput | LegScalarWhereInput[]
  }

  export type TripCreateNestedOneWithoutLegsInput = {
    create?: XOR<TripCreateWithoutLegsInput, TripUncheckedCreateWithoutLegsInput>
    connectOrCreate?: TripCreateOrConnectWithoutLegsInput
    connect?: TripWhereUniqueInput
  }

  export type TripUpdateOneRequiredWithoutLegsNestedInput = {
    create?: XOR<TripCreateWithoutLegsInput, TripUncheckedCreateWithoutLegsInput>
    connectOrCreate?: TripCreateOrConnectWithoutLegsInput
    upsert?: TripUpsertWithoutLegsInput
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutLegsInput, TripUpdateWithoutLegsInput>, TripUncheckedUpdateWithoutLegsInput>
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
    not?: NestedStringFilter<$PrismaModel> | string
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

  export type NestedEnumDroneStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DroneStatus | EnumDroneStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DroneStatus[]
    notIn?: $Enums.DroneStatus[]
    not?: NestedEnumDroneStatusFilter<$PrismaModel> | $Enums.DroneStatus
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumDroneStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DroneStatus | EnumDroneStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DroneStatus[]
    notIn?: $Enums.DroneStatus[]
    not?: NestedEnumDroneStatusWithAggregatesFilter<$PrismaModel> | $Enums.DroneStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDroneStatusFilter<$PrismaModel>
    _max?: NestedEnumDroneStatusFilter<$PrismaModel>
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

  export type NestedEnumOrderPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderPriority | EnumOrderPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.OrderPriority[]
    notIn?: $Enums.OrderPriority[]
    not?: NestedEnumOrderPriorityFilter<$PrismaModel> | $Enums.OrderPriority
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[]
    notIn?: $Enums.OrderStatus[]
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedEnumOrderPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderPriority | EnumOrderPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.OrderPriority[]
    notIn?: $Enums.OrderPriority[]
    not?: NestedEnumOrderPriorityWithAggregatesFilter<$PrismaModel> | $Enums.OrderPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderPriorityFilter<$PrismaModel>
    _max?: NestedEnumOrderPriorityFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[]
    notIn?: $Enums.OrderStatus[]
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type TripCreateWithoutDroneInput = {
    totalDistance: number
    createdAt?: Date | string
    legs?: LegCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutDroneInput = {
    id?: number
    totalDistance: number
    createdAt?: Date | string
    legs?: LegUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutDroneInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutDroneInput, TripUncheckedCreateWithoutDroneInput>
  }

  export type TripCreateManyDroneInputEnvelope = {
    data: TripCreateManyDroneInput | TripCreateManyDroneInput[]
  }

  export type TripUpsertWithWhereUniqueWithoutDroneInput = {
    where: TripWhereUniqueInput
    update: XOR<TripUpdateWithoutDroneInput, TripUncheckedUpdateWithoutDroneInput>
    create: XOR<TripCreateWithoutDroneInput, TripUncheckedCreateWithoutDroneInput>
  }

  export type TripUpdateWithWhereUniqueWithoutDroneInput = {
    where: TripWhereUniqueInput
    data: XOR<TripUpdateWithoutDroneInput, TripUncheckedUpdateWithoutDroneInput>
  }

  export type TripUpdateManyWithWhereWithoutDroneInput = {
    where: TripScalarWhereInput
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyWithoutDroneInput>
  }

  export type TripScalarWhereInput = {
    AND?: TripScalarWhereInput | TripScalarWhereInput[]
    OR?: TripScalarWhereInput[]
    NOT?: TripScalarWhereInput | TripScalarWhereInput[]
    id?: IntFilter<"Trip"> | number
    droneId?: IntFilter<"Trip"> | number
    totalDistance?: FloatFilter<"Trip"> | number
    createdAt?: DateTimeFilter<"Trip"> | Date | string
  }

  export type DroneCreateWithoutTripInput = {
    name: string
    maxPayloadKg: number
    maxRangeKm: number
    batteryPct?: number
    status?: $Enums.DroneStatus
    baseX?: number
    baseY?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DroneUncheckedCreateWithoutTripInput = {
    id?: number
    name: string
    maxPayloadKg: number
    maxRangeKm: number
    batteryPct?: number
    status?: $Enums.DroneStatus
    baseX?: number
    baseY?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DroneCreateOrConnectWithoutTripInput = {
    where: DroneWhereUniqueInput
    create: XOR<DroneCreateWithoutTripInput, DroneUncheckedCreateWithoutTripInput>
  }

  export type LegCreateWithoutTripInput = {
    orderId: number
    sequence: number
    distance: number
  }

  export type LegUncheckedCreateWithoutTripInput = {
    id?: number
    orderId: number
    sequence: number
    distance: number
  }

  export type LegCreateOrConnectWithoutTripInput = {
    where: LegWhereUniqueInput
    create: XOR<LegCreateWithoutTripInput, LegUncheckedCreateWithoutTripInput>
  }

  export type LegCreateManyTripInputEnvelope = {
    data: LegCreateManyTripInput | LegCreateManyTripInput[]
  }

  export type DroneUpsertWithoutTripInput = {
    update: XOR<DroneUpdateWithoutTripInput, DroneUncheckedUpdateWithoutTripInput>
    create: XOR<DroneCreateWithoutTripInput, DroneUncheckedCreateWithoutTripInput>
    where?: DroneWhereInput
  }

  export type DroneUpdateToOneWithWhereWithoutTripInput = {
    where?: DroneWhereInput
    data: XOR<DroneUpdateWithoutTripInput, DroneUncheckedUpdateWithoutTripInput>
  }

  export type DroneUpdateWithoutTripInput = {
    name?: StringFieldUpdateOperationsInput | string
    maxPayloadKg?: FloatFieldUpdateOperationsInput | number
    maxRangeKm?: FloatFieldUpdateOperationsInput | number
    batteryPct?: IntFieldUpdateOperationsInput | number
    status?: EnumDroneStatusFieldUpdateOperationsInput | $Enums.DroneStatus
    baseX?: IntFieldUpdateOperationsInput | number
    baseY?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DroneUncheckedUpdateWithoutTripInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    maxPayloadKg?: FloatFieldUpdateOperationsInput | number
    maxRangeKm?: FloatFieldUpdateOperationsInput | number
    batteryPct?: IntFieldUpdateOperationsInput | number
    status?: EnumDroneStatusFieldUpdateOperationsInput | $Enums.DroneStatus
    baseX?: IntFieldUpdateOperationsInput | number
    baseY?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LegUpsertWithWhereUniqueWithoutTripInput = {
    where: LegWhereUniqueInput
    update: XOR<LegUpdateWithoutTripInput, LegUncheckedUpdateWithoutTripInput>
    create: XOR<LegCreateWithoutTripInput, LegUncheckedCreateWithoutTripInput>
  }

  export type LegUpdateWithWhereUniqueWithoutTripInput = {
    where: LegWhereUniqueInput
    data: XOR<LegUpdateWithoutTripInput, LegUncheckedUpdateWithoutTripInput>
  }

  export type LegUpdateManyWithWhereWithoutTripInput = {
    where: LegScalarWhereInput
    data: XOR<LegUpdateManyMutationInput, LegUncheckedUpdateManyWithoutTripInput>
  }

  export type LegScalarWhereInput = {
    AND?: LegScalarWhereInput | LegScalarWhereInput[]
    OR?: LegScalarWhereInput[]
    NOT?: LegScalarWhereInput | LegScalarWhereInput[]
    id?: IntFilter<"Leg"> | number
    tripId?: IntFilter<"Leg"> | number
    orderId?: IntFilter<"Leg"> | number
    sequence?: IntFilter<"Leg"> | number
    distance?: FloatFilter<"Leg"> | number
  }

  export type TripCreateWithoutLegsInput = {
    totalDistance: number
    createdAt?: Date | string
    drone: DroneCreateNestedOneWithoutTripInput
  }

  export type TripUncheckedCreateWithoutLegsInput = {
    id?: number
    droneId: number
    totalDistance: number
    createdAt?: Date | string
  }

  export type TripCreateOrConnectWithoutLegsInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutLegsInput, TripUncheckedCreateWithoutLegsInput>
  }

  export type TripUpsertWithoutLegsInput = {
    update: XOR<TripUpdateWithoutLegsInput, TripUncheckedUpdateWithoutLegsInput>
    create: XOR<TripCreateWithoutLegsInput, TripUncheckedCreateWithoutLegsInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutLegsInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutLegsInput, TripUncheckedUpdateWithoutLegsInput>
  }

  export type TripUpdateWithoutLegsInput = {
    totalDistance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drone?: DroneUpdateOneRequiredWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutLegsInput = {
    id?: IntFieldUpdateOperationsInput | number
    droneId?: IntFieldUpdateOperationsInput | number
    totalDistance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripCreateManyDroneInput = {
    id?: number
    totalDistance: number
    createdAt?: Date | string
  }

  export type TripUpdateWithoutDroneInput = {
    totalDistance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    legs?: LegUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutDroneInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalDistance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    legs?: LegUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateManyWithoutDroneInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalDistance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LegCreateManyTripInput = {
    id?: number
    orderId: number
    sequence: number
    distance: number
  }

  export type LegUpdateWithoutTripInput = {
    orderId?: IntFieldUpdateOperationsInput | number
    sequence?: IntFieldUpdateOperationsInput | number
    distance?: FloatFieldUpdateOperationsInput | number
  }

  export type LegUncheckedUpdateWithoutTripInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    sequence?: IntFieldUpdateOperationsInput | number
    distance?: FloatFieldUpdateOperationsInput | number
  }

  export type LegUncheckedUpdateManyWithoutTripInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    sequence?: IntFieldUpdateOperationsInput | number
    distance?: FloatFieldUpdateOperationsInput | number
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