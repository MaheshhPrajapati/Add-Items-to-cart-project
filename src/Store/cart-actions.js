import { cartActions } from "./cart";
import { uiActions } from "./cart-ui";

export function fetchCartData() {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://demoproject-for-cart-insertion-default-rtdb.firebaseio.com/cart.json');
            if (!response.ok) {
                throw new Error("Fetching data failed");
            }
            const data = await response.json();
            return data;
        }
        try {
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart(cartData));
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    status: 'error',
                    title: 'Error: Data not sent',
                    message: 'Fetching cart data failed!'
                })
            )
        }
    }
}

export function sendCartData(cart) {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
                status: "pending",
                title: "Sending...",
                message: "Sending Cart Data"
            })
        )

        const sendRequest = async () => {
            const response = await fetch('https://demoproject-for-cart-insertion-default-rtdb.firebaseio.com/cart.json', {
                method: "PUT",
                body: JSON.stringify(cart),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (!response.ok) {
                throw new Error("Failed: Data did not sent!");
            }
        }

        try {
            await sendRequest();
            //success 
            dispatch(
                uiActions.showNotification({
                    status: "success",
                    title: "Success!!",
                    message: 'Sent Cart Data Sucessfully!'
                })
            )
        } catch (error) {
            //error handling
            dispatch(
                uiActions.showNotification({
                    status: 'error',
                    title: 'Error: Data not sent',
                    message: 'Sending cart data failed!'
                })
            )
        }
    }
}