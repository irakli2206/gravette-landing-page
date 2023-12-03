import classNames from 'classnames'
import React from 'react'

type Props = {
    author: string
    testimonial: string
    isMain?: boolean
}

const Testimonial = ({ author, testimonial, isMain = false }: Props) => {
    return (
        <div className={classNames('rounded-lg h-fit bg-gray-800 flex flex-col border border-gray-700', {
            'col-span-2': isMain
        })}>
            <p className={classNames('text-lg p-6', {
                'font-medium text-xl ': isMain
            })}>{testimonial}</p>
            <div className="w-full h-[1px] bg-gray-700"></div>
            <div className={classNames('py-3 px-6 text-md text-gray-200 ', {
                'text-lg': isMain
            })}>
                <h2>{author}</h2>
            </div>
        </div>
    )
}

export default Testimonial