import React from 'react'
import {
  CursorArrowRaysIcon,
  CodeBracketIcon,
  SparklesIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'ClassCAD Core and APIs',
    description: (
      <ul className='list-disc'>
        <li>
          ClassCAD is an object-oriented, cross-platform C++ development environment built on a CAD kernel with its own
          bytecode-compiled CAD language. It supports Windows, Linux, and WASM, and runs on ARM64 with Ubuntu.
        </li>
        <li>
          API's for parts and assemblies (etc.) are compiled into TypeScript for Buerli.io client development. A Python
          API is coming soon.
        </li>
        <li>A subset of the ClassCAD language, CCScript, will be available for automation tasks.</li>
        <li>API call results are communicated to clients via a state data structure.</li>
      </ul>
    ),
    icon: CodeBracketIcon,
  },
  {
    name: 'Instance management & Interfaces',
    description: (
      <ul className='list-disc'>
        <li>
          Our instance manager enables simple cloud scaling via <b>WebSockets</b> for real-time CAD interaction, instant
          updates, and dynamic rendering.
        </li>
        <li>
          We also support <b>WASM</b>, this means the CAD is entirely embedded within your app. No need for scaling at
          all! Check it out on Buerligons.io.
        </li>
        <li>
          Interact with our CAD engine via simple <b>HTTP requests</b>, accessible from any platform—perfect for
          automating design tasks, generating drawings, and rendering 3D models.
        </li>
      </ul>
    ),
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'CAD Features',
    description: (
      <ul className='list-disc'>
        <li>All standard features (extrusion, revolve, fillet, chamfer, boolean operations, etc.)</li>
        <li>Constraint based sketching in 2d and constraint based assembling in 3d</li>
        <li>Support of expressions for part tables and features</li>
        <li>Drawing creation from 3d</li>
        <li>Using the nurbs kernel from Solid Modelling Solutions for over 20 years</li>
        <li>Import/Export formats via STEP, or DXF via Open Design Alliance platform</li>
        <li>New CAD features added with every release. (Upcoming: Extrude along path and sweeps, lofts etc.)</li>
      </ul>
    ),
    icon: SparklesIcon,
  },
  {
    name: 'Modern stack',
    description: (
      <ul className='list-disc'>
        <li>Continuous integration, Daily builds, backed by automated nightly testing for reliability</li>
        <li>Extensible Core - Supporting libraries via dynamic linking and usage through our language</li>
      </ul>
    ),
    icon: CursorArrowRaysIcon,
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
