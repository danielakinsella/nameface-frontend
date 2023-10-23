import { Popover } from '@headlessui/react'
import Image from "next/image";

export default function Index() {
  return (
    <div className="bg-gray-900">
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
                      <span className="block">Technology</span>
                      <span className="pb-3 block bg-clip-text text-nameface sm:pb-5">
                        for Artists
                      </span>
                    </h1>
                    <p className="text-base text-gray-300 lg:text-2xl xl:text-2xl pb-4">
                      Connect with us to learn more about our tools and services.
                    </p>
                    <div className="inline-flex rounded-md shadow">
                    <a
                      href="mailto:hello@nameface.com"
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                    >
                      hello@nameface.com
                     
                    </a>
                  </div>
                    
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

        </main>
        <footer className="bg-gray-900" aria-labelledby="footer-heading">
          
            <div className="mt-12 py-8">
              <p className="text-base text-gray-400 xl:text-center">NameFace, LLC. All rights reserved.</p>
            </div>
          
        </footer>
      </div>
    </div>
  )
}
