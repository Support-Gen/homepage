import { Tab } from "@headlessui/react";
import Reveal from "react-awesome-reveal";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { fadeInBottom } from "../styles/animations";

const DocsOverview = () => {
  return (
    <div className="relative">
      <section className="container px-20 container mx-auto mb-60 relative" style={{ minHeight: '1100px' }}>
        <Reveal keyframes={fadeInBottom} triggerOnce={true}>
          <h1 className="font-bold text-5xl text-center mb-4">Product documentation</h1>
          <h2 className='font-normal text-lg text-center text-slate-500 mb-14'>Get an overview of all your features and help your clients learn more about them.</h2>
          <div>
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
          </div>
        </Reveal>
      </section>
    </div>

  );
}

export default DocsOverview;