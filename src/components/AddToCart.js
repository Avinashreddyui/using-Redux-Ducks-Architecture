/**
 * Created by avvinash on 9/5/2017.
 */
import React from "react";
class AddToCart extends React.Component{
    render(){
        return(
            <div className="users_list">
                <p>{this.props.name}</p>
                <p>{this.props.price}</p>
            </div>
        );
    }
}
export default AddToCart;