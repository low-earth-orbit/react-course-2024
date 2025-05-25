# Notes

## Props

### 66: Forward props

```javascript
export default function Section({ title, children, ...props }) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
```

### 589: Children prop

```javascript
function Modal({ children }) {
  return (
    <>
      <div className={classes.backdrop} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}
```

### 595: each child in list should have a unique key prop

```javascript
{
  posts.map((post) => (
    <Post key={post.body} author={post.author} body={post.body} />
  ));
}
```

## Styling

### 108

Vanilla CSS approach - CSS styles are not scoped to components.

Use ternary expression for adding class name:

```javascript
className={emailNotValid ? "invalid" : undefined}
```

### 112: Scoping CSS with CSS modules

## Refs and Portals

### 133: Introducing Refs

useRef hook. Either called in component function or custom hook.

### 135

For the first component render cycle, `playerName.current.value` is undefined.

Use case 1: connect with html element that doesn't require UI update.
Use case 2: want to save a value for the component; remain not changed upon component re-render.

Whenever a ref changes, the component function will not be re-executed. This is not the case for state update.

State vs Refs

### 140

Cannot pass ref using props in standard way. Must use `forwardRef`.

### 154

Need to wrap component using `forwardRef` in order to pass ref. This is not needed for React 19 and newer.

## useContext

### 167

```javascript
<CartContext.Provider></CartContext.Provider>
```

React 19 and above

```javascript
<CartContext></CartContext>
```

### 168

React 19 and above. The following would work. Note that it works even use hook is used within the if block.

```javascript
import { use } from "react";

if (true) {
  const cartCtx = use(CartContext);
}
```

### 170 A different way of consuming context

`<CartContext.Consumer>` not preferred

### Coding Exercise 26

state update

```javascript
function toggleTheme(theme) {
  setTheme((prev) => {
    if (prev === "light") return "dark";
    if (prev === "dark") return "light";
  });
}
```

### 174 useReducer hook

## useEffect

Side effects are "tasks" that don't affect the current component's render cycle.

## Section 13: Optimization

### Component tree

Upon state update, the component where the state lives and all its child components along the component tree are re-rendered. Its parent component will not re-render.

### avoid component function execution by `memo`

`memo` compares prop values. If the prop value has not changed, the component will not rerender upon re-render of its parent component.

Checking props with `memo` costs performance. Use as high up in the component tree as possible. Don't use it on components where props will change frequently.

### avoid component function execution by clever structuring

### `memo` vs `useCallback` vs `useMemo`

`memo` wraps a component. The wrapped component will only re-render if the props value has been changed, regardless of parent component being re-rendered.

`useMemo` prevents execution of a function. It stores the result of the function. The function will only re-run if one of the deps is changed.

`useCallback` memorizes a function.

### Why `key` is important

state is scope to a component. Every instance has its own isolated state.

Use case:
`key` - the position of the item in the component tree

Sibling list items of the same type and the position of each could change.

Specifying unique keys for each item helps (1) state management / keep list item position and (2) optimal rendering / re-render only the list item that has been updated.

Another use case: `key`s for re-setting components. Whenever the key changes, React will throw away the old component instance and re-insert with a new one.

### state scheduling

In this code,

```javascript
function handleSetCount(newCount) {
  setChosenCount(newCount);
  console.log(chosenCount); // this won't print the new value
}
```

the `console.log` statement will not print out the `newCount` because the state updating function `setChosenCount` is scheduled. The new value for `chosenCount` state will be available in the next the function `handleSetCount` executes.

By using this pattern,

```javascript
setCounterChanges((prevCounterChanges) => [
  { value: -1, id: Math.random() * 1000 },
  ...prevCounterChanges,
]);
```

React will guarantee that the latest value of `counterChanges` is available for setting a new value for the state. This is useful if multiple component instances / components are updating the state.

## Section 15: HTTP requests

### Sending HTTP request

```javascript
useEffect(() => {
  fetch("http://localhost:3000/places")
    .then((response) => {
      return response.json();
    })
    .then((resData) => {
      setAvailablePlaces(resData.places);
    });
}, []);
```

async / await version below:

```javascript
useEffect(() => {
  async function fetchPlaces() {
    const response = await fetch("http://localhost:3000/places");
    const resData = await response.json();
    setAvailablePlaces(resData.places);
  }

  fetchPlaces();
}, []);
```

## Section 16: Custom Hooks

### Rules of hooks

1. Only call hooks in Component or _Other Hook Functions_.

1. Only call Hooks on the top level.

### Why hooks

Outsource reusable, configurable function can be used in different components.

Code that doesn't return JSX component can't be in its own component.

Functions named starting with `use` are treated as hooks.

## Section 17: Forms and input validation

Input validation

- on keystroke
- on lost focus
- on from submission

## Sec 17

Getting user input values

- via state (254)
  - requires settings up input state
- via ref (255)
  - for simple input
  - validation can be done only when the user submits the form
- via FormData & Native Browser APIs
  - for complex form values

## Sec 18: Form Actions

Form action is available in React 19+.

## Sec 20: Redux

