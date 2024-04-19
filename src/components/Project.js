import * as React from "react"
import { motion } from "framer-motion"

const Project = ({name, desc, tags, link, picture_path}) => {
    console.log(name);
    console.log(tags)
    return(
        <motion.div 
        initial="hidden"
        whileInView="visible"
        transition={{
          type: "spring",
          stiffness:50,
          duration:0.5,
          ease:"easeIn",
        }}
        variants={{
          hidden: {x:-500},
          visible: {x:0}
        }}
        className="flex flex-row h-screen w-inherit mt-10 mx-16 p-10 text-lavender-blush">

                <div className="flex flex-col h-2/3 w-1/3 my-auto justify-top content-end">
                <h1 className="text-4xl font-bold">{name}</h1>
                    <div className="flex flex-row flex-wrap mt-3">
                        {tags && tags.map((tag) => 
                            <p className="bg-lavender-blush text-black text-xs w-fit h-fit px-2 py-1 rounded my-1 mx-1" 
                            key={tag} 
                            style={{fontFamily:"'Ramabhadra', sans-serif"}}>{tag}</p>
                        )}
                    </div>
                    <div className="flex flex-col h-full mt-5">
                        <p>{desc}</p>
                        {link && <motion.a whileHover={{scale:1.05}} 
                        className="flex flex-row space-x-2 w-fit pl-5 pr-3 py-3  my-auto mx-auto rounded-full text-black text-center font-bold bg-lavender-blush" 
                        style={{fontFamily:"'Ramabhadra', sans-serif"}}
                        href={link} target="_blank">
                        <p className="m-auto mr-4">View on GitHub</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16" style={{margin:"auto"}}>
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                        </motion.a>}
                    </div>
                </div>
                <img className="w-3/4 h-3/4 my-auto object-fill hover:cursor-pointer" src={picture_path} />
                {/* <div className="h-2/3 w-2/3 bg-slate-100 my-auto rounded-xl hover:shadow-md hover:shadow-white hover:cursor-pointer">
                    <img className="object-fill" src={picture_path} />
                </div> */}
                {/* <div className="h-2/3 w-2/3 bg-slate-100 my-auto rounded-xl hover:shadow-md hover:shadow-white hover:cursor-pointer"></div> */}
            
        
        </motion.div>
    )
}
export default Project;