import React, { useEffect, useRef } from 'react'
import useFetch from '../../hooks/useFetch'
import './styleslol/pokeSelect.css'

const PokeSelect = ({setSelectValue}) => {

    const [types, getTypes] = useFetch();

    
    useEffect(() => {
    const url = 'https://pokeapi.co/api/v2/type/'
    getTypes(url)

}, [])

const selectOption = useRef();

const handleChange = () => {
setSelectValue(selectOption.current.value)
}

  return (
    <select className='select_option' ref={selectOption} onChange={handleChange }>
        <option className='poke_option2' value="">All pokemons</option>
        {
            types?.results.map(type => (
                <option  key={type.url} value={type.url}>{type.name}</option>
            ))
        }
    </select>
  )
}

export default PokeSelect