import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { suspend } from 'suspend-react'
import { Descriptions } from './descriptions'
import { Files } from './files'
import { classNames, statuses } from './util'

import { mds } from '../usage'

export function Downloads() {
  const data = suspend(async () => {
    const data = await fetch('https://awvstatic.com/classcad/download/metadata.json', { cache: 'no-cache' }).then(
      (res) => res.json(),
    )
    const versions = Object.values(data.versions).sort((a, b) => b.timestamp - a.timestamp)
    versions[0].originalName = versions[0].name
    versions[0].name = `${versions[0].name} (latest)`
    const platforms = {}
    for (let version of versions) {
      const date = new Date(version.timestamp)
      version.date = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
      version.files = (await fetch(version.url, { cache: 'no-cache' }).then((res) => res.json())).files
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

    for (const md of mds) {
      md.description = await fetch(md.url).then((res) => res.text())
      md.description = md.description.replace(/\r\n/g, '\n')
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

  const archive = files.find((f) => f.type === 'archive') // There is only one archive file per version/platform/arch!
  const archiveUrl = archive.url

  const script = files.find((f) => f.type === 'script') // There is only one script file per version/platform/arch!
  const scriptUrl = script.url

  const currVers = versions.find((v) => v.name === vers)
  const verName = currVers?.originalName || currVers?.name
  const usages = mds
    .filter((f) => f.platform === plat && f.arch === arch)
    .map((u) => ({
      ...u,
      description: u.description
        .replace(/%URL%/g, archiveUrl)
        .replace(/%VERSION%/g, verName)
        .replace(/%SCRIPT_URL%/g, scriptUrl),
    }))

  return (
    <div>
      <div className='mt-10 grid grid-cols-4 gap-x-6'>
        <div className='sm:col-span-1'>
          <label htmlFor='tag' className='block text-sm/6 font-medium text-gray-900'>
            Tag
          </label>
          <div className='mt-2 grid grid-cols-1'>
            <select
              id='tag'
              name='tag'
              value={tag}
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
              name='version'
              value={vers}
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
              value={plat}
              autoComplete='platform-name'
              className='col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
              onChange={(e) => {
                setPlatform(e.target.value)
                // Check if the selected platform has the current architecture
                const hasArch = platforms[e.target.value].arch.find((a) => a === arch)
                if (!hasArch) setArch(platforms[e.target.value].arch[0])
              }}>
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
                value={arch}
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
            <p
              className={classNames(
                statuses[version.quality],
                'mt-0.5 rounded-md px-1.5 py-0.5 text-xs font-medium whitespace-nowrap ring-1 ring-inset',
              )}>
              {version.quality}
            </p>
          </div>

          <div className='mt-1 flex items-center gap-x-2 text-xs/5 text-gray-500'>
            <p className='whitespace-nowrap'>
              Created <time dateTime={version.date}>{version.date}</time>
            </p>
          </div>
          {usages.length > 0 && <Descriptions key={vers + plat + arch} files={usages} />}
          {descriptions.length && usages.length == 0 && <Descriptions key={vers + plat + arch} files={descriptions} />}
        </div>
      </div>

      <Files files={files} version={version} />
    </div>
  )
}
