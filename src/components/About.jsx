import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import {services } from '../constants'
import { fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'


const ServiceCard = ({
  index ,title , icon
}) =>{
  return(
   <Tilt className='xs:w-[250px] w-full'>
    <motion.div
    variants={fadeIn("left" ,"spring" ,0.7 * index ,0.75)}
    className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
    <div options ={
      {
        max: 45,
        scale:1,
        speed: 450
      }
    }
    className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
      <img src={icon} alt='web-development'
      className='w-16 h-16 object-contain'      
      />
      <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>

    </div>
    </motion.div>


   </Tilt>
  )
}



const About = () => {
  return (
   
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>

    <motion.p variants={fadeIn("" , "" , 0.1 ,1)}
    className='mt-4 text-secondary text-[17px] max-w-8xl leading-[30px]' 
    >
      {/* I'm not only an exceptional university student with a strong foundation in coding and web development experienced in java, React.js, javascript
      but affinity for science visulization where using p5.js breathing life into scientific concepts
      seemengly complex into intersting visuals for better appreciation possesing deeep love in blending creativity into coding by 
      frameworks like three.js working with 3d models. */}
I'm an exceptional university student with a strong foundation in coding and web development.proficiency in Java, React.js, and JavaScript enableing to build dynamic web applications, while my love for science visualization, utilizing p5.js, allows me bring complex concepts to life through captivating visuals. Expertise in frameworks like three.js further demonstrates commitment to blending creativity into coding, particularly in the realm of 3D models. A valuable asset, continually pushing the boundaries of what can be achieved at the intersection of technology and artistic expression.

    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service,index) =>(
        <ServiceCard key={service.title} index = {index} {...service}/>
      ))}

    </div>
   
    </>
    
   
  )
}

export default SectionWrapper(About,"about")