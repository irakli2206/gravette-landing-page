import classNames from 'classnames'

import AppIcon from './AppIcon'

type ButtonProps = {
    title: string
    size?: 'sm' | 'md' | 'lg' | 'xl'
    className?: string
    onClick: any
}

export const Button = ({ title, size = 'md', className, onClick }: ButtonProps) => {
    return (
        <div onClick={onClick} className={classNames(`${className}  h-full shadow-button hover:shadow-button-hover text-white bg-indigo-600 font-medium text-sm text-center transition rounded-lg  mb-auto cursor-pointer pointer-events-auto hover:bg-indigo-500`, {
            'px-5 py-1.5 ': size == 'sm',
            'px-6 py-2': size == 'md',
            'px-11 py-2': size == 'lg',
            'px-14 py-2.5': size == 'xl',
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