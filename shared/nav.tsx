import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { MdInsights } from 'react-icons/md'
import { CgDesignmodo } from 'react-icons/cg'
import { HiOutlineColorSwatch } from 'react-icons/hi'
import { FaRobot } from 'react-icons/fa'
import Link from 'next/link'

const solutions = [
  {
    name: 'Product guides',
    description: 'Generate product guides easily',
    href: '##',
    icon: FaRobot,
    bgClass: 'bg-blue-200',
    textClass: 'text-blue-600'
  },
  {
    name: 'Theming',
    description: 'Match your style',
    href: '##',
    icon: HiOutlineColorSwatch,
    color: 'blue',
    bgClass: 'bg-blue-200',
    textClass: 'text-blue-600'
  },
  {
    name: 'Analytics',
    description: 'Find out where issues start',
    href: '##',
    icon: MdInsights,
    color: 'orange',
    bgClass: 'bg-orange-200',
    textClass: 'text-orange-600'
  },
]

const focusClasses = 'focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-50 rounded-md';
const navClasses = 'text-md font-medium hover:text-gray-400 transition duration-150 ease-in-out p-1';

const Nav = () => {
  return (
    <div style={{ zIndex: 1 }}>
      <nav className="flex flex-row px-5 md:px-10 py-3 items-center">
        <Link href={'/'}>
          <h1 className="flex-1 font-bold text-xl cursor-pointer">flowy<i className='font-medium text-violet-600'>docs</i></h1>
        </Link>
        <div className="flex flex-row gap-4 items-center">
          <Popover className="relative">
            {() => (
              <>
                <Popover.Button className={`${navClasses} ${focusClasses}`}>Features</Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 w-screen max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                        {solutions.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}    
                            className={`flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 ${focusClasses}`}
                          >
                            <div className={`flex items-center justify-center w-10 h-10 sm:h-12 sm:w-12 ${item.bgClass} rounded-md`}>
                              <item.icon size={30} className={item.textClass}></item.icon>
                            </div>
                            <div className="ml-4">
                              <p className="text-sm font-medium text-gray-900">
                                {item.name}
                              </p>
                              <p className="text-sm text-gray-500">
                                {item.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                      <div className="p-4 bg-gray-50">
                        <a
                          href="##"
                          className={`flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 ${focusClasses}`}
                        >
                          <span className="flex items-center">
                            <span className="text-sm font-medium text-gray-900">
                              Live demo
                            </span>
                          </span>
                          <span className="block text-sm text-gray-500">
                            Take a closer look at our product. 🧐
                          </span>
                        </a>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
          <a className={`${navClasses} ${focusClasses}`} href='pricing'>Pricing</a>
          <a className={`${navClasses} ${focusClasses}`} href='##'>Docs</a>
        </div>
        <div className="flex flex-1 justify-end gap-5">
          <button className="text-md font-medium hover:text-gray-400">Sign in</button>
          <button className="text-md font-medium bg-violet-600 hover:bg-violet-500 text-white rounded-xl px-4 py-2">Sign up</button>
        </div>
      </nav>
    </div>
  )
}

export default Nav


