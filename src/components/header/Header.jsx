import { FaBoxOpen, FaHeart, FaShoppingCart } from 'react-icons/fa'
import './Header.css'
import { GrCatalog } from 'react-icons/gr'
import { useState } from 'react'
function Header({product}) {
  const [search,setSearch] = useState('')
  const [searchent,setSearchent] = useState(true)
  let handlesearch = (data) => {
      return data?.filter((user) => user.title.toLowerCase().includes(search.toLowerCase().trim()))
  }
  let pr = handlesearch(product)?.map((item) => (
    <li key={item.id}>
      <img src={item.images[0]} width={30} height={30} alt="" />
      <p>{item.title}</p>
    </li>
  ))
  return (
    <><br />
      <header className='header'>
        <nav className='navbar'>
          <h2>AliExpress</h2>
          <div className='expresshead'>
            <button><GrCatalog  size={20} />Catalog</button>
            <div className='expressinp'>
              <input value={search} onChange={(e) => setSearch(e.target.value)} type="search" name="" id="" placeholder='hasbro' />
              <button>Search</button>
               <ul className='searched'>
                {
                  search.trim() ?
                  handlesearch(product).length ?
                  pr.slice(0,8)
                  :
                  <li>Noto'g'ri ma'lumot</li>
                  :
                   <></>
                }
              </ul>
              
            </div>
            <button><FaBoxOpen size={20} /> Products</button>
            <button><FaShoppingCart size={20}/> Cart</button>
            <button><FaHeart size={20}/> Wishlist</button>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
