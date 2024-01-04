import { motion } from 'framer-motion'
import ContactSection from '../components/home/Contact'
import { ScrollRestoration } from 'react-router-dom'

const Contact = () => {
  return (
    <motion.div
      key='contact'
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,

      }}
      exit={{
        opacity: 0,

      }}
    >
      <ContactSection />
    </motion.div>
  )
}

export default Contact