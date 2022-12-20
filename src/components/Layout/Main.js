import {Link} from '../NavBar'
import {Title, Parag} from "../common/Typography"
import BackgroundIntro from '../../images/bg-intro-desktop.svg'
import mockup from '../../images/image-mockups.png'
import Text from "../Text"
import Section from "../Section"

const Main = () => {
  return(
    <main>
    <Section 
    isBanner={true}
    className="main-banner">
      <div className="container ">
        <Text>
          <Title
            content='Next generation digital banking'
            className='title'
            isHeading={true}
          />
          <Parag
           className="container__text-parag"
           content='Take your financial life online. Your EaseyBank account
           will be a one-stop-shop for spending, saving, budgeting, investing and much more.' 
          />
          <Link
            className='link'
            content='Request Invite'
          />
        </Text>
      </div>
      <div className="container container__img">
        <img src={BackgroundIntro} alt='background svg' className='container__img-img' />
        <img src={mockup} alt='background svg' className='container__img-mockup' />           
      </div>
    </Section>
  </main>
  )
}
export default Main