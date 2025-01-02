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

### 167

```
<CartContext.Provider>
</CartContext.Provider>
```

React 19 and above

```
<CartContext>
</CartContext>
```

### 168

React 19 and above. The following would work. Note that it works even use hook is used within the if block.

```
import { use } from 'react';

if (true) {
  const cartCtx = use(CartContext);
}
```
