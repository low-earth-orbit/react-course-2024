# Notes

## Styling

Vanilla CSS approach - CSS styles are not scoped to components (108).

Use ternary expression for adding class name:

```javascript
className={emailNotValid ? "invalid" : undefined}
```

112: Scoping CSS with CSS modules

## Refs and Portals

133: Introducing Refs

useRef hook. Either called in component function or custom hook.

135: For the first component render cycle, `playerName.current.value` is undefined.

Use case 1: connect with html element that doesn't require UI update.
Use case 2: want to save a value for the component; remain not changed upon component re-render.

Whenever a ref changes, the component function will not be re-executed. This is not the case for state update.

State vs Refs
