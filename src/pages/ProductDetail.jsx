import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import StarRating from '../components/StarRating';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Товар не найден');
        return res.json();
      })
      .then(data => setProduct(data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error.message}</div>;

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <img src={product.image} alt={product.title} style={{ width: '100%', height: '300px', objectFit: 'contain' }} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Цена: ${product.price}</p>
      <div>Рейтинг: <StarRating rating={product.rating.rate} /></div>
      <Link to="/products">← Вернуться к списку</Link>
    </div>
  );
}

export default ProductDetail;
