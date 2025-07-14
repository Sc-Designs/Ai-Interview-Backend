import { Question } from "../models/Questions_Model.js";
import { Test } from "../models/Test_Model.js";

const testSets = [
  {
    title: "JS Basics Level 1",
    category: "JavaScript",
    level: "easy",
    questions: [
      {
        questionText: "What is the difference between var, let and const?",
        type: "text",
        correctAnswer:
          "var is function-scoped, let and const are block-scoped; let allows reassignment, const does not, and var allows both redeclaration and reassignment.",
      },
      {
        questionText: "Which of these is a JavaScript data type?",
        type: "mcq",
        options: ["Integer", "String", "Float", "Character"],
        correctAnswer: "String",
      },
      {
        questionText: "Explain event bubbling in JavaScript.",
        type: "text",
        correctAnswer:
          "Event bubbling in JavaScript is a behavior where an event triggered on a child element propagates upward through its parent elements, all the way to the root (document), unless stopped.",
      },
      {
        questionText: "What is the output of '2' + 2?",
        type: "mcq",
        options: ["4", "22", "NaN", "undefined"],
        correctAnswer: "22",
      },
      {
        questionText: "What does 'use strict' do?",
        type: "text",
        correctAnswer:
          "'use strict' is a directive in JavaScript that enables strict mode, which helps catch common coding mistakes and prevents the use of unsafe features by making the code execute in a stricter parsing and error-handling way.",
      },
      {
        questionText: "Which keyword is used to declare async function?",
        type: "mcq",
        options: ["await", "async", "promise", "defer"],
        correctAnswer: "async",
      },
      {
        questionText: "Explain hoisting with an example.",
        type: "text",
        correctAnswer:
          "Hoisting in JavaScript is a behavior where variable and function declarations are moved to the top of their scope before code execution, allowing them to be used before they are declared.",
      },
      {
        questionText: "Which symbol is used to denote comments in JS?",
        type: "mcq",
        options: ["//", "#", "<!--", "/*"],
        correctAnswer: "//",
      },
      {
        questionText: "What is closure in JavaScript?",
        type: "text",
        correctAnswer:
          "A **closure** in JavaScript is a function that **remembers and accesses variables** from its **outer scope**, even after that outer function has finished executing.",
      },
      {
        questionText: "What will this return? typeof null",
        type: "mcq",
        options: ["object", "null", "undefined", "string"],
        correctAnswer: "object",
      },
    ],
  },
  {
    title: "React Fundamentals",
    category: "React",
    level: "easy",
    questions: [
      {
        questionText: "What is a component in React?",
        type: "text",
        correctAnswer:
          "A component in React is a reusable, self-contained piece of UI that defines how a part of the interface should look and behave, using JavaScript (or TypeScript) and JSX.",
      },
      {
        questionText: "Which hook is used for managing state?",
        type: "mcq",
        options: ["useRef", "useEffect", "useState", "useMemo"],
        correctAnswer: "useState",
      },
      {
        questionText: "Explain the Virtual DOM.",
        type: "text",
        correctAnswer:
          "The Virtual DOM is a lightweight in-memory copy of the real DOM that React uses to efficiently update the UI by comparing changes (diffing) and updating only the parts of the real DOM that actually changed.",
      },
      {
        questionText: "Which method is used to lift state up?",
        type: "text",
        correctAnswer:
          "To lift state up in React, you move the state to the closest common parent component and pass data via props — there is no specific method, but it's done manually by lifting the state to a higher-level component.",
      },
      {
        questionText: "React is maintained by which company?",
        type: "mcq",
        options: ["Google", "Facebook", "Microsoft", "Amazon"],
        correctAnswer: "Facebook",
      },
      {
        questionText: "What does useEffect do?",
        type: "text",
        correctAnswer:
          "The useEffect hook in React is used to perform side effects (like data fetching, subscriptions, or DOM manipulation) in function components after rendering or when dependencies change.",
      },
      {
        questionText: "Which of these is not a React lifecycle method?",
        type: "mcq",
        options: [
          "componentDidMount",
          "componentWillUnmount",
          "componentHook",
          "shouldComponentUpdate",
        ],
        correctAnswer: "componentHook",
      },
      {
        questionText: "Why keys are used in React lists?",
        type: "text",
        correctAnswer:
          "Keys are used in React lists to identify each element uniquely, helping React efficiently update, re-render, or reorder items when the list changes.",
      },
      {
        questionText: "Explain the concept of prop drilling.",
        type: "text",
        correctAnswer:
          "Prop drilling is the process of passing data from a parent component to deeply nested child components through multiple layers, even if intermediate components don't need the data themselves.",
      },
      {
        questionText: "What is JSX?",
        type: "mcq",
        options: [
          "A template engine",
          "JavaScript XML",
          "JSON-like syntax",
          "None",
        ],
        correctAnswer: "JavaScript XML",
      },
    ],
  },
  {
    title: "HR Round Questions",
    category: "HR",
    level: "easy",
    questions: [
      {
        questionText: "Tell me about yourself.",
        type: "text",
        correctAnswer:
          "I am [Name], currently pursuing my graduation in [Stream, e.g., BBA/BA/Commerce/etc.]. I am a motivated and disciplined individual with a strong interest in [area of interest, e.g., management, customer service, communication, etc.]. I enjoy working in team environments, solving problems, and learning new skills. I am looking forward to starting my professional career where I can grow personally and contribute to the success of the organization.",
      },
      {
        questionText: "Why should we hire you?",
        type: "voice",
        correctAnswer:
          "You should hire me because I am a fast learner, highly adaptable, and genuinely passionate about contributing to the success of the organization. I bring a positive attitude, a strong work ethic, and a willingness to take on new challenges. While I may be starting my career, I am eager to grow, learn quickly, and give my best to every task assigned to me.",
      },
      {
        questionText: "Where do you see yourself in 5 years?",
        type: "text",
        correctAnswer:
          "In the next five years, I see myself growing both personally and professionally. I aim to take on more responsibilities, develop advanced skills in my field, and contribute meaningfully to the organization’s goals. I also hope to be in a position where I can lead a team, share my knowledge with others, and continuously learn to stay updated in a fast-changing world.",
      },
      {
        questionText: "Describe your biggest strength.",
        type: "voice",
        correctAnswer:
          "My biggest strength is my ability to adapt quickly and learn new things. I stay calm under pressure, enjoy solving problems, and always give my best to complete tasks efficiently. This helps me work well in team environments and handle challenges with a positive mindset.",
      },
      {
        questionText: "Why do you want to join our company?",
        type: "text",
        correctAnswer:
          "I want to join your company because it aligns with my career goals and offers a professional environment where I can grow and contribute meaningfully. I admire your company’s values, work culture, and focus on innovation, and I’m excited about the opportunity to learn from experienced professionals while adding value with my skills and dedication.",
      },
      {
        questionText:
          "Describe a difficult situation you faced and how you handled it.",
        type: "voice",
        correctAnswer:
          "During my academic project, our team faced a challenge when a key member dropped out close to the deadline. Instead of panicking, I stepped up to take additional responsibilities, reorganized our tasks, and motivated the remaining team members. We worked together efficiently, managed our time well, and successfully completed the project on time. This experience taught me the value of teamwork, adaptability, and staying calm under pressure.",
      },
      {
        questionText: "Are you willing to relocate?",
        type: "mcq",
        options: ["Yes", "No", "Depends"],
        correctAnswer: "Depends",
      },
      {
        questionText: "Do you prefer working alone or in a team?",
        type: "mcq",
        options: ["Alone", "Team", "Both"],
        correctAnswer: "Both",
      },
      {
        questionText: "What is your expected salary?",
        type: "text",
        correctAnswer:
          "As a fresher, my main focus is on learning and growing within a good work environment. I’m open to discussing a fair salary that matches the industry standards and reflects the role and responsibilities. I’m confident your company will offer a package that aligns with my skills and potential.",
      },
      {
        questionText: "Do you have any questions for us?",
        type: "text",
        correctAnswer:
          "Yes, I’d love to know more about the growth opportunities and training programs your company offers for freshers. Also, how does the team usually collaborate on projects, and what does success look like in this role?",
      },
    ],
  },
  {
    title: "React Advanced Concepts",
    category: "React",
    level: "medium",
    questions: [
      {
        questionText: "What are React Hooks?",
        type: "text",
        correctAnswer:
          "React Hooks are special functions introduced in React 16.8 that allow you to use state, lifecycle methods, and other React features inside functional components — without writing class components.",
      },
      {
        questionText: "Which hook is used for memoization?",
        type: "mcq",
        options: ["useMemo", "useCallback", "useRef", "useReducer"],
        correctAnswer: "useMemo",
      },
      {
        questionText: "Difference between useEffect and useLayoutEffect?",
        type: "text",
        correctAnswer:
          "useEffect runs after the DOM has been painted, while useLayoutEffect runs before the DOM is painted — making useLayoutEffect suitable for layout measurements and sync updates.",
      },
      {
        questionText: "Explain Context API.",
        type: "text",
        correctAnswer:
          "The Context API in React is a built-in feature that allows you to share data globally (like theme, user info, or language) across components without having to pass props manually at every level.",
      },
      {
        questionText: "What is React Suspense used for?",
        type: "text",
        correctAnswer:
          "React Suspense is used to handle lazy loading of components or data by showing a fallback UI (like a loader or placeholder) while the component is being loaded or fetched.",
      },
      {
        questionText: "How does useCallback work?",
        type: "text",
        correctAnswer:
          "useCallback is a React hook that returns a memoized version of a callback function, preventing it from being recreated on every render unless its dependencies change, which helps optimize performance in components.",
      },
      {
        questionText: "Which hook is used to control side-effects?",
        type: "mcq",
        options: ["useState", "useReducer", "useEffect", "useContext"],
        correctAnswer: "useEffect",
      },
      {
        questionText: "Explain useReducer with example.",
        type: "text",
        correctAnswer:
          "Imagine you're managing a counter with increment and decrement actions. You define a reducer function that updates the state based on the action type ('INCREMENT' or 'DECREMENT'). You then use useReducer to get the current count and a dispatch function. When you want to change the state, you call dispatch with the appropriate action.",
      },
      {
        questionText: "Can you use hooks in class components?",
        type: "mcq",
        options: ["Yes", "No"],
        correctAnswer: "No",
      },
      {
        questionText: "What is React.memo?",
        type: "text",
        correctAnswer:
          "React.memo is a higher-order component in React that memoizes a functional component, meaning it prevents unnecessary re-renders if the component’s props haven’t changed.",
      },
    ],
  },
  {
    title: "System Design Basics",
    category: "System Design",
    level: "hard",
    questions: [
      {
        questionText: "What is load balancing?",
        type: "text",
        correctAnswer:
          "Load balancing is the process of distributing incoming network traffic evenly across multiple servers to ensure no single server is overwhelmed, which improves performance, reliability, and availability of applications.",
      },
      {
        questionText: "Explain microservices architecture.",
        type: "text",
        correctAnswer:
          "Microservices architecture is a design approach where an application is built as a collection of small, independent services, each responsible for a specific functionality and communicating with others via APIs — enabling better scalability, flexibility, and easier maintenance.",
      },
      {
        questionText:
          "What is the difference between horizontal and vertical scaling?",
        type: "text",
        correctAnswer:
          "Horizontal scaling means adding more machines or nodes to handle increased load, while vertical scaling means increasing the resources (CPU, RAM, etc.) of a single machine to improve its capacity.",
      },
      {
        questionText: "Which of the following is a database scaling technique?",
        type: "mcq",
        options: ["Replication", "Sharding", "Both", "None"],
        correctAnswer: "Sharding",
      },
      {
        questionText: "What is CAP theorem?",
        type: "text",
        correctAnswer:
          "The CAP theorem (Consistency, Availability, Partition Tolerance) states that in a distributed system.",
      },
      {
        questionText: "How do you design a URL shortening service like bit.ly?",
        type: "text",
        correctAnswer:
          "To design a URL shortening service, we focus on creating a system that takes a long URL and returns a unique short URL, while ensuring scalability, performance, and reliability.",
      },
      {
        questionText: "What is CDN?",
        type: "mcq",
        options: [
          "Content Delivery Network",
          "Control Data Node",
          "Central DNS",
          "None",
        ],
        correctAnswer: "Content Delivery Network",
      },
      {
        questionText: "What is cache invalidation?",
        type: "text",
        correctAnswer:
          "Cache invalidation is the process of removing or updating outdated cached data to ensure that users receive the most recent and accurate information from the source.",
      },
      {
        questionText: "Design a scalable chat app.",
        type: "voice",
        correctAnswer:
          "A scalable chat app uses WebSocket for real-time messaging, stores messages in a fast database, handles many users by scaling servers horizontally behind a load balancer, and ensures message delivery and user presence with caching and queues.",
      },
      {
        questionText: "Explain database indexing.",
        type: "text",
        correctAnswer:
          "Database indexing is a technique that improves data retrieval speed by creating a data structure (like a tree) that allows the database to quickly locate rows without scanning the entire table.",
      },
    ],
  },
  {
    title: "JavaScript Essentials",
    category: "JavaScript",
    level: "easy",
    questions: [
      {
        questionText: "What is a closure in JavaScript?",
        type: "text",
        correctAnswer:
          "A closure is a function that retains access to its lexical scope even when executed outside its scope.",
      },
      {
        questionText: "Which of the following is a JavaScript data type?",
        type: "mcq",
        options: ["Boolean", "HTML", "CSS", "XML"],
        correctAnswer: "Boolean",
      },
      {
        questionText: "What does 'this' keyword refer to?",
        type: "voice",
        correctAnswer: "It refers to the object from which it was called.",
      },
      {
        questionText: "Difference between '==' and '==='?",
        type: "text",
        correctAnswer:
          "‘==’ compares value only, while ‘===’ compares both value and type.",
      },
      {
        questionText:
          "Which method is used to convert JSON to a JavaScript object?",
        type: "mcq",
        options: [
          "JSON.stringify()",
          "JSON.parse()",
          "parseJSON()",
          "objectify()",
        ],
        correctAnswer: "JSON.parse()",
      },
      {
        questionText: "What is the default value of `typeof null`?",
        type: "mcq",
        options: ["object", "null", "undefined", "string"],
        correctAnswer: "object",
      },
      {
        questionText: "Explain event bubbling.",
        type: "text",
        correctAnswer:
          "Event bubbling is when an event propagates from the innermost element to outer elements.",
      },
      {
        questionText: "What are Promises in JavaScript?",
        type: "voice",
        correctAnswer:
          "Promises are objects representing the eventual completion or failure of an asynchronous operation.",
      },
      {
        questionText: "What will `typeof NaN` return?",
        type: "mcq",
        options: ["number", "NaN", "undefined", "string"],
        correctAnswer: "number",
      },
      {
        questionText: "How can you stop event propagation?",
        type: "text",
        correctAnswer: "Using `event.stopPropagation()`.",
      },
    ],
  },
  {
    title: "React Fundamentals",
    category: "React",
    level: "medium",
    questions: [
      {
        questionText: "What is JSX?",
        type: "text",
        correctAnswer:
          "JSX is a syntax extension for JavaScript that looks similar to HTML and is used in React.",
      },
      {
        questionText:
          "Which hook is used to handle state in functional components?",
        type: "mcq",
        options: ["useRef", "useMemo", "useState", "useEffect"],
        correctAnswer: "useState",
      },
      {
        questionText: "Explain useEffect hook with dependencies.",
        type: "voice",
        correctAnswer:
          "useEffect with dependencies runs the effect only when the dependencies change.",
      },
      {
        questionText: "What are keys in React used for?",
        type: "text",
        correctAnswer:
          "Keys help React identify which items have changed, are added, or are removed.",
      },
      {
        questionText: "Which method is used to lift state up?",
        type: "mcq",
        options: ["props", "useState", "parent-to-child", "callback props"],
        correctAnswer: "callback props",
      },
      {
        questionText: "Why should state not be mutated directly?",
        type: "text",
        correctAnswer:
          "Because direct mutation doesn't trigger a re-render in React.",
      },
      {
        questionText: "What is a controlled component?",
        type: "text",
        correctAnswer:
          "A component where the form data is handled by the state of the component.",
      },
      {
        questionText: "Can you use hooks inside loops?",
        type: "mcq",
        options: ["Yes", "No", "Only useEffect", "Only in components"],
        correctAnswer: "No",
      },
      {
        questionText: "Explain prop drilling.",
        type: "voice",
        correctAnswer:
          "Prop drilling is the process of passing data through many nested components.",
      },
      {
        questionText: "What is React Fragment used for?",
        type: "mcq",
        options: [
          "Styling",
          "DOM manipulation",
          "To return multiple elements",
          "Error handling",
        ],
        correctAnswer: "To return multiple elements",
      },
    ],
  },
  {
    title: "Node.js & Express",
    category: "Node.js",
    level: "medium",
    questions: [
      {
        questionText: "What is middleware in Express.js?",
        type: "text",
        correctAnswer:
          "Middleware functions are functions that have access to the request and response objects.",
      },
      {
        questionText: "Which of these is a valid HTTP method?",
        type: "mcq",
        options: ["PUT", "PUSH", "FETCH", "UPDATE"],
        correctAnswer: "PUT",
      },
      {
        questionText: "What does `req.params` return?",
        type: "voice",
        correctAnswer: "It returns route parameters in the URL.",
      },
      {
        questionText: "What is the use of `app.use()`?",
        type: "text",
        correctAnswer:
          "It is used to mount middleware functions at the specified path.",
      },
      {
        questionText: "Which module is used to work with file system?",
        type: "mcq",
        options: ["os", "fs", "file", "stream"],
        correctAnswer: "fs",
      },
      {
        questionText: "What is the role of `next()` in middleware?",
        type: "text",
        correctAnswer: "It passes control to the next middleware in the stack.",
      },
      {
        questionText: "How do you connect MongoDB with Mongoose?",
        type: "voice",
        correctAnswer: "Using mongoose.connect('connection-string')",
      },
      {
        questionText: "What is the default port of Express?",
        type: "mcq",
        options: ["3000", "4000", "80", "5000"],
        correctAnswer: "3000",
      },
      {
        questionText:
          "What is the difference between synchronous and asynchronous?",
        type: "text",
        correctAnswer:
          "Synchronous blocks code execution; asynchronous allows non-blocking execution.",
      },
      {
        questionText: "Which HTTP status code represents 'Not Found'?",
        type: "mcq",
        options: ["200", "500", "404", "403"],
        correctAnswer: "404",
      },
    ],
  },
  {
    title: "HTML & CSS Basics",
    category: "Frontend",
    level: "easy",
    questions: [
      {
        questionText: "What does HTML stand for?",
        type: "mcq",
        options: [
          "Hyper Trainer Marking Language",
          "Hyper Text Markup Language",
          "HighText Machine Language",
          "None",
        ],
        correctAnswer: "Hyper Text Markup Language",
      },
      {
        questionText: "Explain semantic tags.",
        type: "text",
        correctAnswer:
          "Tags that convey the meaning of the content like <article>, <section>, <header> etc.",
      },
      {
        questionText: "What does the z-index property in CSS control?",
        type: "mcq",
        options: ["Color", "Text size", "Stack order", "Margin"],
        correctAnswer: "Stack order",
      },
      {
        questionText: "What is the box model in CSS?",
        type: "voice",
        correctAnswer:
          "It describes the rectangular boxes generated for elements: content, padding, border, and margin.",
      },
      {
        questionText: "Which tag is used to add a hyperlink?",
        type: "text",
        correctAnswer: "<a>",
      },
      {
        questionText: "Which CSS property is used for changing text color?",
        type: "mcq",
        options: ["font", "text-color", "color", "background-color"],
        correctAnswer: "color",
      },
      {
        questionText: "What is the default position value of an HTML element?",
        type: "text",
        correctAnswer: "static",
      },
      {
        questionText: "Which unit is relative to the parent font-size?",
        type: "mcq",
        options: ["em", "px", "%", "rem"],
        correctAnswer: "em",
      },
      {
        questionText: "Explain the difference between id and class in HTML.",
        type: "voice",
        correctAnswer:
          "id is unique; class can be reused on multiple elements.",
      },
      {
        questionText: "What is the use of the alt attribute in <img> tag?",
        type: "text",
        correctAnswer:
          "It provides alternative text if the image cannot be displayed.",
      },
    ],
  },
  {
    title: "JavaScript Fundamentals",
    category: "JavaScript",
    level: "easy",
    questions: [
      {
        questionText: "Which of the following is a JavaScript data type?",
        type: "mcq",
        options: ["Character", "String", "Float", "Double"],
        correctAnswer: "String",
      },
      {
        questionText: "What is the use of `typeof` operator?",
        type: "text",
        correctAnswer: "To determine the data type of a variable.",
      },
      {
        questionText: "Which symbol is used for single-line comments in JS?",
        type: "mcq",
        options: ["//", "/*", "#", "<!--"],
        correctAnswer: "//",
      },
      {
        questionText: "Explain the difference between var, let, and const.",
        type: "voice",
        correctAnswer:
          "var is function-scoped, let and const are block-scoped. const cannot be reassigned.",
      },
      {
        questionText: "How do you create an array in JS?",
        type: "text",
        correctAnswer: "Using square brackets like: const arr = [1, 2, 3];",
      },
      {
        questionText: "Which method adds an element to the end of an array?",
        type: "mcq",
        options: ["push()", "pop()", "shift()", "unshift()"],
        correctAnswer: "push()",
      },
      {
        questionText: "What will `console.log(2 + '2')` output?",
        type: "text",
        correctAnswer: "'22'",
      },
      {
        questionText: "What is a closure in JS?",
        type: "voice",
        correctAnswer:
          "A closure gives you access to an outer function’s scope from an inner function.",
      },
      {
        questionText: "What is the result of `null == undefined`?",
        type: "mcq",
        options: ["true", "false", "error", "undefined"],
        correctAnswer: "true",
      },
      {
        questionText: "Explain event bubbling in JavaScript.",
        type: "text",
        correctAnswer:
          "Event bubbling means the event starts from the target element and bubbles up to ancestors.",
      },
    ],
  },
  {
    title: "React Basics",
    category: "Frontend",
    level: "medium",
    questions: [
      {
        questionText: "What hook is used for state management?",
        type: "mcq",
        options: ["useEffect", "useContext", "useState", "useReducer"],
        correctAnswer: "useState",
      },
      {
        questionText: "Explain JSX in React.",
        type: "text",
        correctAnswer:
          "JSX is a syntax extension that lets you write HTML-like code in JavaScript.",
      },
      {
        questionText: "What is the purpose of `useEffect`?",
        type: "mcq",
        options: [
          "To manage CSS styles",
          "To perform side effects",
          "To declare state",
          "To create components",
        ],
        correctAnswer: "To perform side effects",
      },
      {
        questionText: "What is the virtual DOM?",
        type: "voice",
        correctAnswer:
          "It’s a lightweight copy of the actual DOM that React uses to optimize rendering.",
      },
      {
        questionText: "How do you pass data from parent to child in React?",
        type: "text",
        correctAnswer: "Using props.",
      },
      {
        questionText: "Which file is the entry point in most React apps?",
        type: "mcq",
        options: ["App.js", "index.js", "Main.js", "start.js"],
        correctAnswer: "index.js",
      },
      {
        questionText: "What does `key` prop do in lists?",
        type: "text",
        correctAnswer:
          "It helps React identify which items have changed, are added, or removed.",
      },
      {
        questionText: "Explain controlled vs uncontrolled components.",
        type: "voice",
        correctAnswer:
          "Controlled components rely on React state; uncontrolled components store their own state internally.",
      },
      {
        questionText: "What is React.Fragment used for?",
        type: "mcq",
        options: [
          "To style components",
          "To avoid extra nodes in DOM",
          "To fetch data",
          "To display modals",
        ],
        correctAnswer: "To avoid extra nodes in DOM",
      },
      {
        questionText: "How do you conditionally render in React?",
        type: "text",
        correctAnswer: "Using ternary operators or logical && inside JSX.",
      },
    ],
  },
  {
    title: "Node.js & Express",
    category: "Backend",
    level: "medium",
    questions: [
      {
        questionText: "What does Node.js use to handle concurrency?",
        type: "mcq",
        options: ["Threads", "Processes", "Event Loop", "Callbacks"],
        correctAnswer: "Event Loop",
      },
      {
        questionText: "Explain middleware in Express.",
        type: "text",
        correctAnswer:
          "Functions that have access to req, res, and next, used for handling requests.",
      },
      {
        questionText: "What command initializes a Node.js project?",
        type: "mcq",
        options: ["node init", "npm install", "npm init", "node start"],
        correctAnswer: "npm init",
      },
      {
        questionText: "What is the use of `res.send()` in Express?",
        type: "voice",
        correctAnswer: "It sends the response back to the client.",
      },
      {
        questionText: "How do you install Express in a project?",
        type: "text",
        correctAnswer: "By running `npm install express`.",
      },
      {
        questionText: "Which port does Express use by default?",
        type: "mcq",
        options: ["3000", "5000", "8080", "80"],
        correctAnswer: "3000",
      },
      {
        questionText: "What is the difference between `require` and `import`?",
        type: "text",
        correctAnswer: "`require` is CommonJS, `import` is ES6 module syntax.",
      },
      {
        questionText: "What is the use of `next()` in middleware?",
        type: "voice",
        correctAnswer:
          "It passes control to the next middleware function in the stack.",
      },
      {
        questionText: "How do you parse JSON in an Express route?",
        type: "mcq",
        options: [
          "express.body()",
          "express.json()",
          "bodyParser()",
          "app.use()",
        ],
        correctAnswer: "express.json()",
      },
      {
        questionText: "What is the use of `app.listen()`?",
        type: "text",
        correctAnswer: "To start the server and listen for incoming requests.",
      },
    ],
  },
  {
    title: "HR Basics",
    category: "HR",
    level: "easy",
    questions: [
      {
        questionText: "Tell me about yourself.",
        type: "voice",
        correctAnswer:
          "A brief summary of background, education, interests, and career goals.",
      },
      {
        questionText: "What are your strengths?",
        type: "text",
        correctAnswer:
          "Answers like adaptability, teamwork, communication, etc.",
      },
      {
        questionText: "What are your weaknesses?",
        type: "text",
        correctAnswer:
          "Answers should show awareness and improvement, like 'public speaking' or 'delegating'.",
      },
      {
        questionText: "Why should we hire you?",
        type: "voice",
        correctAnswer: "Focus on skills, achievements, and company fit.",
      },
      {
        questionText: "Are you willing to relocate?",
        type: "mcq",
        options: ["Yes", "No", "Depends on location", "Only for remote work"],
        correctAnswer: "Yes",
      },
      {
        questionText: "What motivates you at work?",
        type: "text",
        correctAnswer:
          "Things like learning, solving challenges, team success, growth.",
      },
      {
        questionText: "How do you handle stress or pressure?",
        type: "voice",
        correctAnswer:
          "By staying calm, prioritizing tasks, and maintaining focus.",
      },
      {
        questionText: "What do you know about our company?",
        type: "text",
        correctAnswer:
          "Research-based answer mentioning company goals, mission, or culture.",
      },
      {
        questionText: "What are your career goals?",
        type: "voice",
        correctAnswer:
          "Short-term and long-term growth plans aligned with role.",
      },
      {
        questionText: "Do you prefer working in a team or alone?",
        type: "mcq",
        options: ["Team", "Alone", "Both", "Depends on the task"],
        correctAnswer: "Both",
      },
    ],
  },
  {
    title: "Behavioral & Situational",
    category: "HR",
    level: "medium",
    questions: [
      {
        questionText: "Describe a time you handled a conflict at work.",
        type: "voice",
        correctAnswer:
          "Explain the situation, your action, and the positive outcome.",
      },
      {
        questionText: "What would you do if your teammate isn't contributing?",
        type: "text",
        correctAnswer:
          "Communicate, support them, escalate if needed, ensure project progress.",
      },
      {
        questionText:
          "How do you prioritize tasks when everything seems urgent?",
        type: "voice",
        correctAnswer:
          "Use time management, deadlines, and business impact to decide priorities.",
      },
      {
        questionText: "You missed a deadline. What will you do?",
        type: "text",
        correctAnswer:
          "Own the mistake, inform stakeholders, and take corrective action.",
      },
      {
        questionText: "Which of the following shows leadership?",
        type: "mcq",
        options: [
          "Blaming others",
          "Taking initiative",
          "Waiting for orders",
          "Avoiding responsibility",
        ],
        correctAnswer: "Taking initiative",
      },
      {
        questionText: "How do you deal with negative feedback?",
        type: "voice",
        correctAnswer: "Accept it professionally, analyze it, and improve.",
      },
      {
        questionText:
          "Your manager is unavailable, and a decision is urgent. What do you do?",
        type: "text",
        correctAnswer:
          "Use judgment, consider company policy, and act responsibly.",
      },
      {
        questionText: "What does 'cultural fit' mean to you?",
        type: "text",
        correctAnswer:
          "Being aligned with company values, work style, and team behavior.",
      },
      {
        questionText: "What is emotional intelligence?",
        type: "mcq",
        options: [
          "Ability to speak emotionally",
          "Managing personal and others' emotions",
          "Reading people's minds",
          "Being introverted",
        ],
        correctAnswer: "Managing personal and others' emotions",
      },
      {
        questionText:
          "How would you explain a technical concept to a non-technical person?",
        type: "voice",
        correctAnswer:
          "Break it into simple language, use analogies, and check understanding.",
      },
    ],
  },
  {
    title: "HR Personality & Ethics",
    category: "HR",
    level: "medium",
    questions: [
      {
        questionText: "What does integrity mean to you in a workplace?",
        type: "text",
        correctAnswer:
          "Being honest, ethical, and doing the right thing even when no one is watching.",
      },
      {
        questionText: "Would you lie to protect your team?",
        type: "mcq",
        options: ["Always", "Never", "Only if needed", "Depends on situation"],
        correctAnswer: "Depends on situation",
      },
      {
        questionText:
          "What would you do if you saw a co-worker violating a company policy?",
        type: "voice",
        correctAnswer: "Report it to the manager or HR based on severity.",
      },
      {
        questionText: "How do you build trust with your team?",
        type: "text",
        correctAnswer:
          "Being transparent, reliable, supportive, and a good listener.",
      },
      {
        questionText: "Choose the most ethical behavior at work:",
        type: "mcq",
        options: [
          "Taking credit for someone else's work",
          "Reporting a mistake",
          "Hiding a bug to meet deadline",
          "Working without break",
        ],
        correctAnswer: "Reporting a mistake",
      },
      {
        questionText: "What is more important: hard work or smart work?",
        type: "voice",
        correctAnswer: "A mix of both; smart work helps optimize hard work.",
      },
      {
        questionText: "Describe a moment when you failed.",
        type: "text",
        correctAnswer: "A real example with learning and growth.",
      },
      {
        questionText: "How do you define success?",
        type: "voice",
        correctAnswer:
          "Achieving goals while growing personally and contributing meaningfully.",
      },
      {
        questionText: "Would you break the rules to achieve results?",
        type: "mcq",
        options: ["Yes", "No", "Depends", "If manager says so"],
        correctAnswer: "Depends",
      },
      {
        questionText: "What is your approach to continuous learning?",
        type: "text",
        correctAnswer:
          "Always stay curious, take feedback, and keep upgrading skills.",
      },
    ],
  },
  {
    title: "MongoDB Basics",
    category: "Database",
    level: "medium",
    questions: [
      {
        questionText: "What type of database is MongoDB?",
        type: "mcq",
        options: ["Relational", "Document", "Graph", "Key-Value"],
        correctAnswer: "Document",
      },
      {
        questionText: "What is a collection in MongoDB?",
        type: "text",
        correctAnswer:
          "A collection is a group of MongoDB documents, similar to a table in RDBMS.",
      },
      {
        questionText: "Which command is used to view all databases?",
        type: "mcq",
        options: ["show collections", "show dbs", "list databases", "get dbs"],
        correctAnswer: "show dbs",
      },
      {
        questionText:
          "Explain the difference between `find()` and `findOne()` in MongoDB.",
        type: "voice",
        correctAnswer:
          "`find()` returns a cursor for multiple documents, `findOne()` returns the first matching document.",
      },
      {
        questionText: "What is the default `_id` field in a MongoDB document?",
        type: "text",
        correctAnswer:
          "A unique identifier automatically generated for each document.",
      },
      {
        questionText:
          "Which operator is used for filtering values greater than a number?",
        type: "mcq",
        options: ["$lt", "$lte", "$gt", "$eq"],
        correctAnswer: "$gt",
      },
      {
        questionText: "What is the use of `ObjectId` in MongoDB?",
        type: "voice",
        correctAnswer:
          "It uniquely identifies documents and contains timestamp info.",
      },
      {
        questionText: "How does MongoDB store data internally?",
        type: "text",
        correctAnswer: "In BSON format — Binary JSON.",
      },
      {
        questionText: "What does `db.collection.updateOne()` do?",
        type: "mcq",
        options: [
          "Updates all documents",
          "Deletes one document",
          "Updates the first matched document",
          "Replaces all documents",
        ],
        correctAnswer: "Updates the first matched document",
      },
      {
        questionText: "What are MongoDB indexes used for?",
        type: "voice",
        correctAnswer:
          "To improve query performance by allowing fast data retrieval.",
      },
    ],
  },
  {
    title: "MongoDB with Mongoose",
    category: "Database",
    level: "medium",
    questions: [
      {
        questionText: "What is Mongoose in Node.js?",
        type: "text",
        correctAnswer:
          "An ODM (Object Data Modeling) library for MongoDB and Node.js.",
      },
      {
        questionText: "Which of the following defines a schema in Mongoose?",
        type: "mcq",
        options: [
          "mongoose.model",
          "mongoose.Schema",
          "mongoose.connect",
          "mongoose.create",
        ],
        correctAnswer: "mongoose.Schema",
      },
      {
        questionText: "Explain the purpose of `populate()` in Mongoose.",
        type: "voice",
        correctAnswer:
          "It’s used to fetch related documents from other collections.",
      },
      {
        questionText: "How do you create a model from a schema in Mongoose?",
        type: "text",
        correctAnswer: "Using `mongoose.model('ModelName', schema);`",
      },
      {
        questionText: "What does the `required: true` field in a schema mean?",
        type: "mcq",
        options: [
          "The field is optional",
          "It’s a default value",
          "Validation to make the field mandatory",
          "Deletes the field",
        ],
        correctAnswer: "Validation to make the field mandatory",
      },
      {
        questionText: "How do you connect MongoDB with Mongoose?",
        type: "voice",
        correctAnswer:
          "Using `mongoose.connect('mongodb://localhost:27017/dbname')`",
      },
      {
        questionText:
          "What is the difference between `save()` and `insertMany()`?",
        type: "text",
        correctAnswer:
          "`save()` is for single document, `insertMany()` for bulk documents.",
      },
      {
        questionText: "Which middleware executes before saving a document?",
        type: "mcq",
        options: ["pre", "post", "before", "onSave"],
        correctAnswer: "pre",
      },
      {
        questionText: "How do you apply custom validation in a schema?",
        type: "voice",
        correctAnswer:
          "Using the `validate` property in schema fields with a validator function.",
      },
      {
        questionText: "What does `lean()` do in Mongoose queries?",
        type: "text",
        correctAnswer:
          "It returns plain JavaScript objects instead of Mongoose documents.",
      },
    ],
  },
  {
    title: "MongoDB Aggregation & Performance",
    category: "Database",
    level: "hard",
    questions: [
      {
        questionText: "What is an aggregation pipeline?",
        type: "voice",
        correctAnswer:
          "A framework for transforming documents in stages like $match, $group, $project, etc.",
      },
      {
        questionText: "Which stage filters documents in aggregation?",
        type: "mcq",
        options: ["$project", "$filter", "$match", "$sort"],
        correctAnswer: "$match",
      },
      {
        questionText: "What is the purpose of `$project`?",
        type: "text",
        correctAnswer:
          "To include, exclude, or reshape fields in the output documents.",
      },
      {
        questionText: "Which stage is used to calculate average or total?",
        type: "mcq",
        options: ["$sum", "$avg", "$group", "$count"],
        correctAnswer: "$group",
      },
      {
        questionText: "Explain the `$lookup` operator.",
        type: "voice",
        correctAnswer:
          "Used to perform a left outer join to another collection in the same database.",
      },
      {
        questionText: "How does indexing improve MongoDB performance?",
        type: "text",
        correctAnswer:
          "Indexes speed up queries by allowing efficient data access without scanning all documents.",
      },
      {
        questionText: "Which type of index supports text search?",
        type: "mcq",
        options: ["Hashed Index", "Geo Index", "Compound Index", "Text Index"],
        correctAnswer: "Text Index",
      },
      {
        questionText: "What is a compound index?",
        type: "text",
        correctAnswer: "An index on multiple fields in a document.",
      },
      {
        questionText: "What does explain() do in MongoDB?",
        type: "voice",
        correctAnswer:
          "It provides performance insights on how MongoDB will execute a query.",
      },
      {
        questionText: "Which aggregation stage limits the number of results?",
        type: "mcq",
        options: ["$limit", "$sort", "$skip", "$project"],
        correctAnswer: "$limit",
      },
    ],
  },
  {
    title: "Leadership & Conflict Management",
    category: "HR",
    level: "hard",
    questions: [
      {
        questionText: "Describe a time you had to lead a team under pressure.",
        type: "voice",
        correctAnswer:
          "Explain the situation, leadership approach, how you motivated the team, and the result.",
      },
      {
        questionText: "What leadership style do you follow and why?",
        type: "text",
        correctAnswer:
          "Answers like transformational, democratic, or situational leadership, based on context.",
      },
      {
        questionText:
          "What would you do if a team member consistently underperforms?",
        type: "voice",
        correctAnswer:
          "Discuss performance, provide support and feedback, create an improvement plan, escalate if needed.",
      },
      {
        questionText:
          "Which of the following is best for resolving team conflict?",
        type: "mcq",
        options: [
          "Avoiding confrontation",
          "Blaming the weaker party",
          "Open communication",
          "Escalating immediately",
        ],
        correctAnswer: "Open communication",
      },
      {
        questionText:
          "Have you ever made an unpopular decision as a leader? What happened?",
        type: "text",
        correctAnswer:
          "Describe the decision, why it was necessary, and how you handled team reactions.",
      },
      {
        questionText:
          "What is the most challenging part of managing a diverse team?",
        type: "voice",
        correctAnswer:
          "Handling different perspectives, communication styles, and building inclusive culture.",
      },
      {
        questionText: "Which quality is most important in a leader?",
        type: "mcq",
        options: ["Empathy", "Dominance", "Aggressiveness", "Passiveness"],
        correctAnswer: "Empathy",
      },
      {
        questionText: "How do you handle failure in leadership?",
        type: "text",
        correctAnswer:
          "Take ownership, learn from it, support the team, and rebuild confidence.",
      },
      {
        questionText:
          "What would you do if two senior teammates have a serious disagreement?",
        type: "voice",
        correctAnswer:
          "Mediate neutrally, understand both sides, find a solution aligned with goals.",
      },
      {
        questionText:
          "Choose the best leadership response to a missed deadline.",
        type: "mcq",
        options: [
          "Blame the team",
          "Analyze the cause and plan recovery",
          "Ignore it",
          "Punish the person responsible",
        ],
        correctAnswer: "Analyze the cause and plan recovery",
      },
    ],
  },
  {
    title: "Ethics & Decision Making",
    category: "HR",
    level: "hard",
    questions: [
      {
        questionText:
          "You discover a teammate has faked their work logs. What will you do?",
        type: "voice",
        correctAnswer:
          "Gather facts, report to HR or manager, avoid personal judgment.",
      },
      {
        questionText: "What does professional integrity mean to you?",
        type: "text",
        correctAnswer:
          "Maintaining honesty, accountability, and ethical standards in all actions.",
      },
      {
        questionText:
          "Which of the following is considered unethical workplace behavior?",
        type: "mcq",
        options: [
          "Open communication",
          "Giving credit to teammates",
          "Discrimination",
          "Helping others",
        ],
        correctAnswer: "Discrimination",
      },
      {
        questionText:
          "Describe a difficult decision you had to make in your career.",
        type: "voice",
        correctAnswer:
          "Explain context, available options, reasoning, decision made, and outcome.",
      },
      {
        questionText:
          "What would you do if your manager asked you to do something unethical?",
        type: "text",
        correctAnswer:
          "Refuse respectfully, explain why it’s wrong, and consider reporting it.",
      },
      {
        questionText:
          "How do you balance company loyalty with personal values?",
        type: "voice",
        correctAnswer:
          "By staying aligned with ethics, discussing concerns openly, and prioritizing integrity.",
      },
      {
        questionText:
          "Which of these is the most ethical way to resolve a team issue?",
        type: "mcq",
        options: [
          "Keep it secret",
          "Publicly call out the team",
          "Privately discuss and resolve it",
          "Report it to outsiders",
        ],
        correctAnswer: "Privately discuss and resolve it",
      },
      {
        questionText: "Describe how you handle confidential information.",
        type: "text",
        correctAnswer:
          "By restricting access, not discussing outside context, and following data protection norms.",
      },
      {
        questionText:
          "What would you do if you saw a colleague being harassed?",
        type: "voice",
        correctAnswer:
          "Support the victim, document the incident, report to HR or management.",
      },
      {
        questionText: "Ethical decision making involves:",
        type: "mcq",
        options: [
          "Favoring friends",
          "Avoiding tough calls",
          "Doing what’s right even if hard",
          "Following orders blindly",
        ],
        correctAnswer: "Doing what’s right even if hard",
      },
    ],
  },
];

const seeder = async () => {
try {
  for (const test of testSets) {
    const insertedQuestions = await Question.insertMany(test.questions);

    const testDoc = new Test({
      title: test.title,
      level: test.level,
      category: test.category,
      questions: insertedQuestions.map((q) => q._id),
    });

    await testDoc.save();

    console.log(`✅ Saved test: ${test.title}`);
  }
} catch (error) {
  console.error("❌ Seeding failed:", error);
} 
}

export default seeder;