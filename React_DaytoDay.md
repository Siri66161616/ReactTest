React JS Day-to-Day plan :

Day 1:

1. Setting Up the Environment

Install VS Code
Install Node.js and npm
Configure VS Code - Install extension Prettier for JavaScript.

2. Understanding JavaScript Basics

Variables (var, let, const)
Data Types
Operators

Variables :
○ var: Function-scoped, can be re-declared and updated.
○ let: Block-scoped, cannot be re-declared but can be updated.
○ const: Block-scoped, cannot be re-declared or updated.

    var x = 10; // Global or function-scoped
    let y = 20; // Block-scoped
    const z = 30; // Block-scoped and constant

    console.log(x, y, z); // Output: 10 20 30

Data Types
○ Primitive Types: string, number, boolean, null, undefined, symbol, bigint.
○ Non-Primitive Types: Objects and arrays.

    // Primitive types
    let name = "John"; // string
    let age = 25; // number
    let isStudent = true; // boolean

    // Non-primitive types
    let student = { name: "Alice", grade: "A" }; // Object
    let scores = [95, 80, 87]; // Array

Operators:

    ○ Arithmetic Operators: +, -, *, /, %, **.
    ○ Assignment Operators: =, +=, -=, *=, /=.
    ○ Comparison Operators: ==, !=, ===, !==, >, <, >=, <=.
    ○ Logical Operators: &&, ||, !.

    let a = 10;
    let b = 3;

    console.log(a + b); // Addition: 13
    console.log(a % b); // Remainder: 1
    console.log(a > b); // Comparison: true
    console.log(a > b && b > 0); // Logical AND: true

• Conditional statements (if, else if, else, switch).
• Loops (for, while, do...while, for...of).
• Functions (regular and arrow functions).

    Write a program to display a greeting depending on the current time.


    let currentHour = new Date().getHours();
    let greeting;

    if (currentHour < 12) {
      greeting = "Good Morning!";
    } else if (currentHour < 18) {
      greeting = "Good Afternoon!";
    } else {
      greeting = "Good Evening!";
    }

    console.log(greeting);

    // Output changes based on the time of day

==================================================================================================================================

Day 2:

ES6+ Features Introduction : (modern JavaScript features.)

1. Understanding ES6+ Features

A. Arrow Functions :

Arrow functions provide a shorter syntax for writing functions.
Syntax :
const functionName = (parameters) => expression;

Example :

// Traditional function
function add(a, b) {
return a + b;
}

// Arrow function
const addArrow = (a, b) => a + b;

console.log(add(3, 4)); // Output: 7
console.log(addArrow(3, 4)); // Output: 7

Key Benefits:
• Shorter syntax
• No need for {} when returning a single expression
/Users/rajendhar/Freelance/KT/day_2.js

B. Template Literals :

Template literals (or template strings) allow you to embed variables inside strings easily using backticks (` `).

const name = "John";
const age = 25;

// Using template literals
const message = `Hello, my name is ${name} and I am ${age} years old.`;

console.log(message);
// Output: Hello, my name is John and I am 25 years old.

C. Destructuring Arrays and Objects

    Destructuring allows extracting values from arrays and objects in a concise way.

    1. Array Destructuring

      const numbers = [10, 20, 30];

      // Extracting values
      const [first, second, third] = numbers;

      console.log(first);  // Output: 10
      console.log(second); // Output: 20
      console.log(third);  // Output: 30

    2. Object Destructuring

      const person = {
          name: "Alice",
          age: 30,
          city: "New York"
      };

      // Extracting properties
      const { name, age, city } = person;

      console.log(name); // Output: Alice
      console.log(age);  // Output: 30
      console.log(city); // Output: New York

