import React from "react"
import FAQTemplate from "./../components/FAQTemplate"

const FAQ = () => {

  const qa_dict = [
    {
        question: "Since when has the University of Sussex's Society for computer science been active?",
        answer: "The society has been active since 2012."
    },
    {
        question: "What types of events and activities does the society organize?",
        answer: "The society organizes various events, workshops, hackathons, and networking sessions."
    },
    {
        question: "Who has the society collaborated with other organizations over the years?",
        answer: "Key highlights include: GitHub, BCS the chartered institute for IT, Teach First, EDF, Overleaf and many more."
    },
    {
        question: "How can someone interested in collaborating with the society get in touch?",
        answer: "Interested individuals can get in touch by emailing contact@hacksussex.com."
    },
    {
        question: "What typically happens at one of your 24-hour hackathons?",
        answer: "Across the 24 Hacking window, we run a mixture of workshops with sponsors and more social events. Notonly do we do this, we also supply you with each meal from amazing Brighton-based caterers."
    },
    {
        question: "Is the hackathon suitable for both competitive and laid-back individuals?",
        answer: "Yes, there's room for both the competitive and the laid-back at our hackathons."
    },
    {
        question: "What can participants expect to gain in terms of skills and experience at an event?",
        answer: "You can expect to gain a range of skills, including tech and software skills, teamwork experience, and the opportunity to work on exciting projects in a creative environment."
    },
    {
        question: "What rules are in place for your events?",
        answer: "We abide by the Hackathons UK and Major League Hacking Codes of Conduct"
    },
    {
        question: "Are HackSussex events only for experienced programmers?",
        answer: "No, all of our events are open to programmers of all levels, making them suitable for both beginners and experienced coders."
    },
    {
        question: "Is there any cost associated with attending any HackSussex event?",
        answer: "No, attending a HackSussex event is free for participants, making them accessible to anyone interested in learning about electronics, mechanics, coding, and robotics."
    },
  ]

  return (
    <>
      <div className="p-3 mt-4 text-center">
        <h1 className="display-5">FAQ</h1>
      </div>
      <div className="container">
        <FAQTemplate faqs={qa_dict} title="faq" />
      </div>
    </>
  )

}

export default FAQ