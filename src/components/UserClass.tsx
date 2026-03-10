import React from "react";
interface UserClassProps{
    name : string;
}
interface UserClassState {
    count: number;
    count2: number;
    userInfo:{
        name: string;
        location : string;
    }
}
class UserClass extends React.Component<UserClassProps,UserClassState>{
    timer?: ReturnType<typeof setInterval>;
    constructor (props : UserClassProps){
        super(props);
        // console.log(props); X
        this.state= {
            count:0,
            count2:2,
            userInfo:{
                name: "Dummy",
                location: "Default",
            },
        }
        console.log(this.props.name + "Child Constructor");
        
    }
    async componentDidMount(): Promise<void> {
        console.log(this.props.name +"Child Component Mount");
        const data = await fetch("https://api.github.com/users/akshaymarch7")
        const json = await data.json();
        this.setState({
            userInfo : json,
        })
        console.log(json);
        // this.timer = setInterval(() => {
        //     console.log("NAMASTE REACT OP");
        // },1000)
    }
    componentDidUpdate(): void {
        console.log("Component Did Update");
    }
    componentWillUnmount(): void {
        // clearInterval(this.timer);
        console.log("Component Will Unmount");
    }
    render(){
        console.log(this.props.name +"Child Render");
        
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
            <h2>Name: {this.state.userInfo.name}</h2>
            <h3>Location: {this.state.userInfo.location}</h3>
            <h4>Contact: @codeslayerTanj</h4>
        </div>
        );
    };
};
export default UserClass;