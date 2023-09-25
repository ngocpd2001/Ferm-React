import React,  {Component} from "react";

export default class Player extends Component {
    render() {
        return (
            <div className="container">
                <div className="column">
                    <div className="card">
                        <img src='assets/images/cr.jpg'/>
                        <h3>Cristiano Ronaldo</h3>
                        <p className="title">Manchester United</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img src='assets/images/m.jpg'/>
                        <h3>Cristiano Ronaldo</h3>
                        <p className="title">Manchester United</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>


            </div>
        )
    }

   
} 