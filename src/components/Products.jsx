import React from 'react';
import '../styles/products.css'; // Импортируем стили

const Products = () => {
    return (
        <section id="products" className="products-section">
            <div className="product-section">
                <h3>Наш продукт: WeCon</h3>
                <p>WeCon — это инновационная онлайн-платформа,
                    которая помогает бизнесам привлекать клиентов через интерактивные события
                    и уникальные предложения.
                    WeCon соединяет компании с аудиторией,
                    предлагая пользователям участие в мероприятиях с возможностью получения эксклюзивных офферов,
                    что увеличивает поток посетителей и стимулирует рост вашего бизнеса.</p>
            </div>
        </section>
    );
};

export default Products;
