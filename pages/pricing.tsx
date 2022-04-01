import { NextPage } from "next"
import { useEffect } from "react";
import Faq from "../components/faq";
import Footer from "../shared/footer";
import Nav from "../shared/nav";

const pricingTiers = [
  {
    name: "Basic",
    price: 5
  },
  {
    name: "Startup",
    price: 25
  },
  {
    name: "Enterprise",
    price: 50
  },
]

const Pricing: NextPage = () => {
  return (
    <main>
      <Nav></Nav>
      <div className="container mx-auto">
        <h1 className="text-6xl font-bold mb-10 text-center">Start now</h1>
        <section className="flex flex-row justify-center mb-10">
          <PlanCard name="Basic" price="10"></PlanCard>

        </section>
      </div>
      <Faq></Faq>
      <Footer></Footer>
    </main>
  )
}

const PlanCard = ({ name, price  }: { name: string, price: string}) => {
  return (
    <div className="p-4 max-w-sm bg-white rounded-lg border shadow-md sm:p-8">
        <h5 className="mb-4 text-xl font-medium text-gray-500">{name}</h5>
        <div className="flex items-baseline text-gray-900">
            <span className="text-3xl font-semibold">$</span>
            <span className="text-5xl font-extrabold tracking-tight">{price}</span>
            <span className="ml-1 text-xl font-normal text-gray-500">/month</span>
        </div>
        <ul role="list" className="my-7 space-y-5">
            <li className="flex space-x-3">
                <svg className="flex-shrink-0 w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span className="text-base font-normal leading-tight text-gray-500">2 team members</span>
            </li>
            <li className="flex space-x-3">
                <svg className="flex-shrink-0 w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span className="text-base font-normal leading-tight text-gray-500">20GB Cloud storage</span>
            </li>
            <li className="flex space-x-3">
                <svg className="flex-shrink-0 w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span className="text-base font-normal leading-tight text-gray-500">Integration help</span>
            </li>
            <li className="flex space-x-3 line-through decoration-gray-500">
                <svg className="flex-shrink-0 w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span className="text-base font-normal leading-tight text-gray-500">Sketch Files</span>
            </li>
            <li className="flex space-x-3 line-through decoration-gray-500">
                <svg className="flex-shrink-0 w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span className="text-base font-normal leading-tight text-gray-500">API Access</span>
            </li>
            <li className="flex space-x-3 line-through decoration-gray-500">
                <svg className="flex-shrink-0 w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span className="text-base font-normal leading-tight text-gray-500">Complete documentation</span>
            </li>
            <li className="flex space-x-3 line-through decoration-gray-500">
                <svg className="flex-shrink-0 w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span className="text-base font-normal leading-tight text-gray-500">24×7 phone & email support</span>
            </li>
        </ul>
        <button type="button" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
    </div>
  )
}

export default Pricing;