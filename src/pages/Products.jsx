import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import StarRating from '../components/StarRating';

function Products() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error.message}</div>;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
      {items.map(item => (
        <div key={item.id} style={{ border: '1px solid #ccc', padding: '8px' }}>
          <img src={item.image} alt={item.title} style={{ width: '100%', height: '150px', objectFit: 'contain' }} />
          <h3><Link to={`/product/${item.id}`}>{item.title}</Link></h3>
          <div><StarRating rating={item.rating.rate} /></div>
        </div>
      ))}
    </div>
  );
}

export default Products;