import { week } from "../helpers/learninghelpers";
import courseOne from "/Images/courseOne.png";
import courseTwo from "/ProgressImages/course2.png";
import courseThree from "/ProgressImages/course3.png";

const IndividualCourseData = [
  {
    id: 4613,
    banner: courseOne,
    title: "Learn Mern Stack Development",
    desc: "Master MERN: MongoDB, Express.js, React, and Node.js—one of the most in-demand full-stack technologies for building modern, scalable web applications.",
    skills: [
      {
        image: "/SkillsLogos/mongodb.png",
        skill: "MongoDB management",
      },
      { 
        image: "/SkillsLogos/express.png",
        skill: "Express.js development",
      },
      {
        image: "/SkillsLogos/react.png",
        skill: "React.js Development",
      },
      {
        image: "/SkillsLogos/node.png",
        skill: "Node.js runtime environment",
      },
    ],
    roadmap: [
      {
        week: "Week 1",
        topics: [
          "What is HTML?",
          "What are the basic HTML tags?",
          "How do you add an image in HTML?",
          "How do you create links in HTML?",
          "What is a semantic tag?",
        ],
      },
      {
        week: "Week 2",
        topics: [
          "What is CSS?",
          "How do you link CSS to HTML?",
          "What is the box model in CSS?",
          "What are CSS selectors?",
          "How do you center an element in CSS?",
        ],
      },
      {
        week: "Week 3",
        topics: [
          "What is Git?",
          "How do you initialize a Git repo?",
          "How do you make a commit in Git?",
          "What is the difference between Git and GitHub?",
          "How do you create branches in Git?",
        ],
      },
      {
        week: "Week 4",
        topics: [
          "What is the purpose of forms in HTML?",
          "How do you create a form in HTML?",
          "What are input types?",
          "How do you validate forms in HTML?",
          "How do you handle form data?",
        ],
      },
      {
        week: "Week 5",
        topics: [
          "What is Flexbox?",
          "How do you create a Flexbox container?",
          "What is the difference between Flexbox and Grid?",
          "How do you align items with Flexbox?",
          "What are grid lines in CSS Grid?",
        ],
      },
      {
        week: "Week 6",
        topics: [
          "What are variables in JavaScript?",
          "What is a function?",
          "How do you create a loop in JS?",
          "What are conditionals in JavaScript?",
          "What is the difference between let, var, and const?",
        ],
      },
      {
        week: "Week 7",
        topics: [
          "What is the DOM?",
          "How do you select an element in JavaScript?",
          "How do you change an element’s content?",
          "How do you add and remove classes?",
          "What is event handling in JavaScript?",
        ],
      },
      {
        week: "Week 8",
        topics: [
          "What is an arrow function?",
          "How do you use promises in JavaScript?",
          "What is async/await?",
          "What is destructuring in JS?",
          "How do you handle errors in promises?",
        ],
      },
      {
        week: "Week 9",
        topics: [
          "What is Node.js?",
          "How do you set up a basic Node.js server?",
          "What are modules in Node.js?",
          "How do you handle HTTP requests in Node.js?",
          "What is the purpose of the 'http' module in Node.js?",
        ],
      },
      {
        week: "Week 10",
        topics: [
          "What is Express.js?",
          "How do you set up a basic Express server?",
          "What is a route in Express?",
          "How do you create middleware in Express?",
          "What is app.use() in Express?",
        ],
      },
      {
        week: "Week 11",
        topics: [
          "What is MongoDB?",
          "What is the difference between SQL and NoSQL?",
          "How do you insert data into MongoDB?",
          "How do you query data in MongoDB?",
          "What is a MongoDB document?",
        ],
      },
      {
        week: "Week 12",
        topics: [
          "What is Mongoose?",
          "How do you define a Mongoose schema?",
          "How do you create a Mongoose model?",
          "What is a virtual field in Mongoose?",
          "How do you set up validation in Mongoose?",
        ],
      },
      {
        week: "Week 13",
        topics: [
          "How do you connect React with Express?",
          "What is CORS in MERN?",
          "How do you handle API calls in React?",
          "What is JWT and how is it used in MERN?",
          "How do you deploy a MERN stack app to Heroku?",
        ],
      },
    ],
    completed: 30,
    isLocked: false,
  },
  {
    id: 4632,
    banner: courseTwo,
    title: "Learn Kotlin Android Development",
    desc: "Develop robust and modern Android applications with Kotlin—a concise, expressive, and officially recommended programming language for Android development.",
    skills: [
      {
        image: "/SkillsLogos/kotlin.png",
        skill: "Kotlin programming ",
      },
      {
        image: "/SkillsLogos/android.png",
        skill: "Android development",
      },
      {
        image: "/SkillsLogos/jetpack.webp",
        skill: "Jetpack Compose",
      },
      {
        image: "/SkillsLogos/android-studio.png",
        skill: "Android Studio IDE",
      },
    ],
    roadmap: [
      {
        week: "Week 1",
        topics: [
          "Overview",
          "Environment Setup",
          "Hello World Program",
          "Data Types",
          "Variables",
          "Operators",
          "Input/Output",
          "Basic",
        ],
      },
      {
        week: "Week 2",
        topics: [
          "if-else",
          "loops (for, while, do-while)",
          "when expressions",
          "labeled/unlabeled break and continue",
        ],
      },
      {
        week: "Week 3",
        topics: [
          "Arrays",
          "Strings",
          "Functions (default/named arguments, recursion, higher-order functions, lambdas, inline)",
        ],
      },
      {
        week: "Week 4",
        topics: [
          "Classes",
          "Objects",
          "Inheritance",
          "Abstract Classes",
          "Interfaces",
          "Nested/Inner Classes",
          "Data Classes",
          "Sealed Classes",
        ],
      },
      {
        week: "Week 5",
        topics: [
          "Generics",
          "Extension Functions",
          "Enums",
          "Operator Overloading",
          "Null Safety",
          "Type Checking",
          "Smart Casting",
        ],
      },
      {
        week: "Week 6",
        topics: [
          "try-catch",
          "throw",
          "finally",
          "Nested Try Blocks",
          "Regular Expressions",
          "Error Handling",
        ],
      },
      {
        week: "Week 7",
        topics: [
          "Introduction to Android Studio",
          "Creating Projects",
          "Activity Lifecycle",
          "UI Elements",
          "View Binding",
          "Listeners",
        ],
      },
      {
        week: "Week 8",
        topics: [
          "MVVM",
          "LiveData",
          "ViewModel",
          "Coroutines",
          "Dependency Injection (Hilt/Dagger)",
        ],
      },
      {
        week: "Week 9",
        topics: [
          "Using Kotlin with Java",
          "Writing Unit Tests",
          "Mocking",
          "UI Tests",
        ],
      },
      {
        week: "Week 10",
        topics: [
          "Building a Full-Fledged App",
          "Optimization",
          "Performance",
          "Reflection",
          "Annotations",
          "Final Review",
        ],
      },
    ],
    completed: 0,
    isLocked: true,
  },
  {
    id: 4654,
    banner: courseThree,
    title: "Learn Flutter Development",
    desc: "Build beautiful, fast, and cross-platform mobile applications using Flutter—Google's open-source framework for crafting natively compiled apps for iOS and Android with a single codebase.",
    skills: [
      {
        image: "/SkillsLogos/flutter.png",
        skill: "Flutter development",
      },
      {
        image: "/SkillsLogos/dart.png",
        skill: "Dart programming language",
      },
      {
        image: "/SkillsLogos/android.png",
        skill: "Android development",
      },
      {
        image: "/SkillsLogos/ios.png",
        skill: "IOS development",
      },
    ],
    roadmap: [
      {
        week: "Week 1",
        topics: ["What is Dart?", "Why use Dart for Flutter?"],
      },
      {
        week: "Week 2",
        topics: ["What are Dart’s data types?", "How to define variables?"],
      },
      {
        week: "Week 3",
        topics: ["What is a loop?", "Difference between for and while?"],
      },
      {
        week: "Week 4",
        topics: ["What are parameters?", "What is recursion?"],
      },
      {
        week: "Week 5",
        topics: ["What is a class?", "How is inheritance implemented?"],
      },
      {
        week: "Week 6",
        topics: ["Difference between List and Set?"],
      },
      {
        week: "Week 7",
        topics: ["How does Dart handle errors?"],
      },
    ],

    completed: 0,
    isLocked: true,
  },
  {
    id: 46159,
    banner: courseOne,
    title: "UI/UX Designing",
    desc: "Learn Essential designing skills!",
    skills: [
      {
        image: "/SkillsLogos/html.png",
        skill: "",
      },
      {
        image: "/SkillsLogos/css.png",
        skill: "",
      },
      {
        image: "/SkillsLogos/python.png",
        skill: "",
      },
      {
        image: "/SkillsLogos/github.png",
        skill: "",
      },
    ],
    completed: 30,
    isLocked: false,
  },
  {
    id: 2643,
    banner: "/ProgressImages/course2.png",
    title: "Data Science",
    desc: "Learn the Fundamentals of Data Science",
    skills: [
      {
        image: "/SkillsLogos/react.png",
        skill: "",
      },
      {
        image: "/SkillsLogos/figma.png",
        skill: "",
      },
      {
        image: "/SkillsLogos/python.png",
        skill: "",
      },
      {
        image: "/SkillsLogos/spark.png",
        skill: "",
      },
    ],
    completed: 0,
    isLocked: true,
  },
  {
    id: 36873,
    banner: "/ProgressImages/course3.png",
    title: "Data analytics",
    desc: "Dive into Data Analytics!",
    skills: [
      {
        image: "/SkillsLogos/apache-spark.png",
        skill: "",
      },
      {
        image: "/SkillsLogos/logos_hadoop.png",
        skill: "",
      },
      {
        image: "/SkillsLogos/logos_jupyter.png",
        skill: "",
      },
    ],
    completed: 0,
    isLocked: true,
  },
  {
    id: 5452,
    banner: "/ProgressImages/course3.png",
    title: "Full-Stack Web Development with MERN Stack",
    desc: "Dive into Data Analytics!",
    skills: [
      {
        image: "/SkillsLogos/html.png",
        skill: "",
      },
      {
        image: "/SkillsLogos/css.png",
        skill: "",
      },
      {
        image: "/SkillsLogos/python.png",
        skill: "",
      },
      {
        image: "/SkillsLogos/github.png",
        skill: "",
      },
    ],
    completed: 0,
    isLocked: true,
  },
  {
    id: 544522,
    banner: "/ProgressImages/course3.png",
    title: "Full-Stack Web Development with LAMP Stack",
    desc: "Dive into Data Analytics!",
    skills: [
      {
        image: "/SkillsLogos/html.png",
        skill: "",
      },
      {
        image: "/SkillsLogos/css.png",
        skill: "",
      },
      {
        image: "/SkillsLogos/python.png",
        skill: "",
      },
      {
        image: "/SkillsLogos/github.png",
        skill: "",
      },
    ],
    completed: 0,
    isLocked: true,
  },
  {
    id: 54752,
    banner: "/ProgressImages/course3.png",
    title: "Full-Stack Web Development with MEAN Stack",
    desc: "Dive into Data Analytics!",
    skills: [
      {
        image: "/SkillsLogos/html.png",
        skill: "",
      },
      {
        image: "/SkillsLogos/css.png",
        skill: "",
      },
      {
        image: "/SkillsLogos/python.png",
        skill: "",
      },
      {
        image: "/SkillsLogos/github.png",
        skill: "",
      },
    ],
    completed: 0,
    isLocked: true,
  },
  {
    id: 545112,
    banner: "/ProgressImages/course3.png",
    title: "Full-Stack Web Development with Java",
    desc: "Dive into Data Analytics!",
    skills: [
      {
        image: "/SkillsLogos/html.png",
        skill: "",
      },
      {
        image: "/SkillsLogos/css.png",
        skill: "",
      },
      {
        image: "/SkillsLogos/python.png",
        skill: "",
      },
      {
        image: "/SkillsLogos/github.png",
        skill: "",
      },
    ],
    completed: 0,
    isLocked: true,
  },
];

export default IndividualCourseData;
