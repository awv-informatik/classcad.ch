import React from 'react'
import { ChatBubbleOvalLeftEllipsisIcon, HeartIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'ClassCAD Core and APIs',
    description: (
      <ul className='list-disc'>
         <li> ClassCAD is a object oriented crossplatform C++ development environment on top of a CAD kernel with own bytecode compiled CAD language. It is compiled for Win, Linux, WASM and runs also
        under ARM64 with Ubuntu </li>
        <li> We provide PartApi, AssembleAPI etc. These APIs are compiled into TS APIs and are used from our Buerli.io client development; A Python API will be available soon</li>
        <li> A subset of the ClassCAD language will be available as CCScript for your automation tasks.</li>
        <li> Results of API calls are communicated through a state datastructure to clients.</li>
      </ul>
    ),
    icon: TrashIcon,
  },
  {
    name: 'Instance mgmt, states and communication',
    description: (
      <ul className='list-disc'>
        <li>
          With our instance manager we support a simple cloud scaling mechanism 
          using <b>WebSockets</b> for fast, real-time CAD interaction,  instant
          updates, and dynamic rendering.
        </li>
        <li>
          We also support <b>WASM</b>, this means the CAD is entirely embedded within your app. No need for scaling at all!
          Check it out on Buerligons.io
        </li>
        <li>
          Interact with our CAD engine via simple <b>HTTP requests</b>, accessible from any platform—perfect for
          automating design tasks, generating drawings, and rendering 3D models.
        </li>
      </ul>
    ),
    icon: PencilSquareIcon,
  },
  {
    name: 'CAD Features',
    description: (
      <ul className='list-disc'>
        <li>standard features like extrusion/ revolve / fillet / chamfer and boolean operation</li>
        <li>constraint based sketching in 2d and constraint based assembling in 3d.</li>
        <li>support of expressions for part tables and in all features</li>
        <li>drawing creation from 3d </li>
        <li>using the nurbs kernel from Solid Modelling Solutions for over 20 years.</li>
        <li>Import/Export formats via STEP, or export of drawings dxf via Open Design Alliance platform</li>
        <li>New CAD features will be added with every release. Upcoming Extrude along path and sweeps, lofts etc. </li>
      </ul>
    ),
    icon: HeartIcon,
  },
  {
    name: 'Diverse',
    description: (
      <ul className='list-disc'>
        <li>Continuous Innovation – Daily builts, backed by automated nightly testing for rock-solid reliability.</li>
        <li>extensible Core -  Supporting libraries via dynamic linking and usage through our language</li>
      </ul>
    ),
    icon: ChatBubbleOvalLeftEllipsisIcon,
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
