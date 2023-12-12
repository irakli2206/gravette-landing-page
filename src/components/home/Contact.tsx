
import { FC, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import classNames from 'classnames'
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdOutlinePhone } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { Field, FieldProps, Form, Formik } from 'formik';
import * as Yup from 'yup'
import '../../index.css'
import { Button, TransparentButton } from '../Buttons';

export default function Contact() {
    const [agreed, setAgreed] = useState(false)

    let contactData = [
        {
            icon: <HiOutlineBuildingOffice2 size={24} />,
            text: "545 Mavis Island Chicago, IL 99191"
        },
        {
            icon: <MdOutlinePhone size={24} />,
            text: "+1 (555) 234-5678"
        },
        {
            icon: <AiOutlineMail size={24} />,
            text: "hello@example.com"
        },
    ]

    const schema = Yup.object({
        firstName: Yup.string().required(),
        lastName: Yup.string().required(),
        email: Yup.string().email(),
        subject: Yup.string(),
        message: Yup.date().default(() => new Date()),
    });

    return (
        <div className="min-h-screen flex ">
            <div className='flex flex-1 flex-col lg:flex-row items-center '>
                <div className="flex-1 h-full py-24 lg:py-40 px-8 bg-gray-900 relative ">
                    <h1 className='font-bold text-3xl pt-10'>Get in touch</h1>
                    <p className='text-lg text-gray-300 mt-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At nulla consequatur doloremque itaque illum illo molestiae numquam accusantium aut, explicabo, omnis perspiciatis molestias? Quae, soluta!</p>
                    <div className="flex flex-col gap-4 mt-10">
                        {contactData.map(contact => {

                            return (
                                <div className='flex gap-4 text-gray-300'>
                                    {contact.icon}
                                    <p className=' '>{contact.text}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className='w-full h-full absolute left-0 top-0 overflow-hidden  ring-1  ring-gray-800'>
                        <div className="contact-bg-grid w-full h-full absolute left-0 z-20 -top-2"></div>
                        <div className="contact-bg-cloud z-50 w-full h-full">
                            <div className="contact-bg-cloud-content w-full h-full"></div>
                        </div>
                    </div>
                </div>

                <div className="flex-1 h-full py-24 lg:py-40 px-8 bg-gray-900 ">
                    <Formik
                        validationSchema={schema}
                        initialValues={{
                            firstName: "",
                            lastName: "",
                            email: "",
                            subject: "",
                            message: ""
                        }}
                        onSubmit={(values, { }) => {
                            console.log(values)
                        }}
                    >
                        {({ values, errors }) => (
                            <Form className='flex flex-col gap-6 pt-10'>
                                <div className="flex gap-8 w-full">
                                    <Field name="firstName"
                                        label="First Name"
                                        className="block flex-1 outline-none w-full bg-white/5 rounded-md border-0 px-3.5 py-2 text-whiteshadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        component={
                                            FormInput
                                        } />
                                    <Field name="lastName"
                                        label="Last Name"
                                        className="block flex-1 outline-none w-full bg-white/5 rounded-md border-0 px-3.5 py-2 text-whiteshadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        component={
                                            FormInput
                                        } />

                                </div>
                                <Field name="email"
                                    label="Email"
                                    className="block flex-1 outline-none w-full bg-white/5 rounded-md border-0 px-3.5 py-2 text-whiteshadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    component={
                                        FormInput
                                    } />
                                <Field name="subject"
                                    label="Subject"
                                    className="block flex-1 outline-none w-full bg-white/5 rounded-md border-0 px-3.5 py-2 text-whiteshadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    component={
                                        FormInput
                                    } />
                                <Field name="message"
                                    label="Message"
                                    className="block flex-1 outline-none w-full bg-white/5 rounded-md border-0 px-3.5 py-2 text-whiteshadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    component={
                                        FormInput
                                    } />

                                <TransparentButton onClick={() => {}} title='Send Message' type="submit" className='mt-2'/>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}


const FormInput: FC<FieldProps> = ({
    field, // { name, value, onChange, onBlur }
    form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props
}) => {

    return (
        <div className='w-full'>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 ">
                {/* @ts-ignore */}
                {props.label}
            </label>
            <div className="mt-2.5">
                <input
                    type="text"
                    id="first-name"
                    autoComplete="given-name"
                    {...field}
                    {...props}
                />
            </div>
        </div>
    )

}