import React from 'react'
import "./footer.scss"
import { Logo } from '../../../assets'

const Icon = ({img}) => {
  return(
    <div className='icon-wrapper'>
        <img className='icon-medsos' src={img} alt="icon" />
    </div>
  )
}
const Footer = () => {
  return (
    <div>
        <div className='footer'>
          <div> 
            <img className='logo' src={Logo} alt="logo" />
          </div>
          <div className='social-wrapper'>
            <Icon img={Logo}/>
            <Icon img={Logo}/>
            <Icon img={Logo}/>
            <Icon img={Logo}/>
            <Icon img={Logo}/>
            <Icon img={Logo}/>
          </div>
        </div>
        <div className='copyright'>
          <p>Copyright</p>
        </div>
    </div>
  )
}

export default Footer