import { Inter } from 'next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faRocket, faShieldAlt, faChartLine, faUsers, faGraduationCap, faChalkboardTeacher, faBullseye, faDatabase } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })
import ClientMarquee from './components/ClientMarquee';
import Sections from './components/Sections'

export const metadata = {
  title: 'RDAS Solutions Limited - Advanced Database Solutions',
  description: 'Empowering businesses through innovative database solutions.',
}



export default function Home() {
  return (
    // <div className={`${inter.className} bg-white`}>
    <div className={`bg-white`}>
      {/* Hero Section */}
      <Sections />
    </div >
  )
}