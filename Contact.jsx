import React from 'react'
import { FaArrowRight } from "react-icons/fa"
import { FaDribbble } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Contact = () => {
  return (
    <main className="bg-darkGray text-white">
        <div className="container py-24 lg:py-36">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* left side  */}
            <section className="space-y-7 lg:max-w-[380px]">
                <p className="text-sm opacity-50 tracking-widest font-serif translate-y-3">- Contact</p>
                <h1 className="text-3x1 ">
                     Introduction Programming 
                </h1>
                <p className="text-sm leading-6 opacity-70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores autem neque tempore, illo sit impedit doloribus iusto dicta quod ducimus nostrum rem dolorum fugiat nisi eligendi distinctio quibusdam est mollitia?</p>
                <button className="text-primary border-b-2 border-primary text-xl font-bold p-1 flex items-center gap-4 group">Welcome to Programming World <FaArrowRight className="text-sm group-hover:translate-x-2 transition duration-200"/></button>
            </section>

            {/* right side */}
                <div className="space-y-7">
                    <p className="text-3xl">
                       Steve Jobs The Apple co-founder's perspectives on creativity, innovation, entrepreneurship, and leadership remain just as revelatory today. Prime example: Jobs said the best managers never wanted to be managers, and science says he was right.
                    </p>
                    <p className="text-sm leading-6 opacity-60">Jobs relayed this valuable piece of wisdom during his 2005 commencement address. In it, Jobs describes how at the age of 17, he read a quote that would provide guidance throughout his life. The quote was, "If you live each day as if it was your last, someday you'll most certainly be right."</p>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex gap-3 items-center">
                            <p className="text-6xl text-primary font-bold">14</p>
                            <p className="font-semibold max-w-[100px]">Years of Experience</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <p className="text-6xl text-primary font-bold">123</p>
                            <p className="font-semibold max-w-[100px]">Project of Programming</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Contact