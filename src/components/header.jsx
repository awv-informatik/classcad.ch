import React, { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Features', href: '#features' },
  { name: 'Downloads', href: '#downloads' },
  { name: 'Links', href: '#links' },
]

export function Header({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header className='bg-white w-full h-screen py-10 px-24'>
      <nav aria-label='Global' className='flex items-center justify-between'>
        <div className='flex lg:flex-1'>
          <a href='https://awv-informatik.ch' className='-m-1.5 p-1.5 flex gap-5'>
            <img alt='' src='favicon.svg' className='h-6 w-auto' />
            <span className='text-base/5 text-gray-900'>
              AWV —<br />
              Informatik AG
            </span>
          </a>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            onClick={() => setMobileMenuOpen(true)}
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'>
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon aria-hidden='true' className='size-6' />
          </button>
        </div>
        <div className='hidden lg:flex lg:gap-x-12'>
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className='text-base/5 text-gray-900'>
              {item.name}
              <br />
              &nbsp;
            </a>
          ))}
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className='lg:hidden'>
        <div className='fixed inset-0 z-10' />
        <DialogPanel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white py-10 px-24 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <a href='https://awv-informatik.ch' className='-m-1.5 p-1.5 flex gap-5 sm:opacity-0'>
              <img alt='' src='favicon.svg' className='h-6 w-auto' />
              <span className='text-base/5 text-gray-900'>
                AWV —<br />
                Informatik AG
              </span>
            </a>
            <button
              type='button'
              onClick={() => setMobileMenuOpen(false)}
              className='-m-2.5 rounded-md p-2.5 text-gray-700'>
              <span className='sr-only'>Close menu</span>
              <XMarkIcon aria-hidden='true' className='size-6' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='-mx-3 block rounded-lg px-3 py-2 text-base/5 text-gray-900 hover:bg-gray-50'>
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
      {children}
    </header>
  )
}
