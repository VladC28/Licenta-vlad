import React from 'react'

function ComponentRenderCardMan({haineBarbat, callBackAddCos}) {

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