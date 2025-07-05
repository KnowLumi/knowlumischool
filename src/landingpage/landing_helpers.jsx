import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import hero4 from "../assets/hero4.png";

import sub1 from "../assets/hero_img_1.jpg";
import sub2 from "../assets/hero_img_2.jpg";
import sub3 from "../assets/hero_img_3.jpg";
import sub4 from "../assets/hero_img_4.jpg";

import icon1 from "./company_icons/swiggy.png";
import icon2 from "./company_icons/google.png";
import icon3 from "./company_icons/amazon.png";
import icon4 from "./company_icons/microsoft.png";
import icon5 from "./company_icons/reliance.png";
import icon6 from "./company_icons/accenture.png";
import icon7 from "./company_icons/razorpay.png";;



import logo1 from "../assets/hat.png";
import logo2 from "../../public/logo.png";

import dreamjcareerImage from "../assets/unemployed.png";
import careerdownImage from "../assets/dreamjob.png";



import careerdown from "../assets/dream-career.mp4";
import dreamjcareer from "../assets/career-down.mp4";

const pages = [
  { name: "Home", route: "/" },
  // { name: "About", route: "/about" },
  // { name: "Join Community", route: "/community" },
];

const faq = [
  {
    title: "1. What is KnowLumi School?",
    desc: "KnowLumi School is a parallel education system for engineering students. While your college focuses on academics, KnowLumi School complements it by shaping your career through mentorship, advanced resources, and practical guidance.",
  },
  {
    title: "2. Why do I need KnowLumi School if I’m already in college?",
    desc: "Your college education provides academic knowledge, but it might not fully prepare you for the career you’re dreaming of. KnowLumi School bridges this gap by offering personalised guidance, real-world skills, and resources to help you excel.",
  },
  {
    title: "3. Who are the mentors at KnowLumi School?",
    desc: "Our mentors are experienced professionals and industry experts who provide personalized guidance tailored to your career aspirations.",
  },
  {
    title: "4. What makes KnowLumi School different from traditional education?",
    desc: "Traditional education focuses on academics. KnowLumi School focuses on helping you build a career by adding real-world skills, advanced learning resources, and expert mentorship to your journey.",
  },
  {
    title: "5. Is KnowLumi School suitable for all engineering students?",
    desc: "Yes, whether you’re aiming for a job, further studies, or starting something of your own, KnowLumi School is designed to guide engineering students from all backgrounds.",
  },
  {
    title: "6. Who is KnowLumi School for?",
    desc: "KnowLumi School is for engineering students who want to enhance their college education and build successful careers. Whether you're unsure of your path or need guidance, KnowLumi School is here for you.",
  },
  {
    title:
      "7. How does the parallel education system work?",
    desc: "Our system runs alongside your college journey, helping you bridge the gap between academic knowledge and real-world career preparation. We provide mentorship, skills training, and goal-setting tools to guide you.",
  },
  {
    title: "8. Do I need KnowLumi School if I’m already doing well in college?",
    desc: "Even if you're excelling academically, KnowLumi  Schoolprovides the practical skills, industry insights, and career-focused mentorship that college alone may not offer.",
  },
  {
    title: "9. Does KnowLumi School replace my college education?",
    desc: "No, KnowLumi School complements your college education. While your college focuses on academics, we focus on shaping your career.",
  },
  {
    title: "10. Is KnowLumi School affordable?",
    desc: "Yes, KnowLumi School is designed to be cost-effective while delivering high-quality mentorship and resources.",
  },
  {
    title: "11. Can I join KnowLumi School at any stage of my engineering degree?",
    desc: "Yes, KnowLumi School is open to students at any stage of their engineering journey, whether you’re in your first year or final year.",
  },
];

const heroImages = [
  {
    main: hero1,
    sub: sub1,
    title: "Mentorship magic",
    desc: "Navigate challenges with experienced mentors cheering you on.",
  },
  {
    main: hero2,
    sub: sub2,
    title: "Community Momentum",
    desc: "Collaborate, share insights, and celebrate victories with like-minded go-getters.",
  },
  {
    main: hero3,
    sub: sub3,
    title: "Boundary-Free Learning",
    desc: "Say goodbye to campus constraints; Knowlumi is where learning knows no bounds.",
  },
  {
    main: hero4,
    sub: sub4,
    title: "Resource Oasis",
    desc: "Dive into a pool of high-quality resources to propel your journey.",
  },
];

