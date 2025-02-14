import React from 'react'
import { Suspense } from 'react'
import { Downloads } from './components/downloads'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { Section } from './components/section'
import { About } from './components/about'
import { Features } from './components/features'

import {
  Hero,
  Header as _Header,
  Brand,
  Link,
  Spacer,
  Main,
  Content,
  Sidebar,
  Caption,
  Video,
  Description,
  ProductWrapper,
  Section as _Section,
} from './Layout'

export default function App() {
  return (
    <>
      <Header>
        <Hero>
          <Main style={{ position: "relative", top: 50 }}>
            <Sidebar />
            <Content>
              <Caption floating>
                CLASS <br /> <span style={{ paddingLeft: '1.3em' }}>CAD</span>
                <span style={{ position: 'relative', display: 'inline-block', top: '0.3em', fontWeight: 200 }}>+</span>               
              </Caption>
              <Video autoPlay muted loop>
                <source src='intro.mp4' type='video/mp4' />
              </Video>
              <ProductWrapper>
                <Description width='75%'>
                At AWV Informatik, we believe that even a small, dedicated team can build world-class software. With over 25 years of expertise in system integration, we’ve developed ClassCAD—a modern, API-driven CAD system that runs everywhere.
                </Description>
              </ProductWrapper>
            </Content>
            <Sidebar />
          </Main>
        </Hero>
      </Header>

      <Section id='about'>
        <About />
      </Section>
      <Section id='features'>
        <Features />
      </Section>
      <Section id='downloads'>
        <div className='overflow-hidden bg-white py-24 sm:py-32'>
          <div className='mx-auto'>
            <p className='text-base/7 font-semibold text-indigo-600'>Downloads</p>
            <h1 className='mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl'>
              ClassCAD for platforms and systems
            </h1>
            <p className='mt-6 text-xl/8 text-balance text-gray-700'>
              Here you can find the latest versions of ClassCAD for all supported platforms and systems.
            </p>
            <Suspense fallback={null}>
              <Downloads />
            </Suspense>
          </div>
        </div>
      </Section>
      <Section id='links'>
        <Footer />
      </Section>
    </>
  )
}
