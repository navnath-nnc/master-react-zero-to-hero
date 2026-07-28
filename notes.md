**What is Babel?**

👉 Babel is a transpiler

👉 Transpiler means:

Converts modern JavaScript code → older JavaScript code

🤔 Why do we need Babel in React?

Because React uses:

JSX ❌ (browser doesn’t understand)
Modern JS (ES6+) ❌ (older browsers don’t support fully)

👉 Browsers only understand plain JavaScript

🔴 Example Problem
React JSX:
const element = <h1>Hello</h1>;

👉 Browser cannot understand this ❌

✅ What Babel does

👉 Converts JSX into normal JS:

const element = React.createElement("h1", null, "Hello");

✔ Now browser understands it ✅

🔄 How Babel Works (Step-by-Step)

1. Parsing
   Code → AST (Abstract Syntax Tree)
2. Transforming
   Modify AST
   Convert JSX → JS
   Convert ES6 → ES5
3. Generating
   AST → browser-friendly code
   ⚙️ Full Flow
   JSX / ES6 Code
   ↓
   Babel
   ↓
   Browser-compatible JS
   ↓
   Runs in browser 🚀
   🔥 Example with modern JS
   const add = (a, b) => a + b;

👉 Babel converts to:

var add = function(a, b) {
return a + b;
};
📦 Babel in React Projects

When you use tools like:

Create React App
Vite
Parcel

👉 Babel runs automatically behind the scenes

✔ You don’t need to configure manually (as a beginner)

🧑‍🍳 Simple analogy

Think of Babel like a translator 🌍:

You speak modern JS + JSX
Browser understands only old JS

👉 Babel translates for you

🎯 Why Babel is important
Makes React code work in browsers
Enables modern JS features
Improves compatibility
🧾 Final Summary
Babel = JavaScript transpiler
Converts JSX → JS
Converts modern JS → older JS
Works behind the scenes in React apps
💡 One-line takeaway

👉
Babel converts React JSX and modern JavaScript into browser-understandable code

** What is JSX?**

👉 JSX = JavaScript XML

👉 It is a syntax used in React that lets you write HTML-like code inside JavaScript

🔹 Example
const element = <h1>Hello World</h1>;

👉 This looks like HTML
👉 But it is actually JavaScript

🤔 Why JSX is used?

Without JSX:

const element = React.createElement("h1", null, "Hello World");

👉 Hard to read ❌

With JSX:

const element = <h1>Hello World</h1>;

👉 Easy to read ✅
👉 Looks like HTML ✅

⚙️ How JSX Works Behind the Scenes

JSX is not understood by browsers ❗

👉 It is converted by Babel into:

React.createElement("h1", null, "Hello World");

👉 Then JavaScript engine (like V8) executes it

🔹 JSX Rules (Very Important)

1. Must return single parent
return (
  <div>
    <h1>Hello</h1>
    <p>World</p>
  </div>
);
2. Use className instead of class
<div className="box"></div>
3. Use {} for JavaScript
   const name = "Amit";

<h1>Hello {name}</h1>
4. Self-closing tags
<img src="img.png" />
<br />
5. Inline styles use object
<div style={{ color: "red" }}>Text</div>
🔹 JSX with JavaScript logic
const isLoggedIn = true;

<h1>{isLoggedIn ? "Welcome" : "Please Login"}</h1>
🧑‍🍳 Simple analogy

👉 JSX is like:

Writing HTML inside JS
But actually it becomes pure JS behind the scenes
🎯 Why JSX is powerful
Easy to read
Combines UI + logic
Makes React code cleaner
🧾 Final Summary
JSX = HTML-like syntax in React
Not real HTML
Converted to JS using Babel
Makes UI code simple and readable
💡 One-line takeaway

👉
JSX lets you write HTML-like code inside JavaScript, which gets converted into normal JavaScript

**What is a Functional Components?**
In React, functional components are the modern, preferred way to build UI components. They are simply JavaScript functions that return JSX (the UI).

