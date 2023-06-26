import React, { useState, useEffect } from 'react'
import ComponentRenderCardMan from './ComponentRenderCardMan'
import Footer from './Footer'
import Headerbuttons from './Headerbuttons'
import HeaderLogo from './HeaderLogo'
import {ImWoman} from 'react-icons/im'
import {ImMan} from 'react-icons/im'


function ProductsPage() {
    const data = [
        {    "id": 1,
    "name": "Tricou negru - Barbati",
    "description": "Tricou cu scris ",
    "picture": "../../assets/manshirt1.jpeg",
    "price": "150 lei",
    "gender": "barbati"
    
    
  },
  {
    "id": 2,
    "name": "Tricou alb - Barbati",
    "description": "Tricou clasic alb",
    "picture": "../../assets/manshirt2.jpeg",
    "price": "150 lei",
    "gender": "barbati"

  },
  {
    "id": 3,
    "name": "Tricou negru - Barbati",
    "description": "Tricou clasic negru.",
    "price": "150 lei",
    "picture": "../../assets/manshirt3.jpeg",
    "gender": "barbati"

  },
  {
    "id": 4,
    "name": "Tricou negru - Barbati",
    "description": "Tricou clasic negru.",
    "price": "150 lei",
    "picture": "../../assets/manshirt4.jpeg",
    "gender": "barbati"

  },
  {
    "id": 5,
    "name": "Blugi bleumaren - Barbati",
    "description": "Pantaloni de blug albastrii",
    "picture": "../../assets/pantsmen1.jpeg",
    "price": "150 lei",
    "gender": "barbati"

  },
  {
    "id": 6,
    "name": "Adidasi tip sport - Barbati",
    "description": "Adidasi sport pentru barbati",
    "picture": "../../assets/manshoe2.jpeg",
    "price": "150 lei",
    "gender": "barbati"

  },
  {
    "id": 7,
    "name": "Adidasi nike - Barbati",
    "description": "Nike",
    "price": "150 lei",
    "picture": "../../assets/manshoe1.jpeg",
    "gender": "barbati"

  },
  {
    "id": 8,
    "name": "Adidasi negrii Nike - Barbati",
    "description": "Adidasi barbati negrii",
    "picture": "../../assets/manshoe3.jpeg",
    "price": "150 lei",
    "gender": "barbati"
  },
  {
    "id": 9,
    "name": "Hanorac Dama",
    "description": "Hanorac simplu alb de dama!",
    "price": "100 lei",
    "picture": "../../assets/woman1.jpeg",
    "gender": "femei"
  },
  {
    "id": 10,
    "name": "Tricou simplu alb - Dama",
    "description": "Tricou simplu alb de dama",
    "price": "50 lei",
    "gender": "femei",
    "picture": "../../assets/woman2.jpeg"
  },
  {
    "id": 11,
    "name": "Dress",
    "description": "Elegant and stylish dress for special occasions.",
    "price": "50 lei",
    "picture": "../../assets/woman.jpeg",
    "gender": "femei"
  },
  {
    "id": 12,
    "name": "Pantaloni culoare rosie - Dama",
    "description": "Pantaloni eleganti de dama",
    "price": "120 lei",
    "picture": "../../assets/pantswoman1.jpeg",
    "gender": "femei"
  },
  {
    "id": 13,
    "name": "Pantaloni scurti tip blug - Dama",
    "description": "Pantaloni scurti din blug.",
    "price":"80 lei",
    "picture": "../../assets/pantswoman2.jpeg",
    "gender": "femei"
  },
  {
    "id": 14,
    "name": "Adidasi Nike - Dama",
    "description": "Adidasi Nike dama sport",
    "price": "267 lei",
    "picture": "../../assets/womanshoe1.jpeg",
    "gender": "femei"
  },
  {
    "id": 15,
    "name": "Adidasi Sport - Dama",
    "description": "Adidasi confortabili pentru femei.",
    "price": "200 lei",
    "picture": "../../assets/womanshoe2.jpeg",
    "gender": "femei"
  },
  {
    "id": 16,
    "name": "Adidasi Rosii - Dama",
    "description": "Adidasi sportivi de dama, culoare rosie.",
    "price": "150 lei",
    "picture": "../../assets/womanshoe3.jpeg",
    "gender": "femei"
  }
    ]
    const [dataSelected, setDataSelected] = useState();
    const [cosulCumparaturi, setCosulCumparaturi] = useState([]);
    const selectionFilters = async (genderSelection) => {
      if(genderSelection === 'femei') {
const filteredPeople = data.filter(person => person.gender === 'femei');
setDataSelected(filteredPeople);
      } else if (genderSelection === 'barbati') {
const filteredPeople = data.filter(person => person.gender === 'barbati');
setDataSelected(filteredPeople);
      }
       else return setDataSelected(data);
    }

    const callBackAddCos = (index) => {
          const objectToAdd = dataSelected[index]; 

    
    setCosulCumparaturi(prevState => [...prevState, objectToAdd]);
    }
    useEffect(() => {
      selectionFilters('femei');
    }, [1])
    const deleteProdus = (index) => {
      const updatedArray = cosulCumparaturi.filter((obj) => obj.id !== index);
      setCosulCumparaturi(updatedArray);
    }
  return (
        <div style={{textAlign:'center'}}>
        <Headerbuttons />
        <HeaderLogo cosulCumparaturi={cosulCumparaturi} deleteProdus={(index) => deleteProdus(index)}/>
        <button style={{ fontSize: '60px', width: 'fit-content', height: 'fit-content', border: 'none', background: 'none', cursor:'pointer'}} onClick={() => selectionFilters('femei')}><ImWoman /></button>
        <button style={{ fontSize: '60px', width: 'fit-content', height: 'fit-content', border: 'none', background: 'none', cursor:'pointer'}} onClick={() => selectionFilters('barbati')} ><ImMan /></button>
        <ComponentRenderCardMan haineBarbat={dataSelected} callBackAddCos={(index) => callBackAddCos(index)}/>
        <Footer />
    </div>
  )
}

export default ProductsPage;