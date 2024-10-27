import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <h1>.CHOREO</h1>
      </div>
      <div className="list-container">
        <ul>
            <li>Home</li>
            <li>Pages</li>
            <li>Portfolio</li>
            <li>Blog</li>
            <li>Shop</li>
            <li>Contacts</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
