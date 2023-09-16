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
                            <p className="bg-slate-gray text-s w-fit h-fit px-2 py-1 rounded my-1 mx-1" key={tag}>{tag}</p>
                        )}
                    </div>
                    <div className="flex flex-col h-full mt-5">
                        <p>{desc}</p>
                        <motion.a whileHover={{scale:1.1}} 
                        className="w-fit px-10 py-3  my-auto mx-auto rounded-full text-center font-bold bg-majorelle-blue" 
                        href={link} target="_blank">View on GitHub
                        </motion.a>
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