A functional component is a plain JavaScript function that:
Accepts props (input data)
Returns JSX (UI to render)
Example:
function Welcome(props) {
return <h1>Hello, {props.name}!</h1>;
}

Or using arrow function:
const Welcome = ({ name }) => {
return <h1>Hello, {name}!</h1>;
};

🔹 Key Features

1. Simple and Readable
   Functional components are easier to write and understand than class components.

2. Use of Hooks
   With Hooks, functional components can manage state and lifecycle features.

Example with useState:
import { useState } from "react";

function Counter() {
const [count, setCount] = useState(0);
return (

<div>
<p>Count: {count}</p>
<button onClick={() => setCount(count + 1)}>Increment</button>
</div>
);
}

3. No this Keyword
   Unlike class components, functional components don’t use this, which avoids confusion.

4. Reusable & Composable
   They can be easily reused and combined to build complex UIs.

🔹 Functional vs Class Components

| Feature           | Functional Component | Class Component   |
| ----------------- | -------------------- | ----------------- |
| Syntax            | Simple function      | ES6 class         |
| State             | Hooks (`useState`)   | `this.state`      |
| Lifecycle methods | Hooks (`useEffect`)  | Lifecycle methods |
| `this` keyword    | ❌ Not used          | ✅ Required       |

🔹 Example with useEffect (Lifecycle)
import { useEffect } from "react";

function Timer() {
useEffect(() => {
console.log("Component mounted");

    return () => {
      console.log("Component unmounted");
    };

}, []);

return <p>Check console</p>;
}

🔹 When to Use Functional Components?
👉 Always prefer them in modern React development:
Cleaner code
Better performance (in most cases)
Full support with Hooks

**What are Props?**

In React, props (short for properties) are used to pass data from one component to another, usually from a parent component to a child component.

👉 Props are read-only inputs to components.
They allow components to be dynamic and reusable.

🔹 Simple Example
Parent Component
function App() {
return <Welcome name="Rahul" />;
}
Child Component
function Welcome(props) {
return <h1>Hello, {props.name}</h1>;
}

👉 Output:
Hello, Rahul

🔹 How Props Work (Step-by-Step)
Parent sends data:
<Welcome name="Rahul" />
Child receives it:
function Welcome(props)
Access it:
props.name

🔹 Using Destructuring (Cleaner Way)
function Welcome({ name }) {
return <h1>Hello, {name}</h1>;
}

🔹 Multiple Props Example
function User({ name, age }) {
return (

<p>
Name: {name}, Age: {age}
</p>
);
}

// Usage
<User name="Amit" age={25} />

🔹 Props are Read-Only ⚠️
❌ Wrong:
props.name = "New Name"; // Not allowed

✅ Correct:
Props should never be modified
If you need to change data → use state

🔹 Props vs State
| Feature | Props | State |
| ------- | ------------------ | ------------------------ |
| Source | Passed from parent | Managed inside component |
| Mutable | ❌ No | ✅ Yes |
| Purpose | Data transfer | Data management |

🔹 Real-Life Analogy
Think of props like function arguments:
function greet(name) {
return "Hello " + name;
}

👉 In React:
Component = function
Props = arguments

🔹 Key Takeaways
Props = data passed between components
They are immutable (read-only)
Help make components reusable
Used in both functional and class components

**Higher-Order Components (HOC) In React**

A Higher-Order Component (HOC) is a function that takes an existing component and adds extra functionality to it, without changing the original component.

Think of it like this:

☕ Coffee → Original Component

🥛 Add Milk → Higher-Order Component (HOC)

☕🥛 Coffee with Milk → Enhanced Component

The coffee is still coffee—you've just added something extra!

💻 Example

Suppose you have a Profile component.

function Profile() {

return <h2>Welcome User</h2>;

}

Now, before showing the profile, you want to check whether the user is logged in.

Instead of writing the same login check in every component, create a HOC:

const ProtectedProfile = withAuth(Profile);

