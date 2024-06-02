import { MdBarChart, MdSchool, MdLocalLibrary, MdCategory, MdPlayCircle, MdApartment, MdStar } from "react-icons/md";
const adminLinks = [
    {
        icon: <MdBarChart className="w-5 h-5" />,
        name: "Dashboard",
        route: "/dashboard",
    },
    {
        icon: <MdSchool className="w-5 h-5" />,
        name: "Students",
        route: "/students"
    },
    {
        icon: <MdLocalLibrary className="w-5 h-5" />,
        name: "Mentors",
        route: "/mentors"
    },
    {
        icon: <MdCategory className="w-5 h-5" />,
        name: "Categories",
        route: "/categories"
    },
    {
        icon: <MdPlayCircle className="w-5 h-5" />,
        name: "Add Video",
        route: "/addvideo"
    },
    {
        icon: <MdApartment className="w-5 h-5" />,
        name: "Company Logo",
        route: "/companylogo"
    },
    {
        icon: <MdStar className="w-5 h-5" />,
        name: "Testimonials",
        route: "/testimonials"
    },
]

export { adminLinks }