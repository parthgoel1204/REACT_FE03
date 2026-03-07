import {useState} from "react";
interface UserProps {
  name: string;
}

const User = (props: UserProps) => {
  const [count,setCount] = useState(0);
  return (
    <div className="user-card">
      <h1>{count}</h1>
      <h2>{props.name}</h2>
      <h3>Location: Panipat</h3>
      <h4>Contact: @codeslayerTanj</h4>
    </div>
  );
};

export default User;