import { img } from "framer-motion/client";
import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "We prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.webp",
    spareImg: "",
  },
  {
    id: 2,
    title: "Clients from all over the world",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Our tech stack",
    description: "we're constantly improving",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Digital creators with a passion for innovation.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Building cutting-edge digital experiences",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Real Estate Platform",
    pinTitle : "Live Website",
    des: "Discover properties with our 3D real estate platform, built to offer immersive and innovative home tours.",
    img: "/project1-min.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "#",
  },
  {
    id: 2,
    title: "Blockchain startip Landing page",
    pinTitle : "Live Website",
    des: "Revolutionizing finance with our blockchain platform for secure, transparent transactions.",
    img: "/project2-min.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "#",
  },
  {
    id: 3,
    title: "GeoScope: Unveiling Earth's Layers",
    pinTitle : "Live Website",
    des: "Developed by our team, this platform provides precise geological insights into Earth's resources and structures.",
    img: "/project3-min.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "#",
  },
  {
    id: 4,
    title: "Wanderly: Your Journey Starts Here",
    pinTitle : "Live Website",
    des: "Discover the world with personalized travel experiences and hassle-free bookings, tailored to your adventures.",
    img: "/project4-min.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "#",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Devion was an incredible experience. Their team's expertise, attention to detail, and commitment to delivering top-notch solutions were evident from the start. They took our vision and turned it into a reality with remarkable precision. For anyone seeking a seamless digital transformation, Devion is the partner you need.",
    name: "Sarah Thompson",
    title: "Marketing Director, TechSavvy Solutions",
    avatarImg: "/girl-avatar.webp",
  },
  {
    quote:
      "Devion exceeded our expectations in every way. Their ability to understand our goals and deliver a beautifully designed website on time was truly impressive. Their team's passion for digital innovation shines through in every project. If you're looking to enhance your online presence, Devion is the right choice.",
    name: "Michael Rodriguez",
    title: "CEO, GreenPath Consulting",
    avatarImg: "/man-avatar.webp",
  },
  {
    quote:
      "From the initial consultation to the final launch, Devion demonstrated exceptional professionalism and creativity. Their dedication to crafting a user-friendly and visually stunning website made all the difference. If you're looking to work with a company that truly cares about your brand, Devion is the one to trust.",
    name: "Emily Carter",
    title: "Founder, BrightLeaf Media",
    avatarImg: "/girl-avatar.webp",
  },
  {
    quote:
      "Collaborating with Devion has been a game-changer for our business. Their innovative approach, quick turnaround, and commitment to excellence were apparent throughout the entire process. They go above and beyond to ensure your vision is brought to life. We couldn't be happier with the results.",
    name: "James Miller",
    title: "Operations Manager, UrbanTech Ventures",
    avatarImg: "/man-avatar.webp",
  },
  {
    quote:
      "Devion's team is exceptional at what they do. Their professionalism, technical expertise, and commitment to delivering outstanding work were evident throughout our project. They listened to our needs and executed them flawlessly. For a reliable and skilled partner, Devion is unmatched.",
    name: "Lisa Nguyen",
    title: "COO, EverBright Technologies",
    avatarImg: "/girl-avatar.webp",
  },
];

export const companies = [
  {
    id: 1,
    name: "ReactJs",
    img: "/reactjs.svg",
  },
  {
    id: 2,
    name: "NextJs",
    img: "/nextjs.svg",
  },
  {
    id: 3,
    name: "TypeScript",
    img: "/typescript.svg",
  },
  {
    id: 4,
    name: "Tailwind CSS",
    img: "/tailwindcss.svg",
  },
  {
    id: 5,
    name: "github",
    img: "/github.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Web Development",
    desc: "Creating dynamic websites tailored to client needs, enhancing online presence.",
    className: "md:col-span-2",
    thumbnail: "/service1.png",
  },
  {
    id: 2,
    title: "Mobile App Development",
    desc: "Designing and developing user-friendly mobile applications for iOS and Android.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/service2.png",
  },
  {
    id: 3,
    title: "Digital Marketing",
    desc: "Implementing strategies to boost online visibility and drive targeted traffic.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/service3.png",
  },
  {
    id: 4,
    title: "E-commerce Solutions",
    desc: "Providing comprehensive e-commerce platforms to streamline online sales.",
    className: "md:col-span-2",
    thumbnail: "/service4.png",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];