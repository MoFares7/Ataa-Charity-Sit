import React from "react";

function Card({ key1, title, image, description }) {
        return (
                <div className="cardType">
                        <div className="Header-Card">
                                <div className="Point">
                                        <h1>.</h1>
                                </div>
                                <h1 className="CardType-Type">{key1}</h1>
                        </div>
                        <img src={image} alt={title} className='img-card' />
                        <div className="card-body">
                                <h3 className="CardType-name">{title}</h3>
                                <p className="CardType-Descrption">{description}</p>
                                <button className="Button-Read">READ MORE</button>                       </div>
                </div>
        );
}

function CardList({ articles }) {
        return (
                <div className="card-list">
                        {articles.map((article) => (
                                <Card
                                        key={article.title}
                                        key1={article.source.id}
                                        title={article.title}
                                        image={article.urlToImage}
                                        description={article.description}
                                />
                        ))}
                </div>
        );
}

export default CardList;
