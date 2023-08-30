import * as React from "react"
import { motion } from "framer-motion"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Project from "../components/Project";


const pageStyles = {

  // fontFamily: "-apple-system, Roboto, sans-serif, serif",
  backgroundColor: "#04091B"
}

const IndexPage = () => {

  return (
    // content wrapper
    <div style={pageStyles}>
      <title>Max Hayes</title>

      <motion.div 
        className="fixed z-50 h-16 bg-slate-950 w-screen flex flex-row justify-end backdrop-blur-sm bg-opacity-90 text-sm divide-y-reverse"
        initial="hidden"
        animate="visible"
        transition={{
          type:"spring",
          duration: 0.5,
          staggerChildren: 0.5,
        }}
        variants={{
          hidden: {y:-50},
          visible: {y:0}
        }}
      >
        <AnchorLink href="#about" className="py-3 px-5 my-auto font-bold hover:text-majorelle-blue">About me</AnchorLink>
        <AnchorLink href="#projects" className="py-3 px-5 my-auto font-bold hover:text-majorelle-blue">Projects</AnchorLink>
        <AnchorLink href="#resume" className="py-3 px-5 my-auto font-bold hover:text-majorelle-blue">Resume</AnchorLink>
        <motion.a
          whileHover={{scale:1.1}}
          className="py-2 px-3 mx-5 my-auto font-bold bg-majorelle-blue rounded-lg text-lavender-blush hover:cursor-pointer bg-gradient-to-r hover:from-majorelle-blue hover:to-cyan-600"
          >Contact me
        </motion.a>
      </motion.div>

      <div className="text-center pt-32 h-screen">
          <motion.h1 
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {opacity:0, y:-50},
            visible: {opacity:1, y:0,
              transition: {
                type: "spring",
                stiffness:50,
                duration:0.5,
                delay: 0.25
              }
            }
          }}
          className="text-7xl font-bold p-5">
              Maximus Hayes
          </motion.h1>
          <motion.p 
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {opacity: 0, x:-50},
              visible: {opacity: 1, x:0,
                transition: {
                  type: "spring",
                  stiffness:50,
                  duration:0.5,
                  delay: 0.5
                }
              }
            }}
            className="text-md font-mono"> Student // Pittsburgh</motion.p>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              whileHover={{scale:1.1}}
              variants={{
                hidden: {opacity: 0},
                visible: {opacity: 1,
                  transition: {
                    duration:0.5,
                    delay: 1
                  }
                }
              }}
              className="flex items-center justify-center mx-auto mt-5 w-1/4 text-xl text-lavender-blush">
              <AnchorLink href="#projects" className="font-bold bg-clip-text bg-gradient-to-r hover:from-majorelle-blue hover:to-cyan-500 hover:text-transparent">
                View my projects
              </AnchorLink>
            </motion.div>
      </div>
      {/* <section id="about">
        <motion.div 
        initial="hidden"
        whileInView="visible"
        transition={{
          type: "spring",
          stiffness:50,
          duration:0.5
        }}
        variants={{
          hidden: {x:-500},
          visible: {x:0}
        }}
        
        className="w-4/5 h-screen p-5 mx-auto rounded-xl mt-32">
          <h1 className="text-4xl font-bold">About me</h1>
          <p>Lorem ipsum</p>
        </motion.div>
      </section> */}
      <section id="projects">
      <div className="w-4/5 mx-auto">
          <div className="flex-row items-center mx-auto justify-between">
            <Project name="Project1" desc="Lorem ipsum" tags={["MongoDB", "Express", "React", "Node"]} link="maxhayes17.github.io"/>
            <Project name="Project2" desc="lorem ipsum" tags={["HTML"]}/>
          </div>
        </div>
      </section>
      
      <section id="resume" className="h-96">
        <h1 className="text-center text-xl font-bold">View my resume <a href="#"className="text-majorelle-blue">here</a></h1>
      </section>



    </div>

  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
