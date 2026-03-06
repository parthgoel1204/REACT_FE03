import React from "react";
interface UserClassProps{
    name : string;
}
class UserClass extends React.Component<UserClassProps>{
    constructor (props : UserClassProps){
        super(props);
        console.log(props);
        
    }
    render(){
        return (
        <div className="user-card">
            <h2>Name: {this.props.name}</h2>
            <h3>Location: Panipat</h3>
            <h4>Contact: @codeslayerTanj</h4>
        </div>
        );
    };
};
export default UserClass;