Now ProtectedProfile has authentication built in, while the original Profile component remains unchanged.

📌 Why use HOCs?

✅ Reuse common logic

✅ Avoid duplicate code

✅ Keep components clean and focused

✅ Add features like Authentication, Logging, Loading, or Permissions

🧠 Easy Way to Remember

A Higher-Order Function takes a function and returns another function.

Similarly,

A Higher-Order Component takes a Component and returns an Enhanced Component.

💡 Final Thoughts

A Higher-Order Component (HOC) is a function that takes a React component as input and returns a new component with additional functionality, without modifying the original component.

Note: In modern React, Custom Hooks are generally preferred for sharing logic between function components, but you'll still find HOCs in many existing projects and libraries.

**What is Controlled and Uncontrolled Components in React**
📝 Imagine a Registration Form

It has a Name input field.

1️⃣ Controlled Component
In a Controlled Component, React controls the input value using state.

Think of it like a teacher checking every word you write.
As soon as you type something, React immediately knows about it.
function App() {
const [name, setName] = useState("");
return (
<input
value={name}
onChange={(e) => setName(e.target.value)}
/>
);
}

✅ Every keystroke updates React state.

Real-Life Analogy
👩‍🏫 Teacher watches every word you write.

You write:

A → React knows

An → React knows

Ang → React knows

Angular → React knows

React is always in control.

When to use?

✅ Form validation

✅ Search boxes

✅ Dynamic forms

✅ Live character count

2️⃣ Uncontrolled Component

In an Uncontrolled Component, the browser controls the input value, not React.

React only reads the value when it's needed using useRef.

Think of it like writing an exam.
The teacher doesn't watch every word you write. They only check your answer sheet after you finish.

function App() {
const inputRef = useRef();

const handleClick = () => {
alert(inputRef.current.value);
};

return (
<>
<input ref={inputRef} />
<button onClick={handleClick}>
Submit
</button>
</>
);
}

Here, React reads the value only when the button is clicked.

Real-Life Analogy

📝 Student writes the entire answer.

👨‍🏫 Teacher checks only after submission.

🧠 Easy Way to Remember

👉 Controlled = React is the Boss.

👉 Uncontrolled = Browser is the Boss.

💡 Final Thoughts-

A Controlled Component is a form element whose value is managed by React state using useState. An Uncontrolled Component stores its value in the DOM, and React accesses it using useRef only when needed. Controlled components are preferred in most React applications because they make validation, conditional rendering, and form handling much easier.

**Class Component Lifecycle Methods**

Before React Hooks (useEffect) were introduced, React developers used Lifecycle Methods in Class Components to perform different actions during a component's life.

React Class Component goes through three phases:

1. Mounting

This happens when the compo nent is created and shown on the screen for the first time.

Lifecycle Method:

componentDidMount() {
console.log("Component Mounted");
}

Real-life Example:

Imagine opening a shopping app.

As soon as the page opens, it fetches the list of products from the server.

👉 componentDidMount() is the perfect place to:

- Fetch API data
- Start timers
- Add event listeners

2. Updating

Whenever state or props change, React updates the component.

Lifecycle Method:

componentDidUpdate(prevProps, prevState) {
console.log("Component Updated");
}

Real-life Example:

You click the + button on a shopping cart.

The cart count changes from:

1️⃣ → 2️⃣ → 3️⃣

Every update causes the component to re-render.

👉 componentDidUpdate() is useful for:

Making API calls after data changes
Updating charts
Logging changes

3. Unmounting

When the user leaves the page, React removes the component.

Lifecycle Method:

componentWillUnmount() {
console.log("Component Removed");
}

Real-life Example:

Imagine listening to music.

When you close the music page, the player should stop.

Similarly, before removing a component, React performs cleanup.

👉 componentWillUnmount() is used to:

Remove event listeners
Clear timers (setInterval, setTimeout)
Cancel API requests
Close WebSocket connections

🧠Easy Way to Remember

- componentDidMount() → Runs once when the component appears.

