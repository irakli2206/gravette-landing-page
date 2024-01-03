import { motion } from "framer-motion"
import { PiInfo } from "react-icons/pi";
import ChangelogCard from "../components/changelog/ChangelogCard";
import classNames from "classnames";
import CardBG from '../assets/card-bg.svg'

const Changelog = () => {
    const changelogData = [
        {
            version: "Version 1.3",
            date: "Nov 25, 2023",
            improvements: [
                "Added a new page with changelog"
            ],
            bugfixes: [
                "Fixed mobile responsiveness issue"
            ],
            imageSrc: CardBG
        },
        {
            version: "Version 1.2",
            date: "Feb 12, 2023",
            improvements: [
                "Added a backend developer",
                "Now working together with AURIGNACIAN LTD",
            ],
            bugfixes: [
                "Fixed mobile responsiveness issue"
            ]
        },
    ]

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
            className=" min-h-screen w-full justify-center items-center pt-48 pb-24 relative !overflow-hidden bg-gradient-to-br from-transparent via-transparent to-indigo-500/10"
        >
            {/* <img src={CardBG} alt="" className="w-[2000px] h-[1200px] object-cover  absolute z-0  top-0   opacity-10" /> */}
            <section className="relative z-40 max-w-screen-xl   px-4 h-full mx-auto ">


                <div className="relative rounded-3xl ring-1 ring-gray-400/20 w-full bg-indigo-900/30 backdrop-brightness-75 backdrop-blur-xl overflow-hidden">
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
                </div>


                <div className="flex relative z-10 mt-20 max-w-5xl mx-auto justify-between items-center">
                    <div
                        className="absolute left-0 top-2 h-full border border-gray-500/30 border-dashed "
                    />

                    <div className="relative -ms-[3px] gap-8 flex flex-col w-full justify-between">
                        {changelogData.map((log, i) => {

                            return <div className="flex justify-between w-full">
                                <div className={classNames("text-sm font-medium", {
                                    'text-gray-400 !font-light': i !== 0
                                })}>○ &nbsp; {log.date}</div>
                                <ChangelogCard {...log} />
                            </div>
                        })}
                    </div>
                </div>
            </section>
        </motion.div>
    )
}

export default Changelog