import React from 'react'

function ComponentRenderCardMan({haineBarbat, callBackAddCos}) {

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', width: '50%', margin: 'auto', pading:'20px'}}>{
        haineBarbat?.map((unElement, index) => {
            return (
            <div style={{ borderRadius: '5px', border: '1px solid', backgroundColor:'#F1F1F1' }}key={index}><img style={{width:'350px', height:'200px'}} src={`${unElement?.picture}`}  alt={unElement?.picture}  /><div>{unElement?.name}</div><div>{unElement?.description}</div><div>{unElement?.price}</div>
            <button style={{cursor:'pointer', backgroundColor:'#4CAF50', border:'none', color: 'white', padding:'15px 32px', textAlign:'center', textDecoration:'none', display:'inline-block', fontSize:'16px'}} onClick={() => callBackAddCos(index)}>Adauga in cos</button>
            </div>
            )
        })
        }</div>
  )
}

export default ComponentRenderCardMan