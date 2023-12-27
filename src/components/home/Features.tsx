
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const Features = () => {
    const features = [
        {
            name: 'Future-Ready Technology',
            description:
                `Step into the future with web solutions that not only meet today's standards but anticipate tomorrow's trends.`,
            icon: CloudArrowUpIcon,
        },
        {
            name: 'Revolutionary Performance',
            description: 'Revolutionize your online performance – expect nothing less than lightning-fast speed and unparalleled efficiency.',
            icon: LockClosedIcon,
        },
        {
            name: 'AI-Powered Solutions',
            description: 'Harness the power of artificial intelligence for intelligent, personalized, and smooth website functionalities.',
            icon: ServerIcon,
        },
    ]


    return (
        <div className="features overflow-hidden py-24 ">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-md font-medium text-indigo-400">Why Us</h2>
                            <p className="mt-2 text-3xl font-semibold tracking-tight  sm:text-4xl">Flawless efficiency</p>
                            <p className="mt-6 text-lg leading-8 text-gray-300">
                                Discover the power of precision, innovation, and visual brilliance
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className="inline font-semibold text-white">
                                            <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                                            {feature.name}.
                                        </dt>{' '}
                                        <dd className="inline">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <img
                        src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                        alt="Product screenshot"
                        className={`w-[48rem] max-w-none  rounded-xl shadow-xl border border-gray-400/10  sm:w-[57rem] md:-ml-4 lg:-ml-0
                        z-50`}
                        width={2432}
                        height={1442}
                    />
                </div>
            </div>
            <style>
                {`
                  .features img {
                    -webkit-mask: linear-gradient(90deg, white 20%, #0000 80%, #0000 100%);
                    mask: linear-gradient(90deg, white 20%, #0000 80%, #0000 100%);
                  }
                `}
            </style>
        </div>
    )
}

export default Features