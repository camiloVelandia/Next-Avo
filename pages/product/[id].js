import React from 'react';
import {useRouter} from 'next/router'

const ProductItem = () => {
  const {query:{id}}= useRouter()
  return (
    <div>
      producto {id}
    </div>
  );
};

export default ProductItem;