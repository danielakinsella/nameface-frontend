import { Popover } from '@headlessui/react'
import { ExternalLinkIcon } from '@heroicons/react/solid'
import Image from "next/image";



export default function Index() {
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden">
        <Popover as="header" className="relative">
          <div className="bg-gray-900 pt-6">
            <nav
              className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
              aria-label="Global"
            >
              <div className="flex items-center flex-1">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <a href="https://nameface.com">
                    <span className="sr-only">NameFace</span>
                    <Image
                      className="h-8 w-auto sm:h-10"
                      src="/nameface-logo.png"
                      alt="NameFace"
                      width="248"
                  height="40"
                    />
                  </a>
                 
                </div>
               
              </div>
              
            </nav>
          </div>

        </Popover>
        <main>
          <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                  <div className="lg:py-24">
                    
                    <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                      <span className="block">Web3 Technology</span>
                      <span className="pb-3 block bg-clip-text text-nameface sm:pb-5">
                        for Artists
                      </span>
                    </h1>
                    <p className="text-base text-gray-300 lg:text-2xl xl:text-2xl">
                      We build tools for artists to enter the NFT and blockchain arena.
                    </p>
                    
                  </div>
                </div>
                <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                  <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                    
                    <Image
                      className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                      src="/startup.svg"
                      alt=""
                      width="1030"
                      height="788"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          {/* CTA Section */}
          <div className="relative bg-gray-900">
            <div className="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
              <Image
                className="w-full h-full object-cover"
                src="/workflow.svg"
                alt=""
                width="1030"
                      height="788"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 mix-blend-multiply"
              />
            </div>
            <div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
              <div className="md:ml-auto md:w-1/2 md:pl-10">
                <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">
                  Building for the metaverse
                </h2>
                <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">We’re here to help</p>
                <p className="mt-3 text-lg text-gray-300">
                  We build tools to manage, interact, mint and organize NFTs (non fungible tokens) on the blockchain and assist you to understand the technology. 
                  We are specialised on helping artists like photographers, illustrators, film makers and writers.
                </p>
                <div className="mt-8">
                  <div className="inline-flex rounded-md shadow">
                    <a
                      href="mailto:info@nameface.com"
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                    >
                      info@nameface.com
                      <ExternalLinkIcon className="-mr-1 ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="bg-gray-50" aria-labelledby="footer-heading">
          <h2 id="footer-heading" className="sr-only">
            Footer
          </h2>
          <div className="max-w-md mx-auto pt-12 px-4 sm:max-w-7xl sm:px-6 lg:pt-16 lg:px-8">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
              <div className="space-y-8 xl:col-span-1">
                <Image
                  className="h-10"
                  src="/nameface-logo.png"
                  alt="NameFace"
                  width="248"
                  height="40"
                />
                <p className="text-gray-500 text-base">
                  Technology for Artists
                </p>
               
              </div>
              <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
               
                
              </div>
            </div>
            <div className="mt-12 border-t border-gray-200 py-8">
              <p className="text-base text-gray-400 xl:text-center">NameFace, LLC. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
