import React, { useState } from 'react'
import { FiDisc, FiGitMerge, FiLayers, FiZap, FiPackage } from 'react-icons/fi'

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
  Button,
  ButtonGroup,
  Footer,
  ProductWrapper,
  Section,
  Grid,
  Feature,
  Colums,
  Card,
} from './Layout'

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { PaperClipIcon } from '@heroicons/react/20/solid'
import Markdown from 'react-markdown'
import { suspend } from 'suspend-react'

const markdownContent = `
# Titre 1
>Ceci est une **zone en retrait**.
- Liste1
- Liste 2
- Liste 3`

const navigation = {
  solutions: [
    { name: 'ClassCAD', href: 'https://classcad.ch' },
    { name: 'Buerli.io', href: 'https://buerli.io' },
    { name: 'Buerligons', href: 'https://dev.buerligons.io' },
  ],
  support: [
    { name: 'Submit ticket', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
  ],
  legal: [
    { name: 'Terms of service', href: '#' },
    { name: 'Privacy policy', href: '#' },
    { name: 'License', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props) => (
        <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
          <path
            fillRule='evenodd'
            d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
            clipRule='evenodd'
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props) => (
        <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
          <path
            fillRule='evenodd'
            d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
            clipRule='evenodd'
          />
        </svg>
      ),
    },
    {
      name: 'X',
      href: '#',
      icon: (props) => (
        <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
          <path d='M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z' />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (props) => (
        <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
          <path
            fillRule='evenodd'
            d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
            clipRule='evenodd'
          />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (props) => (
        <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
          <path
            fillRule='evenodd'
            d='M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z'
            clipRule='evenodd'
          />
        </svg>
      ),
    },
  ],
}

const statuses = {
  valid: 'text-green-700 bg-green-50 ring-green-600/20',
  'In progress': 'text-gray-600 bg-gray-50 ring-gray-500/10',
  dev: 'text-yellow-800 bg-yellow-50 ring-yellow-600/20',
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function getSelectionText() {
  let text = ''
  if (window.getSelection) {
    text = window.getSelection().toString()
  } else if (document.selection && document.selection.type != 'Control') {
    text = document.selection.createRange().text
  }
  // remove leading and trailing whitespaces
  text = text.replace(/^\s+|\s+$/g, '')
  return text
}

function Description({ version }) {
  const [clicked, click] = useState(false)
  return (
    <div
      onClick={() => {
        const selection = getSelectionText()
        console.log(selection)
        if (selection === '') click(!clicked)
      }}
      style={{ cursor: 'pointer', maxHeight: clicked ? 'fit-content' : 256 }}
      className={`relative overflow-hidden prose !max-w-none w-full mt-5 rounded-lg border border-gray-100 p-5`}>
      <Markdown
        components={{
          pre(props) {
            const { node, ...rest } = props
            return <pre style={{ background: 'transparent' }} {...rest} />
          },
          code(props) {
            const { node, ...rest } = props
            return <code style={{ color: 'black' }} {...rest} />
          },
        }}>
        {version.description}
      </Markdown>
      <div
        style={{ visibility: clicked ? 'hidden' : 'visible' }}
        className='absolute bottom-0 left-0 w-full h-40 bg-linear-to-t from-white to-white-0%'
      />
    </div>
  )
}

function Downloads() {
  const data = suspend(async () => {
    const data = await fetch('https://awvstatic.com/classcad/download/metadata.json', { cache: 'no-cache' }).then(
      (res) => res.json(),
    )
    const versions = Object.values(data.versions).sort((a, b) => b.timestamp - a.timestamp)
    versions[0].originalName = versions[0].name
    versions[0].name = 'latest'
    const platforms = {}
    for (let version of versions) {
      const date = new Date(version.timestamp)
      version.date = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
      version.files = (await fetch(version.url).then((res) => res.json())).files
      for (let file of version.files) {
        let { platform, arch, type, url } = file
        if (!platforms[platform]) platforms[platform] = { arch: [] }
        if (arch) {
          if (!platforms[platform].arch.includes(arch)) platforms[platform].arch.push(arch)
        }
        if (type === 'markdown') {
          const description = await fetch(url).then((res) => res.text())
          file.description = description
          // strip first empty line from description
          file.description = file.description.replace(/^\s*\n/m, '')
        }
      }
    }
    return { versions, platforms }
  }, ['meta'])

  const tags = {}
  data.versions.forEach((version) => {
    if (!tags[version.quality]) tags[version.quality] = []
    const tag = tags[version.quality]
    tag.push(version)
  })

  const [tag, setTag] = React.useState(Object.keys(tags)[0])
  const versions = tags[tag]
  const platforms = data.platforms

  const [vers, setVersion] = React.useState(versions[0].name)
  const [plat, setPlatform] = React.useState(Object.keys(platforms)[0])
  const [arch, setArch] = React.useState(platforms[plat].arch[0])

  const version = versions.find((v) => v.name === vers)
  const files = version.files.filter((f) => f.platform === plat && f.arch === arch)
  const descriptions = files.filter((f) => f.description)

  return (
    <>
      <div className='mt-10 grid grid-cols-4 gap-x-6'>
        <div className='sm:col-span-1'>
          <label htmlFor='tag' className='block text-sm/6 font-medium text-gray-900'>
            Tag
          </label>
          <div className='mt-2 grid grid-cols-1'>
            <select
              id='tag'
              name='tag'
              autoComplete='tag-name'
              className='col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
              onChange={(e) => (setTag(e.target.value), setArch(tags[e.target.value].arch[0]))}>
              {Object.keys(tags).map((tag) => (
                <option key={tag}>{tag}</option>
              ))}
            </select>
            <ChevronDownIcon
              aria-hidden='true'
              className='pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4'
            />
          </div>
        </div>

        <div className='sm:col-span-1'>
          <label htmlFor='version' className='block text-sm/6 font-medium text-gray-900'>
            Version
          </label>
          <div className='mt-2 grid grid-cols-1'>
            <select
              id='version'
              name='v'
              autoComplete='version-name'
              className='col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
              onChange={(e) => setVersion(e.target.value)}>
              {versions.map((version) => (
                <option key={version.name}>{version.name}</option>
              ))}
            </select>
            <ChevronDownIcon
              aria-hidden='true'
              className='pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4'
            />
          </div>
        </div>

        <div className='sm:col-span-1'>
          <label htmlFor='platform' className='block text-sm/6 font-medium text-gray-900'>
            Platform
          </label>
          <div className='mt-2 grid grid-cols-1'>
            <select
              id='platform'
              name='platform'
              autoComplete='platform-name'
              className='col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
              onChange={(e) => (setPlatform(e.target.value), setArch(platforms[e.target.value].arch[0]))}>
              {Object.keys(platforms).map((platform) => (
                <option key={platform}>{platform}</option>
              ))}
            </select>
            <ChevronDownIcon
              aria-hidden='true'
              className='pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4'
            />
          </div>
        </div>

        {platforms[plat].arch.length > 0 && (
          <div className='sm:col-span-1'>
            <label htmlFor='arch' className='block text-sm/6 font-medium text-gray-900'>
              Architecture
            </label>
            <div className='mt-2 grid grid-cols-1'>
              <select
                id='arch'
                name='arch'
                autoComplete='arch-name'
                className='col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
                onChange={(e) => setArch(e.target.value)}>
                {platforms[plat].arch.map((arch) => (
                  <option key={arch}>{arch}</option>
                ))}
              </select>
              <ChevronDownIcon
                aria-hidden='true'
                className='pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4'
              />
            </div>
          </div>
        )}
      </div>

      <div className='mt-10 border-t border-b py-5 border-gray-100'>
        <div className='px-4 sm:px-0'>
          <div className='flex items-start gap-x-3'>
            <h3 className='text-base/7 font-semibold text-gray-900'>{version.originalName || version.name}</h3>
            <p
              className={classNames(
                statuses['valid'],
                'mt-0.5 rounded-md px-1.5 py-0.5 text-xs font-medium whitespace-nowrap ring-1 ring-inset',
              )}>
              valid
            </p>
          </div>

          <div className='mt-1 flex items-center gap-x-2 text-xs/5 text-gray-500'>
            <p className='whitespace-nowrap'>
              Valid until <time dateTime={version.date}>{version.date}</time>
            </p>
            <svg viewBox='0 0 2 2' className='size-0.5 fill-current'>
              <circle r={1} cx={1} cy={1} />
            </svg>
            <p className='truncate'>Path {version.path}</p>
          </div>

          {descriptions.map((description) => (
            <Description key={description} version={description} />
          ))}
        </div>
      </div>

      <ul role='list' className='divide-y divide-gray-100'>
        {files.map((file) => (
          <li key={file.md5} className='flex items-center justify-between gap-x-6 py-5'>
            <div className='min-w-0'>
              <div className='flex items-start gap-x-3'>
                <p className='text-sm/6 font-semibold text-gray-900'>{file.name}</p>
                <p
                  className={classNames(
                    statuses[version.quality],
                    'mt-0.5 rounded-md px-1.5 py-0.5 text-xs font-medium whitespace-nowrap ring-1 ring-inset',
                  )}>
                  {version.quality}
                </p>
              </div>
              <div className='mt-1 flex items-center gap-x-2 text-xs/5 text-gray-500'>
                {file.type && (
                  <>
                    <p className='truncate'>Type {file.type}</p>
                    <svg viewBox='0 0 2 2' className='size-0.5 fill-current'>
                      <circle r={1} cx={1} cy={1} />
                    </svg>
                  </>
                )}
                <p className='truncate'>Toolset {file.toolset}</p>
                <svg viewBox='0 0 2 2' className='size-0.5 fill-current'>
                  <circle r={1} cx={1} cy={1} />
                </svg>
                <p className='truncate'>MD5 {file.md5}</p>
              </div>
            </div>
            <div className='flex flex-none items-center gap-x-4'>
              <a
                href={file.url}
                className='hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:block'>
                Download<span className='sr-only'>, {version.name}</span>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

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
      <Footer></Footer>

      <Section>
        <Sidebar />
        <Content className='margin-top'>
          <Caption sub>DOWNLOADS —</Caption>

          <Downloads />
        </Content>
        <Sidebar />
      </Section>

      <footer className='bg-white'>
        <div className='mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-24 lg:px-8 lg:pt-32'>
          <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
            <div className='space-y-8'>
              <img alt='Company name' src='https://dev.buerligons.io/favicon.svg' className='h-9' />
              <p className='text-sm/6 text-balance text-gray-600'>
                Making the world a better place through constructing elegant hierarchies.
              </p>
              <div className='flex gap-x-6'>
                {navigation.social.map((item) => (
                  <a key={item.name} href={item.href} className='text-gray-600 hover:text-gray-800'>
                    <span className='sr-only'>{item.name}</span>
                    <item.icon aria-hidden='true' className='size-6' />
                  </a>
                ))}
              </div>
            </div>
            <div className='mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0'>
              <div className='md:grid md:grid-cols-2 md:gap-8'>
                <div>
                  <h3 className='text-sm/6 font-semibold text-gray-900'>Solutions</h3>
                  <ul role='list' className='mt-6 space-y-4'>
                    {navigation.solutions.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className='text-sm/6 text-gray-600 hover:text-gray-900'>
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='mt-10 md:mt-0'>
                  <h3 className='text-sm/6 font-semibold text-gray-900'>Support</h3>
                  <ul role='list' className='mt-6 space-y-4'>
                    {navigation.support.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className='text-sm/6 text-gray-600 hover:text-gray-900'>
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className='md:grid md:grid-cols-2 md:gap-8'>
                <div>
                  <h3 className='text-sm/6 font-semibold text-gray-900'>Company</h3>
                  <ul role='list' className='mt-6 space-y-4'>
                    {navigation.company.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className='text-sm/6 text-gray-600 hover:text-gray-900'>
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='mt-10 md:mt-0'>
                  <h3 className='text-sm/6 font-semibold text-gray-900'>Legal</h3>
                  <ul role='list' className='mt-6 space-y-4'>
                    {navigation.legal.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className='text-sm/6 text-gray-600 hover:text-gray-900'>
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24'>
            <p className='text-sm/6 text-gray-600'>&copy; 2025 AWV-Informatik AG, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
