import React from 'react'
import { classNames, statuses } from './util'

export function Files({ files, version }) {
  return (
    <ul role='list' className='divide-y divide-gray-100'>
      {files
        .filter((file) => file.type === 'archive')
        .map((file) => (
          <li key={file.md5} className='flex items-center justify-between gap-x-6 py-5'>
            <div className='min-w-0'>
              <div className='flex items-start gap-x-3'>
                <p className='text-sm/6 font-semibold text-gray-900'>{file.name}</p>
                {/*<p
                  className={classNames(
                    statuses[version.quality],
                    'mt-0.5 rounded-md px-1.5 py-0.5 text-xs font-medium whitespace-nowrap ring-1 ring-inset',
                  )}>
                  {version.quality}
                </p>*/}
              </div>
              <div className='mt-1 flex items-center gap-x-2 text-xs/5 text-gray-500'>                            
                <p className='truncate'>MD5 {file.md5}</p>
                <svg viewBox='0 0 2 2' className='size-0.5 fill-current'>
                  <circle r={1} cx={1} cy={1} />
                </svg>
                <p className='truncate'>SHA256 {file.sha256.substring(0, 20)}...</p>
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
  )
}