const program = [
  {
    icon: logo1,
    bg: "#F0F1EC",
    title: "Traditional Engineering Degree",
    desc: ``,
    points: [
      "Focuses on academics.",
      "Lacks career guidance and mentorship",
      "Minimal industry exposure",
    ],
    color: "#DC552A",
    video: dreamjcareer,
    image: dreamjcareerImage,
    text: "LIMITED CARRER TRAJECTORY",
  },
  {
    icon: logo2,
    bg: "#E8FFCD",
    title: "Engineering Degree with KnowLumi Parallel Education",
    desc: ``,
    points: [
      "Combines academics with career support.",
      "Offers mentorship, goal setting, and real-world skills.",
      "Hands-On, Real-World Learning",
    ],
    color: "#2FC34F",
    video: careerdown,
    image: careerdownImage,
    text: "ACCELERATED CARRER TRAJECTORY",
  },
];

//const companies = [companylogo1,companylogo2,companylogo3];
 const companies = [icon1, icon2, icon3, icon4, icon5, icon6, icon7];

const reviews = [
  {
    name: "John Samuel",
    role: "UX/UI Design",
    review:
      "KnowLumi transformed my college experience! The personalized learning approach helped me grasp tech concepts effortlessly. Building real projects gave me hands-on skills crucial for my career. Now, I feel confident and ready for whatever comes my way.",
  },
  {
    name: "John Rodriguez",
    role: "Cybersecurity",
    review:
      "KnowLumi's mentorship program exceeded my expectations. The guidance I received was invaluable in navigating my career path. The platform's focus on real-world projects enhanced my practical skills immensely. I highly recommend KnowLumi to any college student looking to kickstart their career.",
  },
  {
    name: "Jessica Nguyen",
    role: "Student",
    review:
      "Enrolling in KnowLumi during my first year was a game-changer. The personalized tasks tailored to my learning style helped me grasp complex concepts with ease. The mentorship I received guided me towards my career goals. KnowLumi truly set me up for success in college and beyond.",
  },
  {
    name: "John Samuel",
    role: "UX/UI Design",
    review:
      "KnowLumi transformed my college experience! The personalized learning approach helped me grasp tech concepts effortlessly. Building real projects gave me hands-on skills crucial for my career. Now, I feel confident and ready for whatever comes my way.",
  },
  {
    name: "Rachel Wong",
    role: "Full stack development",
    review:
      "KnowLumi's approach to learning is unmatched. The platform's combination of AI-driven tasks and real-world projects provided a holistic learning experience. The community support fostered a collaborative environment where I thrived. I feel confident and prepared for my future endeavors.",
  },
];

const WhyKnowlumi = [
  {
    badge: "Your Ideal Experience",
    title: "KNOWLUMI",
    points: [
      "Leverages advanced AI to identify your unique passions and interests, guiding you to the most suitable career path.",
      "Provides tailored goal-setting tools that align with your passions and career aspirations, ensuring a clear path to success.",
      "Connects you with seasoned industry mentors who offer personalized guidance and support throughout your journey.",
      "Offers high-quality learning experiences at a cost-effective price, making it accessible without compromising on value.",
      "Our programs are acknowledged and recognized by leading industry organizations, enhancing your credibility and job prospects",
      "Fosters a supportive community where individual success fuels collective growth, offering networking and collaboration opportunities.",
    ],
  },
  {
    badge: "The Current Reality",
    title: "OTHER PLATFORMS",
    points: [
      " Do not offer any tools for passion discovery, leaving students to navigate their interests on their own.",
      " Lack personalized goal-setting support, often offering only generic advice without customization.",
      "May provide general mentorship options but often lack the depth of expertise and personalized attention",
      " Often charge premium prices without delivering equivalent value in terms of personalized guidance and mentorship.",
      "May not have the same level of recognition or endorsement from industry leaders.",
      "Typically lack a strong, integrated community aspect, offering limited peer support and networking opportunities.",
    ],
  },
];

