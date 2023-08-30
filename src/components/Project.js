import * as React from "react"
import { motion } from "framer-motion"

const Project = ({name, desc, tags, link}) => {
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
        className="flex h-screen mt-10 p-5 text-lavender-blush">
            <div className="flex flex-row w-full bg-transparent h-4/5 my-auto rounded-xl p-10">

                <div className="flex flex-col h-2/3 w-1/2 my-auto justify-top content-end">

                <h1 className="text-4xl font-bold">{name}</h1>
                    <div className="flex flex-row mt-3">
                        
                        {tags && tags.map((tag) => 
                            <p className="bg-slate-gray text-s w-fit h-fit px-2 py-1 rounded my-auto mx-1" key={tag}>{tag}</p>)}
                    </div>
                    <div className="flex flex-col mt-5">
                        <p>{desc}</p>
                        <a>{link}</a>
                    </div>
                </div>
                <div className="h-2/3 w-2/3 bg-slate-100 my-auto rounded-xl hover:shadow-md hover:shadow-white hover:cursor-pointer"></div>
            
        
            </div>
        </motion.div>
    )
}
export default Project;