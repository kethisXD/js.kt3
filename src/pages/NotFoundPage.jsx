import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Страница не найдена</h1>
      <p>К сожалению, такой страницы не существует.</p>
      <Link to="/products">Перейти к списку товаров</Link>
    </div>
  );
}

export default NotFoundPage;