D. Spread and Rest Operators

    The spread (...) operator expands elements from an array or object, while the rest (...) operator collects remaining elements into an array.

    1. Spread Operator Example (Merging Arrays)

    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];

    const mergedArray = [...array1, ...array2];

    console.log(mergedArray);
    // Output: [1, 2, 3, 4, 5, 6]

    2. Spread Operator Example (Copying Objects)

    const student = { name: "Emma", grade: "A" };
    const newStudent = { ...student, age: 16 };

    console.log(newStudent);
    // Output: { name: "Emma", grade: "A", age: 16 }

    3. Rest Operator Example

    const sum = (...numbers) => {
        return numbers.reduce((acc, num) => acc + num, 0);
    };

    console.log(sum(1, 2, 3, 4)); // Output: 10


    Practical Tasks :

    Task 1: Arrow Function to Calculate Square of a Number

    const square = num => num * num;

    console.log(square(5)); // Output: 25
    console.log(square(10)); // Output: 100

    Task 2: Destructuring an Object and an Array

    // Array Destructuring
    const fruits = ["Apple", "Banana", "Cherry"];
    const [fruit1, fruit2, fruit3] = fruits;

    console.log(fruit1); // Output: Apple
    console.log(fruit2); // Output: Banana

    // Object Destructuring
    const user = {
        username: "john_doe",
        email: "john@example.com"
    };

    const { username, email } = user;
    console.log(username); // Output: john_doe
    console.log(email);    // Output: john@example.com

    Task 3: Merge Two Arrays Using Spread Operator

    const arrayA = [10, 20, 30];
    const arrayB = [40, 50, 60];

    const merged = [...arrayA, ...arrayB];

    console.log(merged);
    // Output: [10, 20, 30, 40, 50, 60]


    • Arrow functions for concise function expressions.
    • Template literals for easier string manipulation.
    • Destructuring to extract values from arrays and objects.
    • Spread and rest operators to manipulate collections.

===========================================================================================================

Day 3:

Understanding Arrays and Objects

A. Array Methods

JavaScript provides several built-in methods to work with arrays.

1. map() - Transforming Elements
   The map() method creates a new array by applying a function to each element of the original array.

Syntax:
const newArray = originalArray.map(callbackFunction);

Example: Doubling Elements

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num \* 2);

console.log(doubled);
// Output: [2, 4, 6, 8, 10]

2. filter() - Filtering Elements
   The filter() method returns a new array containing elements that meet a specific condition.
   Example: Filtering Numbers Greater Than 50

const values = [10, 25, 55, 70, 30, 90];
const filteredValues = values.filter(num => num > 50);

console.log(filteredValues);
// Output: [55, 70, 90]

3. reduce() - Aggregating Values
   The reduce() method executes a function on each element to compute a single result.

Syntax:
const result = array.reduce((accumulator, currentValue) => {
return newAccumulator;
}, initialValue);

Example: Summing an Array

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum);
// Output: 15

4. forEach() - Iterating Over Elements

The forEach() method executes a provided function once for each array element.
Example: Logging Each Element

const fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach(fruit => console.log(fruit));

Output :
Apple
Banana
Cherry

B. Object Creation, Properties, and Methods

Objects in JavaScript store key-value pairs and can have functions as methods.

Creating an Object

const student = {
name: "Alice",
age: 20,
greet: function() {
console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}
};

console.log(student.name); // Output: Alice
console.log(student.age); // Output: 20
student.greet(); // Output: Hello, my name is Alice and I am 20 years old.

C. Iterating Over Arrays and Objects

You can use different loops to iterate over arrays and objects.

1. Looping Over an Array
   Using forEach():

const colors = ["Red", "Green", "Blue"];
colors.forEach(color => console.log(color));

Using for...of:

for (const color of colors) {
console.log(color);
}

2. Looping Over an Object
   Using for...in:

const person = {
name: "John",
age: 25,
city: "New York"
};

for (const key in person) {
console.log(`${key}: ${person[key]}`);
}

Output:
name: John
age: 25
city: New York

Practical Tasks :

Task 1: Double the Elements of an Array Using map()
const numbers = [2, 4, 6, 8];
const doubledNumbers = numbers.map(num => num \* 2);

console.log(doubledNumbers);
// Output: [4, 8, 12, 16]

Task 2: Filter Out Numbers Greater Than 50
const numbers = [15, 40, 60, 85, 25, 10];
const filteredNumbers = numbers.filter(num => num > 50);

console.log(filteredNumbers);
// Output: [60, 85]

Task 3: Create an Object to Represent a Student
const student = {
name: "Emma",
age: 22,
greet: function() {
console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
}
};

student.greet();
// Output: Hi, I am Emma and I am 22 years old.

