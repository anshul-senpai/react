- What is the `difference` between `Named export`, `Default export`, and `* as export`?
    => Named exports are useful when you want to export multiple values from a module, and you want to be able to import them with their specific names. Default exports are useful when you want to export a single value from a module, and you want to be able to import it with any name you want. * as export is useful when you want to import all of the exports from a module into a single object.

    Here are some additional things to keep in mind:
    You can only have one default export per module.
    You can have multiple named exports per module.
    You can import both named exports and default exports from a module.
    You can use * as export to import all of the exports from a module, but you can't use it to import the default export.

- What are `React Hooks`?
    => React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component. Hooks can be stateful and can manage side-effects.

    React provides a bunch of standard in-built hooks:
    useState: To manage states. Returns a stateful value and an updater function to update it.
    useEffect: To manage side-effects like API calls, subscriptions, timers, mutations, and more.
    useContext: To return the current value for a context.
    useReducer: A useState alternative to help with complex state management.
    useCallback: It returns a memorized version of a callback to help a child component not re-render unnecessarily.
    useMemo: It returns a memoized value that helps in performance optimizations.
    useRef: It returns a ref object with a .current property. The ref object is mutable. It is mainly used to access a child component imperatively.
    useLayoutEffect: It fires at the end of all DOM mutations. It's best to use useEffect as much as possible over this one as the useLayoutEffect fires synchronously.
    useDebugValue: Helps to display a label in React DevTools for custom hooks.

- Why do we need `useState Hook`?
    => The useState hook is a well-known React hook that lets you add state variables to your components. It returns an array with the current state value and a function to update it. States are used to manage and store some data within a component. When a state changes, React will automatically re-render the component to display the updated value. 

    You can use the useState hook to manage the state of components that need to change based on user actions or some other condition. For example, you can use the useState hook to manage a counter's state. The useState hook can hold strings, arrays, numbers, objects, and much more. 
    
    The useState hook is included in the React JS library and is useful in managing the state in NextJs applications. It provides a simple way to store information from previous renders.