
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model student
 * 
 */
export type student = $Result.DefaultSelection<Prisma.$studentPayload>
/**
 * Model teacher
 * 
 */
export type teacher = $Result.DefaultSelection<Prisma.$teacherPayload>
/**
 * Model inscription
 * 
 */
export type inscription = $Result.DefaultSelection<Prisma.$inscriptionPayload>
/**
 * Model course
 * 
 */
export type course = $Result.DefaultSelection<Prisma.$coursePayload>
/**
 * Model module
 * 
 */
export type module = $Result.DefaultSelection<Prisma.$modulePayload>
/**
 * Model module_resource
 * 
 */
export type module_resource = $Result.DefaultSelection<Prisma.$module_resourcePayload>
/**
 * Model section
 * 
 */
export type section = $Result.DefaultSelection<Prisma.$sectionPayload>
/**
 * Model section_resource
 * 
 */
export type section_resource = $Result.DefaultSelection<Prisma.$section_resourcePayload>
/**
 * Model activity
 * 
 */
export type activity = $Result.DefaultSelection<Prisma.$activityPayload>
/**
 * Model activity_resource
 * 
 */
export type activity_resource = $Result.DefaultSelection<Prisma.$activity_resourcePayload>
/**
 * Model submission
 * 
 */
export type submission = $Result.DefaultSelection<Prisma.$submissionPayload>
/**
 * Model submission_resource
 * 
 */
export type submission_resource = $Result.DefaultSelection<Prisma.$submission_resourcePayload>
/**
 * Model asistance
 * 
 */
export type asistance = $Result.DefaultSelection<Prisma.$asistancePayload>
/**
 * Model asistance_register
 * 
 */
export type asistance_register = $Result.DefaultSelection<Prisma.$asistance_registerPayload>
/**
 * Model intern_cv
 * 
 */
export type intern_cv = $Result.DefaultSelection<Prisma.$intern_cvPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  USER: 'USER',
  TEACHER: 'TEACHER',
  STUDENT: 'STUDENT'
};

export type Role = (typeof Role)[keyof typeof Role]


export const StatusAsistance: {
  PRESENTE: 'PRESENTE',
  ATRASO: 'ATRASO',
  FALTA: 'FALTA'
};

export type StatusAsistance = (typeof StatusAsistance)[keyof typeof StatusAsistance]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type StatusAsistance = $Enums.StatusAsistance

export const StatusAsistance: typeof $Enums.StatusAsistance

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.studentDelegate<ExtArgs>;

  /**
   * `prisma.teacher`: Exposes CRUD operations for the **teacher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teachers
    * const teachers = await prisma.teacher.findMany()
    * ```
    */
  get teacher(): Prisma.teacherDelegate<ExtArgs>;

  /**
   * `prisma.inscription`: Exposes CRUD operations for the **inscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inscriptions
    * const inscriptions = await prisma.inscription.findMany()
    * ```
    */
  get inscription(): Prisma.inscriptionDelegate<ExtArgs>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.courseDelegate<ExtArgs>;

  /**
   * `prisma.module`: Exposes CRUD operations for the **module** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Modules
    * const modules = await prisma.module.findMany()
    * ```
    */
  get module(): Prisma.moduleDelegate<ExtArgs>;

  /**
   * `prisma.module_resource`: Exposes CRUD operations for the **module_resource** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Module_resources
    * const module_resources = await prisma.module_resource.findMany()
    * ```
    */
  get module_resource(): Prisma.module_resourceDelegate<ExtArgs>;

  /**
   * `prisma.section`: Exposes CRUD operations for the **section** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sections
    * const sections = await prisma.section.findMany()
    * ```
    */
  get section(): Prisma.sectionDelegate<ExtArgs>;

  /**
   * `prisma.section_resource`: Exposes CRUD operations for the **section_resource** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Section_resources
    * const section_resources = await prisma.section_resource.findMany()
    * ```
    */
  get section_resource(): Prisma.section_resourceDelegate<ExtArgs>;

  /**
   * `prisma.activity`: Exposes CRUD operations for the **activity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Activities
    * const activities = await prisma.activity.findMany()
    * ```
    */
  get activity(): Prisma.activityDelegate<ExtArgs>;

  /**
   * `prisma.activity_resource`: Exposes CRUD operations for the **activity_resource** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Activity_resources
    * const activity_resources = await prisma.activity_resource.findMany()
    * ```
    */
  get activity_resource(): Prisma.activity_resourceDelegate<ExtArgs>;

  /**
   * `prisma.submission`: Exposes CRUD operations for the **submission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Submissions
    * const submissions = await prisma.submission.findMany()
    * ```
    */
  get submission(): Prisma.submissionDelegate<ExtArgs>;

  /**
   * `prisma.submission_resource`: Exposes CRUD operations for the **submission_resource** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Submission_resources
    * const submission_resources = await prisma.submission_resource.findMany()
    * ```
    */
  get submission_resource(): Prisma.submission_resourceDelegate<ExtArgs>;

  /**
   * `prisma.asistance`: Exposes CRUD operations for the **asistance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Asistances
    * const asistances = await prisma.asistance.findMany()
    * ```
    */
  get asistance(): Prisma.asistanceDelegate<ExtArgs>;

  /**
   * `prisma.asistance_register`: Exposes CRUD operations for the **asistance_register** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Asistance_registers
    * const asistance_registers = await prisma.asistance_register.findMany()
    * ```
    */
  get asistance_register(): Prisma.asistance_registerDelegate<ExtArgs>;

  /**
   * `prisma.intern_cv`: Exposes CRUD operations for the **intern_cv** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Intern_cvs
    * const intern_cvs = await prisma.intern_cv.findMany()
    * ```
    */
  get intern_cv(): Prisma.intern_cvDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.4.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
    user: 'user',
    student: 'student',
    teacher: 'teacher',
    inscription: 'inscription',
    course: 'course',
    module: 'module',
    module_resource: 'module_resource',
    section: 'section',
    section_resource: 'section_resource',
    activity: 'activity',
    activity_resource: 'activity_resource',
    submission: 'submission',
    submission_resource: 'submission_resource',
    asistance: 'asistance',
    asistance_register: 'asistance_register',
    intern_cv: 'intern_cv'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'student' | 'teacher' | 'inscription' | 'course' | 'module' | 'module_resource' | 'section' | 'section_resource' | 'activity' | 'activity_resource' | 'submission' | 'submission_resource' | 'asistance' | 'asistance_register' | 'intern_cv'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      student: {
        payload: Prisma.$studentPayload<ExtArgs>
        fields: Prisma.studentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.studentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$studentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.studentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          findFirst: {
            args: Prisma.studentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$studentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.studentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          findMany: {
            args: Prisma.studentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$studentPayload>[]
          }
          create: {
            args: Prisma.studentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          createMany: {
            args: Prisma.studentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.studentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          update: {
            args: Prisma.studentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          deleteMany: {
            args: Prisma.studentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.studentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.studentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.studentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.studentCountArgs<ExtArgs>,
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      teacher: {
        payload: Prisma.$teacherPayload<ExtArgs>
        fields: Prisma.teacherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.teacherFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$teacherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.teacherFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>
          }
          findFirst: {
            args: Prisma.teacherFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$teacherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.teacherFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>
          }
          findMany: {
            args: Prisma.teacherFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>[]
          }
          create: {
            args: Prisma.teacherCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>
          }
          createMany: {
            args: Prisma.teacherCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.teacherDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>
          }
          update: {
            args: Prisma.teacherUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>
          }
          deleteMany: {
            args: Prisma.teacherDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.teacherUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.teacherUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>
          }
          aggregate: {
            args: Prisma.TeacherAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTeacher>
          }
          groupBy: {
            args: Prisma.teacherGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TeacherGroupByOutputType>[]
          }
          count: {
            args: Prisma.teacherCountArgs<ExtArgs>,
            result: $Utils.Optional<TeacherCountAggregateOutputType> | number
          }
        }
      }
      inscription: {
        payload: Prisma.$inscriptionPayload<ExtArgs>
        fields: Prisma.inscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.inscriptionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$inscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.inscriptionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$inscriptionPayload>
          }
          findFirst: {
            args: Prisma.inscriptionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$inscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.inscriptionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$inscriptionPayload>
          }
          findMany: {
            args: Prisma.inscriptionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$inscriptionPayload>[]
          }
          create: {
            args: Prisma.inscriptionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$inscriptionPayload>
          }
          createMany: {
            args: Prisma.inscriptionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.inscriptionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$inscriptionPayload>
          }
          update: {
            args: Prisma.inscriptionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$inscriptionPayload>
          }
          deleteMany: {
            args: Prisma.inscriptionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.inscriptionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.inscriptionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$inscriptionPayload>
          }
          aggregate: {
            args: Prisma.InscriptionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateInscription>
          }
          groupBy: {
            args: Prisma.inscriptionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<InscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.inscriptionCountArgs<ExtArgs>,
            result: $Utils.Optional<InscriptionCountAggregateOutputType> | number
          }
        }
      }
      course: {
        payload: Prisma.$coursePayload<ExtArgs>
        fields: Prisma.courseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.courseFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$coursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.courseFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          findFirst: {
            args: Prisma.courseFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$coursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.courseFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          findMany: {
            args: Prisma.courseFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$coursePayload>[]
          }
          create: {
            args: Prisma.courseCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          createMany: {
            args: Prisma.courseCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.courseDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          update: {
            args: Prisma.courseUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          deleteMany: {
            args: Prisma.courseDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.courseUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.courseUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.courseGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.courseCountArgs<ExtArgs>,
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      module: {
        payload: Prisma.$modulePayload<ExtArgs>
        fields: Prisma.moduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.moduleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$modulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.moduleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$modulePayload>
          }
          findFirst: {
            args: Prisma.moduleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$modulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.moduleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$modulePayload>
          }
          findMany: {
            args: Prisma.moduleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$modulePayload>[]
          }
          create: {
            args: Prisma.moduleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$modulePayload>
          }
          createMany: {
            args: Prisma.moduleCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.moduleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$modulePayload>
          }
          update: {
            args: Prisma.moduleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$modulePayload>
          }
          deleteMany: {
            args: Prisma.moduleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.moduleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.moduleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$modulePayload>
          }
          aggregate: {
            args: Prisma.ModuleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateModule>
          }
          groupBy: {
            args: Prisma.moduleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ModuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.moduleCountArgs<ExtArgs>,
            result: $Utils.Optional<ModuleCountAggregateOutputType> | number
          }
        }
      }
      module_resource: {
        payload: Prisma.$module_resourcePayload<ExtArgs>
        fields: Prisma.module_resourceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.module_resourceFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$module_resourcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.module_resourceFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$module_resourcePayload>
          }
          findFirst: {
            args: Prisma.module_resourceFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$module_resourcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.module_resourceFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$module_resourcePayload>
          }
          findMany: {
            args: Prisma.module_resourceFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$module_resourcePayload>[]
          }
          create: {
            args: Prisma.module_resourceCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$module_resourcePayload>
          }
          createMany: {
            args: Prisma.module_resourceCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.module_resourceDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$module_resourcePayload>
          }
          update: {
            args: Prisma.module_resourceUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$module_resourcePayload>
          }
          deleteMany: {
            args: Prisma.module_resourceDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.module_resourceUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.module_resourceUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$module_resourcePayload>
          }
          aggregate: {
            args: Prisma.Module_resourceAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateModule_resource>
          }
          groupBy: {
            args: Prisma.module_resourceGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Module_resourceGroupByOutputType>[]
          }
          count: {
            args: Prisma.module_resourceCountArgs<ExtArgs>,
            result: $Utils.Optional<Module_resourceCountAggregateOutputType> | number
          }
        }
      }
      section: {
        payload: Prisma.$sectionPayload<ExtArgs>
        fields: Prisma.sectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sectionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sectionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sectionPayload>
          }
          findFirst: {
            args: Prisma.sectionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sectionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sectionPayload>
          }
          findMany: {
            args: Prisma.sectionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sectionPayload>[]
          }
          create: {
            args: Prisma.sectionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sectionPayload>
          }
          createMany: {
            args: Prisma.sectionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.sectionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sectionPayload>
          }
          update: {
            args: Prisma.sectionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sectionPayload>
          }
          deleteMany: {
            args: Prisma.sectionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.sectionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.sectionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sectionPayload>
          }
          aggregate: {
            args: Prisma.SectionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSection>
          }
          groupBy: {
            args: Prisma.sectionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.sectionCountArgs<ExtArgs>,
            result: $Utils.Optional<SectionCountAggregateOutputType> | number
          }
        }
      }
      section_resource: {
        payload: Prisma.$section_resourcePayload<ExtArgs>
        fields: Prisma.section_resourceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.section_resourceFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$section_resourcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.section_resourceFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$section_resourcePayload>
          }
          findFirst: {
            args: Prisma.section_resourceFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$section_resourcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.section_resourceFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$section_resourcePayload>
          }
          findMany: {
            args: Prisma.section_resourceFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$section_resourcePayload>[]
          }
          create: {
            args: Prisma.section_resourceCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$section_resourcePayload>
          }
          createMany: {
            args: Prisma.section_resourceCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.section_resourceDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$section_resourcePayload>
          }
          update: {
            args: Prisma.section_resourceUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$section_resourcePayload>
          }
          deleteMany: {
            args: Prisma.section_resourceDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.section_resourceUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.section_resourceUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$section_resourcePayload>
          }
          aggregate: {
            args: Prisma.Section_resourceAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSection_resource>
          }
          groupBy: {
            args: Prisma.section_resourceGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Section_resourceGroupByOutputType>[]
          }
          count: {
            args: Prisma.section_resourceCountArgs<ExtArgs>,
            result: $Utils.Optional<Section_resourceCountAggregateOutputType> | number
          }
        }
      }
      activity: {
        payload: Prisma.$activityPayload<ExtArgs>
        fields: Prisma.activityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.activityFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$activityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.activityFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$activityPayload>
          }
          findFirst: {
            args: Prisma.activityFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$activityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.activityFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$activityPayload>
          }
          findMany: {
            args: Prisma.activityFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$activityPayload>[]
          }
          create: {
            args: Prisma.activityCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$activityPayload>
          }
          createMany: {
            args: Prisma.activityCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.activityDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$activityPayload>
          }
          update: {
            args: Prisma.activityUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$activityPayload>
          }
          deleteMany: {
            args: Prisma.activityDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.activityUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.activityUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$activityPayload>
          }
          aggregate: {
            args: Prisma.ActivityAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateActivity>
          }
          groupBy: {
            args: Prisma.activityGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.activityCountArgs<ExtArgs>,
            result: $Utils.Optional<ActivityCountAggregateOutputType> | number
          }
        }
      }
      activity_resource: {
        payload: Prisma.$activity_resourcePayload<ExtArgs>
        fields: Prisma.activity_resourceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.activity_resourceFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$activity_resourcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.activity_resourceFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$activity_resourcePayload>
          }
          findFirst: {
            args: Prisma.activity_resourceFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$activity_resourcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.activity_resourceFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$activity_resourcePayload>
          }
          findMany: {
            args: Prisma.activity_resourceFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$activity_resourcePayload>[]
          }
          create: {
            args: Prisma.activity_resourceCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$activity_resourcePayload>
          }
          createMany: {
            args: Prisma.activity_resourceCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.activity_resourceDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$activity_resourcePayload>
          }
          update: {
            args: Prisma.activity_resourceUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$activity_resourcePayload>
          }
          deleteMany: {
            args: Prisma.activity_resourceDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.activity_resourceUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.activity_resourceUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$activity_resourcePayload>
          }
          aggregate: {
            args: Prisma.Activity_resourceAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateActivity_resource>
          }
          groupBy: {
            args: Prisma.activity_resourceGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Activity_resourceGroupByOutputType>[]
          }
          count: {
            args: Prisma.activity_resourceCountArgs<ExtArgs>,
            result: $Utils.Optional<Activity_resourceCountAggregateOutputType> | number
          }
        }
      }
      submission: {
        payload: Prisma.$submissionPayload<ExtArgs>
        fields: Prisma.submissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.submissionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$submissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.submissionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$submissionPayload>
          }
          findFirst: {
            args: Prisma.submissionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$submissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.submissionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$submissionPayload>
          }
          findMany: {
            args: Prisma.submissionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$submissionPayload>[]
          }
          create: {
            args: Prisma.submissionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$submissionPayload>
          }
          createMany: {
            args: Prisma.submissionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.submissionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$submissionPayload>
          }
          update: {
            args: Prisma.submissionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$submissionPayload>
          }
          deleteMany: {
            args: Prisma.submissionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.submissionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.submissionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$submissionPayload>
          }
          aggregate: {
            args: Prisma.SubmissionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSubmission>
          }
          groupBy: {
            args: Prisma.submissionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.submissionCountArgs<ExtArgs>,
            result: $Utils.Optional<SubmissionCountAggregateOutputType> | number
          }
        }
      }
      submission_resource: {
        payload: Prisma.$submission_resourcePayload<ExtArgs>
        fields: Prisma.submission_resourceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.submission_resourceFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$submission_resourcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.submission_resourceFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$submission_resourcePayload>
          }
          findFirst: {
            args: Prisma.submission_resourceFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$submission_resourcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.submission_resourceFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$submission_resourcePayload>
          }
          findMany: {
            args: Prisma.submission_resourceFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$submission_resourcePayload>[]
          }
          create: {
            args: Prisma.submission_resourceCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$submission_resourcePayload>
          }
          createMany: {
            args: Prisma.submission_resourceCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.submission_resourceDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$submission_resourcePayload>
          }
          update: {
            args: Prisma.submission_resourceUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$submission_resourcePayload>
          }
          deleteMany: {
            args: Prisma.submission_resourceDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.submission_resourceUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.submission_resourceUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$submission_resourcePayload>
          }
          aggregate: {
            args: Prisma.Submission_resourceAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSubmission_resource>
          }
          groupBy: {
            args: Prisma.submission_resourceGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Submission_resourceGroupByOutputType>[]
          }
          count: {
            args: Prisma.submission_resourceCountArgs<ExtArgs>,
            result: $Utils.Optional<Submission_resourceCountAggregateOutputType> | number
          }
        }
      }
      asistance: {
        payload: Prisma.$asistancePayload<ExtArgs>
        fields: Prisma.asistanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.asistanceFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$asistancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.asistanceFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$asistancePayload>
          }
          findFirst: {
            args: Prisma.asistanceFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$asistancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.asistanceFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$asistancePayload>
          }
          findMany: {
            args: Prisma.asistanceFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$asistancePayload>[]
          }
          create: {
            args: Prisma.asistanceCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$asistancePayload>
          }
          createMany: {
            args: Prisma.asistanceCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.asistanceDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$asistancePayload>
          }
          update: {
            args: Prisma.asistanceUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$asistancePayload>
          }
          deleteMany: {
            args: Prisma.asistanceDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.asistanceUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.asistanceUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$asistancePayload>
          }
          aggregate: {
            args: Prisma.AsistanceAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAsistance>
          }
          groupBy: {
            args: Prisma.asistanceGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AsistanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.asistanceCountArgs<ExtArgs>,
            result: $Utils.Optional<AsistanceCountAggregateOutputType> | number
          }
        }
      }
      asistance_register: {
        payload: Prisma.$asistance_registerPayload<ExtArgs>
        fields: Prisma.asistance_registerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.asistance_registerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$asistance_registerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.asistance_registerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$asistance_registerPayload>
          }
          findFirst: {
            args: Prisma.asistance_registerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$asistance_registerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.asistance_registerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$asistance_registerPayload>
          }
          findMany: {
            args: Prisma.asistance_registerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$asistance_registerPayload>[]
          }
          create: {
            args: Prisma.asistance_registerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$asistance_registerPayload>
          }
          createMany: {
            args: Prisma.asistance_registerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.asistance_registerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$asistance_registerPayload>
          }
          update: {
            args: Prisma.asistance_registerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$asistance_registerPayload>
          }
          deleteMany: {
            args: Prisma.asistance_registerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.asistance_registerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.asistance_registerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$asistance_registerPayload>
          }
          aggregate: {
            args: Prisma.Asistance_registerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAsistance_register>
          }
          groupBy: {
            args: Prisma.asistance_registerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Asistance_registerGroupByOutputType>[]
          }
          count: {
            args: Prisma.asistance_registerCountArgs<ExtArgs>,
            result: $Utils.Optional<Asistance_registerCountAggregateOutputType> | number
          }
        }
      }
      intern_cv: {
        payload: Prisma.$intern_cvPayload<ExtArgs>
        fields: Prisma.intern_cvFieldRefs
        operations: {
          findUnique: {
            args: Prisma.intern_cvFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$intern_cvPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.intern_cvFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$intern_cvPayload>
          }
          findFirst: {
            args: Prisma.intern_cvFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$intern_cvPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.intern_cvFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$intern_cvPayload>
          }
          findMany: {
            args: Prisma.intern_cvFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$intern_cvPayload>[]
          }
          create: {
            args: Prisma.intern_cvCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$intern_cvPayload>
          }
          createMany: {
            args: Prisma.intern_cvCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.intern_cvDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$intern_cvPayload>
          }
          update: {
            args: Prisma.intern_cvUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$intern_cvPayload>
          }
          deleteMany: {
            args: Prisma.intern_cvDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.intern_cvUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.intern_cvUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$intern_cvPayload>
          }
          aggregate: {
            args: Prisma.Intern_cvAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateIntern_cv>
          }
          groupBy: {
            args: Prisma.intern_cvGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Intern_cvGroupByOutputType>[]
          }
          count: {
            args: Prisma.intern_cvCountArgs<ExtArgs>,
            result: $Utils.Optional<Intern_cvCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    students: number
    teacher: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | UserCountOutputTypeCountStudentsArgs
    teacher?: boolean | UserCountOutputTypeCountTeacherArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: studentWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTeacherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teacherWhereInput
  }



  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    activities: number
    inscriptions: number
    asistances_register: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activities?: boolean | StudentCountOutputTypeCountActivitiesArgs
    inscriptions?: boolean | StudentCountOutputTypeCountInscriptionsArgs
    asistances_register?: boolean | StudentCountOutputTypeCountAsistances_registerArgs
  }

  // Custom InputTypes

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: submissionWhereInput
  }


  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountInscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inscriptionWhereInput
  }


  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountAsistances_registerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: asistance_registerWhereInput
  }



  /**
   * Count Type TeacherCountOutputType
   */

  export type TeacherCountOutputType = {
    modules: number
  }

  export type TeacherCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modules?: boolean | TeacherCountOutputTypeCountModulesArgs
  }

  // Custom InputTypes

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherCountOutputType
     */
    select?: TeacherCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountModulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: moduleWhereInput
  }



  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    modules: number
    inscriptions: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modules?: boolean | CourseCountOutputTypeCountModulesArgs
    inscriptions?: boolean | CourseCountOutputTypeCountInscriptionsArgs
  }

  // Custom InputTypes

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountModulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: moduleWhereInput
  }


  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountInscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inscriptionWhereInput
  }



  /**
   * Count Type ModuleCountOutputType
   */

  export type ModuleCountOutputType = {
    sections: number
    resources: number
    asistances: number
  }

  export type ModuleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sections?: boolean | ModuleCountOutputTypeCountSectionsArgs
    resources?: boolean | ModuleCountOutputTypeCountResourcesArgs
    asistances?: boolean | ModuleCountOutputTypeCountAsistancesArgs
  }

  // Custom InputTypes

  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleCountOutputType
     */
    select?: ModuleCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeCountSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sectionWhereInput
  }


  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeCountResourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: module_resourceWhereInput
  }


  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeCountAsistancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: asistanceWhereInput
  }



  /**
   * Count Type SectionCountOutputType
   */

  export type SectionCountOutputType = {
    activities: number
    resources: number
  }

  export type SectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activities?: boolean | SectionCountOutputTypeCountActivitiesArgs
    resources?: boolean | SectionCountOutputTypeCountResourcesArgs
  }

  // Custom InputTypes

  /**
   * SectionCountOutputType without action
   */
  export type SectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionCountOutputType
     */
    select?: SectionCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * SectionCountOutputType without action
   */
  export type SectionCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: activityWhereInput
  }


  /**
   * SectionCountOutputType without action
   */
  export type SectionCountOutputTypeCountResourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: section_resourceWhereInput
  }



  /**
   * Count Type ActivityCountOutputType
   */

  export type ActivityCountOutputType = {
    submission: number
    resources: number
  }

  export type ActivityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | ActivityCountOutputTypeCountSubmissionArgs
    resources?: boolean | ActivityCountOutputTypeCountResourcesArgs
  }

  // Custom InputTypes

  /**
   * ActivityCountOutputType without action
   */
  export type ActivityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityCountOutputType
     */
    select?: ActivityCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ActivityCountOutputType without action
   */
  export type ActivityCountOutputTypeCountSubmissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: submissionWhereInput
  }


  /**
   * ActivityCountOutputType without action
   */
  export type ActivityCountOutputTypeCountResourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: activity_resourceWhereInput
  }



  /**
   * Count Type SubmissionCountOutputType
   */

  export type SubmissionCountOutputType = {
    resources: number
  }

  export type SubmissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resources?: boolean | SubmissionCountOutputTypeCountResourcesArgs
  }

  // Custom InputTypes

  /**
   * SubmissionCountOutputType without action
   */
  export type SubmissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubmissionCountOutputType
     */
    select?: SubmissionCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * SubmissionCountOutputType without action
   */
  export type SubmissionCountOutputTypeCountResourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: submission_resourceWhereInput
  }



  /**
   * Count Type AsistanceCountOutputType
   */

  export type AsistanceCountOutputType = {
    registers: number
  }

  export type AsistanceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registers?: boolean | AsistanceCountOutputTypeCountRegistersArgs
  }

  // Custom InputTypes

  /**
   * AsistanceCountOutputType without action
   */
  export type AsistanceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsistanceCountOutputType
     */
    select?: AsistanceCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * AsistanceCountOutputType without action
   */
  export type AsistanceCountOutputTypeCountRegistersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: asistance_registerWhereInput
  }



  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    email: string | null
    rol: $Enums.Role | null
    photo_url: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    email: string | null
    rol: $Enums.Role | null
    photo_url: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    email: number
    rol: number
    photo_url: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    rol?: true
    photo_url?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    rol?: true
    photo_url?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    rol?: true
    photo_url?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    password: string
    email: string
    rol: $Enums.Role
    photo_url: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    rol?: boolean
    photo_url?: boolean
    students?: boolean | user$studentsArgs<ExtArgs>
    teacher?: boolean | user$teacherArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    rol?: boolean
    photo_url?: boolean
  }

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | user$studentsArgs<ExtArgs>
    teacher?: boolean | user$teacherArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      students: Prisma.$studentPayload<ExtArgs>[]
      teacher: Prisma.$teacherPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      email: string
      rol: $Enums.Role
      photo_url: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<userFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    students<T extends user$studentsArgs<ExtArgs> = {}>(args?: Subset<T, user$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'findMany'> | Null>;

    teacher<T extends user$teacherArgs<ExtArgs> = {}>(args?: Subset<T, user$teacherArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the user model
   */ 
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'Int'>
    readonly username: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly rol: FieldRef<"user", 'Role'>
    readonly photo_url: FieldRef<"user", 'String'>
  }
    

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }


  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }


  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }


  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }


  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
  }


  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }


  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }


  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
  }


  /**
   * user.students
   */
  export type user$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null
    where?: studentWhereInput
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[]
    cursor?: studentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }


  /**
   * user.teacher
   */
  export type user$teacherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teacherInclude<ExtArgs> | null
    where?: teacherWhereInput
    orderBy?: teacherOrderByWithRelationInput | teacherOrderByWithRelationInput[]
    cursor?: teacherWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }


  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null
  }



  /**
   * Model student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type StudentSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type StudentMinAggregateOutputType = {
    id: number | null
    names: string | null
    last_names: string | null
    ID_card_url: string | null
    study_certificate_url: string | null
    user_id: number | null
  }

  export type StudentMaxAggregateOutputType = {
    id: number | null
    names: string | null
    last_names: string | null
    ID_card_url: string | null
    study_certificate_url: string | null
    user_id: number | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    names: number
    last_names: number
    ID_card_url: number
    study_certificate_url: number
    user_id: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type StudentSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type StudentMinAggregateInputType = {
    id?: true
    names?: true
    last_names?: true
    ID_card_url?: true
    study_certificate_url?: true
    user_id?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    names?: true
    last_names?: true
    ID_card_url?: true
    study_certificate_url?: true
    user_id?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    names?: true
    last_names?: true
    ID_card_url?: true
    study_certificate_url?: true
    user_id?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which student to aggregate.
     */
    where?: studentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: studentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type studentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: studentWhereInput
    orderBy?: studentOrderByWithAggregationInput | studentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: studentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: number
    names: string
    last_names: string
    ID_card_url: string
    study_certificate_url: string
    user_id: number
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends studentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type studentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    names?: boolean
    last_names?: boolean
    ID_card_url?: boolean
    study_certificate_url?: boolean
    user_id?: boolean
    activities?: boolean | student$activitiesArgs<ExtArgs>
    inscriptions?: boolean | student$inscriptionsArgs<ExtArgs>
    asistances_register?: boolean | student$asistances_registerArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type studentSelectScalar = {
    id?: boolean
    names?: boolean
    last_names?: boolean
    ID_card_url?: boolean
    study_certificate_url?: boolean
    user_id?: boolean
  }

  export type studentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activities?: boolean | student$activitiesArgs<ExtArgs>
    inscriptions?: boolean | student$inscriptionsArgs<ExtArgs>
    asistances_register?: boolean | student$asistances_registerArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $studentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "student"
    objects: {
      activities: Prisma.$submissionPayload<ExtArgs>[]
      inscriptions: Prisma.$inscriptionPayload<ExtArgs>[]
      asistances_register: Prisma.$asistance_registerPayload<ExtArgs>[]
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      names: string
      last_names: string
      ID_card_url: string
      study_certificate_url: string
      user_id: number
    }, ExtArgs["result"]["student"]>
    composites: {}
  }


  type studentGetPayload<S extends boolean | null | undefined | studentDefaultArgs> = $Result.GetResult<Prisma.$studentPayload, S>

  type studentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<studentFindManyArgs, 'select' | 'include'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface studentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['student'], meta: { name: 'student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {studentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends studentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, studentFindUniqueArgs<ExtArgs>>
    ): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Student that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {studentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends studentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, studentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends studentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, studentFindFirstArgs<ExtArgs>>
    ): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends studentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, studentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends studentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, studentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Student.
     * @param {studentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
    **/
    create<T extends studentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, studentCreateArgs<ExtArgs>>
    ): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Students.
     *     @param {studentCreateManyArgs} args - Arguments to create many Students.
     *     @example
     *     // Create many Students
     *     const student = await prisma.student.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends studentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, studentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Student.
     * @param {studentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
    **/
    delete<T extends studentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, studentDeleteArgs<ExtArgs>>
    ): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Student.
     * @param {studentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends studentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, studentUpdateArgs<ExtArgs>>
    ): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Students.
     * @param {studentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends studentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, studentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends studentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, studentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Student.
     * @param {studentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
    **/
    upsert<T extends studentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, studentUpsertArgs<ExtArgs>>
    ): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends studentCountArgs>(
      args?: Subset<T, studentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentGroupByArgs} args - Group by arguments.
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
      T extends studentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: studentGroupByArgs['orderBy'] }
        : { orderBy?: studentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, studentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the student model
   */
  readonly fields: studentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__studentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    activities<T extends student$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, student$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$submissionPayload<ExtArgs>, T, 'findMany'> | Null>;

    inscriptions<T extends student$inscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, student$inscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inscriptionPayload<ExtArgs>, T, 'findMany'> | Null>;

    asistances_register<T extends student$asistances_registerArgs<ExtArgs> = {}>(args?: Subset<T, student$asistances_registerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$asistance_registerPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the student model
   */ 
  interface studentFieldRefs {
    readonly id: FieldRef<"student", 'Int'>
    readonly names: FieldRef<"student", 'String'>
    readonly last_names: FieldRef<"student", 'String'>
    readonly ID_card_url: FieldRef<"student", 'String'>
    readonly study_certificate_url: FieldRef<"student", 'String'>
    readonly user_id: FieldRef<"student", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * student findUnique
   */
  export type studentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which student to fetch.
     */
    where: studentWhereUniqueInput
  }


  /**
   * student findUniqueOrThrow
   */
  export type studentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which student to fetch.
     */
    where: studentWhereUniqueInput
  }


  /**
   * student findFirst
   */
  export type studentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which student to fetch.
     */
    where?: studentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for students.
     */
    cursor?: studentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }


  /**
   * student findFirstOrThrow
   */
  export type studentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which student to fetch.
     */
    where?: studentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for students.
     */
    cursor?: studentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }


  /**
   * student findMany
   */
  export type studentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which students to fetch.
     */
    where?: studentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing students.
     */
    cursor?: studentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }


  /**
   * student create
   */
  export type studentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * The data needed to create a student.
     */
    data: XOR<studentCreateInput, studentUncheckedCreateInput>
  }


  /**
   * student createMany
   */
  export type studentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many students.
     */
    data: studentCreateManyInput | studentCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * student update
   */
  export type studentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * The data needed to update a student.
     */
    data: XOR<studentUpdateInput, studentUncheckedUpdateInput>
    /**
     * Choose, which student to update.
     */
    where: studentWhereUniqueInput
  }


  /**
   * student updateMany
   */
  export type studentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update students.
     */
    data: XOR<studentUpdateManyMutationInput, studentUncheckedUpdateManyInput>
    /**
     * Filter which students to update
     */
    where?: studentWhereInput
  }


  /**
   * student upsert
   */
  export type studentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * The filter to search for the student to update in case it exists.
     */
    where: studentWhereUniqueInput
    /**
     * In case the student found by the `where` argument doesn't exist, create a new student with this data.
     */
    create: XOR<studentCreateInput, studentUncheckedCreateInput>
    /**
     * In case the student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<studentUpdateInput, studentUncheckedUpdateInput>
  }


  /**
   * student delete
   */
  export type studentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter which student to delete.
     */
    where: studentWhereUniqueInput
  }


  /**
   * student deleteMany
   */
  export type studentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which students to delete
     */
    where?: studentWhereInput
  }


  /**
   * student.activities
   */
  export type student$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submission
     */
    select?: submissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: submissionInclude<ExtArgs> | null
    where?: submissionWhereInput
    orderBy?: submissionOrderByWithRelationInput | submissionOrderByWithRelationInput[]
    cursor?: submissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }


  /**
   * student.inscriptions
   */
  export type student$inscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscription
     */
    select?: inscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inscriptionInclude<ExtArgs> | null
    where?: inscriptionWhereInput
    orderBy?: inscriptionOrderByWithRelationInput | inscriptionOrderByWithRelationInput[]
    cursor?: inscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InscriptionScalarFieldEnum | InscriptionScalarFieldEnum[]
  }


  /**
   * student.asistances_register
   */
  export type student$asistances_registerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistance_register
     */
    select?: asistance_registerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: asistance_registerInclude<ExtArgs> | null
    where?: asistance_registerWhereInput
    orderBy?: asistance_registerOrderByWithRelationInput | asistance_registerOrderByWithRelationInput[]
    cursor?: asistance_registerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Asistance_registerScalarFieldEnum | Asistance_registerScalarFieldEnum[]
  }


  /**
   * student without action
   */
  export type studentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null
  }



  /**
   * Model teacher
   */

  export type AggregateTeacher = {
    _count: TeacherCountAggregateOutputType | null
    _avg: TeacherAvgAggregateOutputType | null
    _sum: TeacherSumAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  export type TeacherAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type TeacherSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type TeacherMinAggregateOutputType = {
    id: number | null
    names: string | null
    last_names: string | null
    ID_card_url: string | null
    cv_url: string | null
    third_level_degree: string | null
    user_id: number | null
  }

  export type TeacherMaxAggregateOutputType = {
    id: number | null
    names: string | null
    last_names: string | null
    ID_card_url: string | null
    cv_url: string | null
    third_level_degree: string | null
    user_id: number | null
  }

  export type TeacherCountAggregateOutputType = {
    id: number
    names: number
    last_names: number
    ID_card_url: number
    cv_url: number
    third_level_degree: number
    user_id: number
    _all: number
  }


  export type TeacherAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type TeacherSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type TeacherMinAggregateInputType = {
    id?: true
    names?: true
    last_names?: true
    ID_card_url?: true
    cv_url?: true
    third_level_degree?: true
    user_id?: true
  }

  export type TeacherMaxAggregateInputType = {
    id?: true
    names?: true
    last_names?: true
    ID_card_url?: true
    cv_url?: true
    third_level_degree?: true
    user_id?: true
  }

  export type TeacherCountAggregateInputType = {
    id?: true
    names?: true
    last_names?: true
    ID_card_url?: true
    cv_url?: true
    third_level_degree?: true
    user_id?: true
    _all?: true
  }

  export type TeacherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teacher to aggregate.
     */
    where?: teacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teachers to fetch.
     */
    orderBy?: teacherOrderByWithRelationInput | teacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: teacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned teachers
    **/
    _count?: true | TeacherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeacherAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeacherSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherMaxAggregateInputType
  }

  export type GetTeacherAggregateType<T extends TeacherAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacher[P]>
      : GetScalarType<T[P], AggregateTeacher[P]>
  }




  export type teacherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teacherWhereInput
    orderBy?: teacherOrderByWithAggregationInput | teacherOrderByWithAggregationInput[]
    by: TeacherScalarFieldEnum[] | TeacherScalarFieldEnum
    having?: teacherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherCountAggregateInputType | true
    _avg?: TeacherAvgAggregateInputType
    _sum?: TeacherSumAggregateInputType
    _min?: TeacherMinAggregateInputType
    _max?: TeacherMaxAggregateInputType
  }

  export type TeacherGroupByOutputType = {
    id: number
    names: string
    last_names: string
    ID_card_url: string
    cv_url: string
    third_level_degree: string
    user_id: number
    _count: TeacherCountAggregateOutputType | null
    _avg: TeacherAvgAggregateOutputType | null
    _sum: TeacherSumAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  type GetTeacherGroupByPayload<T extends teacherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherGroupByOutputType[P]>
        }
      >
    >


  export type teacherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    names?: boolean
    last_names?: boolean
    ID_card_url?: boolean
    cv_url?: boolean
    third_level_degree?: boolean
    user_id?: boolean
    modules?: boolean | teacher$modulesArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacher"]>

  export type teacherSelectScalar = {
    id?: boolean
    names?: boolean
    last_names?: boolean
    ID_card_url?: boolean
    cv_url?: boolean
    third_level_degree?: boolean
    user_id?: boolean
  }

  export type teacherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modules?: boolean | teacher$modulesArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $teacherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "teacher"
    objects: {
      modules: Prisma.$modulePayload<ExtArgs>[]
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      names: string
      last_names: string
      ID_card_url: string
      cv_url: string
      third_level_degree: string
      user_id: number
    }, ExtArgs["result"]["teacher"]>
    composites: {}
  }


  type teacherGetPayload<S extends boolean | null | undefined | teacherDefaultArgs> = $Result.GetResult<Prisma.$teacherPayload, S>

  type teacherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<teacherFindManyArgs, 'select' | 'include'> & {
      select?: TeacherCountAggregateInputType | true
    }

  export interface teacherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['teacher'], meta: { name: 'teacher' } }
    /**
     * Find zero or one Teacher that matches the filter.
     * @param {teacherFindUniqueArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends teacherFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, teacherFindUniqueArgs<ExtArgs>>
    ): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Teacher that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {teacherFindUniqueOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends teacherFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, teacherFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Teacher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacherFindFirstArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends teacherFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, teacherFindFirstArgs<ExtArgs>>
    ): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Teacher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacherFindFirstOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends teacherFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, teacherFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Teachers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacherFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teachers
     * const teachers = await prisma.teacher.findMany()
     * 
     * // Get first 10 Teachers
     * const teachers = await prisma.teacher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teacherWithIdOnly = await prisma.teacher.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends teacherFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, teacherFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Teacher.
     * @param {teacherCreateArgs} args - Arguments to create a Teacher.
     * @example
     * // Create one Teacher
     * const Teacher = await prisma.teacher.create({
     *   data: {
     *     // ... data to create a Teacher
     *   }
     * })
     * 
    **/
    create<T extends teacherCreateArgs<ExtArgs>>(
      args: SelectSubset<T, teacherCreateArgs<ExtArgs>>
    ): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Teachers.
     *     @param {teacherCreateManyArgs} args - Arguments to create many Teachers.
     *     @example
     *     // Create many Teachers
     *     const teacher = await prisma.teacher.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends teacherCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, teacherCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Teacher.
     * @param {teacherDeleteArgs} args - Arguments to delete one Teacher.
     * @example
     * // Delete one Teacher
     * const Teacher = await prisma.teacher.delete({
     *   where: {
     *     // ... filter to delete one Teacher
     *   }
     * })
     * 
    **/
    delete<T extends teacherDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, teacherDeleteArgs<ExtArgs>>
    ): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Teacher.
     * @param {teacherUpdateArgs} args - Arguments to update one Teacher.
     * @example
     * // Update one Teacher
     * const teacher = await prisma.teacher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends teacherUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, teacherUpdateArgs<ExtArgs>>
    ): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Teachers.
     * @param {teacherDeleteManyArgs} args - Arguments to filter Teachers to delete.
     * @example
     * // Delete a few Teachers
     * const { count } = await prisma.teacher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends teacherDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, teacherDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends teacherUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, teacherUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Teacher.
     * @param {teacherUpsertArgs} args - Arguments to update or create a Teacher.
     * @example
     * // Update or create a Teacher
     * const teacher = await prisma.teacher.upsert({
     *   create: {
     *     // ... data to create a Teacher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teacher we want to update
     *   }
     * })
    **/
    upsert<T extends teacherUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, teacherUpsertArgs<ExtArgs>>
    ): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacherCountArgs} args - Arguments to filter Teachers to count.
     * @example
     * // Count the number of Teachers
     * const count = await prisma.teacher.count({
     *   where: {
     *     // ... the filter for the Teachers we want to count
     *   }
     * })
    **/
    count<T extends teacherCountArgs>(
      args?: Subset<T, teacherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeacherAggregateArgs>(args: Subset<T, TeacherAggregateArgs>): Prisma.PrismaPromise<GetTeacherAggregateType<T>>

    /**
     * Group by Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacherGroupByArgs} args - Group by arguments.
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
      T extends teacherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: teacherGroupByArgs['orderBy'] }
        : { orderBy?: teacherGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, teacherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the teacher model
   */
  readonly fields: teacherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for teacher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__teacherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    modules<T extends teacher$modulesArgs<ExtArgs> = {}>(args?: Subset<T, teacher$modulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the teacher model
   */ 
  interface teacherFieldRefs {
    readonly id: FieldRef<"teacher", 'Int'>
    readonly names: FieldRef<"teacher", 'String'>
    readonly last_names: FieldRef<"teacher", 'String'>
    readonly ID_card_url: FieldRef<"teacher", 'String'>
    readonly cv_url: FieldRef<"teacher", 'String'>
    readonly third_level_degree: FieldRef<"teacher", 'String'>
    readonly user_id: FieldRef<"teacher", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * teacher findUnique
   */
  export type teacherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teacherInclude<ExtArgs> | null
    /**
     * Filter, which teacher to fetch.
     */
    where: teacherWhereUniqueInput
  }


  /**
   * teacher findUniqueOrThrow
   */
  export type teacherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teacherInclude<ExtArgs> | null
    /**
     * Filter, which teacher to fetch.
     */
    where: teacherWhereUniqueInput
  }


  /**
   * teacher findFirst
   */
  export type teacherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teacherInclude<ExtArgs> | null
    /**
     * Filter, which teacher to fetch.
     */
    where?: teacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teachers to fetch.
     */
    orderBy?: teacherOrderByWithRelationInput | teacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for teachers.
     */
    cursor?: teacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }


  /**
   * teacher findFirstOrThrow
   */
  export type teacherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teacherInclude<ExtArgs> | null
    /**
     * Filter, which teacher to fetch.
     */
    where?: teacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teachers to fetch.
     */
    orderBy?: teacherOrderByWithRelationInput | teacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for teachers.
     */
    cursor?: teacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }


  /**
   * teacher findMany
   */
  export type teacherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teacherInclude<ExtArgs> | null
    /**
     * Filter, which teachers to fetch.
     */
    where?: teacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teachers to fetch.
     */
    orderBy?: teacherOrderByWithRelationInput | teacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing teachers.
     */
    cursor?: teacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teachers.
     */
    skip?: number
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }


  /**
   * teacher create
   */
  export type teacherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teacherInclude<ExtArgs> | null
    /**
     * The data needed to create a teacher.
     */
    data: XOR<teacherCreateInput, teacherUncheckedCreateInput>
  }


  /**
   * teacher createMany
   */
  export type teacherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many teachers.
     */
    data: teacherCreateManyInput | teacherCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * teacher update
   */
  export type teacherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teacherInclude<ExtArgs> | null
    /**
     * The data needed to update a teacher.
     */
    data: XOR<teacherUpdateInput, teacherUncheckedUpdateInput>
    /**
     * Choose, which teacher to update.
     */
    where: teacherWhereUniqueInput
  }


  /**
   * teacher updateMany
   */
  export type teacherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update teachers.
     */
    data: XOR<teacherUpdateManyMutationInput, teacherUncheckedUpdateManyInput>
    /**
     * Filter which teachers to update
     */
    where?: teacherWhereInput
  }


  /**
   * teacher upsert
   */
  export type teacherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teacherInclude<ExtArgs> | null
    /**
     * The filter to search for the teacher to update in case it exists.
     */
    where: teacherWhereUniqueInput
    /**
     * In case the teacher found by the `where` argument doesn't exist, create a new teacher with this data.
     */
    create: XOR<teacherCreateInput, teacherUncheckedCreateInput>
    /**
     * In case the teacher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<teacherUpdateInput, teacherUncheckedUpdateInput>
  }


  /**
   * teacher delete
   */
  export type teacherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teacherInclude<ExtArgs> | null
    /**
     * Filter which teacher to delete.
     */
    where: teacherWhereUniqueInput
  }


  /**
   * teacher deleteMany
   */
  export type teacherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teachers to delete
     */
    where?: teacherWhereInput
  }


  /**
   * teacher.modules
   */
  export type teacher$modulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: moduleInclude<ExtArgs> | null
    where?: moduleWhereInput
    orderBy?: moduleOrderByWithRelationInput | moduleOrderByWithRelationInput[]
    cursor?: moduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }


  /**
   * teacher without action
   */
  export type teacherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teacherInclude<ExtArgs> | null
  }



  /**
   * Model inscription
   */

  export type AggregateInscription = {
    _count: InscriptionCountAggregateOutputType | null
    _avg: InscriptionAvgAggregateOutputType | null
    _sum: InscriptionSumAggregateOutputType | null
    _min: InscriptionMinAggregateOutputType | null
    _max: InscriptionMaxAggregateOutputType | null
  }

  export type InscriptionAvgAggregateOutputType = {
    id: number | null
    student_id: number | null
    course_id: number | null
  }

  export type InscriptionSumAggregateOutputType = {
    id: number | null
    student_id: number | null
    course_id: number | null
  }

  export type InscriptionMinAggregateOutputType = {
    id: number | null
    student_id: number | null
    course_id: number | null
  }

  export type InscriptionMaxAggregateOutputType = {
    id: number | null
    student_id: number | null
    course_id: number | null
  }

  export type InscriptionCountAggregateOutputType = {
    id: number
    student_id: number
    course_id: number
    _all: number
  }


  export type InscriptionAvgAggregateInputType = {
    id?: true
    student_id?: true
    course_id?: true
  }

  export type InscriptionSumAggregateInputType = {
    id?: true
    student_id?: true
    course_id?: true
  }

  export type InscriptionMinAggregateInputType = {
    id?: true
    student_id?: true
    course_id?: true
  }

  export type InscriptionMaxAggregateInputType = {
    id?: true
    student_id?: true
    course_id?: true
  }

  export type InscriptionCountAggregateInputType = {
    id?: true
    student_id?: true
    course_id?: true
    _all?: true
  }

  export type InscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inscription to aggregate.
     */
    where?: inscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inscriptions to fetch.
     */
    orderBy?: inscriptionOrderByWithRelationInput | inscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: inscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned inscriptions
    **/
    _count?: true | InscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InscriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InscriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InscriptionMaxAggregateInputType
  }

  export type GetInscriptionAggregateType<T extends InscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateInscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInscription[P]>
      : GetScalarType<T[P], AggregateInscription[P]>
  }




  export type inscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inscriptionWhereInput
    orderBy?: inscriptionOrderByWithAggregationInput | inscriptionOrderByWithAggregationInput[]
    by: InscriptionScalarFieldEnum[] | InscriptionScalarFieldEnum
    having?: inscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InscriptionCountAggregateInputType | true
    _avg?: InscriptionAvgAggregateInputType
    _sum?: InscriptionSumAggregateInputType
    _min?: InscriptionMinAggregateInputType
    _max?: InscriptionMaxAggregateInputType
  }

  export type InscriptionGroupByOutputType = {
    id: number
    student_id: number
    course_id: number
    _count: InscriptionCountAggregateOutputType | null
    _avg: InscriptionAvgAggregateOutputType | null
    _sum: InscriptionSumAggregateOutputType | null
    _min: InscriptionMinAggregateOutputType | null
    _max: InscriptionMaxAggregateOutputType | null
  }

  type GetInscriptionGroupByPayload<T extends inscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], InscriptionGroupByOutputType[P]>
        }
      >
    >


  export type inscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    course_id?: boolean
    student?: boolean | studentDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inscription"]>

  export type inscriptionSelectScalar = {
    id?: boolean
    student_id?: boolean
    course_id?: boolean
  }

  export type inscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | studentDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
  }


  export type $inscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "inscription"
    objects: {
      student: Prisma.$studentPayload<ExtArgs>
      course: Prisma.$coursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      student_id: number
      course_id: number
    }, ExtArgs["result"]["inscription"]>
    composites: {}
  }


  type inscriptionGetPayload<S extends boolean | null | undefined | inscriptionDefaultArgs> = $Result.GetResult<Prisma.$inscriptionPayload, S>

  type inscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<inscriptionFindManyArgs, 'select' | 'include'> & {
      select?: InscriptionCountAggregateInputType | true
    }

  export interface inscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['inscription'], meta: { name: 'inscription' } }
    /**
     * Find zero or one Inscription that matches the filter.
     * @param {inscriptionFindUniqueArgs} args - Arguments to find a Inscription
     * @example
     * // Get one Inscription
     * const inscription = await prisma.inscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends inscriptionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, inscriptionFindUniqueArgs<ExtArgs>>
    ): Prisma__inscriptionClient<$Result.GetResult<Prisma.$inscriptionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Inscription that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {inscriptionFindUniqueOrThrowArgs} args - Arguments to find a Inscription
     * @example
     * // Get one Inscription
     * const inscription = await prisma.inscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends inscriptionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, inscriptionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__inscriptionClient<$Result.GetResult<Prisma.$inscriptionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Inscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inscriptionFindFirstArgs} args - Arguments to find a Inscription
     * @example
     * // Get one Inscription
     * const inscription = await prisma.inscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends inscriptionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, inscriptionFindFirstArgs<ExtArgs>>
    ): Prisma__inscriptionClient<$Result.GetResult<Prisma.$inscriptionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Inscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inscriptionFindFirstOrThrowArgs} args - Arguments to find a Inscription
     * @example
     * // Get one Inscription
     * const inscription = await prisma.inscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends inscriptionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, inscriptionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__inscriptionClient<$Result.GetResult<Prisma.$inscriptionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Inscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inscriptionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inscriptions
     * const inscriptions = await prisma.inscription.findMany()
     * 
     * // Get first 10 Inscriptions
     * const inscriptions = await prisma.inscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inscriptionWithIdOnly = await prisma.inscription.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends inscriptionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, inscriptionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inscriptionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Inscription.
     * @param {inscriptionCreateArgs} args - Arguments to create a Inscription.
     * @example
     * // Create one Inscription
     * const Inscription = await prisma.inscription.create({
     *   data: {
     *     // ... data to create a Inscription
     *   }
     * })
     * 
    **/
    create<T extends inscriptionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, inscriptionCreateArgs<ExtArgs>>
    ): Prisma__inscriptionClient<$Result.GetResult<Prisma.$inscriptionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Inscriptions.
     *     @param {inscriptionCreateManyArgs} args - Arguments to create many Inscriptions.
     *     @example
     *     // Create many Inscriptions
     *     const inscription = await prisma.inscription.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends inscriptionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, inscriptionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Inscription.
     * @param {inscriptionDeleteArgs} args - Arguments to delete one Inscription.
     * @example
     * // Delete one Inscription
     * const Inscription = await prisma.inscription.delete({
     *   where: {
     *     // ... filter to delete one Inscription
     *   }
     * })
     * 
    **/
    delete<T extends inscriptionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, inscriptionDeleteArgs<ExtArgs>>
    ): Prisma__inscriptionClient<$Result.GetResult<Prisma.$inscriptionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Inscription.
     * @param {inscriptionUpdateArgs} args - Arguments to update one Inscription.
     * @example
     * // Update one Inscription
     * const inscription = await prisma.inscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends inscriptionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, inscriptionUpdateArgs<ExtArgs>>
    ): Prisma__inscriptionClient<$Result.GetResult<Prisma.$inscriptionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Inscriptions.
     * @param {inscriptionDeleteManyArgs} args - Arguments to filter Inscriptions to delete.
     * @example
     * // Delete a few Inscriptions
     * const { count } = await prisma.inscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends inscriptionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, inscriptionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inscriptions
     * const inscription = await prisma.inscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends inscriptionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, inscriptionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Inscription.
     * @param {inscriptionUpsertArgs} args - Arguments to update or create a Inscription.
     * @example
     * // Update or create a Inscription
     * const inscription = await prisma.inscription.upsert({
     *   create: {
     *     // ... data to create a Inscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inscription we want to update
     *   }
     * })
    **/
    upsert<T extends inscriptionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, inscriptionUpsertArgs<ExtArgs>>
    ): Prisma__inscriptionClient<$Result.GetResult<Prisma.$inscriptionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Inscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inscriptionCountArgs} args - Arguments to filter Inscriptions to count.
     * @example
     * // Count the number of Inscriptions
     * const count = await prisma.inscription.count({
     *   where: {
     *     // ... the filter for the Inscriptions we want to count
     *   }
     * })
    **/
    count<T extends inscriptionCountArgs>(
      args?: Subset<T, inscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InscriptionAggregateArgs>(args: Subset<T, InscriptionAggregateArgs>): Prisma.PrismaPromise<GetInscriptionAggregateType<T>>

    /**
     * Group by Inscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inscriptionGroupByArgs} args - Group by arguments.
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
      T extends inscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: inscriptionGroupByArgs['orderBy'] }
        : { orderBy?: inscriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, inscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the inscription model
   */
  readonly fields: inscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for inscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__inscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    student<T extends studentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, studentDefaultArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    course<T extends courseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, courseDefaultArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the inscription model
   */ 
  interface inscriptionFieldRefs {
    readonly id: FieldRef<"inscription", 'Int'>
    readonly student_id: FieldRef<"inscription", 'Int'>
    readonly course_id: FieldRef<"inscription", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * inscription findUnique
   */
  export type inscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscription
     */
    select?: inscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inscriptionInclude<ExtArgs> | null
    /**
     * Filter, which inscription to fetch.
     */
    where: inscriptionWhereUniqueInput
  }


  /**
   * inscription findUniqueOrThrow
   */
  export type inscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscription
     */
    select?: inscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inscriptionInclude<ExtArgs> | null
    /**
     * Filter, which inscription to fetch.
     */
    where: inscriptionWhereUniqueInput
  }


  /**
   * inscription findFirst
   */
  export type inscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscription
     */
    select?: inscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inscriptionInclude<ExtArgs> | null
    /**
     * Filter, which inscription to fetch.
     */
    where?: inscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inscriptions to fetch.
     */
    orderBy?: inscriptionOrderByWithRelationInput | inscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inscriptions.
     */
    cursor?: inscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inscriptions.
     */
    distinct?: InscriptionScalarFieldEnum | InscriptionScalarFieldEnum[]
  }


  /**
   * inscription findFirstOrThrow
   */
  export type inscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscription
     */
    select?: inscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inscriptionInclude<ExtArgs> | null
    /**
     * Filter, which inscription to fetch.
     */
    where?: inscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inscriptions to fetch.
     */
    orderBy?: inscriptionOrderByWithRelationInput | inscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inscriptions.
     */
    cursor?: inscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inscriptions.
     */
    distinct?: InscriptionScalarFieldEnum | InscriptionScalarFieldEnum[]
  }


  /**
   * inscription findMany
   */
  export type inscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscription
     */
    select?: inscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inscriptionInclude<ExtArgs> | null
    /**
     * Filter, which inscriptions to fetch.
     */
    where?: inscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inscriptions to fetch.
     */
    orderBy?: inscriptionOrderByWithRelationInput | inscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing inscriptions.
     */
    cursor?: inscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inscriptions.
     */
    skip?: number
    distinct?: InscriptionScalarFieldEnum | InscriptionScalarFieldEnum[]
  }


  /**
   * inscription create
   */
  export type inscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscription
     */
    select?: inscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a inscription.
     */
    data: XOR<inscriptionCreateInput, inscriptionUncheckedCreateInput>
  }


  /**
   * inscription createMany
   */
  export type inscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many inscriptions.
     */
    data: inscriptionCreateManyInput | inscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * inscription update
   */
  export type inscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscription
     */
    select?: inscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a inscription.
     */
    data: XOR<inscriptionUpdateInput, inscriptionUncheckedUpdateInput>
    /**
     * Choose, which inscription to update.
     */
    where: inscriptionWhereUniqueInput
  }


  /**
   * inscription updateMany
   */
  export type inscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update inscriptions.
     */
    data: XOR<inscriptionUpdateManyMutationInput, inscriptionUncheckedUpdateManyInput>
    /**
     * Filter which inscriptions to update
     */
    where?: inscriptionWhereInput
  }


  /**
   * inscription upsert
   */
  export type inscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscription
     */
    select?: inscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the inscription to update in case it exists.
     */
    where: inscriptionWhereUniqueInput
    /**
     * In case the inscription found by the `where` argument doesn't exist, create a new inscription with this data.
     */
    create: XOR<inscriptionCreateInput, inscriptionUncheckedCreateInput>
    /**
     * In case the inscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<inscriptionUpdateInput, inscriptionUncheckedUpdateInput>
  }


  /**
   * inscription delete
   */
  export type inscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscription
     */
    select?: inscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inscriptionInclude<ExtArgs> | null
    /**
     * Filter which inscription to delete.
     */
    where: inscriptionWhereUniqueInput
  }


  /**
   * inscription deleteMany
   */
  export type inscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inscriptions to delete
     */
    where?: inscriptionWhereInput
  }


  /**
   * inscription without action
   */
  export type inscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscription
     */
    select?: inscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inscriptionInclude<ExtArgs> | null
  }



  /**
   * Model course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    id: number | null
    periods: number | null
  }

  export type CourseSumAggregateOutputType = {
    id: number | null
    periods: number | null
  }

  export type CourseMinAggregateOutputType = {
    id: number | null
    topic: string | null
    content: string | null
    start_at: Date | null
    end_at: Date | null
    modality: string | null
    objective: string | null
    periods: number | null
    qualification: string | null
    requirements: string | null
    type: string | null
    visible: boolean | null
    img_url: string | null
  }

  export type CourseMaxAggregateOutputType = {
    id: number | null
    topic: string | null
    content: string | null
    start_at: Date | null
    end_at: Date | null
    modality: string | null
    objective: string | null
    periods: number | null
    qualification: string | null
    requirements: string | null
    type: string | null
    visible: boolean | null
    img_url: string | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    topic: number
    content: number
    start_at: number
    end_at: number
    modality: number
    objective: number
    periods: number
    qualification: number
    requirements: number
    type: number
    visible: number
    img_url: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    id?: true
    periods?: true
  }

  export type CourseSumAggregateInputType = {
    id?: true
    periods?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    topic?: true
    content?: true
    start_at?: true
    end_at?: true
    modality?: true
    objective?: true
    periods?: true
    qualification?: true
    requirements?: true
    type?: true
    visible?: true
    img_url?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    topic?: true
    content?: true
    start_at?: true
    end_at?: true
    modality?: true
    objective?: true
    periods?: true
    qualification?: true
    requirements?: true
    type?: true
    visible?: true
    img_url?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    topic?: true
    content?: true
    start_at?: true
    end_at?: true
    modality?: true
    objective?: true
    periods?: true
    qualification?: true
    requirements?: true
    type?: true
    visible?: true
    img_url?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which course to aggregate.
     */
    where?: courseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: courseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type courseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: courseWhereInput
    orderBy?: courseOrderByWithAggregationInput | courseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: courseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: number
    topic: string
    content: string
    start_at: Date
    end_at: Date
    modality: string
    objective: string
    periods: number
    qualification: string
    requirements: string
    type: string
    visible: boolean
    img_url: string
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends courseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type courseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    topic?: boolean
    content?: boolean
    start_at?: boolean
    end_at?: boolean
    modality?: boolean
    objective?: boolean
    periods?: boolean
    qualification?: boolean
    requirements?: boolean
    type?: boolean
    visible?: boolean
    img_url?: boolean
    modules?: boolean | course$modulesArgs<ExtArgs>
    inscriptions?: boolean | course$inscriptionsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type courseSelectScalar = {
    id?: boolean
    topic?: boolean
    content?: boolean
    start_at?: boolean
    end_at?: boolean
    modality?: boolean
    objective?: boolean
    periods?: boolean
    qualification?: boolean
    requirements?: boolean
    type?: boolean
    visible?: boolean
    img_url?: boolean
  }

  export type courseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modules?: boolean | course$modulesArgs<ExtArgs>
    inscriptions?: boolean | course$inscriptionsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $coursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "course"
    objects: {
      modules: Prisma.$modulePayload<ExtArgs>[]
      inscriptions: Prisma.$inscriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      topic: string
      content: string
      start_at: Date
      end_at: Date
      modality: string
      objective: string
      periods: number
      qualification: string
      requirements: string
      type: string
      visible: boolean
      img_url: string
    }, ExtArgs["result"]["course"]>
    composites: {}
  }


  type courseGetPayload<S extends boolean | null | undefined | courseDefaultArgs> = $Result.GetResult<Prisma.$coursePayload, S>

  type courseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<courseFindManyArgs, 'select' | 'include'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface courseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['course'], meta: { name: 'course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {courseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends courseFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, courseFindUniqueArgs<ExtArgs>>
    ): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Course that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {courseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends courseFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, courseFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends courseFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, courseFindFirstArgs<ExtArgs>>
    ): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends courseFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, courseFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends courseFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, courseFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Course.
     * @param {courseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
    **/
    create<T extends courseCreateArgs<ExtArgs>>(
      args: SelectSubset<T, courseCreateArgs<ExtArgs>>
    ): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Courses.
     *     @param {courseCreateManyArgs} args - Arguments to create many Courses.
     *     @example
     *     // Create many Courses
     *     const course = await prisma.course.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends courseCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, courseCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Course.
     * @param {courseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
    **/
    delete<T extends courseDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, courseDeleteArgs<ExtArgs>>
    ): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Course.
     * @param {courseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends courseUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, courseUpdateArgs<ExtArgs>>
    ): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Courses.
     * @param {courseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends courseDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, courseDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends courseUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, courseUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Course.
     * @param {courseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
    **/
    upsert<T extends courseUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, courseUpsertArgs<ExtArgs>>
    ): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends courseCountArgs>(
      args?: Subset<T, courseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseGroupByArgs} args - Group by arguments.
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
      T extends courseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: courseGroupByArgs['orderBy'] }
        : { orderBy?: courseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, courseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the course model
   */
  readonly fields: courseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__courseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    modules<T extends course$modulesArgs<ExtArgs> = {}>(args?: Subset<T, course$modulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, 'findMany'> | Null>;

    inscriptions<T extends course$inscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, course$inscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inscriptionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the course model
   */ 
  interface courseFieldRefs {
    readonly id: FieldRef<"course", 'Int'>
    readonly topic: FieldRef<"course", 'String'>
    readonly content: FieldRef<"course", 'String'>
    readonly start_at: FieldRef<"course", 'DateTime'>
    readonly end_at: FieldRef<"course", 'DateTime'>
    readonly modality: FieldRef<"course", 'String'>
    readonly objective: FieldRef<"course", 'String'>
    readonly periods: FieldRef<"course", 'Int'>
    readonly qualification: FieldRef<"course", 'String'>
    readonly requirements: FieldRef<"course", 'String'>
    readonly type: FieldRef<"course", 'String'>
    readonly visible: FieldRef<"course", 'Boolean'>
    readonly img_url: FieldRef<"course", 'String'>
  }
    

  // Custom InputTypes

  /**
   * course findUnique
   */
  export type courseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter, which course to fetch.
     */
    where: courseWhereUniqueInput
  }


  /**
   * course findUniqueOrThrow
   */
  export type courseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter, which course to fetch.
     */
    where: courseWhereUniqueInput
  }


  /**
   * course findFirst
   */
  export type courseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter, which course to fetch.
     */
    where?: courseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for courses.
     */
    cursor?: courseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }


  /**
   * course findFirstOrThrow
   */
  export type courseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter, which course to fetch.
     */
    where?: courseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for courses.
     */
    cursor?: courseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }


  /**
   * course findMany
   */
  export type courseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter, which courses to fetch.
     */
    where?: courseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing courses.
     */
    cursor?: courseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }


  /**
   * course create
   */
  export type courseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * The data needed to create a course.
     */
    data: XOR<courseCreateInput, courseUncheckedCreateInput>
  }


  /**
   * course createMany
   */
  export type courseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many courses.
     */
    data: courseCreateManyInput | courseCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * course update
   */
  export type courseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * The data needed to update a course.
     */
    data: XOR<courseUpdateInput, courseUncheckedUpdateInput>
    /**
     * Choose, which course to update.
     */
    where: courseWhereUniqueInput
  }


  /**
   * course updateMany
   */
  export type courseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update courses.
     */
    data: XOR<courseUpdateManyMutationInput, courseUncheckedUpdateManyInput>
    /**
     * Filter which courses to update
     */
    where?: courseWhereInput
  }


  /**
   * course upsert
   */
  export type courseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * The filter to search for the course to update in case it exists.
     */
    where: courseWhereUniqueInput
    /**
     * In case the course found by the `where` argument doesn't exist, create a new course with this data.
     */
    create: XOR<courseCreateInput, courseUncheckedCreateInput>
    /**
     * In case the course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<courseUpdateInput, courseUncheckedUpdateInput>
  }


  /**
   * course delete
   */
  export type courseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter which course to delete.
     */
    where: courseWhereUniqueInput
  }


  /**
   * course deleteMany
   */
  export type courseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which courses to delete
     */
    where?: courseWhereInput
  }


  /**
   * course.modules
   */
  export type course$modulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: moduleInclude<ExtArgs> | null
    where?: moduleWhereInput
    orderBy?: moduleOrderByWithRelationInput | moduleOrderByWithRelationInput[]
    cursor?: moduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }


  /**
   * course.inscriptions
   */
  export type course$inscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscription
     */
    select?: inscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: inscriptionInclude<ExtArgs> | null
    where?: inscriptionWhereInput
    orderBy?: inscriptionOrderByWithRelationInput | inscriptionOrderByWithRelationInput[]
    cursor?: inscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InscriptionScalarFieldEnum | InscriptionScalarFieldEnum[]
  }


  /**
   * course without action
   */
  export type courseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: courseInclude<ExtArgs> | null
  }



  /**
   * Model module
   */

  export type AggregateModule = {
    _count: ModuleCountAggregateOutputType | null
    _avg: ModuleAvgAggregateOutputType | null
    _sum: ModuleSumAggregateOutputType | null
    _min: ModuleMinAggregateOutputType | null
    _max: ModuleMaxAggregateOutputType | null
  }

  export type ModuleAvgAggregateOutputType = {
    id: number | null
    hours: number | null
    teacher_id: number | null
    course_id: number | null
  }

  export type ModuleSumAggregateOutputType = {
    id: number | null
    hours: number | null
    teacher_id: number | null
    course_id: number | null
  }

  export type ModuleMinAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    hours: number | null
    img_url: string | null
    teacher_id: number | null
    course_id: number | null
  }

  export type ModuleMaxAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    hours: number | null
    img_url: string | null
    teacher_id: number | null
    course_id: number | null
  }

  export type ModuleCountAggregateOutputType = {
    id: number
    title: number
    content: number
    hours: number
    img_url: number
    teacher_id: number
    course_id: number
    _all: number
  }


  export type ModuleAvgAggregateInputType = {
    id?: true
    hours?: true
    teacher_id?: true
    course_id?: true
  }

  export type ModuleSumAggregateInputType = {
    id?: true
    hours?: true
    teacher_id?: true
    course_id?: true
  }

  export type ModuleMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    hours?: true
    img_url?: true
    teacher_id?: true
    course_id?: true
  }

  export type ModuleMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    hours?: true
    img_url?: true
    teacher_id?: true
    course_id?: true
  }

  export type ModuleCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    hours?: true
    img_url?: true
    teacher_id?: true
    course_id?: true
    _all?: true
  }

  export type ModuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which module to aggregate.
     */
    where?: moduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of modules to fetch.
     */
    orderBy?: moduleOrderByWithRelationInput | moduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: moduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned modules
    **/
    _count?: true | ModuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModuleMaxAggregateInputType
  }

  export type GetModuleAggregateType<T extends ModuleAggregateArgs> = {
        [P in keyof T & keyof AggregateModule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModule[P]>
      : GetScalarType<T[P], AggregateModule[P]>
  }




  export type moduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: moduleWhereInput
    orderBy?: moduleOrderByWithAggregationInput | moduleOrderByWithAggregationInput[]
    by: ModuleScalarFieldEnum[] | ModuleScalarFieldEnum
    having?: moduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModuleCountAggregateInputType | true
    _avg?: ModuleAvgAggregateInputType
    _sum?: ModuleSumAggregateInputType
    _min?: ModuleMinAggregateInputType
    _max?: ModuleMaxAggregateInputType
  }

  export type ModuleGroupByOutputType = {
    id: number
    title: string
    content: string
    hours: number
    img_url: string
    teacher_id: number
    course_id: number
    _count: ModuleCountAggregateOutputType | null
    _avg: ModuleAvgAggregateOutputType | null
    _sum: ModuleSumAggregateOutputType | null
    _min: ModuleMinAggregateOutputType | null
    _max: ModuleMaxAggregateOutputType | null
  }

  type GetModuleGroupByPayload<T extends moduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModuleGroupByOutputType[P]>
            : GetScalarType<T[P], ModuleGroupByOutputType[P]>
        }
      >
    >


  export type moduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    hours?: boolean
    img_url?: boolean
    teacher_id?: boolean
    course_id?: boolean
    sections?: boolean | module$sectionsArgs<ExtArgs>
    resources?: boolean | module$resourcesArgs<ExtArgs>
    asistances?: boolean | module$asistancesArgs<ExtArgs>
    teacher?: boolean | teacherDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
    _count?: boolean | ModuleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["module"]>

  export type moduleSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    hours?: boolean
    img_url?: boolean
    teacher_id?: boolean
    course_id?: boolean
  }

  export type moduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sections?: boolean | module$sectionsArgs<ExtArgs>
    resources?: boolean | module$resourcesArgs<ExtArgs>
    asistances?: boolean | module$asistancesArgs<ExtArgs>
    teacher?: boolean | teacherDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
    _count?: boolean | ModuleCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $modulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "module"
    objects: {
      sections: Prisma.$sectionPayload<ExtArgs>[]
      resources: Prisma.$module_resourcePayload<ExtArgs>[]
      asistances: Prisma.$asistancePayload<ExtArgs>[]
      teacher: Prisma.$teacherPayload<ExtArgs>
      course: Prisma.$coursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      content: string
      hours: number
      img_url: string
      teacher_id: number
      course_id: number
    }, ExtArgs["result"]["module"]>
    composites: {}
  }


  type moduleGetPayload<S extends boolean | null | undefined | moduleDefaultArgs> = $Result.GetResult<Prisma.$modulePayload, S>

  type moduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<moduleFindManyArgs, 'select' | 'include'> & {
      select?: ModuleCountAggregateInputType | true
    }

  export interface moduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['module'], meta: { name: 'module' } }
    /**
     * Find zero or one Module that matches the filter.
     * @param {moduleFindUniqueArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends moduleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, moduleFindUniqueArgs<ExtArgs>>
    ): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Module that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {moduleFindUniqueOrThrowArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends moduleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, moduleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Module that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moduleFindFirstArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends moduleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, moduleFindFirstArgs<ExtArgs>>
    ): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Module that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moduleFindFirstOrThrowArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends moduleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, moduleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Modules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moduleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Modules
     * const modules = await prisma.module.findMany()
     * 
     * // Get first 10 Modules
     * const modules = await prisma.module.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moduleWithIdOnly = await prisma.module.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends moduleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, moduleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Module.
     * @param {moduleCreateArgs} args - Arguments to create a Module.
     * @example
     * // Create one Module
     * const Module = await prisma.module.create({
     *   data: {
     *     // ... data to create a Module
     *   }
     * })
     * 
    **/
    create<T extends moduleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, moduleCreateArgs<ExtArgs>>
    ): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Modules.
     *     @param {moduleCreateManyArgs} args - Arguments to create many Modules.
     *     @example
     *     // Create many Modules
     *     const module = await prisma.module.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends moduleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, moduleCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Module.
     * @param {moduleDeleteArgs} args - Arguments to delete one Module.
     * @example
     * // Delete one Module
     * const Module = await prisma.module.delete({
     *   where: {
     *     // ... filter to delete one Module
     *   }
     * })
     * 
    **/
    delete<T extends moduleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, moduleDeleteArgs<ExtArgs>>
    ): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Module.
     * @param {moduleUpdateArgs} args - Arguments to update one Module.
     * @example
     * // Update one Module
     * const module = await prisma.module.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends moduleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, moduleUpdateArgs<ExtArgs>>
    ): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Modules.
     * @param {moduleDeleteManyArgs} args - Arguments to filter Modules to delete.
     * @example
     * // Delete a few Modules
     * const { count } = await prisma.module.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends moduleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, moduleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Modules
     * const module = await prisma.module.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends moduleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, moduleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Module.
     * @param {moduleUpsertArgs} args - Arguments to update or create a Module.
     * @example
     * // Update or create a Module
     * const module = await prisma.module.upsert({
     *   create: {
     *     // ... data to create a Module
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Module we want to update
     *   }
     * })
    **/
    upsert<T extends moduleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, moduleUpsertArgs<ExtArgs>>
    ): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moduleCountArgs} args - Arguments to filter Modules to count.
     * @example
     * // Count the number of Modules
     * const count = await prisma.module.count({
     *   where: {
     *     // ... the filter for the Modules we want to count
     *   }
     * })
    **/
    count<T extends moduleCountArgs>(
      args?: Subset<T, moduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Module.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModuleAggregateArgs>(args: Subset<T, ModuleAggregateArgs>): Prisma.PrismaPromise<GetModuleAggregateType<T>>

    /**
     * Group by Module.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moduleGroupByArgs} args - Group by arguments.
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
      T extends moduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: moduleGroupByArgs['orderBy'] }
        : { orderBy?: moduleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, moduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the module model
   */
  readonly fields: moduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for module.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__moduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    sections<T extends module$sectionsArgs<ExtArgs> = {}>(args?: Subset<T, module$sectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sectionPayload<ExtArgs>, T, 'findMany'> | Null>;

    resources<T extends module$resourcesArgs<ExtArgs> = {}>(args?: Subset<T, module$resourcesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$module_resourcePayload<ExtArgs>, T, 'findMany'> | Null>;

    asistances<T extends module$asistancesArgs<ExtArgs> = {}>(args?: Subset<T, module$asistancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$asistancePayload<ExtArgs>, T, 'findMany'> | Null>;

    teacher<T extends teacherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, teacherDefaultArgs<ExtArgs>>): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    course<T extends courseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, courseDefaultArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the module model
   */ 
  interface moduleFieldRefs {
    readonly id: FieldRef<"module", 'Int'>
    readonly title: FieldRef<"module", 'String'>
    readonly content: FieldRef<"module", 'String'>
    readonly hours: FieldRef<"module", 'Int'>
    readonly img_url: FieldRef<"module", 'String'>
    readonly teacher_id: FieldRef<"module", 'Int'>
    readonly course_id: FieldRef<"module", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * module findUnique
   */
  export type moduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: moduleInclude<ExtArgs> | null
    /**
     * Filter, which module to fetch.
     */
    where: moduleWhereUniqueInput
  }


  /**
   * module findUniqueOrThrow
   */
  export type moduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: moduleInclude<ExtArgs> | null
    /**
     * Filter, which module to fetch.
     */
    where: moduleWhereUniqueInput
  }


  /**
   * module findFirst
   */
  export type moduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: moduleInclude<ExtArgs> | null
    /**
     * Filter, which module to fetch.
     */
    where?: moduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of modules to fetch.
     */
    orderBy?: moduleOrderByWithRelationInput | moduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for modules.
     */
    cursor?: moduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of modules.
     */
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }


  /**
   * module findFirstOrThrow
   */
  export type moduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: moduleInclude<ExtArgs> | null
    /**
     * Filter, which module to fetch.
     */
    where?: moduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of modules to fetch.
     */
    orderBy?: moduleOrderByWithRelationInput | moduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for modules.
     */
    cursor?: moduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of modules.
     */
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }


  /**
   * module findMany
   */
  export type moduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: moduleInclude<ExtArgs> | null
    /**
     * Filter, which modules to fetch.
     */
    where?: moduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of modules to fetch.
     */
    orderBy?: moduleOrderByWithRelationInput | moduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing modules.
     */
    cursor?: moduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` modules.
     */
    skip?: number
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }


  /**
   * module create
   */
  export type moduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: moduleInclude<ExtArgs> | null
    /**
     * The data needed to create a module.
     */
    data: XOR<moduleCreateInput, moduleUncheckedCreateInput>
  }


  /**
   * module createMany
   */
  export type moduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many modules.
     */
    data: moduleCreateManyInput | moduleCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * module update
   */
  export type moduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: moduleInclude<ExtArgs> | null
    /**
     * The data needed to update a module.
     */
    data: XOR<moduleUpdateInput, moduleUncheckedUpdateInput>
    /**
     * Choose, which module to update.
     */
    where: moduleWhereUniqueInput
  }


  /**
   * module updateMany
   */
  export type moduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update modules.
     */
    data: XOR<moduleUpdateManyMutationInput, moduleUncheckedUpdateManyInput>
    /**
     * Filter which modules to update
     */
    where?: moduleWhereInput
  }


  /**
   * module upsert
   */
  export type moduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: moduleInclude<ExtArgs> | null
    /**
     * The filter to search for the module to update in case it exists.
     */
    where: moduleWhereUniqueInput
    /**
     * In case the module found by the `where` argument doesn't exist, create a new module with this data.
     */
    create: XOR<moduleCreateInput, moduleUncheckedCreateInput>
    /**
     * In case the module was found with the provided `where` argument, update it with this data.
     */
    update: XOR<moduleUpdateInput, moduleUncheckedUpdateInput>
  }


  /**
   * module delete
   */
  export type moduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: moduleInclude<ExtArgs> | null
    /**
     * Filter which module to delete.
     */
    where: moduleWhereUniqueInput
  }


  /**
   * module deleteMany
   */
  export type moduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which modules to delete
     */
    where?: moduleWhereInput
  }


  /**
   * module.sections
   */
  export type module$sectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the section
     */
    select?: sectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sectionInclude<ExtArgs> | null
    where?: sectionWhereInput
    orderBy?: sectionOrderByWithRelationInput | sectionOrderByWithRelationInput[]
    cursor?: sectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }


  /**
   * module.resources
   */
  export type module$resourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module_resource
     */
    select?: module_resourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: module_resourceInclude<ExtArgs> | null
    where?: module_resourceWhereInput
    orderBy?: module_resourceOrderByWithRelationInput | module_resourceOrderByWithRelationInput[]
    cursor?: module_resourceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Module_resourceScalarFieldEnum | Module_resourceScalarFieldEnum[]
  }


  /**
   * module.asistances
   */
  export type module$asistancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistance
     */
    select?: asistanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: asistanceInclude<ExtArgs> | null
    where?: asistanceWhereInput
    orderBy?: asistanceOrderByWithRelationInput | asistanceOrderByWithRelationInput[]
    cursor?: asistanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AsistanceScalarFieldEnum | AsistanceScalarFieldEnum[]
  }


  /**
   * module without action
   */
  export type moduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: moduleInclude<ExtArgs> | null
  }



  /**
   * Model module_resource
   */

  export type AggregateModule_resource = {
    _count: Module_resourceCountAggregateOutputType | null
    _avg: Module_resourceAvgAggregateOutputType | null
    _sum: Module_resourceSumAggregateOutputType | null
    _min: Module_resourceMinAggregateOutputType | null
    _max: Module_resourceMaxAggregateOutputType | null
  }

  export type Module_resourceAvgAggregateOutputType = {
    id: number | null
    module_id: number | null
  }

  export type Module_resourceSumAggregateOutputType = {
    id: number | null
    module_id: number | null
  }

  export type Module_resourceMinAggregateOutputType = {
    id: number | null
    url_resource: string | null
    module_id: number | null
    title: string | null
  }

  export type Module_resourceMaxAggregateOutputType = {
    id: number | null
    url_resource: string | null
    module_id: number | null
    title: string | null
  }

  export type Module_resourceCountAggregateOutputType = {
    id: number
    url_resource: number
    module_id: number
    title: number
    _all: number
  }


  export type Module_resourceAvgAggregateInputType = {
    id?: true
    module_id?: true
  }

  export type Module_resourceSumAggregateInputType = {
    id?: true
    module_id?: true
  }

  export type Module_resourceMinAggregateInputType = {
    id?: true
    url_resource?: true
    module_id?: true
    title?: true
  }

  export type Module_resourceMaxAggregateInputType = {
    id?: true
    url_resource?: true
    module_id?: true
    title?: true
  }

  export type Module_resourceCountAggregateInputType = {
    id?: true
    url_resource?: true
    module_id?: true
    title?: true
    _all?: true
  }

  export type Module_resourceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which module_resource to aggregate.
     */
    where?: module_resourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of module_resources to fetch.
     */
    orderBy?: module_resourceOrderByWithRelationInput | module_resourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: module_resourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` module_resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` module_resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned module_resources
    **/
    _count?: true | Module_resourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Module_resourceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Module_resourceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Module_resourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Module_resourceMaxAggregateInputType
  }

  export type GetModule_resourceAggregateType<T extends Module_resourceAggregateArgs> = {
        [P in keyof T & keyof AggregateModule_resource]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModule_resource[P]>
      : GetScalarType<T[P], AggregateModule_resource[P]>
  }




  export type module_resourceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: module_resourceWhereInput
    orderBy?: module_resourceOrderByWithAggregationInput | module_resourceOrderByWithAggregationInput[]
    by: Module_resourceScalarFieldEnum[] | Module_resourceScalarFieldEnum
    having?: module_resourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Module_resourceCountAggregateInputType | true
    _avg?: Module_resourceAvgAggregateInputType
    _sum?: Module_resourceSumAggregateInputType
    _min?: Module_resourceMinAggregateInputType
    _max?: Module_resourceMaxAggregateInputType
  }

  export type Module_resourceGroupByOutputType = {
    id: number
    url_resource: string
    module_id: number
    title: string
    _count: Module_resourceCountAggregateOutputType | null
    _avg: Module_resourceAvgAggregateOutputType | null
    _sum: Module_resourceSumAggregateOutputType | null
    _min: Module_resourceMinAggregateOutputType | null
    _max: Module_resourceMaxAggregateOutputType | null
  }

  type GetModule_resourceGroupByPayload<T extends module_resourceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Module_resourceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Module_resourceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Module_resourceGroupByOutputType[P]>
            : GetScalarType<T[P], Module_resourceGroupByOutputType[P]>
        }
      >
    >


  export type module_resourceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url_resource?: boolean
    module_id?: boolean
    title?: boolean
    module?: boolean | moduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["module_resource"]>

  export type module_resourceSelectScalar = {
    id?: boolean
    url_resource?: boolean
    module_id?: boolean
    title?: boolean
  }

  export type module_resourceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    module?: boolean | moduleDefaultArgs<ExtArgs>
  }


  export type $module_resourcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "module_resource"
    objects: {
      module: Prisma.$modulePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url_resource: string
      module_id: number
      title: string
    }, ExtArgs["result"]["module_resource"]>
    composites: {}
  }


  type module_resourceGetPayload<S extends boolean | null | undefined | module_resourceDefaultArgs> = $Result.GetResult<Prisma.$module_resourcePayload, S>

  type module_resourceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<module_resourceFindManyArgs, 'select' | 'include'> & {
      select?: Module_resourceCountAggregateInputType | true
    }

  export interface module_resourceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['module_resource'], meta: { name: 'module_resource' } }
    /**
     * Find zero or one Module_resource that matches the filter.
     * @param {module_resourceFindUniqueArgs} args - Arguments to find a Module_resource
     * @example
     * // Get one Module_resource
     * const module_resource = await prisma.module_resource.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends module_resourceFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, module_resourceFindUniqueArgs<ExtArgs>>
    ): Prisma__module_resourceClient<$Result.GetResult<Prisma.$module_resourcePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Module_resource that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {module_resourceFindUniqueOrThrowArgs} args - Arguments to find a Module_resource
     * @example
     * // Get one Module_resource
     * const module_resource = await prisma.module_resource.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends module_resourceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, module_resourceFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__module_resourceClient<$Result.GetResult<Prisma.$module_resourcePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Module_resource that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {module_resourceFindFirstArgs} args - Arguments to find a Module_resource
     * @example
     * // Get one Module_resource
     * const module_resource = await prisma.module_resource.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends module_resourceFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, module_resourceFindFirstArgs<ExtArgs>>
    ): Prisma__module_resourceClient<$Result.GetResult<Prisma.$module_resourcePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Module_resource that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {module_resourceFindFirstOrThrowArgs} args - Arguments to find a Module_resource
     * @example
     * // Get one Module_resource
     * const module_resource = await prisma.module_resource.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends module_resourceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, module_resourceFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__module_resourceClient<$Result.GetResult<Prisma.$module_resourcePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Module_resources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {module_resourceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Module_resources
     * const module_resources = await prisma.module_resource.findMany()
     * 
     * // Get first 10 Module_resources
     * const module_resources = await prisma.module_resource.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const module_resourceWithIdOnly = await prisma.module_resource.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends module_resourceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, module_resourceFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$module_resourcePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Module_resource.
     * @param {module_resourceCreateArgs} args - Arguments to create a Module_resource.
     * @example
     * // Create one Module_resource
     * const Module_resource = await prisma.module_resource.create({
     *   data: {
     *     // ... data to create a Module_resource
     *   }
     * })
     * 
    **/
    create<T extends module_resourceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, module_resourceCreateArgs<ExtArgs>>
    ): Prisma__module_resourceClient<$Result.GetResult<Prisma.$module_resourcePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Module_resources.
     *     @param {module_resourceCreateManyArgs} args - Arguments to create many Module_resources.
     *     @example
     *     // Create many Module_resources
     *     const module_resource = await prisma.module_resource.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends module_resourceCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, module_resourceCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Module_resource.
     * @param {module_resourceDeleteArgs} args - Arguments to delete one Module_resource.
     * @example
     * // Delete one Module_resource
     * const Module_resource = await prisma.module_resource.delete({
     *   where: {
     *     // ... filter to delete one Module_resource
     *   }
     * })
     * 
    **/
    delete<T extends module_resourceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, module_resourceDeleteArgs<ExtArgs>>
    ): Prisma__module_resourceClient<$Result.GetResult<Prisma.$module_resourcePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Module_resource.
     * @param {module_resourceUpdateArgs} args - Arguments to update one Module_resource.
     * @example
     * // Update one Module_resource
     * const module_resource = await prisma.module_resource.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends module_resourceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, module_resourceUpdateArgs<ExtArgs>>
    ): Prisma__module_resourceClient<$Result.GetResult<Prisma.$module_resourcePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Module_resources.
     * @param {module_resourceDeleteManyArgs} args - Arguments to filter Module_resources to delete.
     * @example
     * // Delete a few Module_resources
     * const { count } = await prisma.module_resource.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends module_resourceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, module_resourceDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Module_resources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {module_resourceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Module_resources
     * const module_resource = await prisma.module_resource.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends module_resourceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, module_resourceUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Module_resource.
     * @param {module_resourceUpsertArgs} args - Arguments to update or create a Module_resource.
     * @example
     * // Update or create a Module_resource
     * const module_resource = await prisma.module_resource.upsert({
     *   create: {
     *     // ... data to create a Module_resource
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Module_resource we want to update
     *   }
     * })
    **/
    upsert<T extends module_resourceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, module_resourceUpsertArgs<ExtArgs>>
    ): Prisma__module_resourceClient<$Result.GetResult<Prisma.$module_resourcePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Module_resources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {module_resourceCountArgs} args - Arguments to filter Module_resources to count.
     * @example
     * // Count the number of Module_resources
     * const count = await prisma.module_resource.count({
     *   where: {
     *     // ... the filter for the Module_resources we want to count
     *   }
     * })
    **/
    count<T extends module_resourceCountArgs>(
      args?: Subset<T, module_resourceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Module_resourceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Module_resource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Module_resourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Module_resourceAggregateArgs>(args: Subset<T, Module_resourceAggregateArgs>): Prisma.PrismaPromise<GetModule_resourceAggregateType<T>>

    /**
     * Group by Module_resource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {module_resourceGroupByArgs} args - Group by arguments.
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
      T extends module_resourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: module_resourceGroupByArgs['orderBy'] }
        : { orderBy?: module_resourceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, module_resourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModule_resourceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the module_resource model
   */
  readonly fields: module_resourceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for module_resource.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__module_resourceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    module<T extends moduleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, moduleDefaultArgs<ExtArgs>>): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the module_resource model
   */ 
  interface module_resourceFieldRefs {
    readonly id: FieldRef<"module_resource", 'Int'>
    readonly url_resource: FieldRef<"module_resource", 'String'>
    readonly module_id: FieldRef<"module_resource", 'Int'>
    readonly title: FieldRef<"module_resource", 'String'>
  }
    

  // Custom InputTypes

  /**
   * module_resource findUnique
   */
  export type module_resourceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module_resource
     */
    select?: module_resourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: module_resourceInclude<ExtArgs> | null
    /**
     * Filter, which module_resource to fetch.
     */
    where: module_resourceWhereUniqueInput
  }


  /**
   * module_resource findUniqueOrThrow
   */
  export type module_resourceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module_resource
     */
    select?: module_resourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: module_resourceInclude<ExtArgs> | null
    /**
     * Filter, which module_resource to fetch.
     */
    where: module_resourceWhereUniqueInput
  }


  /**
   * module_resource findFirst
   */
  export type module_resourceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module_resource
     */
    select?: module_resourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: module_resourceInclude<ExtArgs> | null
    /**
     * Filter, which module_resource to fetch.
     */
    where?: module_resourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of module_resources to fetch.
     */
    orderBy?: module_resourceOrderByWithRelationInput | module_resourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for module_resources.
     */
    cursor?: module_resourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` module_resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` module_resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of module_resources.
     */
    distinct?: Module_resourceScalarFieldEnum | Module_resourceScalarFieldEnum[]
  }


  /**
   * module_resource findFirstOrThrow
   */
  export type module_resourceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module_resource
     */
    select?: module_resourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: module_resourceInclude<ExtArgs> | null
    /**
     * Filter, which module_resource to fetch.
     */
    where?: module_resourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of module_resources to fetch.
     */
    orderBy?: module_resourceOrderByWithRelationInput | module_resourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for module_resources.
     */
    cursor?: module_resourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` module_resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` module_resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of module_resources.
     */
    distinct?: Module_resourceScalarFieldEnum | Module_resourceScalarFieldEnum[]
  }


  /**
   * module_resource findMany
   */
  export type module_resourceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module_resource
     */
    select?: module_resourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: module_resourceInclude<ExtArgs> | null
    /**
     * Filter, which module_resources to fetch.
     */
    where?: module_resourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of module_resources to fetch.
     */
    orderBy?: module_resourceOrderByWithRelationInput | module_resourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing module_resources.
     */
    cursor?: module_resourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` module_resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` module_resources.
     */
    skip?: number
    distinct?: Module_resourceScalarFieldEnum | Module_resourceScalarFieldEnum[]
  }


  /**
   * module_resource create
   */
  export type module_resourceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module_resource
     */
    select?: module_resourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: module_resourceInclude<ExtArgs> | null
    /**
     * The data needed to create a module_resource.
     */
    data: XOR<module_resourceCreateInput, module_resourceUncheckedCreateInput>
  }


  /**
   * module_resource createMany
   */
  export type module_resourceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many module_resources.
     */
    data: module_resourceCreateManyInput | module_resourceCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * module_resource update
   */
  export type module_resourceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module_resource
     */
    select?: module_resourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: module_resourceInclude<ExtArgs> | null
    /**
     * The data needed to update a module_resource.
     */
    data: XOR<module_resourceUpdateInput, module_resourceUncheckedUpdateInput>
    /**
     * Choose, which module_resource to update.
     */
    where: module_resourceWhereUniqueInput
  }


  /**
   * module_resource updateMany
   */
  export type module_resourceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update module_resources.
     */
    data: XOR<module_resourceUpdateManyMutationInput, module_resourceUncheckedUpdateManyInput>
    /**
     * Filter which module_resources to update
     */
    where?: module_resourceWhereInput
  }


  /**
   * module_resource upsert
   */
  export type module_resourceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module_resource
     */
    select?: module_resourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: module_resourceInclude<ExtArgs> | null
    /**
     * The filter to search for the module_resource to update in case it exists.
     */
    where: module_resourceWhereUniqueInput
    /**
     * In case the module_resource found by the `where` argument doesn't exist, create a new module_resource with this data.
     */
    create: XOR<module_resourceCreateInput, module_resourceUncheckedCreateInput>
    /**
     * In case the module_resource was found with the provided `where` argument, update it with this data.
     */
    update: XOR<module_resourceUpdateInput, module_resourceUncheckedUpdateInput>
  }


  /**
   * module_resource delete
   */
  export type module_resourceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module_resource
     */
    select?: module_resourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: module_resourceInclude<ExtArgs> | null
    /**
     * Filter which module_resource to delete.
     */
    where: module_resourceWhereUniqueInput
  }


  /**
   * module_resource deleteMany
   */
  export type module_resourceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which module_resources to delete
     */
    where?: module_resourceWhereInput
  }


  /**
   * module_resource without action
   */
  export type module_resourceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module_resource
     */
    select?: module_resourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: module_resourceInclude<ExtArgs> | null
  }



  /**
   * Model section
   */

  export type AggregateSection = {
    _count: SectionCountAggregateOutputType | null
    _avg: SectionAvgAggregateOutputType | null
    _sum: SectionSumAggregateOutputType | null
    _min: SectionMinAggregateOutputType | null
    _max: SectionMaxAggregateOutputType | null
  }

  export type SectionAvgAggregateOutputType = {
    id: number | null
    module_id: number | null
  }

  export type SectionSumAggregateOutputType = {
    id: number | null
    module_id: number | null
  }

  export type SectionMinAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    module_id: number | null
  }

  export type SectionMaxAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    module_id: number | null
  }

  export type SectionCountAggregateOutputType = {
    id: number
    title: number
    content: number
    module_id: number
    _all: number
  }


  export type SectionAvgAggregateInputType = {
    id?: true
    module_id?: true
  }

  export type SectionSumAggregateInputType = {
    id?: true
    module_id?: true
  }

  export type SectionMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    module_id?: true
  }

  export type SectionMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    module_id?: true
  }

  export type SectionCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    module_id?: true
    _all?: true
  }

  export type SectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which section to aggregate.
     */
    where?: sectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sections to fetch.
     */
    orderBy?: sectionOrderByWithRelationInput | sectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sections
    **/
    _count?: true | SectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SectionMaxAggregateInputType
  }

  export type GetSectionAggregateType<T extends SectionAggregateArgs> = {
        [P in keyof T & keyof AggregateSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSection[P]>
      : GetScalarType<T[P], AggregateSection[P]>
  }




  export type sectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sectionWhereInput
    orderBy?: sectionOrderByWithAggregationInput | sectionOrderByWithAggregationInput[]
    by: SectionScalarFieldEnum[] | SectionScalarFieldEnum
    having?: sectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SectionCountAggregateInputType | true
    _avg?: SectionAvgAggregateInputType
    _sum?: SectionSumAggregateInputType
    _min?: SectionMinAggregateInputType
    _max?: SectionMaxAggregateInputType
  }

  export type SectionGroupByOutputType = {
    id: number
    title: string
    content: string
    module_id: number
    _count: SectionCountAggregateOutputType | null
    _avg: SectionAvgAggregateOutputType | null
    _sum: SectionSumAggregateOutputType | null
    _min: SectionMinAggregateOutputType | null
    _max: SectionMaxAggregateOutputType | null
  }

  type GetSectionGroupByPayload<T extends sectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SectionGroupByOutputType[P]>
            : GetScalarType<T[P], SectionGroupByOutputType[P]>
        }
      >
    >


  export type sectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    module_id?: boolean
    activities?: boolean | section$activitiesArgs<ExtArgs>
    resources?: boolean | section$resourcesArgs<ExtArgs>
    module?: boolean | moduleDefaultArgs<ExtArgs>
    _count?: boolean | SectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["section"]>

  export type sectionSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    module_id?: boolean
  }

  export type sectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activities?: boolean | section$activitiesArgs<ExtArgs>
    resources?: boolean | section$resourcesArgs<ExtArgs>
    module?: boolean | moduleDefaultArgs<ExtArgs>
    _count?: boolean | SectionCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $sectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "section"
    objects: {
      activities: Prisma.$activityPayload<ExtArgs>[]
      resources: Prisma.$section_resourcePayload<ExtArgs>[]
      module: Prisma.$modulePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      content: string
      module_id: number
    }, ExtArgs["result"]["section"]>
    composites: {}
  }


  type sectionGetPayload<S extends boolean | null | undefined | sectionDefaultArgs> = $Result.GetResult<Prisma.$sectionPayload, S>

  type sectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<sectionFindManyArgs, 'select' | 'include'> & {
      select?: SectionCountAggregateInputType | true
    }

  export interface sectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['section'], meta: { name: 'section' } }
    /**
     * Find zero or one Section that matches the filter.
     * @param {sectionFindUniqueArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends sectionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, sectionFindUniqueArgs<ExtArgs>>
    ): Prisma__sectionClient<$Result.GetResult<Prisma.$sectionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Section that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {sectionFindUniqueOrThrowArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends sectionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, sectionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__sectionClient<$Result.GetResult<Prisma.$sectionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Section that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sectionFindFirstArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends sectionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, sectionFindFirstArgs<ExtArgs>>
    ): Prisma__sectionClient<$Result.GetResult<Prisma.$sectionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Section that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sectionFindFirstOrThrowArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends sectionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, sectionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__sectionClient<$Result.GetResult<Prisma.$sectionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Sections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sectionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sections
     * const sections = await prisma.section.findMany()
     * 
     * // Get first 10 Sections
     * const sections = await prisma.section.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sectionWithIdOnly = await prisma.section.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends sectionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, sectionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sectionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Section.
     * @param {sectionCreateArgs} args - Arguments to create a Section.
     * @example
     * // Create one Section
     * const Section = await prisma.section.create({
     *   data: {
     *     // ... data to create a Section
     *   }
     * })
     * 
    **/
    create<T extends sectionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, sectionCreateArgs<ExtArgs>>
    ): Prisma__sectionClient<$Result.GetResult<Prisma.$sectionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Sections.
     *     @param {sectionCreateManyArgs} args - Arguments to create many Sections.
     *     @example
     *     // Create many Sections
     *     const section = await prisma.section.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends sectionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, sectionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Section.
     * @param {sectionDeleteArgs} args - Arguments to delete one Section.
     * @example
     * // Delete one Section
     * const Section = await prisma.section.delete({
     *   where: {
     *     // ... filter to delete one Section
     *   }
     * })
     * 
    **/
    delete<T extends sectionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, sectionDeleteArgs<ExtArgs>>
    ): Prisma__sectionClient<$Result.GetResult<Prisma.$sectionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Section.
     * @param {sectionUpdateArgs} args - Arguments to update one Section.
     * @example
     * // Update one Section
     * const section = await prisma.section.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends sectionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, sectionUpdateArgs<ExtArgs>>
    ): Prisma__sectionClient<$Result.GetResult<Prisma.$sectionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Sections.
     * @param {sectionDeleteManyArgs} args - Arguments to filter Sections to delete.
     * @example
     * // Delete a few Sections
     * const { count } = await prisma.section.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends sectionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, sectionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sections
     * const section = await prisma.section.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends sectionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, sectionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Section.
     * @param {sectionUpsertArgs} args - Arguments to update or create a Section.
     * @example
     * // Update or create a Section
     * const section = await prisma.section.upsert({
     *   create: {
     *     // ... data to create a Section
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Section we want to update
     *   }
     * })
    **/
    upsert<T extends sectionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, sectionUpsertArgs<ExtArgs>>
    ): Prisma__sectionClient<$Result.GetResult<Prisma.$sectionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sectionCountArgs} args - Arguments to filter Sections to count.
     * @example
     * // Count the number of Sections
     * const count = await prisma.section.count({
     *   where: {
     *     // ... the filter for the Sections we want to count
     *   }
     * })
    **/
    count<T extends sectionCountArgs>(
      args?: Subset<T, sectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Section.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SectionAggregateArgs>(args: Subset<T, SectionAggregateArgs>): Prisma.PrismaPromise<GetSectionAggregateType<T>>

    /**
     * Group by Section.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sectionGroupByArgs} args - Group by arguments.
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
      T extends sectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sectionGroupByArgs['orderBy'] }
        : { orderBy?: sectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, sectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the section model
   */
  readonly fields: sectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for section.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    activities<T extends section$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, section$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$activityPayload<ExtArgs>, T, 'findMany'> | Null>;

    resources<T extends section$resourcesArgs<ExtArgs> = {}>(args?: Subset<T, section$resourcesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$section_resourcePayload<ExtArgs>, T, 'findMany'> | Null>;

    module<T extends moduleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, moduleDefaultArgs<ExtArgs>>): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the section model
   */ 
  interface sectionFieldRefs {
    readonly id: FieldRef<"section", 'Int'>
    readonly title: FieldRef<"section", 'String'>
    readonly content: FieldRef<"section", 'String'>
    readonly module_id: FieldRef<"section", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * section findUnique
   */
  export type sectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the section
     */
    select?: sectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sectionInclude<ExtArgs> | null
    /**
     * Filter, which section to fetch.
     */
    where: sectionWhereUniqueInput
  }


  /**
   * section findUniqueOrThrow
   */
  export type sectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the section
     */
    select?: sectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sectionInclude<ExtArgs> | null
    /**
     * Filter, which section to fetch.
     */
    where: sectionWhereUniqueInput
  }


  /**
   * section findFirst
   */
  export type sectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the section
     */
    select?: sectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sectionInclude<ExtArgs> | null
    /**
     * Filter, which section to fetch.
     */
    where?: sectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sections to fetch.
     */
    orderBy?: sectionOrderByWithRelationInput | sectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sections.
     */
    cursor?: sectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sections.
     */
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }


  /**
   * section findFirstOrThrow
   */
  export type sectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the section
     */
    select?: sectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sectionInclude<ExtArgs> | null
    /**
     * Filter, which section to fetch.
     */
    where?: sectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sections to fetch.
     */
    orderBy?: sectionOrderByWithRelationInput | sectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sections.
     */
    cursor?: sectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sections.
     */
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }


  /**
   * section findMany
   */
  export type sectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the section
     */
    select?: sectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sectionInclude<ExtArgs> | null
    /**
     * Filter, which sections to fetch.
     */
    where?: sectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sections to fetch.
     */
    orderBy?: sectionOrderByWithRelationInput | sectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sections.
     */
    cursor?: sectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sections.
     */
    skip?: number
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }


  /**
   * section create
   */
  export type sectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the section
     */
    select?: sectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sectionInclude<ExtArgs> | null
    /**
     * The data needed to create a section.
     */
    data: XOR<sectionCreateInput, sectionUncheckedCreateInput>
  }


  /**
   * section createMany
   */
  export type sectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sections.
     */
    data: sectionCreateManyInput | sectionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * section update
   */
  export type sectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the section
     */
    select?: sectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sectionInclude<ExtArgs> | null
    /**
     * The data needed to update a section.
     */
    data: XOR<sectionUpdateInput, sectionUncheckedUpdateInput>
    /**
     * Choose, which section to update.
     */
    where: sectionWhereUniqueInput
  }


  /**
   * section updateMany
   */
  export type sectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sections.
     */
    data: XOR<sectionUpdateManyMutationInput, sectionUncheckedUpdateManyInput>
    /**
     * Filter which sections to update
     */
    where?: sectionWhereInput
  }


  /**
   * section upsert
   */
  export type sectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the section
     */
    select?: sectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sectionInclude<ExtArgs> | null
    /**
     * The filter to search for the section to update in case it exists.
     */
    where: sectionWhereUniqueInput
    /**
     * In case the section found by the `where` argument doesn't exist, create a new section with this data.
     */
    create: XOR<sectionCreateInput, sectionUncheckedCreateInput>
    /**
     * In case the section was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sectionUpdateInput, sectionUncheckedUpdateInput>
  }


  /**
   * section delete
   */
  export type sectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the section
     */
    select?: sectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sectionInclude<ExtArgs> | null
    /**
     * Filter which section to delete.
     */
    where: sectionWhereUniqueInput
  }


  /**
   * section deleteMany
   */
  export type sectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sections to delete
     */
    where?: sectionWhereInput
  }


  /**
   * section.activities
   */
  export type section$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity
     */
    select?: activitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: activityInclude<ExtArgs> | null
    where?: activityWhereInput
    orderBy?: activityOrderByWithRelationInput | activityOrderByWithRelationInput[]
    cursor?: activityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }


  /**
   * section.resources
   */
  export type section$resourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the section_resource
     */
    select?: section_resourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: section_resourceInclude<ExtArgs> | null
    where?: section_resourceWhereInput
    orderBy?: section_resourceOrderByWithRelationInput | section_resourceOrderByWithRelationInput[]
    cursor?: section_resourceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Section_resourceScalarFieldEnum | Section_resourceScalarFieldEnum[]
  }


  /**
   * section without action
   */
  export type sectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the section
     */
    select?: sectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sectionInclude<ExtArgs> | null
  }



  /**
   * Model section_resource
   */

  export type AggregateSection_resource = {
    _count: Section_resourceCountAggregateOutputType | null
    _avg: Section_resourceAvgAggregateOutputType | null
    _sum: Section_resourceSumAggregateOutputType | null
    _min: Section_resourceMinAggregateOutputType | null
    _max: Section_resourceMaxAggregateOutputType | null
  }

  export type Section_resourceAvgAggregateOutputType = {
    id: number | null
    section_id: number | null
  }

  export type Section_resourceSumAggregateOutputType = {
    id: number | null
    section_id: number | null
  }

  export type Section_resourceMinAggregateOutputType = {
    id: number | null
    url_resource: string | null
    section_id: number | null
    title: string | null
  }

  export type Section_resourceMaxAggregateOutputType = {
    id: number | null
    url_resource: string | null
    section_id: number | null
    title: string | null
  }

  export type Section_resourceCountAggregateOutputType = {
    id: number
    url_resource: number
    section_id: number
    title: number
    _all: number
  }


  export type Section_resourceAvgAggregateInputType = {
    id?: true
    section_id?: true
  }

  export type Section_resourceSumAggregateInputType = {
    id?: true
    section_id?: true
  }

  export type Section_resourceMinAggregateInputType = {
    id?: true
    url_resource?: true
    section_id?: true
    title?: true
  }

  export type Section_resourceMaxAggregateInputType = {
    id?: true
    url_resource?: true
    section_id?: true
    title?: true
  }

  export type Section_resourceCountAggregateInputType = {
    id?: true
    url_resource?: true
    section_id?: true
    title?: true
    _all?: true
  }

  export type Section_resourceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which section_resource to aggregate.
     */
    where?: section_resourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of section_resources to fetch.
     */
    orderBy?: section_resourceOrderByWithRelationInput | section_resourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: section_resourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` section_resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` section_resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned section_resources
    **/
    _count?: true | Section_resourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Section_resourceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Section_resourceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Section_resourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Section_resourceMaxAggregateInputType
  }

  export type GetSection_resourceAggregateType<T extends Section_resourceAggregateArgs> = {
        [P in keyof T & keyof AggregateSection_resource]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSection_resource[P]>
      : GetScalarType<T[P], AggregateSection_resource[P]>
  }




  export type section_resourceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: section_resourceWhereInput
    orderBy?: section_resourceOrderByWithAggregationInput | section_resourceOrderByWithAggregationInput[]
    by: Section_resourceScalarFieldEnum[] | Section_resourceScalarFieldEnum
    having?: section_resourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Section_resourceCountAggregateInputType | true
    _avg?: Section_resourceAvgAggregateInputType
    _sum?: Section_resourceSumAggregateInputType
    _min?: Section_resourceMinAggregateInputType
    _max?: Section_resourceMaxAggregateInputType
  }

  export type Section_resourceGroupByOutputType = {
    id: number
    url_resource: string
    section_id: number
    title: string
    _count: Section_resourceCountAggregateOutputType | null
    _avg: Section_resourceAvgAggregateOutputType | null
    _sum: Section_resourceSumAggregateOutputType | null
    _min: Section_resourceMinAggregateOutputType | null
    _max: Section_resourceMaxAggregateOutputType | null
  }

  type GetSection_resourceGroupByPayload<T extends section_resourceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Section_resourceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Section_resourceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Section_resourceGroupByOutputType[P]>
            : GetScalarType<T[P], Section_resourceGroupByOutputType[P]>
        }
      >
    >


  export type section_resourceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url_resource?: boolean
    section_id?: boolean
    title?: boolean
    section?: boolean | sectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["section_resource"]>

  export type section_resourceSelectScalar = {
    id?: boolean
    url_resource?: boolean
    section_id?: boolean
    title?: boolean
  }

  export type section_resourceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | sectionDefaultArgs<ExtArgs>
  }


  export type $section_resourcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "section_resource"
    objects: {
      section: Prisma.$sectionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url_resource: string
      section_id: number
      title: string
    }, ExtArgs["result"]["section_resource"]>
    composites: {}
  }


  type section_resourceGetPayload<S extends boolean | null | undefined | section_resourceDefaultArgs> = $Result.GetResult<Prisma.$section_resourcePayload, S>

  type section_resourceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<section_resourceFindManyArgs, 'select' | 'include'> & {
      select?: Section_resourceCountAggregateInputType | true
    }

  export interface section_resourceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['section_resource'], meta: { name: 'section_resource' } }
    /**
     * Find zero or one Section_resource that matches the filter.
     * @param {section_resourceFindUniqueArgs} args - Arguments to find a Section_resource
     * @example
     * // Get one Section_resource
     * const section_resource = await prisma.section_resource.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends section_resourceFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, section_resourceFindUniqueArgs<ExtArgs>>
    ): Prisma__section_resourceClient<$Result.GetResult<Prisma.$section_resourcePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Section_resource that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {section_resourceFindUniqueOrThrowArgs} args - Arguments to find a Section_resource
     * @example
     * // Get one Section_resource
     * const section_resource = await prisma.section_resource.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends section_resourceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, section_resourceFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__section_resourceClient<$Result.GetResult<Prisma.$section_resourcePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Section_resource that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {section_resourceFindFirstArgs} args - Arguments to find a Section_resource
     * @example
     * // Get one Section_resource
     * const section_resource = await prisma.section_resource.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends section_resourceFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, section_resourceFindFirstArgs<ExtArgs>>
    ): Prisma__section_resourceClient<$Result.GetResult<Prisma.$section_resourcePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Section_resource that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {section_resourceFindFirstOrThrowArgs} args - Arguments to find a Section_resource
     * @example
     * // Get one Section_resource
     * const section_resource = await prisma.section_resource.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends section_resourceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, section_resourceFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__section_resourceClient<$Result.GetResult<Prisma.$section_resourcePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Section_resources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {section_resourceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Section_resources
     * const section_resources = await prisma.section_resource.findMany()
     * 
     * // Get first 10 Section_resources
     * const section_resources = await prisma.section_resource.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const section_resourceWithIdOnly = await prisma.section_resource.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends section_resourceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, section_resourceFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$section_resourcePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Section_resource.
     * @param {section_resourceCreateArgs} args - Arguments to create a Section_resource.
     * @example
     * // Create one Section_resource
     * const Section_resource = await prisma.section_resource.create({
     *   data: {
     *     // ... data to create a Section_resource
     *   }
     * })
     * 
    **/
    create<T extends section_resourceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, section_resourceCreateArgs<ExtArgs>>
    ): Prisma__section_resourceClient<$Result.GetResult<Prisma.$section_resourcePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Section_resources.
     *     @param {section_resourceCreateManyArgs} args - Arguments to create many Section_resources.
     *     @example
     *     // Create many Section_resources
     *     const section_resource = await prisma.section_resource.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends section_resourceCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, section_resourceCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Section_resource.
     * @param {section_resourceDeleteArgs} args - Arguments to delete one Section_resource.
     * @example
     * // Delete one Section_resource
     * const Section_resource = await prisma.section_resource.delete({
     *   where: {
     *     // ... filter to delete one Section_resource
     *   }
     * })
     * 
    **/
    delete<T extends section_resourceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, section_resourceDeleteArgs<ExtArgs>>
    ): Prisma__section_resourceClient<$Result.GetResult<Prisma.$section_resourcePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Section_resource.
     * @param {section_resourceUpdateArgs} args - Arguments to update one Section_resource.
     * @example
     * // Update one Section_resource
     * const section_resource = await prisma.section_resource.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends section_resourceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, section_resourceUpdateArgs<ExtArgs>>
    ): Prisma__section_resourceClient<$Result.GetResult<Prisma.$section_resourcePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Section_resources.
     * @param {section_resourceDeleteManyArgs} args - Arguments to filter Section_resources to delete.
     * @example
     * // Delete a few Section_resources
     * const { count } = await prisma.section_resource.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends section_resourceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, section_resourceDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Section_resources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {section_resourceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Section_resources
     * const section_resource = await prisma.section_resource.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends section_resourceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, section_resourceUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Section_resource.
     * @param {section_resourceUpsertArgs} args - Arguments to update or create a Section_resource.
     * @example
     * // Update or create a Section_resource
     * const section_resource = await prisma.section_resource.upsert({
     *   create: {
     *     // ... data to create a Section_resource
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Section_resource we want to update
     *   }
     * })
    **/
    upsert<T extends section_resourceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, section_resourceUpsertArgs<ExtArgs>>
    ): Prisma__section_resourceClient<$Result.GetResult<Prisma.$section_resourcePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Section_resources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {section_resourceCountArgs} args - Arguments to filter Section_resources to count.
     * @example
     * // Count the number of Section_resources
     * const count = await prisma.section_resource.count({
     *   where: {
     *     // ... the filter for the Section_resources we want to count
     *   }
     * })
    **/
    count<T extends section_resourceCountArgs>(
      args?: Subset<T, section_resourceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Section_resourceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Section_resource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Section_resourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Section_resourceAggregateArgs>(args: Subset<T, Section_resourceAggregateArgs>): Prisma.PrismaPromise<GetSection_resourceAggregateType<T>>

    /**
     * Group by Section_resource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {section_resourceGroupByArgs} args - Group by arguments.
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
      T extends section_resourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: section_resourceGroupByArgs['orderBy'] }
        : { orderBy?: section_resourceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, section_resourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSection_resourceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the section_resource model
   */
  readonly fields: section_resourceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for section_resource.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__section_resourceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    section<T extends sectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, sectionDefaultArgs<ExtArgs>>): Prisma__sectionClient<$Result.GetResult<Prisma.$sectionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the section_resource model
   */ 
  interface section_resourceFieldRefs {
    readonly id: FieldRef<"section_resource", 'Int'>
    readonly url_resource: FieldRef<"section_resource", 'String'>
    readonly section_id: FieldRef<"section_resource", 'Int'>
    readonly title: FieldRef<"section_resource", 'String'>
  }
    

  // Custom InputTypes

  /**
   * section_resource findUnique
   */
  export type section_resourceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the section_resource
     */
    select?: section_resourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: section_resourceInclude<ExtArgs> | null
    /**
     * Filter, which section_resource to fetch.
     */
    where: section_resourceWhereUniqueInput
  }


  /**
   * section_resource findUniqueOrThrow
   */
  export type section_resourceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the section_resource
     */
    select?: section_resourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: section_resourceInclude<ExtArgs> | null
    /**
     * Filter, which section_resource to fetch.
     */
    where: section_resourceWhereUniqueInput
  }


  /**
   * section_resource findFirst
   */
  export type section_resourceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the section_resource
     */
    select?: section_resourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: section_resourceInclude<ExtArgs> | null
    /**
     * Filter, which section_resource to fetch.
     */
    where?: section_resourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of section_resources to fetch.
     */
    orderBy?: section_resourceOrderByWithRelationInput | section_resourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for section_resources.
     */
    cursor?: section_resourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` section_resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` section_resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of section_resources.
     */
    distinct?: Section_resourceScalarFieldEnum | Section_resourceScalarFieldEnum[]
  }


  /**
   * section_resource findFirstOrThrow
   */
  export type section_resourceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the section_resource
     */
    select?: section_resourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: section_resourceInclude<ExtArgs> | null
    /**
     * Filter, which section_resource to fetch.
     */
    where?: section_resourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of section_resources to fetch.
     */
    orderBy?: section_resourceOrderByWithRelationInput | section_resourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for section_resources.
     */
    cursor?: section_resourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` section_resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` section_resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of section_resources.
     */
    distinct?: Section_resourceScalarFieldEnum | Section_resourceScalarFieldEnum[]
  }


  /**
   * section_resource findMany
   */
  export type section_resourceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the section_resource
     */
    select?: section_resourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: section_resourceInclude<ExtArgs> | null
    /**
     * Filter, which section_resources to fetch.
     */
    where?: section_resourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of section_resources to fetch.
     */
    orderBy?: section_resourceOrderByWithRelationInput | section_resourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing section_resources.
     */
    cursor?: section_resourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` section_resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` section_resources.
     */
    skip?: number
    distinct?: Section_resourceScalarFieldEnum | Section_resourceScalarFieldEnum[]
  }


  /**
   * section_resource create
   */
  export type section_resourceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the section_resource
     */
    select?: section_resourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: section_resourceInclude<ExtArgs> | null
    /**
     * The data needed to create a section_resource.
     */
    data: XOR<section_resourceCreateInput, section_resourceUncheckedCreateInput>
  }


  /**
   * section_resource createMany
   */
  export type section_resourceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many section_resources.
     */
    data: section_resourceCreateManyInput | section_resourceCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * section_resource update
   */
  export type section_resourceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the section_resource
     */
    select?: section_resourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: section_resourceInclude<ExtArgs> | null
    /**
     * The data needed to update a section_resource.
     */
    data: XOR<section_resourceUpdateInput, section_resourceUncheckedUpdateInput>
    /**
     * Choose, which section_resource to update.
     */
    where: section_resourceWhereUniqueInput
  }


  /**
   * section_resource updateMany
   */
  export type section_resourceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update section_resources.
     */
    data: XOR<section_resourceUpdateManyMutationInput, section_resourceUncheckedUpdateManyInput>
    /**
     * Filter which section_resources to update
     */
    where?: section_resourceWhereInput
  }


  /**
   * section_resource upsert
   */
  export type section_resourceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the section_resource
     */
    select?: section_resourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: section_resourceInclude<ExtArgs> | null
    /**
     * The filter to search for the section_resource to update in case it exists.
     */
    where: section_resourceWhereUniqueInput
    /**
     * In case the section_resource found by the `where` argument doesn't exist, create a new section_resource with this data.
     */
    create: XOR<section_resourceCreateInput, section_resourceUncheckedCreateInput>
    /**
     * In case the section_resource was found with the provided `where` argument, update it with this data.
     */
    update: XOR<section_resourceUpdateInput, section_resourceUncheckedUpdateInput>
  }


  /**
   * section_resource delete
   */
  export type section_resourceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the section_resource
     */
    select?: section_resourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: section_resourceInclude<ExtArgs> | null
    /**
     * Filter which section_resource to delete.
     */
    where: section_resourceWhereUniqueInput
  }


  /**
   * section_resource deleteMany
   */
  export type section_resourceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which section_resources to delete
     */
    where?: section_resourceWhereInput
  }


  /**
   * section_resource without action
   */
  export type section_resourceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the section_resource
     */
    select?: section_resourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: section_resourceInclude<ExtArgs> | null
  }



  /**
   * Model activity
   */

  export type AggregateActivity = {
    _count: ActivityCountAggregateOutputType | null
    _avg: ActivityAvgAggregateOutputType | null
    _sum: ActivitySumAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  export type ActivityAvgAggregateOutputType = {
    id: number | null
    section_id: number | null
  }

  export type ActivitySumAggregateOutputType = {
    id: number | null
    section_id: number | null
  }

  export type ActivityMinAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    time_due: Date | null
    section_id: number | null
  }

  export type ActivityMaxAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    time_due: Date | null
    section_id: number | null
  }

  export type ActivityCountAggregateOutputType = {
    id: number
    title: number
    content: number
    time_due: number
    section_id: number
    _all: number
  }


  export type ActivityAvgAggregateInputType = {
    id?: true
    section_id?: true
  }

  export type ActivitySumAggregateInputType = {
    id?: true
    section_id?: true
  }

  export type ActivityMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    time_due?: true
    section_id?: true
  }

  export type ActivityMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    time_due?: true
    section_id?: true
  }

  export type ActivityCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    time_due?: true
    section_id?: true
    _all?: true
  }

  export type ActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which activity to aggregate.
     */
    where?: activityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activities to fetch.
     */
    orderBy?: activityOrderByWithRelationInput | activityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: activityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned activities
    **/
    _count?: true | ActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityMaxAggregateInputType
  }

  export type GetActivityAggregateType<T extends ActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivity[P]>
      : GetScalarType<T[P], AggregateActivity[P]>
  }




  export type activityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: activityWhereInput
    orderBy?: activityOrderByWithAggregationInput | activityOrderByWithAggregationInput[]
    by: ActivityScalarFieldEnum[] | ActivityScalarFieldEnum
    having?: activityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityCountAggregateInputType | true
    _avg?: ActivityAvgAggregateInputType
    _sum?: ActivitySumAggregateInputType
    _min?: ActivityMinAggregateInputType
    _max?: ActivityMaxAggregateInputType
  }

  export type ActivityGroupByOutputType = {
    id: number
    title: string
    content: string
    time_due: Date
    section_id: number
    _count: ActivityCountAggregateOutputType | null
    _avg: ActivityAvgAggregateOutputType | null
    _sum: ActivitySumAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  type GetActivityGroupByPayload<T extends activityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityGroupByOutputType[P]>
        }
      >
    >


  export type activitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    time_due?: boolean
    section_id?: boolean
    submission?: boolean | activity$submissionArgs<ExtArgs>
    resources?: boolean | activity$resourcesArgs<ExtArgs>
    section?: boolean | sectionDefaultArgs<ExtArgs>
    _count?: boolean | ActivityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type activitySelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    time_due?: boolean
    section_id?: boolean
  }

  export type activityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | activity$submissionArgs<ExtArgs>
    resources?: boolean | activity$resourcesArgs<ExtArgs>
    section?: boolean | sectionDefaultArgs<ExtArgs>
    _count?: boolean | ActivityCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $activityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "activity"
    objects: {
      submission: Prisma.$submissionPayload<ExtArgs>[]
      resources: Prisma.$activity_resourcePayload<ExtArgs>[]
      section: Prisma.$sectionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      content: string
      time_due: Date
      section_id: number
    }, ExtArgs["result"]["activity"]>
    composites: {}
  }


  type activityGetPayload<S extends boolean | null | undefined | activityDefaultArgs> = $Result.GetResult<Prisma.$activityPayload, S>

  type activityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<activityFindManyArgs, 'select' | 'include'> & {
      select?: ActivityCountAggregateInputType | true
    }

  export interface activityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['activity'], meta: { name: 'activity' } }
    /**
     * Find zero or one Activity that matches the filter.
     * @param {activityFindUniqueArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends activityFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, activityFindUniqueArgs<ExtArgs>>
    ): Prisma__activityClient<$Result.GetResult<Prisma.$activityPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Activity that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {activityFindUniqueOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends activityFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, activityFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__activityClient<$Result.GetResult<Prisma.$activityPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Activity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activityFindFirstArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends activityFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, activityFindFirstArgs<ExtArgs>>
    ): Prisma__activityClient<$Result.GetResult<Prisma.$activityPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Activity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activityFindFirstOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends activityFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, activityFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__activityClient<$Result.GetResult<Prisma.$activityPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activityFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Activities
     * const activities = await prisma.activity.findMany()
     * 
     * // Get first 10 Activities
     * const activities = await prisma.activity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityWithIdOnly = await prisma.activity.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends activityFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, activityFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$activityPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Activity.
     * @param {activityCreateArgs} args - Arguments to create a Activity.
     * @example
     * // Create one Activity
     * const Activity = await prisma.activity.create({
     *   data: {
     *     // ... data to create a Activity
     *   }
     * })
     * 
    **/
    create<T extends activityCreateArgs<ExtArgs>>(
      args: SelectSubset<T, activityCreateArgs<ExtArgs>>
    ): Prisma__activityClient<$Result.GetResult<Prisma.$activityPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Activities.
     *     @param {activityCreateManyArgs} args - Arguments to create many Activities.
     *     @example
     *     // Create many Activities
     *     const activity = await prisma.activity.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends activityCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, activityCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Activity.
     * @param {activityDeleteArgs} args - Arguments to delete one Activity.
     * @example
     * // Delete one Activity
     * const Activity = await prisma.activity.delete({
     *   where: {
     *     // ... filter to delete one Activity
     *   }
     * })
     * 
    **/
    delete<T extends activityDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, activityDeleteArgs<ExtArgs>>
    ): Prisma__activityClient<$Result.GetResult<Prisma.$activityPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Activity.
     * @param {activityUpdateArgs} args - Arguments to update one Activity.
     * @example
     * // Update one Activity
     * const activity = await prisma.activity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends activityUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, activityUpdateArgs<ExtArgs>>
    ): Prisma__activityClient<$Result.GetResult<Prisma.$activityPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Activities.
     * @param {activityDeleteManyArgs} args - Arguments to filter Activities to delete.
     * @example
     * // Delete a few Activities
     * const { count } = await prisma.activity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends activityDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, activityDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends activityUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, activityUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Activity.
     * @param {activityUpsertArgs} args - Arguments to update or create a Activity.
     * @example
     * // Update or create a Activity
     * const activity = await prisma.activity.upsert({
     *   create: {
     *     // ... data to create a Activity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Activity we want to update
     *   }
     * })
    **/
    upsert<T extends activityUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, activityUpsertArgs<ExtArgs>>
    ): Prisma__activityClient<$Result.GetResult<Prisma.$activityPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activityCountArgs} args - Arguments to filter Activities to count.
     * @example
     * // Count the number of Activities
     * const count = await prisma.activity.count({
     *   where: {
     *     // ... the filter for the Activities we want to count
     *   }
     * })
    **/
    count<T extends activityCountArgs>(
      args?: Subset<T, activityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivityAggregateArgs>(args: Subset<T, ActivityAggregateArgs>): Prisma.PrismaPromise<GetActivityAggregateType<T>>

    /**
     * Group by Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activityGroupByArgs} args - Group by arguments.
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
      T extends activityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: activityGroupByArgs['orderBy'] }
        : { orderBy?: activityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, activityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the activity model
   */
  readonly fields: activityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for activity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__activityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    submission<T extends activity$submissionArgs<ExtArgs> = {}>(args?: Subset<T, activity$submissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$submissionPayload<ExtArgs>, T, 'findMany'> | Null>;

    resources<T extends activity$resourcesArgs<ExtArgs> = {}>(args?: Subset<T, activity$resourcesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$activity_resourcePayload<ExtArgs>, T, 'findMany'> | Null>;

    section<T extends sectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, sectionDefaultArgs<ExtArgs>>): Prisma__sectionClient<$Result.GetResult<Prisma.$sectionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the activity model
   */ 
  interface activityFieldRefs {
    readonly id: FieldRef<"activity", 'Int'>
    readonly title: FieldRef<"activity", 'String'>
    readonly content: FieldRef<"activity", 'String'>
    readonly time_due: FieldRef<"activity", 'DateTime'>
    readonly section_id: FieldRef<"activity", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * activity findUnique
   */
  export type activityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity
     */
    select?: activitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: activityInclude<ExtArgs> | null
    /**
     * Filter, which activity to fetch.
     */
    where: activityWhereUniqueInput
  }


  /**
   * activity findUniqueOrThrow
   */
  export type activityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity
     */
    select?: activitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: activityInclude<ExtArgs> | null
    /**
     * Filter, which activity to fetch.
     */
    where: activityWhereUniqueInput
  }


  /**
   * activity findFirst
   */
  export type activityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity
     */
    select?: activitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: activityInclude<ExtArgs> | null
    /**
     * Filter, which activity to fetch.
     */
    where?: activityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activities to fetch.
     */
    orderBy?: activityOrderByWithRelationInput | activityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for activities.
     */
    cursor?: activityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }


  /**
   * activity findFirstOrThrow
   */
  export type activityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity
     */
    select?: activitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: activityInclude<ExtArgs> | null
    /**
     * Filter, which activity to fetch.
     */
    where?: activityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activities to fetch.
     */
    orderBy?: activityOrderByWithRelationInput | activityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for activities.
     */
    cursor?: activityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }


  /**
   * activity findMany
   */
  export type activityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity
     */
    select?: activitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: activityInclude<ExtArgs> | null
    /**
     * Filter, which activities to fetch.
     */
    where?: activityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activities to fetch.
     */
    orderBy?: activityOrderByWithRelationInput | activityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing activities.
     */
    cursor?: activityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activities.
     */
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }


  /**
   * activity create
   */
  export type activityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity
     */
    select?: activitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: activityInclude<ExtArgs> | null
    /**
     * The data needed to create a activity.
     */
    data: XOR<activityCreateInput, activityUncheckedCreateInput>
  }


  /**
   * activity createMany
   */
  export type activityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many activities.
     */
    data: activityCreateManyInput | activityCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * activity update
   */
  export type activityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity
     */
    select?: activitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: activityInclude<ExtArgs> | null
    /**
     * The data needed to update a activity.
     */
    data: XOR<activityUpdateInput, activityUncheckedUpdateInput>
    /**
     * Choose, which activity to update.
     */
    where: activityWhereUniqueInput
  }


  /**
   * activity updateMany
   */
  export type activityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update activities.
     */
    data: XOR<activityUpdateManyMutationInput, activityUncheckedUpdateManyInput>
    /**
     * Filter which activities to update
     */
    where?: activityWhereInput
  }


  /**
   * activity upsert
   */
  export type activityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity
     */
    select?: activitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: activityInclude<ExtArgs> | null
    /**
     * The filter to search for the activity to update in case it exists.
     */
    where: activityWhereUniqueInput
    /**
     * In case the activity found by the `where` argument doesn't exist, create a new activity with this data.
     */
    create: XOR<activityCreateInput, activityUncheckedCreateInput>
    /**
     * In case the activity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<activityUpdateInput, activityUncheckedUpdateInput>
  }


  /**
   * activity delete
   */
  export type activityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity
     */
    select?: activitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: activityInclude<ExtArgs> | null
    /**
     * Filter which activity to delete.
     */
    where: activityWhereUniqueInput
  }


  /**
   * activity deleteMany
   */
  export type activityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which activities to delete
     */
    where?: activityWhereInput
  }


  /**
   * activity.submission
   */
  export type activity$submissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submission
     */
    select?: submissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: submissionInclude<ExtArgs> | null
    where?: submissionWhereInput
    orderBy?: submissionOrderByWithRelationInput | submissionOrderByWithRelationInput[]
    cursor?: submissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }


  /**
   * activity.resources
   */
  export type activity$resourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_resource
     */
    select?: activity_resourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: activity_resourceInclude<ExtArgs> | null
    where?: activity_resourceWhereInput
    orderBy?: activity_resourceOrderByWithRelationInput | activity_resourceOrderByWithRelationInput[]
    cursor?: activity_resourceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Activity_resourceScalarFieldEnum | Activity_resourceScalarFieldEnum[]
  }


  /**
   * activity without action
   */
  export type activityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity
     */
    select?: activitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: activityInclude<ExtArgs> | null
  }



  /**
   * Model activity_resource
   */

  export type AggregateActivity_resource = {
    _count: Activity_resourceCountAggregateOutputType | null
    _avg: Activity_resourceAvgAggregateOutputType | null
    _sum: Activity_resourceSumAggregateOutputType | null
    _min: Activity_resourceMinAggregateOutputType | null
    _max: Activity_resourceMaxAggregateOutputType | null
  }

  export type Activity_resourceAvgAggregateOutputType = {
    id: number | null
    activity_id: number | null
  }

  export type Activity_resourceSumAggregateOutputType = {
    id: number | null
    activity_id: number | null
  }

  export type Activity_resourceMinAggregateOutputType = {
    id: number | null
    url_resource: string | null
    activity_id: number | null
    title: string | null
  }

  export type Activity_resourceMaxAggregateOutputType = {
    id: number | null
    url_resource: string | null
    activity_id: number | null
    title: string | null
  }

  export type Activity_resourceCountAggregateOutputType = {
    id: number
    url_resource: number
    activity_id: number
    title: number
    _all: number
  }


  export type Activity_resourceAvgAggregateInputType = {
    id?: true
    activity_id?: true
  }

  export type Activity_resourceSumAggregateInputType = {
    id?: true
    activity_id?: true
  }

  export type Activity_resourceMinAggregateInputType = {
    id?: true
    url_resource?: true
    activity_id?: true
    title?: true
  }

  export type Activity_resourceMaxAggregateInputType = {
    id?: true
    url_resource?: true
    activity_id?: true
    title?: true
  }

  export type Activity_resourceCountAggregateInputType = {
    id?: true
    url_resource?: true
    activity_id?: true
    title?: true
    _all?: true
  }

  export type Activity_resourceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which activity_resource to aggregate.
     */
    where?: activity_resourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activity_resources to fetch.
     */
    orderBy?: activity_resourceOrderByWithRelationInput | activity_resourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: activity_resourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activity_resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activity_resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned activity_resources
    **/
    _count?: true | Activity_resourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Activity_resourceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Activity_resourceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Activity_resourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Activity_resourceMaxAggregateInputType
  }

  export type GetActivity_resourceAggregateType<T extends Activity_resourceAggregateArgs> = {
        [P in keyof T & keyof AggregateActivity_resource]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivity_resource[P]>
      : GetScalarType<T[P], AggregateActivity_resource[P]>
  }




  export type activity_resourceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: activity_resourceWhereInput
    orderBy?: activity_resourceOrderByWithAggregationInput | activity_resourceOrderByWithAggregationInput[]
    by: Activity_resourceScalarFieldEnum[] | Activity_resourceScalarFieldEnum
    having?: activity_resourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Activity_resourceCountAggregateInputType | true
    _avg?: Activity_resourceAvgAggregateInputType
    _sum?: Activity_resourceSumAggregateInputType
    _min?: Activity_resourceMinAggregateInputType
    _max?: Activity_resourceMaxAggregateInputType
  }

  export type Activity_resourceGroupByOutputType = {
    id: number
    url_resource: string
    activity_id: number
    title: string
    _count: Activity_resourceCountAggregateOutputType | null
    _avg: Activity_resourceAvgAggregateOutputType | null
    _sum: Activity_resourceSumAggregateOutputType | null
    _min: Activity_resourceMinAggregateOutputType | null
    _max: Activity_resourceMaxAggregateOutputType | null
  }

  type GetActivity_resourceGroupByPayload<T extends activity_resourceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Activity_resourceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Activity_resourceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Activity_resourceGroupByOutputType[P]>
            : GetScalarType<T[P], Activity_resourceGroupByOutputType[P]>
        }
      >
    >


  export type activity_resourceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url_resource?: boolean
    activity_id?: boolean
    title?: boolean
    activity?: boolean | activityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activity_resource"]>

  export type activity_resourceSelectScalar = {
    id?: boolean
    url_resource?: boolean
    activity_id?: boolean
    title?: boolean
  }

  export type activity_resourceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activity?: boolean | activityDefaultArgs<ExtArgs>
  }


  export type $activity_resourcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "activity_resource"
    objects: {
      activity: Prisma.$activityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url_resource: string
      activity_id: number
      title: string
    }, ExtArgs["result"]["activity_resource"]>
    composites: {}
  }


  type activity_resourceGetPayload<S extends boolean | null | undefined | activity_resourceDefaultArgs> = $Result.GetResult<Prisma.$activity_resourcePayload, S>

  type activity_resourceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<activity_resourceFindManyArgs, 'select' | 'include'> & {
      select?: Activity_resourceCountAggregateInputType | true
    }

  export interface activity_resourceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['activity_resource'], meta: { name: 'activity_resource' } }
    /**
     * Find zero or one Activity_resource that matches the filter.
     * @param {activity_resourceFindUniqueArgs} args - Arguments to find a Activity_resource
     * @example
     * // Get one Activity_resource
     * const activity_resource = await prisma.activity_resource.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends activity_resourceFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, activity_resourceFindUniqueArgs<ExtArgs>>
    ): Prisma__activity_resourceClient<$Result.GetResult<Prisma.$activity_resourcePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Activity_resource that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {activity_resourceFindUniqueOrThrowArgs} args - Arguments to find a Activity_resource
     * @example
     * // Get one Activity_resource
     * const activity_resource = await prisma.activity_resource.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends activity_resourceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, activity_resourceFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__activity_resourceClient<$Result.GetResult<Prisma.$activity_resourcePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Activity_resource that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activity_resourceFindFirstArgs} args - Arguments to find a Activity_resource
     * @example
     * // Get one Activity_resource
     * const activity_resource = await prisma.activity_resource.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends activity_resourceFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, activity_resourceFindFirstArgs<ExtArgs>>
    ): Prisma__activity_resourceClient<$Result.GetResult<Prisma.$activity_resourcePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Activity_resource that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activity_resourceFindFirstOrThrowArgs} args - Arguments to find a Activity_resource
     * @example
     * // Get one Activity_resource
     * const activity_resource = await prisma.activity_resource.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends activity_resourceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, activity_resourceFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__activity_resourceClient<$Result.GetResult<Prisma.$activity_resourcePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Activity_resources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activity_resourceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Activity_resources
     * const activity_resources = await prisma.activity_resource.findMany()
     * 
     * // Get first 10 Activity_resources
     * const activity_resources = await prisma.activity_resource.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activity_resourceWithIdOnly = await prisma.activity_resource.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends activity_resourceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, activity_resourceFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$activity_resourcePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Activity_resource.
     * @param {activity_resourceCreateArgs} args - Arguments to create a Activity_resource.
     * @example
     * // Create one Activity_resource
     * const Activity_resource = await prisma.activity_resource.create({
     *   data: {
     *     // ... data to create a Activity_resource
     *   }
     * })
     * 
    **/
    create<T extends activity_resourceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, activity_resourceCreateArgs<ExtArgs>>
    ): Prisma__activity_resourceClient<$Result.GetResult<Prisma.$activity_resourcePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Activity_resources.
     *     @param {activity_resourceCreateManyArgs} args - Arguments to create many Activity_resources.
     *     @example
     *     // Create many Activity_resources
     *     const activity_resource = await prisma.activity_resource.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends activity_resourceCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, activity_resourceCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Activity_resource.
     * @param {activity_resourceDeleteArgs} args - Arguments to delete one Activity_resource.
     * @example
     * // Delete one Activity_resource
     * const Activity_resource = await prisma.activity_resource.delete({
     *   where: {
     *     // ... filter to delete one Activity_resource
     *   }
     * })
     * 
    **/
    delete<T extends activity_resourceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, activity_resourceDeleteArgs<ExtArgs>>
    ): Prisma__activity_resourceClient<$Result.GetResult<Prisma.$activity_resourcePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Activity_resource.
     * @param {activity_resourceUpdateArgs} args - Arguments to update one Activity_resource.
     * @example
     * // Update one Activity_resource
     * const activity_resource = await prisma.activity_resource.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends activity_resourceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, activity_resourceUpdateArgs<ExtArgs>>
    ): Prisma__activity_resourceClient<$Result.GetResult<Prisma.$activity_resourcePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Activity_resources.
     * @param {activity_resourceDeleteManyArgs} args - Arguments to filter Activity_resources to delete.
     * @example
     * // Delete a few Activity_resources
     * const { count } = await prisma.activity_resource.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends activity_resourceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, activity_resourceDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activity_resources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activity_resourceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Activity_resources
     * const activity_resource = await prisma.activity_resource.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends activity_resourceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, activity_resourceUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Activity_resource.
     * @param {activity_resourceUpsertArgs} args - Arguments to update or create a Activity_resource.
     * @example
     * // Update or create a Activity_resource
     * const activity_resource = await prisma.activity_resource.upsert({
     *   create: {
     *     // ... data to create a Activity_resource
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Activity_resource we want to update
     *   }
     * })
    **/
    upsert<T extends activity_resourceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, activity_resourceUpsertArgs<ExtArgs>>
    ): Prisma__activity_resourceClient<$Result.GetResult<Prisma.$activity_resourcePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Activity_resources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activity_resourceCountArgs} args - Arguments to filter Activity_resources to count.
     * @example
     * // Count the number of Activity_resources
     * const count = await prisma.activity_resource.count({
     *   where: {
     *     // ... the filter for the Activity_resources we want to count
     *   }
     * })
    **/
    count<T extends activity_resourceCountArgs>(
      args?: Subset<T, activity_resourceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Activity_resourceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Activity_resource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Activity_resourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Activity_resourceAggregateArgs>(args: Subset<T, Activity_resourceAggregateArgs>): Prisma.PrismaPromise<GetActivity_resourceAggregateType<T>>

    /**
     * Group by Activity_resource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activity_resourceGroupByArgs} args - Group by arguments.
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
      T extends activity_resourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: activity_resourceGroupByArgs['orderBy'] }
        : { orderBy?: activity_resourceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, activity_resourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivity_resourceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the activity_resource model
   */
  readonly fields: activity_resourceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for activity_resource.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__activity_resourceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    activity<T extends activityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, activityDefaultArgs<ExtArgs>>): Prisma__activityClient<$Result.GetResult<Prisma.$activityPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the activity_resource model
   */ 
  interface activity_resourceFieldRefs {
    readonly id: FieldRef<"activity_resource", 'Int'>
    readonly url_resource: FieldRef<"activity_resource", 'String'>
    readonly activity_id: FieldRef<"activity_resource", 'Int'>
    readonly title: FieldRef<"activity_resource", 'String'>
  }
    

  // Custom InputTypes

  /**
   * activity_resource findUnique
   */
  export type activity_resourceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_resource
     */
    select?: activity_resourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: activity_resourceInclude<ExtArgs> | null
    /**
     * Filter, which activity_resource to fetch.
     */
    where: activity_resourceWhereUniqueInput
  }


  /**
   * activity_resource findUniqueOrThrow
   */
  export type activity_resourceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_resource
     */
    select?: activity_resourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: activity_resourceInclude<ExtArgs> | null
    /**
     * Filter, which activity_resource to fetch.
     */
    where: activity_resourceWhereUniqueInput
  }


  /**
   * activity_resource findFirst
   */
  export type activity_resourceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_resource
     */
    select?: activity_resourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: activity_resourceInclude<ExtArgs> | null
    /**
     * Filter, which activity_resource to fetch.
     */
    where?: activity_resourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activity_resources to fetch.
     */
    orderBy?: activity_resourceOrderByWithRelationInput | activity_resourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for activity_resources.
     */
    cursor?: activity_resourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activity_resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activity_resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of activity_resources.
     */
    distinct?: Activity_resourceScalarFieldEnum | Activity_resourceScalarFieldEnum[]
  }


  /**
   * activity_resource findFirstOrThrow
   */
  export type activity_resourceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_resource
     */
    select?: activity_resourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: activity_resourceInclude<ExtArgs> | null
    /**
     * Filter, which activity_resource to fetch.
     */
    where?: activity_resourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activity_resources to fetch.
     */
    orderBy?: activity_resourceOrderByWithRelationInput | activity_resourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for activity_resources.
     */
    cursor?: activity_resourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activity_resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activity_resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of activity_resources.
     */
    distinct?: Activity_resourceScalarFieldEnum | Activity_resourceScalarFieldEnum[]
  }


  /**
   * activity_resource findMany
   */
  export type activity_resourceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_resource
     */
    select?: activity_resourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: activity_resourceInclude<ExtArgs> | null
    /**
     * Filter, which activity_resources to fetch.
     */
    where?: activity_resourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activity_resources to fetch.
     */
    orderBy?: activity_resourceOrderByWithRelationInput | activity_resourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing activity_resources.
     */
    cursor?: activity_resourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activity_resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activity_resources.
     */
    skip?: number
    distinct?: Activity_resourceScalarFieldEnum | Activity_resourceScalarFieldEnum[]
  }


  /**
   * activity_resource create
   */
  export type activity_resourceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_resource
     */
    select?: activity_resourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: activity_resourceInclude<ExtArgs> | null
    /**
     * The data needed to create a activity_resource.
     */
    data: XOR<activity_resourceCreateInput, activity_resourceUncheckedCreateInput>
  }


  /**
   * activity_resource createMany
   */
  export type activity_resourceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many activity_resources.
     */
    data: activity_resourceCreateManyInput | activity_resourceCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * activity_resource update
   */
  export type activity_resourceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_resource
     */
    select?: activity_resourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: activity_resourceInclude<ExtArgs> | null
    /**
     * The data needed to update a activity_resource.
     */
    data: XOR<activity_resourceUpdateInput, activity_resourceUncheckedUpdateInput>
    /**
     * Choose, which activity_resource to update.
     */
    where: activity_resourceWhereUniqueInput
  }


  /**
   * activity_resource updateMany
   */
  export type activity_resourceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update activity_resources.
     */
    data: XOR<activity_resourceUpdateManyMutationInput, activity_resourceUncheckedUpdateManyInput>
    /**
     * Filter which activity_resources to update
     */
    where?: activity_resourceWhereInput
  }


  /**
   * activity_resource upsert
   */
  export type activity_resourceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_resource
     */
    select?: activity_resourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: activity_resourceInclude<ExtArgs> | null
    /**
     * The filter to search for the activity_resource to update in case it exists.
     */
    where: activity_resourceWhereUniqueInput
    /**
     * In case the activity_resource found by the `where` argument doesn't exist, create a new activity_resource with this data.
     */
    create: XOR<activity_resourceCreateInput, activity_resourceUncheckedCreateInput>
    /**
     * In case the activity_resource was found with the provided `where` argument, update it with this data.
     */
    update: XOR<activity_resourceUpdateInput, activity_resourceUncheckedUpdateInput>
  }


  /**
   * activity_resource delete
   */
  export type activity_resourceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_resource
     */
    select?: activity_resourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: activity_resourceInclude<ExtArgs> | null
    /**
     * Filter which activity_resource to delete.
     */
    where: activity_resourceWhereUniqueInput
  }


  /**
   * activity_resource deleteMany
   */
  export type activity_resourceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which activity_resources to delete
     */
    where?: activity_resourceWhereInput
  }


  /**
   * activity_resource without action
   */
  export type activity_resourceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity_resource
     */
    select?: activity_resourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: activity_resourceInclude<ExtArgs> | null
  }



  /**
   * Model submission
   */

  export type AggregateSubmission = {
    _count: SubmissionCountAggregateOutputType | null
    _avg: SubmissionAvgAggregateOutputType | null
    _sum: SubmissionSumAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  export type SubmissionAvgAggregateOutputType = {
    id: number | null
    grade: number | null
    student_id: number | null
    activity_id: number | null
  }

  export type SubmissionSumAggregateOutputType = {
    id: number | null
    grade: number | null
    student_id: number | null
    activity_id: number | null
  }

  export type SubmissionMinAggregateOutputType = {
    id: number | null
    grade: number | null
    comment: string | null
    state_sub: string | null
    state_gra: string | null
    student_id: number | null
    activity_id: number | null
  }

  export type SubmissionMaxAggregateOutputType = {
    id: number | null
    grade: number | null
    comment: string | null
    state_sub: string | null
    state_gra: string | null
    student_id: number | null
    activity_id: number | null
  }

  export type SubmissionCountAggregateOutputType = {
    id: number
    grade: number
    comment: number
    state_sub: number
    state_gra: number
    student_id: number
    activity_id: number
    _all: number
  }


  export type SubmissionAvgAggregateInputType = {
    id?: true
    grade?: true
    student_id?: true
    activity_id?: true
  }

  export type SubmissionSumAggregateInputType = {
    id?: true
    grade?: true
    student_id?: true
    activity_id?: true
  }

  export type SubmissionMinAggregateInputType = {
    id?: true
    grade?: true
    comment?: true
    state_sub?: true
    state_gra?: true
    student_id?: true
    activity_id?: true
  }

  export type SubmissionMaxAggregateInputType = {
    id?: true
    grade?: true
    comment?: true
    state_sub?: true
    state_gra?: true
    student_id?: true
    activity_id?: true
  }

  export type SubmissionCountAggregateInputType = {
    id?: true
    grade?: true
    comment?: true
    state_sub?: true
    state_gra?: true
    student_id?: true
    activity_id?: true
    _all?: true
  }

  export type SubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which submission to aggregate.
     */
    where?: submissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of submissions to fetch.
     */
    orderBy?: submissionOrderByWithRelationInput | submissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: submissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned submissions
    **/
    _count?: true | SubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubmissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubmissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubmissionMaxAggregateInputType
  }

  export type GetSubmissionAggregateType<T extends SubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubmission[P]>
      : GetScalarType<T[P], AggregateSubmission[P]>
  }




  export type submissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: submissionWhereInput
    orderBy?: submissionOrderByWithAggregationInput | submissionOrderByWithAggregationInput[]
    by: SubmissionScalarFieldEnum[] | SubmissionScalarFieldEnum
    having?: submissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubmissionCountAggregateInputType | true
    _avg?: SubmissionAvgAggregateInputType
    _sum?: SubmissionSumAggregateInputType
    _min?: SubmissionMinAggregateInputType
    _max?: SubmissionMaxAggregateInputType
  }

  export type SubmissionGroupByOutputType = {
    id: number
    grade: number
    comment: string
    state_sub: string
    state_gra: string
    student_id: number
    activity_id: number
    _count: SubmissionCountAggregateOutputType | null
    _avg: SubmissionAvgAggregateOutputType | null
    _sum: SubmissionSumAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  type GetSubmissionGroupByPayload<T extends submissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
        }
      >
    >


  export type submissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    grade?: boolean
    comment?: boolean
    state_sub?: boolean
    state_gra?: boolean
    student_id?: boolean
    activity_id?: boolean
    resources?: boolean | submission$resourcesArgs<ExtArgs>
    student?: boolean | studentDefaultArgs<ExtArgs>
    activity?: boolean | activityDefaultArgs<ExtArgs>
    _count?: boolean | SubmissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type submissionSelectScalar = {
    id?: boolean
    grade?: boolean
    comment?: boolean
    state_sub?: boolean
    state_gra?: boolean
    student_id?: boolean
    activity_id?: boolean
  }

  export type submissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resources?: boolean | submission$resourcesArgs<ExtArgs>
    student?: boolean | studentDefaultArgs<ExtArgs>
    activity?: boolean | activityDefaultArgs<ExtArgs>
    _count?: boolean | SubmissionCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $submissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "submission"
    objects: {
      resources: Prisma.$submission_resourcePayload<ExtArgs>[]
      student: Prisma.$studentPayload<ExtArgs>
      activity: Prisma.$activityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      grade: number
      comment: string
      state_sub: string
      state_gra: string
      student_id: number
      activity_id: number
    }, ExtArgs["result"]["submission"]>
    composites: {}
  }


  type submissionGetPayload<S extends boolean | null | undefined | submissionDefaultArgs> = $Result.GetResult<Prisma.$submissionPayload, S>

  type submissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<submissionFindManyArgs, 'select' | 'include'> & {
      select?: SubmissionCountAggregateInputType | true
    }

  export interface submissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['submission'], meta: { name: 'submission' } }
    /**
     * Find zero or one Submission that matches the filter.
     * @param {submissionFindUniqueArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends submissionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, submissionFindUniqueArgs<ExtArgs>>
    ): Prisma__submissionClient<$Result.GetResult<Prisma.$submissionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Submission that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {submissionFindUniqueOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends submissionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, submissionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__submissionClient<$Result.GetResult<Prisma.$submissionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Submission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submissionFindFirstArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends submissionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, submissionFindFirstArgs<ExtArgs>>
    ): Prisma__submissionClient<$Result.GetResult<Prisma.$submissionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Submission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submissionFindFirstOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends submissionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, submissionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__submissionClient<$Result.GetResult<Prisma.$submissionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submissionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Submissions
     * const submissions = await prisma.submission.findMany()
     * 
     * // Get first 10 Submissions
     * const submissions = await prisma.submission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const submissionWithIdOnly = await prisma.submission.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends submissionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, submissionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$submissionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Submission.
     * @param {submissionCreateArgs} args - Arguments to create a Submission.
     * @example
     * // Create one Submission
     * const Submission = await prisma.submission.create({
     *   data: {
     *     // ... data to create a Submission
     *   }
     * })
     * 
    **/
    create<T extends submissionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, submissionCreateArgs<ExtArgs>>
    ): Prisma__submissionClient<$Result.GetResult<Prisma.$submissionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Submissions.
     *     @param {submissionCreateManyArgs} args - Arguments to create many Submissions.
     *     @example
     *     // Create many Submissions
     *     const submission = await prisma.submission.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends submissionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, submissionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Submission.
     * @param {submissionDeleteArgs} args - Arguments to delete one Submission.
     * @example
     * // Delete one Submission
     * const Submission = await prisma.submission.delete({
     *   where: {
     *     // ... filter to delete one Submission
     *   }
     * })
     * 
    **/
    delete<T extends submissionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, submissionDeleteArgs<ExtArgs>>
    ): Prisma__submissionClient<$Result.GetResult<Prisma.$submissionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Submission.
     * @param {submissionUpdateArgs} args - Arguments to update one Submission.
     * @example
     * // Update one Submission
     * const submission = await prisma.submission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends submissionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, submissionUpdateArgs<ExtArgs>>
    ): Prisma__submissionClient<$Result.GetResult<Prisma.$submissionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Submissions.
     * @param {submissionDeleteManyArgs} args - Arguments to filter Submissions to delete.
     * @example
     * // Delete a few Submissions
     * const { count } = await prisma.submission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends submissionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, submissionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends submissionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, submissionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Submission.
     * @param {submissionUpsertArgs} args - Arguments to update or create a Submission.
     * @example
     * // Update or create a Submission
     * const submission = await prisma.submission.upsert({
     *   create: {
     *     // ... data to create a Submission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Submission we want to update
     *   }
     * })
    **/
    upsert<T extends submissionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, submissionUpsertArgs<ExtArgs>>
    ): Prisma__submissionClient<$Result.GetResult<Prisma.$submissionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submissionCountArgs} args - Arguments to filter Submissions to count.
     * @example
     * // Count the number of Submissions
     * const count = await prisma.submission.count({
     *   where: {
     *     // ... the filter for the Submissions we want to count
     *   }
     * })
    **/
    count<T extends submissionCountArgs>(
      args?: Subset<T, submissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubmissionAggregateArgs>(args: Subset<T, SubmissionAggregateArgs>): Prisma.PrismaPromise<GetSubmissionAggregateType<T>>

    /**
     * Group by Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submissionGroupByArgs} args - Group by arguments.
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
      T extends submissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: submissionGroupByArgs['orderBy'] }
        : { orderBy?: submissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, submissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the submission model
   */
  readonly fields: submissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for submission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__submissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    resources<T extends submission$resourcesArgs<ExtArgs> = {}>(args?: Subset<T, submission$resourcesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$submission_resourcePayload<ExtArgs>, T, 'findMany'> | Null>;

    student<T extends studentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, studentDefaultArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    activity<T extends activityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, activityDefaultArgs<ExtArgs>>): Prisma__activityClient<$Result.GetResult<Prisma.$activityPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the submission model
   */ 
  interface submissionFieldRefs {
    readonly id: FieldRef<"submission", 'Int'>
    readonly grade: FieldRef<"submission", 'Float'>
    readonly comment: FieldRef<"submission", 'String'>
    readonly state_sub: FieldRef<"submission", 'String'>
    readonly state_gra: FieldRef<"submission", 'String'>
    readonly student_id: FieldRef<"submission", 'Int'>
    readonly activity_id: FieldRef<"submission", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * submission findUnique
   */
  export type submissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submission
     */
    select?: submissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: submissionInclude<ExtArgs> | null
    /**
     * Filter, which submission to fetch.
     */
    where: submissionWhereUniqueInput
  }


  /**
   * submission findUniqueOrThrow
   */
  export type submissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submission
     */
    select?: submissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: submissionInclude<ExtArgs> | null
    /**
     * Filter, which submission to fetch.
     */
    where: submissionWhereUniqueInput
  }


  /**
   * submission findFirst
   */
  export type submissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submission
     */
    select?: submissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: submissionInclude<ExtArgs> | null
    /**
     * Filter, which submission to fetch.
     */
    where?: submissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of submissions to fetch.
     */
    orderBy?: submissionOrderByWithRelationInput | submissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for submissions.
     */
    cursor?: submissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }


  /**
   * submission findFirstOrThrow
   */
  export type submissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submission
     */
    select?: submissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: submissionInclude<ExtArgs> | null
    /**
     * Filter, which submission to fetch.
     */
    where?: submissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of submissions to fetch.
     */
    orderBy?: submissionOrderByWithRelationInput | submissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for submissions.
     */
    cursor?: submissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }


  /**
   * submission findMany
   */
  export type submissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submission
     */
    select?: submissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: submissionInclude<ExtArgs> | null
    /**
     * Filter, which submissions to fetch.
     */
    where?: submissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of submissions to fetch.
     */
    orderBy?: submissionOrderByWithRelationInput | submissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing submissions.
     */
    cursor?: submissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` submissions.
     */
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }


  /**
   * submission create
   */
  export type submissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submission
     */
    select?: submissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: submissionInclude<ExtArgs> | null
    /**
     * The data needed to create a submission.
     */
    data: XOR<submissionCreateInput, submissionUncheckedCreateInput>
  }


  /**
   * submission createMany
   */
  export type submissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many submissions.
     */
    data: submissionCreateManyInput | submissionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * submission update
   */
  export type submissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submission
     */
    select?: submissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: submissionInclude<ExtArgs> | null
    /**
     * The data needed to update a submission.
     */
    data: XOR<submissionUpdateInput, submissionUncheckedUpdateInput>
    /**
     * Choose, which submission to update.
     */
    where: submissionWhereUniqueInput
  }


  /**
   * submission updateMany
   */
  export type submissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update submissions.
     */
    data: XOR<submissionUpdateManyMutationInput, submissionUncheckedUpdateManyInput>
    /**
     * Filter which submissions to update
     */
    where?: submissionWhereInput
  }


  /**
   * submission upsert
   */
  export type submissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submission
     */
    select?: submissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: submissionInclude<ExtArgs> | null
    /**
     * The filter to search for the submission to update in case it exists.
     */
    where: submissionWhereUniqueInput
    /**
     * In case the submission found by the `where` argument doesn't exist, create a new submission with this data.
     */
    create: XOR<submissionCreateInput, submissionUncheckedCreateInput>
    /**
     * In case the submission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<submissionUpdateInput, submissionUncheckedUpdateInput>
  }


  /**
   * submission delete
   */
  export type submissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submission
     */
    select?: submissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: submissionInclude<ExtArgs> | null
    /**
     * Filter which submission to delete.
     */
    where: submissionWhereUniqueInput
  }


  /**
   * submission deleteMany
   */
  export type submissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which submissions to delete
     */
    where?: submissionWhereInput
  }


  /**
   * submission.resources
   */
  export type submission$resourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submission_resource
     */
    select?: submission_resourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: submission_resourceInclude<ExtArgs> | null
    where?: submission_resourceWhereInput
    orderBy?: submission_resourceOrderByWithRelationInput | submission_resourceOrderByWithRelationInput[]
    cursor?: submission_resourceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Submission_resourceScalarFieldEnum | Submission_resourceScalarFieldEnum[]
  }


  /**
   * submission without action
   */
  export type submissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submission
     */
    select?: submissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: submissionInclude<ExtArgs> | null
  }



  /**
   * Model submission_resource
   */

  export type AggregateSubmission_resource = {
    _count: Submission_resourceCountAggregateOutputType | null
    _avg: Submission_resourceAvgAggregateOutputType | null
    _sum: Submission_resourceSumAggregateOutputType | null
    _min: Submission_resourceMinAggregateOutputType | null
    _max: Submission_resourceMaxAggregateOutputType | null
  }

  export type Submission_resourceAvgAggregateOutputType = {
    id: number | null
    submission_id: number | null
  }

  export type Submission_resourceSumAggregateOutputType = {
    id: number | null
    submission_id: number | null
  }

  export type Submission_resourceMinAggregateOutputType = {
    id: number | null
    url_resource: string | null
    submission_id: number | null
    title: string | null
  }

  export type Submission_resourceMaxAggregateOutputType = {
    id: number | null
    url_resource: string | null
    submission_id: number | null
    title: string | null
  }

  export type Submission_resourceCountAggregateOutputType = {
    id: number
    url_resource: number
    submission_id: number
    title: number
    _all: number
  }


  export type Submission_resourceAvgAggregateInputType = {
    id?: true
    submission_id?: true
  }

  export type Submission_resourceSumAggregateInputType = {
    id?: true
    submission_id?: true
  }

  export type Submission_resourceMinAggregateInputType = {
    id?: true
    url_resource?: true
    submission_id?: true
    title?: true
  }

  export type Submission_resourceMaxAggregateInputType = {
    id?: true
    url_resource?: true
    submission_id?: true
    title?: true
  }

  export type Submission_resourceCountAggregateInputType = {
    id?: true
    url_resource?: true
    submission_id?: true
    title?: true
    _all?: true
  }

  export type Submission_resourceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which submission_resource to aggregate.
     */
    where?: submission_resourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of submission_resources to fetch.
     */
    orderBy?: submission_resourceOrderByWithRelationInput | submission_resourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: submission_resourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` submission_resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` submission_resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned submission_resources
    **/
    _count?: true | Submission_resourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Submission_resourceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Submission_resourceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Submission_resourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Submission_resourceMaxAggregateInputType
  }

  export type GetSubmission_resourceAggregateType<T extends Submission_resourceAggregateArgs> = {
        [P in keyof T & keyof AggregateSubmission_resource]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubmission_resource[P]>
      : GetScalarType<T[P], AggregateSubmission_resource[P]>
  }




  export type submission_resourceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: submission_resourceWhereInput
    orderBy?: submission_resourceOrderByWithAggregationInput | submission_resourceOrderByWithAggregationInput[]
    by: Submission_resourceScalarFieldEnum[] | Submission_resourceScalarFieldEnum
    having?: submission_resourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Submission_resourceCountAggregateInputType | true
    _avg?: Submission_resourceAvgAggregateInputType
    _sum?: Submission_resourceSumAggregateInputType
    _min?: Submission_resourceMinAggregateInputType
    _max?: Submission_resourceMaxAggregateInputType
  }

  export type Submission_resourceGroupByOutputType = {
    id: number
    url_resource: string
    submission_id: number
    title: string
    _count: Submission_resourceCountAggregateOutputType | null
    _avg: Submission_resourceAvgAggregateOutputType | null
    _sum: Submission_resourceSumAggregateOutputType | null
    _min: Submission_resourceMinAggregateOutputType | null
    _max: Submission_resourceMaxAggregateOutputType | null
  }

  type GetSubmission_resourceGroupByPayload<T extends submission_resourceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Submission_resourceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Submission_resourceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Submission_resourceGroupByOutputType[P]>
            : GetScalarType<T[P], Submission_resourceGroupByOutputType[P]>
        }
      >
    >


  export type submission_resourceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url_resource?: boolean
    submission_id?: boolean
    title?: boolean
    submission?: boolean | submissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission_resource"]>

  export type submission_resourceSelectScalar = {
    id?: boolean
    url_resource?: boolean
    submission_id?: boolean
    title?: boolean
  }

  export type submission_resourceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | submissionDefaultArgs<ExtArgs>
  }


  export type $submission_resourcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "submission_resource"
    objects: {
      submission: Prisma.$submissionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url_resource: string
      submission_id: number
      title: string
    }, ExtArgs["result"]["submission_resource"]>
    composites: {}
  }


  type submission_resourceGetPayload<S extends boolean | null | undefined | submission_resourceDefaultArgs> = $Result.GetResult<Prisma.$submission_resourcePayload, S>

  type submission_resourceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<submission_resourceFindManyArgs, 'select' | 'include'> & {
      select?: Submission_resourceCountAggregateInputType | true
    }

  export interface submission_resourceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['submission_resource'], meta: { name: 'submission_resource' } }
    /**
     * Find zero or one Submission_resource that matches the filter.
     * @param {submission_resourceFindUniqueArgs} args - Arguments to find a Submission_resource
     * @example
     * // Get one Submission_resource
     * const submission_resource = await prisma.submission_resource.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends submission_resourceFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, submission_resourceFindUniqueArgs<ExtArgs>>
    ): Prisma__submission_resourceClient<$Result.GetResult<Prisma.$submission_resourcePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Submission_resource that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {submission_resourceFindUniqueOrThrowArgs} args - Arguments to find a Submission_resource
     * @example
     * // Get one Submission_resource
     * const submission_resource = await prisma.submission_resource.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends submission_resourceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, submission_resourceFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__submission_resourceClient<$Result.GetResult<Prisma.$submission_resourcePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Submission_resource that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submission_resourceFindFirstArgs} args - Arguments to find a Submission_resource
     * @example
     * // Get one Submission_resource
     * const submission_resource = await prisma.submission_resource.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends submission_resourceFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, submission_resourceFindFirstArgs<ExtArgs>>
    ): Prisma__submission_resourceClient<$Result.GetResult<Prisma.$submission_resourcePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Submission_resource that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submission_resourceFindFirstOrThrowArgs} args - Arguments to find a Submission_resource
     * @example
     * // Get one Submission_resource
     * const submission_resource = await prisma.submission_resource.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends submission_resourceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, submission_resourceFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__submission_resourceClient<$Result.GetResult<Prisma.$submission_resourcePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Submission_resources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submission_resourceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Submission_resources
     * const submission_resources = await prisma.submission_resource.findMany()
     * 
     * // Get first 10 Submission_resources
     * const submission_resources = await prisma.submission_resource.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const submission_resourceWithIdOnly = await prisma.submission_resource.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends submission_resourceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, submission_resourceFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$submission_resourcePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Submission_resource.
     * @param {submission_resourceCreateArgs} args - Arguments to create a Submission_resource.
     * @example
     * // Create one Submission_resource
     * const Submission_resource = await prisma.submission_resource.create({
     *   data: {
     *     // ... data to create a Submission_resource
     *   }
     * })
     * 
    **/
    create<T extends submission_resourceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, submission_resourceCreateArgs<ExtArgs>>
    ): Prisma__submission_resourceClient<$Result.GetResult<Prisma.$submission_resourcePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Submission_resources.
     *     @param {submission_resourceCreateManyArgs} args - Arguments to create many Submission_resources.
     *     @example
     *     // Create many Submission_resources
     *     const submission_resource = await prisma.submission_resource.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends submission_resourceCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, submission_resourceCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Submission_resource.
     * @param {submission_resourceDeleteArgs} args - Arguments to delete one Submission_resource.
     * @example
     * // Delete one Submission_resource
     * const Submission_resource = await prisma.submission_resource.delete({
     *   where: {
     *     // ... filter to delete one Submission_resource
     *   }
     * })
     * 
    **/
    delete<T extends submission_resourceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, submission_resourceDeleteArgs<ExtArgs>>
    ): Prisma__submission_resourceClient<$Result.GetResult<Prisma.$submission_resourcePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Submission_resource.
     * @param {submission_resourceUpdateArgs} args - Arguments to update one Submission_resource.
     * @example
     * // Update one Submission_resource
     * const submission_resource = await prisma.submission_resource.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends submission_resourceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, submission_resourceUpdateArgs<ExtArgs>>
    ): Prisma__submission_resourceClient<$Result.GetResult<Prisma.$submission_resourcePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Submission_resources.
     * @param {submission_resourceDeleteManyArgs} args - Arguments to filter Submission_resources to delete.
     * @example
     * // Delete a few Submission_resources
     * const { count } = await prisma.submission_resource.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends submission_resourceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, submission_resourceDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submission_resources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submission_resourceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Submission_resources
     * const submission_resource = await prisma.submission_resource.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends submission_resourceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, submission_resourceUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Submission_resource.
     * @param {submission_resourceUpsertArgs} args - Arguments to update or create a Submission_resource.
     * @example
     * // Update or create a Submission_resource
     * const submission_resource = await prisma.submission_resource.upsert({
     *   create: {
     *     // ... data to create a Submission_resource
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Submission_resource we want to update
     *   }
     * })
    **/
    upsert<T extends submission_resourceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, submission_resourceUpsertArgs<ExtArgs>>
    ): Prisma__submission_resourceClient<$Result.GetResult<Prisma.$submission_resourcePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Submission_resources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submission_resourceCountArgs} args - Arguments to filter Submission_resources to count.
     * @example
     * // Count the number of Submission_resources
     * const count = await prisma.submission_resource.count({
     *   where: {
     *     // ... the filter for the Submission_resources we want to count
     *   }
     * })
    **/
    count<T extends submission_resourceCountArgs>(
      args?: Subset<T, submission_resourceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Submission_resourceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Submission_resource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Submission_resourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Submission_resourceAggregateArgs>(args: Subset<T, Submission_resourceAggregateArgs>): Prisma.PrismaPromise<GetSubmission_resourceAggregateType<T>>

    /**
     * Group by Submission_resource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {submission_resourceGroupByArgs} args - Group by arguments.
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
      T extends submission_resourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: submission_resourceGroupByArgs['orderBy'] }
        : { orderBy?: submission_resourceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, submission_resourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubmission_resourceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the submission_resource model
   */
  readonly fields: submission_resourceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for submission_resource.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__submission_resourceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    submission<T extends submissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, submissionDefaultArgs<ExtArgs>>): Prisma__submissionClient<$Result.GetResult<Prisma.$submissionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the submission_resource model
   */ 
  interface submission_resourceFieldRefs {
    readonly id: FieldRef<"submission_resource", 'Int'>
    readonly url_resource: FieldRef<"submission_resource", 'String'>
    readonly submission_id: FieldRef<"submission_resource", 'Int'>
    readonly title: FieldRef<"submission_resource", 'String'>
  }
    

  // Custom InputTypes

  /**
   * submission_resource findUnique
   */
  export type submission_resourceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submission_resource
     */
    select?: submission_resourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: submission_resourceInclude<ExtArgs> | null
    /**
     * Filter, which submission_resource to fetch.
     */
    where: submission_resourceWhereUniqueInput
  }


  /**
   * submission_resource findUniqueOrThrow
   */
  export type submission_resourceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submission_resource
     */
    select?: submission_resourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: submission_resourceInclude<ExtArgs> | null
    /**
     * Filter, which submission_resource to fetch.
     */
    where: submission_resourceWhereUniqueInput
  }


  /**
   * submission_resource findFirst
   */
  export type submission_resourceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submission_resource
     */
    select?: submission_resourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: submission_resourceInclude<ExtArgs> | null
    /**
     * Filter, which submission_resource to fetch.
     */
    where?: submission_resourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of submission_resources to fetch.
     */
    orderBy?: submission_resourceOrderByWithRelationInput | submission_resourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for submission_resources.
     */
    cursor?: submission_resourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` submission_resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` submission_resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of submission_resources.
     */
    distinct?: Submission_resourceScalarFieldEnum | Submission_resourceScalarFieldEnum[]
  }


  /**
   * submission_resource findFirstOrThrow
   */
  export type submission_resourceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submission_resource
     */
    select?: submission_resourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: submission_resourceInclude<ExtArgs> | null
    /**
     * Filter, which submission_resource to fetch.
     */
    where?: submission_resourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of submission_resources to fetch.
     */
    orderBy?: submission_resourceOrderByWithRelationInput | submission_resourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for submission_resources.
     */
    cursor?: submission_resourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` submission_resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` submission_resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of submission_resources.
     */
    distinct?: Submission_resourceScalarFieldEnum | Submission_resourceScalarFieldEnum[]
  }


  /**
   * submission_resource findMany
   */
  export type submission_resourceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submission_resource
     */
    select?: submission_resourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: submission_resourceInclude<ExtArgs> | null
    /**
     * Filter, which submission_resources to fetch.
     */
    where?: submission_resourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of submission_resources to fetch.
     */
    orderBy?: submission_resourceOrderByWithRelationInput | submission_resourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing submission_resources.
     */
    cursor?: submission_resourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` submission_resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` submission_resources.
     */
    skip?: number
    distinct?: Submission_resourceScalarFieldEnum | Submission_resourceScalarFieldEnum[]
  }


  /**
   * submission_resource create
   */
  export type submission_resourceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submission_resource
     */
    select?: submission_resourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: submission_resourceInclude<ExtArgs> | null
    /**
     * The data needed to create a submission_resource.
     */
    data: XOR<submission_resourceCreateInput, submission_resourceUncheckedCreateInput>
  }


  /**
   * submission_resource createMany
   */
  export type submission_resourceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many submission_resources.
     */
    data: submission_resourceCreateManyInput | submission_resourceCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * submission_resource update
   */
  export type submission_resourceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submission_resource
     */
    select?: submission_resourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: submission_resourceInclude<ExtArgs> | null
    /**
     * The data needed to update a submission_resource.
     */
    data: XOR<submission_resourceUpdateInput, submission_resourceUncheckedUpdateInput>
    /**
     * Choose, which submission_resource to update.
     */
    where: submission_resourceWhereUniqueInput
  }


  /**
   * submission_resource updateMany
   */
  export type submission_resourceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update submission_resources.
     */
    data: XOR<submission_resourceUpdateManyMutationInput, submission_resourceUncheckedUpdateManyInput>
    /**
     * Filter which submission_resources to update
     */
    where?: submission_resourceWhereInput
  }


  /**
   * submission_resource upsert
   */
  export type submission_resourceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submission_resource
     */
    select?: submission_resourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: submission_resourceInclude<ExtArgs> | null
    /**
     * The filter to search for the submission_resource to update in case it exists.
     */
    where: submission_resourceWhereUniqueInput
    /**
     * In case the submission_resource found by the `where` argument doesn't exist, create a new submission_resource with this data.
     */
    create: XOR<submission_resourceCreateInput, submission_resourceUncheckedCreateInput>
    /**
     * In case the submission_resource was found with the provided `where` argument, update it with this data.
     */
    update: XOR<submission_resourceUpdateInput, submission_resourceUncheckedUpdateInput>
  }


  /**
   * submission_resource delete
   */
  export type submission_resourceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submission_resource
     */
    select?: submission_resourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: submission_resourceInclude<ExtArgs> | null
    /**
     * Filter which submission_resource to delete.
     */
    where: submission_resourceWhereUniqueInput
  }


  /**
   * submission_resource deleteMany
   */
  export type submission_resourceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which submission_resources to delete
     */
    where?: submission_resourceWhereInput
  }


  /**
   * submission_resource without action
   */
  export type submission_resourceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the submission_resource
     */
    select?: submission_resourceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: submission_resourceInclude<ExtArgs> | null
  }



  /**
   * Model asistance
   */

  export type AggregateAsistance = {
    _count: AsistanceCountAggregateOutputType | null
    _avg: AsistanceAvgAggregateOutputType | null
    _sum: AsistanceSumAggregateOutputType | null
    _min: AsistanceMinAggregateOutputType | null
    _max: AsistanceMaxAggregateOutputType | null
  }

  export type AsistanceAvgAggregateOutputType = {
    id: number | null
    module_id: number | null
  }

  export type AsistanceSumAggregateOutputType = {
    id: number | null
    module_id: number | null
  }

  export type AsistanceMinAggregateOutputType = {
    id: number | null
    description: string | null
    date: Date | null
    module_id: number | null
  }

  export type AsistanceMaxAggregateOutputType = {
    id: number | null
    description: string | null
    date: Date | null
    module_id: number | null
  }

  export type AsistanceCountAggregateOutputType = {
    id: number
    description: number
    date: number
    module_id: number
    _all: number
  }


  export type AsistanceAvgAggregateInputType = {
    id?: true
    module_id?: true
  }

  export type AsistanceSumAggregateInputType = {
    id?: true
    module_id?: true
  }

  export type AsistanceMinAggregateInputType = {
    id?: true
    description?: true
    date?: true
    module_id?: true
  }

  export type AsistanceMaxAggregateInputType = {
    id?: true
    description?: true
    date?: true
    module_id?: true
  }

  export type AsistanceCountAggregateInputType = {
    id?: true
    description?: true
    date?: true
    module_id?: true
    _all?: true
  }

  export type AsistanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which asistance to aggregate.
     */
    where?: asistanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of asistances to fetch.
     */
    orderBy?: asistanceOrderByWithRelationInput | asistanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: asistanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` asistances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` asistances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned asistances
    **/
    _count?: true | AsistanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AsistanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AsistanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AsistanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AsistanceMaxAggregateInputType
  }

  export type GetAsistanceAggregateType<T extends AsistanceAggregateArgs> = {
        [P in keyof T & keyof AggregateAsistance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsistance[P]>
      : GetScalarType<T[P], AggregateAsistance[P]>
  }




  export type asistanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: asistanceWhereInput
    orderBy?: asistanceOrderByWithAggregationInput | asistanceOrderByWithAggregationInput[]
    by: AsistanceScalarFieldEnum[] | AsistanceScalarFieldEnum
    having?: asistanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AsistanceCountAggregateInputType | true
    _avg?: AsistanceAvgAggregateInputType
    _sum?: AsistanceSumAggregateInputType
    _min?: AsistanceMinAggregateInputType
    _max?: AsistanceMaxAggregateInputType
  }

  export type AsistanceGroupByOutputType = {
    id: number
    description: string
    date: Date
    module_id: number
    _count: AsistanceCountAggregateOutputType | null
    _avg: AsistanceAvgAggregateOutputType | null
    _sum: AsistanceSumAggregateOutputType | null
    _min: AsistanceMinAggregateOutputType | null
    _max: AsistanceMaxAggregateOutputType | null
  }

  type GetAsistanceGroupByPayload<T extends asistanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AsistanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AsistanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AsistanceGroupByOutputType[P]>
            : GetScalarType<T[P], AsistanceGroupByOutputType[P]>
        }
      >
    >


  export type asistanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    date?: boolean
    module_id?: boolean
    registers?: boolean | asistance$registersArgs<ExtArgs>
    module?: boolean | moduleDefaultArgs<ExtArgs>
    _count?: boolean | AsistanceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asistance"]>

  export type asistanceSelectScalar = {
    id?: boolean
    description?: boolean
    date?: boolean
    module_id?: boolean
  }

  export type asistanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registers?: boolean | asistance$registersArgs<ExtArgs>
    module?: boolean | moduleDefaultArgs<ExtArgs>
    _count?: boolean | AsistanceCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $asistancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "asistance"
    objects: {
      registers: Prisma.$asistance_registerPayload<ExtArgs>[]
      module: Prisma.$modulePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      description: string
      date: Date
      module_id: number
    }, ExtArgs["result"]["asistance"]>
    composites: {}
  }


  type asistanceGetPayload<S extends boolean | null | undefined | asistanceDefaultArgs> = $Result.GetResult<Prisma.$asistancePayload, S>

  type asistanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<asistanceFindManyArgs, 'select' | 'include'> & {
      select?: AsistanceCountAggregateInputType | true
    }

  export interface asistanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['asistance'], meta: { name: 'asistance' } }
    /**
     * Find zero or one Asistance that matches the filter.
     * @param {asistanceFindUniqueArgs} args - Arguments to find a Asistance
     * @example
     * // Get one Asistance
     * const asistance = await prisma.asistance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends asistanceFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, asistanceFindUniqueArgs<ExtArgs>>
    ): Prisma__asistanceClient<$Result.GetResult<Prisma.$asistancePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Asistance that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {asistanceFindUniqueOrThrowArgs} args - Arguments to find a Asistance
     * @example
     * // Get one Asistance
     * const asistance = await prisma.asistance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends asistanceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, asistanceFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__asistanceClient<$Result.GetResult<Prisma.$asistancePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Asistance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asistanceFindFirstArgs} args - Arguments to find a Asistance
     * @example
     * // Get one Asistance
     * const asistance = await prisma.asistance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends asistanceFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, asistanceFindFirstArgs<ExtArgs>>
    ): Prisma__asistanceClient<$Result.GetResult<Prisma.$asistancePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Asistance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asistanceFindFirstOrThrowArgs} args - Arguments to find a Asistance
     * @example
     * // Get one Asistance
     * const asistance = await prisma.asistance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends asistanceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, asistanceFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__asistanceClient<$Result.GetResult<Prisma.$asistancePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Asistances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asistanceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Asistances
     * const asistances = await prisma.asistance.findMany()
     * 
     * // Get first 10 Asistances
     * const asistances = await prisma.asistance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const asistanceWithIdOnly = await prisma.asistance.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends asistanceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, asistanceFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$asistancePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Asistance.
     * @param {asistanceCreateArgs} args - Arguments to create a Asistance.
     * @example
     * // Create one Asistance
     * const Asistance = await prisma.asistance.create({
     *   data: {
     *     // ... data to create a Asistance
     *   }
     * })
     * 
    **/
    create<T extends asistanceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, asistanceCreateArgs<ExtArgs>>
    ): Prisma__asistanceClient<$Result.GetResult<Prisma.$asistancePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Asistances.
     *     @param {asistanceCreateManyArgs} args - Arguments to create many Asistances.
     *     @example
     *     // Create many Asistances
     *     const asistance = await prisma.asistance.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends asistanceCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, asistanceCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Asistance.
     * @param {asistanceDeleteArgs} args - Arguments to delete one Asistance.
     * @example
     * // Delete one Asistance
     * const Asistance = await prisma.asistance.delete({
     *   where: {
     *     // ... filter to delete one Asistance
     *   }
     * })
     * 
    **/
    delete<T extends asistanceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, asistanceDeleteArgs<ExtArgs>>
    ): Prisma__asistanceClient<$Result.GetResult<Prisma.$asistancePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Asistance.
     * @param {asistanceUpdateArgs} args - Arguments to update one Asistance.
     * @example
     * // Update one Asistance
     * const asistance = await prisma.asistance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends asistanceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, asistanceUpdateArgs<ExtArgs>>
    ): Prisma__asistanceClient<$Result.GetResult<Prisma.$asistancePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Asistances.
     * @param {asistanceDeleteManyArgs} args - Arguments to filter Asistances to delete.
     * @example
     * // Delete a few Asistances
     * const { count } = await prisma.asistance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends asistanceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, asistanceDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Asistances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asistanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Asistances
     * const asistance = await prisma.asistance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends asistanceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, asistanceUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Asistance.
     * @param {asistanceUpsertArgs} args - Arguments to update or create a Asistance.
     * @example
     * // Update or create a Asistance
     * const asistance = await prisma.asistance.upsert({
     *   create: {
     *     // ... data to create a Asistance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Asistance we want to update
     *   }
     * })
    **/
    upsert<T extends asistanceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, asistanceUpsertArgs<ExtArgs>>
    ): Prisma__asistanceClient<$Result.GetResult<Prisma.$asistancePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Asistances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asistanceCountArgs} args - Arguments to filter Asistances to count.
     * @example
     * // Count the number of Asistances
     * const count = await prisma.asistance.count({
     *   where: {
     *     // ... the filter for the Asistances we want to count
     *   }
     * })
    **/
    count<T extends asistanceCountArgs>(
      args?: Subset<T, asistanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AsistanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Asistance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsistanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AsistanceAggregateArgs>(args: Subset<T, AsistanceAggregateArgs>): Prisma.PrismaPromise<GetAsistanceAggregateType<T>>

    /**
     * Group by Asistance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asistanceGroupByArgs} args - Group by arguments.
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
      T extends asistanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: asistanceGroupByArgs['orderBy'] }
        : { orderBy?: asistanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, asistanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAsistanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the asistance model
   */
  readonly fields: asistanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for asistance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__asistanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    registers<T extends asistance$registersArgs<ExtArgs> = {}>(args?: Subset<T, asistance$registersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$asistance_registerPayload<ExtArgs>, T, 'findMany'> | Null>;

    module<T extends moduleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, moduleDefaultArgs<ExtArgs>>): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the asistance model
   */ 
  interface asistanceFieldRefs {
    readonly id: FieldRef<"asistance", 'Int'>
    readonly description: FieldRef<"asistance", 'String'>
    readonly date: FieldRef<"asistance", 'DateTime'>
    readonly module_id: FieldRef<"asistance", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * asistance findUnique
   */
  export type asistanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistance
     */
    select?: asistanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: asistanceInclude<ExtArgs> | null
    /**
     * Filter, which asistance to fetch.
     */
    where: asistanceWhereUniqueInput
  }


  /**
   * asistance findUniqueOrThrow
   */
  export type asistanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistance
     */
    select?: asistanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: asistanceInclude<ExtArgs> | null
    /**
     * Filter, which asistance to fetch.
     */
    where: asistanceWhereUniqueInput
  }


  /**
   * asistance findFirst
   */
  export type asistanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistance
     */
    select?: asistanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: asistanceInclude<ExtArgs> | null
    /**
     * Filter, which asistance to fetch.
     */
    where?: asistanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of asistances to fetch.
     */
    orderBy?: asistanceOrderByWithRelationInput | asistanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for asistances.
     */
    cursor?: asistanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` asistances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` asistances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of asistances.
     */
    distinct?: AsistanceScalarFieldEnum | AsistanceScalarFieldEnum[]
  }


  /**
   * asistance findFirstOrThrow
   */
  export type asistanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistance
     */
    select?: asistanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: asistanceInclude<ExtArgs> | null
    /**
     * Filter, which asistance to fetch.
     */
    where?: asistanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of asistances to fetch.
     */
    orderBy?: asistanceOrderByWithRelationInput | asistanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for asistances.
     */
    cursor?: asistanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` asistances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` asistances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of asistances.
     */
    distinct?: AsistanceScalarFieldEnum | AsistanceScalarFieldEnum[]
  }


  /**
   * asistance findMany
   */
  export type asistanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistance
     */
    select?: asistanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: asistanceInclude<ExtArgs> | null
    /**
     * Filter, which asistances to fetch.
     */
    where?: asistanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of asistances to fetch.
     */
    orderBy?: asistanceOrderByWithRelationInput | asistanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing asistances.
     */
    cursor?: asistanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` asistances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` asistances.
     */
    skip?: number
    distinct?: AsistanceScalarFieldEnum | AsistanceScalarFieldEnum[]
  }


  /**
   * asistance create
   */
  export type asistanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistance
     */
    select?: asistanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: asistanceInclude<ExtArgs> | null
    /**
     * The data needed to create a asistance.
     */
    data: XOR<asistanceCreateInput, asistanceUncheckedCreateInput>
  }


  /**
   * asistance createMany
   */
  export type asistanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many asistances.
     */
    data: asistanceCreateManyInput | asistanceCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * asistance update
   */
  export type asistanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistance
     */
    select?: asistanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: asistanceInclude<ExtArgs> | null
    /**
     * The data needed to update a asistance.
     */
    data: XOR<asistanceUpdateInput, asistanceUncheckedUpdateInput>
    /**
     * Choose, which asistance to update.
     */
    where: asistanceWhereUniqueInput
  }


  /**
   * asistance updateMany
   */
  export type asistanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update asistances.
     */
    data: XOR<asistanceUpdateManyMutationInput, asistanceUncheckedUpdateManyInput>
    /**
     * Filter which asistances to update
     */
    where?: asistanceWhereInput
  }


  /**
   * asistance upsert
   */
  export type asistanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistance
     */
    select?: asistanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: asistanceInclude<ExtArgs> | null
    /**
     * The filter to search for the asistance to update in case it exists.
     */
    where: asistanceWhereUniqueInput
    /**
     * In case the asistance found by the `where` argument doesn't exist, create a new asistance with this data.
     */
    create: XOR<asistanceCreateInput, asistanceUncheckedCreateInput>
    /**
     * In case the asistance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<asistanceUpdateInput, asistanceUncheckedUpdateInput>
  }


  /**
   * asistance delete
   */
  export type asistanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistance
     */
    select?: asistanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: asistanceInclude<ExtArgs> | null
    /**
     * Filter which asistance to delete.
     */
    where: asistanceWhereUniqueInput
  }


  /**
   * asistance deleteMany
   */
  export type asistanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which asistances to delete
     */
    where?: asistanceWhereInput
  }


  /**
   * asistance.registers
   */
  export type asistance$registersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistance_register
     */
    select?: asistance_registerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: asistance_registerInclude<ExtArgs> | null
    where?: asistance_registerWhereInput
    orderBy?: asistance_registerOrderByWithRelationInput | asistance_registerOrderByWithRelationInput[]
    cursor?: asistance_registerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Asistance_registerScalarFieldEnum | Asistance_registerScalarFieldEnum[]
  }


  /**
   * asistance without action
   */
  export type asistanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistance
     */
    select?: asistanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: asistanceInclude<ExtArgs> | null
  }



  /**
   * Model asistance_register
   */

  export type AggregateAsistance_register = {
    _count: Asistance_registerCountAggregateOutputType | null
    _avg: Asistance_registerAvgAggregateOutputType | null
    _sum: Asistance_registerSumAggregateOutputType | null
    _min: Asistance_registerMinAggregateOutputType | null
    _max: Asistance_registerMaxAggregateOutputType | null
  }

  export type Asistance_registerAvgAggregateOutputType = {
    id: number | null
    student_id: number | null
    asistance_id: number | null
  }

  export type Asistance_registerSumAggregateOutputType = {
    id: number | null
    student_id: number | null
    asistance_id: number | null
  }

  export type Asistance_registerMinAggregateOutputType = {
    id: number | null
    status: $Enums.StatusAsistance | null
    student_id: number | null
    asistance_id: number | null
  }

  export type Asistance_registerMaxAggregateOutputType = {
    id: number | null
    status: $Enums.StatusAsistance | null
    student_id: number | null
    asistance_id: number | null
  }

  export type Asistance_registerCountAggregateOutputType = {
    id: number
    status: number
    student_id: number
    asistance_id: number
    _all: number
  }


  export type Asistance_registerAvgAggregateInputType = {
    id?: true
    student_id?: true
    asistance_id?: true
  }

  export type Asistance_registerSumAggregateInputType = {
    id?: true
    student_id?: true
    asistance_id?: true
  }

  export type Asistance_registerMinAggregateInputType = {
    id?: true
    status?: true
    student_id?: true
    asistance_id?: true
  }

  export type Asistance_registerMaxAggregateInputType = {
    id?: true
    status?: true
    student_id?: true
    asistance_id?: true
  }

  export type Asistance_registerCountAggregateInputType = {
    id?: true
    status?: true
    student_id?: true
    asistance_id?: true
    _all?: true
  }

  export type Asistance_registerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which asistance_register to aggregate.
     */
    where?: asistance_registerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of asistance_registers to fetch.
     */
    orderBy?: asistance_registerOrderByWithRelationInput | asistance_registerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: asistance_registerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` asistance_registers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` asistance_registers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned asistance_registers
    **/
    _count?: true | Asistance_registerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Asistance_registerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Asistance_registerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Asistance_registerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Asistance_registerMaxAggregateInputType
  }

  export type GetAsistance_registerAggregateType<T extends Asistance_registerAggregateArgs> = {
        [P in keyof T & keyof AggregateAsistance_register]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsistance_register[P]>
      : GetScalarType<T[P], AggregateAsistance_register[P]>
  }




  export type asistance_registerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: asistance_registerWhereInput
    orderBy?: asistance_registerOrderByWithAggregationInput | asistance_registerOrderByWithAggregationInput[]
    by: Asistance_registerScalarFieldEnum[] | Asistance_registerScalarFieldEnum
    having?: asistance_registerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Asistance_registerCountAggregateInputType | true
    _avg?: Asistance_registerAvgAggregateInputType
    _sum?: Asistance_registerSumAggregateInputType
    _min?: Asistance_registerMinAggregateInputType
    _max?: Asistance_registerMaxAggregateInputType
  }

  export type Asistance_registerGroupByOutputType = {
    id: number
    status: $Enums.StatusAsistance
    student_id: number
    asistance_id: number
    _count: Asistance_registerCountAggregateOutputType | null
    _avg: Asistance_registerAvgAggregateOutputType | null
    _sum: Asistance_registerSumAggregateOutputType | null
    _min: Asistance_registerMinAggregateOutputType | null
    _max: Asistance_registerMaxAggregateOutputType | null
  }

  type GetAsistance_registerGroupByPayload<T extends asistance_registerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Asistance_registerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Asistance_registerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Asistance_registerGroupByOutputType[P]>
            : GetScalarType<T[P], Asistance_registerGroupByOutputType[P]>
        }
      >
    >


  export type asistance_registerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    student_id?: boolean
    asistance_id?: boolean
    student?: boolean | studentDefaultArgs<ExtArgs>
    asistance?: boolean | asistanceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asistance_register"]>

  export type asistance_registerSelectScalar = {
    id?: boolean
    status?: boolean
    student_id?: boolean
    asistance_id?: boolean
  }

  export type asistance_registerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | studentDefaultArgs<ExtArgs>
    asistance?: boolean | asistanceDefaultArgs<ExtArgs>
  }


  export type $asistance_registerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "asistance_register"
    objects: {
      student: Prisma.$studentPayload<ExtArgs>
      asistance: Prisma.$asistancePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      status: $Enums.StatusAsistance
      student_id: number
      asistance_id: number
    }, ExtArgs["result"]["asistance_register"]>
    composites: {}
  }


  type asistance_registerGetPayload<S extends boolean | null | undefined | asistance_registerDefaultArgs> = $Result.GetResult<Prisma.$asistance_registerPayload, S>

  type asistance_registerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<asistance_registerFindManyArgs, 'select' | 'include'> & {
      select?: Asistance_registerCountAggregateInputType | true
    }

  export interface asistance_registerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['asistance_register'], meta: { name: 'asistance_register' } }
    /**
     * Find zero or one Asistance_register that matches the filter.
     * @param {asistance_registerFindUniqueArgs} args - Arguments to find a Asistance_register
     * @example
     * // Get one Asistance_register
     * const asistance_register = await prisma.asistance_register.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends asistance_registerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, asistance_registerFindUniqueArgs<ExtArgs>>
    ): Prisma__asistance_registerClient<$Result.GetResult<Prisma.$asistance_registerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Asistance_register that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {asistance_registerFindUniqueOrThrowArgs} args - Arguments to find a Asistance_register
     * @example
     * // Get one Asistance_register
     * const asistance_register = await prisma.asistance_register.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends asistance_registerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, asistance_registerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__asistance_registerClient<$Result.GetResult<Prisma.$asistance_registerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Asistance_register that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asistance_registerFindFirstArgs} args - Arguments to find a Asistance_register
     * @example
     * // Get one Asistance_register
     * const asistance_register = await prisma.asistance_register.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends asistance_registerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, asistance_registerFindFirstArgs<ExtArgs>>
    ): Prisma__asistance_registerClient<$Result.GetResult<Prisma.$asistance_registerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Asistance_register that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asistance_registerFindFirstOrThrowArgs} args - Arguments to find a Asistance_register
     * @example
     * // Get one Asistance_register
     * const asistance_register = await prisma.asistance_register.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends asistance_registerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, asistance_registerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__asistance_registerClient<$Result.GetResult<Prisma.$asistance_registerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Asistance_registers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asistance_registerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Asistance_registers
     * const asistance_registers = await prisma.asistance_register.findMany()
     * 
     * // Get first 10 Asistance_registers
     * const asistance_registers = await prisma.asistance_register.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const asistance_registerWithIdOnly = await prisma.asistance_register.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends asistance_registerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, asistance_registerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$asistance_registerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Asistance_register.
     * @param {asistance_registerCreateArgs} args - Arguments to create a Asistance_register.
     * @example
     * // Create one Asistance_register
     * const Asistance_register = await prisma.asistance_register.create({
     *   data: {
     *     // ... data to create a Asistance_register
     *   }
     * })
     * 
    **/
    create<T extends asistance_registerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, asistance_registerCreateArgs<ExtArgs>>
    ): Prisma__asistance_registerClient<$Result.GetResult<Prisma.$asistance_registerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Asistance_registers.
     *     @param {asistance_registerCreateManyArgs} args - Arguments to create many Asistance_registers.
     *     @example
     *     // Create many Asistance_registers
     *     const asistance_register = await prisma.asistance_register.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends asistance_registerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, asistance_registerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Asistance_register.
     * @param {asistance_registerDeleteArgs} args - Arguments to delete one Asistance_register.
     * @example
     * // Delete one Asistance_register
     * const Asistance_register = await prisma.asistance_register.delete({
     *   where: {
     *     // ... filter to delete one Asistance_register
     *   }
     * })
     * 
    **/
    delete<T extends asistance_registerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, asistance_registerDeleteArgs<ExtArgs>>
    ): Prisma__asistance_registerClient<$Result.GetResult<Prisma.$asistance_registerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Asistance_register.
     * @param {asistance_registerUpdateArgs} args - Arguments to update one Asistance_register.
     * @example
     * // Update one Asistance_register
     * const asistance_register = await prisma.asistance_register.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends asistance_registerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, asistance_registerUpdateArgs<ExtArgs>>
    ): Prisma__asistance_registerClient<$Result.GetResult<Prisma.$asistance_registerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Asistance_registers.
     * @param {asistance_registerDeleteManyArgs} args - Arguments to filter Asistance_registers to delete.
     * @example
     * // Delete a few Asistance_registers
     * const { count } = await prisma.asistance_register.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends asistance_registerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, asistance_registerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Asistance_registers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asistance_registerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Asistance_registers
     * const asistance_register = await prisma.asistance_register.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends asistance_registerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, asistance_registerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Asistance_register.
     * @param {asistance_registerUpsertArgs} args - Arguments to update or create a Asistance_register.
     * @example
     * // Update or create a Asistance_register
     * const asistance_register = await prisma.asistance_register.upsert({
     *   create: {
     *     // ... data to create a Asistance_register
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Asistance_register we want to update
     *   }
     * })
    **/
    upsert<T extends asistance_registerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, asistance_registerUpsertArgs<ExtArgs>>
    ): Prisma__asistance_registerClient<$Result.GetResult<Prisma.$asistance_registerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Asistance_registers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asistance_registerCountArgs} args - Arguments to filter Asistance_registers to count.
     * @example
     * // Count the number of Asistance_registers
     * const count = await prisma.asistance_register.count({
     *   where: {
     *     // ... the filter for the Asistance_registers we want to count
     *   }
     * })
    **/
    count<T extends asistance_registerCountArgs>(
      args?: Subset<T, asistance_registerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Asistance_registerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Asistance_register.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Asistance_registerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Asistance_registerAggregateArgs>(args: Subset<T, Asistance_registerAggregateArgs>): Prisma.PrismaPromise<GetAsistance_registerAggregateType<T>>

    /**
     * Group by Asistance_register.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asistance_registerGroupByArgs} args - Group by arguments.
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
      T extends asistance_registerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: asistance_registerGroupByArgs['orderBy'] }
        : { orderBy?: asistance_registerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, asistance_registerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAsistance_registerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the asistance_register model
   */
  readonly fields: asistance_registerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for asistance_register.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__asistance_registerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    student<T extends studentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, studentDefaultArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    asistance<T extends asistanceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, asistanceDefaultArgs<ExtArgs>>): Prisma__asistanceClient<$Result.GetResult<Prisma.$asistancePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the asistance_register model
   */ 
  interface asistance_registerFieldRefs {
    readonly id: FieldRef<"asistance_register", 'Int'>
    readonly status: FieldRef<"asistance_register", 'StatusAsistance'>
    readonly student_id: FieldRef<"asistance_register", 'Int'>
    readonly asistance_id: FieldRef<"asistance_register", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * asistance_register findUnique
   */
  export type asistance_registerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistance_register
     */
    select?: asistance_registerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: asistance_registerInclude<ExtArgs> | null
    /**
     * Filter, which asistance_register to fetch.
     */
    where: asistance_registerWhereUniqueInput
  }


  /**
   * asistance_register findUniqueOrThrow
   */
  export type asistance_registerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistance_register
     */
    select?: asistance_registerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: asistance_registerInclude<ExtArgs> | null
    /**
     * Filter, which asistance_register to fetch.
     */
    where: asistance_registerWhereUniqueInput
  }


  /**
   * asistance_register findFirst
   */
  export type asistance_registerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistance_register
     */
    select?: asistance_registerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: asistance_registerInclude<ExtArgs> | null
    /**
     * Filter, which asistance_register to fetch.
     */
    where?: asistance_registerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of asistance_registers to fetch.
     */
    orderBy?: asistance_registerOrderByWithRelationInput | asistance_registerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for asistance_registers.
     */
    cursor?: asistance_registerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` asistance_registers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` asistance_registers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of asistance_registers.
     */
    distinct?: Asistance_registerScalarFieldEnum | Asistance_registerScalarFieldEnum[]
  }


  /**
   * asistance_register findFirstOrThrow
   */
  export type asistance_registerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistance_register
     */
    select?: asistance_registerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: asistance_registerInclude<ExtArgs> | null
    /**
     * Filter, which asistance_register to fetch.
     */
    where?: asistance_registerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of asistance_registers to fetch.
     */
    orderBy?: asistance_registerOrderByWithRelationInput | asistance_registerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for asistance_registers.
     */
    cursor?: asistance_registerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` asistance_registers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` asistance_registers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of asistance_registers.
     */
    distinct?: Asistance_registerScalarFieldEnum | Asistance_registerScalarFieldEnum[]
  }


  /**
   * asistance_register findMany
   */
  export type asistance_registerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistance_register
     */
    select?: asistance_registerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: asistance_registerInclude<ExtArgs> | null
    /**
     * Filter, which asistance_registers to fetch.
     */
    where?: asistance_registerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of asistance_registers to fetch.
     */
    orderBy?: asistance_registerOrderByWithRelationInput | asistance_registerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing asistance_registers.
     */
    cursor?: asistance_registerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` asistance_registers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` asistance_registers.
     */
    skip?: number
    distinct?: Asistance_registerScalarFieldEnum | Asistance_registerScalarFieldEnum[]
  }


  /**
   * asistance_register create
   */
  export type asistance_registerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistance_register
     */
    select?: asistance_registerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: asistance_registerInclude<ExtArgs> | null
    /**
     * The data needed to create a asistance_register.
     */
    data: XOR<asistance_registerCreateInput, asistance_registerUncheckedCreateInput>
  }


  /**
   * asistance_register createMany
   */
  export type asistance_registerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many asistance_registers.
     */
    data: asistance_registerCreateManyInput | asistance_registerCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * asistance_register update
   */
  export type asistance_registerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistance_register
     */
    select?: asistance_registerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: asistance_registerInclude<ExtArgs> | null
    /**
     * The data needed to update a asistance_register.
     */
    data: XOR<asistance_registerUpdateInput, asistance_registerUncheckedUpdateInput>
    /**
     * Choose, which asistance_register to update.
     */
    where: asistance_registerWhereUniqueInput
  }


  /**
   * asistance_register updateMany
   */
  export type asistance_registerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update asistance_registers.
     */
    data: XOR<asistance_registerUpdateManyMutationInput, asistance_registerUncheckedUpdateManyInput>
    /**
     * Filter which asistance_registers to update
     */
    where?: asistance_registerWhereInput
  }


  /**
   * asistance_register upsert
   */
  export type asistance_registerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistance_register
     */
    select?: asistance_registerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: asistance_registerInclude<ExtArgs> | null
    /**
     * The filter to search for the asistance_register to update in case it exists.
     */
    where: asistance_registerWhereUniqueInput
    /**
     * In case the asistance_register found by the `where` argument doesn't exist, create a new asistance_register with this data.
     */
    create: XOR<asistance_registerCreateInput, asistance_registerUncheckedCreateInput>
    /**
     * In case the asistance_register was found with the provided `where` argument, update it with this data.
     */
    update: XOR<asistance_registerUpdateInput, asistance_registerUncheckedUpdateInput>
  }


  /**
   * asistance_register delete
   */
  export type asistance_registerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistance_register
     */
    select?: asistance_registerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: asistance_registerInclude<ExtArgs> | null
    /**
     * Filter which asistance_register to delete.
     */
    where: asistance_registerWhereUniqueInput
  }


  /**
   * asistance_register deleteMany
   */
  export type asistance_registerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which asistance_registers to delete
     */
    where?: asistance_registerWhereInput
  }


  /**
   * asistance_register without action
   */
  export type asistance_registerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistance_register
     */
    select?: asistance_registerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: asistance_registerInclude<ExtArgs> | null
  }



  /**
   * Model intern_cv
   */

  export type AggregateIntern_cv = {
    _count: Intern_cvCountAggregateOutputType | null
    _avg: Intern_cvAvgAggregateOutputType | null
    _sum: Intern_cvSumAggregateOutputType | null
    _min: Intern_cvMinAggregateOutputType | null
    _max: Intern_cvMaxAggregateOutputType | null
  }

  export type Intern_cvAvgAggregateOutputType = {
    id: number | null
  }

  export type Intern_cvSumAggregateOutputType = {
    id: number | null
  }

  export type Intern_cvMinAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    email: string | null
    cv_url: string | null
  }

  export type Intern_cvMaxAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    email: string | null
    cv_url: string | null
  }

  export type Intern_cvCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    email: number
    cv_url: number
    _all: number
  }


  export type Intern_cvAvgAggregateInputType = {
    id?: true
  }

  export type Intern_cvSumAggregateInputType = {
    id?: true
  }

  export type Intern_cvMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    cv_url?: true
  }

  export type Intern_cvMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    cv_url?: true
  }

  export type Intern_cvCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    cv_url?: true
    _all?: true
  }

  export type Intern_cvAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which intern_cv to aggregate.
     */
    where?: intern_cvWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of intern_cvs to fetch.
     */
    orderBy?: intern_cvOrderByWithRelationInput | intern_cvOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: intern_cvWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` intern_cvs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` intern_cvs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned intern_cvs
    **/
    _count?: true | Intern_cvCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Intern_cvAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Intern_cvSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Intern_cvMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Intern_cvMaxAggregateInputType
  }

  export type GetIntern_cvAggregateType<T extends Intern_cvAggregateArgs> = {
        [P in keyof T & keyof AggregateIntern_cv]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIntern_cv[P]>
      : GetScalarType<T[P], AggregateIntern_cv[P]>
  }




  export type intern_cvGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: intern_cvWhereInput
    orderBy?: intern_cvOrderByWithAggregationInput | intern_cvOrderByWithAggregationInput[]
    by: Intern_cvScalarFieldEnum[] | Intern_cvScalarFieldEnum
    having?: intern_cvScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Intern_cvCountAggregateInputType | true
    _avg?: Intern_cvAvgAggregateInputType
    _sum?: Intern_cvSumAggregateInputType
    _min?: Intern_cvMinAggregateInputType
    _max?: Intern_cvMaxAggregateInputType
  }

  export type Intern_cvGroupByOutputType = {
    id: number
    name: string
    phone: string
    email: string
    cv_url: string
    _count: Intern_cvCountAggregateOutputType | null
    _avg: Intern_cvAvgAggregateOutputType | null
    _sum: Intern_cvSumAggregateOutputType | null
    _min: Intern_cvMinAggregateOutputType | null
    _max: Intern_cvMaxAggregateOutputType | null
  }

  type GetIntern_cvGroupByPayload<T extends intern_cvGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Intern_cvGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Intern_cvGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Intern_cvGroupByOutputType[P]>
            : GetScalarType<T[P], Intern_cvGroupByOutputType[P]>
        }
      >
    >


  export type intern_cvSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    cv_url?: boolean
  }, ExtArgs["result"]["intern_cv"]>

  export type intern_cvSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    cv_url?: boolean
  }


  export type $intern_cvPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "intern_cv"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      phone: string
      email: string
      cv_url: string
    }, ExtArgs["result"]["intern_cv"]>
    composites: {}
  }


  type intern_cvGetPayload<S extends boolean | null | undefined | intern_cvDefaultArgs> = $Result.GetResult<Prisma.$intern_cvPayload, S>

  type intern_cvCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<intern_cvFindManyArgs, 'select' | 'include'> & {
      select?: Intern_cvCountAggregateInputType | true
    }

  export interface intern_cvDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['intern_cv'], meta: { name: 'intern_cv' } }
    /**
     * Find zero or one Intern_cv that matches the filter.
     * @param {intern_cvFindUniqueArgs} args - Arguments to find a Intern_cv
     * @example
     * // Get one Intern_cv
     * const intern_cv = await prisma.intern_cv.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends intern_cvFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, intern_cvFindUniqueArgs<ExtArgs>>
    ): Prisma__intern_cvClient<$Result.GetResult<Prisma.$intern_cvPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Intern_cv that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {intern_cvFindUniqueOrThrowArgs} args - Arguments to find a Intern_cv
     * @example
     * // Get one Intern_cv
     * const intern_cv = await prisma.intern_cv.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends intern_cvFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, intern_cvFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__intern_cvClient<$Result.GetResult<Prisma.$intern_cvPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Intern_cv that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {intern_cvFindFirstArgs} args - Arguments to find a Intern_cv
     * @example
     * // Get one Intern_cv
     * const intern_cv = await prisma.intern_cv.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends intern_cvFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, intern_cvFindFirstArgs<ExtArgs>>
    ): Prisma__intern_cvClient<$Result.GetResult<Prisma.$intern_cvPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Intern_cv that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {intern_cvFindFirstOrThrowArgs} args - Arguments to find a Intern_cv
     * @example
     * // Get one Intern_cv
     * const intern_cv = await prisma.intern_cv.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends intern_cvFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, intern_cvFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__intern_cvClient<$Result.GetResult<Prisma.$intern_cvPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Intern_cvs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {intern_cvFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Intern_cvs
     * const intern_cvs = await prisma.intern_cv.findMany()
     * 
     * // Get first 10 Intern_cvs
     * const intern_cvs = await prisma.intern_cv.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const intern_cvWithIdOnly = await prisma.intern_cv.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends intern_cvFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, intern_cvFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$intern_cvPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Intern_cv.
     * @param {intern_cvCreateArgs} args - Arguments to create a Intern_cv.
     * @example
     * // Create one Intern_cv
     * const Intern_cv = await prisma.intern_cv.create({
     *   data: {
     *     // ... data to create a Intern_cv
     *   }
     * })
     * 
    **/
    create<T extends intern_cvCreateArgs<ExtArgs>>(
      args: SelectSubset<T, intern_cvCreateArgs<ExtArgs>>
    ): Prisma__intern_cvClient<$Result.GetResult<Prisma.$intern_cvPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Intern_cvs.
     *     @param {intern_cvCreateManyArgs} args - Arguments to create many Intern_cvs.
     *     @example
     *     // Create many Intern_cvs
     *     const intern_cv = await prisma.intern_cv.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends intern_cvCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, intern_cvCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Intern_cv.
     * @param {intern_cvDeleteArgs} args - Arguments to delete one Intern_cv.
     * @example
     * // Delete one Intern_cv
     * const Intern_cv = await prisma.intern_cv.delete({
     *   where: {
     *     // ... filter to delete one Intern_cv
     *   }
     * })
     * 
    **/
    delete<T extends intern_cvDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, intern_cvDeleteArgs<ExtArgs>>
    ): Prisma__intern_cvClient<$Result.GetResult<Prisma.$intern_cvPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Intern_cv.
     * @param {intern_cvUpdateArgs} args - Arguments to update one Intern_cv.
     * @example
     * // Update one Intern_cv
     * const intern_cv = await prisma.intern_cv.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends intern_cvUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, intern_cvUpdateArgs<ExtArgs>>
    ): Prisma__intern_cvClient<$Result.GetResult<Prisma.$intern_cvPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Intern_cvs.
     * @param {intern_cvDeleteManyArgs} args - Arguments to filter Intern_cvs to delete.
     * @example
     * // Delete a few Intern_cvs
     * const { count } = await prisma.intern_cv.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends intern_cvDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, intern_cvDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Intern_cvs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {intern_cvUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Intern_cvs
     * const intern_cv = await prisma.intern_cv.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends intern_cvUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, intern_cvUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Intern_cv.
     * @param {intern_cvUpsertArgs} args - Arguments to update or create a Intern_cv.
     * @example
     * // Update or create a Intern_cv
     * const intern_cv = await prisma.intern_cv.upsert({
     *   create: {
     *     // ... data to create a Intern_cv
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Intern_cv we want to update
     *   }
     * })
    **/
    upsert<T extends intern_cvUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, intern_cvUpsertArgs<ExtArgs>>
    ): Prisma__intern_cvClient<$Result.GetResult<Prisma.$intern_cvPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Intern_cvs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {intern_cvCountArgs} args - Arguments to filter Intern_cvs to count.
     * @example
     * // Count the number of Intern_cvs
     * const count = await prisma.intern_cv.count({
     *   where: {
     *     // ... the filter for the Intern_cvs we want to count
     *   }
     * })
    **/
    count<T extends intern_cvCountArgs>(
      args?: Subset<T, intern_cvCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Intern_cvCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Intern_cv.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Intern_cvAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Intern_cvAggregateArgs>(args: Subset<T, Intern_cvAggregateArgs>): Prisma.PrismaPromise<GetIntern_cvAggregateType<T>>

    /**
     * Group by Intern_cv.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {intern_cvGroupByArgs} args - Group by arguments.
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
      T extends intern_cvGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: intern_cvGroupByArgs['orderBy'] }
        : { orderBy?: intern_cvGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, intern_cvGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIntern_cvGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the intern_cv model
   */
  readonly fields: intern_cvFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for intern_cv.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__intern_cvClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the intern_cv model
   */ 
  interface intern_cvFieldRefs {
    readonly id: FieldRef<"intern_cv", 'Int'>
    readonly name: FieldRef<"intern_cv", 'String'>
    readonly phone: FieldRef<"intern_cv", 'String'>
    readonly email: FieldRef<"intern_cv", 'String'>
    readonly cv_url: FieldRef<"intern_cv", 'String'>
  }
    

  // Custom InputTypes

  /**
   * intern_cv findUnique
   */
  export type intern_cvFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intern_cv
     */
    select?: intern_cvSelect<ExtArgs> | null
    /**
     * Filter, which intern_cv to fetch.
     */
    where: intern_cvWhereUniqueInput
  }


  /**
   * intern_cv findUniqueOrThrow
   */
  export type intern_cvFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intern_cv
     */
    select?: intern_cvSelect<ExtArgs> | null
    /**
     * Filter, which intern_cv to fetch.
     */
    where: intern_cvWhereUniqueInput
  }


  /**
   * intern_cv findFirst
   */
  export type intern_cvFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intern_cv
     */
    select?: intern_cvSelect<ExtArgs> | null
    /**
     * Filter, which intern_cv to fetch.
     */
    where?: intern_cvWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of intern_cvs to fetch.
     */
    orderBy?: intern_cvOrderByWithRelationInput | intern_cvOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for intern_cvs.
     */
    cursor?: intern_cvWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` intern_cvs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` intern_cvs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of intern_cvs.
     */
    distinct?: Intern_cvScalarFieldEnum | Intern_cvScalarFieldEnum[]
  }


  /**
   * intern_cv findFirstOrThrow
   */
  export type intern_cvFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intern_cv
     */
    select?: intern_cvSelect<ExtArgs> | null
    /**
     * Filter, which intern_cv to fetch.
     */
    where?: intern_cvWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of intern_cvs to fetch.
     */
    orderBy?: intern_cvOrderByWithRelationInput | intern_cvOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for intern_cvs.
     */
    cursor?: intern_cvWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` intern_cvs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` intern_cvs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of intern_cvs.
     */
    distinct?: Intern_cvScalarFieldEnum | Intern_cvScalarFieldEnum[]
  }


  /**
   * intern_cv findMany
   */
  export type intern_cvFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intern_cv
     */
    select?: intern_cvSelect<ExtArgs> | null
    /**
     * Filter, which intern_cvs to fetch.
     */
    where?: intern_cvWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of intern_cvs to fetch.
     */
    orderBy?: intern_cvOrderByWithRelationInput | intern_cvOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing intern_cvs.
     */
    cursor?: intern_cvWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` intern_cvs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` intern_cvs.
     */
    skip?: number
    distinct?: Intern_cvScalarFieldEnum | Intern_cvScalarFieldEnum[]
  }


  /**
   * intern_cv create
   */
  export type intern_cvCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intern_cv
     */
    select?: intern_cvSelect<ExtArgs> | null
    /**
     * The data needed to create a intern_cv.
     */
    data: XOR<intern_cvCreateInput, intern_cvUncheckedCreateInput>
  }


  /**
   * intern_cv createMany
   */
  export type intern_cvCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many intern_cvs.
     */
    data: intern_cvCreateManyInput | intern_cvCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * intern_cv update
   */
  export type intern_cvUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intern_cv
     */
    select?: intern_cvSelect<ExtArgs> | null
    /**
     * The data needed to update a intern_cv.
     */
    data: XOR<intern_cvUpdateInput, intern_cvUncheckedUpdateInput>
    /**
     * Choose, which intern_cv to update.
     */
    where: intern_cvWhereUniqueInput
  }


  /**
   * intern_cv updateMany
   */
  export type intern_cvUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update intern_cvs.
     */
    data: XOR<intern_cvUpdateManyMutationInput, intern_cvUncheckedUpdateManyInput>
    /**
     * Filter which intern_cvs to update
     */
    where?: intern_cvWhereInput
  }


  /**
   * intern_cv upsert
   */
  export type intern_cvUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intern_cv
     */
    select?: intern_cvSelect<ExtArgs> | null
    /**
     * The filter to search for the intern_cv to update in case it exists.
     */
    where: intern_cvWhereUniqueInput
    /**
     * In case the intern_cv found by the `where` argument doesn't exist, create a new intern_cv with this data.
     */
    create: XOR<intern_cvCreateInput, intern_cvUncheckedCreateInput>
    /**
     * In case the intern_cv was found with the provided `where` argument, update it with this data.
     */
    update: XOR<intern_cvUpdateInput, intern_cvUncheckedUpdateInput>
  }


  /**
   * intern_cv delete
   */
  export type intern_cvDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intern_cv
     */
    select?: intern_cvSelect<ExtArgs> | null
    /**
     * Filter which intern_cv to delete.
     */
    where: intern_cvWhereUniqueInput
  }


  /**
   * intern_cv deleteMany
   */
  export type intern_cvDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which intern_cvs to delete
     */
    where?: intern_cvWhereInput
  }


  /**
   * intern_cv without action
   */
  export type intern_cvDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intern_cv
     */
    select?: intern_cvSelect<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    email: 'email',
    rol: 'rol',
    photo_url: 'photo_url'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    names: 'names',
    last_names: 'last_names',
    ID_card_url: 'ID_card_url',
    study_certificate_url: 'study_certificate_url',
    user_id: 'user_id'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const TeacherScalarFieldEnum: {
    id: 'id',
    names: 'names',
    last_names: 'last_names',
    ID_card_url: 'ID_card_url',
    cv_url: 'cv_url',
    third_level_degree: 'third_level_degree',
    user_id: 'user_id'
  };

  export type TeacherScalarFieldEnum = (typeof TeacherScalarFieldEnum)[keyof typeof TeacherScalarFieldEnum]


  export const InscriptionScalarFieldEnum: {
    id: 'id',
    student_id: 'student_id',
    course_id: 'course_id'
  };

  export type InscriptionScalarFieldEnum = (typeof InscriptionScalarFieldEnum)[keyof typeof InscriptionScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    topic: 'topic',
    content: 'content',
    start_at: 'start_at',
    end_at: 'end_at',
    modality: 'modality',
    objective: 'objective',
    periods: 'periods',
    qualification: 'qualification',
    requirements: 'requirements',
    type: 'type',
    visible: 'visible',
    img_url: 'img_url'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const ModuleScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    hours: 'hours',
    img_url: 'img_url',
    teacher_id: 'teacher_id',
    course_id: 'course_id'
  };

  export type ModuleScalarFieldEnum = (typeof ModuleScalarFieldEnum)[keyof typeof ModuleScalarFieldEnum]


  export const Module_resourceScalarFieldEnum: {
    id: 'id',
    url_resource: 'url_resource',
    module_id: 'module_id',
    title: 'title'
  };

  export type Module_resourceScalarFieldEnum = (typeof Module_resourceScalarFieldEnum)[keyof typeof Module_resourceScalarFieldEnum]


  export const SectionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    module_id: 'module_id'
  };

  export type SectionScalarFieldEnum = (typeof SectionScalarFieldEnum)[keyof typeof SectionScalarFieldEnum]


  export const Section_resourceScalarFieldEnum: {
    id: 'id',
    url_resource: 'url_resource',
    section_id: 'section_id',
    title: 'title'
  };

  export type Section_resourceScalarFieldEnum = (typeof Section_resourceScalarFieldEnum)[keyof typeof Section_resourceScalarFieldEnum]


  export const ActivityScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    time_due: 'time_due',
    section_id: 'section_id'
  };

  export type ActivityScalarFieldEnum = (typeof ActivityScalarFieldEnum)[keyof typeof ActivityScalarFieldEnum]


  export const Activity_resourceScalarFieldEnum: {
    id: 'id',
    url_resource: 'url_resource',
    activity_id: 'activity_id',
    title: 'title'
  };

  export type Activity_resourceScalarFieldEnum = (typeof Activity_resourceScalarFieldEnum)[keyof typeof Activity_resourceScalarFieldEnum]


  export const SubmissionScalarFieldEnum: {
    id: 'id',
    grade: 'grade',
    comment: 'comment',
    state_sub: 'state_sub',
    state_gra: 'state_gra',
    student_id: 'student_id',
    activity_id: 'activity_id'
  };

  export type SubmissionScalarFieldEnum = (typeof SubmissionScalarFieldEnum)[keyof typeof SubmissionScalarFieldEnum]


  export const Submission_resourceScalarFieldEnum: {
    id: 'id',
    url_resource: 'url_resource',
    submission_id: 'submission_id',
    title: 'title'
  };

  export type Submission_resourceScalarFieldEnum = (typeof Submission_resourceScalarFieldEnum)[keyof typeof Submission_resourceScalarFieldEnum]


  export const AsistanceScalarFieldEnum: {
    id: 'id',
    description: 'description',
    date: 'date',
    module_id: 'module_id'
  };

  export type AsistanceScalarFieldEnum = (typeof AsistanceScalarFieldEnum)[keyof typeof AsistanceScalarFieldEnum]


  export const Asistance_registerScalarFieldEnum: {
    id: 'id',
    status: 'status',
    student_id: 'student_id',
    asistance_id: 'asistance_id'
  };

  export type Asistance_registerScalarFieldEnum = (typeof Asistance_registerScalarFieldEnum)[keyof typeof Asistance_registerScalarFieldEnum]


  export const Intern_cvScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    email: 'email',
    cv_url: 'cv_url'
  };

  export type Intern_cvScalarFieldEnum = (typeof Intern_cvScalarFieldEnum)[keyof typeof Intern_cvScalarFieldEnum]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'StatusAsistance'
   */
  export type EnumStatusAsistanceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusAsistance'>
    


  /**
   * Reference to a field of type 'StatusAsistance[]'
   */
  export type ListEnumStatusAsistanceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusAsistance[]'>
    
  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: IntFilter<"user"> | number
    username?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    rol?: EnumRoleFilter<"user"> | $Enums.Role
    photo_url?: StringFilter<"user"> | string
    students?: StudentListRelationFilter
    teacher?: TeacherListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    rol?: SortOrder
    photo_url?: SortOrder
    students?: studentOrderByRelationAggregateInput
    teacher?: teacherOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    password?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    rol?: EnumRoleFilter<"user"> | $Enums.Role
    photo_url?: StringFilter<"user"> | string
    students?: StudentListRelationFilter
    teacher?: TeacherListRelationFilter
  }, "id" | "username">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    rol?: SortOrder
    photo_url?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user"> | number
    username?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    rol?: EnumRoleWithAggregatesFilter<"user"> | $Enums.Role
    photo_url?: StringWithAggregatesFilter<"user"> | string
  }

  export type studentWhereInput = {
    AND?: studentWhereInput | studentWhereInput[]
    OR?: studentWhereInput[]
    NOT?: studentWhereInput | studentWhereInput[]
    id?: IntFilter<"student"> | number
    names?: StringFilter<"student"> | string
    last_names?: StringFilter<"student"> | string
    ID_card_url?: StringFilter<"student"> | string
    study_certificate_url?: StringFilter<"student"> | string
    user_id?: IntFilter<"student"> | number
    activities?: SubmissionListRelationFilter
    inscriptions?: InscriptionListRelationFilter
    asistances_register?: Asistance_registerListRelationFilter
    user?: XOR<UserRelationFilter, userWhereInput>
  }

  export type studentOrderByWithRelationInput = {
    id?: SortOrder
    names?: SortOrder
    last_names?: SortOrder
    ID_card_url?: SortOrder
    study_certificate_url?: SortOrder
    user_id?: SortOrder
    activities?: submissionOrderByRelationAggregateInput
    inscriptions?: inscriptionOrderByRelationAggregateInput
    asistances_register?: asistance_registerOrderByRelationAggregateInput
    user?: userOrderByWithRelationInput
  }

  export type studentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: studentWhereInput | studentWhereInput[]
    OR?: studentWhereInput[]
    NOT?: studentWhereInput | studentWhereInput[]
    names?: StringFilter<"student"> | string
    last_names?: StringFilter<"student"> | string
    ID_card_url?: StringFilter<"student"> | string
    study_certificate_url?: StringFilter<"student"> | string
    user_id?: IntFilter<"student"> | number
    activities?: SubmissionListRelationFilter
    inscriptions?: InscriptionListRelationFilter
    asistances_register?: Asistance_registerListRelationFilter
    user?: XOR<UserRelationFilter, userWhereInput>
  }, "id">

  export type studentOrderByWithAggregationInput = {
    id?: SortOrder
    names?: SortOrder
    last_names?: SortOrder
    ID_card_url?: SortOrder
    study_certificate_url?: SortOrder
    user_id?: SortOrder
    _count?: studentCountOrderByAggregateInput
    _avg?: studentAvgOrderByAggregateInput
    _max?: studentMaxOrderByAggregateInput
    _min?: studentMinOrderByAggregateInput
    _sum?: studentSumOrderByAggregateInput
  }

  export type studentScalarWhereWithAggregatesInput = {
    AND?: studentScalarWhereWithAggregatesInput | studentScalarWhereWithAggregatesInput[]
    OR?: studentScalarWhereWithAggregatesInput[]
    NOT?: studentScalarWhereWithAggregatesInput | studentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"student"> | number
    names?: StringWithAggregatesFilter<"student"> | string
    last_names?: StringWithAggregatesFilter<"student"> | string
    ID_card_url?: StringWithAggregatesFilter<"student"> | string
    study_certificate_url?: StringWithAggregatesFilter<"student"> | string
    user_id?: IntWithAggregatesFilter<"student"> | number
  }

  export type teacherWhereInput = {
    AND?: teacherWhereInput | teacherWhereInput[]
    OR?: teacherWhereInput[]
    NOT?: teacherWhereInput | teacherWhereInput[]
    id?: IntFilter<"teacher"> | number
    names?: StringFilter<"teacher"> | string
    last_names?: StringFilter<"teacher"> | string
    ID_card_url?: StringFilter<"teacher"> | string
    cv_url?: StringFilter<"teacher"> | string
    third_level_degree?: StringFilter<"teacher"> | string
    user_id?: IntFilter<"teacher"> | number
    modules?: ModuleListRelationFilter
    user?: XOR<UserRelationFilter, userWhereInput>
  }

  export type teacherOrderByWithRelationInput = {
    id?: SortOrder
    names?: SortOrder
    last_names?: SortOrder
    ID_card_url?: SortOrder
    cv_url?: SortOrder
    third_level_degree?: SortOrder
    user_id?: SortOrder
    modules?: moduleOrderByRelationAggregateInput
    user?: userOrderByWithRelationInput
  }

  export type teacherWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: teacherWhereInput | teacherWhereInput[]
    OR?: teacherWhereInput[]
    NOT?: teacherWhereInput | teacherWhereInput[]
    names?: StringFilter<"teacher"> | string
    last_names?: StringFilter<"teacher"> | string
    ID_card_url?: StringFilter<"teacher"> | string
    cv_url?: StringFilter<"teacher"> | string
    third_level_degree?: StringFilter<"teacher"> | string
    user_id?: IntFilter<"teacher"> | number
    modules?: ModuleListRelationFilter
    user?: XOR<UserRelationFilter, userWhereInput>
  }, "id">

  export type teacherOrderByWithAggregationInput = {
    id?: SortOrder
    names?: SortOrder
    last_names?: SortOrder
    ID_card_url?: SortOrder
    cv_url?: SortOrder
    third_level_degree?: SortOrder
    user_id?: SortOrder
    _count?: teacherCountOrderByAggregateInput
    _avg?: teacherAvgOrderByAggregateInput
    _max?: teacherMaxOrderByAggregateInput
    _min?: teacherMinOrderByAggregateInput
    _sum?: teacherSumOrderByAggregateInput
  }

  export type teacherScalarWhereWithAggregatesInput = {
    AND?: teacherScalarWhereWithAggregatesInput | teacherScalarWhereWithAggregatesInput[]
    OR?: teacherScalarWhereWithAggregatesInput[]
    NOT?: teacherScalarWhereWithAggregatesInput | teacherScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"teacher"> | number
    names?: StringWithAggregatesFilter<"teacher"> | string
    last_names?: StringWithAggregatesFilter<"teacher"> | string
    ID_card_url?: StringWithAggregatesFilter<"teacher"> | string
    cv_url?: StringWithAggregatesFilter<"teacher"> | string
    third_level_degree?: StringWithAggregatesFilter<"teacher"> | string
    user_id?: IntWithAggregatesFilter<"teacher"> | number
  }

  export type inscriptionWhereInput = {
    AND?: inscriptionWhereInput | inscriptionWhereInput[]
    OR?: inscriptionWhereInput[]
    NOT?: inscriptionWhereInput | inscriptionWhereInput[]
    id?: IntFilter<"inscription"> | number
    student_id?: IntFilter<"inscription"> | number
    course_id?: IntFilter<"inscription"> | number
    student?: XOR<StudentRelationFilter, studentWhereInput>
    course?: XOR<CourseRelationFilter, courseWhereInput>
  }

  export type inscriptionOrderByWithRelationInput = {
    id?: SortOrder
    student_id?: SortOrder
    course_id?: SortOrder
    student?: studentOrderByWithRelationInput
    course?: courseOrderByWithRelationInput
  }

  export type inscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: inscriptionWhereInput | inscriptionWhereInput[]
    OR?: inscriptionWhereInput[]
    NOT?: inscriptionWhereInput | inscriptionWhereInput[]
    student_id?: IntFilter<"inscription"> | number
    course_id?: IntFilter<"inscription"> | number
    student?: XOR<StudentRelationFilter, studentWhereInput>
    course?: XOR<CourseRelationFilter, courseWhereInput>
  }, "id">

  export type inscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    student_id?: SortOrder
    course_id?: SortOrder
    _count?: inscriptionCountOrderByAggregateInput
    _avg?: inscriptionAvgOrderByAggregateInput
    _max?: inscriptionMaxOrderByAggregateInput
    _min?: inscriptionMinOrderByAggregateInput
    _sum?: inscriptionSumOrderByAggregateInput
  }

  export type inscriptionScalarWhereWithAggregatesInput = {
    AND?: inscriptionScalarWhereWithAggregatesInput | inscriptionScalarWhereWithAggregatesInput[]
    OR?: inscriptionScalarWhereWithAggregatesInput[]
    NOT?: inscriptionScalarWhereWithAggregatesInput | inscriptionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"inscription"> | number
    student_id?: IntWithAggregatesFilter<"inscription"> | number
    course_id?: IntWithAggregatesFilter<"inscription"> | number
  }

  export type courseWhereInput = {
    AND?: courseWhereInput | courseWhereInput[]
    OR?: courseWhereInput[]
    NOT?: courseWhereInput | courseWhereInput[]
    id?: IntFilter<"course"> | number
    topic?: StringFilter<"course"> | string
    content?: StringFilter<"course"> | string
    start_at?: DateTimeFilter<"course"> | Date | string
    end_at?: DateTimeFilter<"course"> | Date | string
    modality?: StringFilter<"course"> | string
    objective?: StringFilter<"course"> | string
    periods?: IntFilter<"course"> | number
    qualification?: StringFilter<"course"> | string
    requirements?: StringFilter<"course"> | string
    type?: StringFilter<"course"> | string
    visible?: BoolFilter<"course"> | boolean
    img_url?: StringFilter<"course"> | string
    modules?: ModuleListRelationFilter
    inscriptions?: InscriptionListRelationFilter
  }

  export type courseOrderByWithRelationInput = {
    id?: SortOrder
    topic?: SortOrder
    content?: SortOrder
    start_at?: SortOrder
    end_at?: SortOrder
    modality?: SortOrder
    objective?: SortOrder
    periods?: SortOrder
    qualification?: SortOrder
    requirements?: SortOrder
    type?: SortOrder
    visible?: SortOrder
    img_url?: SortOrder
    modules?: moduleOrderByRelationAggregateInput
    inscriptions?: inscriptionOrderByRelationAggregateInput
  }

  export type courseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: courseWhereInput | courseWhereInput[]
    OR?: courseWhereInput[]
    NOT?: courseWhereInput | courseWhereInput[]
    topic?: StringFilter<"course"> | string
    content?: StringFilter<"course"> | string
    start_at?: DateTimeFilter<"course"> | Date | string
    end_at?: DateTimeFilter<"course"> | Date | string
    modality?: StringFilter<"course"> | string
    objective?: StringFilter<"course"> | string
    periods?: IntFilter<"course"> | number
    qualification?: StringFilter<"course"> | string
    requirements?: StringFilter<"course"> | string
    type?: StringFilter<"course"> | string
    visible?: BoolFilter<"course"> | boolean
    img_url?: StringFilter<"course"> | string
    modules?: ModuleListRelationFilter
    inscriptions?: InscriptionListRelationFilter
  }, "id">

  export type courseOrderByWithAggregationInput = {
    id?: SortOrder
    topic?: SortOrder
    content?: SortOrder
    start_at?: SortOrder
    end_at?: SortOrder
    modality?: SortOrder
    objective?: SortOrder
    periods?: SortOrder
    qualification?: SortOrder
    requirements?: SortOrder
    type?: SortOrder
    visible?: SortOrder
    img_url?: SortOrder
    _count?: courseCountOrderByAggregateInput
    _avg?: courseAvgOrderByAggregateInput
    _max?: courseMaxOrderByAggregateInput
    _min?: courseMinOrderByAggregateInput
    _sum?: courseSumOrderByAggregateInput
  }

  export type courseScalarWhereWithAggregatesInput = {
    AND?: courseScalarWhereWithAggregatesInput | courseScalarWhereWithAggregatesInput[]
    OR?: courseScalarWhereWithAggregatesInput[]
    NOT?: courseScalarWhereWithAggregatesInput | courseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"course"> | number
    topic?: StringWithAggregatesFilter<"course"> | string
    content?: StringWithAggregatesFilter<"course"> | string
    start_at?: DateTimeWithAggregatesFilter<"course"> | Date | string
    end_at?: DateTimeWithAggregatesFilter<"course"> | Date | string
    modality?: StringWithAggregatesFilter<"course"> | string
    objective?: StringWithAggregatesFilter<"course"> | string
    periods?: IntWithAggregatesFilter<"course"> | number
    qualification?: StringWithAggregatesFilter<"course"> | string
    requirements?: StringWithAggregatesFilter<"course"> | string
    type?: StringWithAggregatesFilter<"course"> | string
    visible?: BoolWithAggregatesFilter<"course"> | boolean
    img_url?: StringWithAggregatesFilter<"course"> | string
  }

  export type moduleWhereInput = {
    AND?: moduleWhereInput | moduleWhereInput[]
    OR?: moduleWhereInput[]
    NOT?: moduleWhereInput | moduleWhereInput[]
    id?: IntFilter<"module"> | number
    title?: StringFilter<"module"> | string
    content?: StringFilter<"module"> | string
    hours?: IntFilter<"module"> | number
    img_url?: StringFilter<"module"> | string
    teacher_id?: IntFilter<"module"> | number
    course_id?: IntFilter<"module"> | number
    sections?: SectionListRelationFilter
    resources?: Module_resourceListRelationFilter
    asistances?: AsistanceListRelationFilter
    teacher?: XOR<TeacherRelationFilter, teacherWhereInput>
    course?: XOR<CourseRelationFilter, courseWhereInput>
  }

  export type moduleOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    hours?: SortOrder
    img_url?: SortOrder
    teacher_id?: SortOrder
    course_id?: SortOrder
    sections?: sectionOrderByRelationAggregateInput
    resources?: module_resourceOrderByRelationAggregateInput
    asistances?: asistanceOrderByRelationAggregateInput
    teacher?: teacherOrderByWithRelationInput
    course?: courseOrderByWithRelationInput
  }

  export type moduleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: moduleWhereInput | moduleWhereInput[]
    OR?: moduleWhereInput[]
    NOT?: moduleWhereInput | moduleWhereInput[]
    title?: StringFilter<"module"> | string
    content?: StringFilter<"module"> | string
    hours?: IntFilter<"module"> | number
    img_url?: StringFilter<"module"> | string
    teacher_id?: IntFilter<"module"> | number
    course_id?: IntFilter<"module"> | number
    sections?: SectionListRelationFilter
    resources?: Module_resourceListRelationFilter
    asistances?: AsistanceListRelationFilter
    teacher?: XOR<TeacherRelationFilter, teacherWhereInput>
    course?: XOR<CourseRelationFilter, courseWhereInput>
  }, "id">

  export type moduleOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    hours?: SortOrder
    img_url?: SortOrder
    teacher_id?: SortOrder
    course_id?: SortOrder
    _count?: moduleCountOrderByAggregateInput
    _avg?: moduleAvgOrderByAggregateInput
    _max?: moduleMaxOrderByAggregateInput
    _min?: moduleMinOrderByAggregateInput
    _sum?: moduleSumOrderByAggregateInput
  }

  export type moduleScalarWhereWithAggregatesInput = {
    AND?: moduleScalarWhereWithAggregatesInput | moduleScalarWhereWithAggregatesInput[]
    OR?: moduleScalarWhereWithAggregatesInput[]
    NOT?: moduleScalarWhereWithAggregatesInput | moduleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"module"> | number
    title?: StringWithAggregatesFilter<"module"> | string
    content?: StringWithAggregatesFilter<"module"> | string
    hours?: IntWithAggregatesFilter<"module"> | number
    img_url?: StringWithAggregatesFilter<"module"> | string
    teacher_id?: IntWithAggregatesFilter<"module"> | number
    course_id?: IntWithAggregatesFilter<"module"> | number
  }

  export type module_resourceWhereInput = {
    AND?: module_resourceWhereInput | module_resourceWhereInput[]
    OR?: module_resourceWhereInput[]
    NOT?: module_resourceWhereInput | module_resourceWhereInput[]
    id?: IntFilter<"module_resource"> | number
    url_resource?: StringFilter<"module_resource"> | string
    module_id?: IntFilter<"module_resource"> | number
    title?: StringFilter<"module_resource"> | string
    module?: XOR<ModuleRelationFilter, moduleWhereInput>
  }

  export type module_resourceOrderByWithRelationInput = {
    id?: SortOrder
    url_resource?: SortOrder
    module_id?: SortOrder
    title?: SortOrder
    module?: moduleOrderByWithRelationInput
  }

  export type module_resourceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: module_resourceWhereInput | module_resourceWhereInput[]
    OR?: module_resourceWhereInput[]
    NOT?: module_resourceWhereInput | module_resourceWhereInput[]
    url_resource?: StringFilter<"module_resource"> | string
    module_id?: IntFilter<"module_resource"> | number
    title?: StringFilter<"module_resource"> | string
    module?: XOR<ModuleRelationFilter, moduleWhereInput>
  }, "id">

  export type module_resourceOrderByWithAggregationInput = {
    id?: SortOrder
    url_resource?: SortOrder
    module_id?: SortOrder
    title?: SortOrder
    _count?: module_resourceCountOrderByAggregateInput
    _avg?: module_resourceAvgOrderByAggregateInput
    _max?: module_resourceMaxOrderByAggregateInput
    _min?: module_resourceMinOrderByAggregateInput
    _sum?: module_resourceSumOrderByAggregateInput
  }

  export type module_resourceScalarWhereWithAggregatesInput = {
    AND?: module_resourceScalarWhereWithAggregatesInput | module_resourceScalarWhereWithAggregatesInput[]
    OR?: module_resourceScalarWhereWithAggregatesInput[]
    NOT?: module_resourceScalarWhereWithAggregatesInput | module_resourceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"module_resource"> | number
    url_resource?: StringWithAggregatesFilter<"module_resource"> | string
    module_id?: IntWithAggregatesFilter<"module_resource"> | number
    title?: StringWithAggregatesFilter<"module_resource"> | string
  }

  export type sectionWhereInput = {
    AND?: sectionWhereInput | sectionWhereInput[]
    OR?: sectionWhereInput[]
    NOT?: sectionWhereInput | sectionWhereInput[]
    id?: IntFilter<"section"> | number
    title?: StringFilter<"section"> | string
    content?: StringFilter<"section"> | string
    module_id?: IntFilter<"section"> | number
    activities?: ActivityListRelationFilter
    resources?: Section_resourceListRelationFilter
    module?: XOR<ModuleRelationFilter, moduleWhereInput>
  }

  export type sectionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    module_id?: SortOrder
    activities?: activityOrderByRelationAggregateInput
    resources?: section_resourceOrderByRelationAggregateInput
    module?: moduleOrderByWithRelationInput
  }

  export type sectionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: sectionWhereInput | sectionWhereInput[]
    OR?: sectionWhereInput[]
    NOT?: sectionWhereInput | sectionWhereInput[]
    title?: StringFilter<"section"> | string
    content?: StringFilter<"section"> | string
    module_id?: IntFilter<"section"> | number
    activities?: ActivityListRelationFilter
    resources?: Section_resourceListRelationFilter
    module?: XOR<ModuleRelationFilter, moduleWhereInput>
  }, "id">

  export type sectionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    module_id?: SortOrder
    _count?: sectionCountOrderByAggregateInput
    _avg?: sectionAvgOrderByAggregateInput
    _max?: sectionMaxOrderByAggregateInput
    _min?: sectionMinOrderByAggregateInput
    _sum?: sectionSumOrderByAggregateInput
  }

  export type sectionScalarWhereWithAggregatesInput = {
    AND?: sectionScalarWhereWithAggregatesInput | sectionScalarWhereWithAggregatesInput[]
    OR?: sectionScalarWhereWithAggregatesInput[]
    NOT?: sectionScalarWhereWithAggregatesInput | sectionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"section"> | number
    title?: StringWithAggregatesFilter<"section"> | string
    content?: StringWithAggregatesFilter<"section"> | string
    module_id?: IntWithAggregatesFilter<"section"> | number
  }

  export type section_resourceWhereInput = {
    AND?: section_resourceWhereInput | section_resourceWhereInput[]
    OR?: section_resourceWhereInput[]
    NOT?: section_resourceWhereInput | section_resourceWhereInput[]
    id?: IntFilter<"section_resource"> | number
    url_resource?: StringFilter<"section_resource"> | string
    section_id?: IntFilter<"section_resource"> | number
    title?: StringFilter<"section_resource"> | string
    section?: XOR<SectionRelationFilter, sectionWhereInput>
  }

  export type section_resourceOrderByWithRelationInput = {
    id?: SortOrder
    url_resource?: SortOrder
    section_id?: SortOrder
    title?: SortOrder
    section?: sectionOrderByWithRelationInput
  }

  export type section_resourceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: section_resourceWhereInput | section_resourceWhereInput[]
    OR?: section_resourceWhereInput[]
    NOT?: section_resourceWhereInput | section_resourceWhereInput[]
    url_resource?: StringFilter<"section_resource"> | string
    section_id?: IntFilter<"section_resource"> | number
    title?: StringFilter<"section_resource"> | string
    section?: XOR<SectionRelationFilter, sectionWhereInput>
  }, "id">

  export type section_resourceOrderByWithAggregationInput = {
    id?: SortOrder
    url_resource?: SortOrder
    section_id?: SortOrder
    title?: SortOrder
    _count?: section_resourceCountOrderByAggregateInput
    _avg?: section_resourceAvgOrderByAggregateInput
    _max?: section_resourceMaxOrderByAggregateInput
    _min?: section_resourceMinOrderByAggregateInput
    _sum?: section_resourceSumOrderByAggregateInput
  }

  export type section_resourceScalarWhereWithAggregatesInput = {
    AND?: section_resourceScalarWhereWithAggregatesInput | section_resourceScalarWhereWithAggregatesInput[]
    OR?: section_resourceScalarWhereWithAggregatesInput[]
    NOT?: section_resourceScalarWhereWithAggregatesInput | section_resourceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"section_resource"> | number
    url_resource?: StringWithAggregatesFilter<"section_resource"> | string
    section_id?: IntWithAggregatesFilter<"section_resource"> | number
    title?: StringWithAggregatesFilter<"section_resource"> | string
  }

  export type activityWhereInput = {
    AND?: activityWhereInput | activityWhereInput[]
    OR?: activityWhereInput[]
    NOT?: activityWhereInput | activityWhereInput[]
    id?: IntFilter<"activity"> | number
    title?: StringFilter<"activity"> | string
    content?: StringFilter<"activity"> | string
    time_due?: DateTimeFilter<"activity"> | Date | string
    section_id?: IntFilter<"activity"> | number
    submission?: SubmissionListRelationFilter
    resources?: Activity_resourceListRelationFilter
    section?: XOR<SectionRelationFilter, sectionWhereInput>
  }

  export type activityOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    time_due?: SortOrder
    section_id?: SortOrder
    submission?: submissionOrderByRelationAggregateInput
    resources?: activity_resourceOrderByRelationAggregateInput
    section?: sectionOrderByWithRelationInput
  }

  export type activityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: activityWhereInput | activityWhereInput[]
    OR?: activityWhereInput[]
    NOT?: activityWhereInput | activityWhereInput[]
    title?: StringFilter<"activity"> | string
    content?: StringFilter<"activity"> | string
    time_due?: DateTimeFilter<"activity"> | Date | string
    section_id?: IntFilter<"activity"> | number
    submission?: SubmissionListRelationFilter
    resources?: Activity_resourceListRelationFilter
    section?: XOR<SectionRelationFilter, sectionWhereInput>
  }, "id">

  export type activityOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    time_due?: SortOrder
    section_id?: SortOrder
    _count?: activityCountOrderByAggregateInput
    _avg?: activityAvgOrderByAggregateInput
    _max?: activityMaxOrderByAggregateInput
    _min?: activityMinOrderByAggregateInput
    _sum?: activitySumOrderByAggregateInput
  }

  export type activityScalarWhereWithAggregatesInput = {
    AND?: activityScalarWhereWithAggregatesInput | activityScalarWhereWithAggregatesInput[]
    OR?: activityScalarWhereWithAggregatesInput[]
    NOT?: activityScalarWhereWithAggregatesInput | activityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"activity"> | number
    title?: StringWithAggregatesFilter<"activity"> | string
    content?: StringWithAggregatesFilter<"activity"> | string
    time_due?: DateTimeWithAggregatesFilter<"activity"> | Date | string
    section_id?: IntWithAggregatesFilter<"activity"> | number
  }

  export type activity_resourceWhereInput = {
    AND?: activity_resourceWhereInput | activity_resourceWhereInput[]
    OR?: activity_resourceWhereInput[]
    NOT?: activity_resourceWhereInput | activity_resourceWhereInput[]
    id?: IntFilter<"activity_resource"> | number
    url_resource?: StringFilter<"activity_resource"> | string
    activity_id?: IntFilter<"activity_resource"> | number
    title?: StringFilter<"activity_resource"> | string
    activity?: XOR<ActivityRelationFilter, activityWhereInput>
  }

  export type activity_resourceOrderByWithRelationInput = {
    id?: SortOrder
    url_resource?: SortOrder
    activity_id?: SortOrder
    title?: SortOrder
    activity?: activityOrderByWithRelationInput
  }

  export type activity_resourceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: activity_resourceWhereInput | activity_resourceWhereInput[]
    OR?: activity_resourceWhereInput[]
    NOT?: activity_resourceWhereInput | activity_resourceWhereInput[]
    url_resource?: StringFilter<"activity_resource"> | string
    activity_id?: IntFilter<"activity_resource"> | number
    title?: StringFilter<"activity_resource"> | string
    activity?: XOR<ActivityRelationFilter, activityWhereInput>
  }, "id">

  export type activity_resourceOrderByWithAggregationInput = {
    id?: SortOrder
    url_resource?: SortOrder
    activity_id?: SortOrder
    title?: SortOrder
    _count?: activity_resourceCountOrderByAggregateInput
    _avg?: activity_resourceAvgOrderByAggregateInput
    _max?: activity_resourceMaxOrderByAggregateInput
    _min?: activity_resourceMinOrderByAggregateInput
    _sum?: activity_resourceSumOrderByAggregateInput
  }

  export type activity_resourceScalarWhereWithAggregatesInput = {
    AND?: activity_resourceScalarWhereWithAggregatesInput | activity_resourceScalarWhereWithAggregatesInput[]
    OR?: activity_resourceScalarWhereWithAggregatesInput[]
    NOT?: activity_resourceScalarWhereWithAggregatesInput | activity_resourceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"activity_resource"> | number
    url_resource?: StringWithAggregatesFilter<"activity_resource"> | string
    activity_id?: IntWithAggregatesFilter<"activity_resource"> | number
    title?: StringWithAggregatesFilter<"activity_resource"> | string
  }

  export type submissionWhereInput = {
    AND?: submissionWhereInput | submissionWhereInput[]
    OR?: submissionWhereInput[]
    NOT?: submissionWhereInput | submissionWhereInput[]
    id?: IntFilter<"submission"> | number
    grade?: FloatFilter<"submission"> | number
    comment?: StringFilter<"submission"> | string
    state_sub?: StringFilter<"submission"> | string
    state_gra?: StringFilter<"submission"> | string
    student_id?: IntFilter<"submission"> | number
    activity_id?: IntFilter<"submission"> | number
    resources?: Submission_resourceListRelationFilter
    student?: XOR<StudentRelationFilter, studentWhereInput>
    activity?: XOR<ActivityRelationFilter, activityWhereInput>
  }

  export type submissionOrderByWithRelationInput = {
    id?: SortOrder
    grade?: SortOrder
    comment?: SortOrder
    state_sub?: SortOrder
    state_gra?: SortOrder
    student_id?: SortOrder
    activity_id?: SortOrder
    resources?: submission_resourceOrderByRelationAggregateInput
    student?: studentOrderByWithRelationInput
    activity?: activityOrderByWithRelationInput
  }

  export type submissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: submissionWhereInput | submissionWhereInput[]
    OR?: submissionWhereInput[]
    NOT?: submissionWhereInput | submissionWhereInput[]
    grade?: FloatFilter<"submission"> | number
    comment?: StringFilter<"submission"> | string
    state_sub?: StringFilter<"submission"> | string
    state_gra?: StringFilter<"submission"> | string
    student_id?: IntFilter<"submission"> | number
    activity_id?: IntFilter<"submission"> | number
    resources?: Submission_resourceListRelationFilter
    student?: XOR<StudentRelationFilter, studentWhereInput>
    activity?: XOR<ActivityRelationFilter, activityWhereInput>
  }, "id">

  export type submissionOrderByWithAggregationInput = {
    id?: SortOrder
    grade?: SortOrder
    comment?: SortOrder
    state_sub?: SortOrder
    state_gra?: SortOrder
    student_id?: SortOrder
    activity_id?: SortOrder
    _count?: submissionCountOrderByAggregateInput
    _avg?: submissionAvgOrderByAggregateInput
    _max?: submissionMaxOrderByAggregateInput
    _min?: submissionMinOrderByAggregateInput
    _sum?: submissionSumOrderByAggregateInput
  }

  export type submissionScalarWhereWithAggregatesInput = {
    AND?: submissionScalarWhereWithAggregatesInput | submissionScalarWhereWithAggregatesInput[]
    OR?: submissionScalarWhereWithAggregatesInput[]
    NOT?: submissionScalarWhereWithAggregatesInput | submissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"submission"> | number
    grade?: FloatWithAggregatesFilter<"submission"> | number
    comment?: StringWithAggregatesFilter<"submission"> | string
    state_sub?: StringWithAggregatesFilter<"submission"> | string
    state_gra?: StringWithAggregatesFilter<"submission"> | string
    student_id?: IntWithAggregatesFilter<"submission"> | number
    activity_id?: IntWithAggregatesFilter<"submission"> | number
  }

  export type submission_resourceWhereInput = {
    AND?: submission_resourceWhereInput | submission_resourceWhereInput[]
    OR?: submission_resourceWhereInput[]
    NOT?: submission_resourceWhereInput | submission_resourceWhereInput[]
    id?: IntFilter<"submission_resource"> | number
    url_resource?: StringFilter<"submission_resource"> | string
    submission_id?: IntFilter<"submission_resource"> | number
    title?: StringFilter<"submission_resource"> | string
    submission?: XOR<SubmissionRelationFilter, submissionWhereInput>
  }

  export type submission_resourceOrderByWithRelationInput = {
    id?: SortOrder
    url_resource?: SortOrder
    submission_id?: SortOrder
    title?: SortOrder
    submission?: submissionOrderByWithRelationInput
  }

  export type submission_resourceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: submission_resourceWhereInput | submission_resourceWhereInput[]
    OR?: submission_resourceWhereInput[]
    NOT?: submission_resourceWhereInput | submission_resourceWhereInput[]
    url_resource?: StringFilter<"submission_resource"> | string
    submission_id?: IntFilter<"submission_resource"> | number
    title?: StringFilter<"submission_resource"> | string
    submission?: XOR<SubmissionRelationFilter, submissionWhereInput>
  }, "id">

  export type submission_resourceOrderByWithAggregationInput = {
    id?: SortOrder
    url_resource?: SortOrder
    submission_id?: SortOrder
    title?: SortOrder
    _count?: submission_resourceCountOrderByAggregateInput
    _avg?: submission_resourceAvgOrderByAggregateInput
    _max?: submission_resourceMaxOrderByAggregateInput
    _min?: submission_resourceMinOrderByAggregateInput
    _sum?: submission_resourceSumOrderByAggregateInput
  }

  export type submission_resourceScalarWhereWithAggregatesInput = {
    AND?: submission_resourceScalarWhereWithAggregatesInput | submission_resourceScalarWhereWithAggregatesInput[]
    OR?: submission_resourceScalarWhereWithAggregatesInput[]
    NOT?: submission_resourceScalarWhereWithAggregatesInput | submission_resourceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"submission_resource"> | number
    url_resource?: StringWithAggregatesFilter<"submission_resource"> | string
    submission_id?: IntWithAggregatesFilter<"submission_resource"> | number
    title?: StringWithAggregatesFilter<"submission_resource"> | string
  }

  export type asistanceWhereInput = {
    AND?: asistanceWhereInput | asistanceWhereInput[]
    OR?: asistanceWhereInput[]
    NOT?: asistanceWhereInput | asistanceWhereInput[]
    id?: IntFilter<"asistance"> | number
    description?: StringFilter<"asistance"> | string
    date?: DateTimeFilter<"asistance"> | Date | string
    module_id?: IntFilter<"asistance"> | number
    registers?: Asistance_registerListRelationFilter
    module?: XOR<ModuleRelationFilter, moduleWhereInput>
  }

  export type asistanceOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    date?: SortOrder
    module_id?: SortOrder
    registers?: asistance_registerOrderByRelationAggregateInput
    module?: moduleOrderByWithRelationInput
  }

  export type asistanceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: asistanceWhereInput | asistanceWhereInput[]
    OR?: asistanceWhereInput[]
    NOT?: asistanceWhereInput | asistanceWhereInput[]
    description?: StringFilter<"asistance"> | string
    date?: DateTimeFilter<"asistance"> | Date | string
    module_id?: IntFilter<"asistance"> | number
    registers?: Asistance_registerListRelationFilter
    module?: XOR<ModuleRelationFilter, moduleWhereInput>
  }, "id">

  export type asistanceOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    date?: SortOrder
    module_id?: SortOrder
    _count?: asistanceCountOrderByAggregateInput
    _avg?: asistanceAvgOrderByAggregateInput
    _max?: asistanceMaxOrderByAggregateInput
    _min?: asistanceMinOrderByAggregateInput
    _sum?: asistanceSumOrderByAggregateInput
  }

  export type asistanceScalarWhereWithAggregatesInput = {
    AND?: asistanceScalarWhereWithAggregatesInput | asistanceScalarWhereWithAggregatesInput[]
    OR?: asistanceScalarWhereWithAggregatesInput[]
    NOT?: asistanceScalarWhereWithAggregatesInput | asistanceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"asistance"> | number
    description?: StringWithAggregatesFilter<"asistance"> | string
    date?: DateTimeWithAggregatesFilter<"asistance"> | Date | string
    module_id?: IntWithAggregatesFilter<"asistance"> | number
  }

  export type asistance_registerWhereInput = {
    AND?: asistance_registerWhereInput | asistance_registerWhereInput[]
    OR?: asistance_registerWhereInput[]
    NOT?: asistance_registerWhereInput | asistance_registerWhereInput[]
    id?: IntFilter<"asistance_register"> | number
    status?: EnumStatusAsistanceFilter<"asistance_register"> | $Enums.StatusAsistance
    student_id?: IntFilter<"asistance_register"> | number
    asistance_id?: IntFilter<"asistance_register"> | number
    student?: XOR<StudentRelationFilter, studentWhereInput>
    asistance?: XOR<AsistanceRelationFilter, asistanceWhereInput>
  }

  export type asistance_registerOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    student_id?: SortOrder
    asistance_id?: SortOrder
    student?: studentOrderByWithRelationInput
    asistance?: asistanceOrderByWithRelationInput
  }

  export type asistance_registerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: asistance_registerWhereInput | asistance_registerWhereInput[]
    OR?: asistance_registerWhereInput[]
    NOT?: asistance_registerWhereInput | asistance_registerWhereInput[]
    status?: EnumStatusAsistanceFilter<"asistance_register"> | $Enums.StatusAsistance
    student_id?: IntFilter<"asistance_register"> | number
    asistance_id?: IntFilter<"asistance_register"> | number
    student?: XOR<StudentRelationFilter, studentWhereInput>
    asistance?: XOR<AsistanceRelationFilter, asistanceWhereInput>
  }, "id">

  export type asistance_registerOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    student_id?: SortOrder
    asistance_id?: SortOrder
    _count?: asistance_registerCountOrderByAggregateInput
    _avg?: asistance_registerAvgOrderByAggregateInput
    _max?: asistance_registerMaxOrderByAggregateInput
    _min?: asistance_registerMinOrderByAggregateInput
    _sum?: asistance_registerSumOrderByAggregateInput
  }

  export type asistance_registerScalarWhereWithAggregatesInput = {
    AND?: asistance_registerScalarWhereWithAggregatesInput | asistance_registerScalarWhereWithAggregatesInput[]
    OR?: asistance_registerScalarWhereWithAggregatesInput[]
    NOT?: asistance_registerScalarWhereWithAggregatesInput | asistance_registerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"asistance_register"> | number
    status?: EnumStatusAsistanceWithAggregatesFilter<"asistance_register"> | $Enums.StatusAsistance
    student_id?: IntWithAggregatesFilter<"asistance_register"> | number
    asistance_id?: IntWithAggregatesFilter<"asistance_register"> | number
  }

  export type intern_cvWhereInput = {
    AND?: intern_cvWhereInput | intern_cvWhereInput[]
    OR?: intern_cvWhereInput[]
    NOT?: intern_cvWhereInput | intern_cvWhereInput[]
    id?: IntFilter<"intern_cv"> | number
    name?: StringFilter<"intern_cv"> | string
    phone?: StringFilter<"intern_cv"> | string
    email?: StringFilter<"intern_cv"> | string
    cv_url?: StringFilter<"intern_cv"> | string
  }

  export type intern_cvOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    cv_url?: SortOrder
  }

  export type intern_cvWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: intern_cvWhereInput | intern_cvWhereInput[]
    OR?: intern_cvWhereInput[]
    NOT?: intern_cvWhereInput | intern_cvWhereInput[]
    name?: StringFilter<"intern_cv"> | string
    phone?: StringFilter<"intern_cv"> | string
    email?: StringFilter<"intern_cv"> | string
    cv_url?: StringFilter<"intern_cv"> | string
  }, "id">

  export type intern_cvOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    cv_url?: SortOrder
    _count?: intern_cvCountOrderByAggregateInput
    _avg?: intern_cvAvgOrderByAggregateInput
    _max?: intern_cvMaxOrderByAggregateInput
    _min?: intern_cvMinOrderByAggregateInput
    _sum?: intern_cvSumOrderByAggregateInput
  }

  export type intern_cvScalarWhereWithAggregatesInput = {
    AND?: intern_cvScalarWhereWithAggregatesInput | intern_cvScalarWhereWithAggregatesInput[]
    OR?: intern_cvScalarWhereWithAggregatesInput[]
    NOT?: intern_cvScalarWhereWithAggregatesInput | intern_cvScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"intern_cv"> | number
    name?: StringWithAggregatesFilter<"intern_cv"> | string
    phone?: StringWithAggregatesFilter<"intern_cv"> | string
    email?: StringWithAggregatesFilter<"intern_cv"> | string
    cv_url?: StringWithAggregatesFilter<"intern_cv"> | string
  }

  export type userCreateInput = {
    username: string
    password: string
    email: string
    rol?: $Enums.Role
    photo_url: string
    students?: studentCreateNestedManyWithoutUserInput
    teacher?: teacherCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    email: string
    rol?: $Enums.Role
    photo_url: string
    students?: studentUncheckedCreateNestedManyWithoutUserInput
    teacher?: teacherUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    rol?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    photo_url?: StringFieldUpdateOperationsInput | string
    students?: studentUpdateManyWithoutUserNestedInput
    teacher?: teacherUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    rol?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    photo_url?: StringFieldUpdateOperationsInput | string
    students?: studentUncheckedUpdateManyWithoutUserNestedInput
    teacher?: teacherUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: number
    username: string
    password: string
    email: string
    rol?: $Enums.Role
    photo_url: string
  }

  export type userUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    rol?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    photo_url?: StringFieldUpdateOperationsInput | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    rol?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    photo_url?: StringFieldUpdateOperationsInput | string
  }

  export type studentCreateInput = {
    names: string
    last_names: string
    ID_card_url: string
    study_certificate_url: string
    activities?: submissionCreateNestedManyWithoutStudentInput
    inscriptions?: inscriptionCreateNestedManyWithoutStudentInput
    asistances_register?: asistance_registerCreateNestedManyWithoutStudentInput
    user: userCreateNestedOneWithoutStudentsInput
  }

  export type studentUncheckedCreateInput = {
    id?: number
    names: string
    last_names: string
    ID_card_url: string
    study_certificate_url: string
    user_id: number
    activities?: submissionUncheckedCreateNestedManyWithoutStudentInput
    inscriptions?: inscriptionUncheckedCreateNestedManyWithoutStudentInput
    asistances_register?: asistance_registerUncheckedCreateNestedManyWithoutStudentInput
  }

  export type studentUpdateInput = {
    names?: StringFieldUpdateOperationsInput | string
    last_names?: StringFieldUpdateOperationsInput | string
    ID_card_url?: StringFieldUpdateOperationsInput | string
    study_certificate_url?: StringFieldUpdateOperationsInput | string
    activities?: submissionUpdateManyWithoutStudentNestedInput
    inscriptions?: inscriptionUpdateManyWithoutStudentNestedInput
    asistances_register?: asistance_registerUpdateManyWithoutStudentNestedInput
    user?: userUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type studentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    names?: StringFieldUpdateOperationsInput | string
    last_names?: StringFieldUpdateOperationsInput | string
    ID_card_url?: StringFieldUpdateOperationsInput | string
    study_certificate_url?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    activities?: submissionUncheckedUpdateManyWithoutStudentNestedInput
    inscriptions?: inscriptionUncheckedUpdateManyWithoutStudentNestedInput
    asistances_register?: asistance_registerUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type studentCreateManyInput = {
    id?: number
    names: string
    last_names: string
    ID_card_url: string
    study_certificate_url: string
    user_id: number
  }

  export type studentUpdateManyMutationInput = {
    names?: StringFieldUpdateOperationsInput | string
    last_names?: StringFieldUpdateOperationsInput | string
    ID_card_url?: StringFieldUpdateOperationsInput | string
    study_certificate_url?: StringFieldUpdateOperationsInput | string
  }

  export type studentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    names?: StringFieldUpdateOperationsInput | string
    last_names?: StringFieldUpdateOperationsInput | string
    ID_card_url?: StringFieldUpdateOperationsInput | string
    study_certificate_url?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type teacherCreateInput = {
    names: string
    last_names: string
    ID_card_url: string
    cv_url: string
    third_level_degree: string
    modules?: moduleCreateNestedManyWithoutTeacherInput
    user: userCreateNestedOneWithoutTeacherInput
  }

  export type teacherUncheckedCreateInput = {
    id?: number
    names: string
    last_names: string
    ID_card_url: string
    cv_url: string
    third_level_degree: string
    user_id: number
    modules?: moduleUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type teacherUpdateInput = {
    names?: StringFieldUpdateOperationsInput | string
    last_names?: StringFieldUpdateOperationsInput | string
    ID_card_url?: StringFieldUpdateOperationsInput | string
    cv_url?: StringFieldUpdateOperationsInput | string
    third_level_degree?: StringFieldUpdateOperationsInput | string
    modules?: moduleUpdateManyWithoutTeacherNestedInput
    user?: userUpdateOneRequiredWithoutTeacherNestedInput
  }

  export type teacherUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    names?: StringFieldUpdateOperationsInput | string
    last_names?: StringFieldUpdateOperationsInput | string
    ID_card_url?: StringFieldUpdateOperationsInput | string
    cv_url?: StringFieldUpdateOperationsInput | string
    third_level_degree?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    modules?: moduleUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type teacherCreateManyInput = {
    id?: number
    names: string
    last_names: string
    ID_card_url: string
    cv_url: string
    third_level_degree: string
    user_id: number
  }

  export type teacherUpdateManyMutationInput = {
    names?: StringFieldUpdateOperationsInput | string
    last_names?: StringFieldUpdateOperationsInput | string
    ID_card_url?: StringFieldUpdateOperationsInput | string
    cv_url?: StringFieldUpdateOperationsInput | string
    third_level_degree?: StringFieldUpdateOperationsInput | string
  }

  export type teacherUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    names?: StringFieldUpdateOperationsInput | string
    last_names?: StringFieldUpdateOperationsInput | string
    ID_card_url?: StringFieldUpdateOperationsInput | string
    cv_url?: StringFieldUpdateOperationsInput | string
    third_level_degree?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type inscriptionCreateInput = {
    student: studentCreateNestedOneWithoutInscriptionsInput
    course: courseCreateNestedOneWithoutInscriptionsInput
  }

  export type inscriptionUncheckedCreateInput = {
    id?: number
    student_id: number
    course_id: number
  }

  export type inscriptionUpdateInput = {
    student?: studentUpdateOneRequiredWithoutInscriptionsNestedInput
    course?: courseUpdateOneRequiredWithoutInscriptionsNestedInput
  }

  export type inscriptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    course_id?: IntFieldUpdateOperationsInput | number
  }

  export type inscriptionCreateManyInput = {
    id?: number
    student_id: number
    course_id: number
  }

  export type inscriptionUpdateManyMutationInput = {

  }

  export type inscriptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    course_id?: IntFieldUpdateOperationsInput | number
  }

  export type courseCreateInput = {
    topic: string
    content: string
    start_at: Date | string
    end_at: Date | string
    modality: string
    objective: string
    periods: number
    qualification: string
    requirements: string
    type: string
    visible: boolean
    img_url: string
    modules?: moduleCreateNestedManyWithoutCourseInput
    inscriptions?: inscriptionCreateNestedManyWithoutCourseInput
  }

  export type courseUncheckedCreateInput = {
    id?: number
    topic: string
    content: string
    start_at: Date | string
    end_at: Date | string
    modality: string
    objective: string
    periods: number
    qualification: string
    requirements: string
    type: string
    visible: boolean
    img_url: string
    modules?: moduleUncheckedCreateNestedManyWithoutCourseInput
    inscriptions?: inscriptionUncheckedCreateNestedManyWithoutCourseInput
  }

  export type courseUpdateInput = {
    topic?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modality?: StringFieldUpdateOperationsInput | string
    objective?: StringFieldUpdateOperationsInput | string
    periods?: IntFieldUpdateOperationsInput | number
    qualification?: StringFieldUpdateOperationsInput | string
    requirements?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    visible?: BoolFieldUpdateOperationsInput | boolean
    img_url?: StringFieldUpdateOperationsInput | string
    modules?: moduleUpdateManyWithoutCourseNestedInput
    inscriptions?: inscriptionUpdateManyWithoutCourseNestedInput
  }

  export type courseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    topic?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modality?: StringFieldUpdateOperationsInput | string
    objective?: StringFieldUpdateOperationsInput | string
    periods?: IntFieldUpdateOperationsInput | number
    qualification?: StringFieldUpdateOperationsInput | string
    requirements?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    visible?: BoolFieldUpdateOperationsInput | boolean
    img_url?: StringFieldUpdateOperationsInput | string
    modules?: moduleUncheckedUpdateManyWithoutCourseNestedInput
    inscriptions?: inscriptionUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type courseCreateManyInput = {
    id?: number
    topic: string
    content: string
    start_at: Date | string
    end_at: Date | string
    modality: string
    objective: string
    periods: number
    qualification: string
    requirements: string
    type: string
    visible: boolean
    img_url: string
  }

  export type courseUpdateManyMutationInput = {
    topic?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modality?: StringFieldUpdateOperationsInput | string
    objective?: StringFieldUpdateOperationsInput | string
    periods?: IntFieldUpdateOperationsInput | number
    qualification?: StringFieldUpdateOperationsInput | string
    requirements?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    visible?: BoolFieldUpdateOperationsInput | boolean
    img_url?: StringFieldUpdateOperationsInput | string
  }

  export type courseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    topic?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modality?: StringFieldUpdateOperationsInput | string
    objective?: StringFieldUpdateOperationsInput | string
    periods?: IntFieldUpdateOperationsInput | number
    qualification?: StringFieldUpdateOperationsInput | string
    requirements?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    visible?: BoolFieldUpdateOperationsInput | boolean
    img_url?: StringFieldUpdateOperationsInput | string
  }

  export type moduleCreateInput = {
    title: string
    content: string
    hours: number
    img_url: string
    sections?: sectionCreateNestedManyWithoutModuleInput
    resources?: module_resourceCreateNestedManyWithoutModuleInput
    asistances?: asistanceCreateNestedManyWithoutModuleInput
    teacher: teacherCreateNestedOneWithoutModulesInput
    course: courseCreateNestedOneWithoutModulesInput
  }

  export type moduleUncheckedCreateInput = {
    id?: number
    title: string
    content: string
    hours: number
    img_url: string
    teacher_id: number
    course_id: number
    sections?: sectionUncheckedCreateNestedManyWithoutModuleInput
    resources?: module_resourceUncheckedCreateNestedManyWithoutModuleInput
    asistances?: asistanceUncheckedCreateNestedManyWithoutModuleInput
  }

  export type moduleUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    img_url?: StringFieldUpdateOperationsInput | string
    sections?: sectionUpdateManyWithoutModuleNestedInput
    resources?: module_resourceUpdateManyWithoutModuleNestedInput
    asistances?: asistanceUpdateManyWithoutModuleNestedInput
    teacher?: teacherUpdateOneRequiredWithoutModulesNestedInput
    course?: courseUpdateOneRequiredWithoutModulesNestedInput
  }

  export type moduleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    img_url?: StringFieldUpdateOperationsInput | string
    teacher_id?: IntFieldUpdateOperationsInput | number
    course_id?: IntFieldUpdateOperationsInput | number
    sections?: sectionUncheckedUpdateManyWithoutModuleNestedInput
    resources?: module_resourceUncheckedUpdateManyWithoutModuleNestedInput
    asistances?: asistanceUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type moduleCreateManyInput = {
    id?: number
    title: string
    content: string
    hours: number
    img_url: string
    teacher_id: number
    course_id: number
  }

  export type moduleUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    img_url?: StringFieldUpdateOperationsInput | string
  }

  export type moduleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    img_url?: StringFieldUpdateOperationsInput | string
    teacher_id?: IntFieldUpdateOperationsInput | number
    course_id?: IntFieldUpdateOperationsInput | number
  }

  export type module_resourceCreateInput = {
    url_resource: string
    title: string
    module: moduleCreateNestedOneWithoutResourcesInput
  }

  export type module_resourceUncheckedCreateInput = {
    id?: number
    url_resource: string
    module_id: number
    title: string
  }

  export type module_resourceUpdateInput = {
    url_resource?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    module?: moduleUpdateOneRequiredWithoutResourcesNestedInput
  }

  export type module_resourceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url_resource?: StringFieldUpdateOperationsInput | string
    module_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type module_resourceCreateManyInput = {
    id?: number
    url_resource: string
    module_id: number
    title: string
  }

  export type module_resourceUpdateManyMutationInput = {
    url_resource?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type module_resourceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url_resource?: StringFieldUpdateOperationsInput | string
    module_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type sectionCreateInput = {
    title: string
    content: string
    activities?: activityCreateNestedManyWithoutSectionInput
    resources?: section_resourceCreateNestedManyWithoutSectionInput
    module: moduleCreateNestedOneWithoutSectionsInput
  }

  export type sectionUncheckedCreateInput = {
    id?: number
    title: string
    content: string
    module_id: number
    activities?: activityUncheckedCreateNestedManyWithoutSectionInput
    resources?: section_resourceUncheckedCreateNestedManyWithoutSectionInput
  }

  export type sectionUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    activities?: activityUpdateManyWithoutSectionNestedInput
    resources?: section_resourceUpdateManyWithoutSectionNestedInput
    module?: moduleUpdateOneRequiredWithoutSectionsNestedInput
  }

  export type sectionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    module_id?: IntFieldUpdateOperationsInput | number
    activities?: activityUncheckedUpdateManyWithoutSectionNestedInput
    resources?: section_resourceUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type sectionCreateManyInput = {
    id?: number
    title: string
    content: string
    module_id: number
  }

  export type sectionUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type sectionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    module_id?: IntFieldUpdateOperationsInput | number
  }

  export type section_resourceCreateInput = {
    url_resource: string
    title: string
    section: sectionCreateNestedOneWithoutResourcesInput
  }

  export type section_resourceUncheckedCreateInput = {
    id?: number
    url_resource: string
    section_id: number
    title: string
  }

  export type section_resourceUpdateInput = {
    url_resource?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    section?: sectionUpdateOneRequiredWithoutResourcesNestedInput
  }

  export type section_resourceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url_resource?: StringFieldUpdateOperationsInput | string
    section_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type section_resourceCreateManyInput = {
    id?: number
    url_resource: string
    section_id: number
    title: string
  }

  export type section_resourceUpdateManyMutationInput = {
    url_resource?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type section_resourceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url_resource?: StringFieldUpdateOperationsInput | string
    section_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type activityCreateInput = {
    title: string
    content: string
    time_due: Date | string
    submission?: submissionCreateNestedManyWithoutActivityInput
    resources?: activity_resourceCreateNestedManyWithoutActivityInput
    section: sectionCreateNestedOneWithoutActivitiesInput
  }

  export type activityUncheckedCreateInput = {
    id?: number
    title: string
    content: string
    time_due: Date | string
    section_id: number
    submission?: submissionUncheckedCreateNestedManyWithoutActivityInput
    resources?: activity_resourceUncheckedCreateNestedManyWithoutActivityInput
  }

  export type activityUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    time_due?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: submissionUpdateManyWithoutActivityNestedInput
    resources?: activity_resourceUpdateManyWithoutActivityNestedInput
    section?: sectionUpdateOneRequiredWithoutActivitiesNestedInput
  }

  export type activityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    time_due?: DateTimeFieldUpdateOperationsInput | Date | string
    section_id?: IntFieldUpdateOperationsInput | number
    submission?: submissionUncheckedUpdateManyWithoutActivityNestedInput
    resources?: activity_resourceUncheckedUpdateManyWithoutActivityNestedInput
  }

  export type activityCreateManyInput = {
    id?: number
    title: string
    content: string
    time_due: Date | string
    section_id: number
  }

  export type activityUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    time_due?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type activityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    time_due?: DateTimeFieldUpdateOperationsInput | Date | string
    section_id?: IntFieldUpdateOperationsInput | number
  }

  export type activity_resourceCreateInput = {
    url_resource: string
    title: string
    activity: activityCreateNestedOneWithoutResourcesInput
  }

  export type activity_resourceUncheckedCreateInput = {
    id?: number
    url_resource: string
    activity_id: number
    title: string
  }

  export type activity_resourceUpdateInput = {
    url_resource?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    activity?: activityUpdateOneRequiredWithoutResourcesNestedInput
  }

  export type activity_resourceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url_resource?: StringFieldUpdateOperationsInput | string
    activity_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type activity_resourceCreateManyInput = {
    id?: number
    url_resource: string
    activity_id: number
    title: string
  }

  export type activity_resourceUpdateManyMutationInput = {
    url_resource?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type activity_resourceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url_resource?: StringFieldUpdateOperationsInput | string
    activity_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type submissionCreateInput = {
    grade: number
    comment: string
    state_sub: string
    state_gra: string
    resources?: submission_resourceCreateNestedManyWithoutSubmissionInput
    student: studentCreateNestedOneWithoutActivitiesInput
    activity: activityCreateNestedOneWithoutSubmissionInput
  }

  export type submissionUncheckedCreateInput = {
    id?: number
    grade: number
    comment: string
    state_sub: string
    state_gra: string
    student_id: number
    activity_id: number
    resources?: submission_resourceUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type submissionUpdateInput = {
    grade?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    state_sub?: StringFieldUpdateOperationsInput | string
    state_gra?: StringFieldUpdateOperationsInput | string
    resources?: submission_resourceUpdateManyWithoutSubmissionNestedInput
    student?: studentUpdateOneRequiredWithoutActivitiesNestedInput
    activity?: activityUpdateOneRequiredWithoutSubmissionNestedInput
  }

  export type submissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    grade?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    state_sub?: StringFieldUpdateOperationsInput | string
    state_gra?: StringFieldUpdateOperationsInput | string
    student_id?: IntFieldUpdateOperationsInput | number
    activity_id?: IntFieldUpdateOperationsInput | number
    resources?: submission_resourceUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type submissionCreateManyInput = {
    id?: number
    grade: number
    comment: string
    state_sub: string
    state_gra: string
    student_id: number
    activity_id: number
  }

  export type submissionUpdateManyMutationInput = {
    grade?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    state_sub?: StringFieldUpdateOperationsInput | string
    state_gra?: StringFieldUpdateOperationsInput | string
  }

  export type submissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    grade?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    state_sub?: StringFieldUpdateOperationsInput | string
    state_gra?: StringFieldUpdateOperationsInput | string
    student_id?: IntFieldUpdateOperationsInput | number
    activity_id?: IntFieldUpdateOperationsInput | number
  }

  export type submission_resourceCreateInput = {
    url_resource: string
    title: string
    submission: submissionCreateNestedOneWithoutResourcesInput
  }

  export type submission_resourceUncheckedCreateInput = {
    id?: number
    url_resource: string
    submission_id: number
    title: string
  }

  export type submission_resourceUpdateInput = {
    url_resource?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    submission?: submissionUpdateOneRequiredWithoutResourcesNestedInput
  }

  export type submission_resourceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url_resource?: StringFieldUpdateOperationsInput | string
    submission_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type submission_resourceCreateManyInput = {
    id?: number
    url_resource: string
    submission_id: number
    title: string
  }

  export type submission_resourceUpdateManyMutationInput = {
    url_resource?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type submission_resourceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url_resource?: StringFieldUpdateOperationsInput | string
    submission_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type asistanceCreateInput = {
    description: string
    date: Date | string
    registers?: asistance_registerCreateNestedManyWithoutAsistanceInput
    module: moduleCreateNestedOneWithoutAsistancesInput
  }

  export type asistanceUncheckedCreateInput = {
    id?: number
    description: string
    date: Date | string
    module_id: number
    registers?: asistance_registerUncheckedCreateNestedManyWithoutAsistanceInput
  }

  export type asistanceUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    registers?: asistance_registerUpdateManyWithoutAsistanceNestedInput
    module?: moduleUpdateOneRequiredWithoutAsistancesNestedInput
  }

  export type asistanceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    module_id?: IntFieldUpdateOperationsInput | number
    registers?: asistance_registerUncheckedUpdateManyWithoutAsistanceNestedInput
  }

  export type asistanceCreateManyInput = {
    id?: number
    description: string
    date: Date | string
    module_id: number
  }

  export type asistanceUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type asistanceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    module_id?: IntFieldUpdateOperationsInput | number
  }

  export type asistance_registerCreateInput = {
    status?: $Enums.StatusAsistance
    student: studentCreateNestedOneWithoutAsistances_registerInput
    asistance: asistanceCreateNestedOneWithoutRegistersInput
  }

  export type asistance_registerUncheckedCreateInput = {
    id?: number
    status?: $Enums.StatusAsistance
    student_id: number
    asistance_id: number
  }

  export type asistance_registerUpdateInput = {
    status?: EnumStatusAsistanceFieldUpdateOperationsInput | $Enums.StatusAsistance
    student?: studentUpdateOneRequiredWithoutAsistances_registerNestedInput
    asistance?: asistanceUpdateOneRequiredWithoutRegistersNestedInput
  }

  export type asistance_registerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusAsistanceFieldUpdateOperationsInput | $Enums.StatusAsistance
    student_id?: IntFieldUpdateOperationsInput | number
    asistance_id?: IntFieldUpdateOperationsInput | number
  }

  export type asistance_registerCreateManyInput = {
    id?: number
    status?: $Enums.StatusAsistance
    student_id: number
    asistance_id: number
  }

  export type asistance_registerUpdateManyMutationInput = {
    status?: EnumStatusAsistanceFieldUpdateOperationsInput | $Enums.StatusAsistance
  }

  export type asistance_registerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusAsistanceFieldUpdateOperationsInput | $Enums.StatusAsistance
    student_id?: IntFieldUpdateOperationsInput | number
    asistance_id?: IntFieldUpdateOperationsInput | number
  }

  export type intern_cvCreateInput = {
    name: string
    phone: string
    email: string
    cv_url: string
  }

  export type intern_cvUncheckedCreateInput = {
    id?: number
    name: string
    phone: string
    email: string
    cv_url: string
  }

  export type intern_cvUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cv_url?: StringFieldUpdateOperationsInput | string
  }

  export type intern_cvUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cv_url?: StringFieldUpdateOperationsInput | string
  }

  export type intern_cvCreateManyInput = {
    id?: number
    name: string
    phone: string
    email: string
    cv_url: string
  }

  export type intern_cvUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cv_url?: StringFieldUpdateOperationsInput | string
  }

  export type intern_cvUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cv_url?: StringFieldUpdateOperationsInput | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StudentListRelationFilter = {
    every?: studentWhereInput
    some?: studentWhereInput
    none?: studentWhereInput
  }

  export type TeacherListRelationFilter = {
    every?: teacherWhereInput
    some?: teacherWhereInput
    none?: teacherWhereInput
  }

  export type studentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type teacherOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    rol?: SortOrder
    photo_url?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    rol?: SortOrder
    photo_url?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    rol?: SortOrder
    photo_url?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type SubmissionListRelationFilter = {
    every?: submissionWhereInput
    some?: submissionWhereInput
    none?: submissionWhereInput
  }

  export type InscriptionListRelationFilter = {
    every?: inscriptionWhereInput
    some?: inscriptionWhereInput
    none?: inscriptionWhereInput
  }

  export type Asistance_registerListRelationFilter = {
    every?: asistance_registerWhereInput
    some?: asistance_registerWhereInput
    none?: asistance_registerWhereInput
  }

  export type UserRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type submissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type inscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type asistance_registerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type studentCountOrderByAggregateInput = {
    id?: SortOrder
    names?: SortOrder
    last_names?: SortOrder
    ID_card_url?: SortOrder
    study_certificate_url?: SortOrder
    user_id?: SortOrder
  }

  export type studentAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type studentMaxOrderByAggregateInput = {
    id?: SortOrder
    names?: SortOrder
    last_names?: SortOrder
    ID_card_url?: SortOrder
    study_certificate_url?: SortOrder
    user_id?: SortOrder
  }

  export type studentMinOrderByAggregateInput = {
    id?: SortOrder
    names?: SortOrder
    last_names?: SortOrder
    ID_card_url?: SortOrder
    study_certificate_url?: SortOrder
    user_id?: SortOrder
  }

  export type studentSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type ModuleListRelationFilter = {
    every?: moduleWhereInput
    some?: moduleWhereInput
    none?: moduleWhereInput
  }

  export type moduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type teacherCountOrderByAggregateInput = {
    id?: SortOrder
    names?: SortOrder
    last_names?: SortOrder
    ID_card_url?: SortOrder
    cv_url?: SortOrder
    third_level_degree?: SortOrder
    user_id?: SortOrder
  }

  export type teacherAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type teacherMaxOrderByAggregateInput = {
    id?: SortOrder
    names?: SortOrder
    last_names?: SortOrder
    ID_card_url?: SortOrder
    cv_url?: SortOrder
    third_level_degree?: SortOrder
    user_id?: SortOrder
  }

  export type teacherMinOrderByAggregateInput = {
    id?: SortOrder
    names?: SortOrder
    last_names?: SortOrder
    ID_card_url?: SortOrder
    cv_url?: SortOrder
    third_level_degree?: SortOrder
    user_id?: SortOrder
  }

  export type teacherSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type StudentRelationFilter = {
    is?: studentWhereInput
    isNot?: studentWhereInput
  }

  export type CourseRelationFilter = {
    is?: courseWhereInput
    isNot?: courseWhereInput
  }

  export type inscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    course_id?: SortOrder
  }

  export type inscriptionAvgOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    course_id?: SortOrder
  }

  export type inscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    course_id?: SortOrder
  }

  export type inscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    course_id?: SortOrder
  }

  export type inscriptionSumOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    course_id?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type courseCountOrderByAggregateInput = {
    id?: SortOrder
    topic?: SortOrder
    content?: SortOrder
    start_at?: SortOrder
    end_at?: SortOrder
    modality?: SortOrder
    objective?: SortOrder
    periods?: SortOrder
    qualification?: SortOrder
    requirements?: SortOrder
    type?: SortOrder
    visible?: SortOrder
    img_url?: SortOrder
  }

  export type courseAvgOrderByAggregateInput = {
    id?: SortOrder
    periods?: SortOrder
  }

  export type courseMaxOrderByAggregateInput = {
    id?: SortOrder
    topic?: SortOrder
    content?: SortOrder
    start_at?: SortOrder
    end_at?: SortOrder
    modality?: SortOrder
    objective?: SortOrder
    periods?: SortOrder
    qualification?: SortOrder
    requirements?: SortOrder
    type?: SortOrder
    visible?: SortOrder
    img_url?: SortOrder
  }

  export type courseMinOrderByAggregateInput = {
    id?: SortOrder
    topic?: SortOrder
    content?: SortOrder
    start_at?: SortOrder
    end_at?: SortOrder
    modality?: SortOrder
    objective?: SortOrder
    periods?: SortOrder
    qualification?: SortOrder
    requirements?: SortOrder
    type?: SortOrder
    visible?: SortOrder
    img_url?: SortOrder
  }

  export type courseSumOrderByAggregateInput = {
    id?: SortOrder
    periods?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SectionListRelationFilter = {
    every?: sectionWhereInput
    some?: sectionWhereInput
    none?: sectionWhereInput
  }

  export type Module_resourceListRelationFilter = {
    every?: module_resourceWhereInput
    some?: module_resourceWhereInput
    none?: module_resourceWhereInput
  }

  export type AsistanceListRelationFilter = {
    every?: asistanceWhereInput
    some?: asistanceWhereInput
    none?: asistanceWhereInput
  }

  export type TeacherRelationFilter = {
    is?: teacherWhereInput
    isNot?: teacherWhereInput
  }

  export type sectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type module_resourceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type asistanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type moduleCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    hours?: SortOrder
    img_url?: SortOrder
    teacher_id?: SortOrder
    course_id?: SortOrder
  }

  export type moduleAvgOrderByAggregateInput = {
    id?: SortOrder
    hours?: SortOrder
    teacher_id?: SortOrder
    course_id?: SortOrder
  }

  export type moduleMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    hours?: SortOrder
    img_url?: SortOrder
    teacher_id?: SortOrder
    course_id?: SortOrder
  }

  export type moduleMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    hours?: SortOrder
    img_url?: SortOrder
    teacher_id?: SortOrder
    course_id?: SortOrder
  }

  export type moduleSumOrderByAggregateInput = {
    id?: SortOrder
    hours?: SortOrder
    teacher_id?: SortOrder
    course_id?: SortOrder
  }

  export type ModuleRelationFilter = {
    is?: moduleWhereInput
    isNot?: moduleWhereInput
  }

  export type module_resourceCountOrderByAggregateInput = {
    id?: SortOrder
    url_resource?: SortOrder
    module_id?: SortOrder
    title?: SortOrder
  }

  export type module_resourceAvgOrderByAggregateInput = {
    id?: SortOrder
    module_id?: SortOrder
  }

  export type module_resourceMaxOrderByAggregateInput = {
    id?: SortOrder
    url_resource?: SortOrder
    module_id?: SortOrder
    title?: SortOrder
  }

  export type module_resourceMinOrderByAggregateInput = {
    id?: SortOrder
    url_resource?: SortOrder
    module_id?: SortOrder
    title?: SortOrder
  }

  export type module_resourceSumOrderByAggregateInput = {
    id?: SortOrder
    module_id?: SortOrder
  }

  export type ActivityListRelationFilter = {
    every?: activityWhereInput
    some?: activityWhereInput
    none?: activityWhereInput
  }

  export type Section_resourceListRelationFilter = {
    every?: section_resourceWhereInput
    some?: section_resourceWhereInput
    none?: section_resourceWhereInput
  }

  export type activityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type section_resourceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type sectionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    module_id?: SortOrder
  }

  export type sectionAvgOrderByAggregateInput = {
    id?: SortOrder
    module_id?: SortOrder
  }

  export type sectionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    module_id?: SortOrder
  }

  export type sectionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    module_id?: SortOrder
  }

  export type sectionSumOrderByAggregateInput = {
    id?: SortOrder
    module_id?: SortOrder
  }

  export type SectionRelationFilter = {
    is?: sectionWhereInput
    isNot?: sectionWhereInput
  }

  export type section_resourceCountOrderByAggregateInput = {
    id?: SortOrder
    url_resource?: SortOrder
    section_id?: SortOrder
    title?: SortOrder
  }

  export type section_resourceAvgOrderByAggregateInput = {
    id?: SortOrder
    section_id?: SortOrder
  }

  export type section_resourceMaxOrderByAggregateInput = {
    id?: SortOrder
    url_resource?: SortOrder
    section_id?: SortOrder
    title?: SortOrder
  }

  export type section_resourceMinOrderByAggregateInput = {
    id?: SortOrder
    url_resource?: SortOrder
    section_id?: SortOrder
    title?: SortOrder
  }

  export type section_resourceSumOrderByAggregateInput = {
    id?: SortOrder
    section_id?: SortOrder
  }

  export type Activity_resourceListRelationFilter = {
    every?: activity_resourceWhereInput
    some?: activity_resourceWhereInput
    none?: activity_resourceWhereInput
  }

  export type activity_resourceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type activityCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    time_due?: SortOrder
    section_id?: SortOrder
  }

  export type activityAvgOrderByAggregateInput = {
    id?: SortOrder
    section_id?: SortOrder
  }

  export type activityMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    time_due?: SortOrder
    section_id?: SortOrder
  }

  export type activityMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    time_due?: SortOrder
    section_id?: SortOrder
  }

  export type activitySumOrderByAggregateInput = {
    id?: SortOrder
    section_id?: SortOrder
  }

  export type ActivityRelationFilter = {
    is?: activityWhereInput
    isNot?: activityWhereInput
  }

  export type activity_resourceCountOrderByAggregateInput = {
    id?: SortOrder
    url_resource?: SortOrder
    activity_id?: SortOrder
    title?: SortOrder
  }

  export type activity_resourceAvgOrderByAggregateInput = {
    id?: SortOrder
    activity_id?: SortOrder
  }

  export type activity_resourceMaxOrderByAggregateInput = {
    id?: SortOrder
    url_resource?: SortOrder
    activity_id?: SortOrder
    title?: SortOrder
  }

  export type activity_resourceMinOrderByAggregateInput = {
    id?: SortOrder
    url_resource?: SortOrder
    activity_id?: SortOrder
    title?: SortOrder
  }

  export type activity_resourceSumOrderByAggregateInput = {
    id?: SortOrder
    activity_id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type Submission_resourceListRelationFilter = {
    every?: submission_resourceWhereInput
    some?: submission_resourceWhereInput
    none?: submission_resourceWhereInput
  }

  export type submission_resourceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type submissionCountOrderByAggregateInput = {
    id?: SortOrder
    grade?: SortOrder
    comment?: SortOrder
    state_sub?: SortOrder
    state_gra?: SortOrder
    student_id?: SortOrder
    activity_id?: SortOrder
  }

  export type submissionAvgOrderByAggregateInput = {
    id?: SortOrder
    grade?: SortOrder
    student_id?: SortOrder
    activity_id?: SortOrder
  }

  export type submissionMaxOrderByAggregateInput = {
    id?: SortOrder
    grade?: SortOrder
    comment?: SortOrder
    state_sub?: SortOrder
    state_gra?: SortOrder
    student_id?: SortOrder
    activity_id?: SortOrder
  }

  export type submissionMinOrderByAggregateInput = {
    id?: SortOrder
    grade?: SortOrder
    comment?: SortOrder
    state_sub?: SortOrder
    state_gra?: SortOrder
    student_id?: SortOrder
    activity_id?: SortOrder
  }

  export type submissionSumOrderByAggregateInput = {
    id?: SortOrder
    grade?: SortOrder
    student_id?: SortOrder
    activity_id?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type SubmissionRelationFilter = {
    is?: submissionWhereInput
    isNot?: submissionWhereInput
  }

  export type submission_resourceCountOrderByAggregateInput = {
    id?: SortOrder
    url_resource?: SortOrder
    submission_id?: SortOrder
    title?: SortOrder
  }

  export type submission_resourceAvgOrderByAggregateInput = {
    id?: SortOrder
    submission_id?: SortOrder
  }

  export type submission_resourceMaxOrderByAggregateInput = {
    id?: SortOrder
    url_resource?: SortOrder
    submission_id?: SortOrder
    title?: SortOrder
  }

  export type submission_resourceMinOrderByAggregateInput = {
    id?: SortOrder
    url_resource?: SortOrder
    submission_id?: SortOrder
    title?: SortOrder
  }

  export type submission_resourceSumOrderByAggregateInput = {
    id?: SortOrder
    submission_id?: SortOrder
  }

  export type asistanceCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    date?: SortOrder
    module_id?: SortOrder
  }

  export type asistanceAvgOrderByAggregateInput = {
    id?: SortOrder
    module_id?: SortOrder
  }

  export type asistanceMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    date?: SortOrder
    module_id?: SortOrder
  }

  export type asistanceMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    date?: SortOrder
    module_id?: SortOrder
  }

  export type asistanceSumOrderByAggregateInput = {
    id?: SortOrder
    module_id?: SortOrder
  }

  export type EnumStatusAsistanceFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusAsistance | EnumStatusAsistanceFieldRefInput<$PrismaModel>
    in?: $Enums.StatusAsistance[] | ListEnumStatusAsistanceFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusAsistance[] | ListEnumStatusAsistanceFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusAsistanceFilter<$PrismaModel> | $Enums.StatusAsistance
  }

  export type AsistanceRelationFilter = {
    is?: asistanceWhereInput
    isNot?: asistanceWhereInput
  }

  export type asistance_registerCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    student_id?: SortOrder
    asistance_id?: SortOrder
  }

  export type asistance_registerAvgOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    asistance_id?: SortOrder
  }

  export type asistance_registerMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    student_id?: SortOrder
    asistance_id?: SortOrder
  }

  export type asistance_registerMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    student_id?: SortOrder
    asistance_id?: SortOrder
  }

  export type asistance_registerSumOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    asistance_id?: SortOrder
  }

  export type EnumStatusAsistanceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusAsistance | EnumStatusAsistanceFieldRefInput<$PrismaModel>
    in?: $Enums.StatusAsistance[] | ListEnumStatusAsistanceFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusAsistance[] | ListEnumStatusAsistanceFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusAsistanceWithAggregatesFilter<$PrismaModel> | $Enums.StatusAsistance
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusAsistanceFilter<$PrismaModel>
    _max?: NestedEnumStatusAsistanceFilter<$PrismaModel>
  }

  export type intern_cvCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    cv_url?: SortOrder
  }

  export type intern_cvAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type intern_cvMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    cv_url?: SortOrder
  }

  export type intern_cvMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    cv_url?: SortOrder
  }

  export type intern_cvSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type studentCreateNestedManyWithoutUserInput = {
    create?: XOR<studentCreateWithoutUserInput, studentUncheckedCreateWithoutUserInput> | studentCreateWithoutUserInput[] | studentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: studentCreateOrConnectWithoutUserInput | studentCreateOrConnectWithoutUserInput[]
    createMany?: studentCreateManyUserInputEnvelope
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[]
  }

  export type teacherCreateNestedManyWithoutUserInput = {
    create?: XOR<teacherCreateWithoutUserInput, teacherUncheckedCreateWithoutUserInput> | teacherCreateWithoutUserInput[] | teacherUncheckedCreateWithoutUserInput[]
    connectOrCreate?: teacherCreateOrConnectWithoutUserInput | teacherCreateOrConnectWithoutUserInput[]
    createMany?: teacherCreateManyUserInputEnvelope
    connect?: teacherWhereUniqueInput | teacherWhereUniqueInput[]
  }

  export type studentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<studentCreateWithoutUserInput, studentUncheckedCreateWithoutUserInput> | studentCreateWithoutUserInput[] | studentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: studentCreateOrConnectWithoutUserInput | studentCreateOrConnectWithoutUserInput[]
    createMany?: studentCreateManyUserInputEnvelope
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[]
  }

  export type teacherUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<teacherCreateWithoutUserInput, teacherUncheckedCreateWithoutUserInput> | teacherCreateWithoutUserInput[] | teacherUncheckedCreateWithoutUserInput[]
    connectOrCreate?: teacherCreateOrConnectWithoutUserInput | teacherCreateOrConnectWithoutUserInput[]
    createMany?: teacherCreateManyUserInputEnvelope
    connect?: teacherWhereUniqueInput | teacherWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type studentUpdateManyWithoutUserNestedInput = {
    create?: XOR<studentCreateWithoutUserInput, studentUncheckedCreateWithoutUserInput> | studentCreateWithoutUserInput[] | studentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: studentCreateOrConnectWithoutUserInput | studentCreateOrConnectWithoutUserInput[]
    upsert?: studentUpsertWithWhereUniqueWithoutUserInput | studentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: studentCreateManyUserInputEnvelope
    set?: studentWhereUniqueInput | studentWhereUniqueInput[]
    disconnect?: studentWhereUniqueInput | studentWhereUniqueInput[]
    delete?: studentWhereUniqueInput | studentWhereUniqueInput[]
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[]
    update?: studentUpdateWithWhereUniqueWithoutUserInput | studentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: studentUpdateManyWithWhereWithoutUserInput | studentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: studentScalarWhereInput | studentScalarWhereInput[]
  }

  export type teacherUpdateManyWithoutUserNestedInput = {
    create?: XOR<teacherCreateWithoutUserInput, teacherUncheckedCreateWithoutUserInput> | teacherCreateWithoutUserInput[] | teacherUncheckedCreateWithoutUserInput[]
    connectOrCreate?: teacherCreateOrConnectWithoutUserInput | teacherCreateOrConnectWithoutUserInput[]
    upsert?: teacherUpsertWithWhereUniqueWithoutUserInput | teacherUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: teacherCreateManyUserInputEnvelope
    set?: teacherWhereUniqueInput | teacherWhereUniqueInput[]
    disconnect?: teacherWhereUniqueInput | teacherWhereUniqueInput[]
    delete?: teacherWhereUniqueInput | teacherWhereUniqueInput[]
    connect?: teacherWhereUniqueInput | teacherWhereUniqueInput[]
    update?: teacherUpdateWithWhereUniqueWithoutUserInput | teacherUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: teacherUpdateManyWithWhereWithoutUserInput | teacherUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: teacherScalarWhereInput | teacherScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type studentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<studentCreateWithoutUserInput, studentUncheckedCreateWithoutUserInput> | studentCreateWithoutUserInput[] | studentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: studentCreateOrConnectWithoutUserInput | studentCreateOrConnectWithoutUserInput[]
    upsert?: studentUpsertWithWhereUniqueWithoutUserInput | studentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: studentCreateManyUserInputEnvelope
    set?: studentWhereUniqueInput | studentWhereUniqueInput[]
    disconnect?: studentWhereUniqueInput | studentWhereUniqueInput[]
    delete?: studentWhereUniqueInput | studentWhereUniqueInput[]
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[]
    update?: studentUpdateWithWhereUniqueWithoutUserInput | studentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: studentUpdateManyWithWhereWithoutUserInput | studentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: studentScalarWhereInput | studentScalarWhereInput[]
  }

  export type teacherUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<teacherCreateWithoutUserInput, teacherUncheckedCreateWithoutUserInput> | teacherCreateWithoutUserInput[] | teacherUncheckedCreateWithoutUserInput[]
    connectOrCreate?: teacherCreateOrConnectWithoutUserInput | teacherCreateOrConnectWithoutUserInput[]
    upsert?: teacherUpsertWithWhereUniqueWithoutUserInput | teacherUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: teacherCreateManyUserInputEnvelope
    set?: teacherWhereUniqueInput | teacherWhereUniqueInput[]
    disconnect?: teacherWhereUniqueInput | teacherWhereUniqueInput[]
    delete?: teacherWhereUniqueInput | teacherWhereUniqueInput[]
    connect?: teacherWhereUniqueInput | teacherWhereUniqueInput[]
    update?: teacherUpdateWithWhereUniqueWithoutUserInput | teacherUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: teacherUpdateManyWithWhereWithoutUserInput | teacherUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: teacherScalarWhereInput | teacherScalarWhereInput[]
  }

  export type submissionCreateNestedManyWithoutStudentInput = {
    create?: XOR<submissionCreateWithoutStudentInput, submissionUncheckedCreateWithoutStudentInput> | submissionCreateWithoutStudentInput[] | submissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: submissionCreateOrConnectWithoutStudentInput | submissionCreateOrConnectWithoutStudentInput[]
    createMany?: submissionCreateManyStudentInputEnvelope
    connect?: submissionWhereUniqueInput | submissionWhereUniqueInput[]
  }

  export type inscriptionCreateNestedManyWithoutStudentInput = {
    create?: XOR<inscriptionCreateWithoutStudentInput, inscriptionUncheckedCreateWithoutStudentInput> | inscriptionCreateWithoutStudentInput[] | inscriptionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: inscriptionCreateOrConnectWithoutStudentInput | inscriptionCreateOrConnectWithoutStudentInput[]
    createMany?: inscriptionCreateManyStudentInputEnvelope
    connect?: inscriptionWhereUniqueInput | inscriptionWhereUniqueInput[]
  }

  export type asistance_registerCreateNestedManyWithoutStudentInput = {
    create?: XOR<asistance_registerCreateWithoutStudentInput, asistance_registerUncheckedCreateWithoutStudentInput> | asistance_registerCreateWithoutStudentInput[] | asistance_registerUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: asistance_registerCreateOrConnectWithoutStudentInput | asistance_registerCreateOrConnectWithoutStudentInput[]
    createMany?: asistance_registerCreateManyStudentInputEnvelope
    connect?: asistance_registerWhereUniqueInput | asistance_registerWhereUniqueInput[]
  }

  export type userCreateNestedOneWithoutStudentsInput = {
    create?: XOR<userCreateWithoutStudentsInput, userUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: userCreateOrConnectWithoutStudentsInput
    connect?: userWhereUniqueInput
  }

  export type submissionUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<submissionCreateWithoutStudentInput, submissionUncheckedCreateWithoutStudentInput> | submissionCreateWithoutStudentInput[] | submissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: submissionCreateOrConnectWithoutStudentInput | submissionCreateOrConnectWithoutStudentInput[]
    createMany?: submissionCreateManyStudentInputEnvelope
    connect?: submissionWhereUniqueInput | submissionWhereUniqueInput[]
  }

  export type inscriptionUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<inscriptionCreateWithoutStudentInput, inscriptionUncheckedCreateWithoutStudentInput> | inscriptionCreateWithoutStudentInput[] | inscriptionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: inscriptionCreateOrConnectWithoutStudentInput | inscriptionCreateOrConnectWithoutStudentInput[]
    createMany?: inscriptionCreateManyStudentInputEnvelope
    connect?: inscriptionWhereUniqueInput | inscriptionWhereUniqueInput[]
  }

  export type asistance_registerUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<asistance_registerCreateWithoutStudentInput, asistance_registerUncheckedCreateWithoutStudentInput> | asistance_registerCreateWithoutStudentInput[] | asistance_registerUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: asistance_registerCreateOrConnectWithoutStudentInput | asistance_registerCreateOrConnectWithoutStudentInput[]
    createMany?: asistance_registerCreateManyStudentInputEnvelope
    connect?: asistance_registerWhereUniqueInput | asistance_registerWhereUniqueInput[]
  }

  export type submissionUpdateManyWithoutStudentNestedInput = {
    create?: XOR<submissionCreateWithoutStudentInput, submissionUncheckedCreateWithoutStudentInput> | submissionCreateWithoutStudentInput[] | submissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: submissionCreateOrConnectWithoutStudentInput | submissionCreateOrConnectWithoutStudentInput[]
    upsert?: submissionUpsertWithWhereUniqueWithoutStudentInput | submissionUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: submissionCreateManyStudentInputEnvelope
    set?: submissionWhereUniqueInput | submissionWhereUniqueInput[]
    disconnect?: submissionWhereUniqueInput | submissionWhereUniqueInput[]
    delete?: submissionWhereUniqueInput | submissionWhereUniqueInput[]
    connect?: submissionWhereUniqueInput | submissionWhereUniqueInput[]
    update?: submissionUpdateWithWhereUniqueWithoutStudentInput | submissionUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: submissionUpdateManyWithWhereWithoutStudentInput | submissionUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: submissionScalarWhereInput | submissionScalarWhereInput[]
  }

  export type inscriptionUpdateManyWithoutStudentNestedInput = {
    create?: XOR<inscriptionCreateWithoutStudentInput, inscriptionUncheckedCreateWithoutStudentInput> | inscriptionCreateWithoutStudentInput[] | inscriptionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: inscriptionCreateOrConnectWithoutStudentInput | inscriptionCreateOrConnectWithoutStudentInput[]
    upsert?: inscriptionUpsertWithWhereUniqueWithoutStudentInput | inscriptionUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: inscriptionCreateManyStudentInputEnvelope
    set?: inscriptionWhereUniqueInput | inscriptionWhereUniqueInput[]
    disconnect?: inscriptionWhereUniqueInput | inscriptionWhereUniqueInput[]
    delete?: inscriptionWhereUniqueInput | inscriptionWhereUniqueInput[]
    connect?: inscriptionWhereUniqueInput | inscriptionWhereUniqueInput[]
    update?: inscriptionUpdateWithWhereUniqueWithoutStudentInput | inscriptionUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: inscriptionUpdateManyWithWhereWithoutStudentInput | inscriptionUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: inscriptionScalarWhereInput | inscriptionScalarWhereInput[]
  }

  export type asistance_registerUpdateManyWithoutStudentNestedInput = {
    create?: XOR<asistance_registerCreateWithoutStudentInput, asistance_registerUncheckedCreateWithoutStudentInput> | asistance_registerCreateWithoutStudentInput[] | asistance_registerUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: asistance_registerCreateOrConnectWithoutStudentInput | asistance_registerCreateOrConnectWithoutStudentInput[]
    upsert?: asistance_registerUpsertWithWhereUniqueWithoutStudentInput | asistance_registerUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: asistance_registerCreateManyStudentInputEnvelope
    set?: asistance_registerWhereUniqueInput | asistance_registerWhereUniqueInput[]
    disconnect?: asistance_registerWhereUniqueInput | asistance_registerWhereUniqueInput[]
    delete?: asistance_registerWhereUniqueInput | asistance_registerWhereUniqueInput[]
    connect?: asistance_registerWhereUniqueInput | asistance_registerWhereUniqueInput[]
    update?: asistance_registerUpdateWithWhereUniqueWithoutStudentInput | asistance_registerUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: asistance_registerUpdateManyWithWhereWithoutStudentInput | asistance_registerUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: asistance_registerScalarWhereInput | asistance_registerScalarWhereInput[]
  }

  export type userUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: XOR<userCreateWithoutStudentsInput, userUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: userCreateOrConnectWithoutStudentsInput
    upsert?: userUpsertWithoutStudentsInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutStudentsInput, userUpdateWithoutStudentsInput>, userUncheckedUpdateWithoutStudentsInput>
  }

  export type submissionUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<submissionCreateWithoutStudentInput, submissionUncheckedCreateWithoutStudentInput> | submissionCreateWithoutStudentInput[] | submissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: submissionCreateOrConnectWithoutStudentInput | submissionCreateOrConnectWithoutStudentInput[]
    upsert?: submissionUpsertWithWhereUniqueWithoutStudentInput | submissionUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: submissionCreateManyStudentInputEnvelope
    set?: submissionWhereUniqueInput | submissionWhereUniqueInput[]
    disconnect?: submissionWhereUniqueInput | submissionWhereUniqueInput[]
    delete?: submissionWhereUniqueInput | submissionWhereUniqueInput[]
    connect?: submissionWhereUniqueInput | submissionWhereUniqueInput[]
    update?: submissionUpdateWithWhereUniqueWithoutStudentInput | submissionUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: submissionUpdateManyWithWhereWithoutStudentInput | submissionUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: submissionScalarWhereInput | submissionScalarWhereInput[]
  }

  export type inscriptionUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<inscriptionCreateWithoutStudentInput, inscriptionUncheckedCreateWithoutStudentInput> | inscriptionCreateWithoutStudentInput[] | inscriptionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: inscriptionCreateOrConnectWithoutStudentInput | inscriptionCreateOrConnectWithoutStudentInput[]
    upsert?: inscriptionUpsertWithWhereUniqueWithoutStudentInput | inscriptionUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: inscriptionCreateManyStudentInputEnvelope
    set?: inscriptionWhereUniqueInput | inscriptionWhereUniqueInput[]
    disconnect?: inscriptionWhereUniqueInput | inscriptionWhereUniqueInput[]
    delete?: inscriptionWhereUniqueInput | inscriptionWhereUniqueInput[]
    connect?: inscriptionWhereUniqueInput | inscriptionWhereUniqueInput[]
    update?: inscriptionUpdateWithWhereUniqueWithoutStudentInput | inscriptionUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: inscriptionUpdateManyWithWhereWithoutStudentInput | inscriptionUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: inscriptionScalarWhereInput | inscriptionScalarWhereInput[]
  }

  export type asistance_registerUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<asistance_registerCreateWithoutStudentInput, asistance_registerUncheckedCreateWithoutStudentInput> | asistance_registerCreateWithoutStudentInput[] | asistance_registerUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: asistance_registerCreateOrConnectWithoutStudentInput | asistance_registerCreateOrConnectWithoutStudentInput[]
    upsert?: asistance_registerUpsertWithWhereUniqueWithoutStudentInput | asistance_registerUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: asistance_registerCreateManyStudentInputEnvelope
    set?: asistance_registerWhereUniqueInput | asistance_registerWhereUniqueInput[]
    disconnect?: asistance_registerWhereUniqueInput | asistance_registerWhereUniqueInput[]
    delete?: asistance_registerWhereUniqueInput | asistance_registerWhereUniqueInput[]
    connect?: asistance_registerWhereUniqueInput | asistance_registerWhereUniqueInput[]
    update?: asistance_registerUpdateWithWhereUniqueWithoutStudentInput | asistance_registerUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: asistance_registerUpdateManyWithWhereWithoutStudentInput | asistance_registerUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: asistance_registerScalarWhereInput | asistance_registerScalarWhereInput[]
  }

  export type moduleCreateNestedManyWithoutTeacherInput = {
    create?: XOR<moduleCreateWithoutTeacherInput, moduleUncheckedCreateWithoutTeacherInput> | moduleCreateWithoutTeacherInput[] | moduleUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: moduleCreateOrConnectWithoutTeacherInput | moduleCreateOrConnectWithoutTeacherInput[]
    createMany?: moduleCreateManyTeacherInputEnvelope
    connect?: moduleWhereUniqueInput | moduleWhereUniqueInput[]
  }

  export type userCreateNestedOneWithoutTeacherInput = {
    create?: XOR<userCreateWithoutTeacherInput, userUncheckedCreateWithoutTeacherInput>
    connectOrCreate?: userCreateOrConnectWithoutTeacherInput
    connect?: userWhereUniqueInput
  }

  export type moduleUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<moduleCreateWithoutTeacherInput, moduleUncheckedCreateWithoutTeacherInput> | moduleCreateWithoutTeacherInput[] | moduleUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: moduleCreateOrConnectWithoutTeacherInput | moduleCreateOrConnectWithoutTeacherInput[]
    createMany?: moduleCreateManyTeacherInputEnvelope
    connect?: moduleWhereUniqueInput | moduleWhereUniqueInput[]
  }

  export type moduleUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<moduleCreateWithoutTeacherInput, moduleUncheckedCreateWithoutTeacherInput> | moduleCreateWithoutTeacherInput[] | moduleUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: moduleCreateOrConnectWithoutTeacherInput | moduleCreateOrConnectWithoutTeacherInput[]
    upsert?: moduleUpsertWithWhereUniqueWithoutTeacherInput | moduleUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: moduleCreateManyTeacherInputEnvelope
    set?: moduleWhereUniqueInput | moduleWhereUniqueInput[]
    disconnect?: moduleWhereUniqueInput | moduleWhereUniqueInput[]
    delete?: moduleWhereUniqueInput | moduleWhereUniqueInput[]
    connect?: moduleWhereUniqueInput | moduleWhereUniqueInput[]
    update?: moduleUpdateWithWhereUniqueWithoutTeacherInput | moduleUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: moduleUpdateManyWithWhereWithoutTeacherInput | moduleUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: moduleScalarWhereInput | moduleScalarWhereInput[]
  }

  export type userUpdateOneRequiredWithoutTeacherNestedInput = {
    create?: XOR<userCreateWithoutTeacherInput, userUncheckedCreateWithoutTeacherInput>
    connectOrCreate?: userCreateOrConnectWithoutTeacherInput
    upsert?: userUpsertWithoutTeacherInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutTeacherInput, userUpdateWithoutTeacherInput>, userUncheckedUpdateWithoutTeacherInput>
  }

  export type moduleUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<moduleCreateWithoutTeacherInput, moduleUncheckedCreateWithoutTeacherInput> | moduleCreateWithoutTeacherInput[] | moduleUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: moduleCreateOrConnectWithoutTeacherInput | moduleCreateOrConnectWithoutTeacherInput[]
    upsert?: moduleUpsertWithWhereUniqueWithoutTeacherInput | moduleUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: moduleCreateManyTeacherInputEnvelope
    set?: moduleWhereUniqueInput | moduleWhereUniqueInput[]
    disconnect?: moduleWhereUniqueInput | moduleWhereUniqueInput[]
    delete?: moduleWhereUniqueInput | moduleWhereUniqueInput[]
    connect?: moduleWhereUniqueInput | moduleWhereUniqueInput[]
    update?: moduleUpdateWithWhereUniqueWithoutTeacherInput | moduleUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: moduleUpdateManyWithWhereWithoutTeacherInput | moduleUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: moduleScalarWhereInput | moduleScalarWhereInput[]
  }

  export type studentCreateNestedOneWithoutInscriptionsInput = {
    create?: XOR<studentCreateWithoutInscriptionsInput, studentUncheckedCreateWithoutInscriptionsInput>
    connectOrCreate?: studentCreateOrConnectWithoutInscriptionsInput
    connect?: studentWhereUniqueInput
  }

  export type courseCreateNestedOneWithoutInscriptionsInput = {
    create?: XOR<courseCreateWithoutInscriptionsInput, courseUncheckedCreateWithoutInscriptionsInput>
    connectOrCreate?: courseCreateOrConnectWithoutInscriptionsInput
    connect?: courseWhereUniqueInput
  }

  export type studentUpdateOneRequiredWithoutInscriptionsNestedInput = {
    create?: XOR<studentCreateWithoutInscriptionsInput, studentUncheckedCreateWithoutInscriptionsInput>
    connectOrCreate?: studentCreateOrConnectWithoutInscriptionsInput
    upsert?: studentUpsertWithoutInscriptionsInput
    connect?: studentWhereUniqueInput
    update?: XOR<XOR<studentUpdateToOneWithWhereWithoutInscriptionsInput, studentUpdateWithoutInscriptionsInput>, studentUncheckedUpdateWithoutInscriptionsInput>
  }

  export type courseUpdateOneRequiredWithoutInscriptionsNestedInput = {
    create?: XOR<courseCreateWithoutInscriptionsInput, courseUncheckedCreateWithoutInscriptionsInput>
    connectOrCreate?: courseCreateOrConnectWithoutInscriptionsInput
    upsert?: courseUpsertWithoutInscriptionsInput
    connect?: courseWhereUniqueInput
    update?: XOR<XOR<courseUpdateToOneWithWhereWithoutInscriptionsInput, courseUpdateWithoutInscriptionsInput>, courseUncheckedUpdateWithoutInscriptionsInput>
  }

  export type moduleCreateNestedManyWithoutCourseInput = {
    create?: XOR<moduleCreateWithoutCourseInput, moduleUncheckedCreateWithoutCourseInput> | moduleCreateWithoutCourseInput[] | moduleUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: moduleCreateOrConnectWithoutCourseInput | moduleCreateOrConnectWithoutCourseInput[]
    createMany?: moduleCreateManyCourseInputEnvelope
    connect?: moduleWhereUniqueInput | moduleWhereUniqueInput[]
  }

  export type inscriptionCreateNestedManyWithoutCourseInput = {
    create?: XOR<inscriptionCreateWithoutCourseInput, inscriptionUncheckedCreateWithoutCourseInput> | inscriptionCreateWithoutCourseInput[] | inscriptionUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: inscriptionCreateOrConnectWithoutCourseInput | inscriptionCreateOrConnectWithoutCourseInput[]
    createMany?: inscriptionCreateManyCourseInputEnvelope
    connect?: inscriptionWhereUniqueInput | inscriptionWhereUniqueInput[]
  }

  export type moduleUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<moduleCreateWithoutCourseInput, moduleUncheckedCreateWithoutCourseInput> | moduleCreateWithoutCourseInput[] | moduleUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: moduleCreateOrConnectWithoutCourseInput | moduleCreateOrConnectWithoutCourseInput[]
    createMany?: moduleCreateManyCourseInputEnvelope
    connect?: moduleWhereUniqueInput | moduleWhereUniqueInput[]
  }

  export type inscriptionUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<inscriptionCreateWithoutCourseInput, inscriptionUncheckedCreateWithoutCourseInput> | inscriptionCreateWithoutCourseInput[] | inscriptionUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: inscriptionCreateOrConnectWithoutCourseInput | inscriptionCreateOrConnectWithoutCourseInput[]
    createMany?: inscriptionCreateManyCourseInputEnvelope
    connect?: inscriptionWhereUniqueInput | inscriptionWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type moduleUpdateManyWithoutCourseNestedInput = {
    create?: XOR<moduleCreateWithoutCourseInput, moduleUncheckedCreateWithoutCourseInput> | moduleCreateWithoutCourseInput[] | moduleUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: moduleCreateOrConnectWithoutCourseInput | moduleCreateOrConnectWithoutCourseInput[]
    upsert?: moduleUpsertWithWhereUniqueWithoutCourseInput | moduleUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: moduleCreateManyCourseInputEnvelope
    set?: moduleWhereUniqueInput | moduleWhereUniqueInput[]
    disconnect?: moduleWhereUniqueInput | moduleWhereUniqueInput[]
    delete?: moduleWhereUniqueInput | moduleWhereUniqueInput[]
    connect?: moduleWhereUniqueInput | moduleWhereUniqueInput[]
    update?: moduleUpdateWithWhereUniqueWithoutCourseInput | moduleUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: moduleUpdateManyWithWhereWithoutCourseInput | moduleUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: moduleScalarWhereInput | moduleScalarWhereInput[]
  }

  export type inscriptionUpdateManyWithoutCourseNestedInput = {
    create?: XOR<inscriptionCreateWithoutCourseInput, inscriptionUncheckedCreateWithoutCourseInput> | inscriptionCreateWithoutCourseInput[] | inscriptionUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: inscriptionCreateOrConnectWithoutCourseInput | inscriptionCreateOrConnectWithoutCourseInput[]
    upsert?: inscriptionUpsertWithWhereUniqueWithoutCourseInput | inscriptionUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: inscriptionCreateManyCourseInputEnvelope
    set?: inscriptionWhereUniqueInput | inscriptionWhereUniqueInput[]
    disconnect?: inscriptionWhereUniqueInput | inscriptionWhereUniqueInput[]
    delete?: inscriptionWhereUniqueInput | inscriptionWhereUniqueInput[]
    connect?: inscriptionWhereUniqueInput | inscriptionWhereUniqueInput[]
    update?: inscriptionUpdateWithWhereUniqueWithoutCourseInput | inscriptionUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: inscriptionUpdateManyWithWhereWithoutCourseInput | inscriptionUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: inscriptionScalarWhereInput | inscriptionScalarWhereInput[]
  }

  export type moduleUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<moduleCreateWithoutCourseInput, moduleUncheckedCreateWithoutCourseInput> | moduleCreateWithoutCourseInput[] | moduleUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: moduleCreateOrConnectWithoutCourseInput | moduleCreateOrConnectWithoutCourseInput[]
    upsert?: moduleUpsertWithWhereUniqueWithoutCourseInput | moduleUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: moduleCreateManyCourseInputEnvelope
    set?: moduleWhereUniqueInput | moduleWhereUniqueInput[]
    disconnect?: moduleWhereUniqueInput | moduleWhereUniqueInput[]
    delete?: moduleWhereUniqueInput | moduleWhereUniqueInput[]
    connect?: moduleWhereUniqueInput | moduleWhereUniqueInput[]
    update?: moduleUpdateWithWhereUniqueWithoutCourseInput | moduleUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: moduleUpdateManyWithWhereWithoutCourseInput | moduleUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: moduleScalarWhereInput | moduleScalarWhereInput[]
  }

  export type inscriptionUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<inscriptionCreateWithoutCourseInput, inscriptionUncheckedCreateWithoutCourseInput> | inscriptionCreateWithoutCourseInput[] | inscriptionUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: inscriptionCreateOrConnectWithoutCourseInput | inscriptionCreateOrConnectWithoutCourseInput[]
    upsert?: inscriptionUpsertWithWhereUniqueWithoutCourseInput | inscriptionUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: inscriptionCreateManyCourseInputEnvelope
    set?: inscriptionWhereUniqueInput | inscriptionWhereUniqueInput[]
    disconnect?: inscriptionWhereUniqueInput | inscriptionWhereUniqueInput[]
    delete?: inscriptionWhereUniqueInput | inscriptionWhereUniqueInput[]
    connect?: inscriptionWhereUniqueInput | inscriptionWhereUniqueInput[]
    update?: inscriptionUpdateWithWhereUniqueWithoutCourseInput | inscriptionUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: inscriptionUpdateManyWithWhereWithoutCourseInput | inscriptionUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: inscriptionScalarWhereInput | inscriptionScalarWhereInput[]
  }

  export type sectionCreateNestedManyWithoutModuleInput = {
    create?: XOR<sectionCreateWithoutModuleInput, sectionUncheckedCreateWithoutModuleInput> | sectionCreateWithoutModuleInput[] | sectionUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: sectionCreateOrConnectWithoutModuleInput | sectionCreateOrConnectWithoutModuleInput[]
    createMany?: sectionCreateManyModuleInputEnvelope
    connect?: sectionWhereUniqueInput | sectionWhereUniqueInput[]
  }

  export type module_resourceCreateNestedManyWithoutModuleInput = {
    create?: XOR<module_resourceCreateWithoutModuleInput, module_resourceUncheckedCreateWithoutModuleInput> | module_resourceCreateWithoutModuleInput[] | module_resourceUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: module_resourceCreateOrConnectWithoutModuleInput | module_resourceCreateOrConnectWithoutModuleInput[]
    createMany?: module_resourceCreateManyModuleInputEnvelope
    connect?: module_resourceWhereUniqueInput | module_resourceWhereUniqueInput[]
  }

  export type asistanceCreateNestedManyWithoutModuleInput = {
    create?: XOR<asistanceCreateWithoutModuleInput, asistanceUncheckedCreateWithoutModuleInput> | asistanceCreateWithoutModuleInput[] | asistanceUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: asistanceCreateOrConnectWithoutModuleInput | asistanceCreateOrConnectWithoutModuleInput[]
    createMany?: asistanceCreateManyModuleInputEnvelope
    connect?: asistanceWhereUniqueInput | asistanceWhereUniqueInput[]
  }

  export type teacherCreateNestedOneWithoutModulesInput = {
    create?: XOR<teacherCreateWithoutModulesInput, teacherUncheckedCreateWithoutModulesInput>
    connectOrCreate?: teacherCreateOrConnectWithoutModulesInput
    connect?: teacherWhereUniqueInput
  }

  export type courseCreateNestedOneWithoutModulesInput = {
    create?: XOR<courseCreateWithoutModulesInput, courseUncheckedCreateWithoutModulesInput>
    connectOrCreate?: courseCreateOrConnectWithoutModulesInput
    connect?: courseWhereUniqueInput
  }

  export type sectionUncheckedCreateNestedManyWithoutModuleInput = {
    create?: XOR<sectionCreateWithoutModuleInput, sectionUncheckedCreateWithoutModuleInput> | sectionCreateWithoutModuleInput[] | sectionUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: sectionCreateOrConnectWithoutModuleInput | sectionCreateOrConnectWithoutModuleInput[]
    createMany?: sectionCreateManyModuleInputEnvelope
    connect?: sectionWhereUniqueInput | sectionWhereUniqueInput[]
  }

  export type module_resourceUncheckedCreateNestedManyWithoutModuleInput = {
    create?: XOR<module_resourceCreateWithoutModuleInput, module_resourceUncheckedCreateWithoutModuleInput> | module_resourceCreateWithoutModuleInput[] | module_resourceUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: module_resourceCreateOrConnectWithoutModuleInput | module_resourceCreateOrConnectWithoutModuleInput[]
    createMany?: module_resourceCreateManyModuleInputEnvelope
    connect?: module_resourceWhereUniqueInput | module_resourceWhereUniqueInput[]
  }

  export type asistanceUncheckedCreateNestedManyWithoutModuleInput = {
    create?: XOR<asistanceCreateWithoutModuleInput, asistanceUncheckedCreateWithoutModuleInput> | asistanceCreateWithoutModuleInput[] | asistanceUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: asistanceCreateOrConnectWithoutModuleInput | asistanceCreateOrConnectWithoutModuleInput[]
    createMany?: asistanceCreateManyModuleInputEnvelope
    connect?: asistanceWhereUniqueInput | asistanceWhereUniqueInput[]
  }

  export type sectionUpdateManyWithoutModuleNestedInput = {
    create?: XOR<sectionCreateWithoutModuleInput, sectionUncheckedCreateWithoutModuleInput> | sectionCreateWithoutModuleInput[] | sectionUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: sectionCreateOrConnectWithoutModuleInput | sectionCreateOrConnectWithoutModuleInput[]
    upsert?: sectionUpsertWithWhereUniqueWithoutModuleInput | sectionUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: sectionCreateManyModuleInputEnvelope
    set?: sectionWhereUniqueInput | sectionWhereUniqueInput[]
    disconnect?: sectionWhereUniqueInput | sectionWhereUniqueInput[]
    delete?: sectionWhereUniqueInput | sectionWhereUniqueInput[]
    connect?: sectionWhereUniqueInput | sectionWhereUniqueInput[]
    update?: sectionUpdateWithWhereUniqueWithoutModuleInput | sectionUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: sectionUpdateManyWithWhereWithoutModuleInput | sectionUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: sectionScalarWhereInput | sectionScalarWhereInput[]
  }

  export type module_resourceUpdateManyWithoutModuleNestedInput = {
    create?: XOR<module_resourceCreateWithoutModuleInput, module_resourceUncheckedCreateWithoutModuleInput> | module_resourceCreateWithoutModuleInput[] | module_resourceUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: module_resourceCreateOrConnectWithoutModuleInput | module_resourceCreateOrConnectWithoutModuleInput[]
    upsert?: module_resourceUpsertWithWhereUniqueWithoutModuleInput | module_resourceUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: module_resourceCreateManyModuleInputEnvelope
    set?: module_resourceWhereUniqueInput | module_resourceWhereUniqueInput[]
    disconnect?: module_resourceWhereUniqueInput | module_resourceWhereUniqueInput[]
    delete?: module_resourceWhereUniqueInput | module_resourceWhereUniqueInput[]
    connect?: module_resourceWhereUniqueInput | module_resourceWhereUniqueInput[]
    update?: module_resourceUpdateWithWhereUniqueWithoutModuleInput | module_resourceUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: module_resourceUpdateManyWithWhereWithoutModuleInput | module_resourceUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: module_resourceScalarWhereInput | module_resourceScalarWhereInput[]
  }

  export type asistanceUpdateManyWithoutModuleNestedInput = {
    create?: XOR<asistanceCreateWithoutModuleInput, asistanceUncheckedCreateWithoutModuleInput> | asistanceCreateWithoutModuleInput[] | asistanceUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: asistanceCreateOrConnectWithoutModuleInput | asistanceCreateOrConnectWithoutModuleInput[]
    upsert?: asistanceUpsertWithWhereUniqueWithoutModuleInput | asistanceUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: asistanceCreateManyModuleInputEnvelope
    set?: asistanceWhereUniqueInput | asistanceWhereUniqueInput[]
    disconnect?: asistanceWhereUniqueInput | asistanceWhereUniqueInput[]
    delete?: asistanceWhereUniqueInput | asistanceWhereUniqueInput[]
    connect?: asistanceWhereUniqueInput | asistanceWhereUniqueInput[]
    update?: asistanceUpdateWithWhereUniqueWithoutModuleInput | asistanceUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: asistanceUpdateManyWithWhereWithoutModuleInput | asistanceUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: asistanceScalarWhereInput | asistanceScalarWhereInput[]
  }

  export type teacherUpdateOneRequiredWithoutModulesNestedInput = {
    create?: XOR<teacherCreateWithoutModulesInput, teacherUncheckedCreateWithoutModulesInput>
    connectOrCreate?: teacherCreateOrConnectWithoutModulesInput
    upsert?: teacherUpsertWithoutModulesInput
    connect?: teacherWhereUniqueInput
    update?: XOR<XOR<teacherUpdateToOneWithWhereWithoutModulesInput, teacherUpdateWithoutModulesInput>, teacherUncheckedUpdateWithoutModulesInput>
  }

  export type courseUpdateOneRequiredWithoutModulesNestedInput = {
    create?: XOR<courseCreateWithoutModulesInput, courseUncheckedCreateWithoutModulesInput>
    connectOrCreate?: courseCreateOrConnectWithoutModulesInput
    upsert?: courseUpsertWithoutModulesInput
    connect?: courseWhereUniqueInput
    update?: XOR<XOR<courseUpdateToOneWithWhereWithoutModulesInput, courseUpdateWithoutModulesInput>, courseUncheckedUpdateWithoutModulesInput>
  }

  export type sectionUncheckedUpdateManyWithoutModuleNestedInput = {
    create?: XOR<sectionCreateWithoutModuleInput, sectionUncheckedCreateWithoutModuleInput> | sectionCreateWithoutModuleInput[] | sectionUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: sectionCreateOrConnectWithoutModuleInput | sectionCreateOrConnectWithoutModuleInput[]
    upsert?: sectionUpsertWithWhereUniqueWithoutModuleInput | sectionUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: sectionCreateManyModuleInputEnvelope
    set?: sectionWhereUniqueInput | sectionWhereUniqueInput[]
    disconnect?: sectionWhereUniqueInput | sectionWhereUniqueInput[]
    delete?: sectionWhereUniqueInput | sectionWhereUniqueInput[]
    connect?: sectionWhereUniqueInput | sectionWhereUniqueInput[]
    update?: sectionUpdateWithWhereUniqueWithoutModuleInput | sectionUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: sectionUpdateManyWithWhereWithoutModuleInput | sectionUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: sectionScalarWhereInput | sectionScalarWhereInput[]
  }

  export type module_resourceUncheckedUpdateManyWithoutModuleNestedInput = {
    create?: XOR<module_resourceCreateWithoutModuleInput, module_resourceUncheckedCreateWithoutModuleInput> | module_resourceCreateWithoutModuleInput[] | module_resourceUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: module_resourceCreateOrConnectWithoutModuleInput | module_resourceCreateOrConnectWithoutModuleInput[]
    upsert?: module_resourceUpsertWithWhereUniqueWithoutModuleInput | module_resourceUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: module_resourceCreateManyModuleInputEnvelope
    set?: module_resourceWhereUniqueInput | module_resourceWhereUniqueInput[]
    disconnect?: module_resourceWhereUniqueInput | module_resourceWhereUniqueInput[]
    delete?: module_resourceWhereUniqueInput | module_resourceWhereUniqueInput[]
    connect?: module_resourceWhereUniqueInput | module_resourceWhereUniqueInput[]
    update?: module_resourceUpdateWithWhereUniqueWithoutModuleInput | module_resourceUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: module_resourceUpdateManyWithWhereWithoutModuleInput | module_resourceUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: module_resourceScalarWhereInput | module_resourceScalarWhereInput[]
  }

  export type asistanceUncheckedUpdateManyWithoutModuleNestedInput = {
    create?: XOR<asistanceCreateWithoutModuleInput, asistanceUncheckedCreateWithoutModuleInput> | asistanceCreateWithoutModuleInput[] | asistanceUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: asistanceCreateOrConnectWithoutModuleInput | asistanceCreateOrConnectWithoutModuleInput[]
    upsert?: asistanceUpsertWithWhereUniqueWithoutModuleInput | asistanceUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: asistanceCreateManyModuleInputEnvelope
    set?: asistanceWhereUniqueInput | asistanceWhereUniqueInput[]
    disconnect?: asistanceWhereUniqueInput | asistanceWhereUniqueInput[]
    delete?: asistanceWhereUniqueInput | asistanceWhereUniqueInput[]
    connect?: asistanceWhereUniqueInput | asistanceWhereUniqueInput[]
    update?: asistanceUpdateWithWhereUniqueWithoutModuleInput | asistanceUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: asistanceUpdateManyWithWhereWithoutModuleInput | asistanceUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: asistanceScalarWhereInput | asistanceScalarWhereInput[]
  }

  export type moduleCreateNestedOneWithoutResourcesInput = {
    create?: XOR<moduleCreateWithoutResourcesInput, moduleUncheckedCreateWithoutResourcesInput>
    connectOrCreate?: moduleCreateOrConnectWithoutResourcesInput
    connect?: moduleWhereUniqueInput
  }

  export type moduleUpdateOneRequiredWithoutResourcesNestedInput = {
    create?: XOR<moduleCreateWithoutResourcesInput, moduleUncheckedCreateWithoutResourcesInput>
    connectOrCreate?: moduleCreateOrConnectWithoutResourcesInput
    upsert?: moduleUpsertWithoutResourcesInput
    connect?: moduleWhereUniqueInput
    update?: XOR<XOR<moduleUpdateToOneWithWhereWithoutResourcesInput, moduleUpdateWithoutResourcesInput>, moduleUncheckedUpdateWithoutResourcesInput>
  }

  export type activityCreateNestedManyWithoutSectionInput = {
    create?: XOR<activityCreateWithoutSectionInput, activityUncheckedCreateWithoutSectionInput> | activityCreateWithoutSectionInput[] | activityUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: activityCreateOrConnectWithoutSectionInput | activityCreateOrConnectWithoutSectionInput[]
    createMany?: activityCreateManySectionInputEnvelope
    connect?: activityWhereUniqueInput | activityWhereUniqueInput[]
  }

  export type section_resourceCreateNestedManyWithoutSectionInput = {
    create?: XOR<section_resourceCreateWithoutSectionInput, section_resourceUncheckedCreateWithoutSectionInput> | section_resourceCreateWithoutSectionInput[] | section_resourceUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: section_resourceCreateOrConnectWithoutSectionInput | section_resourceCreateOrConnectWithoutSectionInput[]
    createMany?: section_resourceCreateManySectionInputEnvelope
    connect?: section_resourceWhereUniqueInput | section_resourceWhereUniqueInput[]
  }

  export type moduleCreateNestedOneWithoutSectionsInput = {
    create?: XOR<moduleCreateWithoutSectionsInput, moduleUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: moduleCreateOrConnectWithoutSectionsInput
    connect?: moduleWhereUniqueInput
  }

  export type activityUncheckedCreateNestedManyWithoutSectionInput = {
    create?: XOR<activityCreateWithoutSectionInput, activityUncheckedCreateWithoutSectionInput> | activityCreateWithoutSectionInput[] | activityUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: activityCreateOrConnectWithoutSectionInput | activityCreateOrConnectWithoutSectionInput[]
    createMany?: activityCreateManySectionInputEnvelope
    connect?: activityWhereUniqueInput | activityWhereUniqueInput[]
  }

  export type section_resourceUncheckedCreateNestedManyWithoutSectionInput = {
    create?: XOR<section_resourceCreateWithoutSectionInput, section_resourceUncheckedCreateWithoutSectionInput> | section_resourceCreateWithoutSectionInput[] | section_resourceUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: section_resourceCreateOrConnectWithoutSectionInput | section_resourceCreateOrConnectWithoutSectionInput[]
    createMany?: section_resourceCreateManySectionInputEnvelope
    connect?: section_resourceWhereUniqueInput | section_resourceWhereUniqueInput[]
  }

  export type activityUpdateManyWithoutSectionNestedInput = {
    create?: XOR<activityCreateWithoutSectionInput, activityUncheckedCreateWithoutSectionInput> | activityCreateWithoutSectionInput[] | activityUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: activityCreateOrConnectWithoutSectionInput | activityCreateOrConnectWithoutSectionInput[]
    upsert?: activityUpsertWithWhereUniqueWithoutSectionInput | activityUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: activityCreateManySectionInputEnvelope
    set?: activityWhereUniqueInput | activityWhereUniqueInput[]
    disconnect?: activityWhereUniqueInput | activityWhereUniqueInput[]
    delete?: activityWhereUniqueInput | activityWhereUniqueInput[]
    connect?: activityWhereUniqueInput | activityWhereUniqueInput[]
    update?: activityUpdateWithWhereUniqueWithoutSectionInput | activityUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: activityUpdateManyWithWhereWithoutSectionInput | activityUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: activityScalarWhereInput | activityScalarWhereInput[]
  }

  export type section_resourceUpdateManyWithoutSectionNestedInput = {
    create?: XOR<section_resourceCreateWithoutSectionInput, section_resourceUncheckedCreateWithoutSectionInput> | section_resourceCreateWithoutSectionInput[] | section_resourceUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: section_resourceCreateOrConnectWithoutSectionInput | section_resourceCreateOrConnectWithoutSectionInput[]
    upsert?: section_resourceUpsertWithWhereUniqueWithoutSectionInput | section_resourceUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: section_resourceCreateManySectionInputEnvelope
    set?: section_resourceWhereUniqueInput | section_resourceWhereUniqueInput[]
    disconnect?: section_resourceWhereUniqueInput | section_resourceWhereUniqueInput[]
    delete?: section_resourceWhereUniqueInput | section_resourceWhereUniqueInput[]
    connect?: section_resourceWhereUniqueInput | section_resourceWhereUniqueInput[]
    update?: section_resourceUpdateWithWhereUniqueWithoutSectionInput | section_resourceUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: section_resourceUpdateManyWithWhereWithoutSectionInput | section_resourceUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: section_resourceScalarWhereInput | section_resourceScalarWhereInput[]
  }

  export type moduleUpdateOneRequiredWithoutSectionsNestedInput = {
    create?: XOR<moduleCreateWithoutSectionsInput, moduleUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: moduleCreateOrConnectWithoutSectionsInput
    upsert?: moduleUpsertWithoutSectionsInput
    connect?: moduleWhereUniqueInput
    update?: XOR<XOR<moduleUpdateToOneWithWhereWithoutSectionsInput, moduleUpdateWithoutSectionsInput>, moduleUncheckedUpdateWithoutSectionsInput>
  }

  export type activityUncheckedUpdateManyWithoutSectionNestedInput = {
    create?: XOR<activityCreateWithoutSectionInput, activityUncheckedCreateWithoutSectionInput> | activityCreateWithoutSectionInput[] | activityUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: activityCreateOrConnectWithoutSectionInput | activityCreateOrConnectWithoutSectionInput[]
    upsert?: activityUpsertWithWhereUniqueWithoutSectionInput | activityUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: activityCreateManySectionInputEnvelope
    set?: activityWhereUniqueInput | activityWhereUniqueInput[]
    disconnect?: activityWhereUniqueInput | activityWhereUniqueInput[]
    delete?: activityWhereUniqueInput | activityWhereUniqueInput[]
    connect?: activityWhereUniqueInput | activityWhereUniqueInput[]
    update?: activityUpdateWithWhereUniqueWithoutSectionInput | activityUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: activityUpdateManyWithWhereWithoutSectionInput | activityUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: activityScalarWhereInput | activityScalarWhereInput[]
  }

  export type section_resourceUncheckedUpdateManyWithoutSectionNestedInput = {
    create?: XOR<section_resourceCreateWithoutSectionInput, section_resourceUncheckedCreateWithoutSectionInput> | section_resourceCreateWithoutSectionInput[] | section_resourceUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: section_resourceCreateOrConnectWithoutSectionInput | section_resourceCreateOrConnectWithoutSectionInput[]
    upsert?: section_resourceUpsertWithWhereUniqueWithoutSectionInput | section_resourceUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: section_resourceCreateManySectionInputEnvelope
    set?: section_resourceWhereUniqueInput | section_resourceWhereUniqueInput[]
    disconnect?: section_resourceWhereUniqueInput | section_resourceWhereUniqueInput[]
    delete?: section_resourceWhereUniqueInput | section_resourceWhereUniqueInput[]
    connect?: section_resourceWhereUniqueInput | section_resourceWhereUniqueInput[]
    update?: section_resourceUpdateWithWhereUniqueWithoutSectionInput | section_resourceUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: section_resourceUpdateManyWithWhereWithoutSectionInput | section_resourceUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: section_resourceScalarWhereInput | section_resourceScalarWhereInput[]
  }

  export type sectionCreateNestedOneWithoutResourcesInput = {
    create?: XOR<sectionCreateWithoutResourcesInput, sectionUncheckedCreateWithoutResourcesInput>
    connectOrCreate?: sectionCreateOrConnectWithoutResourcesInput
    connect?: sectionWhereUniqueInput
  }

  export type sectionUpdateOneRequiredWithoutResourcesNestedInput = {
    create?: XOR<sectionCreateWithoutResourcesInput, sectionUncheckedCreateWithoutResourcesInput>
    connectOrCreate?: sectionCreateOrConnectWithoutResourcesInput
    upsert?: sectionUpsertWithoutResourcesInput
    connect?: sectionWhereUniqueInput
    update?: XOR<XOR<sectionUpdateToOneWithWhereWithoutResourcesInput, sectionUpdateWithoutResourcesInput>, sectionUncheckedUpdateWithoutResourcesInput>
  }

  export type submissionCreateNestedManyWithoutActivityInput = {
    create?: XOR<submissionCreateWithoutActivityInput, submissionUncheckedCreateWithoutActivityInput> | submissionCreateWithoutActivityInput[] | submissionUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: submissionCreateOrConnectWithoutActivityInput | submissionCreateOrConnectWithoutActivityInput[]
    createMany?: submissionCreateManyActivityInputEnvelope
    connect?: submissionWhereUniqueInput | submissionWhereUniqueInput[]
  }

  export type activity_resourceCreateNestedManyWithoutActivityInput = {
    create?: XOR<activity_resourceCreateWithoutActivityInput, activity_resourceUncheckedCreateWithoutActivityInput> | activity_resourceCreateWithoutActivityInput[] | activity_resourceUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: activity_resourceCreateOrConnectWithoutActivityInput | activity_resourceCreateOrConnectWithoutActivityInput[]
    createMany?: activity_resourceCreateManyActivityInputEnvelope
    connect?: activity_resourceWhereUniqueInput | activity_resourceWhereUniqueInput[]
  }

  export type sectionCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<sectionCreateWithoutActivitiesInput, sectionUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: sectionCreateOrConnectWithoutActivitiesInput
    connect?: sectionWhereUniqueInput
  }

  export type submissionUncheckedCreateNestedManyWithoutActivityInput = {
    create?: XOR<submissionCreateWithoutActivityInput, submissionUncheckedCreateWithoutActivityInput> | submissionCreateWithoutActivityInput[] | submissionUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: submissionCreateOrConnectWithoutActivityInput | submissionCreateOrConnectWithoutActivityInput[]
    createMany?: submissionCreateManyActivityInputEnvelope
    connect?: submissionWhereUniqueInput | submissionWhereUniqueInput[]
  }

  export type activity_resourceUncheckedCreateNestedManyWithoutActivityInput = {
    create?: XOR<activity_resourceCreateWithoutActivityInput, activity_resourceUncheckedCreateWithoutActivityInput> | activity_resourceCreateWithoutActivityInput[] | activity_resourceUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: activity_resourceCreateOrConnectWithoutActivityInput | activity_resourceCreateOrConnectWithoutActivityInput[]
    createMany?: activity_resourceCreateManyActivityInputEnvelope
    connect?: activity_resourceWhereUniqueInput | activity_resourceWhereUniqueInput[]
  }

  export type submissionUpdateManyWithoutActivityNestedInput = {
    create?: XOR<submissionCreateWithoutActivityInput, submissionUncheckedCreateWithoutActivityInput> | submissionCreateWithoutActivityInput[] | submissionUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: submissionCreateOrConnectWithoutActivityInput | submissionCreateOrConnectWithoutActivityInput[]
    upsert?: submissionUpsertWithWhereUniqueWithoutActivityInput | submissionUpsertWithWhereUniqueWithoutActivityInput[]
    createMany?: submissionCreateManyActivityInputEnvelope
    set?: submissionWhereUniqueInput | submissionWhereUniqueInput[]
    disconnect?: submissionWhereUniqueInput | submissionWhereUniqueInput[]
    delete?: submissionWhereUniqueInput | submissionWhereUniqueInput[]
    connect?: submissionWhereUniqueInput | submissionWhereUniqueInput[]
    update?: submissionUpdateWithWhereUniqueWithoutActivityInput | submissionUpdateWithWhereUniqueWithoutActivityInput[]
    updateMany?: submissionUpdateManyWithWhereWithoutActivityInput | submissionUpdateManyWithWhereWithoutActivityInput[]
    deleteMany?: submissionScalarWhereInput | submissionScalarWhereInput[]
  }

  export type activity_resourceUpdateManyWithoutActivityNestedInput = {
    create?: XOR<activity_resourceCreateWithoutActivityInput, activity_resourceUncheckedCreateWithoutActivityInput> | activity_resourceCreateWithoutActivityInput[] | activity_resourceUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: activity_resourceCreateOrConnectWithoutActivityInput | activity_resourceCreateOrConnectWithoutActivityInput[]
    upsert?: activity_resourceUpsertWithWhereUniqueWithoutActivityInput | activity_resourceUpsertWithWhereUniqueWithoutActivityInput[]
    createMany?: activity_resourceCreateManyActivityInputEnvelope
    set?: activity_resourceWhereUniqueInput | activity_resourceWhereUniqueInput[]
    disconnect?: activity_resourceWhereUniqueInput | activity_resourceWhereUniqueInput[]
    delete?: activity_resourceWhereUniqueInput | activity_resourceWhereUniqueInput[]
    connect?: activity_resourceWhereUniqueInput | activity_resourceWhereUniqueInput[]
    update?: activity_resourceUpdateWithWhereUniqueWithoutActivityInput | activity_resourceUpdateWithWhereUniqueWithoutActivityInput[]
    updateMany?: activity_resourceUpdateManyWithWhereWithoutActivityInput | activity_resourceUpdateManyWithWhereWithoutActivityInput[]
    deleteMany?: activity_resourceScalarWhereInput | activity_resourceScalarWhereInput[]
  }

  export type sectionUpdateOneRequiredWithoutActivitiesNestedInput = {
    create?: XOR<sectionCreateWithoutActivitiesInput, sectionUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: sectionCreateOrConnectWithoutActivitiesInput
    upsert?: sectionUpsertWithoutActivitiesInput
    connect?: sectionWhereUniqueInput
    update?: XOR<XOR<sectionUpdateToOneWithWhereWithoutActivitiesInput, sectionUpdateWithoutActivitiesInput>, sectionUncheckedUpdateWithoutActivitiesInput>
  }

  export type submissionUncheckedUpdateManyWithoutActivityNestedInput = {
    create?: XOR<submissionCreateWithoutActivityInput, submissionUncheckedCreateWithoutActivityInput> | submissionCreateWithoutActivityInput[] | submissionUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: submissionCreateOrConnectWithoutActivityInput | submissionCreateOrConnectWithoutActivityInput[]
    upsert?: submissionUpsertWithWhereUniqueWithoutActivityInput | submissionUpsertWithWhereUniqueWithoutActivityInput[]
    createMany?: submissionCreateManyActivityInputEnvelope
    set?: submissionWhereUniqueInput | submissionWhereUniqueInput[]
    disconnect?: submissionWhereUniqueInput | submissionWhereUniqueInput[]
    delete?: submissionWhereUniqueInput | submissionWhereUniqueInput[]
    connect?: submissionWhereUniqueInput | submissionWhereUniqueInput[]
    update?: submissionUpdateWithWhereUniqueWithoutActivityInput | submissionUpdateWithWhereUniqueWithoutActivityInput[]
    updateMany?: submissionUpdateManyWithWhereWithoutActivityInput | submissionUpdateManyWithWhereWithoutActivityInput[]
    deleteMany?: submissionScalarWhereInput | submissionScalarWhereInput[]
  }

  export type activity_resourceUncheckedUpdateManyWithoutActivityNestedInput = {
    create?: XOR<activity_resourceCreateWithoutActivityInput, activity_resourceUncheckedCreateWithoutActivityInput> | activity_resourceCreateWithoutActivityInput[] | activity_resourceUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: activity_resourceCreateOrConnectWithoutActivityInput | activity_resourceCreateOrConnectWithoutActivityInput[]
    upsert?: activity_resourceUpsertWithWhereUniqueWithoutActivityInput | activity_resourceUpsertWithWhereUniqueWithoutActivityInput[]
    createMany?: activity_resourceCreateManyActivityInputEnvelope
    set?: activity_resourceWhereUniqueInput | activity_resourceWhereUniqueInput[]
    disconnect?: activity_resourceWhereUniqueInput | activity_resourceWhereUniqueInput[]
    delete?: activity_resourceWhereUniqueInput | activity_resourceWhereUniqueInput[]
    connect?: activity_resourceWhereUniqueInput | activity_resourceWhereUniqueInput[]
    update?: activity_resourceUpdateWithWhereUniqueWithoutActivityInput | activity_resourceUpdateWithWhereUniqueWithoutActivityInput[]
    updateMany?: activity_resourceUpdateManyWithWhereWithoutActivityInput | activity_resourceUpdateManyWithWhereWithoutActivityInput[]
    deleteMany?: activity_resourceScalarWhereInput | activity_resourceScalarWhereInput[]
  }

  export type activityCreateNestedOneWithoutResourcesInput = {
    create?: XOR<activityCreateWithoutResourcesInput, activityUncheckedCreateWithoutResourcesInput>
    connectOrCreate?: activityCreateOrConnectWithoutResourcesInput
    connect?: activityWhereUniqueInput
  }

  export type activityUpdateOneRequiredWithoutResourcesNestedInput = {
    create?: XOR<activityCreateWithoutResourcesInput, activityUncheckedCreateWithoutResourcesInput>
    connectOrCreate?: activityCreateOrConnectWithoutResourcesInput
    upsert?: activityUpsertWithoutResourcesInput
    connect?: activityWhereUniqueInput
    update?: XOR<XOR<activityUpdateToOneWithWhereWithoutResourcesInput, activityUpdateWithoutResourcesInput>, activityUncheckedUpdateWithoutResourcesInput>
  }

  export type submission_resourceCreateNestedManyWithoutSubmissionInput = {
    create?: XOR<submission_resourceCreateWithoutSubmissionInput, submission_resourceUncheckedCreateWithoutSubmissionInput> | submission_resourceCreateWithoutSubmissionInput[] | submission_resourceUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: submission_resourceCreateOrConnectWithoutSubmissionInput | submission_resourceCreateOrConnectWithoutSubmissionInput[]
    createMany?: submission_resourceCreateManySubmissionInputEnvelope
    connect?: submission_resourceWhereUniqueInput | submission_resourceWhereUniqueInput[]
  }

  export type studentCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<studentCreateWithoutActivitiesInput, studentUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: studentCreateOrConnectWithoutActivitiesInput
    connect?: studentWhereUniqueInput
  }

  export type activityCreateNestedOneWithoutSubmissionInput = {
    create?: XOR<activityCreateWithoutSubmissionInput, activityUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: activityCreateOrConnectWithoutSubmissionInput
    connect?: activityWhereUniqueInput
  }

  export type submission_resourceUncheckedCreateNestedManyWithoutSubmissionInput = {
    create?: XOR<submission_resourceCreateWithoutSubmissionInput, submission_resourceUncheckedCreateWithoutSubmissionInput> | submission_resourceCreateWithoutSubmissionInput[] | submission_resourceUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: submission_resourceCreateOrConnectWithoutSubmissionInput | submission_resourceCreateOrConnectWithoutSubmissionInput[]
    createMany?: submission_resourceCreateManySubmissionInputEnvelope
    connect?: submission_resourceWhereUniqueInput | submission_resourceWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type submission_resourceUpdateManyWithoutSubmissionNestedInput = {
    create?: XOR<submission_resourceCreateWithoutSubmissionInput, submission_resourceUncheckedCreateWithoutSubmissionInput> | submission_resourceCreateWithoutSubmissionInput[] | submission_resourceUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: submission_resourceCreateOrConnectWithoutSubmissionInput | submission_resourceCreateOrConnectWithoutSubmissionInput[]
    upsert?: submission_resourceUpsertWithWhereUniqueWithoutSubmissionInput | submission_resourceUpsertWithWhereUniqueWithoutSubmissionInput[]
    createMany?: submission_resourceCreateManySubmissionInputEnvelope
    set?: submission_resourceWhereUniqueInput | submission_resourceWhereUniqueInput[]
    disconnect?: submission_resourceWhereUniqueInput | submission_resourceWhereUniqueInput[]
    delete?: submission_resourceWhereUniqueInput | submission_resourceWhereUniqueInput[]
    connect?: submission_resourceWhereUniqueInput | submission_resourceWhereUniqueInput[]
    update?: submission_resourceUpdateWithWhereUniqueWithoutSubmissionInput | submission_resourceUpdateWithWhereUniqueWithoutSubmissionInput[]
    updateMany?: submission_resourceUpdateManyWithWhereWithoutSubmissionInput | submission_resourceUpdateManyWithWhereWithoutSubmissionInput[]
    deleteMany?: submission_resourceScalarWhereInput | submission_resourceScalarWhereInput[]
  }

  export type studentUpdateOneRequiredWithoutActivitiesNestedInput = {
    create?: XOR<studentCreateWithoutActivitiesInput, studentUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: studentCreateOrConnectWithoutActivitiesInput
    upsert?: studentUpsertWithoutActivitiesInput
    connect?: studentWhereUniqueInput
    update?: XOR<XOR<studentUpdateToOneWithWhereWithoutActivitiesInput, studentUpdateWithoutActivitiesInput>, studentUncheckedUpdateWithoutActivitiesInput>
  }

  export type activityUpdateOneRequiredWithoutSubmissionNestedInput = {
    create?: XOR<activityCreateWithoutSubmissionInput, activityUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: activityCreateOrConnectWithoutSubmissionInput
    upsert?: activityUpsertWithoutSubmissionInput
    connect?: activityWhereUniqueInput
    update?: XOR<XOR<activityUpdateToOneWithWhereWithoutSubmissionInput, activityUpdateWithoutSubmissionInput>, activityUncheckedUpdateWithoutSubmissionInput>
  }

  export type submission_resourceUncheckedUpdateManyWithoutSubmissionNestedInput = {
    create?: XOR<submission_resourceCreateWithoutSubmissionInput, submission_resourceUncheckedCreateWithoutSubmissionInput> | submission_resourceCreateWithoutSubmissionInput[] | submission_resourceUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: submission_resourceCreateOrConnectWithoutSubmissionInput | submission_resourceCreateOrConnectWithoutSubmissionInput[]
    upsert?: submission_resourceUpsertWithWhereUniqueWithoutSubmissionInput | submission_resourceUpsertWithWhereUniqueWithoutSubmissionInput[]
    createMany?: submission_resourceCreateManySubmissionInputEnvelope
    set?: submission_resourceWhereUniqueInput | submission_resourceWhereUniqueInput[]
    disconnect?: submission_resourceWhereUniqueInput | submission_resourceWhereUniqueInput[]
    delete?: submission_resourceWhereUniqueInput | submission_resourceWhereUniqueInput[]
    connect?: submission_resourceWhereUniqueInput | submission_resourceWhereUniqueInput[]
    update?: submission_resourceUpdateWithWhereUniqueWithoutSubmissionInput | submission_resourceUpdateWithWhereUniqueWithoutSubmissionInput[]
    updateMany?: submission_resourceUpdateManyWithWhereWithoutSubmissionInput | submission_resourceUpdateManyWithWhereWithoutSubmissionInput[]
    deleteMany?: submission_resourceScalarWhereInput | submission_resourceScalarWhereInput[]
  }

  export type submissionCreateNestedOneWithoutResourcesInput = {
    create?: XOR<submissionCreateWithoutResourcesInput, submissionUncheckedCreateWithoutResourcesInput>
    connectOrCreate?: submissionCreateOrConnectWithoutResourcesInput
    connect?: submissionWhereUniqueInput
  }

  export type submissionUpdateOneRequiredWithoutResourcesNestedInput = {
    create?: XOR<submissionCreateWithoutResourcesInput, submissionUncheckedCreateWithoutResourcesInput>
    connectOrCreate?: submissionCreateOrConnectWithoutResourcesInput
    upsert?: submissionUpsertWithoutResourcesInput
    connect?: submissionWhereUniqueInput
    update?: XOR<XOR<submissionUpdateToOneWithWhereWithoutResourcesInput, submissionUpdateWithoutResourcesInput>, submissionUncheckedUpdateWithoutResourcesInput>
  }

  export type asistance_registerCreateNestedManyWithoutAsistanceInput = {
    create?: XOR<asistance_registerCreateWithoutAsistanceInput, asistance_registerUncheckedCreateWithoutAsistanceInput> | asistance_registerCreateWithoutAsistanceInput[] | asistance_registerUncheckedCreateWithoutAsistanceInput[]
    connectOrCreate?: asistance_registerCreateOrConnectWithoutAsistanceInput | asistance_registerCreateOrConnectWithoutAsistanceInput[]
    createMany?: asistance_registerCreateManyAsistanceInputEnvelope
    connect?: asistance_registerWhereUniqueInput | asistance_registerWhereUniqueInput[]
  }

  export type moduleCreateNestedOneWithoutAsistancesInput = {
    create?: XOR<moduleCreateWithoutAsistancesInput, moduleUncheckedCreateWithoutAsistancesInput>
    connectOrCreate?: moduleCreateOrConnectWithoutAsistancesInput
    connect?: moduleWhereUniqueInput
  }

  export type asistance_registerUncheckedCreateNestedManyWithoutAsistanceInput = {
    create?: XOR<asistance_registerCreateWithoutAsistanceInput, asistance_registerUncheckedCreateWithoutAsistanceInput> | asistance_registerCreateWithoutAsistanceInput[] | asistance_registerUncheckedCreateWithoutAsistanceInput[]
    connectOrCreate?: asistance_registerCreateOrConnectWithoutAsistanceInput | asistance_registerCreateOrConnectWithoutAsistanceInput[]
    createMany?: asistance_registerCreateManyAsistanceInputEnvelope
    connect?: asistance_registerWhereUniqueInput | asistance_registerWhereUniqueInput[]
  }

  export type asistance_registerUpdateManyWithoutAsistanceNestedInput = {
    create?: XOR<asistance_registerCreateWithoutAsistanceInput, asistance_registerUncheckedCreateWithoutAsistanceInput> | asistance_registerCreateWithoutAsistanceInput[] | asistance_registerUncheckedCreateWithoutAsistanceInput[]
    connectOrCreate?: asistance_registerCreateOrConnectWithoutAsistanceInput | asistance_registerCreateOrConnectWithoutAsistanceInput[]
    upsert?: asistance_registerUpsertWithWhereUniqueWithoutAsistanceInput | asistance_registerUpsertWithWhereUniqueWithoutAsistanceInput[]
    createMany?: asistance_registerCreateManyAsistanceInputEnvelope
    set?: asistance_registerWhereUniqueInput | asistance_registerWhereUniqueInput[]
    disconnect?: asistance_registerWhereUniqueInput | asistance_registerWhereUniqueInput[]
    delete?: asistance_registerWhereUniqueInput | asistance_registerWhereUniqueInput[]
    connect?: asistance_registerWhereUniqueInput | asistance_registerWhereUniqueInput[]
    update?: asistance_registerUpdateWithWhereUniqueWithoutAsistanceInput | asistance_registerUpdateWithWhereUniqueWithoutAsistanceInput[]
    updateMany?: asistance_registerUpdateManyWithWhereWithoutAsistanceInput | asistance_registerUpdateManyWithWhereWithoutAsistanceInput[]
    deleteMany?: asistance_registerScalarWhereInput | asistance_registerScalarWhereInput[]
  }

  export type moduleUpdateOneRequiredWithoutAsistancesNestedInput = {
    create?: XOR<moduleCreateWithoutAsistancesInput, moduleUncheckedCreateWithoutAsistancesInput>
    connectOrCreate?: moduleCreateOrConnectWithoutAsistancesInput
    upsert?: moduleUpsertWithoutAsistancesInput
    connect?: moduleWhereUniqueInput
    update?: XOR<XOR<moduleUpdateToOneWithWhereWithoutAsistancesInput, moduleUpdateWithoutAsistancesInput>, moduleUncheckedUpdateWithoutAsistancesInput>
  }

  export type asistance_registerUncheckedUpdateManyWithoutAsistanceNestedInput = {
    create?: XOR<asistance_registerCreateWithoutAsistanceInput, asistance_registerUncheckedCreateWithoutAsistanceInput> | asistance_registerCreateWithoutAsistanceInput[] | asistance_registerUncheckedCreateWithoutAsistanceInput[]
    connectOrCreate?: asistance_registerCreateOrConnectWithoutAsistanceInput | asistance_registerCreateOrConnectWithoutAsistanceInput[]
    upsert?: asistance_registerUpsertWithWhereUniqueWithoutAsistanceInput | asistance_registerUpsertWithWhereUniqueWithoutAsistanceInput[]
    createMany?: asistance_registerCreateManyAsistanceInputEnvelope
    set?: asistance_registerWhereUniqueInput | asistance_registerWhereUniqueInput[]
    disconnect?: asistance_registerWhereUniqueInput | asistance_registerWhereUniqueInput[]
    delete?: asistance_registerWhereUniqueInput | asistance_registerWhereUniqueInput[]
    connect?: asistance_registerWhereUniqueInput | asistance_registerWhereUniqueInput[]
    update?: asistance_registerUpdateWithWhereUniqueWithoutAsistanceInput | asistance_registerUpdateWithWhereUniqueWithoutAsistanceInput[]
    updateMany?: asistance_registerUpdateManyWithWhereWithoutAsistanceInput | asistance_registerUpdateManyWithWhereWithoutAsistanceInput[]
    deleteMany?: asistance_registerScalarWhereInput | asistance_registerScalarWhereInput[]
  }

  export type studentCreateNestedOneWithoutAsistances_registerInput = {
    create?: XOR<studentCreateWithoutAsistances_registerInput, studentUncheckedCreateWithoutAsistances_registerInput>
    connectOrCreate?: studentCreateOrConnectWithoutAsistances_registerInput
    connect?: studentWhereUniqueInput
  }

  export type asistanceCreateNestedOneWithoutRegistersInput = {
    create?: XOR<asistanceCreateWithoutRegistersInput, asistanceUncheckedCreateWithoutRegistersInput>
    connectOrCreate?: asistanceCreateOrConnectWithoutRegistersInput
    connect?: asistanceWhereUniqueInput
  }

  export type EnumStatusAsistanceFieldUpdateOperationsInput = {
    set?: $Enums.StatusAsistance
  }

  export type studentUpdateOneRequiredWithoutAsistances_registerNestedInput = {
    create?: XOR<studentCreateWithoutAsistances_registerInput, studentUncheckedCreateWithoutAsistances_registerInput>
    connectOrCreate?: studentCreateOrConnectWithoutAsistances_registerInput
    upsert?: studentUpsertWithoutAsistances_registerInput
    connect?: studentWhereUniqueInput
    update?: XOR<XOR<studentUpdateToOneWithWhereWithoutAsistances_registerInput, studentUpdateWithoutAsistances_registerInput>, studentUncheckedUpdateWithoutAsistances_registerInput>
  }

  export type asistanceUpdateOneRequiredWithoutRegistersNestedInput = {
    create?: XOR<asistanceCreateWithoutRegistersInput, asistanceUncheckedCreateWithoutRegistersInput>
    connectOrCreate?: asistanceCreateOrConnectWithoutRegistersInput
    upsert?: asistanceUpsertWithoutRegistersInput
    connect?: asistanceWhereUniqueInput
    update?: XOR<XOR<asistanceUpdateToOneWithWhereWithoutRegistersInput, asistanceUpdateWithoutRegistersInput>, asistanceUncheckedUpdateWithoutRegistersInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type NestedEnumStatusAsistanceFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusAsistance | EnumStatusAsistanceFieldRefInput<$PrismaModel>
    in?: $Enums.StatusAsistance[] | ListEnumStatusAsistanceFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusAsistance[] | ListEnumStatusAsistanceFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusAsistanceFilter<$PrismaModel> | $Enums.StatusAsistance
  }

  export type NestedEnumStatusAsistanceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusAsistance | EnumStatusAsistanceFieldRefInput<$PrismaModel>
    in?: $Enums.StatusAsistance[] | ListEnumStatusAsistanceFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusAsistance[] | ListEnumStatusAsistanceFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusAsistanceWithAggregatesFilter<$PrismaModel> | $Enums.StatusAsistance
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusAsistanceFilter<$PrismaModel>
    _max?: NestedEnumStatusAsistanceFilter<$PrismaModel>
  }

  export type studentCreateWithoutUserInput = {
    names: string
    last_names: string
    ID_card_url: string
    study_certificate_url: string
    activities?: submissionCreateNestedManyWithoutStudentInput
    inscriptions?: inscriptionCreateNestedManyWithoutStudentInput
    asistances_register?: asistance_registerCreateNestedManyWithoutStudentInput
  }

  export type studentUncheckedCreateWithoutUserInput = {
    id?: number
    names: string
    last_names: string
    ID_card_url: string
    study_certificate_url: string
    activities?: submissionUncheckedCreateNestedManyWithoutStudentInput
    inscriptions?: inscriptionUncheckedCreateNestedManyWithoutStudentInput
    asistances_register?: asistance_registerUncheckedCreateNestedManyWithoutStudentInput
  }

  export type studentCreateOrConnectWithoutUserInput = {
    where: studentWhereUniqueInput
    create: XOR<studentCreateWithoutUserInput, studentUncheckedCreateWithoutUserInput>
  }

  export type studentCreateManyUserInputEnvelope = {
    data: studentCreateManyUserInput | studentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type teacherCreateWithoutUserInput = {
    names: string
    last_names: string
    ID_card_url: string
    cv_url: string
    third_level_degree: string
    modules?: moduleCreateNestedManyWithoutTeacherInput
  }

  export type teacherUncheckedCreateWithoutUserInput = {
    id?: number
    names: string
    last_names: string
    ID_card_url: string
    cv_url: string
    third_level_degree: string
    modules?: moduleUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type teacherCreateOrConnectWithoutUserInput = {
    where: teacherWhereUniqueInput
    create: XOR<teacherCreateWithoutUserInput, teacherUncheckedCreateWithoutUserInput>
  }

  export type teacherCreateManyUserInputEnvelope = {
    data: teacherCreateManyUserInput | teacherCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type studentUpsertWithWhereUniqueWithoutUserInput = {
    where: studentWhereUniqueInput
    update: XOR<studentUpdateWithoutUserInput, studentUncheckedUpdateWithoutUserInput>
    create: XOR<studentCreateWithoutUserInput, studentUncheckedCreateWithoutUserInput>
  }

  export type studentUpdateWithWhereUniqueWithoutUserInput = {
    where: studentWhereUniqueInput
    data: XOR<studentUpdateWithoutUserInput, studentUncheckedUpdateWithoutUserInput>
  }

  export type studentUpdateManyWithWhereWithoutUserInput = {
    where: studentScalarWhereInput
    data: XOR<studentUpdateManyMutationInput, studentUncheckedUpdateManyWithoutUserInput>
  }

  export type studentScalarWhereInput = {
    AND?: studentScalarWhereInput | studentScalarWhereInput[]
    OR?: studentScalarWhereInput[]
    NOT?: studentScalarWhereInput | studentScalarWhereInput[]
    id?: IntFilter<"student"> | number
    names?: StringFilter<"student"> | string
    last_names?: StringFilter<"student"> | string
    ID_card_url?: StringFilter<"student"> | string
    study_certificate_url?: StringFilter<"student"> | string
    user_id?: IntFilter<"student"> | number
  }

  export type teacherUpsertWithWhereUniqueWithoutUserInput = {
    where: teacherWhereUniqueInput
    update: XOR<teacherUpdateWithoutUserInput, teacherUncheckedUpdateWithoutUserInput>
    create: XOR<teacherCreateWithoutUserInput, teacherUncheckedCreateWithoutUserInput>
  }

  export type teacherUpdateWithWhereUniqueWithoutUserInput = {
    where: teacherWhereUniqueInput
    data: XOR<teacherUpdateWithoutUserInput, teacherUncheckedUpdateWithoutUserInput>
  }

  export type teacherUpdateManyWithWhereWithoutUserInput = {
    where: teacherScalarWhereInput
    data: XOR<teacherUpdateManyMutationInput, teacherUncheckedUpdateManyWithoutUserInput>
  }

  export type teacherScalarWhereInput = {
    AND?: teacherScalarWhereInput | teacherScalarWhereInput[]
    OR?: teacherScalarWhereInput[]
    NOT?: teacherScalarWhereInput | teacherScalarWhereInput[]
    id?: IntFilter<"teacher"> | number
    names?: StringFilter<"teacher"> | string
    last_names?: StringFilter<"teacher"> | string
    ID_card_url?: StringFilter<"teacher"> | string
    cv_url?: StringFilter<"teacher"> | string
    third_level_degree?: StringFilter<"teacher"> | string
    user_id?: IntFilter<"teacher"> | number
  }

  export type submissionCreateWithoutStudentInput = {
    grade: number
    comment: string
    state_sub: string
    state_gra: string
    resources?: submission_resourceCreateNestedManyWithoutSubmissionInput
    activity: activityCreateNestedOneWithoutSubmissionInput
  }

  export type submissionUncheckedCreateWithoutStudentInput = {
    id?: number
    grade: number
    comment: string
    state_sub: string
    state_gra: string
    activity_id: number
    resources?: submission_resourceUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type submissionCreateOrConnectWithoutStudentInput = {
    where: submissionWhereUniqueInput
    create: XOR<submissionCreateWithoutStudentInput, submissionUncheckedCreateWithoutStudentInput>
  }

  export type submissionCreateManyStudentInputEnvelope = {
    data: submissionCreateManyStudentInput | submissionCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type inscriptionCreateWithoutStudentInput = {
    course: courseCreateNestedOneWithoutInscriptionsInput
  }

  export type inscriptionUncheckedCreateWithoutStudentInput = {
    id?: number
    course_id: number
  }

  export type inscriptionCreateOrConnectWithoutStudentInput = {
    where: inscriptionWhereUniqueInput
    create: XOR<inscriptionCreateWithoutStudentInput, inscriptionUncheckedCreateWithoutStudentInput>
  }

  export type inscriptionCreateManyStudentInputEnvelope = {
    data: inscriptionCreateManyStudentInput | inscriptionCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type asistance_registerCreateWithoutStudentInput = {
    status?: $Enums.StatusAsistance
    asistance: asistanceCreateNestedOneWithoutRegistersInput
  }

  export type asistance_registerUncheckedCreateWithoutStudentInput = {
    id?: number
    status?: $Enums.StatusAsistance
    asistance_id: number
  }

  export type asistance_registerCreateOrConnectWithoutStudentInput = {
    where: asistance_registerWhereUniqueInput
    create: XOR<asistance_registerCreateWithoutStudentInput, asistance_registerUncheckedCreateWithoutStudentInput>
  }

  export type asistance_registerCreateManyStudentInputEnvelope = {
    data: asistance_registerCreateManyStudentInput | asistance_registerCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type userCreateWithoutStudentsInput = {
    username: string
    password: string
    email: string
    rol?: $Enums.Role
    photo_url: string
    teacher?: teacherCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutStudentsInput = {
    id?: number
    username: string
    password: string
    email: string
    rol?: $Enums.Role
    photo_url: string
    teacher?: teacherUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutStudentsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutStudentsInput, userUncheckedCreateWithoutStudentsInput>
  }

  export type submissionUpsertWithWhereUniqueWithoutStudentInput = {
    where: submissionWhereUniqueInput
    update: XOR<submissionUpdateWithoutStudentInput, submissionUncheckedUpdateWithoutStudentInput>
    create: XOR<submissionCreateWithoutStudentInput, submissionUncheckedCreateWithoutStudentInput>
  }

  export type submissionUpdateWithWhereUniqueWithoutStudentInput = {
    where: submissionWhereUniqueInput
    data: XOR<submissionUpdateWithoutStudentInput, submissionUncheckedUpdateWithoutStudentInput>
  }

  export type submissionUpdateManyWithWhereWithoutStudentInput = {
    where: submissionScalarWhereInput
    data: XOR<submissionUpdateManyMutationInput, submissionUncheckedUpdateManyWithoutStudentInput>
  }

  export type submissionScalarWhereInput = {
    AND?: submissionScalarWhereInput | submissionScalarWhereInput[]
    OR?: submissionScalarWhereInput[]
    NOT?: submissionScalarWhereInput | submissionScalarWhereInput[]
    id?: IntFilter<"submission"> | number
    grade?: FloatFilter<"submission"> | number
    comment?: StringFilter<"submission"> | string
    state_sub?: StringFilter<"submission"> | string
    state_gra?: StringFilter<"submission"> | string
    student_id?: IntFilter<"submission"> | number
    activity_id?: IntFilter<"submission"> | number
  }

  export type inscriptionUpsertWithWhereUniqueWithoutStudentInput = {
    where: inscriptionWhereUniqueInput
    update: XOR<inscriptionUpdateWithoutStudentInput, inscriptionUncheckedUpdateWithoutStudentInput>
    create: XOR<inscriptionCreateWithoutStudentInput, inscriptionUncheckedCreateWithoutStudentInput>
  }

  export type inscriptionUpdateWithWhereUniqueWithoutStudentInput = {
    where: inscriptionWhereUniqueInput
    data: XOR<inscriptionUpdateWithoutStudentInput, inscriptionUncheckedUpdateWithoutStudentInput>
  }

  export type inscriptionUpdateManyWithWhereWithoutStudentInput = {
    where: inscriptionScalarWhereInput
    data: XOR<inscriptionUpdateManyMutationInput, inscriptionUncheckedUpdateManyWithoutStudentInput>
  }

  export type inscriptionScalarWhereInput = {
    AND?: inscriptionScalarWhereInput | inscriptionScalarWhereInput[]
    OR?: inscriptionScalarWhereInput[]
    NOT?: inscriptionScalarWhereInput | inscriptionScalarWhereInput[]
    id?: IntFilter<"inscription"> | number
    student_id?: IntFilter<"inscription"> | number
    course_id?: IntFilter<"inscription"> | number
  }

  export type asistance_registerUpsertWithWhereUniqueWithoutStudentInput = {
    where: asistance_registerWhereUniqueInput
    update: XOR<asistance_registerUpdateWithoutStudentInput, asistance_registerUncheckedUpdateWithoutStudentInput>
    create: XOR<asistance_registerCreateWithoutStudentInput, asistance_registerUncheckedCreateWithoutStudentInput>
  }

  export type asistance_registerUpdateWithWhereUniqueWithoutStudentInput = {
    where: asistance_registerWhereUniqueInput
    data: XOR<asistance_registerUpdateWithoutStudentInput, asistance_registerUncheckedUpdateWithoutStudentInput>
  }

  export type asistance_registerUpdateManyWithWhereWithoutStudentInput = {
    where: asistance_registerScalarWhereInput
    data: XOR<asistance_registerUpdateManyMutationInput, asistance_registerUncheckedUpdateManyWithoutStudentInput>
  }

  export type asistance_registerScalarWhereInput = {
    AND?: asistance_registerScalarWhereInput | asistance_registerScalarWhereInput[]
    OR?: asistance_registerScalarWhereInput[]
    NOT?: asistance_registerScalarWhereInput | asistance_registerScalarWhereInput[]
    id?: IntFilter<"asistance_register"> | number
    status?: EnumStatusAsistanceFilter<"asistance_register"> | $Enums.StatusAsistance
    student_id?: IntFilter<"asistance_register"> | number
    asistance_id?: IntFilter<"asistance_register"> | number
  }

  export type userUpsertWithoutStudentsInput = {
    update: XOR<userUpdateWithoutStudentsInput, userUncheckedUpdateWithoutStudentsInput>
    create: XOR<userCreateWithoutStudentsInput, userUncheckedCreateWithoutStudentsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutStudentsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutStudentsInput, userUncheckedUpdateWithoutStudentsInput>
  }

  export type userUpdateWithoutStudentsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    rol?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    photo_url?: StringFieldUpdateOperationsInput | string
    teacher?: teacherUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    rol?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    photo_url?: StringFieldUpdateOperationsInput | string
    teacher?: teacherUncheckedUpdateManyWithoutUserNestedInput
  }

  export type moduleCreateWithoutTeacherInput = {
    title: string
    content: string
    hours: number
    img_url: string
    sections?: sectionCreateNestedManyWithoutModuleInput
    resources?: module_resourceCreateNestedManyWithoutModuleInput
    asistances?: asistanceCreateNestedManyWithoutModuleInput
    course: courseCreateNestedOneWithoutModulesInput
  }

  export type moduleUncheckedCreateWithoutTeacherInput = {
    id?: number
    title: string
    content: string
    hours: number
    img_url: string
    course_id: number
    sections?: sectionUncheckedCreateNestedManyWithoutModuleInput
    resources?: module_resourceUncheckedCreateNestedManyWithoutModuleInput
    asistances?: asistanceUncheckedCreateNestedManyWithoutModuleInput
  }

  export type moduleCreateOrConnectWithoutTeacherInput = {
    where: moduleWhereUniqueInput
    create: XOR<moduleCreateWithoutTeacherInput, moduleUncheckedCreateWithoutTeacherInput>
  }

  export type moduleCreateManyTeacherInputEnvelope = {
    data: moduleCreateManyTeacherInput | moduleCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type userCreateWithoutTeacherInput = {
    username: string
    password: string
    email: string
    rol?: $Enums.Role
    photo_url: string
    students?: studentCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutTeacherInput = {
    id?: number
    username: string
    password: string
    email: string
    rol?: $Enums.Role
    photo_url: string
    students?: studentUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutTeacherInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutTeacherInput, userUncheckedCreateWithoutTeacherInput>
  }

  export type moduleUpsertWithWhereUniqueWithoutTeacherInput = {
    where: moduleWhereUniqueInput
    update: XOR<moduleUpdateWithoutTeacherInput, moduleUncheckedUpdateWithoutTeacherInput>
    create: XOR<moduleCreateWithoutTeacherInput, moduleUncheckedCreateWithoutTeacherInput>
  }

  export type moduleUpdateWithWhereUniqueWithoutTeacherInput = {
    where: moduleWhereUniqueInput
    data: XOR<moduleUpdateWithoutTeacherInput, moduleUncheckedUpdateWithoutTeacherInput>
  }

  export type moduleUpdateManyWithWhereWithoutTeacherInput = {
    where: moduleScalarWhereInput
    data: XOR<moduleUpdateManyMutationInput, moduleUncheckedUpdateManyWithoutTeacherInput>
  }

  export type moduleScalarWhereInput = {
    AND?: moduleScalarWhereInput | moduleScalarWhereInput[]
    OR?: moduleScalarWhereInput[]
    NOT?: moduleScalarWhereInput | moduleScalarWhereInput[]
    id?: IntFilter<"module"> | number
    title?: StringFilter<"module"> | string
    content?: StringFilter<"module"> | string
    hours?: IntFilter<"module"> | number
    img_url?: StringFilter<"module"> | string
    teacher_id?: IntFilter<"module"> | number
    course_id?: IntFilter<"module"> | number
  }

  export type userUpsertWithoutTeacherInput = {
    update: XOR<userUpdateWithoutTeacherInput, userUncheckedUpdateWithoutTeacherInput>
    create: XOR<userCreateWithoutTeacherInput, userUncheckedCreateWithoutTeacherInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutTeacherInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutTeacherInput, userUncheckedUpdateWithoutTeacherInput>
  }

  export type userUpdateWithoutTeacherInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    rol?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    photo_url?: StringFieldUpdateOperationsInput | string
    students?: studentUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    rol?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    photo_url?: StringFieldUpdateOperationsInput | string
    students?: studentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type studentCreateWithoutInscriptionsInput = {
    names: string
    last_names: string
    ID_card_url: string
    study_certificate_url: string
    activities?: submissionCreateNestedManyWithoutStudentInput
    asistances_register?: asistance_registerCreateNestedManyWithoutStudentInput
    user: userCreateNestedOneWithoutStudentsInput
  }

  export type studentUncheckedCreateWithoutInscriptionsInput = {
    id?: number
    names: string
    last_names: string
    ID_card_url: string
    study_certificate_url: string
    user_id: number
    activities?: submissionUncheckedCreateNestedManyWithoutStudentInput
    asistances_register?: asistance_registerUncheckedCreateNestedManyWithoutStudentInput
  }

  export type studentCreateOrConnectWithoutInscriptionsInput = {
    where: studentWhereUniqueInput
    create: XOR<studentCreateWithoutInscriptionsInput, studentUncheckedCreateWithoutInscriptionsInput>
  }

  export type courseCreateWithoutInscriptionsInput = {
    topic: string
    content: string
    start_at: Date | string
    end_at: Date | string
    modality: string
    objective: string
    periods: number
    qualification: string
    requirements: string
    type: string
    visible: boolean
    img_url: string
    modules?: moduleCreateNestedManyWithoutCourseInput
  }

  export type courseUncheckedCreateWithoutInscriptionsInput = {
    id?: number
    topic: string
    content: string
    start_at: Date | string
    end_at: Date | string
    modality: string
    objective: string
    periods: number
    qualification: string
    requirements: string
    type: string
    visible: boolean
    img_url: string
    modules?: moduleUncheckedCreateNestedManyWithoutCourseInput
  }

  export type courseCreateOrConnectWithoutInscriptionsInput = {
    where: courseWhereUniqueInput
    create: XOR<courseCreateWithoutInscriptionsInput, courseUncheckedCreateWithoutInscriptionsInput>
  }

  export type studentUpsertWithoutInscriptionsInput = {
    update: XOR<studentUpdateWithoutInscriptionsInput, studentUncheckedUpdateWithoutInscriptionsInput>
    create: XOR<studentCreateWithoutInscriptionsInput, studentUncheckedCreateWithoutInscriptionsInput>
    where?: studentWhereInput
  }

  export type studentUpdateToOneWithWhereWithoutInscriptionsInput = {
    where?: studentWhereInput
    data: XOR<studentUpdateWithoutInscriptionsInput, studentUncheckedUpdateWithoutInscriptionsInput>
  }

  export type studentUpdateWithoutInscriptionsInput = {
    names?: StringFieldUpdateOperationsInput | string
    last_names?: StringFieldUpdateOperationsInput | string
    ID_card_url?: StringFieldUpdateOperationsInput | string
    study_certificate_url?: StringFieldUpdateOperationsInput | string
    activities?: submissionUpdateManyWithoutStudentNestedInput
    asistances_register?: asistance_registerUpdateManyWithoutStudentNestedInput
    user?: userUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type studentUncheckedUpdateWithoutInscriptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    names?: StringFieldUpdateOperationsInput | string
    last_names?: StringFieldUpdateOperationsInput | string
    ID_card_url?: StringFieldUpdateOperationsInput | string
    study_certificate_url?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    activities?: submissionUncheckedUpdateManyWithoutStudentNestedInput
    asistances_register?: asistance_registerUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type courseUpsertWithoutInscriptionsInput = {
    update: XOR<courseUpdateWithoutInscriptionsInput, courseUncheckedUpdateWithoutInscriptionsInput>
    create: XOR<courseCreateWithoutInscriptionsInput, courseUncheckedCreateWithoutInscriptionsInput>
    where?: courseWhereInput
  }

  export type courseUpdateToOneWithWhereWithoutInscriptionsInput = {
    where?: courseWhereInput
    data: XOR<courseUpdateWithoutInscriptionsInput, courseUncheckedUpdateWithoutInscriptionsInput>
  }

  export type courseUpdateWithoutInscriptionsInput = {
    topic?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modality?: StringFieldUpdateOperationsInput | string
    objective?: StringFieldUpdateOperationsInput | string
    periods?: IntFieldUpdateOperationsInput | number
    qualification?: StringFieldUpdateOperationsInput | string
    requirements?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    visible?: BoolFieldUpdateOperationsInput | boolean
    img_url?: StringFieldUpdateOperationsInput | string
    modules?: moduleUpdateManyWithoutCourseNestedInput
  }

  export type courseUncheckedUpdateWithoutInscriptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    topic?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modality?: StringFieldUpdateOperationsInput | string
    objective?: StringFieldUpdateOperationsInput | string
    periods?: IntFieldUpdateOperationsInput | number
    qualification?: StringFieldUpdateOperationsInput | string
    requirements?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    visible?: BoolFieldUpdateOperationsInput | boolean
    img_url?: StringFieldUpdateOperationsInput | string
    modules?: moduleUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type moduleCreateWithoutCourseInput = {
    title: string
    content: string
    hours: number
    img_url: string
    sections?: sectionCreateNestedManyWithoutModuleInput
    resources?: module_resourceCreateNestedManyWithoutModuleInput
    asistances?: asistanceCreateNestedManyWithoutModuleInput
    teacher: teacherCreateNestedOneWithoutModulesInput
  }

  export type moduleUncheckedCreateWithoutCourseInput = {
    id?: number
    title: string
    content: string
    hours: number
    img_url: string
    teacher_id: number
    sections?: sectionUncheckedCreateNestedManyWithoutModuleInput
    resources?: module_resourceUncheckedCreateNestedManyWithoutModuleInput
    asistances?: asistanceUncheckedCreateNestedManyWithoutModuleInput
  }

  export type moduleCreateOrConnectWithoutCourseInput = {
    where: moduleWhereUniqueInput
    create: XOR<moduleCreateWithoutCourseInput, moduleUncheckedCreateWithoutCourseInput>
  }

  export type moduleCreateManyCourseInputEnvelope = {
    data: moduleCreateManyCourseInput | moduleCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type inscriptionCreateWithoutCourseInput = {
    student: studentCreateNestedOneWithoutInscriptionsInput
  }

  export type inscriptionUncheckedCreateWithoutCourseInput = {
    id?: number
    student_id: number
  }

  export type inscriptionCreateOrConnectWithoutCourseInput = {
    where: inscriptionWhereUniqueInput
    create: XOR<inscriptionCreateWithoutCourseInput, inscriptionUncheckedCreateWithoutCourseInput>
  }

  export type inscriptionCreateManyCourseInputEnvelope = {
    data: inscriptionCreateManyCourseInput | inscriptionCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type moduleUpsertWithWhereUniqueWithoutCourseInput = {
    where: moduleWhereUniqueInput
    update: XOR<moduleUpdateWithoutCourseInput, moduleUncheckedUpdateWithoutCourseInput>
    create: XOR<moduleCreateWithoutCourseInput, moduleUncheckedCreateWithoutCourseInput>
  }

  export type moduleUpdateWithWhereUniqueWithoutCourseInput = {
    where: moduleWhereUniqueInput
    data: XOR<moduleUpdateWithoutCourseInput, moduleUncheckedUpdateWithoutCourseInput>
  }

  export type moduleUpdateManyWithWhereWithoutCourseInput = {
    where: moduleScalarWhereInput
    data: XOR<moduleUpdateManyMutationInput, moduleUncheckedUpdateManyWithoutCourseInput>
  }

  export type inscriptionUpsertWithWhereUniqueWithoutCourseInput = {
    where: inscriptionWhereUniqueInput
    update: XOR<inscriptionUpdateWithoutCourseInput, inscriptionUncheckedUpdateWithoutCourseInput>
    create: XOR<inscriptionCreateWithoutCourseInput, inscriptionUncheckedCreateWithoutCourseInput>
  }

  export type inscriptionUpdateWithWhereUniqueWithoutCourseInput = {
    where: inscriptionWhereUniqueInput
    data: XOR<inscriptionUpdateWithoutCourseInput, inscriptionUncheckedUpdateWithoutCourseInput>
  }

  export type inscriptionUpdateManyWithWhereWithoutCourseInput = {
    where: inscriptionScalarWhereInput
    data: XOR<inscriptionUpdateManyMutationInput, inscriptionUncheckedUpdateManyWithoutCourseInput>
  }

  export type sectionCreateWithoutModuleInput = {
    title: string
    content: string
    activities?: activityCreateNestedManyWithoutSectionInput
    resources?: section_resourceCreateNestedManyWithoutSectionInput
  }

  export type sectionUncheckedCreateWithoutModuleInput = {
    id?: number
    title: string
    content: string
    activities?: activityUncheckedCreateNestedManyWithoutSectionInput
    resources?: section_resourceUncheckedCreateNestedManyWithoutSectionInput
  }

  export type sectionCreateOrConnectWithoutModuleInput = {
    where: sectionWhereUniqueInput
    create: XOR<sectionCreateWithoutModuleInput, sectionUncheckedCreateWithoutModuleInput>
  }

  export type sectionCreateManyModuleInputEnvelope = {
    data: sectionCreateManyModuleInput | sectionCreateManyModuleInput[]
    skipDuplicates?: boolean
  }

  export type module_resourceCreateWithoutModuleInput = {
    url_resource: string
    title: string
  }

  export type module_resourceUncheckedCreateWithoutModuleInput = {
    id?: number
    url_resource: string
    title: string
  }

  export type module_resourceCreateOrConnectWithoutModuleInput = {
    where: module_resourceWhereUniqueInput
    create: XOR<module_resourceCreateWithoutModuleInput, module_resourceUncheckedCreateWithoutModuleInput>
  }

  export type module_resourceCreateManyModuleInputEnvelope = {
    data: module_resourceCreateManyModuleInput | module_resourceCreateManyModuleInput[]
    skipDuplicates?: boolean
  }

  export type asistanceCreateWithoutModuleInput = {
    description: string
    date: Date | string
    registers?: asistance_registerCreateNestedManyWithoutAsistanceInput
  }

  export type asistanceUncheckedCreateWithoutModuleInput = {
    id?: number
    description: string
    date: Date | string
    registers?: asistance_registerUncheckedCreateNestedManyWithoutAsistanceInput
  }

  export type asistanceCreateOrConnectWithoutModuleInput = {
    where: asistanceWhereUniqueInput
    create: XOR<asistanceCreateWithoutModuleInput, asistanceUncheckedCreateWithoutModuleInput>
  }

  export type asistanceCreateManyModuleInputEnvelope = {
    data: asistanceCreateManyModuleInput | asistanceCreateManyModuleInput[]
    skipDuplicates?: boolean
  }

  export type teacherCreateWithoutModulesInput = {
    names: string
    last_names: string
    ID_card_url: string
    cv_url: string
    third_level_degree: string
    user: userCreateNestedOneWithoutTeacherInput
  }

  export type teacherUncheckedCreateWithoutModulesInput = {
    id?: number
    names: string
    last_names: string
    ID_card_url: string
    cv_url: string
    third_level_degree: string
    user_id: number
  }

  export type teacherCreateOrConnectWithoutModulesInput = {
    where: teacherWhereUniqueInput
    create: XOR<teacherCreateWithoutModulesInput, teacherUncheckedCreateWithoutModulesInput>
  }

  export type courseCreateWithoutModulesInput = {
    topic: string
    content: string
    start_at: Date | string
    end_at: Date | string
    modality: string
    objective: string
    periods: number
    qualification: string
    requirements: string
    type: string
    visible: boolean
    img_url: string
    inscriptions?: inscriptionCreateNestedManyWithoutCourseInput
  }

  export type courseUncheckedCreateWithoutModulesInput = {
    id?: number
    topic: string
    content: string
    start_at: Date | string
    end_at: Date | string
    modality: string
    objective: string
    periods: number
    qualification: string
    requirements: string
    type: string
    visible: boolean
    img_url: string
    inscriptions?: inscriptionUncheckedCreateNestedManyWithoutCourseInput
  }

  export type courseCreateOrConnectWithoutModulesInput = {
    where: courseWhereUniqueInput
    create: XOR<courseCreateWithoutModulesInput, courseUncheckedCreateWithoutModulesInput>
  }

  export type sectionUpsertWithWhereUniqueWithoutModuleInput = {
    where: sectionWhereUniqueInput
    update: XOR<sectionUpdateWithoutModuleInput, sectionUncheckedUpdateWithoutModuleInput>
    create: XOR<sectionCreateWithoutModuleInput, sectionUncheckedCreateWithoutModuleInput>
  }

  export type sectionUpdateWithWhereUniqueWithoutModuleInput = {
    where: sectionWhereUniqueInput
    data: XOR<sectionUpdateWithoutModuleInput, sectionUncheckedUpdateWithoutModuleInput>
  }

  export type sectionUpdateManyWithWhereWithoutModuleInput = {
    where: sectionScalarWhereInput
    data: XOR<sectionUpdateManyMutationInput, sectionUncheckedUpdateManyWithoutModuleInput>
  }

  export type sectionScalarWhereInput = {
    AND?: sectionScalarWhereInput | sectionScalarWhereInput[]
    OR?: sectionScalarWhereInput[]
    NOT?: sectionScalarWhereInput | sectionScalarWhereInput[]
    id?: IntFilter<"section"> | number
    title?: StringFilter<"section"> | string
    content?: StringFilter<"section"> | string
    module_id?: IntFilter<"section"> | number
  }

  export type module_resourceUpsertWithWhereUniqueWithoutModuleInput = {
    where: module_resourceWhereUniqueInput
    update: XOR<module_resourceUpdateWithoutModuleInput, module_resourceUncheckedUpdateWithoutModuleInput>
    create: XOR<module_resourceCreateWithoutModuleInput, module_resourceUncheckedCreateWithoutModuleInput>
  }

  export type module_resourceUpdateWithWhereUniqueWithoutModuleInput = {
    where: module_resourceWhereUniqueInput
    data: XOR<module_resourceUpdateWithoutModuleInput, module_resourceUncheckedUpdateWithoutModuleInput>
  }

  export type module_resourceUpdateManyWithWhereWithoutModuleInput = {
    where: module_resourceScalarWhereInput
    data: XOR<module_resourceUpdateManyMutationInput, module_resourceUncheckedUpdateManyWithoutModuleInput>
  }

  export type module_resourceScalarWhereInput = {
    AND?: module_resourceScalarWhereInput | module_resourceScalarWhereInput[]
    OR?: module_resourceScalarWhereInput[]
    NOT?: module_resourceScalarWhereInput | module_resourceScalarWhereInput[]
    id?: IntFilter<"module_resource"> | number
    url_resource?: StringFilter<"module_resource"> | string
    module_id?: IntFilter<"module_resource"> | number
    title?: StringFilter<"module_resource"> | string
  }

  export type asistanceUpsertWithWhereUniqueWithoutModuleInput = {
    where: asistanceWhereUniqueInput
    update: XOR<asistanceUpdateWithoutModuleInput, asistanceUncheckedUpdateWithoutModuleInput>
    create: XOR<asistanceCreateWithoutModuleInput, asistanceUncheckedCreateWithoutModuleInput>
  }

  export type asistanceUpdateWithWhereUniqueWithoutModuleInput = {
    where: asistanceWhereUniqueInput
    data: XOR<asistanceUpdateWithoutModuleInput, asistanceUncheckedUpdateWithoutModuleInput>
  }

  export type asistanceUpdateManyWithWhereWithoutModuleInput = {
    where: asistanceScalarWhereInput
    data: XOR<asistanceUpdateManyMutationInput, asistanceUncheckedUpdateManyWithoutModuleInput>
  }

  export type asistanceScalarWhereInput = {
    AND?: asistanceScalarWhereInput | asistanceScalarWhereInput[]
    OR?: asistanceScalarWhereInput[]
    NOT?: asistanceScalarWhereInput | asistanceScalarWhereInput[]
    id?: IntFilter<"asistance"> | number
    description?: StringFilter<"asistance"> | string
    date?: DateTimeFilter<"asistance"> | Date | string
    module_id?: IntFilter<"asistance"> | number
  }

  export type teacherUpsertWithoutModulesInput = {
    update: XOR<teacherUpdateWithoutModulesInput, teacherUncheckedUpdateWithoutModulesInput>
    create: XOR<teacherCreateWithoutModulesInput, teacherUncheckedCreateWithoutModulesInput>
    where?: teacherWhereInput
  }

  export type teacherUpdateToOneWithWhereWithoutModulesInput = {
    where?: teacherWhereInput
    data: XOR<teacherUpdateWithoutModulesInput, teacherUncheckedUpdateWithoutModulesInput>
  }

  export type teacherUpdateWithoutModulesInput = {
    names?: StringFieldUpdateOperationsInput | string
    last_names?: StringFieldUpdateOperationsInput | string
    ID_card_url?: StringFieldUpdateOperationsInput | string
    cv_url?: StringFieldUpdateOperationsInput | string
    third_level_degree?: StringFieldUpdateOperationsInput | string
    user?: userUpdateOneRequiredWithoutTeacherNestedInput
  }

  export type teacherUncheckedUpdateWithoutModulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    names?: StringFieldUpdateOperationsInput | string
    last_names?: StringFieldUpdateOperationsInput | string
    ID_card_url?: StringFieldUpdateOperationsInput | string
    cv_url?: StringFieldUpdateOperationsInput | string
    third_level_degree?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type courseUpsertWithoutModulesInput = {
    update: XOR<courseUpdateWithoutModulesInput, courseUncheckedUpdateWithoutModulesInput>
    create: XOR<courseCreateWithoutModulesInput, courseUncheckedCreateWithoutModulesInput>
    where?: courseWhereInput
  }

  export type courseUpdateToOneWithWhereWithoutModulesInput = {
    where?: courseWhereInput
    data: XOR<courseUpdateWithoutModulesInput, courseUncheckedUpdateWithoutModulesInput>
  }

  export type courseUpdateWithoutModulesInput = {
    topic?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modality?: StringFieldUpdateOperationsInput | string
    objective?: StringFieldUpdateOperationsInput | string
    periods?: IntFieldUpdateOperationsInput | number
    qualification?: StringFieldUpdateOperationsInput | string
    requirements?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    visible?: BoolFieldUpdateOperationsInput | boolean
    img_url?: StringFieldUpdateOperationsInput | string
    inscriptions?: inscriptionUpdateManyWithoutCourseNestedInput
  }

  export type courseUncheckedUpdateWithoutModulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    topic?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modality?: StringFieldUpdateOperationsInput | string
    objective?: StringFieldUpdateOperationsInput | string
    periods?: IntFieldUpdateOperationsInput | number
    qualification?: StringFieldUpdateOperationsInput | string
    requirements?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    visible?: BoolFieldUpdateOperationsInput | boolean
    img_url?: StringFieldUpdateOperationsInput | string
    inscriptions?: inscriptionUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type moduleCreateWithoutResourcesInput = {
    title: string
    content: string
    hours: number
    img_url: string
    sections?: sectionCreateNestedManyWithoutModuleInput
    asistances?: asistanceCreateNestedManyWithoutModuleInput
    teacher: teacherCreateNestedOneWithoutModulesInput
    course: courseCreateNestedOneWithoutModulesInput
  }

  export type moduleUncheckedCreateWithoutResourcesInput = {
    id?: number
    title: string
    content: string
    hours: number
    img_url: string
    teacher_id: number
    course_id: number
    sections?: sectionUncheckedCreateNestedManyWithoutModuleInput
    asistances?: asistanceUncheckedCreateNestedManyWithoutModuleInput
  }

  export type moduleCreateOrConnectWithoutResourcesInput = {
    where: moduleWhereUniqueInput
    create: XOR<moduleCreateWithoutResourcesInput, moduleUncheckedCreateWithoutResourcesInput>
  }

  export type moduleUpsertWithoutResourcesInput = {
    update: XOR<moduleUpdateWithoutResourcesInput, moduleUncheckedUpdateWithoutResourcesInput>
    create: XOR<moduleCreateWithoutResourcesInput, moduleUncheckedCreateWithoutResourcesInput>
    where?: moduleWhereInput
  }

  export type moduleUpdateToOneWithWhereWithoutResourcesInput = {
    where?: moduleWhereInput
    data: XOR<moduleUpdateWithoutResourcesInput, moduleUncheckedUpdateWithoutResourcesInput>
  }

  export type moduleUpdateWithoutResourcesInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    img_url?: StringFieldUpdateOperationsInput | string
    sections?: sectionUpdateManyWithoutModuleNestedInput
    asistances?: asistanceUpdateManyWithoutModuleNestedInput
    teacher?: teacherUpdateOneRequiredWithoutModulesNestedInput
    course?: courseUpdateOneRequiredWithoutModulesNestedInput
  }

  export type moduleUncheckedUpdateWithoutResourcesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    img_url?: StringFieldUpdateOperationsInput | string
    teacher_id?: IntFieldUpdateOperationsInput | number
    course_id?: IntFieldUpdateOperationsInput | number
    sections?: sectionUncheckedUpdateManyWithoutModuleNestedInput
    asistances?: asistanceUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type activityCreateWithoutSectionInput = {
    title: string
    content: string
    time_due: Date | string
    submission?: submissionCreateNestedManyWithoutActivityInput
    resources?: activity_resourceCreateNestedManyWithoutActivityInput
  }

  export type activityUncheckedCreateWithoutSectionInput = {
    id?: number
    title: string
    content: string
    time_due: Date | string
    submission?: submissionUncheckedCreateNestedManyWithoutActivityInput
    resources?: activity_resourceUncheckedCreateNestedManyWithoutActivityInput
  }

  export type activityCreateOrConnectWithoutSectionInput = {
    where: activityWhereUniqueInput
    create: XOR<activityCreateWithoutSectionInput, activityUncheckedCreateWithoutSectionInput>
  }

  export type activityCreateManySectionInputEnvelope = {
    data: activityCreateManySectionInput | activityCreateManySectionInput[]
    skipDuplicates?: boolean
  }

  export type section_resourceCreateWithoutSectionInput = {
    url_resource: string
    title: string
  }

  export type section_resourceUncheckedCreateWithoutSectionInput = {
    id?: number
    url_resource: string
    title: string
  }

  export type section_resourceCreateOrConnectWithoutSectionInput = {
    where: section_resourceWhereUniqueInput
    create: XOR<section_resourceCreateWithoutSectionInput, section_resourceUncheckedCreateWithoutSectionInput>
  }

  export type section_resourceCreateManySectionInputEnvelope = {
    data: section_resourceCreateManySectionInput | section_resourceCreateManySectionInput[]
    skipDuplicates?: boolean
  }

  export type moduleCreateWithoutSectionsInput = {
    title: string
    content: string
    hours: number
    img_url: string
    resources?: module_resourceCreateNestedManyWithoutModuleInput
    asistances?: asistanceCreateNestedManyWithoutModuleInput
    teacher: teacherCreateNestedOneWithoutModulesInput
    course: courseCreateNestedOneWithoutModulesInput
  }

  export type moduleUncheckedCreateWithoutSectionsInput = {
    id?: number
    title: string
    content: string
    hours: number
    img_url: string
    teacher_id: number
    course_id: number
    resources?: module_resourceUncheckedCreateNestedManyWithoutModuleInput
    asistances?: asistanceUncheckedCreateNestedManyWithoutModuleInput
  }

  export type moduleCreateOrConnectWithoutSectionsInput = {
    where: moduleWhereUniqueInput
    create: XOR<moduleCreateWithoutSectionsInput, moduleUncheckedCreateWithoutSectionsInput>
  }

  export type activityUpsertWithWhereUniqueWithoutSectionInput = {
    where: activityWhereUniqueInput
    update: XOR<activityUpdateWithoutSectionInput, activityUncheckedUpdateWithoutSectionInput>
    create: XOR<activityCreateWithoutSectionInput, activityUncheckedCreateWithoutSectionInput>
  }

  export type activityUpdateWithWhereUniqueWithoutSectionInput = {
    where: activityWhereUniqueInput
    data: XOR<activityUpdateWithoutSectionInput, activityUncheckedUpdateWithoutSectionInput>
  }

  export type activityUpdateManyWithWhereWithoutSectionInput = {
    where: activityScalarWhereInput
    data: XOR<activityUpdateManyMutationInput, activityUncheckedUpdateManyWithoutSectionInput>
  }

  export type activityScalarWhereInput = {
    AND?: activityScalarWhereInput | activityScalarWhereInput[]
    OR?: activityScalarWhereInput[]
    NOT?: activityScalarWhereInput | activityScalarWhereInput[]
    id?: IntFilter<"activity"> | number
    title?: StringFilter<"activity"> | string
    content?: StringFilter<"activity"> | string
    time_due?: DateTimeFilter<"activity"> | Date | string
    section_id?: IntFilter<"activity"> | number
  }

  export type section_resourceUpsertWithWhereUniqueWithoutSectionInput = {
    where: section_resourceWhereUniqueInput
    update: XOR<section_resourceUpdateWithoutSectionInput, section_resourceUncheckedUpdateWithoutSectionInput>
    create: XOR<section_resourceCreateWithoutSectionInput, section_resourceUncheckedCreateWithoutSectionInput>
  }

  export type section_resourceUpdateWithWhereUniqueWithoutSectionInput = {
    where: section_resourceWhereUniqueInput
    data: XOR<section_resourceUpdateWithoutSectionInput, section_resourceUncheckedUpdateWithoutSectionInput>
  }

  export type section_resourceUpdateManyWithWhereWithoutSectionInput = {
    where: section_resourceScalarWhereInput
    data: XOR<section_resourceUpdateManyMutationInput, section_resourceUncheckedUpdateManyWithoutSectionInput>
  }

  export type section_resourceScalarWhereInput = {
    AND?: section_resourceScalarWhereInput | section_resourceScalarWhereInput[]
    OR?: section_resourceScalarWhereInput[]
    NOT?: section_resourceScalarWhereInput | section_resourceScalarWhereInput[]
    id?: IntFilter<"section_resource"> | number
    url_resource?: StringFilter<"section_resource"> | string
    section_id?: IntFilter<"section_resource"> | number
    title?: StringFilter<"section_resource"> | string
  }

  export type moduleUpsertWithoutSectionsInput = {
    update: XOR<moduleUpdateWithoutSectionsInput, moduleUncheckedUpdateWithoutSectionsInput>
    create: XOR<moduleCreateWithoutSectionsInput, moduleUncheckedCreateWithoutSectionsInput>
    where?: moduleWhereInput
  }

  export type moduleUpdateToOneWithWhereWithoutSectionsInput = {
    where?: moduleWhereInput
    data: XOR<moduleUpdateWithoutSectionsInput, moduleUncheckedUpdateWithoutSectionsInput>
  }

  export type moduleUpdateWithoutSectionsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    img_url?: StringFieldUpdateOperationsInput | string
    resources?: module_resourceUpdateManyWithoutModuleNestedInput
    asistances?: asistanceUpdateManyWithoutModuleNestedInput
    teacher?: teacherUpdateOneRequiredWithoutModulesNestedInput
    course?: courseUpdateOneRequiredWithoutModulesNestedInput
  }

  export type moduleUncheckedUpdateWithoutSectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    img_url?: StringFieldUpdateOperationsInput | string
    teacher_id?: IntFieldUpdateOperationsInput | number
    course_id?: IntFieldUpdateOperationsInput | number
    resources?: module_resourceUncheckedUpdateManyWithoutModuleNestedInput
    asistances?: asistanceUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type sectionCreateWithoutResourcesInput = {
    title: string
    content: string
    activities?: activityCreateNestedManyWithoutSectionInput
    module: moduleCreateNestedOneWithoutSectionsInput
  }

  export type sectionUncheckedCreateWithoutResourcesInput = {
    id?: number
    title: string
    content: string
    module_id: number
    activities?: activityUncheckedCreateNestedManyWithoutSectionInput
  }

  export type sectionCreateOrConnectWithoutResourcesInput = {
    where: sectionWhereUniqueInput
    create: XOR<sectionCreateWithoutResourcesInput, sectionUncheckedCreateWithoutResourcesInput>
  }

  export type sectionUpsertWithoutResourcesInput = {
    update: XOR<sectionUpdateWithoutResourcesInput, sectionUncheckedUpdateWithoutResourcesInput>
    create: XOR<sectionCreateWithoutResourcesInput, sectionUncheckedCreateWithoutResourcesInput>
    where?: sectionWhereInput
  }

  export type sectionUpdateToOneWithWhereWithoutResourcesInput = {
    where?: sectionWhereInput
    data: XOR<sectionUpdateWithoutResourcesInput, sectionUncheckedUpdateWithoutResourcesInput>
  }

  export type sectionUpdateWithoutResourcesInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    activities?: activityUpdateManyWithoutSectionNestedInput
    module?: moduleUpdateOneRequiredWithoutSectionsNestedInput
  }

  export type sectionUncheckedUpdateWithoutResourcesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    module_id?: IntFieldUpdateOperationsInput | number
    activities?: activityUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type submissionCreateWithoutActivityInput = {
    grade: number
    comment: string
    state_sub: string
    state_gra: string
    resources?: submission_resourceCreateNestedManyWithoutSubmissionInput
    student: studentCreateNestedOneWithoutActivitiesInput
  }

  export type submissionUncheckedCreateWithoutActivityInput = {
    id?: number
    grade: number
    comment: string
    state_sub: string
    state_gra: string
    student_id: number
    resources?: submission_resourceUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type submissionCreateOrConnectWithoutActivityInput = {
    where: submissionWhereUniqueInput
    create: XOR<submissionCreateWithoutActivityInput, submissionUncheckedCreateWithoutActivityInput>
  }

  export type submissionCreateManyActivityInputEnvelope = {
    data: submissionCreateManyActivityInput | submissionCreateManyActivityInput[]
    skipDuplicates?: boolean
  }

  export type activity_resourceCreateWithoutActivityInput = {
    url_resource: string
    title: string
  }

  export type activity_resourceUncheckedCreateWithoutActivityInput = {
    id?: number
    url_resource: string
    title: string
  }

  export type activity_resourceCreateOrConnectWithoutActivityInput = {
    where: activity_resourceWhereUniqueInput
    create: XOR<activity_resourceCreateWithoutActivityInput, activity_resourceUncheckedCreateWithoutActivityInput>
  }

  export type activity_resourceCreateManyActivityInputEnvelope = {
    data: activity_resourceCreateManyActivityInput | activity_resourceCreateManyActivityInput[]
    skipDuplicates?: boolean
  }

  export type sectionCreateWithoutActivitiesInput = {
    title: string
    content: string
    resources?: section_resourceCreateNestedManyWithoutSectionInput
    module: moduleCreateNestedOneWithoutSectionsInput
  }

  export type sectionUncheckedCreateWithoutActivitiesInput = {
    id?: number
    title: string
    content: string
    module_id: number
    resources?: section_resourceUncheckedCreateNestedManyWithoutSectionInput
  }

  export type sectionCreateOrConnectWithoutActivitiesInput = {
    where: sectionWhereUniqueInput
    create: XOR<sectionCreateWithoutActivitiesInput, sectionUncheckedCreateWithoutActivitiesInput>
  }

  export type submissionUpsertWithWhereUniqueWithoutActivityInput = {
    where: submissionWhereUniqueInput
    update: XOR<submissionUpdateWithoutActivityInput, submissionUncheckedUpdateWithoutActivityInput>
    create: XOR<submissionCreateWithoutActivityInput, submissionUncheckedCreateWithoutActivityInput>
  }

  export type submissionUpdateWithWhereUniqueWithoutActivityInput = {
    where: submissionWhereUniqueInput
    data: XOR<submissionUpdateWithoutActivityInput, submissionUncheckedUpdateWithoutActivityInput>
  }

  export type submissionUpdateManyWithWhereWithoutActivityInput = {
    where: submissionScalarWhereInput
    data: XOR<submissionUpdateManyMutationInput, submissionUncheckedUpdateManyWithoutActivityInput>
  }

  export type activity_resourceUpsertWithWhereUniqueWithoutActivityInput = {
    where: activity_resourceWhereUniqueInput
    update: XOR<activity_resourceUpdateWithoutActivityInput, activity_resourceUncheckedUpdateWithoutActivityInput>
    create: XOR<activity_resourceCreateWithoutActivityInput, activity_resourceUncheckedCreateWithoutActivityInput>
  }

  export type activity_resourceUpdateWithWhereUniqueWithoutActivityInput = {
    where: activity_resourceWhereUniqueInput
    data: XOR<activity_resourceUpdateWithoutActivityInput, activity_resourceUncheckedUpdateWithoutActivityInput>
  }

  export type activity_resourceUpdateManyWithWhereWithoutActivityInput = {
    where: activity_resourceScalarWhereInput
    data: XOR<activity_resourceUpdateManyMutationInput, activity_resourceUncheckedUpdateManyWithoutActivityInput>
  }

  export type activity_resourceScalarWhereInput = {
    AND?: activity_resourceScalarWhereInput | activity_resourceScalarWhereInput[]
    OR?: activity_resourceScalarWhereInput[]
    NOT?: activity_resourceScalarWhereInput | activity_resourceScalarWhereInput[]
    id?: IntFilter<"activity_resource"> | number
    url_resource?: StringFilter<"activity_resource"> | string
    activity_id?: IntFilter<"activity_resource"> | number
    title?: StringFilter<"activity_resource"> | string
  }

  export type sectionUpsertWithoutActivitiesInput = {
    update: XOR<sectionUpdateWithoutActivitiesInput, sectionUncheckedUpdateWithoutActivitiesInput>
    create: XOR<sectionCreateWithoutActivitiesInput, sectionUncheckedCreateWithoutActivitiesInput>
    where?: sectionWhereInput
  }

  export type sectionUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: sectionWhereInput
    data: XOR<sectionUpdateWithoutActivitiesInput, sectionUncheckedUpdateWithoutActivitiesInput>
  }

  export type sectionUpdateWithoutActivitiesInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    resources?: section_resourceUpdateManyWithoutSectionNestedInput
    module?: moduleUpdateOneRequiredWithoutSectionsNestedInput
  }

  export type sectionUncheckedUpdateWithoutActivitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    module_id?: IntFieldUpdateOperationsInput | number
    resources?: section_resourceUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type activityCreateWithoutResourcesInput = {
    title: string
    content: string
    time_due: Date | string
    submission?: submissionCreateNestedManyWithoutActivityInput
    section: sectionCreateNestedOneWithoutActivitiesInput
  }

  export type activityUncheckedCreateWithoutResourcesInput = {
    id?: number
    title: string
    content: string
    time_due: Date | string
    section_id: number
    submission?: submissionUncheckedCreateNestedManyWithoutActivityInput
  }

  export type activityCreateOrConnectWithoutResourcesInput = {
    where: activityWhereUniqueInput
    create: XOR<activityCreateWithoutResourcesInput, activityUncheckedCreateWithoutResourcesInput>
  }

  export type activityUpsertWithoutResourcesInput = {
    update: XOR<activityUpdateWithoutResourcesInput, activityUncheckedUpdateWithoutResourcesInput>
    create: XOR<activityCreateWithoutResourcesInput, activityUncheckedCreateWithoutResourcesInput>
    where?: activityWhereInput
  }

  export type activityUpdateToOneWithWhereWithoutResourcesInput = {
    where?: activityWhereInput
    data: XOR<activityUpdateWithoutResourcesInput, activityUncheckedUpdateWithoutResourcesInput>
  }

  export type activityUpdateWithoutResourcesInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    time_due?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: submissionUpdateManyWithoutActivityNestedInput
    section?: sectionUpdateOneRequiredWithoutActivitiesNestedInput
  }

  export type activityUncheckedUpdateWithoutResourcesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    time_due?: DateTimeFieldUpdateOperationsInput | Date | string
    section_id?: IntFieldUpdateOperationsInput | number
    submission?: submissionUncheckedUpdateManyWithoutActivityNestedInput
  }

  export type submission_resourceCreateWithoutSubmissionInput = {
    url_resource: string
    title: string
  }

  export type submission_resourceUncheckedCreateWithoutSubmissionInput = {
    id?: number
    url_resource: string
    title: string
  }

  export type submission_resourceCreateOrConnectWithoutSubmissionInput = {
    where: submission_resourceWhereUniqueInput
    create: XOR<submission_resourceCreateWithoutSubmissionInput, submission_resourceUncheckedCreateWithoutSubmissionInput>
  }

  export type submission_resourceCreateManySubmissionInputEnvelope = {
    data: submission_resourceCreateManySubmissionInput | submission_resourceCreateManySubmissionInput[]
    skipDuplicates?: boolean
  }

  export type studentCreateWithoutActivitiesInput = {
    names: string
    last_names: string
    ID_card_url: string
    study_certificate_url: string
    inscriptions?: inscriptionCreateNestedManyWithoutStudentInput
    asistances_register?: asistance_registerCreateNestedManyWithoutStudentInput
    user: userCreateNestedOneWithoutStudentsInput
  }

  export type studentUncheckedCreateWithoutActivitiesInput = {
    id?: number
    names: string
    last_names: string
    ID_card_url: string
    study_certificate_url: string
    user_id: number
    inscriptions?: inscriptionUncheckedCreateNestedManyWithoutStudentInput
    asistances_register?: asistance_registerUncheckedCreateNestedManyWithoutStudentInput
  }

  export type studentCreateOrConnectWithoutActivitiesInput = {
    where: studentWhereUniqueInput
    create: XOR<studentCreateWithoutActivitiesInput, studentUncheckedCreateWithoutActivitiesInput>
  }

  export type activityCreateWithoutSubmissionInput = {
    title: string
    content: string
    time_due: Date | string
    resources?: activity_resourceCreateNestedManyWithoutActivityInput
    section: sectionCreateNestedOneWithoutActivitiesInput
  }

  export type activityUncheckedCreateWithoutSubmissionInput = {
    id?: number
    title: string
    content: string
    time_due: Date | string
    section_id: number
    resources?: activity_resourceUncheckedCreateNestedManyWithoutActivityInput
  }

  export type activityCreateOrConnectWithoutSubmissionInput = {
    where: activityWhereUniqueInput
    create: XOR<activityCreateWithoutSubmissionInput, activityUncheckedCreateWithoutSubmissionInput>
  }

  export type submission_resourceUpsertWithWhereUniqueWithoutSubmissionInput = {
    where: submission_resourceWhereUniqueInput
    update: XOR<submission_resourceUpdateWithoutSubmissionInput, submission_resourceUncheckedUpdateWithoutSubmissionInput>
    create: XOR<submission_resourceCreateWithoutSubmissionInput, submission_resourceUncheckedCreateWithoutSubmissionInput>
  }

  export type submission_resourceUpdateWithWhereUniqueWithoutSubmissionInput = {
    where: submission_resourceWhereUniqueInput
    data: XOR<submission_resourceUpdateWithoutSubmissionInput, submission_resourceUncheckedUpdateWithoutSubmissionInput>
  }

  export type submission_resourceUpdateManyWithWhereWithoutSubmissionInput = {
    where: submission_resourceScalarWhereInput
    data: XOR<submission_resourceUpdateManyMutationInput, submission_resourceUncheckedUpdateManyWithoutSubmissionInput>
  }

  export type submission_resourceScalarWhereInput = {
    AND?: submission_resourceScalarWhereInput | submission_resourceScalarWhereInput[]
    OR?: submission_resourceScalarWhereInput[]
    NOT?: submission_resourceScalarWhereInput | submission_resourceScalarWhereInput[]
    id?: IntFilter<"submission_resource"> | number
    url_resource?: StringFilter<"submission_resource"> | string
    submission_id?: IntFilter<"submission_resource"> | number
    title?: StringFilter<"submission_resource"> | string
  }

  export type studentUpsertWithoutActivitiesInput = {
    update: XOR<studentUpdateWithoutActivitiesInput, studentUncheckedUpdateWithoutActivitiesInput>
    create: XOR<studentCreateWithoutActivitiesInput, studentUncheckedCreateWithoutActivitiesInput>
    where?: studentWhereInput
  }

  export type studentUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: studentWhereInput
    data: XOR<studentUpdateWithoutActivitiesInput, studentUncheckedUpdateWithoutActivitiesInput>
  }

  export type studentUpdateWithoutActivitiesInput = {
    names?: StringFieldUpdateOperationsInput | string
    last_names?: StringFieldUpdateOperationsInput | string
    ID_card_url?: StringFieldUpdateOperationsInput | string
    study_certificate_url?: StringFieldUpdateOperationsInput | string
    inscriptions?: inscriptionUpdateManyWithoutStudentNestedInput
    asistances_register?: asistance_registerUpdateManyWithoutStudentNestedInput
    user?: userUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type studentUncheckedUpdateWithoutActivitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    names?: StringFieldUpdateOperationsInput | string
    last_names?: StringFieldUpdateOperationsInput | string
    ID_card_url?: StringFieldUpdateOperationsInput | string
    study_certificate_url?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    inscriptions?: inscriptionUncheckedUpdateManyWithoutStudentNestedInput
    asistances_register?: asistance_registerUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type activityUpsertWithoutSubmissionInput = {
    update: XOR<activityUpdateWithoutSubmissionInput, activityUncheckedUpdateWithoutSubmissionInput>
    create: XOR<activityCreateWithoutSubmissionInput, activityUncheckedCreateWithoutSubmissionInput>
    where?: activityWhereInput
  }

  export type activityUpdateToOneWithWhereWithoutSubmissionInput = {
    where?: activityWhereInput
    data: XOR<activityUpdateWithoutSubmissionInput, activityUncheckedUpdateWithoutSubmissionInput>
  }

  export type activityUpdateWithoutSubmissionInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    time_due?: DateTimeFieldUpdateOperationsInput | Date | string
    resources?: activity_resourceUpdateManyWithoutActivityNestedInput
    section?: sectionUpdateOneRequiredWithoutActivitiesNestedInput
  }

  export type activityUncheckedUpdateWithoutSubmissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    time_due?: DateTimeFieldUpdateOperationsInput | Date | string
    section_id?: IntFieldUpdateOperationsInput | number
    resources?: activity_resourceUncheckedUpdateManyWithoutActivityNestedInput
  }

  export type submissionCreateWithoutResourcesInput = {
    grade: number
    comment: string
    state_sub: string
    state_gra: string
    student: studentCreateNestedOneWithoutActivitiesInput
    activity: activityCreateNestedOneWithoutSubmissionInput
  }

  export type submissionUncheckedCreateWithoutResourcesInput = {
    id?: number
    grade: number
    comment: string
    state_sub: string
    state_gra: string
    student_id: number
    activity_id: number
  }

  export type submissionCreateOrConnectWithoutResourcesInput = {
    where: submissionWhereUniqueInput
    create: XOR<submissionCreateWithoutResourcesInput, submissionUncheckedCreateWithoutResourcesInput>
  }

  export type submissionUpsertWithoutResourcesInput = {
    update: XOR<submissionUpdateWithoutResourcesInput, submissionUncheckedUpdateWithoutResourcesInput>
    create: XOR<submissionCreateWithoutResourcesInput, submissionUncheckedCreateWithoutResourcesInput>
    where?: submissionWhereInput
  }

  export type submissionUpdateToOneWithWhereWithoutResourcesInput = {
    where?: submissionWhereInput
    data: XOR<submissionUpdateWithoutResourcesInput, submissionUncheckedUpdateWithoutResourcesInput>
  }

  export type submissionUpdateWithoutResourcesInput = {
    grade?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    state_sub?: StringFieldUpdateOperationsInput | string
    state_gra?: StringFieldUpdateOperationsInput | string
    student?: studentUpdateOneRequiredWithoutActivitiesNestedInput
    activity?: activityUpdateOneRequiredWithoutSubmissionNestedInput
  }

  export type submissionUncheckedUpdateWithoutResourcesInput = {
    id?: IntFieldUpdateOperationsInput | number
    grade?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    state_sub?: StringFieldUpdateOperationsInput | string
    state_gra?: StringFieldUpdateOperationsInput | string
    student_id?: IntFieldUpdateOperationsInput | number
    activity_id?: IntFieldUpdateOperationsInput | number
  }

  export type asistance_registerCreateWithoutAsistanceInput = {
    status?: $Enums.StatusAsistance
    student: studentCreateNestedOneWithoutAsistances_registerInput
  }

  export type asistance_registerUncheckedCreateWithoutAsistanceInput = {
    id?: number
    status?: $Enums.StatusAsistance
    student_id: number
  }

  export type asistance_registerCreateOrConnectWithoutAsistanceInput = {
    where: asistance_registerWhereUniqueInput
    create: XOR<asistance_registerCreateWithoutAsistanceInput, asistance_registerUncheckedCreateWithoutAsistanceInput>
  }

  export type asistance_registerCreateManyAsistanceInputEnvelope = {
    data: asistance_registerCreateManyAsistanceInput | asistance_registerCreateManyAsistanceInput[]
    skipDuplicates?: boolean
  }

  export type moduleCreateWithoutAsistancesInput = {
    title: string
    content: string
    hours: number
    img_url: string
    sections?: sectionCreateNestedManyWithoutModuleInput
    resources?: module_resourceCreateNestedManyWithoutModuleInput
    teacher: teacherCreateNestedOneWithoutModulesInput
    course: courseCreateNestedOneWithoutModulesInput
  }

  export type moduleUncheckedCreateWithoutAsistancesInput = {
    id?: number
    title: string
    content: string
    hours: number
    img_url: string
    teacher_id: number
    course_id: number
    sections?: sectionUncheckedCreateNestedManyWithoutModuleInput
    resources?: module_resourceUncheckedCreateNestedManyWithoutModuleInput
  }

  export type moduleCreateOrConnectWithoutAsistancesInput = {
    where: moduleWhereUniqueInput
    create: XOR<moduleCreateWithoutAsistancesInput, moduleUncheckedCreateWithoutAsistancesInput>
  }

  export type asistance_registerUpsertWithWhereUniqueWithoutAsistanceInput = {
    where: asistance_registerWhereUniqueInput
    update: XOR<asistance_registerUpdateWithoutAsistanceInput, asistance_registerUncheckedUpdateWithoutAsistanceInput>
    create: XOR<asistance_registerCreateWithoutAsistanceInput, asistance_registerUncheckedCreateWithoutAsistanceInput>
  }

  export type asistance_registerUpdateWithWhereUniqueWithoutAsistanceInput = {
    where: asistance_registerWhereUniqueInput
    data: XOR<asistance_registerUpdateWithoutAsistanceInput, asistance_registerUncheckedUpdateWithoutAsistanceInput>
  }

  export type asistance_registerUpdateManyWithWhereWithoutAsistanceInput = {
    where: asistance_registerScalarWhereInput
    data: XOR<asistance_registerUpdateManyMutationInput, asistance_registerUncheckedUpdateManyWithoutAsistanceInput>
  }

  export type moduleUpsertWithoutAsistancesInput = {
    update: XOR<moduleUpdateWithoutAsistancesInput, moduleUncheckedUpdateWithoutAsistancesInput>
    create: XOR<moduleCreateWithoutAsistancesInput, moduleUncheckedCreateWithoutAsistancesInput>
    where?: moduleWhereInput
  }

  export type moduleUpdateToOneWithWhereWithoutAsistancesInput = {
    where?: moduleWhereInput
    data: XOR<moduleUpdateWithoutAsistancesInput, moduleUncheckedUpdateWithoutAsistancesInput>
  }

  export type moduleUpdateWithoutAsistancesInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    img_url?: StringFieldUpdateOperationsInput | string
    sections?: sectionUpdateManyWithoutModuleNestedInput
    resources?: module_resourceUpdateManyWithoutModuleNestedInput
    teacher?: teacherUpdateOneRequiredWithoutModulesNestedInput
    course?: courseUpdateOneRequiredWithoutModulesNestedInput
  }

  export type moduleUncheckedUpdateWithoutAsistancesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    img_url?: StringFieldUpdateOperationsInput | string
    teacher_id?: IntFieldUpdateOperationsInput | number
    course_id?: IntFieldUpdateOperationsInput | number
    sections?: sectionUncheckedUpdateManyWithoutModuleNestedInput
    resources?: module_resourceUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type studentCreateWithoutAsistances_registerInput = {
    names: string
    last_names: string
    ID_card_url: string
    study_certificate_url: string
    activities?: submissionCreateNestedManyWithoutStudentInput
    inscriptions?: inscriptionCreateNestedManyWithoutStudentInput
    user: userCreateNestedOneWithoutStudentsInput
  }

  export type studentUncheckedCreateWithoutAsistances_registerInput = {
    id?: number
    names: string
    last_names: string
    ID_card_url: string
    study_certificate_url: string
    user_id: number
    activities?: submissionUncheckedCreateNestedManyWithoutStudentInput
    inscriptions?: inscriptionUncheckedCreateNestedManyWithoutStudentInput
  }

  export type studentCreateOrConnectWithoutAsistances_registerInput = {
    where: studentWhereUniqueInput
    create: XOR<studentCreateWithoutAsistances_registerInput, studentUncheckedCreateWithoutAsistances_registerInput>
  }

  export type asistanceCreateWithoutRegistersInput = {
    description: string
    date: Date | string
    module: moduleCreateNestedOneWithoutAsistancesInput
  }

  export type asistanceUncheckedCreateWithoutRegistersInput = {
    id?: number
    description: string
    date: Date | string
    module_id: number
  }

  export type asistanceCreateOrConnectWithoutRegistersInput = {
    where: asistanceWhereUniqueInput
    create: XOR<asistanceCreateWithoutRegistersInput, asistanceUncheckedCreateWithoutRegistersInput>
  }

  export type studentUpsertWithoutAsistances_registerInput = {
    update: XOR<studentUpdateWithoutAsistances_registerInput, studentUncheckedUpdateWithoutAsistances_registerInput>
    create: XOR<studentCreateWithoutAsistances_registerInput, studentUncheckedCreateWithoutAsistances_registerInput>
    where?: studentWhereInput
  }

  export type studentUpdateToOneWithWhereWithoutAsistances_registerInput = {
    where?: studentWhereInput
    data: XOR<studentUpdateWithoutAsistances_registerInput, studentUncheckedUpdateWithoutAsistances_registerInput>
  }

  export type studentUpdateWithoutAsistances_registerInput = {
    names?: StringFieldUpdateOperationsInput | string
    last_names?: StringFieldUpdateOperationsInput | string
    ID_card_url?: StringFieldUpdateOperationsInput | string
    study_certificate_url?: StringFieldUpdateOperationsInput | string
    activities?: submissionUpdateManyWithoutStudentNestedInput
    inscriptions?: inscriptionUpdateManyWithoutStudentNestedInput
    user?: userUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type studentUncheckedUpdateWithoutAsistances_registerInput = {
    id?: IntFieldUpdateOperationsInput | number
    names?: StringFieldUpdateOperationsInput | string
    last_names?: StringFieldUpdateOperationsInput | string
    ID_card_url?: StringFieldUpdateOperationsInput | string
    study_certificate_url?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    activities?: submissionUncheckedUpdateManyWithoutStudentNestedInput
    inscriptions?: inscriptionUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type asistanceUpsertWithoutRegistersInput = {
    update: XOR<asistanceUpdateWithoutRegistersInput, asistanceUncheckedUpdateWithoutRegistersInput>
    create: XOR<asistanceCreateWithoutRegistersInput, asistanceUncheckedCreateWithoutRegistersInput>
    where?: asistanceWhereInput
  }

  export type asistanceUpdateToOneWithWhereWithoutRegistersInput = {
    where?: asistanceWhereInput
    data: XOR<asistanceUpdateWithoutRegistersInput, asistanceUncheckedUpdateWithoutRegistersInput>
  }

  export type asistanceUpdateWithoutRegistersInput = {
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    module?: moduleUpdateOneRequiredWithoutAsistancesNestedInput
  }

  export type asistanceUncheckedUpdateWithoutRegistersInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    module_id?: IntFieldUpdateOperationsInput | number
  }

  export type studentCreateManyUserInput = {
    id?: number
    names: string
    last_names: string
    ID_card_url: string
    study_certificate_url: string
  }

  export type teacherCreateManyUserInput = {
    id?: number
    names: string
    last_names: string
    ID_card_url: string
    cv_url: string
    third_level_degree: string
  }

  export type studentUpdateWithoutUserInput = {
    names?: StringFieldUpdateOperationsInput | string
    last_names?: StringFieldUpdateOperationsInput | string
    ID_card_url?: StringFieldUpdateOperationsInput | string
    study_certificate_url?: StringFieldUpdateOperationsInput | string
    activities?: submissionUpdateManyWithoutStudentNestedInput
    inscriptions?: inscriptionUpdateManyWithoutStudentNestedInput
    asistances_register?: asistance_registerUpdateManyWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    names?: StringFieldUpdateOperationsInput | string
    last_names?: StringFieldUpdateOperationsInput | string
    ID_card_url?: StringFieldUpdateOperationsInput | string
    study_certificate_url?: StringFieldUpdateOperationsInput | string
    activities?: submissionUncheckedUpdateManyWithoutStudentNestedInput
    inscriptions?: inscriptionUncheckedUpdateManyWithoutStudentNestedInput
    asistances_register?: asistance_registerUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    names?: StringFieldUpdateOperationsInput | string
    last_names?: StringFieldUpdateOperationsInput | string
    ID_card_url?: StringFieldUpdateOperationsInput | string
    study_certificate_url?: StringFieldUpdateOperationsInput | string
  }

  export type teacherUpdateWithoutUserInput = {
    names?: StringFieldUpdateOperationsInput | string
    last_names?: StringFieldUpdateOperationsInput | string
    ID_card_url?: StringFieldUpdateOperationsInput | string
    cv_url?: StringFieldUpdateOperationsInput | string
    third_level_degree?: StringFieldUpdateOperationsInput | string
    modules?: moduleUpdateManyWithoutTeacherNestedInput
  }

  export type teacherUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    names?: StringFieldUpdateOperationsInput | string
    last_names?: StringFieldUpdateOperationsInput | string
    ID_card_url?: StringFieldUpdateOperationsInput | string
    cv_url?: StringFieldUpdateOperationsInput | string
    third_level_degree?: StringFieldUpdateOperationsInput | string
    modules?: moduleUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type teacherUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    names?: StringFieldUpdateOperationsInput | string
    last_names?: StringFieldUpdateOperationsInput | string
    ID_card_url?: StringFieldUpdateOperationsInput | string
    cv_url?: StringFieldUpdateOperationsInput | string
    third_level_degree?: StringFieldUpdateOperationsInput | string
  }

  export type submissionCreateManyStudentInput = {
    id?: number
    grade: number
    comment: string
    state_sub: string
    state_gra: string
    activity_id: number
  }

  export type inscriptionCreateManyStudentInput = {
    id?: number
    course_id: number
  }

  export type asistance_registerCreateManyStudentInput = {
    id?: number
    status?: $Enums.StatusAsistance
    asistance_id: number
  }

  export type submissionUpdateWithoutStudentInput = {
    grade?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    state_sub?: StringFieldUpdateOperationsInput | string
    state_gra?: StringFieldUpdateOperationsInput | string
    resources?: submission_resourceUpdateManyWithoutSubmissionNestedInput
    activity?: activityUpdateOneRequiredWithoutSubmissionNestedInput
  }

  export type submissionUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    grade?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    state_sub?: StringFieldUpdateOperationsInput | string
    state_gra?: StringFieldUpdateOperationsInput | string
    activity_id?: IntFieldUpdateOperationsInput | number
    resources?: submission_resourceUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type submissionUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    grade?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    state_sub?: StringFieldUpdateOperationsInput | string
    state_gra?: StringFieldUpdateOperationsInput | string
    activity_id?: IntFieldUpdateOperationsInput | number
  }

  export type inscriptionUpdateWithoutStudentInput = {
    course?: courseUpdateOneRequiredWithoutInscriptionsNestedInput
  }

  export type inscriptionUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    course_id?: IntFieldUpdateOperationsInput | number
  }

  export type inscriptionUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    course_id?: IntFieldUpdateOperationsInput | number
  }

  export type asistance_registerUpdateWithoutStudentInput = {
    status?: EnumStatusAsistanceFieldUpdateOperationsInput | $Enums.StatusAsistance
    asistance?: asistanceUpdateOneRequiredWithoutRegistersNestedInput
  }

  export type asistance_registerUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusAsistanceFieldUpdateOperationsInput | $Enums.StatusAsistance
    asistance_id?: IntFieldUpdateOperationsInput | number
  }

  export type asistance_registerUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusAsistanceFieldUpdateOperationsInput | $Enums.StatusAsistance
    asistance_id?: IntFieldUpdateOperationsInput | number
  }

  export type moduleCreateManyTeacherInput = {
    id?: number
    title: string
    content: string
    hours: number
    img_url: string
    course_id: number
  }

  export type moduleUpdateWithoutTeacherInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    img_url?: StringFieldUpdateOperationsInput | string
    sections?: sectionUpdateManyWithoutModuleNestedInput
    resources?: module_resourceUpdateManyWithoutModuleNestedInput
    asistances?: asistanceUpdateManyWithoutModuleNestedInput
    course?: courseUpdateOneRequiredWithoutModulesNestedInput
  }

  export type moduleUncheckedUpdateWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    img_url?: StringFieldUpdateOperationsInput | string
    course_id?: IntFieldUpdateOperationsInput | number
    sections?: sectionUncheckedUpdateManyWithoutModuleNestedInput
    resources?: module_resourceUncheckedUpdateManyWithoutModuleNestedInput
    asistances?: asistanceUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type moduleUncheckedUpdateManyWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    img_url?: StringFieldUpdateOperationsInput | string
    course_id?: IntFieldUpdateOperationsInput | number
  }

  export type moduleCreateManyCourseInput = {
    id?: number
    title: string
    content: string
    hours: number
    img_url: string
    teacher_id: number
  }

  export type inscriptionCreateManyCourseInput = {
    id?: number
    student_id: number
  }

  export type moduleUpdateWithoutCourseInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    img_url?: StringFieldUpdateOperationsInput | string
    sections?: sectionUpdateManyWithoutModuleNestedInput
    resources?: module_resourceUpdateManyWithoutModuleNestedInput
    asistances?: asistanceUpdateManyWithoutModuleNestedInput
    teacher?: teacherUpdateOneRequiredWithoutModulesNestedInput
  }

  export type moduleUncheckedUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    img_url?: StringFieldUpdateOperationsInput | string
    teacher_id?: IntFieldUpdateOperationsInput | number
    sections?: sectionUncheckedUpdateManyWithoutModuleNestedInput
    resources?: module_resourceUncheckedUpdateManyWithoutModuleNestedInput
    asistances?: asistanceUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type moduleUncheckedUpdateManyWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    hours?: IntFieldUpdateOperationsInput | number
    img_url?: StringFieldUpdateOperationsInput | string
    teacher_id?: IntFieldUpdateOperationsInput | number
  }

  export type inscriptionUpdateWithoutCourseInput = {
    student?: studentUpdateOneRequiredWithoutInscriptionsNestedInput
  }

  export type inscriptionUncheckedUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
  }

  export type inscriptionUncheckedUpdateManyWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
  }

  export type sectionCreateManyModuleInput = {
    id?: number
    title: string
    content: string
  }

  export type module_resourceCreateManyModuleInput = {
    id?: number
    url_resource: string
    title: string
  }

  export type asistanceCreateManyModuleInput = {
    id?: number
    description: string
    date: Date | string
  }

  export type sectionUpdateWithoutModuleInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    activities?: activityUpdateManyWithoutSectionNestedInput
    resources?: section_resourceUpdateManyWithoutSectionNestedInput
  }

  export type sectionUncheckedUpdateWithoutModuleInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    activities?: activityUncheckedUpdateManyWithoutSectionNestedInput
    resources?: section_resourceUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type sectionUncheckedUpdateManyWithoutModuleInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type module_resourceUpdateWithoutModuleInput = {
    url_resource?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type module_resourceUncheckedUpdateWithoutModuleInput = {
    id?: IntFieldUpdateOperationsInput | number
    url_resource?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type module_resourceUncheckedUpdateManyWithoutModuleInput = {
    id?: IntFieldUpdateOperationsInput | number
    url_resource?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type asistanceUpdateWithoutModuleInput = {
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    registers?: asistance_registerUpdateManyWithoutAsistanceNestedInput
  }

  export type asistanceUncheckedUpdateWithoutModuleInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    registers?: asistance_registerUncheckedUpdateManyWithoutAsistanceNestedInput
  }

  export type asistanceUncheckedUpdateManyWithoutModuleInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type activityCreateManySectionInput = {
    id?: number
    title: string
    content: string
    time_due: Date | string
  }

  export type section_resourceCreateManySectionInput = {
    id?: number
    url_resource: string
    title: string
  }

  export type activityUpdateWithoutSectionInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    time_due?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: submissionUpdateManyWithoutActivityNestedInput
    resources?: activity_resourceUpdateManyWithoutActivityNestedInput
  }

  export type activityUncheckedUpdateWithoutSectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    time_due?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: submissionUncheckedUpdateManyWithoutActivityNestedInput
    resources?: activity_resourceUncheckedUpdateManyWithoutActivityNestedInput
  }

  export type activityUncheckedUpdateManyWithoutSectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    time_due?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type section_resourceUpdateWithoutSectionInput = {
    url_resource?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type section_resourceUncheckedUpdateWithoutSectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    url_resource?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type section_resourceUncheckedUpdateManyWithoutSectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    url_resource?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type submissionCreateManyActivityInput = {
    id?: number
    grade: number
    comment: string
    state_sub: string
    state_gra: string
    student_id: number
  }

  export type activity_resourceCreateManyActivityInput = {
    id?: number
    url_resource: string
    title: string
  }

  export type submissionUpdateWithoutActivityInput = {
    grade?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    state_sub?: StringFieldUpdateOperationsInput | string
    state_gra?: StringFieldUpdateOperationsInput | string
    resources?: submission_resourceUpdateManyWithoutSubmissionNestedInput
    student?: studentUpdateOneRequiredWithoutActivitiesNestedInput
  }

  export type submissionUncheckedUpdateWithoutActivityInput = {
    id?: IntFieldUpdateOperationsInput | number
    grade?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    state_sub?: StringFieldUpdateOperationsInput | string
    state_gra?: StringFieldUpdateOperationsInput | string
    student_id?: IntFieldUpdateOperationsInput | number
    resources?: submission_resourceUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type submissionUncheckedUpdateManyWithoutActivityInput = {
    id?: IntFieldUpdateOperationsInput | number
    grade?: FloatFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    state_sub?: StringFieldUpdateOperationsInput | string
    state_gra?: StringFieldUpdateOperationsInput | string
    student_id?: IntFieldUpdateOperationsInput | number
  }

  export type activity_resourceUpdateWithoutActivityInput = {
    url_resource?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type activity_resourceUncheckedUpdateWithoutActivityInput = {
    id?: IntFieldUpdateOperationsInput | number
    url_resource?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type activity_resourceUncheckedUpdateManyWithoutActivityInput = {
    id?: IntFieldUpdateOperationsInput | number
    url_resource?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type submission_resourceCreateManySubmissionInput = {
    id?: number
    url_resource: string
    title: string
  }

  export type submission_resourceUpdateWithoutSubmissionInput = {
    url_resource?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type submission_resourceUncheckedUpdateWithoutSubmissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    url_resource?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type submission_resourceUncheckedUpdateManyWithoutSubmissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    url_resource?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type asistance_registerCreateManyAsistanceInput = {
    id?: number
    status?: $Enums.StatusAsistance
    student_id: number
  }

  export type asistance_registerUpdateWithoutAsistanceInput = {
    status?: EnumStatusAsistanceFieldUpdateOperationsInput | $Enums.StatusAsistance
    student?: studentUpdateOneRequiredWithoutAsistances_registerNestedInput
  }

  export type asistance_registerUncheckedUpdateWithoutAsistanceInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusAsistanceFieldUpdateOperationsInput | $Enums.StatusAsistance
    student_id?: IntFieldUpdateOperationsInput | number
  }

  export type asistance_registerUncheckedUpdateManyWithoutAsistanceInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusAsistanceFieldUpdateOperationsInput | $Enums.StatusAsistance
    student_id?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StudentCountOutputTypeDefaultArgs instead
     */
    export type StudentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StudentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TeacherCountOutputTypeDefaultArgs instead
     */
    export type TeacherCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TeacherCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CourseCountOutputTypeDefaultArgs instead
     */
    export type CourseCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CourseCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ModuleCountOutputTypeDefaultArgs instead
     */
    export type ModuleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ModuleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SectionCountOutputTypeDefaultArgs instead
     */
    export type SectionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SectionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ActivityCountOutputTypeDefaultArgs instead
     */
    export type ActivityCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ActivityCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubmissionCountOutputTypeDefaultArgs instead
     */
    export type SubmissionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubmissionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AsistanceCountOutputTypeDefaultArgs instead
     */
    export type AsistanceCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AsistanceCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use userDefaultArgs instead
     */
    export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>
    /**
     * @deprecated Use studentDefaultArgs instead
     */
    export type studentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = studentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use teacherDefaultArgs instead
     */
    export type teacherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = teacherDefaultArgs<ExtArgs>
    /**
     * @deprecated Use inscriptionDefaultArgs instead
     */
    export type inscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = inscriptionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use courseDefaultArgs instead
     */
    export type courseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = courseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use moduleDefaultArgs instead
     */
    export type moduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = moduleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use module_resourceDefaultArgs instead
     */
    export type module_resourceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = module_resourceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use sectionDefaultArgs instead
     */
    export type sectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = sectionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use section_resourceDefaultArgs instead
     */
    export type section_resourceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = section_resourceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use activityDefaultArgs instead
     */
    export type activityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = activityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use activity_resourceDefaultArgs instead
     */
    export type activity_resourceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = activity_resourceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use submissionDefaultArgs instead
     */
    export type submissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = submissionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use submission_resourceDefaultArgs instead
     */
    export type submission_resourceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = submission_resourceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use asistanceDefaultArgs instead
     */
    export type asistanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = asistanceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use asistance_registerDefaultArgs instead
     */
    export type asistance_registerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = asistance_registerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use intern_cvDefaultArgs instead
     */
    export type intern_cvArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = intern_cvDefaultArgs<ExtArgs>

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