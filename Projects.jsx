import React from 'react'
import { FaArrowRight } from "react-icons/fa"
import Profile from '../../assets/superman.jpg'
import Profile2 from '../../assets/batman.jpg'
import Profile3 from '../../assets/ironman.jpg'
import Profile4 from '../../assets/profile.jpg'

const projectList = [
    {
        id: 1,
        title: "Superman",
        img: Profile,
    },
    {
        id: 2,
        title: "Batman",
        img: Profile2,
    },
    {
        id: 3,
        title: "Iron Man",
        img: Profile3,
    },
];
const Projects = () => {
  return (
    <div className="bg-gray text-white py-14">
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center gap-6">
            <section className="space-y-7 lg:max-w-[380px]">
                <p className="text-sm opacity-50 tracking-widest font-serif translate-y-3">- Projects</p>
                <h1 className="text-3x1 ">
                    Software Engineer
                </h1>
                <p className="text-sm leading-6 opacity-70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores autem neque tempore, ?</p>
                <button className="text-primary border-b-2 border-primary text-xl font-bold p-1 flex items-center gap-4 group">Welcome to Programming World 
                        <FaArrowRight className="text-sm group-hover:translate-x-2 transition duration-200"/></button>
            </section>
            {
                projectList.map((project) => {
                    return (
                        <div key={project.id} className="space-y-7 px-4 mb-8 items-center justify-center">
                            <img src={project.img} alt="" className="w-full hover:scale-110 hover:shadow-lg duration-300" />
                            <p className="text-2x1 font-semibold">{project.title}</p>
                            </div>
                    );
                })
            }
            </div>
        </div>
    </div>
  )
}

export default Projects