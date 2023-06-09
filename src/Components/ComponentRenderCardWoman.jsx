import React from 'react'
import woman1 from '../ProductsIMG/woman1.jpg'
import woman2 from '../ProductsIMG/woman2.jpg'
import woman3 from '../ProductsIMG/woman3.jpg'
import pantswoman1 from '../ProductsIMG/pantswoman1.jpg'
import pantswoman2 from '../ProductsIMG/pantswoman2.jpg'
import womanshoe1 from '../ProductsIMG/womanshoe1.jpg'
import womanshoe2 from '../ProductsIMG/womanshoe2.jpg'
import womanshoe3 from '../ProductsIMG/womanshoe3.jpg'


function ComponentRenderCardWoman({haineFemeie}) {
  const arrayImages=[woman1, woman2, woman3, pantswoman1, pantswoman2, womanshoe1, womanshoe2, womanshoe3]
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', width: '80%', margin: 'auto'}}>{
        haineFemeie?.map((unElement, index) => {
            return (
            <div style={{borderRadius: '5px', border: '1px solid' }}key={index}><img style={{width:'350px', height:'200px'}} src={arrayImages[index]} href="" /><div>{unElement?.name}</div><div>{unElement?.description}</div><div>{unElement?.price}</div>
            <button onClick={() => console.log(index)}>Adauga in Cos</button>
            </div>
            )
        })
        }</div>
  )
}

export default ComponentRenderCardWoman