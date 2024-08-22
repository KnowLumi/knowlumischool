import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import hero4 from "../assets/hero4.png";

import sub1 from "../assets/hero_img_1.jpg"
import sub2 from "../assets/hero_img_2.jpg"
import sub3 from "../assets/hero_img_3.jpg"
import sub4 from "../assets/hero_img_4.jpg"

import icon1 from './company_icons/apple.png'
import icon2 from './company_icons/google.png'
import icon3 from './company_icons/icbc.png'
import icon4 from './company_icons/microsoft.png'
import icon5 from './company_icons/samsung.png'
import icon6 from './company_icons/tesla.png'
import icon7 from './company_icons/verizonlogo.png'

import logo1 from "../assets/hat.png"
import logo2 from "../../public/logo.png"

import unemployed from "../assets/unemployed.png";
import dreamjob from "../assets/dreamjob.png";

const pages = [
    { name: "Home", route: '/' },
    { name: "About", route: '/about' },
    { name: "Join Community", route: '/community' },
]

const faq = [{ title: "What is KnowLumi?", desc: "Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per" },
{ title: "Korem ipsum dolor sit amet?", desc: "Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per" },
{ title: "Korem ipsum dolor sit amet?", desc: "Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per" },
{ title: "Korem ipsum dolor sit amet?", desc: "Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per" },
]

const heroImages = [
    { main: hero1, sub: sub1, title: "Mentorship magic", desc: "Navigate challenges with experienced mentors cheering you on." },
    { main: hero2, sub: sub2, title: "Community Momentum", desc: "Collaborate, share insights, and celebrate victories with like-minded go-getters." },
    { main: hero3, sub: sub3, title: "Boundary-Free Learning", desc: "Say goodbye to campus constraints; Knowlumi is where learning knows no bounds." },
    { main: hero4, sub: sub4, title: "Resource Oasis", desc: "Dive into a pool of high-quality resources to propel your journey." },

];

const program = [
    {
        icon: logo1,
        bg: "#F0F1EC",
        title: "Traditional Engineering Degree",
        desc: ``,
        points: [
            "Difficulty Identifying Passion",
            "Confusion in Setting Goals","Minimal industry exposure", "Traditional learning with a focus on theory","Static, One-Size-Fits-All Curriculum"],
        color: "#DC552A",
        image: unemployed,
        text: "LIMITED CARRER TRAJECTORY"
    },
    {
        icon: logo2,
        bg: "#E8FFCD",
        title: "Engineering Degree with KnowLumi Parallel Education",
        desc: ``,
        points: ["AI-Powered Passion Discovery",
            "Personalized Goal Setting",
            "Expert Mentorship",
            "Hands-On, Real-World Learning",
            "Customized Learning Pathways"
            ],
        color: "#2FC34F",
        image: dreamjob,
        text: "ACCELERATED CARRER TRAJECTORY"
    },
]

const companies = [icon1, icon2, icon3, icon4, icon5, icon6, icon7]

const reviews = [
    {
        name: "John Samuel", role: "UX/UI Design", review: "KnowLumi transformed my college experience! The personalized learning approach helped me grasp tech concepts effortlessly. Building real projects gave me hands-on skills crucial for my career. Now, I feel confident and ready for whatever comes my way."
    },
    {
        name: "John Rodriguez", role: "Cybersecurity", review: "KnowLumi's mentorship program exceeded my expectations. The guidance I received was invaluable in navigating my career path. The platform's focus on real-world projects enhanced my practical skills immensely. I highly recommend KnowLumi to any college student looking to kickstart their career."
    },
    {
        name: "Jessica Nguyen", role: "Student", review: "Enrolling in KnowLumi during my first year was a game-changer. The personalized tasks tailored to my learning style helped me grasp complex concepts with ease. The mentorship I received guided me towards my career goals. KnowLumi truly set me up for success in college and beyond."
    },
    {
        name: "John Samuel", role: "UX/UI Design", review: "KnowLumi transformed my college experience! The personalized learning approach helped me grasp tech concepts effortlessly. Building real projects gave me hands-on skills crucial for my career. Now, I feel confident and ready for whatever comes my way."
    },
    {
        name: "Rachel Wong", role: "Full stack development", review: "KnowLumi's approach to learning is unmatched. The platform's combination of AI-driven tasks and real-world projects provided a holistic learning experience. The community support fostered a collaborative environment where I thrived. I feel confident and prepared for my future endeavors."
    },
]

