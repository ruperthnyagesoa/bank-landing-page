import {Title} from "./common/Typography"
import { Link } from "./NavBar"

const Card = ({title,text,icon, isArticle, by}) => {
  return (
   isArticle ? 
   <div className="card">
   <img src={icon} alt='icon svg'  className="card-image" />
    <div className="card__text">
        <p className="card__text-by">{by}</p>
       <Link 
        className='link' 
        content={<Title
            isHeading={false}
            content={title}
            className='card__text-title'
            />} />
      <p className="card__text-parag">{text}</p>
    </div>
   
 </div>
  : <div className="card">
   <span className="card-icon"><img src={icon} alt='icon svg'/></span>
   <Title
   isHeading={false}
   content={title}
   className='card-title'
   />
   <p className="card-parag">{text} </p>
 </div>
  ) 
}

export default Card