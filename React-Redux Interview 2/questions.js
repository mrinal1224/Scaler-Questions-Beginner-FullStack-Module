// Question 1 - 

import React from 'react';
import { useTransition } from 'react';

function ComponentA() {
  const [show, setShow] = useState(false);
  const transition = useTransition(show);

  return (
    <>
      {transition((style, item) => (
        item ? <div style={style}>Hello</div> : null
      ))}
      <button onClick={() => setShow(!show)}>Toggle</button>
    </>
  );
}

// What does this code do when the "Toggle" button is clicked?
// A. Toggles the display of "Hello" with a fade-in/fade-out animation.
// B. Adds "Hello" without any animation.
// C. Removes "Hello" without any animation.
// D. It throws an error.

// Correct answer: A. Toggles the display of "Hello" with a fade-in/fade-out animation.

// Explanation: The `useTransition` hook is used to add animations when showing/hiding elements. When the "Toggle" button is clicked, it toggles the display of "Hello" with a fade-in/fade-out animation.


// Question 2

import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function ComponentB() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>Count: {state.count}</div>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </>
  );
}

// What is the expected output when the "Increment" button is clicked twice
// and then the "Decrement" button is clicked once?
// A. Count: 0
// B. Count: 1
// C. Count: 2
// D. Count: 3

// Correct answer: B. Count: 1

// Explanation: The initial state is { count: 0 }. When the "Increment" button is clicked twice, the count will become 2. Then, when the "Decrement" button is clicked once, the count will be decremented by 1, resulting in a final count of 1.

// Question 3

import React, { useCallback, useState } from 'react';

function ComponentC() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <>
      <div>Count: {count}</div>
      <button onClick={increment}>Increment</button>
    </>
  );
}

// What happens when the "Increment" button is clicked?
// A. The count increments by 1 each time the button is clicked.
// B. The count remains at 0, and the button does nothing.
// C. The count increments by 1, but it throws a warning about dependencies.
// D. The count increments by 1, but it causes a runtime error.

// Correct answer: B. The count remains at 0, and the button does nothing.

// Explanation: The `useCallback` hook returns a memoized version of the callback function. In this case, the `increment` function will always have `count` as 0 because `count` is used as a dependency in the `useCallback` hook without updating it. Therefore, the "Increment" button will do nothing and the count will remain at 0.


// Question 4

import React from 'react';
import { useTransition } from 'react';

function ComponentD() {
  const [show, setShow] = useState(false);
  const transition = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <>
      {transition((style, item) => (
        item ? <div style={style}>Hello</div> : null
      ))}
      <button onClick={() => setShow(!show)}>Toggle</button>
    </>
  );
}

// What does this code do when the "Toggle" button is clicked?
// A. Toggles the display of "Hello" with a fade-in/fade-out animation.
// B. Adds "Hello" without any animation.
// C. Removes "Hello" without any animation.
// D. It throws an error.

// Correct answer: A. Toggles the display of "Hello" with a fade-in/fade-out animation.

// Explanation: The `useTransition` hook is used to add animations when showing/hiding elements. The provided `from`, `enter`, and `leave` styles define how the element will look during different phases of the transition. When the "Toggle" button is clicked, it toggles the display of "Hello" with a fade-in/fade-out animation based on the specified styles.

// Question 5

import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

function ComponentE() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>Count: {state.count}</div>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </>
  );
}

// What is the expected output when the "Increment" button is clicked three times
// and then the "Reset" button is clicked?
// A. Count: 0
// B. Count: 1
// C. Count: 2
// D. Count: 3

// Correct answer: A. Count: 0

// Explanation: The initial state is { count: 0 }. When the "Increment" button is clicked three times, the count will become 3. Then, when the "Reset" button is clicked, the state will be reset to the initial state, i.e., { count: 0 }.


// Question 6
import React, { useCallback, useState } from 'react';

function ComponentF() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <>
      <div>Count: {count}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}

// What happens when the "Reset" button is clicked after clicking the "Increment" button?
// A. The count remains at 0, and the "Increment" button does nothing.
// B. The count resets to 0, and the "Increment" button works again.
// C. The count remains at the current value, and the "Increment" button does nothing.
// D. The count resets to 0, but the "Increment" button does not work.

// Correct answer: C. The count remains at the current value, and the "Increment" button does nothing.

// Explanation: The `increment` function inside the `useCallback` is created with the current value of `count` as its closure. Therefore, even if the "Reset" button sets the count to 0, the `increment` function will still refer to the old value of `count`, and the "Increment" button will not work as expected.


// Question 7

import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function ComponentG() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
    dispatch({ type: 'INCREMENT' });
  };

  return (
    <>
      <div>Count: {state.count}</div>
      <button onClick={increment}>Increment Twice</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </>
  );
}

// What is the expected output when the "Increment Twice" button is clicked
// and then the "Decrement" button is clicked?
// A. Count: 1
// B. Count: 2
// C. Count: 3
// D. Count: -1

// Correct answer: B. Count: 2

// Explanation: When the "Increment Twice" button is clicked, the `increment` function dispatches two 'INCREMENT' actions, which increments the count twice. Therefore, the count will be 2. When the "Decrement" button is clicked, it dispatches a 'DECREMENT' action, which decrements the count by 1, resulting in a final count of 2.


// Question 8

import React, { useCallback, useState } from 'react';

function ComponentH() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, []);

  return (
    <>
      <div>Count: {count}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}

// What happens when the "Increment" button is clicked multiple times?
// A. The count increments by 1 each time the button is clicked.
// B. The count remains at 0, and the button does nothing.
// C. The count increments by 1, but it throws a warning about dependencies.
// D. The count increments by 1, but it causes a runtime error.

// Correct answer: A. The count increments by 1 each time the button is clicked.

// Explanation: The `useCallback` hook is used with an empty dependency array `[]`, which means the `increment` function will have access to the initial value of `count` (0) when it was created. As a result, every time the "Increment" button is clicked, the count increments by 1.

// Question 9
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function ComponentI() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <>
      <div>Count: {state.count}</div>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={decrement}>Decrement Twice</button>
    </>
  );
}

// What is the expected output when the "Increment" button is clicked once
// and then the "Decrement Twice" button is clicked?
// A. Count: 0
// B. Count: 1
// C. Count: 2
// D. Count: -1

// Correct answer: A. Count: 0

// Explanation: When the "Increment" button is clicked once, the count increments by 1, and the count becomes 1. Then, when the "Decrement Twice" button is clicked, the `decrement` function dispatches two 'DECREMENT' actions, which decrements the count twice. Therefore, the count will be 1 - 1 - 1 = -1.

// Question 10

import React, { useCallback, useState } from 'react';

function ComponentJ() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <>
      <div>Count: {count}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}

// What happens when the "Reset" button is clicked after clicking the "Increment" button?
// A. The count remains at 0, and the "Increment" button does nothing.
// B. The count resets to 0, and the "Increment" button works again.
// C. The count remains at the current value, and the "Increment" button does nothing.
// D. The count resets to 0, but the "Increment" button does not work.

// Correct answer: B. The count resets to 0, and the "Increment" button works again.

// Explanation: The `increment` function uses the functional update form of `setCount`, which ensures that the new value is based on the previous state (`prevCount`). Therefore, even if the "Reset" button sets the count to 0, the `increment` function will use the previous count as its base and increment it by 1. Hence, the "Increment" button will work correctly even after resetting the count.










