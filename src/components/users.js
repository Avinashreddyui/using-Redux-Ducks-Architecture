/**
 * Created by avvinash on 8/25/2017.
 */
import React from "react";
class users extends React.Component{
    render(){
    return(
       <div className="users_list">
           <p>{this.props.componentData.name}</p>
           <p>{this.props.componentData.price}</p>
           <button onClick={this.props.btnClick}>Add to cart</button>
       </div>
    );
}
}
export default users;

