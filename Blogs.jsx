import React from 'react'
import { FaArrowRight } from "react-icons/fa"


const blogList = [
{
    id: 1,
    title: "Technolog way of advance because of Ai will upgrade this",
    date: "July 10, 2024",
},
{
    id: 2,
    title: "Technolog way of advance because of Ai will upgrade this",
    date: "July 10, 2024",
},
{
    id: 3,
    title: "Technolog way of advance because of Ai will upgrade this",
    date: "July 10, 2024",
},
];

const Blogs = () => {
  return (
    <div className="bg-darkGray text-white py-24">
        <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* left side  */}
            <section className="space-y-7 lg:max-w-[380px]">
                <p className="text-sm opacity-50 tracking-widest font-serif translate-y-3">- Blogs</p>
                <h1 className="text-3x1 ">
                     ReactJs & Tailwind 
                </h1>
                <p className="text-sm leading-6 opacity-70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores autem neque tempore, illo sit impedit doloribus iusto dicta quod ducimus nostrum rem dolorum fugiat nisi eligendi distinctio quibusdam est mollitia?</p>
                <button className="text-primary border-b-2 border-primary text-xl font-bold p-1 flex items-center gap-4 group">Welcome to Programming World <FaArrowRight className="text-sm group-hover:translate-x-2 transition duration-200"/></button>
            </section>
            <section className="col-span-2 lg:px-20">
                <div className="space-y-8">
                {/* blogs section */}
                {blogList.map((blog) => {
                    return (
                        <div className="flex justify-between items-center border-b-2 border-gray pb-4">
                            <p className="text-sm opacity-75">{blog.date}</p>
                            <p className="text-lg font-bold">
                                {""}
                                {blog.title} 
                            </p>
                            <FaArrowRight className="text-xl text-primary" />
                        </div>
                    )
                })}
                </div>
            </section>
            </div>
        </div>
    </div>
  )
}

export default Blogs