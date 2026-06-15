/**
 * Type-safe wrapper around `t.raw()` for next-intl namespace-scoped translators.
 *
 * Background: next-intl 4.x's strict namespace types make `t.raw(key)` return `any`,
 * even when the Messages structure is declared via `AppConfig.Messages` in
 * `src/global.d.ts`. This helper restores compile-time type safety: pass the
 * expected return type as a generic and the cast is visible at the call site
 * instead of being hidden behind `as any`.
 *
 * Example:
 *   const items = raw<Record<string, CaseStudyItem>>(t, "items");
 *   //     ^? Record<string, CaseStudyItem>
 *
 * Why a function and not just `as unknown as T` at the call site?
 *  - Single source of truth: when next-intl eventually fixes the generic, only
 *    this function needs to change.
 *  - Self-documenting: the cast is named (`raw`), not hidden in inline syntax.
 *  - Greppable: search for `raw(` to find every `t.raw` usage in the codebase.
 */
export function raw<T>(
  // The `any` here is a known limitation of next-intl 4.x: the strict namespace
  // types make t.raw's key parameter a generic `NamespacedMessageKeys<M, N>`,
  // which is not assignable from a simple `string`. We use `any` so the helper
  // accepts the actual translator type, but the return value is still typed via T.
  t: { raw: (key: any) => unknown },
  key: any
): T {
  return t.raw(key) as T;
}
