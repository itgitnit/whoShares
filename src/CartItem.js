import React from "react";

class CartItem extends React.Component {
    /*Here we defining a  state*/
    constructor() {
        super(); // Here we r using constructor for cartItem, So this is not react thing, this is javascript thing. Whenever we r inheriting from another class like we r doing here, we r inheriting from component class in react, we first need to call the constructor of that parent class becoz we r using the constructor. And we do that here by calling super(). Basically, super() call the constructor of component class in react.
        this.state = {
            price: 999,
            title: 'Mobile Phone',
            qty: 1,
            img: ''
        }
        // 2nd way -> this.increaseQuantity = this.increaseQuantity.bind(this);

    }//3rd way is to use arrow function -> Best Way
    increaseQuantity = () => {
        console.log('this', this.state);


    }

    render() {
        const { title, price, qty } = this.state; //This is object destructing becoz agr hum yeh ni likhte toh {title} ke jagah {this.state.title} likhnaa padtaa.
        return (
            // Jsx Start 
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="rigth-block">
                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ color: '#777' }}>{price}</div>
                    <div style={{ color: '#777' }}>{qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img
                            alt="increase"
                            className="action-icons"
                            src="https://image.flaticon.com/icons/svg/992/992651.svg"
                            // 1st way-> onClick={this.increaseQuantity.bind(this)}
                            onClick={this.increaseQuantity}
                        // Jsx End
                        />
                        <img
                            alt="decrease"
                            className="action-icons"
                            src="https://image.flaticon.com/icons/svg/1665/1665612.svg"
                        />
                        <img
                            alt="delete"
                            className="action-icons"
                            src="https://image.flaticon.com/icons/svg/1214/1214428.svg"
                        />
                    </div>
                </div>

            </div>

        );
    }
}

const styles = {
    image: { //This is a javascript Object
        height: 100,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;