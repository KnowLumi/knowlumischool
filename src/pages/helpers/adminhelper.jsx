import { MdBarChart, MdSchool, MdLocalLibrary, MdCategory, MdPlayCircle, MdApartment, MdStar } from "react-icons/md";
const adminLinks = [
    {
        icon: <MdBarChart className="w-5 h-5" />,
        name: "Dashboard",
        route: "dashboard",
    },
    {
        icon: <MdSchool className="w-5 h-5" />,
        name: "Students",
        route: "students"
    },
    {
        icon: <MdLocalLibrary className="w-5 h-5" />,
        name: "Mentors",
        route: "mentors"
    },
    {
        icon: <MdCategory className="w-5 h-5" />,
        name: "Categories",
        route: "categories"
    },
    {
        icon: <MdPlayCircle className="w-5 h-5" />,
        name: "Add Video",
        route: "addvideo"
    },
    {
        icon: <MdApartment className="w-5 h-5" />,
        name: "Company Logo",
        route: "companies"
    },
    {
        icon: <MdStar className="w-5 h-5" />,
        name: "Testimonials",
        route: "testimonials"
    },
]

const studentForm = [
    { label: "First Name", type: "text", name: "firstName", placeholder: "Enter First Name" },
    { label: "Last Name", type: "text", name: "lastName", placeholder: "Enter Last Name" },
    { label: "Date of Birth", type: "date", name: "dateOfBirth", placeholder: "" }, // Date inputs don't typically have placeholders
    { label: "Country", type: "select", name: "countryCode", placeholder: "Select" },
    { label: "Mobile Number", type: "tel", name: "mobileNumber", placeholder: "Enter Mobile Number" },
    { label: "Education", type: "select", name: "education", placeholder: "Select" },
    { label: "Email", type: "text", name: "email", placeholder: "Enter email address" },
    { label: "Address", type: "textarea", name: "address", placeholder: "Enter address" },
    { label: "Profile Picture", type: "file", name: "profilePicture", placeholder: "" },
]

const companyLogos = [
    {
        type: "Mentor",
        theme:"#297045",
        icon: <MdLocalLibrary className="w-5 h-5" />,
        logos: [
            "/src/pages/Admin/CompanyLogos/logo_ (1).png",
            "/src/pages/Admin/CompanyLogos/logo_ (2).png",
            "/src/pages/Admin/CompanyLogos/logo_ (3).png",
            "/src/pages/Admin/CompanyLogos/logo_ (4).png",
            "/src/pages/Admin/CompanyLogos/logo_ (5).png",
            "/src/pages/Admin/CompanyLogos/logo_ (6).png",
            "/src/pages/Admin/CompanyLogos/logo_ (7).png",
        ]
    },
    {
        type: "Referral",
        theme:"#FF9F1C",
        icon: <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.47122 3.02632C8.36458 3.02632 9.22135 3.3812 9.85305 4.0129C10.4848 4.6446 10.8396 5.50138 10.8396 6.39474C10.8396 7.2881 10.4848 8.14487 9.85305 8.77657C9.22135 9.40827 8.36458 9.76316 7.47122 9.76316C6.57786 9.76316 5.72109 9.40827 5.08938 8.77657C4.45768 8.14487 4.1028 7.2881 4.1028 6.39474C4.1028 5.50138 4.45768 4.6446 5.08938 4.0129C5.72109 3.3812 6.57786 3.02632 7.47122 3.02632ZM7.47122 11.4474C9.71964 11.4474 14.2081 12.5758 14.2081 14.8158V16.5H0.734375V14.8158C0.734375 12.5758 5.2228 11.4474 7.47122 11.4474ZM14.006 3.32947C15.707 5.18211 15.707 7.75053 14.006 9.45158L12.5912 8.02842C13.2986 7.03474 13.2986 5.74632 12.5912 4.75263L14.006 3.32947ZM16.7933 0.5C20.1028 3.91053 20.0775 9.01368 16.7933 12.2895L15.4207 10.9168C17.7533 8.23895 17.7533 4.41579 15.4207 1.87263L16.7933 0.5Z" fill="white" />
        </svg>
        ,
        logos: [
            "/src/pages/Admin/CompanyLogos/logo_ (1).png",
            "/src/pages/Admin/CompanyLogos/logo_ (2).png",
            "/src/pages/Admin/CompanyLogos/logo_ (3).png",
            "/src/pages/Admin/CompanyLogos/logo_ (4).png",
            "/src/pages/Admin/CompanyLogos/logo_ (5).png",
            "/src/pages/Admin/CompanyLogos/logo_ (6).png",
            "/src/pages/Admin/CompanyLogos/logo_ (7).png",
        ]
    }
]

export { adminLinks, studentForm, companyLogos }