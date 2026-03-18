const Contact = () => {
    return (
        <>
            <h1 className= "font-bold p-3 m-3 text-xl">CONTACT US</h1>
            <form>
                <input type="text" className="border border-black p-2 m-2" placeholder="Name"></input>
                <input type="text" className="border border-black p-2 m-2" placeholder="Message"></input>
                <button className="border border-black p-2 m-2 rounded-lg bg-gray-100">SUBMIT</button>
            </form>
        </>
    );
};
export default Contact;