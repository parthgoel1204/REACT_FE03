interface UserProps {
  name: string;
}

const User = (props: UserProps) => {
  return (
    <div className="user-card">
      <h2>{props.name}</h2>
      <h3>Location: Panipat</h3>
      <h4>Contact: @codeslayerTanj</h4>
    </div>
  );
};

export default User;