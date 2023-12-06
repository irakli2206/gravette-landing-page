import { Transition, Dialog } from '@headlessui/react'
import { Fragment } from 'react'
import { Button } from '../Buttons'
import { GiReceiveMoney } from "react-icons/gi";

type Props = {
    isOpen: boolean
    onClose: () => void
}


const OfferModal = ({ isOpen, onClose }: Props) => {
    return (
        <Transition.Root show={isOpen} as={Fragment} >
            <Dialog as="div" className="relative z-[9999]"
                // initialFocus={cancelButtonRef}

                onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg  bg-gray-800    text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                {/* <div className="absolute w-full h-full z-20 bg-gradient-to-r from-transparent to-gray-800  to-30%  "></div>
                                <div className="absolute w-full h-full z-10 bg-[url('src/assets/autumn.jpg')] blur-[2px] brightness-50 saturate-50"></div> */}
                                <div className="  px-4 pb-6 pt-8 sm:p-8 sm:pb-6 z-30 relative ">


                                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                        <Dialog.Title as="h3" className="text-2xl flex gap-3 justify-center items-center font-semibold text-center leading-6 text-white">
                                            <h1>Referral Offer</h1>
                                            <div className="bg-indigo-300 p-2 rounded-full">
                                                <GiReceiveMoney name='leaf' className='text-indigo-600' />
                                            </div>
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <p className="text-md text-gray-200">
                                                Enjoy a rewarding 15% commission! Simply refer us to a customer by sending an email with their details. Once they're on board, you earn your share of the agreed-upon sum. It's that easy – spreading the word has never been more lucrative!
                                            </p>
                                        </div>
                                    </div>

                                </div>
                                <div className="  px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 z-30 relative">

                                    <Button onClick={onClose} title='Message Us' className='mx-auto' size='md' />
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default OfferModal