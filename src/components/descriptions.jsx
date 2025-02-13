import React, { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import Markdown from 'react-markdown'
import { classNames, getSelectionText } from './util'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneLight as theme } from 'react-syntax-highlighter/dist/esm/styles/prism'

export function Descriptions({ files }) {
  const [clicked, click] = useState(false)
  const [current, setCurrent] = React.useState(files[0])
  return (
    <div
      onClick={() => {
        const selection = getSelectionText()
        if (selection === '') click(!clicked)
      }}
      style={{ cursor: 'pointer', maxHeight: clicked ? 'fit-content' : 256 }}
      className={`relative overflow-hidden prose !max-w-none w-full mt-5 rounded-lg border border-gray-100 p-5`}>
      <div className='grid grid-cols-1 sm:hidden'>
        <select
          value={current.name}
          onChange={(e) => {
            e.preventDefault()
            e.stopPropagation()
            setCurrent(files.find((f) => f.name === e.target.value))
          }}
          aria-label='Select a tab'
          className='col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600'>
          {files.map((file) => (
            <option key={file.name}>{file.name}</option>
          ))}
        </select>
        <ChevronDownIcon
          aria-hidden='true'
          className='pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-500'
        />
      </div>
      <div className='hidden sm:block'>
        <nav aria-label='Tabs' className='flex space-x-4'>
          {files.map((file, i) => (
            <a
              key={file.name}
              href='#'
              onClick={(e) => (setCurrent(file), e.preventDefault(), e.stopPropagation())}
              className={classNames(
                current == file ? 'bg-gray-100 text-gray-700' : 'text-gray-500 hover:text-gray-700',
                'rounded-md px-3 py-2 text-sm font-medium',
              )}>
              {file.name}
            </a>
          ))}
        </nav>
      </div>

      <Markdown
        components={{
          pre(props) {
            const { node, ...rest } = props
            return <pre style={{ background: 'transparent' }} {...rest} />
          },
          /*code(props) {
            const { node, ...rest } = props
            return <code style={{ color: 'black', whiteSpace: 'break-spaces' }} {...rest} />
          },*/
          code(props) {
            const { children, className, node, ...rest } = props
            const match = /language-(\w+)/.exec(className || '')
            console.log(theme)
            return match ? (
              <SyntaxHighlighter
                {...rest}
                PreTag='div'
                children={String(children).replace(/\n$/, '')}
                language={match[1]}
                style={theme}
              />
            ) : (
              <code {...rest} className={className} style={{ whiteSpace: 'break-spaces' }}>
                {children}
              </code>
            )
          },
        }}>
        {current.description}
      </Markdown>
      <div
        style={{ visibility: clicked ? 'hidden' : 'visible' }}
        className='absolute bottom-0 left-0 w-full h-40 bg-linear-to-t from-white to-white-0%'
      />
    </div>
  )
}
