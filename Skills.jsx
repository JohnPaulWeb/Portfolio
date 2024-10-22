import React from 'react'
import { FaBoxOpen } from "react-icons/fa";
import { CiPen } from "react-icons/ci";
import { FaComputer } from "react-icons/fa6";
import icon from '../../assets/gallery-icon.png'
import icon2 from '../../assets/mic-icon.jpg'
import icon3 from '../../assets/question-icon.jpg'
import icon4 from '../../assets/compass-icon.jpg'

const skills = [
    {
        id: 1,
        title: "UI & UX Designer",
        icon: <FaBoxOpen className="text-4xl" />,
    },
    {
        id: 2,
        title: "Front End",
        icon: <CiPen className="text-4xl" />,
    },
    {
        id: 3,
        title: "Back End",
        icon: <FaComputer className="text-4xl" />,
    },
]

const Skills = () => {
  return (
    <div className="bg-gray">
        <div className="container py-10 text-white space-y-14">
           {/* card section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center">
              {skills.map((skill) => {
                return (
                    <div
                    key={skill.id}
                    className="flex items-center gap-6 bg-white/15 px-7 py-12 max-w[300px] hover:shadow-lg hover:bg-purple-500 hover:scale-105 duration-300">
                    {skill.icon}
                    <h1 className="text-2xl font-bold">{skill.title}</h1>
                    </div>
                )
              })}
            </div>
        </div>

        {/* company section */}
        <div>
            <img src={icon} className="w-4" alt="" />
            <img src={icon2} className="w-4" alt="" />
            <img src={icon3} className="w-4" alt="" />
            <img src={icon4} className="w-4" alt="" />
            
        </div>
    </div>
  )
}

export default Skills