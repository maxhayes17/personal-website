import * as React from "react"
import { motion, useAnimate } from "framer-motion"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Project from "../components/Project";


const pageStyles = {

  // fontFamily: "-apple-system, Roboto, sans-serif, serif",
  backgroundColor: "#04091B"
}

const IndexPage = () => {

  const [scope, animate] = useAnimate()

  return (
    // content wrapper
    <div style={pageStyles}>

      <motion.div 
        className="fixed z-50 h-16 bg-slate-950 w-screen flex flex-row justify-end backdrop-blur-sm bg-opacity-90 text-md divide-y-reverse"
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
          className="py-2 px-3 mx-8 my-auto font-bold bg-majorelle-blue rounded-lg text-lavender-blush hover:cursor-pointer bg-gradient-to-r hover:from-majorelle-blue hover:to-cyan-600"
          >Contact me
        </motion.a>
      </motion.div>

      <div className="text-center pt-32 h-screen">
        <div className="inline-flex items-center"
          onMouseEnter={() => animate(scope.current, {opacity: 1, x:0,
            transition: {
              type: "spring",
              stiffness:10,
              duration:0.5,
            }})}
          onMouseLeave={() => animate(scope.current, {opacity: 0, x:0})}
        >
          <motion.h1 
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {opacity:0, y:-50},
            visible: {opacity:1, y:0,
              transition: {
                type: "spring",
                stiffness: 100,
                duration:1,
                delay: 0.25
              }
            }
          }}
          className="text-7xl font-bold p-5 ml-20" style={{fontFamily:"'Ramabhadra', sans-serif"}}>
              Maximus Hayes
          </motion.h1>
          <motion.div 
            initial="hidden"
            variants={{
              hidden: {opacity: 0},
            }}
            ref={scope}
            className="flex flex-row pt-3 w-20 justify-between items-center">
              <a className="hover:opacity-70" href="https://www.github.com/maxhayes17" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16" style={{margin:"auto"}}>
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </a>
              <a className="hover:opacity-70" href="https://www.linkedin.com/in/~max/" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16" style={{margin:"auto"}}>
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
              </a>
          </motion.div>
        </div>
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
              whileHover={{scale:1.2}}
              variants={{
                hidden: {opacity: 0},
                visible: {opacity: 1,
                  transition: {
                    duration:0.5,
                    delay: 1.5
                  }
                }
              }}
              className="flex items-center justify-center mx-auto mt-5 w-1/4 text-xl text-lavender-blush">
              <AnchorLink href="#projects" className="font-bold bg-clip-text bg-gradient-to-r hover:from-majorelle-blue hover:to-cyan-500 hover:text-transparent">
                View my projects
              </AnchorLink>
            </motion.div>
      </div>
      <section id="about">
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
        
        className="w-4/5 h-screen p-5 mx-auto">
          <div className="my-auto">
            <h1 className="text-4xl font-bold">About me</h1>
            <p>Lorem ipsum</p>
          </div>
        </motion.div>
      </section>
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
