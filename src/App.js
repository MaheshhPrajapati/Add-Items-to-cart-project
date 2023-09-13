import { Fragment, useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useDispatch, useSelector } from 'react-redux';
import Notification from './components/UI/Notification';
import { fetchCartData, sendCartData } from './Store/cart-actions';

let isInitial = true;

function App() {
  const cartState = useSelector(state => state.ui.isCartVisible);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData())
  }, [dispatch])

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    //dispatch function which calls logic handler in store/Cart.js if is used to avoid sending data for first time when the app is started
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }

  }, [cart, dispatch]);


  return (
    <Fragment>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
      <Layout>
        {cartState && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
