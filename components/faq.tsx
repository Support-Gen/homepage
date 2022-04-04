import { Disclosure } from "@headlessui/react";
import Reveal from "react-awesome-reveal";
import { FiChevronUp } from 'react-icons/fi'
import { fadeInBottom } from "../styles/animations";

const faqs = [
  {
    question: "When will you launch?",
    answer: "You can expect the launch to be around July 2022. The MVP is still in development."
  },
  {
    question: "Will there be a free trial?",
    answer: "No, but there is a 21 days 100% money back guarantee."
  },
  {
    question: "How long does it take to generate the documentation?",
    answer: "The generation process takes on average about 3 minutes."
  },
  {
    question: "Can I customize texts after the generation process complete?",
    answer: "Not yet. After the launch we'll focus on adding more customization options, such as apps and text adjustments."
  },
]

const Faq = () => {
  return (
    <section className="container max-w-4xl px-4 mx-auto mb-60">
      <Reveal keyframes={fadeInBottom} triggerOnce={true}>
        <h1 className="font-extrabold text-slate-900 text-6xl text-center mb-10 mx-auto">Frequently asked questions</h1>
      </Reveal>
      <div className="w-full p-2 mx-auto bg-white rounded-2xl">
        {
          faqs.map((faq, i) => {
            return <div key={i} className="mb-5">
              <Reveal keyframes={fadeInBottom} triggerOnce={true}>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex justify-between w-full px-10 py-5 text-xl font-bold text-left text-white bg-gradient-to-r from-sky-400 to-violet-400 hover:from-sky-300 hover:to-violet-300 rounded-3xl focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                        <span>{faq.question}</span>
                        <FiChevronUp
                          className={`${
                            open ? 'transform rotate-180' : ''
                          } w-8 h-8 text-white`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 font-medium text-lg text-slate-500">
                        {faq.answer}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </Reveal>
            </div>
          })
        }
      </div>
    </section>
  );
}

export default Faq;