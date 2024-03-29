
import { FC, useRef } from 'react'
import classNames from 'classnames'
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdOutlinePhone } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { Field, FieldProps, Form, Formik } from 'formik';
import * as Yup from 'yup'
import '../../index.css'
import { TransparentButton } from '../Buttons';
import { IoWarning } from "react-icons/io5";
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { useSnackbar } from 'notistack';

export default function Contact() {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar()

    let contactData = [
        {
            icon: <HiOutlineBuildingOffice2 size={24} />,
            text: "4 Avalishvili Str, Tbilisi, Georgia"
        },
        // {
        //     icon: <MdOutlinePhone size={24} />,
        //     text: "+1 (555) 234-5678",
        //     link: "tel:+1 (555) 234-5678"
        // },
        {
            icon: <AiOutlineMail size={24} />,
            text: "support@gravette.dev",
            link: "support@gravette.dev"
        },
    ]

    const schema = Yup.object({
        firstName: Yup.string().required("Field required"),
        lastName: Yup.string(),
        email: Yup.string().email("Invalid email").required("Field required"),
        subject: Yup.string().required("Field required"),
        message: Yup.string().required("Field required")
    });

    const sendEmail = async ({ firstName, lastName, email, message }: any) => {
        var formData = {
            'from_name': firstName + " " + lastName,
            'email': email,
            'message': message,
        }


        await emailjs.send('service_tntt2hw', 'template_pv2ik2y', formData, 'uW_Ic19sJ1BibkXJM')
            .then((result) => {
                enqueueSnackbar("Message sent successfully!", { variant: "success", anchorOrigin: { horizontal: 'right', vertical: "bottom" } })
            }, (error) => {
                enqueueSnackbar("Oops, something went wrong.", { variant: "error", anchorOrigin: { horizontal: 'right', vertical: "bottom" } })
            });
    };

    return (
        <div className="min-h-screen flex ">
            <div className='flex flex-1 flex-col lg:flex-row items-center '>
                <div className="flex-1 h-full py-24 lg:py-40 px-8 bg-gray-900 relative ">
                    <h1 className='font-bold text-3xl pt-10 z-50 relative'>Get in touch</h1>
                    <p className='text-lg text-gray-300 mt-6 z-50 relative'>Feel free to reach out with any questions or inquiries; we're here to help and look forward to connecting with you!</p>
                    <div className="flex flex-col gap-4 mt-10 z-50 relative">
                        {contactData.map((contact, i) => {
                            let clickable = i !== 0
                            let isMail = contact.link?.includes('@')
                            return (
                                <Link to={(isMail &&'mailto:') + contact.link!} key={i} className={classNames('flex w-fit gap-4 relative z-90 duration-200  text-gray-300', {
                                    "cursor-pointer hover:text-white": clickable
                                })}>
                                    {contact.icon}
                                    <p className=' '>{contact.text}</p>
                                </Link>
                            )
                        })}
                    </div>
                    <div className='w-full h-full absolute left-0 top-0 overflow-hidden  ring-1  ring-gray-800'>
                        <div className="contact-bg-grid w-full h-full absolute left-0 z-20 -top-2"></div>
                        <div className="contact-bg-cloud z-20 w-full h-full">
                            <div className="contact-bg-cloud-content w-full h-full"></div>
                        </div>
                    </div>
                </div>

                <div className="flex-1 h-full w-full py-24 lg:py-40 px-8 bg-gray-900 ">
                    <Formik

                        validationSchema={schema}
                        initialValues={{
                            firstName: "",
                            lastName: "",
                            email: "",
                            subject: "",
                            message: ""
                        }}
                        onSubmit={async (values, { setSubmitting, resetForm }) => {
                            setSubmitting(true)
                            await sendEmail(values).finally(() => {
                                setSubmitting(false)
                                resetForm()
                            })

                            // sendEmail(values)
                        }}
                    >
                        {({ isValidating, isSubmitting }) => (
                            <Form className='flex flex-col gap-6 '>
                                <div className="flex gap-8 w-full">
                                    <Field name="firstName"
                                        label="First Name"
                                        className="block flex-1 outline-none w-full bg-white/5 rounded-md border-0 px-3.5 py-2 text-whiteshadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        component={
                                            FormInput
                                        } />
                                    <Field name="lastName"
                                        label="Last Name"
                                        placeholder='Optional'
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

                                <TransparentButton disabled={isSubmitting} onClick={() => { }} title='Send Message' type="submit" className='mt-2' />
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
            <label htmlFor={field.name} className="block text-sm font-semibold leading-6 ">
                {/* @ts-ignore */}
                {props.label}

            </label>
            <div className="mt-2.5">
                <input
                    type="text"
                    id={field.name}
                    autoComplete="given-name"
                    {...field}
                    {...props}
                    //@ts-ignore
                    className={classNames(`${props.className} `, {
                        "ring-red-700 ring-2": form.errors[field.name] && form.touched[field.name]
                    })}
                />
                {form.errors[field.name] && form.touched[field.name] &&
                    <div className='flex gap-2 items-center mt-2 font-semibold text-red-700'>
                        <IoWarning size={20} />
                        <span className='text-sm'>
                            {form.errors[field.name] as string}
                        </span>
                    </div>
                }

            </div>
        </div>
    )

}