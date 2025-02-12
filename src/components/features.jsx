import React from 'react'
import { ChatBubbleOvalLeftEllipsisIcon, HeartIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'ClassCAD Core and APIs',
    description: (
      <ul className='list-disc'>
        <li>
          A crossplatform C++ development for CAD called ClassCAD that is compiled for Win, Linux, WASM and runs also
          under ARM64 with Ubuntu
        </li>
        <li>PartApi, AssemberAPI, etc as single source of truth</li>
        <li>Own language to write CCScripts with API calls </li>
      </ul>
    ),
    icon: HeartIcon,
  },
  {
    name: 'Communication',
    description: (
      <ul className='list-disc'>
        <li>
          <b>CLI</b>
        </li>
        <li>
          Interact with our CAD engine via simple <b>HTTP requests</b>, accessible from any platform—perfect for
          automating design tasks, generating drawings, and rendering 3D models.
        </li>
        <li>
          We support <b>WebSockets</b> for fast, real-time CAD interaction, enabling live collaboration, instant
          updates, and dynamic rendering.
        </li>
        <li>
          We also support <b>WASM</b>, this means the CAD is entirely embedded within your app.
        </li>
      </ul>
    ),
    icon: PencilSquareIcon,
  },
  {
    name: 'Data Storage',
    description: (
      <ul className='list-disc'>
        <li>Discussion DB versus filesystem</li>
        <li>.ofb, .asm in JSON</li>
      </ul>
    ),
    icon: ChatBubbleOvalLeftEllipsisIcon,
  },
  {
    name: 'Features',
    description: (
      <ul className='list-disc'>
        <li>Supports constraint based sketching in 2d and constraint based assembliung in 3d.</li>
        <li>
          We’ve worked with the Smlib kernel from Solid Modelling Solutions for over 20 years. Initially, we used ACIS
          and also evaluated OCC. Nvidia acquired Solid Modelling Solutions in 2022.
        </li>
        <li>Export formats STEP, or dxf via Open Design Alliance platform</li>
        <li>VSCode Plugin for CCScript</li>
      </ul>
    ),
    icon: HeartIcon,
  },
]

export function Features() {
  return (
    <div className='py-24 sm:py-32'>
      <div className='mx-auto'>
        <p className='text-base/7 font-semibold text-indigo-600'>Features</p>
        <div className='mt-2 mx-auto grid max-w-2xl grid-cols-1 gap-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5'>
          <h2 className='col-span-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl'>
            The Core of Our CAD Ecosystem
          </h2>
          <dl className='col-span-3 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2'>
            {features.map((feature) => (
              <div key={feature.name}>
                <dt className='text-base/7 font-semibold text-gray-900'>
                  <div className='mb-6 flex size-10 items-center justify-center rounded-lg bg-indigo-600'>
                    <feature.icon aria-hidden='true' className='size-6 text-white' />
                  </div>
                  {feature.name}
                </dt>
                <dd className='mt-1 text-base/7 text-gray-600'>{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
