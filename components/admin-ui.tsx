import { Tab } from "@headlessui/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

const AdminUI = () => {
  return (
    <section className="container px-20 container mx-auto mb-60 relative">
      <h1 className="font-bold text-5xl text-center mb-4">Admin UI</h1>
      <h2 className='font-normal text-lg text-center text-slate-500 mb-14'>Manage projects, analyse data and more.</h2>
      <Tab.Group>
        <div className="flex flex-row justify-center mb-10">
          <Tab.List className="max-w-2xl border-b-2 border-gray-200 px-10 gap-10 flex flex-row">
            <Tab key="guides" className={({ selected }) => "font-semibold text-xl uppercase px-2 pb-2 " + (selected ? " text-blue-600" : "text-gray-400") }>
              Guides
            </Tab>
            <Tab key="overview" className={({ selected }) => "font-semibold text-xl uppercase px-2 pb-2 " + (selected ? " text-blue-600" : "text-gray-400") }>
              Overview
            </Tab>
            <Tab key="module" className={({ selected }) => "font-semibold text-xl uppercase px-2 pb-2 " + (selected ? " text-blue-600" : "text-gray-400") }>
              Modules
            </Tab>
          </Tab.List>
        </div>
        <div className="flex flex-row gap-10 items-center">
          <a className="flex justify-center items-center bg-gray-200 hover:bg-gray-300 rounded-full cursor-pointer" style={{ height: '50px', minWidth: '50px' }}>
            <FiChevronLeft></FiChevronLeft>
          </a>
          <Tab.Panels className="block mt-2 w-full">
            <Tab.Panel key="guides">
              <img className="rounded-xl shadow-lg w-full" src="/docs-home.png"></img>
            </Tab.Panel>
            <Tab.Panel key="overview">
              <img className="rounded-xl shadow-lg w-full" src="/feature-overview.png"></img>
            </Tab.Panel>
            <Tab.Panel key="module">
              <img className="rounded-xl shadow-lg w-full" src="/feature-docs.png"></img>
            </Tab.Panel>
          </Tab.Panels>
          <a className="flex justify-center items-center bg-gray-200 hover:bg-gray-300 rounded-full cursor-pointer" style={{ height: '50px', minWidth: '50px' }}>
            <FiChevronRight></FiChevronRight>
          </a>
        </div>
      </Tab.Group>
      <img className="absolute" style={{ top: 0, left: 175, width: '175px', zIndex: -1}}  src="/setting-dynamic-color.svg"></img>
    </section>
  );
}

export default AdminUI;