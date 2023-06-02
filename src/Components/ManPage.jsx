import React from 'react'
import Footer from './Footer';
import Headerbuttons from './Headerbuttons';
import HeaderLogo from './HeaderLogo';
import QuoteWoman from './QuoteWoman';
import ComponentRenderCardMan from './ComponentRenderCardMan';



function ManPage() {
const data = [{
    "id": 1,
    "name": "Tricou negru - Barbati",
    "description": "Tricou cu scris ",
    "picture": ""
  },
  {
    "id": 2,
    "name": "Tricou alb - Barbati",
    "description": "Classic denim jeans for everyday wear.",
    "picture": "https://example.com/jeans.jpg"
  },
  {
    "id": 3,
    "name": "Tricou negru - Barbati",
    "description": "Elegant and stylish dress for special occasions.",
    "picture": "https://example.com/dress.jpg"
  },
  {
    "id": 4,
    "name": "Tricou alb - Barbati",
    "description": "A cozy and warm sweater for colder days.",
    "picture": "https://example.com/sweater.jpg"
  },
  {
    "id": 5,
    "name": "Blugi bleumaren - Barbati",
    "description": "A fashionable and versatile skirt for various occasions.",
    "picture": "https://example.com/skirt.jpg"
  },
  {
    "id": 6,
    "name": "Adidasi tip sport - Barbati",
    "description": "A stylish and lightweight jacket for transitional weather.",
    "picture": "https://example.com/jacket.jpg"
  },
  {
    "id": 7,
    "name": "Adidasi nike - Barbati",
    "description": "Comfortable and casual shorts for warm days.",
    "picture": "https://example.com/shorts.jpg"
  },
  {
    "id": 8,
    "name": "Adidasi negrii Nike - Barbati",
    "description": "A chic and elegant blouse for formal or semi-formal occasions.",
    "picture": "https://example.com/blouse.jpg"
  }
]

  return (
    <div>
        <Headerbuttons />
        <HeaderLogo />
            <ComponentRenderCardMan haineBarbat={data} />
            <QuoteWoman />
        <Footer />
    </div>
  )
}

export default ManPage;