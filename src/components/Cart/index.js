// Write your JS code here
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'
import Header from '../Header'

const Cart = () => {
  const token = Cookies.get('jwt_token')
  if (token === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <Header />
      <div className="home-container">
        <div className="cart-main-container">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
              alt="cart"
            />
          </div>
        </div>
      </div>
    </>
  )
}
export default Cart
