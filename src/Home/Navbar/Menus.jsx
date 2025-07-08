import { RxHamburgerMenu } from "react-icons/rx"

const Menus = () => {
  return (
    <div className="dropdown">
        <button className="menu-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <RxHamburgerMenu/>
        </button>
        <ul className="dropdown-menu p-4 rounded-4 mt-4">
            <li><a className="dropdown-item" href="#">How it Works</a></li>
            <li><a className="dropdown-item" href="#">About us</a></li>
            <li><a className="dropdown-item" href="#">Reviews</a></li>
            <li><a className="dropdown-item" href="#">Blog</a></li>
            <li><a className="dropdown-item" href="#">FAQs</a></li>
            <li><a className="dropdown-item" href="#">Help Center</a></li>
        </ul>
    </div>
  )
}

export default Menus