import React from "react"
import FAQTemplate from "./../components/FAQTemplate"

const FAQ = () => {

  const faqs = [
    {
      question: "What is the difference between a 'hackathon' and a 'Coders Cup'?",
      answer: "A hackathon is a 24-hour event where participants work in teams to create a project. A Coders Cup is a 2-hour event where participants work individually to solve as many coding questions as possible."
    },
    {
      question: "What is the difference between a 'hackathon' and a 'Coders Cup'?",
      answer: "A hackathon is a 24-hour event where participants work in teams to create a project. A Coders Cup is a 2-hour event where participants work individually to solve as many coding questions as possible."
    },
    {
      question: "What is the difference between a 'hackathon' and a 'Coders Cup'?",
      answer: "A hackathon is a 24-hour event where participants work in teams to create a project. A Coders Cup is a 2-hour event where participants work individually to solve as many coding questions as possible."
    },
    {
      question: "What is the difference between a 'hackathon' and a 'Coders Cup'?",
      answer: "A hackathon is a 24-hour event where participants work in teams to create a project. A Coders Cup is a 2-hour event where participants work individually to solve as many coding questions as possible."
    },
    {
      question: "What is the difference between a 'hackathon' and a 'Coders Cup'?",
      answer: "A hackathon is a 24-hour event where participants work in teams to create a project. A Coders Cup is a 2-hour event where participants work individually to solve as many coding questions as possible."
    },
    {
      question: "What is the difference between a 'hackathon' and a 'Coders Cup'?",
      answer: "A hackathon is a 24-hour event where participants work in teams to create a project. A Coders Cup is a 2-hour event where participants work individually to solve as many coding questions as possible."
    },
    {
      question: "What is the difference between a 'hackathon' and a 'Coders Cup'?",
      answer: "A hackathon is a 24-hour event where participants work in teams to create a project. A Coders Cup is a 2-hour event where participants work individually to solve as many coding questions as possible."
    },
    {
      question: "What is the difference between a 'hackathon' and a 'Coders Cup'?",
      answer: "A hackathon is a 24-hour event where participants work in teams to create a project. A Coders Cup is a 2-hour event where participants work individually to solve as many coding questions as possible."
    },
    {
      question: "What is the difference between a 'hackathon' and a 'Coders Cup'?",
      answer: "A hackathon is a 24-hour event where participants work in teams to create a project. A Coders Cup is a 2-hour event where participants work individually to solve as many coding questions as possible."
    },
    {
      question: "What is the difference between a 'hackathon' and a 'Coders Cup'?",
      answer: "A hackathon is a 24-hour event where participants work in teams to create a project. A Coders Cup is a 2-hour event where participants work individually to solve as many coding questions as possible."
    },
    {
      question: "What is the difference between a 'hackathon' and a 'Coders Cup'?",
      answer: "A hackathon is a 24-hour event where participants work in teams to create a project. A Coders Cup is a 2-hour event where participants work individually to solve as many coding questions as possible."
    },
    {
      question: "What is the difference between a 'hackathon' and a 'Coders Cup'?",
      answer: "A hackathon is a 24-hour event where participants work in teams to create a project. A Coders Cup is a 2-hour event where participants work individually to solve as many coding questions as possible."
    },
  ]

  return (
    <>
      <div className="p-3 text-center">
        <h1 className="display-5">FAQ</h1>
      </div>
      <div className="container">
        <FAQTemplate faqs={faqs} title="faq" />
      </div>
    </>
  )

}

export default FAQ