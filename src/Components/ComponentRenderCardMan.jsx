import React from 'react'
import manshirt1 from '../ProductsIMG/manshirt1.jpg'
import manshirt2 from '../ProductsIMG/manshirt2.jpg'
import manshirt3 from '../ProductsIMG/manshirt3.jpg'
import manshirt4 from '../ProductsIMG/manshirt4.jpg'
import pantsman1 from '../ProductsIMG/pantsmen1.jpg'
import manshoe1 from '../ProductsIMG/manshoe1.jpg'
import manshoe2 from '../ProductsIMG/manshoe2.jpg'
import manshoe3 from '../ProductsIMG/manshoe3.jpg'

function ComponentRenderCardMan({haineBarbat, callBackAddCos}) {

  const arrayImages=[manshirt1, manshirt2, manshirt3, manshirt4, pantsman1, manshoe1, manshoe2, manshoe3]
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', width: '80%', margin: 'auto'}}>{
        haineBarbat?.map((unElement, index) => {
            return (
            <div style={{ borderRadius: '5px', border: '1px solid', background: '#c4c4c4' }}key={index}><img style={{width:'350px', height:'200px'}} src={`${unElement?.picture}`}  alt={unElement?.picture}  /><div>{unElement?.name}</div><div>{unElement?.descriere}</div>
            <button onClick={() => callBackAddCos(index)}>Adauga in cos</button>
            </div>
            )
        })
        }</div>
  )
}

export default ComponentRenderCardMan