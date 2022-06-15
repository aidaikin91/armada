import React from 'react'
import Banner from '../../components/Banner/Banner'
import SectionFive from '../../components/SectionFive/SectionFive'
import SectionFour from '../../components/SectionFour/SectionFour'
import SectionOne from '../../components/SectionOne/SectionOne'
import SectionSix from '../../components/SectionSix/SectionSix'
import SectionThree from '../../components/SectionThree/SectionThree'
import SectionTwo from '../../components/SectionTwo/SectionTwo'
import './Home.css'

export default function Home() {
  return (
    <div>
        <Banner/>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
        <SectionFive/>
        <SectionSix/>
    </div>
  )
}
