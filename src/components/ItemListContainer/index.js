import React, { useEffect, useState } from 'react';
import ItemList from "../itemList";
import { productsData } from '../../mocks/productsmock';
import loadingGif from "../../assets/images/loading.gif"
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const [products, setProducts]=useState([]);
    const [loading, setLoading]=useState(true);

    const { categoryId } = useParams();
      useEffect(()=>{
        productsData(categoryId)
        .then((res) => {
          setProducts(res);
      })
      .catch((error) => {
          console.log(error);
      })
      .finally(() => {
          setLoading(false);
      });
      },[categoryId])
  return (
    <div>
       {loading ? <div style={styles.loading}><img style={styles.loadingGif}src={loadingGif} alt="loading" /></div>: 
        <ItemList products={products}/> }       
    </div>
  );
};

const styles = {
    loading:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '15%'
    },
    loadingGif:{
        display: 'flex',
        width: '10%'
    }
}
export default ItemListContainer;