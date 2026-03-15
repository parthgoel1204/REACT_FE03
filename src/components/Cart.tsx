import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../utils/appStore";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store:RootState) => store.cart.items);
    console.log(cartItems);
    
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return(
        <div className="text-center p-4 m-4">
            <h1 className="text-2xl font-bold">CART</h1>  
            <div className="w-6/12 m-auto">
                <button className="p-2 m-2 bg-black text-white rounded-lg hover:cursor-pointer"
                onClick={handleClearCart}>
                    Clear Cart
                </button> 
                {cartItems.length === 0 && <h1>Please Add Items to your Cart! Your Cart is Empty!!</h1>}
                <ItemList items={cartItems}/> 
            </div>
        </div>
    )
};
export default Cart;