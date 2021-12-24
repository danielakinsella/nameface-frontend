import { Popover } from '@headlessui/react'
import { ExternalLinkIcon } from '@heroicons/react/solid'
import Image from "next/image";



const people = [
    {
      name: 'Daniela Eichner',
      role: 'Technology',
      imageUrl:
        '/danielaeichner.jpg',
      twitterUrl: 'https://twitter.com/daniela',
      linkedinUrl: 'https://www.linkedin.com/in/danielaeichner',
      email: 'daniela@nameface.com',
      website: 'https://danielaeichner.com'
    },
    {
        name: 'Steve Eichner',
        role: 'Creative',
        imageUrl:
          '/steveeichner.jpg',
        twitterUrl: 'https://twitter.com/steveeichner',
        linkedinUrl: 'https://www.linkedin.com/in/stephen-eichner-b7146195',
        email: 'steve@nameface.com',
        website: 'https://steveeichner.com'
      },
    
  ]

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

          <div className="bg-gray-200">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-nameface">Our Team</h2>
            
          </div>
          <ul
            role="list"
            className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="space-y-4">
                  <div className="aspect-w-3 aspect-h-2" style={{maxHeight:400}}>
                    <Image className="object-cover shadow-lg rounded-lg" src={person.imageUrl} alt="" width="600" height="600"/>
                  </div>

                  <div className="space-y-2">
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3>{person.name}</h3>
                      <p className="text-nameface">{person.role}</p>
                      <p className="text-gray-600 text-base">{person.email}</p>
                      <p className="text-gray-600"><a href={person.website} target="new" className="text-base text-gray-500 hover:text-gray-900">{person.website}</a></p>
                    </div>
                    <ul role="list" className="flex space-x-5">
                      <li>
                        <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Twitter</span>
                          <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">LinkedIn</span>
                          <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
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
              <p className="text-base text-gray-400 xl:text-center">&copy; 2021 NameFace, LLC. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
