import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import { useEffect } from 'react';
import './stylesx/pokeinfo.css'

const PokeInfo = () => {
const params = useParams();
const [pokemon, getPokemon] = useFetch();

useEffect(() => {
  const url = `https://pokeapi.co/api/v2/pokemon/${params.id}`;
getPokemon(url);
}, [params.id])

  
 
  return (
  <div className='poke_background'>

<section className='pokeinfo' >
      <figure className='img_container'>
            <img className='poke_img' src ={pokemon?.sprites.other['official-artwork'].front_default} alt='pokemon image'/>
      </figure>
        <div className='pokeidName_container'>
            <span className='poke_id' >PoKeMoN #{pokemon?.id}</span>
            <h2 className='poke_name'>{pokemon?.name}</h2>
        </div>
<div className='pokeParent_container'>
      <div className='pokeH-Weight_container'>
            <ul>
                <li className='poke_weight'><span>Weight: </span><span>{pokemon?.weight}</span></li>
                <li className='poke_height'><span>Height: </span><span>{pokemon?.height}</span></li>
            </ul>
      </div>
      <div className='poketype_container'>
              <article>
                <h3 className='type_title'>Types</h3>
                    <ul className='type_list'>
                        {
                          pokemon?.types.map(type => (
                            <li className='poketype_item' key={type.type.url}>{type.type.name}</li>
                          ))
                        }
                    </ul>
              </article>
      </div>
      <div className='skills_container'>

              <article>
                <h3 className='skills_title'>Skills</h3>
                <ul className='skills_list'>
                  {
                    pokemon?.abilities.map(skill => (
                      <li className='skills_item' key={skill.ability.url}>{skill.ability.name}</li>
                    ))
                  }
                </ul>
              </article>
      </div>
</div>
<div className='Parentcontainer_statmove'>
      <div className='stats_container'>
            <h2 className='stats_title'>Stats</h2>
                    <ul className='pokeinfo_stats'>
                      {
                        pokemon?.stats.map(stat => (
                          <li className='stats_item' key={stat.stat.url}><span>{stat.stat.name}</span><span> {stat.base_stat}/150</span><div className='stats_bar'><div style={{ width: `${(stat.base_stat / 150) * 100}%`}}className='stats_prog'></div></div></li>
                        ))    
                      }
                    </ul>
      </div>
      <div className='movement_container'>
            <h2 className='movement_title'>Abilities</h2>
                    <ul className='movement_list'>
                        {
                          pokemon?.moves.map(move => (
                            <li className='movement_skills' key={move.move.url}>{move.move.name}</li>
                          ))
                        }
                    </ul>
      </div>
</div>
</section>
                        </div>
  )
}

export default PokeInfo