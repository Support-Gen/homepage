import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { MdInsights } from 'react-icons/md'
import { CgDesignmodo } from 'react-icons/cg'
import { HiOutlineColorSwatch } from 'react-icons/hi'
import { FaRobot } from 'react-icons/fa'

const solutions = [
  {
    name: 'Product guides',
    description: 'Generate product guides easily',
    href: '##',
    icon: FaRobot,
    color: 'blue'
  },
  {
    name: 'Theming',
    description: 'Match your style',
    href: '##',
    icon: HiOutlineColorSwatch,
    color: 'purple'
  },
  {
    name: 'Analytics',
    description: 'Find out where issues start',
    href: '##',
    icon: MdInsights,
    color: 'orange'
  },
]

const Nav = () => {
  return (
    <nav className="flex flex-row px-10 py-3">
    <h1 className="flex-1 font-bold text-lg">dojo<span className="text-blue-700">docs</span></h1>
    <div className="flex flex-row gap-4 items-center">
      <Popover className="relative">
          {() => (
            <>
              <Popover.Button>
                <span className="text-md font-medium hover:text-gray-400 transition duration-150 ease-in-out">Features</span>
              </Popover.Button>
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
                          className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50"
                        >
                          <div className={`flex items-center justify-center w-10 h-10 sm:h-12 sm:w-12 bg-${item.color}-200 rounded-md`}>
                            <item.icon size={30} className={`text-${item.color}-600`}></item.icon>
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
                        className="flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-gray-100"
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
        <a className="text-medium font-medium hover:text-gray-400 transition duration-150 ease-in-out" href='##'>Pricing</a>
        <a className="text-medium font-medium hover:text-gray-400 transition duration-150 ease-in-out" href='##'>Docs</a>
      </div>
      <div className="flex flex-1 justify-end">
        <button className="text-lg font-medium hover:bg-gray-100 rounded-md px-3 py-2">Sign in</button>
      </div>
    </nav>
  )
}

export default Nav


