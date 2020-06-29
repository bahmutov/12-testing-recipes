# 12-testing-recipes

> 12 common testing situations when working with React

## Use

Clone this repository, install dependencies and open Cypress

```
yarn
yarn cypress open
```

## Recipes

Each recipe links to the spec file in [cypress/component](cypress/component) folder

1. [Invokes given callback](cypress/component/1-invoke-callback.js)
2. Changes current route
3. [High Order Component](cypress/component/3-hoc.js)
4. [Component cleans up on unmount](cypress/component/4-unmount.js)
5. [Depends on Context Provider](cypress/component/5-provider.js)
6. [Uses functions that depend on time](cypress/component/6-time.js)
7. [Custom hooks](cypress/component/7-hooks.js)
8. [Portal](cypress/component/8-portal.js)
9. [Focus is on correct element](cypress/component/9-focus.js)
10. [Order of elements](cypress/component/10-order.js)
