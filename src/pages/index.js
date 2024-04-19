import * as React from "react"
import { motion } from "framer-motion"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Project from "../components/Project";
import { projects, about } from "../data/projects";
import SE_infographic from "../assets/images/Software_Engineering_Infographic.png";
import Pitt_Enrollment from "../assets/images/Pitt_Enrollment_Flowchart.png";


const pageStyles = {

  // fontFamily: "-apple-system, Roboto, sans-serif, serif",
  backgroundColor: "#04091B"
}

const IndexPage = () => {

  return (
    // content wrapper
    <div style={pageStyles}>

      <motion.div 
        className="fixed z-50 h-16 bg-slate-900 w-screen flex flex-row justify-end backdrop-blur-sm bg-opacity-90 text-md divide-y-reverse"
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
        <div className="flex flex-row space-x-6 text-lavender-blush">
          <motion.a 
            whileHover={{scale:1.05}} 
            className="my-auto hover:text-white hover:brightness-200" 
            href="https://www.github.com/maxhayes17" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16" style={{margin:"auto"}}>
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
          </motion.a>
          <AnchorLink href="#projects" className="my-auto font-bold hover:text-white hover:brightness-200">Projects</AnchorLink>
          <AnchorLink href="#about" className="my-auto font-bold hover:text-white hover:brightness-200">About me</AnchorLink>
          {/* <AnchorLink href="#resume" className="my-auto font-bold hover:text-white hover:brightness-200">Resume</AnchorLink> */}
        </div>
        <motion.a
          whileHover={{scale:1.05}}
          href="mailto: maxhayess17@gmail.com"
          className="py-2 px-3 mx-8 my-auto font-bold bg-lavender-blush rounded-lg text-eerie-black hover:cursor-pointer"
          style={{fontFamily:"'Ramabhadra', sans-serif"}}
          >Contact me
        </motion.a>
      </motion.div>

      <div className="text-center pt-64 h-screen">
        <motion.div className="inline-flex items-center"
          initial="hidden"
          whileHover="hover"
          animate="hidden"
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
                delay: 0.25,
              }
            },
            hover: {
              opacity: 1
            }
          }}
          className=" text-7xl font-bold p-5" style={{fontFamily:"'Ramabhadra', sans-serif"}}>
              Maximus Hayes
          </motion.h1>
        </motion.div>

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
            className="text-md font-mono">Student // Pittsburgh</motion.p>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              whileHover={{scale:1.05}}
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

      <section id="projects">
      <div className="">
        {projects && projects.map((project) => 
          <Project key={project.name} name={project.name} desc={project.desc} tags={project.tags} link={project.link} picture_path={project.picture_path}/>
        )}
          
            {/* <Project name="Project1" desc="Lorem ipsum" tags={["MongoDB", "Express", "React", "Node"]} picture_path={TCHome} link="maxhayes17.github.io"/> */}
            {/* <Project name="Project2" desc="lorem ipsum" tags={["HTML"]}/> */}
            <div className="flex flex-row w-inherit text-lavender-blush justify-around px-16">
              <div className="flex flex-col w-1/3 p-10 h-2/3 space-y-4">
                <h1 className="text-4xl font-bold">Other projects</h1>
                <p>Check out some of my non-technical work</p>
              </div>
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
                hidden: {x:300},
                visible: {x:0}
              }}
              className="flex flex-col w-2/3 p-10 space-y-10">

                <div className="flex flex-row">
                  <div className="flex flex-col w-2/3">
                    <h1 className="text-2xl font-bold justify-center">Software Engineering Infographic</h1>
                    <p className="mt-4">Interested in going into Software Engineering? This Infographic will introduce what to know about the field</p>
                    <motion.a 
                    whileHover={{scale:1.05}} 
                    href="Software_Engineering_Infographic.pdf"
                    target="_blank"
                    className="flex flex-row bg-lavender-blush text-black w-fit space-x-4 px-5 py-3 rounded-lg hover:cursor-pointer divide-x divide-black divide-opacity-30 my-auto">
                        <p style={{fontFamily:"'Ramabhadra', sans-serif"}}>View</p>
                        <div className="pl-4">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-black">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                          </svg>
                        </div>
                    </motion.a>
                  </div>
                  <div className="w-1/3">
                    <img className="h-96 mx-auto" src={SE_infographic} />
                  </div>
                </div>

                <div className="flex flex-row">
                  <div className="flex flex-col w-1/2">
                    <h1 className="text-2xl font-bold justify-center">The <span className="italic text-white">Perfect Pitt Enrollment</span> Flowchart</h1>
                    <p className="mt-4 mr-4">The perfect guide to optimize enrolling in classes for Pitt students</p>
                    <motion.a 
                    whileHover={{scale:1.05}} 
                    href="Pitt_Enrollment_Flowchart.pdf"
                    target="_blank"
                    className="flex flex-row bg-lavender-blush text-black w-fit space-x-4 px-5 py-3 rounded-lg hover:cursor-pointer divide-x divide-black divide-opacity-30 my-auto">
                        <p style={{fontFamily:"'Ramabhadra', sans-serif"}}>View</p>
                        <div className="pl-4">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-black">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                          </svg>
                        </div>
                    </motion.a>
                  </div>
                  <div className="w-1/2">
                    <img className="h-96 mx-auto" src={Pitt_Enrollment} />
                  </div>
                </div>

              </motion.div>
            </div>
        </div>
      </section>

      <section id="about">
        <div className="flex flex-row h-screen w-inherit mt-10 mx-16 pt-24 text-lavender-blush">
          <div className="flex flex-col w-1/2 mx-16 p-10 space-y-6">
            <h1 className="text-4xl font-bold">About me</h1>
            <p style={{ whiteSpace: 'break-spaces' }}>{about}</p>
            <h1 className="text-2xl font-bold justify-center">Get in touch</h1>
            <div className="flex flex-row space-x-6">
              <motion.a 
                whileHover={{scale:1.05}} 
                className="my-auto hover:text-white hover:brightness-200" 
                href="https://www.linkedin.com/in/~max/" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16" style={{margin:"auto"}}>
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
              </motion.a>
              <motion.a 
                whileHover={{scale:1.05}} 
                className="my-auto hover:text-white hover:brightness-200" 
                href="https://www.github.com/maxhayes17" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16" style={{margin:"auto"}}>
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </motion.a>
              <motion.a 
                whileHover={{scale:1.05}} 
                className="my-auto hover:text-white hover:brightness-200" 
                href="mailto: maxhayess17@gmail.com" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-9 h-9" style={{margin:"auto"}}>
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>
              </motion.a>
            </div>
          </div>

          <div className="flex flex-col w-1/2 mx-16 p-10 space-y-6">
            <h1 className="text-2xl font-bold justify-center">Want to learn more about me?</h1>
            <p className="text-lavender-blush text-md pb-6">Check out these documents</p>

            {/* CV btn group */}
            <motion.a 
            whileHover={{scale:1.05}} 
            href="Maximus_Hayes_Resume.pdf"
            target="_blank"
            className="flex flex-row bg-lavender-blush text-black w-fit space-x-3 px-5 py-3 rounded-lg hover:cursor-pointer divide-x divide-black divide-opacity-30">
              <p style={{fontFamily:"'Ramabhadra', sans-serif"}}>Resume</p>
              <div className="pl-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-black">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </div>
            </motion.a>

            <motion.a 
            whileHover={{scale:1.05}} 
            href="Maximus_Hayes_Cover_Letter.pdf"
            target="_blank"
            className="flex flex-row bg-lavender-blush text-black w-fit space-x-3 px-5 py-3 rounded-lg hover:cursor-pointer divide-x divide-black divide-opacity-30">

              <p style={{fontFamily:"'Ramabhadra', sans-serif"}}>Cover Letter</p>
              <div className="pl-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-black">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </div>
            </motion.a>

            <motion.a 
            whileHover={{scale:1.05}} 
            href="Maximus_Hayes_Personal_Bibliography.pdf"
            target="_blank"
            className="flex flex-row bg-lavender-blush text-black w-fit space-x-4 px-5 py-3 rounded-lg hover:cursor-pointer divide-x divide-black divide-opacity-30">
                <p style={{fontFamily:"'Ramabhadra', sans-serif"}}>Personal Bibliography</p>
                <div className="pl-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-black">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </div>
            </motion.a>

            <motion.a 
            whileHover={{scale:1.05}} 
            href="Maximus_Hayes_Personal_Philosophy.pdf"
            target="_blank"
            className="flex flex-row bg-lavender-blush text-black w-fit space-x-4 px-5 py-3 rounded-lg hover:cursor-pointer divide-x divide-black divide-opacity-30">
                <p style={{fontFamily:"'Ramabhadra', sans-serif"}}>Personal Philosophy Statement</p>
                <div className="pl-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-black">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </div>
            </motion.a>

          </div>
        </div>
      </section>
      
      {/* <section id="resume" className="h-96">
        <h1 className="text-center text-xl font-bold">View my resume <a href="Maximus_Hayes_Resume.pdf" target="_blank" className="text-majorelle-blue">here</a></h1>
      </section> */}



    </div>

  )
}

export default IndexPage

export const Head = () => <title>Home | Maximus Hayes</title>
