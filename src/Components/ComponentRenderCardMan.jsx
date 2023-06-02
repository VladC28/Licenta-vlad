import React from 'react'

function ComponentRenderCardMan({haineBarbat}) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', width: '80%', margin: 'auto'}}>{
        haineBarbat?.map((unElement, index) => {
            return (
            <div style={{ borderRadius: '5px', border: '1px solid', background: '#c4c4c4' }}key={index}><div>{unElement?.picture}</div><div>{unElement?.name}</div><div>{unElement?.descriere}</div></div>
            )
        })
        }</div>
  )
}

export default ComponentRenderCardMan