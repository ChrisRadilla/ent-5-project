import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './stylesx/pokedex.css';
import useFetch from '../hooks/useFetch';
import { useEffect } from 'react';
import PokeCard from '../components/pokedex/PokeCard'
import { useRef } from 'react';
import PokeSelect from '../components/pokedex/PokeSelect';

const Pokedex = () => {

  const [selectValue, setSelectValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [pokemons, getPokemons, getType] = useFetch();

const trainer = useSelector(store => store.trainer)
 
useEffect(() => {
  if( selectValue){
  getType(selectValue);
  } else {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=8';
  getPokemons(url);
  }
}, [selectValue])
//1302 pokemons
const textInput = useRef();

 
const handleSubmit = (event) => {
  event.preventDefault();
  setInputValue(textInput.current.value.toLowerCase().trim());
  textInput.current.value = '';
};


const pokeSearch = (poke) => {
  console.log("Input Value:", inputValue);
  const perName = poke.name.toLowerCase().includes(inputValue.toLowerCase().trim());
  console.log("Pokemon Name:", poke.name, "PerName:", perName);
  return perName;
}


  return (
<section className='pokedex'>
    <div className='container_outside'>

        <div className='inside_container'>
              <h2 className='pokedex_title'>Welcome <span>{trainer},
              </span> here you can find your favorite pokemons!</h2>
              
                <div>
                    <form onSubmit={handleSubmit}>
                        <input className='search_input' ref={textInput} type="text" />
                        <button className='btn-search' >Search</button>
                    </form>
                    <PokeSelect
                    setSelectValue = {setSelectValue }
                    />
                </div>
        </div>
    </div>
            <div className='bottom_half'> 
                  {
                    pokemons?.results.filter(pokeSearch).map((poke) => (
                      <PokeCard
                      key={poke.url}
                      url={poke.url}
                      />
                    ))
                  }
            </div>
    </section>
  )
}

export default Pokedex