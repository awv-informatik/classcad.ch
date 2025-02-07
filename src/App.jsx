import React from 'react'
import {
  Hero,
  Header,
  Brand,
  Link,
  Spacer,
  Main,
  Content,
  Sidebar,
  Caption,
  Video,
  ProductWrapper,
  Section,
} from './Layout'
import { Downloads } from './components/downloads'
import { Footer } from './components/footer'

export default function App() {
  const socialLinks = [
    { name: 'Discord', url: 'https://discord.gg/MEbR7xyPMS' },
    { name: 'Twitter', url: 'https://twitter.com/buerli_io' },
    { name: 'Github', url: 'https://github.com/awv-informatik' },
  ]
  const productLinks = [
    { name: 'Buerli', url: 'https://buerli.io', highlight: false },
    { name: 'Buerligons', url: 'https://dev.buerligons.io', highlight: false },
    { name: 'ClassCAD', url: 'http://classcad.ch', highlight: false },
  ]

  return (
    <>
      <Hero>
        <Header>
          <Brand>
            <img style={{ position: 'relative', top: -2.5, height: 26 }} src='favicon.svg' alt='AWV Informatik AG' />
            <Link href='https://awv-informatik.ch/'>
              AWV —<br /> Informatik AG
            </Link>
          </Brand>
          <Spacer />
          {socialLinks.map(({ name, url }) => (
            <Link key={name} href={url}>
              {name}
              <br />
              &nbsp;
            </Link>
          ))}
        </Header>
        <Main>
          <Sidebar />
          <Content>
            <Caption floating>
              CLASS <br /> <span style={{ paddingLeft: '1.85em' }}>CAD</span>
              <span style={{ position: 'relative', display: 'inline-block', top: '0.3em', fontWeight: 200 }}>+</span>
            </Caption>
            <Video autoPlay muted loop>
              <source src='#' type='video/mp4' />
            </Video>
            <ProductWrapper></ProductWrapper>
          </Content>
          <Sidebar />
        </Main>
      </Hero>

      <Section>
        <Sidebar />
        <Content className='margin-top'>
          <Caption sub>DOWNLOADS —</Caption>
          <Downloads />
        </Content>
        <Sidebar />
      </Section>
      <Footer />
    </>
  )
}
