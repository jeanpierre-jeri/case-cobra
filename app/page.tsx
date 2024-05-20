import { MaxWidthWrapper } from '@/components/max-width-wrapper'
import Image from 'next/image'
import { Check, Star } from 'lucide-react'
import { Phone } from '@/components/phone'

export default function Home() {
  return (
    <main className='bg-slate-50'>
      <section>
        <MaxWidthWrapper className='pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52'>
          <div className='lg:col-span-2 px-6 lg:px-0 lg:pt-4'>
            <div className='relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start'>
              <div className='absolute w-28 l-0 -top-20 hidden lg:block'>
                <Image
                  src='/snake-1.png'
                  alt='snake'
                  width={112}
                  height={146}
                  className='w-full'
                  priority
                />
              </div>
              <h1 className='relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl'>
                Your image on a <span className='bg-green-600 px-2 text-white'>Custom</span> Phone
                Case
              </h1>
              <p className='mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap'>
                Capture your favorite memories with your own,{' '}
                <span className='font-semibold'>one-of-one</span> CaseCobra allows you to protect
                your memories, not just your phone case.
              </p>

              <ul className='mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start'>
                <div className='space-y-2'>
                  <li className='flex gap-1.5 items-center text-left'>
                    <Check className='size-5 shrink-0 text-green-600' />
                    High quality, durable material
                  </li>

                  <li className='flex gap-1.5 items-center text-left'>
                    <Check className='size-5 shrink-0 text-green-600' />5 year print guarantee
                  </li>

                  <li className='flex gap-1.5 items-center text-left'>
                    <Check className='size-5 shrink-0 text-green-600' />
                    Modern iphone models supported
                  </li>
                </div>
              </ul>

              <div className='mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5'>
                <div className='flex -space-x-4'>
                  <Image
                    priority
                    className='inline-block size-10 rounded-full ring-2 ring-slate-100'
                    src='/users/user-1.png'
                    width={40}
                    height={40}
                    alt='user image'
                  />

                  <Image
                    priority
                    className='inline-block size-10 rounded-full ring-2 ring-slate-100'
                    src='/users/user-2.png'
                    width={40}
                    height={40}
                    alt='user image'
                  />

                  <Image
                    priority
                    className='inline-block size-10 rounded-full ring-2 ring-slate-100'
                    src='/users/user-3.png'
                    width={40}
                    height={40}
                    alt='user image'
                  />

                  <Image
                    priority
                    className='inline-block size-10 rounded-full ring-2 ring-slate-100'
                    src='/users/user-4.jpg'
                    width={40}
                    height={40}
                    alt='user image'
                  />

                  <Image
                    priority
                    className='inline-block object-cover size-10 rounded-full ring-2 ring-slate-100'
                    src='/users/user-5.jpg'
                    width={40}
                    height={40}
                    alt='user image'
                  />
                </div>

                <div className='flex flex-col justify-between items-center sm:items-start'>
                  <div className='flex gap-0.5'>
                    <Star className='size-4 text-green-600 fill-green-600' />
                    <Star className='size-4 text-green-600 fill-green-600' />
                    <Star className='size-4 text-green-600 fill-green-600' />
                    <Star className='size-4 text-green-600 fill-green-600' />
                    <Star className='size-4 text-green-600 fill-green-600' />
                  </div>

                  <p>
                    <span className='font-semibold'>1.250</span> Happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit'>
            <div className='relative md:max-w-xl'>
              <Image
                priority
                src='/your-image.png'
                alt='your image'
                width={160}
                height={111}
                className='absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block'
              />
              <Image
                alt='line'
                priority
                src='/line.png'
                width={80}
                height={143}
                className='absolute w-20 -left-6 -bottom-6 select-none'
              />
              <Phone
                className='w-64'
                imgSrc='/testimonials/1.jpg'
                imgWidth={896}
                imgHeight={1831}
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </main>
  )
}
