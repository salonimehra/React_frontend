import React from 'react'
import UserService from '../services/UserService'

class UserComponent extends React.Component{

    //intialise state
    constructor(props){
        //compulsory to make super 
        super(props);
        this.state={
            users:[]
        }
    }

    //lifecycle method to call restapi
    componentDidMount(){
        UserService.getUsers().then((response,error)=>{
            if(response)
            this.setState({users:response.data})
            else
            console.log(error);
        })
    }

    //return html 
    render(){
        return(
            <div>
                <h1 className="text-centre">Users List</h1>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <td>User Id</td>
                                <td>User first name</td>
                                <td>User last Name</td>
                                <td>User email</td>
                            </tr>
                        </thead>
                        <tbody>
                           { 
                            this.state.users.map(
                                    user =>
                                    <tr key={user.id}>
                                        <td>{user.id} </td>
                                        <td>{user.firstName} </td>
                                        <td>{user.lastName} </td>
                                        <td>{user.email} </td>

                                    </tr>
                            ) 
                           }
                        </tbody> 
                        </table>
            </div>
        )
    }
}

export default UserComponent;