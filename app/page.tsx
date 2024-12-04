// import { Inter } from 'next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
// const inter = Inter({ subsets: ['latin'] })
import Sections from '@/components/Sections'

export const metadata = {
  title: 'RDAS Solutions Limited - Advanced Data Solutions',
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