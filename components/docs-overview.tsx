import { Tab } from "@headlessui/react";
import Reveal from "react-awesome-reveal";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { fadeInBottom } from "../styles/animations";

const DocsOverview = () => {
  return (
    <div className="relative">
      <section className="container px-20 container mx-auto mb-40 relative">
        <Reveal keyframes={fadeInBottom} triggerOnce={true}>
          <h1 className="font-extrabold text-slate-900 text-6xl text-center mb-4 mx-auto">Where customers<br></br><span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-orange-700">find support.</span></h1>
          <h2 className='font-medium text-lg text-center text-slate-500 mb-14'>Get an overview of all your features and help<br></br> your clients learn more about them.</h2>
          <div className='flex flex-row gap-20'>
            <Tab.Group>
              <div className="flex flex-row justify-center mb-10">
                <Tab.List className="max-w-2xl px-10 gap-5 flex flex-col items-start">
                  <Tab key="overview" className={({ selected }) => "font-semibold text-2xl px-2 pb-2 " + (selected ? " text-blue-600" : "text-gray-400 hover:text-blue-500") }>
                    Spaces
                  </Tab>
                  <Tab key="module" className={({ selected }) => "font-semibold text-2xl px-2 pb-2 " + (selected ? " text-blue-600" : "text-gray-400 hover:text-blue-500") }>
                    Workflows
                  </Tab>
                  <Tab key="guides" className={({ selected }) => "font-semibold text-2xl px-2 pb-2 " + (selected ? " text-blue-600" : "text-gray-400 hover:text-blue-500") }>
                    Guides
                  </Tab>
                </Tab.List>
              </div>
              <div className="flex flex-row gap-10 items-center">
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
              </div>
            </Tab.Group>
          </div>
        </Reveal>
      </section>
    </div>

  );
}

export default DocsOverview;