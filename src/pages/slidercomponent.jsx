import React from 'react'
import styles from "../css/slider.module.css"

function Slidercomponent({sliderdata}) {

  return (
    <div className={styles.parent}>
      <div>
        <img src={sliderdata.image} alt={sliderdata.image} />
        <h2 className={styles.head}>{sliderdata.heading}</h2>
        <p className={styles.dis}>{sliderdata.description}</p>
      </div>
      <div className={styles.downdiv}>
        <img src={sliderdata.pic} alt={sliderdata.pic} height={81.09} width={89.61} className={styles.profile}/>
        <div className={styles.downdown}>
          <h1>{sliderdata.name}</h1>
          <p>{sliderdata.profession}</p>
        </div>
      </div>
    </div>
  )
}

export default Slidercomponent


// <div className='caurosal_card' key={carddata.id}>
//     <img src={carddata.image} alt='rating' />
//     <div className='card_title'>{carddata.heading}</div>
//     <div className='card_description'>{carddata.description}</div>
//     <div className='card_personal_detail'>
//         <img src={carddata.pic} alt='profile' />
//         <div className='profile'>
//             <div className='card_title'>{carddata.name}</div>
//             <div className='card_description'>{carddata.profession}</div>
//         </div>
//     </div>
// </div>