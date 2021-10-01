import Batman from './img/batman.svg';
import Cyborg from './img/cyborg.svg';
import Deathstroke from './img/deathstroke.svg';
import GreenLight from './img/greenLight.svg';
import Harley from './img/harley.svg';
import Doctor from './img/doctorHelm.svg';
import WounderWoman from './img/wonderWoman.svg';
import EagleWoman from './img/eagleWoman.svg'
import CatWoman from './img/catWoman.svg'
import GreenArrow from './img/greenArrow.svg'
import NightWing from './img/NightWing.svg'
import Joker from './img/joker.svg'
import backSide from './img/avengers.svg';

import { useState } from 'react/cjs/react.development';
import Header from './components/Header/Header';
import Field from './components/Field/Field';

export default function App() {

  const [reset, setReset] = useState(false);
  const [finishGame, setFinishGame] = useState(false);


  const images = [
    {
      id: 1,
      name: 'Batman',
      path: Batman
    },
    {
      id: 2,
      name: 'Cyborg',
      path: Cyborg
    },
    {
      id: 3,
      name: 'Deathstroke',
      path: Deathstroke
    },
    {
      id: 4,
      name: 'GreenLight',
      path: GreenLight
    },
    {
      id: 5,
      name: 'Harley',
      path: Harley,
      disabled: false
    },
    {
      id: 6,
      name: 'Doctor',
      path: Doctor
    },
    {
      id: 7,
      name: 'WounderWoman',
      path: WounderWoman
    },
    {
      id: 8,
      name: 'EagleWoman',
      path: EagleWoman
    },
    {
      id: 9,
      name: 'CatWoman',
      path: CatWoman
    },
    {
      id: 10,
      name: 'GreenArrow',
      path: GreenArrow
    },
    {
      id: 11,
      name: 'NightWing',
      path: NightWing
    },
    {
      id: 12,
      name: 'Joker',
      path: Joker
    }
  ]

  const emptyCard = {
    id: 'empty',
    name: 'empty',
    path: null

  }

  const pairOfCards = [...images, ...images];

  const shuffle = () => {
    pairOfCards.sort((el) => el.id !== 'empty' ? Math.random() - 0.5 : '');
    pairOfCards.splice(pairOfCards.length/2, 0, emptyCard);
  }

  shuffle();

  const restart = () => {
    setReset(true);
    setFinishGame(false);

    setTimeout(() => {
      setReset(false);
    }, 1)
  }

  const finish = () => {
    setFinishGame(true);
  }

    return (
      <div className="App">
        <Header 
          key={new Date().getTime() + 1} 
          finish={finishGame}
          restart={restart}/>
        { finishGame 
        ? <div className='message'>Congratulations, you win!</div> 
        :  <Field key={new Date().getTime()} 
            cards={pairOfCards}
            reset={reset}
            shuffle={shuffle}
            finish={finish}
            backSide={backSide} />
       }
      </div>
    );
}
