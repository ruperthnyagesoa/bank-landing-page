import React,{useState} from 'react'
import logo from '../images/logo.svg'
import burguer from '../images/icon-hamburger.svg'

export const Link = ({className, content}) => {
  return (
    <a className={className}>
        {content}
    </a>
  )
}

 export const NavBar = () => {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
  }
  const dataNav = [
    {id: 1, text: 'Home'},
    {id: 2, text: 'About'},
    {id: 3, text: 'Contact'},
    {id: 4, text: 'Blog'},
    {id: 5, text: 'Careers'},
  ]
  return(
    <header>
      <nav className="navigation">
        <div>
          <img src={logo} alt='logo' className='logo' />
        </div>
        <ul className={`navigation__ul ${clicked ? 'active': ''}`}>
          {
            dataNav.map(item => (
              <li className="navigation__ul-li" key={item.id}>
                <Link
                className='link'
                content={item.text}
                />
              </li>
            ))
          }
        </ul>
        <div className='navigation__containerCard'>
          <button className='navigation__containerCard--button'>
            Request Invite
          </button>
       
        </div>
        <button 
        onClick={handleClick}
        className='burguer'>
            <img src={burguer} alt='hamburguer svg'  />
        </button>
      </nav>
    </header> 
  )
}
