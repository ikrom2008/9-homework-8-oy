import React, { useEffect, useState } from 'react'
import './Hero.css'
import { FaStar } from 'react-icons/fa'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
function Hero() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [hider,setHider] = useState(null)
    useEffect(() => {
      const intervalId = setInterval(() => {
        showSlide(1);
      }, 3000);
  
      return () => clearInterval(intervalId);
    }, []);
    
    const showSlide = (n) => {
      setSlideIndex((prevIndex) => (prevIndex + n) % 3);
    };
    slideIndex < 0 ? setSlideIndex(2) : ''
  return (
    <div className='hero'>
      <div className='expbtns'>
        <div className='expbtn'>
          <button style={{background: 'yellow',width: '170px',fontWeight: '700'}}>MONTH OF RED PRICES</button>
        <button style={{width: '110px',gap: '5px'}}>From China<FaStar color='yellow' /></button>
        </div>
        <div className='expbtn'>
          <button style={{width: '130px',background: 'white',border: '1px solid gray'}}>Chilonzor Tumani</button>
          <button style={{width: '40px',background: 'white',border: '1px solid gray'}}>RU</button>
          <button style={{width: '40px'}}>UZS</button>
        </div>
      </div>
      <div className="Slider" onMouseEnter={() => setHider(true)} onMouseLeave={() => setHider(false)}>
        <div className="slider">
          <div className="slide fade" style={{ display: slideIndex == 0 ? 'flex' : 'none' }}>
            <img height={350} src="https://avatars.mds.yandex.net/get-adv/121152/2a000001784a0f612bef3d06569904acbf1d/orig" alt="Slide 1" />
          </div>
          <div className="slide fade" style={{ display: slideIndex == 1 ? 'flex' : 'none' }}>
            <img height={350} src="https://www.ecosum.ru/wp-content/uploads/aliexpress-11-11-2021.jpg" alt="Slide 2" />
          </div>
          <div className="slide fade" style={{ display: slideIndex == 2 ? 'flex' : 'none' }}>
            <img height={350} src="https://aliprosto.com/_pu/2/78267656.jpg" alt="Slide 3" />
          </div>
        </div>
        {hider ? <div className="controls">
          <button className='prev' onClick={() => showSlide(-1)}><IoIosArrowBack color='white' size={20} /></button>
          <button className='next' onClick={() => showSlide(1)}><IoIosArrowForward color='white' size={20} /></button>
        </div>: <></>}
        
      </div>
    </div>
  )
}

export default Hero
