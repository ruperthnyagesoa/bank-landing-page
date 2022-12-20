import logowhite from '../../images/logowhite.svg'
import Facebook from '../../images/icon-facebook.svg'
import youtube from '../../images/icon-youtube.svg'
import twitter from '../../images/icon-twitter.svg'
import pinterest from '../../images/icon-pinterest.svg'
import instagram from '../../images/icon-instagram.svg'
import { Link } from '../NavBar'
import { Parag } from '../common/Typography'

const Icon = ({image}) => {
  return(
    <span>
      <a className='link'>
        <img src={image} />
      </a>
    </span>
  )
}
const dataFooter = [
  {id: 1, text: 'About Us'},
  {id: 2, text: 'Contact'},
  {id: 3, text: 'Blog'},
  {id: 4, text: 'Careers'},
  {id: 5, text: 'Support'},
  {id: 6, text: 'Privacy Policy'}
]

const dataFooterIcons = [
  {id: 1, img: Facebook},
  {id: 2, img: youtube},
  {id: 3, img: twitter},
  {id: 4, img: pinterest},
  {id: 5, img: instagram}

]

const Footer = () => {
  return(
    <footer className="footer">
      <div className='flex'>
      <div className='footer__container'>
        <div className='footer__container--logo'>
          <img src={logowhite} alt='logo easybank' />
        </div>
        <div className='footer__container-icons'>
          {dataFooterIcons.map(item => (
            <Icon 
            key={item.id}
            image={item.img}
            className='icon'
            />
          ))}
        </div>
      </div>
      <div className='footer__links'>
          <div className='footer__links-grid'>
            {
              dataFooter.map(item => (
                <Link 
                key={item.id} 
                className='link'
                content={item.text}
              />
              ))
            }
          </div>
      </div>
     </div>
      <div className='footer__text'>

        <Link
            className='btn'
            content='Request Invite'
          />

          <Parag
          className='parag'
          content='© Easybank. All Rights Reserved'
          />
      </div>
      
    </footer>
  )
}
export default Footer