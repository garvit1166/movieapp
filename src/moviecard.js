import React from "react";

class Moviecard extends React.Component{
    constructor(){
        super();
    }
    // handleIncrease=()=>{
    //     if(this.state.star>=5){
    //         return;
    //     }
    //     this.setState({
    //         star: this.state.star+0.5
    //     })
    // }
    // handleFavourite=()=>{
    //     this.setState({
    //         favourite:!this.state.favourite
    //     })
    // }
    // handleCart=()=>{
    //     this.setState({
    //         cart:!this.state.cart
    //     })
    // }
    // handleDecrease=()=>{
    //     // this.setState({
    //     //     star: this.state.star-0.5
    //     // })
    //     if(this.state.star<=0){
    //         return;
    //     }
    //     this.setState((prevState)=>{
    //         return{
    //             star:prevState.star-0.5
    //         }
    // })

    // }

    render(){
        const {title, rating, price,plot,star,favourite,cart,poster}=this.props.movies;
        return(
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="poster" src={poster}></img>
                    </div>
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. {price}</div>
                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img alt="minus" 
                                
                                src="https://cdn-icons-png.flaticon.com/128/43/43625.png" 
                                className="str-btn"/>

                                <img alt="star" 
                                src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" 
                                className="stars"/>

                                <img alt="plus"
                                onClick={()=>{this.props.addStars(this.props.movies)}} 
                                src="https://cdn-icons-png.flaticon.com/128/1828/1828925.png" 
                                className="str-btn"/>
                                <span className="starCount">{star}</span>
                            </div>
                            {favourite?<button className="unfavourite-btn" >Unfavourite</button>:<button className="favourite-btn" >Favourite</button>}
                            <button className={cart?"add-cart-btn":"cart-btn"} >{cart?"Remove from Cart":"Add to Cart"}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Moviecard;