import React from 'react'
import Footer from './Footer';
import Headerbuttons from './Headerbuttons';
import HeaderLogo from './HeaderLogo';
import QuoteWoman from './QuoteWoman';
import ComponentRenderCardWoman from './ComponentRenderCardWoman';
import woman1 from '../ProductsIMG/woman1.jpg'


function WomanPage() {
const data = [{
    "id": 1,
    "name": "Hanorac Dama",
    "description": "Hanorac simplu alb de dama!",
    "price": "100 lei"
  },
  {
    "id": 2,
    "name": "Tricou simplu alb - Dama",
    "description": "Classic denim jeans for everyday wear.",
    "price": "50 lei"
  },
  {
    "id": 3,
    "name": "Dress",
    "description": "Elegant and stylish dress for special occasions.",
    "price": "50 lei"
  },
  {
    "id": 4,
    "name": "Pantaloni culoare rosie - Dama",
    "description": "A cozy and warm sweater for colder days.",
    "price": "120 lei"
  },
  {
    "id": 5,
    "name": "Pantaloni scurti tip blug - Dama",
    "description": "A fashionable and versatile skirt for various occasions.",
    "price":"80 lei"
  },
  {
    "id": 6,
    "name": "Adidasi Nike - Dama",
    "description": "A stylish and lightweight jacket for transitional weather.",
    "price": "267 lei"
  },
  {
    "id": 7,
    "name": "Adidasi Sport - Dama",
    "description": "Comfortable and casual shorts for warm days.",
    "price": "200 lei"
  },
  {
    "id": 8,
    "name": "Adidasi Rosii - Dama",
    "description": "A chic and elegant blouse for formal or semi-formal occasions.",
    "price": "150 lei"
  }
]

  return (
    <div>
        <Headerbuttons />
        <HeaderLogo />
            <ComponentRenderCardWoman haineFemeie={data} />
            <QuoteWoman />
        <Footer />
    </div>
  )
}

export default WomanPage;