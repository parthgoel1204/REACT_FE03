import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

interface UserClassProps{
    name : string;
}
class About extends Component<{}, {}> {
    constructor(props:UserClassProps){
        super(props);
        console.log("Parent Constructor");
        
    }
    componentDidMount(): void {
        console.log("Parent Component Mount");
        
    }
    render() {
        console.log("Parent Render");
        
        return (
        <>
            <h1> ABOUT </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, fuga! Impedit ex neque aperiam? Temporibus commodi nemo perferendis corporis tempora.</p>
            {/* <User name = {"Parth G"}/> */}
            <UserClass name = {"Parth Goel"}/>
            {/* <UserClass name = {"Elon Goel"}/> */}
        </>
        );
    }
}
// const About = () => {
//     return (
//         <>
//             <h1> ABOUT </h1>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, fuga! Impedit ex neque aperiam? Temporibus commodi nemo perferendis corporis tempora.</p>
//             {/* <User name = {"Parth G"}/> */}
//             <UserClass name = {"Parth Goel"}/>
//         </>
//     );
// };
export default About;