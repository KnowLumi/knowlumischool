import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";
import sub1 from "../assets/hero_img_1.jpg"
import sub2 from "../assets/hero_img_2.jpg"
import sub3 from "../assets/hero_img_3.jpg"
import sub4 from "../assets/hero_img_4.jpg"

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

export { pages, faq, heroImages }