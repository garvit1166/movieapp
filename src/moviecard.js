import React from "react";

class Moviecard extends React.Component{
    constructor(){
        super();
        this.state={
            title:"3 Idiots",
            plot:"Very Funny Movie Based on Enginnering and Friendship",
            price: 199,
            rating: 7.7,
            star:0,
            favourite:false,
            cart:false
        }
    }
    handleIncrease=()=>{
        if(this.state.star>=5){
            return;
        }
        this.setState({
            star: this.state.star+0.5
        })
    }
    handleFavourite=()=>{
        this.setState({
            favourite:!this.state.favourite
        })
    }
    handleCart=()=>{
        this.setState({
            cart:!this.state.cart
        })
    }
    handleDecrease=()=>{
        // this.setState({
        //     star: this.state.star-0.5
        // })
        if(this.state.star<=0){
            return;
        }
        this.setState((prevState)=>{
            return{
                star:prevState.star-0.5
            }
    })

    }

    render(){
        const {title, rating, price,plot,star,favourite,cart}=this.state;
        return(
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="poster" src="data:image/jpeg;base64,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"></img>
                    </div>
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. {price}</div>
                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img alt="minus" 
                                onClick={this.handleDecrease}
                                src="https://cdn-icons-png.flaticon.com/128/43/43625.png" 
                                className="str-btn"/>

                                <img alt="star" 
                                src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" 
                                className="stars"/>

                                <img alt="plus"
                                onClick={this.handleIncrease} 
                                src="https://cdn-icons-png.flaticon.com/128/1828/1828925.png" 
                                className="str-btn"/>
                                <span className="starCount">{star}</span>
                            </div>
                            {favourite?<button className="unfavourite-btn" onClick={this.handleFavourite}>Unfavourite</button>:<button className="favourite-btn" onClick={this.handleFavourite}>Favourite</button>}
                            <button className={cart?"add-cart-btn":"cart-btn"} onClick={this.handleCart}>{cart?"Remove from Cart":"Add to Cart"}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Moviecard;