### State/data management

- Local state - single component
- Cross-component state
- App-wide state

React Context solves "prop drilling" issue for Cross-component and App-wide state.

### React context's potential problems

- Deeply nested providers
- Performance

### Redux - alternative to Context

Central data store/one store

Reducer function (a general concept, not useReducer hook) is responsible for mutating store data

Components dispatch actions. Actions are forwarded to reducer. Reducers mutate data in Store. Components subscribe to Store.

### Reducer function

Reducer function - pure function, same input always produces same output.

Input - old state + dispatch action
Output - new state object

### Reference vs primitive types

https://academind.com/tutorials/reference-vs-primitive-values/

primitive types - `number`, `string`, `boolean`, `undefined`, `null`
reference types - `array`, `object`

### Redux toolkit

## Sec 21 Advanced Redux - Async tasks, side effects

Reducers must be pure, side-effect free synchronous functions.

Where should side-effects & async tasks be executed?

- useEffect inside the components.
- Inside the action creators.

331 Data transformation can reside in backend logic. If we had a backend, we could do less work in FE.

332 Fat reducer vs fat components vs fat actions

- Synchronous, side-effect free code - data transformation:
  - prefer reducers
  - avoid action rectors or components
- Async code or code with side-effects:
  - Prefer action creators or components
  - never use reducers

Cannot send Firebase request (async) inside a reducer

### Thunk

A function that delays an action until later. It does not return the action itself but instead another function which eventually returns the action.

## Sec 22: React Router

SPA - multiple pages (urls) handled by client code, without fetching new html index file from the server

Routes are simple path <=> component mappings. Path `/products` <=> Component `<Products />`

### 351

You can use `useLoaderData()` in the element that's assigned to a route AND in all components that might be used inside that element.

Data is loaded before rendering the page.

### 371 - useRouteLoaderData

`useRouteLoaderData` gets access to higher level loader from a route that doesn't have a loader.

### 378 useFetcher hook

`fetcher` is used whenever we need to trigger an action without triggering a route transition / don't load the route component

### 379 defer data loading

By default, data is loaded before rendering the page. We sometimes want to load the page while waiting for the data to be loaded.

## Sec 24: Deployment

### Lazy loading with React Router

### Deployment process

`npm run build` produces an optimized code bundle that is ready to be updated to the app server.

A React SPA is a "Static Website". Only HTML, CSS & JavaScript. A static side host is needed.

### 406 Server-side routing vs client-side routing

React Router is client-side routing.

## Sec 25: Tanstack Query

You don't need Tanstack query. It can be done using `useEffect`; however, it simplifies things...

Tanstack query does not send http query. The code that sends http request is you defined.

Tanstack query caches data with an internal identifier `queryKey`. Cached data will be kept for a period of time (`gcTime`). Instant result is displayed first using the cached data. A new query is sent behind the scenes (subjected to specified `staleTime`), then it silently replaces the result with updated data.

### `isLoading` vs `isPending`

`isPending` indicates that we’re waiting for data to load for the first time. The flag will always be true if the query is not enabled (`enabled: false`).

`isLoading`: Indicates active data loading for the first time. If the query is not enabled, it will be false.

`isFetching`: Indicates active data fetching. This flag is true when queryFn is executed for the first time or during background re-fetching.

### `useMutation`

`useQuery` for `GET`

`useMutation` for `POST`/`PUT` Request is only sent if you want to send.

## Sec 26 Next.js

`app/page.js` server component - this component function is executed in the server.

```
app
  about
    page.js // this is about page
  page.js // this is home page
```

`page.js` defines page content
`layout.js` defines wrapper around pages
`not-found.js` defines "not found" fallback page
`error.js` defines "error" fallback page
`globals.css` styles available for all pages
`icon.png` favicon

### React server components vs client components

- React is a pure front end framework. Out of box, components are client-side.
- Next.js is a full-stack framework.

- RSC: components that are only rendered on the server. By default all React components are RSC in Next.js apps. Advantage: less client-side JS, better SEO.
- CC: components that are pre-rendered on the server but then also potentially on the client. Opt-in via "use client" declarative in Next.js.

In Next.js apps:

- The backend executes the server component functions.
- The client-side receives and renders the to-be-rendered HTML code.

### Next.js caching

Next.js applies aggressive caching. We need to manually trigger revalidation `revalidatePath`.

### App router (new pattern) vs pages router (older pattern)

Some projects are built using pages router, not app router (new pattern). L475- covers pages router.

### Static Site Generation vs Server-side rendering

## Sec 27 React Server Components (RSC) & Server Actions

React Server Server Components (RSC), Server Actions, use() with Promises are not available for use in standard vanilla React. These features require a server-side environment. Code must be split by the build process / code bundler process. Client-side code vs non client side code.

RSCs are never executed on the client. Client components are rendered on both the server and client.

In a Next.js app, all components by default are treated as server side components.

Why convert to client components? We want to use client component features, such as state, context, etc. Most React features.

### Server actions

Server actions can be defined only in server component, using `"use server";` directive. It can be used in client component.

Client component cann't be asynchronous.
