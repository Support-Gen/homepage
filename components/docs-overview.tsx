import { Tab } from "@headlessui/react";

const DocsOverview = () => {
  return (
    <div className="max-w-6xl">
      <h2 className="font-bold text-5xl text-center mb-10">Easy user documentation</h2>
      <Tab.Group>
        <div className="flex flex-row justify-center mb-10">
          <Tab.List className="max-w-2xl border-b-2 border-gray-300 px-6 gap-10 flex flex-row">
            <Tab key="home" className={({ selected }) => "font-bold text-xl uppercase text-gray-600 px-2 pb-2 " + (selected ? " text-blue-500" : "") }>
              Home
            </Tab>
            <Tab key="module" className={({ selected }) => "font-bold text-xl uppercase text-gray-600 px-2 pb-2 " + (selected ? " text-blue-500" : "") }>
              Module Overview
            </Tab>
            <Tab key="feature" className={({ selected }) => "font-bold text-xl uppercase text-gray-600 px-2 pb-2 " + (selected ? " text-blue-500" : "") }>
              Feature tutorials
            </Tab>
          </Tab.List>
        </div>
        <div>
          <Tab.Panels className="block mt-2">
            <Tab.Panel key="home">
              <img className="rounded-xl shadow-lg" src="/docs-home.png"></img>
            </Tab.Panel>
            <Tab.Panel key="module">
              <img className="rounded-xl shadow-lg" src="/feature-overview.png"></img>
            </Tab.Panel>
            <Tab.Panel key="feature">
              <img className="rounded-xl shadow-lg" src="/feature-docs.png"></img>
            </Tab.Panel>
          </Tab.Panels>
        </div>
      </Tab.Group>
    </div>
  );
}

export default DocsOverview;