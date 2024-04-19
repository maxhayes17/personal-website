import TwitClone from "../assets/images/tc-home.png";
import Chatbot from "../assets/images/chatbot-home.png";
import Muve from "../assets/images/muve-page.png";


export const projects = [
    {
        name: "ADMT Weather Chatbot",
        desc: "Full-stack chatbot web application which generates SQL queries from user-inputted natural language prompts, executes the queries on a weather database, and responds the results back in natural language, along with a visualization of the result if appropriate.",
        tags: ["AI", "React", "Python", "Flask", "PostgreSQL", "Docker", "LLMs"],
        link: "",
        picture_path: Chatbot
    },
    {
        name: "TwitClone",
        desc: "Full-stack web app mimicking the basic functionality of social media platform Twitter",
        tags: ["MongoDB", "Express", "React", "Node.js", "TailwindCSS"],
        link: "https://github.com/maxhayes17/TwitterClone",
        picture_path: TwitClone
    },
    {
        name: "Muve",
        desc: "Mobile application for creating, sharing, and exploring exercise routines synced with music.",
        tags: ["UI/UX", "Flutter", "Dart", "Firebase"],
        link: "https://github.com/maxhayes17/Muve",
        picture_path: Muve
    },
    
]

export const about = `\tHello! My name is Maximus Hayes, and I am a student at the University of Pittsburgh studying Computer Science and Data Science. 

\tWith research background in Artificial Intelligence and the use of Large Language Models, most of my current work focuses on integrating Natural Language approaches to technical applications to bridge the gap between novice and expert. I also love opportunities to express a creative side to things, especially through Web Development and UI/UX design. 

\tAs a Philadelphia native, I am a huge Phillies, Eagles, and 76ers fan. I also enjoy reading, specifically in the field of Psychology, and would love to talk about these things!
`