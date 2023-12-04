import classNames from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
    author: string
    testimonial: string
    socialsLink?: string
    logo?: string
    isMain?: boolean
}

const Testimonial = ({ author, testimonial, logo, socialsLink, isMain = false }: Props) => {
    console.log(logo)
    return (
        <div className={classNames('rounded-2xl h-fit bg-gray-800 flex flex-col border drop-shadow-[0px_0px_10px_rgba(0,0,0,0.4)] border-gray-700', {
            'col-span-2 row-span-2': isMain
        })}>
            <p className={classNames('text-lg p-6', {
                'font-medium text-xl ': isMain,
                'p-12': isMain
            })}>{testimonial}</p>
            <div className="w-full h-[1px] bg-gray-700"></div>
            <div className={classNames('py-3 px-6 text-md text-gray-200 flex justify-between items-center', {
                'text-lg': isMain,
            })}>
                <div>
                    <h2>{author}</h2>
                    {socialsLink && <h3 className='text-gray-400'>{socialsLink}</h3>}
                </div>
                {logo && <Link to='https://ancestralwhispers.org' target="_blank" rel="noopener noreferrer" >
                    <img src={logo} className='h-12 w-12' />
                </Link>}
            </div>
        </div>
    )
}

export default Testimonial