import React from "react";

function CardNews({ type, img, name, description }) {
        return (
                <div className="Card-News">
                        <img src={img} className="img-cardNews" />
                        <p className="CardNews-Type">{type}</p>
                        <hr />
                        <h5 className="CardNews-name">{name}</h5>

                        <h5 className="CardNews-Descrption">{description}</h5>


                        <button className="Button-Applay">Applay Now</button>
                </div>
        )
}

function CardLists({ articles1 }) {
        return (
                <div className="card-list">
                        {articles1.map((article) => (
                                <CardNews
                                        key={article.title}
                                        type={article.source.id}
                                        title={article.title}
                                        img={article.urlToImage}
                                        description={article.description}
                                />
                        ))}
                </div>
        );
}

export default CardLists;
