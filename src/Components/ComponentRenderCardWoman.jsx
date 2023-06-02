import React from 'react'
import woman1 from '../ProductsIMG/woman1.jpg'
import woman2 from '../ProductsIMG/woman2.jpg'
import woman3 from '../ProductsIMG/woman3.jpg'

function ComponentRenderCardWoman({haineFemeie}) {
  const arrayImages=[woman1, woman2, woman3]
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', width: '80%', margin: 'auto'}}>{
        haineFemeie?.map((unElement, index) => {
            return (
            <div style={{ borderRadius: '4px', border: '1px solid', background: '#c4c4c4' }}key={index}><img style={{width:'30px', height:'30px'}} src={arrayImages[index]} href="" /><div>{unElement?.name}</div><div>{unElement?.descriere}</div>
            <button onClick={() => console.log(index)}>test</button>
            </div>
            )
        })
        }</div>
  )
}

export default ComponentRenderCardWoman