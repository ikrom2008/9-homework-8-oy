import { FaRegHeart } from 'react-icons/fa';
import './Main.css';
import { useStore } from '../../context/wishlist';

function Main({ product }) {
  const togwish = useStore(state => state.togwish);
  let prs = product?.products?.map((item) => (
    <li className='item' key={item.id}>
      <img  src={item.images[0]} alt="" />
      <button onClick={() => togwish(item)} className='likebtn'><FaRegHeart /></button>
      <h4>{item.title.slice(0, 15)}</h4>
      <p>Bought: {item.stock}</p>
      <h5>{item.price} UZS</h5>
    </li>
  ));
  
  return (
    <>
      <main>
        <p>Sale</p>
        <ul className='items'>
          {prs}
        </ul>
      </main>
    </>
  );
}

export default Main;
