import classNames from 'classnames'
import React from 'react'
import AppIcon from './AppIcon'

type ButtonProps = {
    title: string
    size?: 'sm' | 'md' | 'lg' | 'xl'
    className?: string
    onClick: any
}

export const Button = ({ title, size = 'md', className, onClick }: ButtonProps) => {
    return (
        <div onClick={onClick} className={classNames(`${className} cursor-pointer transition rounded-full shadow-button bg-indigo-800 hover:bg-indigo-700 text-sm font-medium text-white  hover:shadow-button-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`, {
            'px-6 py-2 ': size == 'sm',
            'px-6 py-2.5': size == 'md',
            'px-11 py-3': size == 'lg',
            'px-14 py-3': size == 'xl',
        })}>
            {title}</div>
    )
}

type ArrowButtonProps = {
    title: string
    // size?: 'sm' | 'md' | 'lg' | 'xl'
}

export const ArrowButton = ({ title }: ArrowButtonProps) => {
    return (
        <div className={classNames('transition text-sm text-white font-medium flex gap-1.5 items-center group ', {
            // 'px-4 py-1.5': size == 'sm',
            // 'px-6 py-2.5': size == 'md',
            // 'px-9 py-3': size == 'lg',
            // 'px-12 py-3.5': size == 'xl',
        })}>
            {title}
            <AppIcon name='arrow-right' className='transition group-hover:translate-x-0.5' />
        </div>
    )
}