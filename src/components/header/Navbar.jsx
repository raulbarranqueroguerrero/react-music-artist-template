import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <nav style={{ justifyContent: 'flex-end' }}>
        <Link to='about'><p>About</p></Link>
        <Link to='music'><p>Music</p></Link>
        <Link to='bio'><p>Bio</p></Link>
        <Link to='events'><p>Events</p></Link>
        <Link to='contact'><p>Contact</p></Link>
      </nav>
    </div>
  )
}


export default Navbar;