• Array methods (map, filter, reduce, forEach) for efficient data handling.
• Object creation, properties, and methods to represent real-world entities.
• Iterating over arrays and objects for data manipulation.

=============================================================================================================================================================

Day 4:

DOM Manipulation Basics :
how to manipulate HTML elements using JavaScript.

• Selecting Elements
• document.getElementById()
• document.querySelector()
• Adding & Removing Elements
• createElement()
• appendChild()
• removeChild()
• Event Listeners
• addEventListener()
• Handling click events

Selecting Elements :

Using getElementById() (html file)
The getElementById() method selects an element using its id.

  <!DOCTYPE html>
  <html lang="en">
  <head>
      <title>DOM Selection Example</title>
  </head>
  <body>
      <h1 id="title">Hello, World!</h1>
      <script>
          const heading = document.getElementById("title");
          console.log(heading.textContent); // Output: Hello, World!
      </script>
  </body>
  </html>
  
  
  Using querySelector()
  querySelector() selects the first element matching the given selector.
  
  <p class="message">This is a message.</p>
  
  <script>
      const message = document.querySelector(".message");
      console.log(message.textContent); // Output: This is a message.
  </script>
  
  
  Adding & Removing Elements
  
  Adding a New Element (html)
  
  <ul id="list">
      <li>Item 1</li>
      <li>Item 2</li>
  </ul>
  <button onclick="addItem()">Add Item</button>
  
  <script>
      function addItem() {
          const ul = document.getElementById("list");
          const li = document.createElement("li");
          li.textContent = "New Item";
          ul.appendChild(li);
      }
  </script>
  
  Removing an Element :
  
  <ul id="list">
      <li id="removeMe">Remove me</li>
  </ul>
  <button onclick="removeItem()">Remove Item</button>
  
  <script>
      function removeItem() {
          const li = document.getElementById("removeMe");
          li.parentNode.removeChild(li);
      }
  </script>
  
  
  Handling Events :
  
  Changing Text on Button Click:
  The textContent property updates the text inside the div.
  
  <div id="box">Original Text</div>
  <button onclick="changeText()">Change Text</button>
  
  <script>
      function changeText() {
          document.getElementById("box").textContent = "Text Changed!";
      }
  </script>
  
  
  
  Tasks
  
   Task 1: Create an HTML page with a button and a div, changing the text when clicked.
  Task 2: Add list items dynamically when a button is clicked.
  Task 3: Toggle the background color of the page when clicking a button.
  
  
  ============================================================================================================================================================

Day 5:

Setting Up the React Environment

Before creating a React app, you need to install Node.js, which includes npm (Node Package Manager).

node -v
npm -v

npx create-react-app day4-app

npx --legacy-peer-deps create-react-app day4-app

cd my-app
npm start

--force

Understanding the File Structure of a React Project:

my-app/
│── node_modules/ # Installed dependencies
│── public/ # Static assets (favicon, index.html)
│── src/ # React components and main logic
│ ├── App.js # Main React component
│ ├── index.js # Entry point of the application
│── package.json # Project configuration
│── .gitignore # Files to ignore in Git
│── README.md # Project information

• package.json → Defines the dependencies and scripts for the project.
• package-lock.json → Locks the exact versions of installed dependencies.

• src/App.js → The main React component.
• src/index.js → The entry point that renders the app.
• public/index.html → The HTML file where React is mounted.

Introduction to JSX

JSX (JavaScript XML) is a syntax extension for JavaScript used in React.

It allows us to write HTML-like code within JavaScript.
JSX makes UI code easier to read and maintain.

Without JSX:
const element = React.createElement('h1', null, 'Hello, World!');

With JSX:
const element = <h1>Hello, World!</h1>;

How JSX Differs from HTML
Feature JSX HTML
Attributes className="btn" class="btn"
JavaScript {new Date().toLocaleDateString()} Not allowed
Self-closing Tags <img src="logo.png" /> <img src="logo.png">

Display Current Date :

const today = new Date().toLocaleDateString();

const App = () => {
return (

<div>
<h1>Today's Date: {today}</h1>
</div>
);
};

JSX Rules :

1. Must return a single parent element:

return (

<div>
<h1>Hello</h1>
<p>Welcome to React</p>
</div>
);

