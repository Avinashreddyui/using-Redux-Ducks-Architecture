/**
 * Created by avvinash on 8/21/2017.
 */
import React from "react";
import ListOfUsers from "./components/ListOfUsers"

 class App extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
               <h1>hiiii</h1>
                <ListOfUsers/>
            </div>
        )
    }
}
export default App;