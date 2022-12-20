import{dataArticles, dataCards} from "../Data"
import { Parag, Title } from "./common/Typography"
import Text from "./Text"
import Card from './Card'

const Section = ({children, isBanner, className}) => {
  return(
     isBanner ? <section className={className} >
                {children} 
              </section>: className==='section-why' ? <section className='section-why'>  
              <Text>
                <Title 
                  isHeading={false}
                  className='container__text-title'
                  content='Why choose EasyBank?'
                />
                <Parag 
                className="container__text-parag" 
                content='We laverage Open Banking to turn your bank account into your financial hub.
                Control your finances like never before.'
                />
            </Text>
            <div className="container__cards">
                {dataCards.map(item => (
                  <Card
                  key={item.id}
                  title={item.title}
                  text={item.content}
                  icon={item.icon}
                  />
                ))}
            </div>
        </section>: <section className="section-latest">
            <Text >
              <Title 
              isHeading={false}
              className='container__text-title'
              content='Latest Articles'
              />
              <Parag 
              className="container__text-parag" 
              content='We laverage Open Banking to turn your bank account into your financial hub.
              Control your finances like never before.'
              />
            </Text>
            <div className="container__cards">
                {dataArticles.map(item => (
                  <Card
                  key={item.id}
                  isArticle={true}
                  by={item.by}
                  title={item.title}
                  text={item.content}
                  icon={item.img}
                  />
                ))}
            </div>
          </section>
  )
}

export default Section