If we don't use div we can not run it

2. Use className instead of class:
   ❌ <div class="container">
   ✅ <div className="container">
3. JavaScript expressions inside {}:
<h1>{2 + 2}</h1> // Displays: 4

==============================================================================================

Day 6:

Functional Components
Component Nesting
Component File Structure & Best Practices

1.1 Functional Components

    A functional component is a JavaScript function that returns JSX (React's syntax for UI rendering).

    Example:

      function Hello() {
        return <h1>Hello, World!</h1>;
      }

      Using Arrow function:

      const Hello = () => <h1>Hello, World!</h1>;

1.2 Component File Structure

    Organizing components in a structured way improves maintainability.

    /src
    ├── /components
    │   ├── Header.js
    │   ├── Main.js
    │   ├── Footer.js
    ├── App.js
    ├── index.js

1.3 Component Nesting

    Components can be nested inside each other to create a structured UI.

    function App() {
      return (
        <div>
          <Header />
          <Main />
          <Footer />
        </div>
      );
    }

Task 1: Create a Header Component

Steps: 1. Create a new file Header.js. And write below code

    function Header() {
      return <header><h1>My Website</h1></header>;
    }
    export default Header;




    import Header from "./components/Header";

    function App() {
      return (
        <div>
          <Header />
        </div>
      );
    }
    export default App;

Task 2: Create a Footer Component

    Steps:
      1. Create Footer.js and write:

    function Footer() {
      return <footer><p>© 2025 My Website</p></footer>;
    }
    export default Footer;


    import Header from "./components/Header";
    import Footer from "./components/Footer";

    function App() {
      return (
        <div>
          <Header />
          <Footer />
        </div>
      );
    }
    export default App;


    Task 3: Create a Main Component with a List of Items

    Steps:
      1. Create Main.js and write:

    function Main() {
      const items = ["Item 1", "Item 2", "Item 3"];

      return (
        <main>
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </main>
      );
    }
    export default Main;




    import Header from "./components/Header";
    import Main from "./components/Main";
    import Footer from "./components/Footer";

    function App() {
      return (
        <div>
          <Header />
          <Main />
          <Footer />
        </div>
      );
    }
    export default App;

===========================================================================================================================================

Day 7:

Props in React
Learn how to pass data between components using props.

1.1 Passing Props to Functional Components

Props (short for properties) allow passing data from a parent component to a child component.

Example:

function Greeting(props) {
return <h1>Hello, {props.name}!</h1>;
}

function App() {
return <Greeting name="John" />;
}

1.2 Accessing and Using Props in Child Components:

Props are received in functional components as function parameters.

function Welcome({ message }) {
return <p>{message}</p>;
}

function App() {
return <Welcome message="Welcome to React!" />;
}

1.3 Accessing and Using Props in Child Components

Props are received in functional components as function parameters.

function Welcome({ message }) {
return <p>{message}</p>;
}

function App() {
return <Welcome message="Welcome to React!" />;
}

Task 1: Create a Product Component that Accepts Props

Steps: 1. Create a new file Product.js.
function Product({ name, price, description }) {
return (

<div>
<h2>{name}</h2>
<p>Price: ${price}</p>
<p>{description}</p>
</div>
);
}
export default Product;

    In App.js

    import Product from "./components/Product";

    function App() {
      return (
        <div>
          <Product name="Laptop" price={1200} description="High-performance laptop." />
        </div>
      );
    }
    export default App;

Task 2: Modify the Header Component to Accept a title Prop

Header.js
function Header({ title }) {
return <header><h1>{title}</h1></header>;
}
export default Header;

In App.js :

import Header from "./components/Header";

function App() {
return (

<div>
<Header title="My React Store" />
</div>
);
}
export default App;

=================================================================================================================================================

Day 8:

State in React :

Understand and use state to manage data in React components.

1. Using the useState Hook
   • useState is a React Hook that allows functional components to have state.
   • It returns a state variable and a function to update it.

Syntax :
const [state, setState] = useState(initialValue);

• state → Holds the current value of the state.
• setState → Function used to update the state.
• initialValue → The default value of the state when the component loads.

Example:

import React, { useState } from "react";

function Counter() {
const [count, setCount] = useState(0);

    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );

}

export default Counter;

