import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setTrainer  } from '../store/slices/trainer.slice';
import { useNavigate} from 'react-router-dom'
import './stylesx/homepage.css';
 
const HomePage = () => { 

    const dispatch = useDispatch(); 

    const navigate = useNavigate();

    const textInput = useRef();

const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setTrainer(textInput.current.value.trim()));
    textInput.current.value = '';
    navigate('/pokedex');
}

  return (
    <div className='parent_container'>
      
    <div className='pokeHeader_trainer'>
      <h1 className='trainer_title'>Hi Trainer</h1>
      <h2 className='give_name'>to start give your name</h2>
        <form onSubmit={handleSubmit}>
            <input className='start_input' ref={textInput} type='text'  />
           <button className='start_btn'>Start</button>
        </form>
    </div>
    </div>
  ) 
}

export default HomePage