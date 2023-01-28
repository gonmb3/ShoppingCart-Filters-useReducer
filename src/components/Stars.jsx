import {AiFillStar, AiOutlineStar} from "react-icons/ai"

const Stars = ({rating, onClick}) => {

  const rate = Math.round(rating)

  return (
    <>
        {
          [...Array(5)].map((_,i)=>(
            <span key={i} onClick={() => onClick(i)} >
               {rate > i ? ( <AiFillStar className="text-warning"  key={i} size={20}/> ) :   <AiOutlineStar key={i} size={20}/>}
            </span>
          ) )
        }
     
       
    </>
  )
}

export default Stars