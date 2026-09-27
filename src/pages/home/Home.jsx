import React from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/heroSection/HeroSection'
import Service from '../../components/services/Service'

const Home = () => {
  return (
    <Layout>
      <HeroSection  />
      <Service />
    </Layout>
  )
}

export default Home