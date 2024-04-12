import classNames from 'classnames'
import { Variants, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

type Props = {
    author: string
    testimonial: string
    socialsLink?: string
    logo?: string
    isMain?: boolean
}

const Testimonial = ({ author, testimonial, logo, socialsLink, isMain = false }: Props) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false)

    const handleMouseMove = (event: any) => {
        if (event.currentTarget) {
            const rect = event.currentTarget.getBoundingClientRect()
            const x = event.clientX - rect.left; // Calculate x relative to the element's left edge
            const y = event.clientY - rect.top;
            console.log('x:', x, 'y:', y)

            setPosition({ x, y });

            if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        }


    };

    const handleMouseLeave = (event: any) => {
        setIsHovering(false)
    }

    console.log(isHovering)

    const item = {
        hidden: { opacity: 0, scale: 0.97 },
        show: { opacity: 1, scale:1, transition: { delay: Math.random() * 0.5, type: 'spring', velocity: 2, bounce: 0} },
    }

    return (
        <>


            <motion.div
                variants={item}
                key={author} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className={classNames('relative rounded-2xl  overflow-hidden h-fit bg-indigo-500/10 flex flex-col drop-shadow-[0px_0px_10px_rgba(0,0,0,0.4)]  border border-indigo-700/30 ', {
                    'col-span-2 row-span-2': isMain
                })} >
                <div key={author} className={classNames("glow w-[800px] h-[800px] transition-opacity duration-300  absolute z-0", {
                    "opacity-0 ": isHovering === false
                })} style={{ left: `${position.x}px`, top: `${position.y}px`, }}></div>

                <div className="z-30 relative">
                    <p className={classNames('text-lg p-6', {
                        'font-medium text-xl ': isMain,
                        'p-12': isMain
                    })}>{testimonial}</p>
                    <div className="w-full h-[1px] bg-indigo-700/30"></div>
                    <div className={classNames('py-3 px-6 text-md text-gray-200 flex justify-between items-center', {
                        'text-lg': isMain,
                    })}>
                        <div>
                            <h2>{author}</h2>
                            {socialsLink && <a href='https://twitter.com/Sulkalmakh' className='text-gray-400  duration-100 hover:text-gray-300'>{socialsLink}</a>}
                        </div>
                        {logo && <Link to='https://ancestralwhispers.org' target="_blank" className='' rel="noopener noreferrer" >
                            <img alt='' src={logo} className='h-12 w-12 hover:drop-shadow-glow duration-100' />
                        </Link>}
                    </div>
                </div>
            </motion.div>

            <style>
                {`
                .glow {
                    position: absolute;
 
                     border-radius: 50%;
                    pointer-events: none;
                    background: radial-gradient(circle, 
                        rgba(44, 47, 111, 0.9), 
                        rgba(44, 47, 111, 0.8), 
                        rgba(44, 47, 111, 0.7), 
                        rgba(44, 47, 111, 0.6), 
                        rgba(44, 47, 111, 0.5), 
                        rgba(44, 47, 111, 0.4), 
                        rgba(44, 47, 111, 0.3), 
                        rgba(44, 47, 111, 0.2), 
                        rgba(44, 47, 111, 0.1), 
                        rgba(44, 47, 111, 0), 
                        rgba(44, 47, 111, 0), 
                        rgba(44, 47, 111, 0), 
                        rgba(44, 47, 111, 0), 
                        rgba(44, 47, 111, 0), 
                        rgba(44, 47, 111, 0)
                      );
                    transform: translate(-50%, -50%);
                    z-index: 1;
                    pointer-events: none;
                  }
                `}
            </style>
        </>
    )
}

export default Testimonial