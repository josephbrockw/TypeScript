1) Setup & Mindset

Prompt:
“Create a beginner-friendly lesson that installs Node LTS, pnpm, VS Code, and TypeScript; explains what TS is (JS + types + compiler); sets up a tiny hello.ts; runs it with tsx and compiles with tsc; introduces tsconfig.json (strict on). Include troubleshooting for PATH/ESM/CJS confusion and a ‘success checklist’.”

2) JavaScript → TypeScript Mental Model

Prompt:
“Teach the differences between JS and TS (structural types, inference, erasure). Explain why types catch bugs early and what they don’t do (no runtime speedups). Include small code probes showing inference vs explicit annotations.”

3) The Compiler & tsconfig You’ll Actually Use

Prompt:
“Deep dive tsconfig: strict, target, module, moduleResolution, jsx, incremental, composite, skipLibCheck, noUncheckedIndexedAccess, exactOptionalPropertyTypes. Have me toggle flags and observe real errors. End with a ‘golden’ base config.”

4) Primitives, Objects & Inference

Prompt:
“Cover string|number|boolean|null|undefined|bigint|symbol, object literals, readonly/optional fields, and inference. Exercises: refactor untyped code to typed; forbid implicit any.”

5) Functions: Signatures, Unions & Narrowing

Prompt:
“Type function params/returns; use union types; narrow with typeof, instanceof, and property checks; show overloads and a single implementation. Exercises: write a formatter with two overloads and exhaustive narrowing.”

6) Interfaces vs Type Aliases

Prompt:
“Compare interface and type. When to use each, declaration merging, intersections. Exercises: model a User in both forms; add readonly, optional, and index signatures; discuss trade-offs.”

7) Literal Types, as const, and (Not) Enums

Prompt:
“Prefer string literal unions and as const over enums. Show when enums are useful. Exercises: build a Status union and refactor a switch to be exhaustive.”

8) Generics Without Tears

Prompt:
“Explain generics as relationships, not magic. Write pluck<T, K extends keyof T> and a generic fetch wrapper getJson<T>. Exercises: constraints, defaults, inference pitfalls.”

9) Utility & Mapped Types

Prompt:
“Walk through Partial/Required/Readonly/Pick/Omit/Record/ReturnType/Parameters. Build DeepReadonly<T> and discuss caveats (functions, Dates, Maps). Exercises: transform an API shape using mapped types.”

10) unknown, any, never & Type Guards

Prompt:
“Teach why unknown is safer than any, how to write sound user-defined type guards, and where never shows up (exhaustiveness). Exercises: quarantine untrusted input and prove safety with guards.”

11) Modules, ESM vs CJS, Path Aliases

Prompt:
“Explain ESM vs CJS, file extensions, type: module, .mts/.cts. Set up path aliases and project references. Exercises: break a circular dependency and fix it by inversion.”

12) Testing TypeScript

Prompt:
“Set up Vitest or Jest in TS, run tests through tsx or ts-jest, and add a few unit tests that intentionally hit type errors vs runtime errors. Exercises: snapshot a typed function’s behavior.”

13) Linting & Formatting for Teams

Prompt:
“Wire ESLint + Prettier for TS and React. Add rules that guard correctness (e.g., no-floating-promises, exhaustive switches). Exercises: fix a messy file until all checks pass.”

14) Runtime Validation with Zod

Prompt:
“Teach boundary validation using Zod; derive types with z.infer. Validate inputs and outputs, and parse environment variables. Exercises: reject bad data with helpful error messages.”

15) React + TypeScript: Props, State, Events

Prompt:
“Type props explicitly, avoid React.FC, handle DOM events, and model component state. Exercises: refactor a small JS component to strict TS.”

16) Reducers & Context with Discriminated Unions

Prompt:
“Build a reducer with discriminated unions and an exhaustive switch; expose it via Context. Exercises: add a new action and let types force updates across the app.”

17) Next.js App Router: Server vs Client Components

Prompt:
“Explain server components by default, use client, layouts, metadata. Fetch typed data on the server and pass typed props to the client. Exercises: move logic across the boundary correctly.”

18) Next.js Route Handlers & Schemas

Prompt:
“Implement GET/POST handlers that validate request bodies and responses with Zod. Type cookies/headers/query. Exercises: strict response contracts that reject extra fields.”

19) Data Fetching with TanStack Query

Prompt:
“Create a generic get<T> plus useQuery<T>. Design query keys, error types, and mutations with Zod-validated inputs. Exercises: type-safe cache updates.”

20) Typed Forms with react-hook-form

Prompt:
“Use zodResolver so form values come from the schema. Cover conditional fields with discriminated unions. Exercises: default values that match the schema or fail fast.”

21) NestJS Fundamentals

Prompt:
“Introduce Nest modules, controllers, providers (services), DI, and the app lifecycle. Build a tiny UsersModule from scratch. Exercises: inject a service and unit test it.”

22) DTOs, Pipes, Guards, Interceptors, Filters

Prompt:
“Compare class-validator vs Zod in Nest; add a global ValidationPipe; create an ApiKeyGuard, a TransformInterceptor, and an exception filter. Exercises: enforce an input rule end-to-end.”

23) Persistence with Prisma (Types that Don’t Leak)

Prompt:
“Generate a Prisma model; map DB → domain → DTO; ensure secrets (e.g., passwordHash) never reach API responses. Exercises: prove the leak is impossible via types.”

24) OpenAPI & Typed Client Generation

Prompt:
“Decorate Nest endpoints for Swagger; generate OpenAPI; produce a typed client with openapi-typescript for the Next app. Exercises: CI step that fails on drift.”

25) Realtime: WebSockets/SSE with Types

Prompt:
“Build a typed event protocol and a small Nest WebSocket or SSE endpoint; write a typed client hook (useEvents). Exercises: guarantee event shapes with discriminated unions.”

26) Monorepo with pnpm Workspaces

Prompt:
“Create apps/web, apps/api, and packages/types/utils/tsconfig/eslint-config. Share types and schemas; configure project references and root scripts (pnpm -r build/test/lint). Exercises: a single command that checks everything.”

27) End-to-End Feature Slice (Capstone)

Prompt:
“Implement a ‘Projects’ resource across Prisma → Nest → OpenAPI → generated client → Next UI (list/create/edit). Validate all boundaries with Zod. Add tests (unit + e2e). Deliverables: running feature, typed client, tests green.”

28) CI/CD & Professional Practices

Prompt:
“Add GitHub Actions with type-check, tests, build, and OpenAPI codegen. Configure husky + lint-staged. Write a team ‘Types Review’ checklist (where to annotate, how to quarantine any, when to use satisfies). Include a JS→TS migration plan.”

29) Advanced TS Patterns for Everyday Work

Prompt:
“Teach satisfies, const-assertions, branded/opaque IDs, finite-state workflows with unions, and a Result<T,E> error model vs exceptions. Exercises: refactor an API layer to Results and exhaustiveness.”

30) Debugging, Performance & Ergonomics

Prompt:
“Show how to read complicated TS errors, drive tsserver from the editor, speed up builds (incremental, composite, isolatedModules), and avoid common perf traps. Exercises: cut a rebuild time in half.”