2. Updating and Managing State
   • Updating state in React is asynchronous.
   • Always use the setter function (setState) rather than modifying the state variable directly.

import React, { useState } from "react";

function Counter() {
const [count, setCount] = useState(0);

    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
      </div>
    );

}

export default Counter;

3. The Difference Between Props and State
   Props State
   Passed from parent to child components. Managed within the component itself.
   Immutable (cannot be changed by the component receiving it). Mutable (can be changed using useState).
   Used for configuring a component. Used for managing dynamic data.

Example: Props vs State

import React, { useState } from "react";

// Child component receives props
function DisplayMessage({ message }) {
return <p>{message}</p>;
}

function ParentComponent() {
const [message, setMessage] = useState("Hello!");

    return (
      <div>
        <DisplayMessage message={message} />
        <button onClick={() => setMessage("State Updated!")}>Update Message</button>
      </div>
    );

}

export default ParentComponent;

• useState Hook is used to manage state in functional components.
• Updating state should be done using the setter function (setState).
• Props vs State:
• Props are immutable and passed from parent to child.
• State is mutable and controlled within the component.

Event Handling in React :

• Handling Events in React (onClick, onChange, etc.).
• Passing Parameters to Event Handlers.

Example using onClick :

function ButtonClick() {
const handleClick = () => {
console.log("Button clicked!");
};

    return <button onClick={handleClick}>Click Me</button>;

}

Passing Parameters to Event Handlers

function GreetUser({ name }) {
const sayHello = (userName) => {
console.log(`Hello, ${userName}!`);
};

    return <button onClick={() => sayHello("Raj...")}>Greet</button>;

}

Example :

function InputForm() {
const [inputValue, setInputValue] = useState("");
const handleChange = (event) => {
setInputValue(event.target.value);
};
const handleSubmit = (event) => {
event.preventDefault(); // Prevents page refresh
console.log("Submitted Value:", inputValue);
};
return (

<form onSubmit={handleSubmit}>
<input type="text" value={inputValue} onChange={handleChange} />
<button type="submit">Submit</button>
</form>
);
}

Understand more about following Hook concepts:

useState

useEffect

useContext

useRef

useReducer

useCallback

useMemo

React List and

React Forms


============================================================================================================================

Redux and its role in managing global state in React applications.


	• What is Redux and when to use it?
	• Redux is a state management library for JavaScript applications.
	• Used when:
		○ Multiple components need access to shared state.
		○ State changes in a predictable way.
		○ Application scales and requires better state management.
	• Setting up Redux in a React project
	• Install dependencies:

	npm install @reduxjs/toolkit react-redux
	
	Actions, Reducers, and the Redux Store
		• Actions: Objects that describe changes in the state.
		• Reducers: Functions that handle state updates based on actions.
		• Store: Centralized location for managing state.
	
	
	Example :
	
	
	Create a Basic Counter App using Redux
	
	// src/redux/counterSlice.js
	import { createSlice } from '@reduxjs/toolkit';
	
	const counterSlice = createSlice({
	  name: 'counter',
	  initialState: { count: 0 },
	  reducers: {
	    increment: (state) => {
	      state.count += 1;
	    },
	    decrement: (state) => {
	      state.count -= 1;
	    }
	  }
	});
	
	export const { increment, decrement } = counterSlice.actions;
	export default counterSlice.reducer;
	
	
	Create a Redux Store
	
	// src/redux/store.js
	import { configureStore } from '@reduxjs/toolkit';
	import counterReducer from './counterSlice';
	
	const store = configureStore({
	  reducer: {
	    counter: counterReducer
	  }
	});
	
	export default store;
	
	
	Connect the Store to the App (Wrap the app in <Provider> to make Redux state available.)
	
	// src/index.js
	import React from 'react';
	import ReactDOM from 'react-dom';
	import { Provider } from 'react-redux';
	import store from './redux/store';
	import App from './App';
	
	ReactDOM.render(
	  <Provider store={store}>
	    <App />
	  </Provider>,
	  document.getElementById('root')
	);
	
	
	Use useSelector and useDispatch in Components
	
	// src/components/Counter.js
	import React from 'react';
	import { useSelector, useDispatch } from 'react-redux';
	import { increment, decrement } from '../redux/counterSlice';
	
	const Counter = () => {
	  const count = useSelector((state) => state.counter.count);
	  const dispatch = useDispatch();
	
	  return (
	    <div>
	      <h1>Counter: {count}</h1>
	      <button onClick={() => dispatch(increment())}>Increment</button>
	      <button onClick={() => dispatch(decrement())}>Decrement</button>
	    </div>
	  );
	};
	
	export default Counter;
	
	
	Use the Counter Component in App.js
	
	// src/App.js
	import React from 'react';
	import Counter from './components/Counter';
	
	const App = () => {
	  return (
	    <div>
	      <h2>Redux Counter App</h2>
	      <Counter />
	    </div>
	  );
	};
	
	export default App;
	
	
	       (1) UI Dispatches Action
	                ⬇
	        ┌───────────────────┐
	        │      Action       │   (Plain JS Object describing an event)
	        └───────────────────┘
	                ⬇
	        ┌───────────────────┐
	        │      Reducer      │   (Pure function that updates state based on action)
	        └───────────────────┘
	                ⬇
	        ┌───────────────────┐
	        │       Store       │   (Holds the application state)
	        └───────────────────┘
	                ⬇
	        ┌───────────────────┐
	        │       UI         │   (Re-renders based on new state)
	        └───────────────────┘
	
	
	• UI (Component) → A user interacts with the application (e.g., clicks a button).
	• Dispatch an Action → The UI sends an action (like { type: "INCREMENT" }).
	• Reducer Processes Action → The reducer function updates the state based on the action.
	• State Updates in Store → The Redux store holds the updated state.
	• UI Re-renders → The updated state triggers a UI update.


