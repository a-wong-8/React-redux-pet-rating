import {useState, useEffect} from 'react'

const PawsRatingInput = ({ rating, disabled, onChange }) => {

  const[activeRating, setActiveRating] = useState(rating);

  useEffect(()=> {
    setActiveRating(rating)
  },[rating])

  return (
    <> 
    <div className="rating-input">
      <div className={ activeRating >= 1 ? "filled" : "empty"} onMouseEnter={()=> {if (!disabled) setActiveRating(1)}} onMouseLeave={() => setActiveRating(rating)} onClick={()=>onChange(1)}>
        <i className="fa fa-paw"></i>
      </div> 
      <div className={ activeRating >= 2 ? "filled" : "empty"} onMouseEnter={()=> {if (!disabled) setActiveRating(2)}} onMouseLeave={() => setActiveRating(rating)} onClick={()=>onChange(2)}>
        <i className="fa fa-paw"></i>
      </div> 
      <div className={ activeRating >= 3 ? "filled" : "empty"} onMouseEnter={()=> {if (!disabled) setActiveRating(3)}} onMouseLeave={() => setActiveRating(rating)} onClick={()=>onChange(3)}>
        <i className="fa fa-paw"></i>
      </div> 
      <div className={ activeRating >= 4 ? "filled" : "empty"} onMouseEnter={()=> {if (!disabled) setActiveRating(4)}} onMouseLeave={() => setActiveRating(rating)} onClick={()=>onChange(4)}>
        <i className="fa fa-paw"></i>
      </div> 
      <div className={ activeRating >= 5 ? "filled" : "empty"} onMouseEnter={()=> {if (!disabled) setActiveRating(5)}} onMouseLeave={() => setActiveRating(rating)} onClick={()=>onChange(5)}>
        <i className="fa fa-paw"></i>
      </div> 
    </div>
    </>
  );
};

export default PawsRatingInput;