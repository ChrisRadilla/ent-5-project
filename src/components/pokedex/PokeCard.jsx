import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch';
import './styleslol/pokeCardz.css'
import { useNavigate } from 'react-router-dom';


const PokeCard = ({url}) => {

    const [pokemon, getPokemon ] = useFetch(); 

    const navigate = useNavigate();
 
    useEffect(() => { 
    getPokemon(url)
;    }, []) 
  

const handlePokemon = () => {
navigate(`/pokedex/${pokemon.id}`);
}

  return (
<div className='poke-container'>
      <article onClick={handlePokemon} className='pokecard'>
        <div className={`pokecard_back ${pokemon?.types[0].type.name}`}>
        </div>
            <figure className='pokecard_img'>
                <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="pokemanimage" />
            </figure>
    <h3 className='pokecard_name2'>{pokemon?.name}</h3>
            <div className='type_title2'>Type</div>
        <ul className='pokecard_types'>
            {
                pokemon?.types.map(type => (
                    <li  className={`slot${type.slot}`}  key={type.type.url}>{type.type.name}</li>
                ))
            }
        </ul>
        <hr />
                <ul className='pokecard_stats'>
                    {
                        pokemon?.stats.map(stat => (
                            !stat.stat.name.includes('-') &&
                            <li key={stat.stat.url}><span>{stat.stat.name}</span><span>{stat.base_stat}</span></li>
                        ))    
                    }
                </ul>
    </article>
</div>
  )
}

export default PokeCard