const WhyKnowlumi = [
    {
        badge: "LOREM IPSUM",
        title: "KNOWLUMI",
        points: ["Horem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
            "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. .",
            "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. .",
            "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. .",]
    },
    {
        badge: "LOREM IPSUM",
        title: "OTHER COURSES",
        points: ["Horem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
            "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. .",
            "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. .",
            "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. .",]
    },
]

const processSvg = "M2 7.5C1.17157 7.5 0.5 8.17157 0.5 9C0.5 9.82843 1.17157 10.5 2 10.5L2 7.5ZM135 10.5L150 17.6603L150 0.339758L135 7.50001L135 10.5ZM7.28571 10.5C8.11414 10.5 8.78571 9.82843 8.78571 9C8.78571 8.17157 8.11414 7.5 7.28571 7.5L7.28571 10.5ZM17.8571 7.5C17.0287 7.5 16.3571 8.17157 16.3571 9C16.3571 9.82843 17.0287 10.5 17.8571 10.5L17.8571 7.5ZM28.4286 10.5C29.257 10.5 29.9286 9.82843 29.9286 9C29.9286 8.17158 29.257 7.5 28.4286 7.5L28.4286 10.5ZM39 7.5C38.1716 7.5 37.5 8.17158 37.5 9C37.5 9.82843 38.1716 10.5 39 10.5L39 7.5ZM49.5714 10.5C50.3999 10.5 51.0714 9.82843 51.0714 9C51.0714 8.17158 50.3999 7.5 49.5714 7.5L49.5714 10.5ZM60.1429 7.50001C59.3144 7.50001 58.6429 8.17158 58.6429 9C58.6429 9.82843 59.3144 10.5 60.1429 10.5L60.1429 7.50001ZM70.7143 10.5C71.5427 10.5 72.2143 9.82843 72.2143 9.00001C72.2143 8.17158 71.5427 7.50001 70.7143 7.50001L70.7143 10.5ZM81.2857 7.50001C80.4573 7.50001 79.7857 8.17158 79.7857 9.00001C79.7857 9.82843 80.4573 10.5 81.2857 10.5L81.2857 7.50001ZM91.8571 10.5C92.6856 10.5 93.3571 9.82844 93.3571 9.00001C93.3571 8.17158 92.6856 7.50001 91.8571 7.50001L91.8571 10.5ZM102.429 7.50001C101.6 7.50001 100.929 8.17158 100.929 9.00001C100.929 9.82844 101.6 10.5 102.429 10.5L102.429 7.50001ZM113 10.5C113.828 10.5 114.5 9.82844 114.5 9.00001C114.5 8.17158 113.828 7.50001 113 7.50001L113 10.5ZM123.571 7.50001C122.743 7.50001 122.071 8.17158 122.071 9.00001C122.071 9.82844 122.743 10.5 123.571 10.5L123.571 7.50001ZM134.143 10.5C134.971 10.5 135.643 9.82844 135.643 9.00001C135.643 8.17158 134.971 7.50001 134.143 7.50001L134.143 10.5ZM144.714 7.50001C143.886 7.50001 143.214 8.17159 143.214 9.00001C143.214 9.82844 143.886 10.5 144.714 10.5L144.714 7.50001ZM2 10.5L7.28571 10.5L7.28571 7.5L2 7.5L2 10.5ZM17.8571 10.5L28.4286 10.5L28.4286 7.5L17.8571 7.5L17.8571 10.5ZM39 10.5L49.5714 10.5L49.5714 7.5L39 7.5L39 10.5ZM60.1429 10.5L70.7143 10.5L70.7143 7.50001L60.1429 7.50001L60.1429 10.5ZM81.2857 10.5L91.8571 10.5L91.8571 7.50001L81.2857 7.50001L81.2857 10.5ZM102.429 10.5L113 10.5L113 7.50001L102.429 7.50001L102.429 10.5ZM123.571 10.5L134.143 10.5L134.143 7.50001L123.571 7.50001L123.571 10.5Z"

const footerLinks = "Home,Career Tracks,Courses,How Knowlumi works,Privacy Policy,Contact Us".split(",")

export { pages, faq, heroImages, companies, footerLinks, reviews, program, WhyKnowlumi,processSvg }

