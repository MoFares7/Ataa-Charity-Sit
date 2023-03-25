import React from "react";

export default function CardType() {
        return (
                <div className="cardType">
                        <div className="Header-Card">
                            <div className="Point">
                                <h1>.</h1>
                        </div>
                        <h1 className="CardType-Type">TECNOLOGY</h1>    
                        </div>
                        
                        <img className="img-card" src="https://images.unsplash.com/photo-1679189792474-6c2796dc78ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80" />
                     
                        <h5 className="CardType-name">The News to apple</h5>
                        
                                <h5 className="CardType-Descrption">Totla Money</h5>
                        
                        <button className="Button-Read">READ MORE</button>

                </div>
        )
}