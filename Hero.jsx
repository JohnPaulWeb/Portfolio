import React from 'react'
import Person from '../../assets/profile.jpg'
import { FaArrowRight } from "react-icons/fa"
import { FaDribbble } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { motion } from "framer-motion"

const container = (delay) => ({
    hidden: {
        opacity: 0,
        x: 100,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            delay: delay,
        },
    },
});
const Hero = () => {
  return (
    <>
    <main className="bg-gray text-white">
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 min-h[800px] place-items-center py-20">
            {/* Image section */}
            <div className="grid col-span-2 relative h-full justify-center">
                <div className="w-[450px]">
                    <motion.h1 variants={container(0.5)} initial="hidden" whileInView="show" className="text-5xl font-bold leading-tight">Ayanokoji</motion.h1>
                    <motion.div variants={container(0.6)} initial="hidden" whileInView="show" className="h-[4px] w-[30px] bg-primary mt-4"></motion.div>
                </div>
                 {/* social handler */}
                <div className="flex gap-6 mt-24">
                    <motion.FaDribbble variants={container(0.8)} initial="hidden" whileInView="show" className="text-2x1 hover:scale-110 cursor-pointer duration-200"/>
                    <FaInstagram className="text-3x1 hover:scale-125 cursor-pointer"/>
                    <CiLinkedin className="text-3x1 hover:scale-125 cursor-pointer"/>
                </div>
                <div className="">
                    <img src={Person} alt="" className="scale-100 relative z-10 w-[280px]"/>
                </div>
               
            </div>
            {/* Text section */}
            <div className="space-y-7">
                <p className="text-sm opacity-50 tracking-widest font-serif translate-y-3">- Introduction</p>
                <h1 className="text-3x1 ">
                    Full Stack Developer, in Philippines
                </h1>
                <p className="text-sm leading-6 opacity-70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores autem neque tempore, illo sit impedit doloribus iusto dicta quod ducimus nostrum rem dolorum fugiat nisi eligendi distinctio quibusdam est mollitia?</p>
                <button className="text-primary border-b-2 border-primary text-xl font-bold p-1 flex items-center gap-4 group">My story <FaArrowRight className="text-sm group-hover:translate-x-2 transition duration-200"/></button>
            </div>
            </div>
            </div>        
    </main>
    </>
  )
}

export default Hero