- componentDidUpdate() → Runs whenever state or props change.

- componentWillUnmount() → Runs before the component is removed.

💡 Final Thoughts-

React Class Component Lifecycle Methods are special methods that run automatically during different phases of a component's life—Mounting (componentDidMount), Updating (componentDidUpdate), and Unmounting (componentWillUnmount). They are commonly used for API calls, updating data, and cleaning up resources. In modern React, these lifecycle methods are replaced by the useEffect hook in functional components.

**What is Redux?**

Redux is a state management library that stores your application's global state in one central place called the Store.

Instead of passing data from parent → child → grandchild using props (prop drilling), components can directly read from and update the Redux store.

Example Problem (Without Redux)
App
│
├── Header (Cart Count)
│
├── ProductList
│ └── Product
│ └── Add to Cart
│
└── Cart Page

When a user clicks Add to Cart, both the Header and Cart Page need the updated cart data.

Without Redux:

App
│
▼
Header

App
│
▼
ProductList
│
▼
Product

App
│
▼
Cart

The cart data must be passed through multiple components.

This is called Prop Drilling.

Redux Solution

Redux creates one central store.

                Redux Store
        ┌───────────────────────────┐
        │ User                     │
        │ Cart                     │
        │ Theme                    │
        │ Authentication           │
        └───────────────────────────┘
          ▲          ▲          ▲
          │          │          │
      Header    Product     Cart

Every component can access the store directly.

Redux Flow
User Clicks Button
│
▼
Dispatch Action
│
▼
Reducer
│
▼
Redux Store Updated
│
▼
React Re-renders Components
What Problems Did Classic Redux Have?

Classic Redux required writing lots of repetitive code.

For every feature you had to write:

Action Types
Action Creators
Reducers
Store Configuration
Middleware Configuration

Example:

// Action
const increment = () => ({
type: "INCREMENT",
});

// Reducer
function counterReducer(state = 0, action) {
switch (action.type) {
case "INCREMENT":
return state + 1;
default:
return state;
}
}

Lots of boilerplate.

What is Redux Toolkit (RTK)?

Redux Toolkit (RTK) is the official, recommended way to write Redux code.

It reduces boilerplate and includes best practices out of the box.

Think of it like this:

Redux = Build a bicycle from individual parts.
Redux Toolkit = Buy a ready-to-ride bicycle.

Both work, but Redux Toolkit gets you there much faster.

Redux vs Redux Toolkit
| Redux | Redux Toolkit (RTK) |
| ------------------------------ | --------------------------------------------------- |
| Lots of boilerplate code | Minimal boilerplate |
| Uses `createStore()` | Uses `configureStore()` |
| Actions created manually | Actions generated automatically |
| Reducers written separately | Reducers and actions together using `createSlice()` |
| Middleware configured manually | Default middleware included |
| DevTools setup required | DevTools enabled automatically |
| Manual immutable updates | Uses Immer internally |
| More code to maintain | Cleaner and easier to maintain |
| Older approach | Officially recommended approach |

Redux Toolkit Architecture
React Component
│
▼
dispatch(action)
│
▼
createSlice()
│
▼
Reducer
│
▼
configureStore()
│
▼
Redux Store
│
▼
useSelector()
Important Concepts in Redux Toolkit

1. configureStore()

Creates the Redux store.

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

export const store = configureStore({
reducer: {
counter: counterReducer,
},
});
Benefits
Configures Redux DevTools automatically
Adds Redux Thunk middleware
Better defaults 2. createSlice()

This is the most important API in Redux Toolkit.

Instead of creating:

Actions
Reducers
Action Types

separately,

createSlice() creates them all.

import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
name: "counter",

initialState: {
value: 0,
},

reducers: {
increment(state) {
state.value++;
},

    decrement(state) {
      state.value--;
    },

},
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer; 3. Provider

Makes the Redux store available to the React application.

import { Provider } from "react-redux";

<Provider store={store}>
    <App />
