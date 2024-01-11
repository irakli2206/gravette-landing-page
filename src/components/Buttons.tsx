import classNames from 'classnames'
import '../index.css'
import AppIcon from './AppIcon'
import { ForwardRefComponent, HTMLMotionProps, MotionProps, motion } from 'framer-motion'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & MotionProps & {
    title: string
    size?: 'sm' | 'md' | 'lg' | 'xl'
    className?: string
    onClick: any,
    glowClassName?: string
}

export const Button = ({ title, size = 'md', className, onClick, ...props }: ButtonProps) => {
    return (
        <button onClick={onClick} className={classNames(`${className}  h-full  text-white bg-indigo-600 font-medium text-sm text-center transition rounded-md  mb-auto cursor-pointer pointer-events-auto hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`, {
            'px-5 py-1.5 ': size == 'sm',
            'px-6 py-2': size == 'md',
            'px-11 py-2': size == 'lg',
            'px-16 py-2.5': size == 'xl',
        })}  {...props} >
            {title}</button>
    )
}

export const TransparentButton = ({ title, size = 'md', className, glowClassName, onClick, ...props }: ButtonProps) => {
    console.log(props.disabled)
    return (
        <motion.button
            whileTap={{
                scale: props.disabled ? 1 : 0.95,
                transition: {
                    duration: 0
                }
            }}
            onClick={onClick} className={classNames(`${className}  bg-indigo-800/20 group relative duration-200 overflow-hidden h-full ring-1 ring-indigo-800  hover:ring-indigo-700 hover:bg-indigo-800/30 text-white font-medium text-sm text-center transition rounded-md  mb-auto cursor-pointer pointer-events-auto  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`, {
                'px-5 py-1.5 ': size == 'sm',
                'px-6 py-2': size == 'md',
                'px-11 py-2': size == 'lg',
                'px-16 py-2.5': size == 'xl',
                '!bg-gray-800 ring-0 !text-gray-600 cursor-default': props.disabled
            })}  {...props} >
            <div className={classNames(`${glowClassName} bg-transparent-button z-10 w-full h-24 absolute top-0 translate-y-10 duration-200 left-1/2 -translate-x-1/2 group-hover:translate-y-0`, {
                'hidden': props.disabled
            })}></div>
            {/* <div className="w-full h-full absolute top-0 left-0 opacity-0 duration-200 group-hover:opacity-100 group-hover:bg-gradient-to-t group-hover:from-indigo-900/25 group-hover:to-indigo-900/15"></div> */}
            <span className='z-50 relative'>{title}</span>
        </motion.button>
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