import React from 'react'
import ItemCount from '../ItemCount';


const ItemDetail = ({productDetail}) => {
   
    return (
      <div style={styles.detailContainer}>
        <div style={styles.detailCard}>
        <h2 style={styles.detailTitle}>{productDetail.name}</h2>
          <div style={styles.detailRow}>
            <img style={styles.detailImg} src={productDetail.img} alt={productDetail.name}/>
            <div style={styles.detailDesc}>
              <p style={styles.detailPara}>{productDetail.description}</p>
              <p style={styles.detailPrice}>Price:{productDetail.price} USD</p>
              <ItemCount style={styles.detailCounter} name={productDetail.name} stock={productDetail.stock} initial={1} />
            </div>
          </div> 
        </div>
      </div>
      )
    }

const styles ={

  detailContainer:{
    display: 'flex',
    flexDirection: 'row' ,
    justifyContent: 'center',
    alignItems: 'center'
  },

  detailCard:{
    height: '500px' ,
    width: '600px' ,
    display: 'flex',
    flexDirection: 'column' ,
    justifyContent: 'space-evenly',
    alignItems: 'center',  
    background: '#D9BEBE', 
    MarginTop: '10%',
    margin: '1%',
    border: '1px',
    borderRadius:'30px',
    boxShadow: 'inset 0 0 5px black'
  },
  detailTitle:{
    display: 'flex',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '28px',
    paddinTop: '10px'
  },
  detailRow:{
    display: 'flex',
    flexDirection: 'row' 
  },
  detailImg:{
    display: 'flex',
    width:'300px',
    height: '300px',
    marginLeft: '30px'
  },
  detailDesc:{
    display: 'flex',
    flexDirection: 'column' ,
    paddinTop: '10px'
  },
  detailPara:{
    display: 'flex',
    width: '80%',
    height: '40px',
    fontFamily: 'Roboto',
    fontSize: '20px',
    marginLeft: '30px',
    marginBottom: '100px'
  },
  detailPrice:{
    display: 'flex',
    width: '80%',
    height: '40px',
    fontFamily: 'Roboto',
    fontSize: '24px',
    marginLeft: '55px',
    marginBottom: '5px'
  }
}
export default ItemDetail;