</Provider>
4. useSelector()

Reads data from the Redux store.

import { useSelector } from "react-redux";

const count = useSelector(state => state.counter.value);

Think of it as:

Store

↓

Read Data 5. useDispatch()

Updates the Redux store.

import { useDispatch } from "react-redux";

const dispatch = useDispatch();

dispatch(increment());

Think of it as:

Component

↓

Dispatch Action

↓

Store Updated 6. Immer

Normally in Redux you cannot mutate state.

Old Redux:

return {
...state,
count: state.count + 1
}

Redux Toolkit uses Immer, so you can write:

state.count++;

Behind the scenes, Immer creates a new immutable state.

7. createAsyncThunk()

Handles asynchronous operations like API calls.

export const fetchUsers = createAsyncThunk(
"users/fetchUsers",
async () => {
const response = await fetch("/users");
return response.json();
}
);

Instead of manually writing:

Loading
Success
Error actions

Redux Toolkit generates them automatically.

8. extraReducers

Used to respond to actions generated outside the slice, especially async thunks.

extraReducers: (builder) => {
builder
.addCase(fetchUsers.pending, (state) => {
state.loading = true;
})
.addCase(fetchUsers.fulfilled, (state, action) => {
state.loading = false;
state.users = action.payload;
})
.addCase(fetchUsers.rejected, (state) => {
state.loading = false;
});
}
Complete Flow
User clicks "Add to Cart"

        │
        ▼

dispatch(addToCart(product))

        │
        ▼

createSlice()

        │
        ▼

Reducer updates state

        │
        ▼

Store Updated

        │
        ▼

useSelector()

        │
        ▼

React UI Updates
Folder Structure
src/

store/
│
├── store.js
│
├── cartSlice.js
│
├── userSlice.js
│
└── productSlice.js
When Should You Use Redux Toolkit?

Use it when:

Multiple components share the same data.
Managing authentication.
Shopping cart.
User profile.
Theme (dark/light mode).
Notifications.
Large-scale applications.

For simple local state (e.g., a form input or modal visibility), useState is usually sufficient.

Final Thoughts:

Redux is a state management library that stores an application's global state in a centralized store, allowing multiple components to access and update shared data without prop drilling. Redux Toolkit is the official, recommended way to use Redux. It simplifies Redux development by providing APIs such as configureStore for store creation, createSlice for generating reducers and actions, createAsyncThunk for handling asynchronous operations, and built-in middleware and DevTools support. Redux Toolkit also uses Immer internally, allowing developers to write simpler immutable update logic. Because it reduces boilerplate and follows best practices, Redux Toolkit is the preferred choice for modern React applications.

**Unit Test Cases**
What is React Testing Library?

React Testing Library is a library used to test React components the way users interact with them, instead of testing implementation details.

Instead of asking:

❌ "Does this component use useState?"

It asks:

✅ "Can the user see the button?"

✅ "Can the user click the button?"

✅ "Does the screen update after clicking?"

Common Imports
import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";

Let's understand each one.

1. render()
   Purpose

Renders a React component into a virtual DOM for testing.

import { render } from "@testing-library/react";
import App from "./App";

test("renders App", () => {
render(<App />);
});

Think of it as:

Component

↓

render()

↓

Virtual Browser

↓

Now we can test it 2. screen

screen is used to find elements on the rendered page.

Example component

function Login() {
return <h1>Welcome</h1>;
}

Test

render(<Login />);

expect(screen.getByText("Welcome")).toBeInTheDocument();
Common Queries
getByText()
screen.getByText("Login")

Find text.

getByRole()
screen.getByRole("button")

Find button.

getByLabelText()
screen.getByLabelText("Username")

Find input using its label.

getByPlaceholderText()
screen.getByPlaceholderText("Enter name")
getByTestId()

<div data-testid="user-card"></div>
screen.getByTestId("user-card")
3. fireEvent()

Simulates user actions.

Example

