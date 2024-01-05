import { distance, motion } from "framer-motion"
import { PiInfo } from "react-icons/pi";
import ChangelogCard from "../components/changelog/ChangelogCard";
import classNames from "classnames";
import CardBG from '../assets/card-bg.svg'
import { useEffect, useRef, useState } from "react";
import { FaRegCircle } from "react-icons/fa";

const changelogData = [

    {
        version: "Version 1.2",
        date: "Dec 23, 2023",
        improvements: [
            "Improvements in our curated UI/UX design template list",
            "Added changelog page"
        ],

        imageSrc: CardBG
    },
    {
        version: "Version 1.1",
        date: "Dec 12, 2023",
        improvements: [
            "Added design services",
            "Now partnered with Ancestral Whispers",
        ],
        bugfixes: [
            "Fixed mobile responsiveness issue"
        ]
    },
    {
        date: "Nov 25, 2023",
        version: "Website Launch"
    },
]


const Changelog = () => {
    const [y, setY] = useState(0)
    const [maxScrollY, setMaxScrollY] = useState(0)

    useEffect(() => {
        window.addEventListener('scroll', (event) => {
            // console.log(window.screenY)
            // console.log(window.scrollY)
            let scrollY = window.scrollY
            const maxScrollY = document.documentElement.scrollHeight - window.innerHeight;

            setY(scrollY)
            setMaxScrollY(maxScrollY)
            let dates = document.getElementsByName('date')
            let whiteLine = document.getElementById('white-line')
            let distanceFromTop = 0
            dates.forEach((date, i) => {
                if (whiteLine) {
                    let rect: any = date.getBoundingClientRect()
                    let whiteLineRect = whiteLine?.getBoundingClientRect()
                    if (i === 0) distanceFromTop = rect.top
                    console.log('line', whiteLineRect.bottom)
                    console.log(rect.bottom - (rect.height / 2))
                    if (rect.bottom - (rect.height / 2) < whiteLineRect.bottom) {
                        date.style.color = 'white '
                        date.style.fontWeight = 'medium '
                        //@ts-ignore
                        date.children.item(0).style.borderColor = 'white'
                        // let dateChildren = document.querySelectorAll('[name=')
                    }
                    else {
                        date.style.color = 'rgb(156 163 175 / var(--tw-text-opacity))'
                        //@ts-ignore
                        date.children.item(0).style.borderColor = 'gray'
                    }
                }

            })
        })
    }, [])


    return (
        <motion.div
            key='changelog'
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
            }}
            className=" min-h-screen w-full justify-center items-center pt-40 pb-24 relative !overflow-hidden bg-gradient-to-br from-transparent via-transparent to-indigo-500/10"
        >
            {/* <img src={CardBG} alt="" className="w-[2000px] h-[1200px] object-cover  absolute z-0  top-0   opacity-10" /> */}
            <div
                className="absolute inset-x-0 top-40   transform-gpu overflow-hidden blur-3xl sm:top-32"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-600/70 to-indigo-400/50 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <section className="relative z-40 max-w-screen-xl   px-4 h-full mx-auto ">


                <motion.div


                    className="relative  rounded-3xl ring-1 ring-gray-400/20 w-full bg-indigo-900/20  overflow-hidden">
                    <div className="flex relative justify-center items-center overflow-hidden py-10  w-full h-full">
                        <div
                            className="absolute inset-x-0 h-full z-10 transform-gpu overflow-hidden blur-3xl sm:top-0"
                            aria-hidden="true"
                        >
                            <div
                                className="relative  h-full w-full bg-gradient-to-tr from-indigo-600/50 to-indigo-400/50 opacity-70  "
                                style={{
                                    clipPath:
                                        'polygon(58% 14%, 93% 1%, 100% 88%, 72% 58%, 28% 86%, 0% 60%, 43% 29%)',
                                }}
                            />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-semibold">What's new?</h1>
                    </div>
                    <div className="flex items-center px-4 py-6 text-slate-400 font-light font-poppins  italic"><PiInfo size={20} className='mr-2' />
                        A changelog of the latest <span className="text-white font-medium px-1">Gravette</span> feature releases, updates and bug fixes
                    </div>
                </motion.div>


                <div className="flex sticky h-auto z-10 mt-20 max-w-3xl mx-auto justify-between items-center">
                    <div
                        className="absolute left-0 top-2 h-full"
                    >
                        <div className="h-full border
                         border-gray-500/30  
                        border-dashed absolute z-10 "></div>
                        <div id='white-line' className={`  border
                         border-white absolute z-20 
                        border-dashed` } style={{ height: `${y / maxScrollY * 100}%` }} ></div>
                    </div>

                    <div className="relative -ms-[3px] gap-8 flex flex-col w-full justify-between">
                        {changelogData.map((log, i) => {

                            return <div key={i} className="flex justify-between w-full">
                                {/* @ts-ignore */ }
                                <div name='date' key={i} className={classNames("flex h-fit items-center text-sm font-medium relative z-50", {

                                })}>
                                    <div className="rounded-full border border-gray-400 w-2 h-2 bg-indigo-950 "></div>
                                    &nbsp; {log.date}</div>
                                {log.version && <ChangelogCard {...log} />}
                            </div>
                        })}
                    </div>
                </div>
            </section>
        </motion.div>
    )
}

export default Changelog

