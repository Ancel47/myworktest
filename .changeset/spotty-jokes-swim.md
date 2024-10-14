---
"@refinedev/core": patch
---

fix(core): wrap `setFilters` and `setSorters` methods with `useCallback` to prevent looping re-renders

With this we can use the setFilters as dependencies inside useEffects without infinite loop since state changes in the hook won't cause the functions to be re-assigned

[Fixes #6385](https://github.com/refinedev/refine/issues/6385)
