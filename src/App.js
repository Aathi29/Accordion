import { useState } from 'react';
import './App.css';

export default function App() {

  const [selected,setSelected] = useState(null);
  const toggle = (i) => {
    if(selected===i){
      return setSelected(null);
    }
    setSelected(i);
  }
  return (
    <div className="wrapper">
      <div className='accordion'>
        {data.map((item,i) => (
            <div className='item'>
              <div className='title' onClick={() => toggle(i)}>
                <h2>{item.question}</h2>
                <span>{selected === i ? '-' : '+' }</span>
              </div>
              <div className={selected === i ? 'content show' : 'content' }>
                {item.answer}
              </div>
            </div>
        ))
        }
      </div>
    </div>
  );
}
const data = [
  {
    question: 'Happiness',
    answer: 
        '"Think of all the beauty still left around you and be happy" "Happiness is an inside job"'
  },
  {
    question: 'Smile',
    answer: 
        '"Nothing you wear is important than your smile. Happy Smile." "A smile is a curve that set everything straight"',
  },
  {
    question: 'Enjoyment',
    answer: 
        '"The best way to pay for a lovely moment is to enjoy it. Be Kind" "Life is too short.Enjoy it while it is yours"',
  },
  {
    question: 'Motivation',
    answer: 
        '"Be there for others, but never leave yourself behind. Motivate urself" "Small changes can make a big difference"',
  },
]
