/**
 * Created by avvinash on 8/25/2017.
 */
import React from "react";
import {connect} from "react-redux";
import * as searchReducer from "../searchDucks/SearchDucksReducer";

class newUser extends React.Component{
    constructor(props){
        super(props);
     this.addNewUserDetails=this.addNewUserDetails.bind(this);
    }
    addNewUserDetails(e){
     e.preventDefault();
     const name=this.refs.name.value;
     const age=this.refs.age.value;
     const userDetails={
         name:name,
         age:age
     };
     this.refs.name.value="";
     this.refs.age.value="";
        this.props.addNewUsers(userDetails);
    }
    render(){
        return(
            <div>
                    <label>add new</label>
                    <input type="text" ref="name"/>
                    <input type="text" ref="age"/>
                    <button onClick={this.addNewUserDetails}>Add new</button>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
  return{
      name:state.search.name,
      age:state.search.age
  }
};
const mapDispatchToProps=(dispatch)=> {
    return {
        addNewUsers:(userDetails) => dispatch(searchReducer.addNewUsers(userDetails))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(newUser);