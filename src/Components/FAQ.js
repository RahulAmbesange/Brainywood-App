// FAQ.js

import React, { useState } from 'react';
import '../CSS/FAQ.css';

const FAQ = () => {
  const initialFAQState = [
    { question: 'What is Brainywood?', answer: 'Brainywood is an innovative online learning platform that offers exclusive learning content and new courses added every month. It is a blended learning app that works on an entirely subscription-based pricing model.', isOpen: false },
    { question: 'How much does Brainywood cost?', answer: 'Currently, brainywood offers one plan with different levels of Membership plan where you can watch unlimited content and explore everything on the app.', isOpen: false },
    { question: 'Where can you watch the learning courses?', answer: 'You can download the Brainywood android/ios app from the play/app store and you can even watch all the courses on all kinds of laptops, desktops, other devices which have a web browser. You can access it from anywhere in the universe with an internet connection and you will be able to complete the course.', isOpen: false },
    { question: 'Who should buy this plan?', answer: 'If you want to learn new scientific methods of learning in a stress-free manner, other holistic development skills, and want to grow yourself should buy this plan. The best thing about this plan is that new unique courses are added every month based on different genres and that is provided to you free in this plan. Further, Every course on this platform is developed in a self-learning manner which will help you learn at your own pace.', isOpen: false },
    { question: 'Can I cancel the membership after completion of the time period?', answer: 'Yes, Brainywood is flexible. You can cancel your membership anytime. There are no annoying contracts or commitments. You are completely free if you don\'t want to continue the Brainywood membership after the plan expires. No money will be deducted.', isOpen: false },
    { question: 'What is the refund policy?', answer: 'Currently, brainywood offers one plan with different levels of Membership plan where you can watch unlimited content and explore everything on the app.', isOpen: false },
  ];

  const [faqItems, setFAQItems] = useState(initialFAQState);

  const toggleFAQ = (index) => {
    setFAQItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[index].isOpen = !updatedItems[index].isOpen;
      return updatedItems.map((item, i) => (i !== index ? { ...item, isOpen: false } : item));
    });
  };

  return (
    <>
      {faqItems.map((item, index) => (
        <div key={index} className={`faq-item ${item.isOpen ? 'open' : ''}`} onClick={() => toggleFAQ(index)}>
          <div className="question">
            <span className="text">{item.question}</span>
            <span className={`arrow ${item.isOpen ? 'open' : ''}`}>{item.isOpen ? '🔽' : '▶'}</span>
          </div>
          {item.isOpen && (
            <div className="answer">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default FAQ;
