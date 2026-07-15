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
