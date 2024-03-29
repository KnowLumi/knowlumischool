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
    { name: "Community", route: '/community' },
    { name: "Learn", route: '/learn' },
    { name: "Earn", route: '/earn' },
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

export { pages, faq, heroImages, companies }