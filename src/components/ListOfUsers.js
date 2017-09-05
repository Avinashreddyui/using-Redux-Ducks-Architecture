/**
 * Created by avvinash on 8/21/2017.
 */
import React from "react";
import {connect} from "react-redux";
import * as searchReducer from "../searchDucks/SearchDucksReducer"
import UserDetails from "./users";
import AddNew from "./newUser";
import AddToCart from "./AddToCart";
import _ from "lodash";

class ListOfUsers extends React.Component{
   constructor(props){
       super(props)
   }

    render(){
        return <div>
            <input onClick={()=>this.props.searchingRequest()} type="submit"/>
              <AddNew/>
            <div className="mainApp">
            <div className="users_lists">
                {this.props.serverUsers.map((dynamicComponent, i) => <UserDetails
                    key = {i} componentData = {dynamicComponent}
                    btnClick={()=>this.props.addToCart(this.props.serverUsers[i])}
                    />
                )
                }
            </div>
                <div className="add_to_cartList">
                {this.props.cartItems.map((dynamicComponent, i) => <AddToCart
                        key={i}
                        name={dynamicComponent.name}
                        price={dynamicComponent.price}
                    />
                )
                }
                </div>
                <div>
                    <p>Cart Total</p>
                    <p>{this.props.cartTotal}</p>
                </div>
            </div>
        </div>
    }
}
const mapStateToProps=(state)=>{
    return{
     data:state.search.data,
        serverUsers:state.search.users,
        cartItems:state.search.cartItems,
        cartTotal:state.search.cartTotal
    }
};
const mapDispatchToProps=(dispatch)=>{
    return{
        searchingRequest:()=>dispatch(searchReducer.searchRequest()),
        addToCart:(obj)=>dispatch(searchReducer.addToCartActions(obj))
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(ListOfUsers);