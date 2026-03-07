import React from "react";
interface UserClassProps{
    name : string;
}
interface UserClassState {
    count: number;
    count2: number;
}
class UserClass extends React.Component<UserClassProps,UserClassState>{
    constructor (props : UserClassProps){
        super(props);
        console.log(props);
        this.state= {
            count:0,
            count2:2,
        }
    }
    render(){
        // const {count,count2} = this.state;
        return (
        <div className="user-card">
            <h1>Count: {this.state.count}</h1>
            <h1>Count2: {this.state.count2}</h1>
            <button onClick={() => {
                this.setState({
                    count:this.state.count + 1,
                })
            }}>Count Increase</button>
            <button onClick={() => {
                if(this.state.count == 0) return;
                this.setState({
                    count:this.state.count - 1,
                })
            }}>Count Decrease</button>
            <h2>Name: {this.props.name}</h2>
            <h3>Location: Panipat</h3>
            <h4>Contact: @codeslayerTanj</h4>
        </div>
        );
    };
};
export default UserClass;