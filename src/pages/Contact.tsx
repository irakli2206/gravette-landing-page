import ContactSection from '../components/home/Contact'
import { ScrollRestoration } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <ScrollRestoration />
      <ContactSection />
    </div>
  )
}

export default Contact