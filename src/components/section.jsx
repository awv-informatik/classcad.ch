import React from 'react'

export function Section({ children, ...props }) {
  return (
    <div className='flex gap-x-6' {...props}>
      <aside className='w-10 h-10 flex-1' />
      <div className='w-5xl'>{children}</div>
      <aside className='w-10 h-10 flex-1' />
    </div>
  )
}
