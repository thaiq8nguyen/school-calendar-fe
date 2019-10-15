import {React , useContext} from "react" 
import {Redirect , Route} from "react-router-dom"

const privateRoute = ({component : Component, ...rest}) => { 
    //const {ifUserCurrent} = useContext()
  return (
      <Route 
       {...rest} 
       render = {props => 
        !!ifUserCurrent ? (
         <Component {...props}/> 
        ) : (
        <Redirect to = {"login"} />
        )
    } 
    />
  ) 
} 

export default privateRoute;