const processSvg =
  "M2 7.5C1.17157 7.5 0.5 8.17157 0.5 9C0.5 9.82843 1.17157 10.5 2 10.5L2 7.5ZM135 10.5L150 17.6603L150 0.339758L135 7.50001L135 10.5ZM7.28571 10.5C8.11414 10.5 8.78571 9.82843 8.78571 9C8.78571 8.17157 8.11414 7.5 7.28571 7.5L7.28571 10.5ZM17.8571 7.5C17.0287 7.5 16.3571 8.17157 16.3571 9C16.3571 9.82843 17.0287 10.5 17.8571 10.5L17.8571 7.5ZM28.4286 10.5C29.257 10.5 29.9286 9.82843 29.9286 9C29.9286 8.17158 29.257 7.5 28.4286 7.5L28.4286 10.5ZM39 7.5C38.1716 7.5 37.5 8.17158 37.5 9C37.5 9.82843 38.1716 10.5 39 10.5L39 7.5ZM49.5714 10.5C50.3999 10.5 51.0714 9.82843 51.0714 9C51.0714 8.17158 50.3999 7.5 49.5714 7.5L49.5714 10.5ZM60.1429 7.50001C59.3144 7.50001 58.6429 8.17158 58.6429 9C58.6429 9.82843 59.3144 10.5 60.1429 10.5L60.1429 7.50001ZM70.7143 10.5C71.5427 10.5 72.2143 9.82843 72.2143 9.00001C72.2143 8.17158 71.5427 7.50001 70.7143 7.50001L70.7143 10.5ZM81.2857 7.50001C80.4573 7.50001 79.7857 8.17158 79.7857 9.00001C79.7857 9.82843 80.4573 10.5 81.2857 10.5L81.2857 7.50001ZM91.8571 10.5C92.6856 10.5 93.3571 9.82844 93.3571 9.00001C93.3571 8.17158 92.6856 7.50001 91.8571 7.50001L91.8571 10.5ZM102.429 7.50001C101.6 7.50001 100.929 8.17158 100.929 9.00001C100.929 9.82844 101.6 10.5 102.429 10.5L102.429 7.50001ZM113 10.5C113.828 10.5 114.5 9.82844 114.5 9.00001C114.5 8.17158 113.828 7.50001 113 7.50001L113 10.5ZM123.571 7.50001C122.743 7.50001 122.071 8.17158 122.071 9.00001C122.071 9.82844 122.743 10.5 123.571 10.5L123.571 7.50001ZM134.143 10.5C134.971 10.5 135.643 9.82844 135.643 9.00001C135.643 8.17158 134.971 7.50001 134.143 7.50001L134.143 10.5ZM144.714 7.50001C143.886 7.50001 143.214 8.17159 143.214 9.00001C143.214 9.82844 143.886 10.5 144.714 10.5L144.714 7.50001ZM2 10.5L7.28571 10.5L7.28571 7.5L2 7.5L2 10.5ZM17.8571 10.5L28.4286 10.5L28.4286 7.5L17.8571 7.5L17.8571 10.5ZM39 10.5L49.5714 10.5L49.5714 7.5L39 7.5L39 10.5ZM60.1429 10.5L70.7143 10.5L70.7143 7.50001L60.1429 7.50001L60.1429 10.5ZM81.2857 10.5L91.8571 10.5L91.8571 7.50001L81.2857 7.50001L81.2857 10.5ZM102.429 10.5L113 10.5L113 7.50001L102.429 7.50001L102.429 10.5ZM123.571 10.5L134.143 10.5L134.143 7.50001L123.571 7.50001L123.571 10.5Z";

const footerLinks =
  "Home,Programs,Courses,How Knowlumi works,Privacy Policy,Contact Us".split(
    ","
  );

export {
  pages,
  faq,
  heroImages,
  companies,
  footerLinks,
  reviews,
  program,
  WhyKnowlumi,
  processSvg,
};
