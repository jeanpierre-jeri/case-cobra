import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

interface PhoneProps extends React.HTMLAttributes<HTMLDivElement> {
  imgSrc: string
  imgWidth: number
  imgHeight: number
  dark?: boolean
}

export function Phone({
  className,
  imgSrc,
  imgHeight,
  imgWidth,
  dark = false,
  ...props
}: PhoneProps) {
  return (
    <div className={cn('relative pointer-events-none z-50 overflow-hidden', className)} {...props}>
      <Image
        alt='phone image'
        className='pointer-events-none z-50 select-none'
        width={896}
        height={1831}
        src={dark ? '/phone-template-dark-edges.png' : '/phone-template-white-edges.png'}
      />

      <div className='absolute -z-10 inset-0'>
        <Image
          className='object-cover'
          width={imgWidth}
          height={imgHeight}
          src={imgSrc}
          alt='overlaying phone image'
        />
      </div>
    </div>
  )
}
