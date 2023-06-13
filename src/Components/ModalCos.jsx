import React from 'react'

function ModalCos({closModal, cosulCumparaturi, deleteProdus}) {
  return (
    <div style={{ zIndex: '1000',
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.7)'}}>
        <div style={{
  position: 'fixed',
  width:'60%',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#fff',
  borderRadius: '6px',
  color: '#000',
  display: 'flex',
  flexDirection: 'column',
        }}>
            {cosulCumparaturi?.length ?
            <div>
{
        cosulCumparaturi?.map((unElement, index) => {
            return (
            <div style={{ borderRadius: '5px', border: '1px solid', background: '#c4c4c4' }}key={index}><div><img style={{width:'350px', height:'200px'}} src={`${unElement?.picture}`}  alt={unElement?.picture}  />{unElement?.name}</div><div>{unElement?.descriere}</div>
            <button onClick={(e) => deleteProdus(unElement?.id)}>remove this</button>
            </div>
            )
        })
        }
        </div> :
        <div>Inca nu ai selectat nimic</div>}
</div>
<button  style={{
  position: 'fixed',
  width:'20px',
  left: '75%',
  top: '49%'}} onClick={closModal}>x</button>
    </div>
  )
}

export default ModalCos