function Counter() {
const [count, setCount] = React.useState(0);

return (
<>

<h1>{count}</h1>

      <button
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </>

);
}

Test

render(<Counter />);

fireEvent.click(
screen.getByText("Increment")
);

expect(
screen.getByText("1")
).toBeInTheDocument();
Common fireEvent Methods

Click

fireEvent.click(button);

Input

fireEvent.change(input, {
target: {
value: "Navnath"
}
});

Submit

fireEvent.submit(form);

Keyboard

fireEvent.keyDown(input,{
key:"Enter"
}); 4. act()

act() ensures that all state updates and effects have finished before making assertions.

Without it, React may warn:

Warning:
An update to Component inside a test was not wrapped in act(...)

Example

await act(async () => {
render(<App />);
});

Or

await act(async () => {
fireEvent.click(button);
});

Note: React Testing Library already wraps most render() and fireEvent() calls in act() internally. You typically need act() only for manual async updates (timers, promises, etc.).

5. jest-dom

Provides extra matchers.

Without it

expect(button).toBe(true);

With jest-dom

expect(button).toBeInTheDocument();

Much easier to read.

Common Matchers
toBeInTheDocument()
expect(button)
.toBeInTheDocument();
toHaveTextContent()
expect(button)
.toHaveTextContent("Login");
toHaveValue()
expect(input)
.toHaveValue("Navnath");
toBeDisabled()
expect(button)
.toBeDisabled();
toBeEnabled()
expect(button)
.toBeEnabled();
toHaveAttribute()
expect(img)
.toHaveAttribute("src","logo.png");
Complete Example
Component
import { useState } from "react";

function Counter() {
const [count, setCount] = useState(0);

return (
<>

<h2>Count: {count}</h2>

      <button
        onClick={() =>
          setCount(count + 1)
        }
      >
        Increment
      </button>
    </>

);
}

export default Counter;
Test
import {
render,
screen,
fireEvent,
} from "@testing-library/react";

import "@testing-library/jest-dom";

import Counter from "./Counter";

test("increments count", () => {

render(<Counter />);

expect(
screen.getByText("Count: 0")
).toBeInTheDocument();

fireEvent.click(
screen.getByText("Increment")
);

expect(
screen.getByText("Count: 1")
).toBeInTheDocument();
});
Testing an Input

Component

function Login() {
return (
<>
<label>Name</label>

      <input placeholder="Enter Name"/>
    </>

);
}

Test

render(<Login />);

const input = screen.getByPlaceholderText("Enter Name");

fireEvent.change(input,{
target:{
value:"Navnath"
}
});

expect(input).toHaveValue("Navnath");
Testing a Button Click
render(<Counter />);

const button = screen.getByRole("button");

fireEvent.click(button);

expect(
screen.getByText("Count: 1")
).toBeInTheDocument();

Why use React Testing Library instead of Enzyme?
Tests behavior from the user's perspective.
Encourages accessibility by querying elements via roles, labels, and text.
Avoids testing implementation details.

Difference between getBy, queryBy, and findBy
| Method | When to Use |
| ------------ | --------------------------------------------------------- |
| `getBy...` | Element **must** exist immediately; throws if not found |
| `queryBy...` | Element may not exist; returns `null` instead of throwing |
| `findBy...` | Element appears **asynchronously**; returns a Promise |

Example:

// Synchronous
screen.getByText("Login");

// Check absence
expect(screen.queryByText("Loading")).not.toBeInTheDocument();

// Asynchronous
const message = await screen.findByText("Data Loaded");

Final Thoughts:

React Testing Library is used to test React components from the user's perspective. render() mounts the component into a virtual DOM, screen is used to query elements, fireEvent() simulates user interactions like clicks and typing, and @testing-library/jest-dom provides readable assertions such as toBeInTheDocument() and toHaveValue(). For asynchronous state updates, React's act() ensures updates are completed before assertions, although React Testing Library automatically wraps most common interactions with act(). This approach helps create reliable tests that focus on user behavior rather than implementation details.
