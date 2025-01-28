import { Popover } from '@headlessui/react'
import Image from "next/image";

export default function Index() {
  return (
    <div className="bg-gray-900">
        <main>
          <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                  <div className="lg:py-24">
                    
                    <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                      <span className="block text-nameface">Daniela</span>
                      <span className="pb-3 block bg-clip-text text-nameface sm:pb-5">
                        Kinsella
                      </span>
                    </h1>
                    <p className="text-base text-gray-300 lg:text-2xl xl:text-2xl pb-4">
                      Staff Software Engineer at The New York Times
                    </p>
                    <div className="inline-flex rounded-md shadow">
                      <a href="https://www.linkedin.com/in/danielakinsella/" className="inline-flex items-center justify-center px-5 mr-4 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">LinkedIn</a>
                    
                  </div>
                    
                  </div>
                </div>
                <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                  <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                    
                    <Image
                      className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                      src="/daniela-kinsella.jpg"
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
        
      
    </div>
  )
}
