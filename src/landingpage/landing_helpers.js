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

const pages = [
    { name: "Home", route: '/' },
    { name: "About", route: '/about' },
    { name: "Join Community", route: '/community' },
    { name: "Refer & Earn", route: '/refer&earn' },
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

const footerLinks = "Home,Career Tracks,Courses,How Knowlumi works,Privacy Policy,Contact Us".split(",")

export { pages, faq, heroImages, companies, footerLinks, reviews }