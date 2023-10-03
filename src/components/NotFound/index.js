import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const NotFound = () => {
  const token = Cookies.get('jwt_token')
  if (token === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <div className="not-found-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
        alt="not found"
        className="not-found-img"
      />
    </div>
  )
}
export default NotFound
