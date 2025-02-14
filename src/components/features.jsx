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
          ClassCAD is an object-oriented, cross-platform C++ development environment. It supports Windows, Linux, WASM,
          and runs on ARM64 Ubuntu.
        </li>
        <li>
          API's for parts and assemblies are compiled into TypeScript for <a href='http://buerli.io'>Buerli.io</a>{' '}
          client development. A Python API is coming soon.
        </li>
        <li>A subset of the ClassCAD language, CCScript, will be available for automation tasks.</li>
        {/*<li>API call results are communicated to clients via a state data structure.</li>*/}
      </ul>
    ),
    icon: CodeBracketIcon,
  },
  {
    name: 'Instance management & Interfaces',
    description: (
      <ul className='list-disc'>
        <li>
          A <b>WebSockets</b> based instance manager enables basic user-management, re-use of instances and scaling.
        </li>
        <li>
          With <b>WASM</b> you can embed ClassCAD into your client app. Check it out on{' '}
          <a href='http://buerligons.io'>Buerligons.io</a>.
        </li>
        <li>
          Or, interact with our CAD engine via <b>HTTP</b>, perfect for automating design tasks.
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
        <li>Based on the Solid Modelling Solutions nurbs kernel</li>
        <li>Constraint based sketching in 2d and constraint based assembling in 3d</li>
        <li>Support of expressions for part tables and features</li>
        {/*<li>Drawing creation from 3d</li>*/}
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
          <div className='col-span-2'>
            <h2 className='text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl'>
              The Core of Our CAD Ecosystem
            </h2>
            <p className='mt-6 text-xl/8 text-balance text-gray-700'>
              The ClassCAD eco system is built on a modern stack, with a focus on extensibility and reliability.
            </p>
            <p className='mt-6 text-xl/8 text-balance text-gray-700'>
              It makes it easy to integrate and embed CAD functionality into your own applications with ease.
            </p>
          </div>
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
