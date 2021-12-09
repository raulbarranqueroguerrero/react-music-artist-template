import { useState } from "react";
import Navbar from "./Navbar";
import { grey } from "../../utils/colors";
import name from '../../img/name.png'
import icon from '../../img/logo.png'

const Header = () => {

  const [displayNavbar, setDisplayNavbar] = useState(false)

  return (
    <div style={{ display: 'flex', padding: '1rem 0 3rem .5rem', width: '100%', position: 'relative', backgroundColor: grey}}>

      <span style={{ display: 'flex', width: '100%', height: '100', justifyContent: 'center', position: 'absolute', pointerEvents: 'none', paddingTop: '1rem'}}  >
        <img src={name} alt='Yo vivo Navegando' style={{width: '35%'}} />
      </span>
      
      <span style={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'flex-end', paddingRight: '.5rem', paddingTop: '.5rem' }}  onClick={() => setDisplayNavbar(!displayNavbar)}  >
        <img src={icon} alt='menu icon' style={{width: '5%'}} />
      </span>

      {displayNavbar && 
      <div>
        <Navbar />
      </div>
      }
    </div>
  )
}


export default Header;