We can use it for asynchronous operations like API calls in Redux

=============================================================================================================================================================

	React Testing :  
	
	
	Test React components using Jest and React Testing Library (RTL).
	
	• Setting Up Jest and React Testing Library
		• Installing Jest and React Testing Library.
		• Configuring Jest for a React project.
		• Running tests with npm test.
	• Writing Unit Tests for Components
		• Testing functional components.
		• Using screen, getByText, getByRole, etc.
		• Simulating user interactions with fireEvent and userEvent.
	• Mocking Functions and API Calls
		• Mocking button click handlers.
		• Mocking API calls using jest.fn() and jest.mock().


	1. Install Jest and React Testing Library
	Run the following command to install Jest and RTL:
	
	npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event
	
	
	Ensure your package.json has the following Jest configuration:
	
	"scripts": {
	  "test": "react-scripts test"
	}
	
	
	Write Tests for a Counter Component
	
	Create a Counter Component
	
	// src/components/Counter.js
	import React, { useState } from 'react';
	
	const Counter = () => {
	  const [count, setCount] = useState(0);
	
	  return (
	    <div>
	      <h2>Counter: {count}</h2>
	      <button onClick={() => setCount(count + 1)}>Increment</button>
	      <button onClick={() => setCount(count - 1)}>Decrement</button>
	    </div>
	  );
	};
	
	export default Counter;
	
	
	Write Tests for the Counter Component
	
	// src/tests/Counter.test.js
	import { render, screen, fireEvent } from '@testing-library/react';
	import Counter from '../components/Counter';
	
	test('renders counter with initial value', () => {
	  render(<Counter />);
	  const counterText = screen.getByText(/Counter: 0/i);
	  expect(counterText).toBeInTheDocument();
	});
	
	test('increments counter when "Increment" button is clicked', () => {
	  render(<Counter />);
	  const button = screen.getByText(/Increment/i);
	  fireEvent.click(button);
	  expect(screen.getByText(/Counter: 1/i)).toBeInTheDocument();
	});
	
	test('decrements counter when "Decrement" button is clicked', () => {
	  render(<Counter />);
	  const button = screen.getByText(/Decrement/i);
	  fireEvent.click(button);
	  expect(screen.getByText(/Counter: -1/i)).toBeInTheDocument();
	});
	
	
	Run the Tests
	
	Run the following command in the terminal:
	
	npm test    (This will execute all test files inside the src/tests/ directory.)
	
	
	Tests for a Counter component:
		• Verified the initial state.
		• Tested increment and decrement buttons.

===============================================================================================================================================================================
