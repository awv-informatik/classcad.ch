import React from 'react'

export function About() {
  return (
    <div className='overflow-hidden py-24 sm:py-32'>
      <div className='mx-auto'>
        <div className='max-w-4xl'>
          <p className='text-base/7 font-semibold text-indigo-600'>About ClassCAD</p>
          <h1 className='mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl'>
            On a mission to enable CAD everywhere
          </h1>
          <p className='mt-6 text-xl/8 text-balance text-gray-700'>
            ClassCAD simplifies Custom CAD development with efficient, concise tools and a deep understanding of CAD
            workflows, reducing development time and costs.
          </p>
        </div>
        <section className='mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16'>
          <div className='lg:pr-8'>
            <h2 className='text-2xl font-semibold tracking-tight text-pretty text-gray-900'>The ClassCAD engine</h2>
            <p className='mt-6 text-base/7 text-gray-600'>
              The ClassCAD engine is the core of our CAD ecosystem, providing CAD functionality via APIs. It supports
              history-based part and assembly modeling. A running ClassCAD engine is required for API calls. Customers
              can host the engine and interact via HTTP or WebSockets or use our client to access the WASM engine.
            </p>
            <p className='mt-8 text-base/7 text-gray-600'>
              ClassCAD was founded in 1997 and is now in its 17th major version. As a CAD component, it operates
              seamlessly within partner software, powering thousands of installations worldwide. Now, as
              AWV-Informatik.ch transitions from integration to system business, we're making our engine available to
              everyone. With our ClassCAD ecosystem, you can easily build your own CAD solution!
            </p>
          </div>
          <div className='pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto'>
            <div className='-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8'>
              <div className='aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10'>
                <img alt='' src='10.jpg' className='block size-full object-cover' />
              </div>
              <div className='-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40'>
                <img alt='' src='4.jpg' className='block size-full object-cover' />
              </div>
              <div className='aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10'>
                <img alt='' src='8.jpg' className='block size-full object-cover' />
              </div>
              <div className='-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40'>
                <img alt='' src='6.jpg' className='block size-full object-cover' />
              </div>
            </div>
          </div>
          {/*<div className='max-lg:mt-16 lg:col-span-1'>
            <p className='text-base/7 font-semibold text-gray-500'>The numbers</p>
            <hr className='mt-6 border-t border-gray-200' />
            <dl className='mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2'>
              <div className='flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4'>
                <dt className='text-sm/6 text-gray-600'>Raised</dt>
                <dd className='order-first text-6xl font-semibold tracking-tight'>
                  $<span>150</span>M
                </dd>
              </div>
              <div className='flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4'>
                <dt className='text-sm/6 text-gray-600'>Companies</dt>
                <dd className='order-first text-6xl font-semibold tracking-tight'>
                  <span>30</span>K
                </dd>
              </div>
              <div className='flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4'>
                <dt className='text-sm/6 text-gray-600'>Deals Closed</dt>
                <dd className='order-first text-6xl font-semibold tracking-tight'>
                  <span>1.5</span>M
                </dd>
              </div>
              <div className='flex flex-col gap-y-2'>
                <dt className='text-sm/6 text-gray-600'>Leads Generated</dt>
                <dd className='order-first text-6xl font-semibold tracking-tight'>
                  <span>200</span>M
                </dd>
              </div>
            </dl>
          </div>*/}
        </section>
      </div>
    </div>
  )
}
