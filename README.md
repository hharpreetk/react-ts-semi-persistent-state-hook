# useSemiPersistentState Hook

**A React hook for effortlessly managing semi-persistent state using localStorage.**

## Usage

```jsx
import { useSemiPersistentState } from '<npm-package-name>';

function MyComponent() {
  // Replace 'myKey' and 'initialValue' with your preferred key and initial value
  const [state, setState] = useSemiPersistentState('myKey', 'initialValue');

  return (
    <div>
      <p>{state}</p>
      <button onClick={() => setState('newValue')}>Update State</button>
    </div>
  );
}
```

## Parameters

- **`key` (string):** The key under which the state will be stored in localStorage.
- **`initialValue` (any):** The initial value of the state.

## Return Value

A tuple containing the current state and a function to update it:

```jsx
const [state, setState] = useSemiPersistentState('myKey', 'initialValue');
```

- **`state` (any):** The current state value.
- **`setState` (function):** A function to update the state. It accepts a new value as an argument.

## Example

Consider a scenario where you want to persist the user's theme preference:

```jsx
import { useSemiPersistentState } from '<npm-package-name>';

function ThemeSelector() {
  const [theme, setTheme] = useSemiPersistentState('theme', 'light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
```

In this example, the component maintains the theme preference in `localStorage`, allowing the theme to persist across page reloads.

## Explanation

`useSemiPersistentState` is designed to simplify the process of handling semi-persistent state in React applications. It utilizes the `localStorage` API to automatically store and retrieve state, ensuring that the data persists even when users navigate away or refresh the page.

This hook offers a convenient way to integrate semi-persistent state without boilerplate code. By providing a key and an initial value, developers can effortlessly manage semi-persistent state within their components, enhancing the user experience.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

Special thanks to the [React](https://reactjs.org/) community for inspiration and guidance.
