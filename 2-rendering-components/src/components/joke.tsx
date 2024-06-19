import './joke.scss'
import { JokeData } from '../types/alltypes'




export const Joke = (data:JokeData) => {
     const ratingFun = (rating: number) => {
        if (rating === 1) {
          return <span>★☆☆☆☆</span>
        } else if (rating === 2) {
          return <span>★★☆☆☆</span>
        } else if (rating === 3) {
          return <span>★★★☆☆</span>
        } else if (rating === 4) {
          return <span>★★★★☆</span>
        } else if (rating === 5) {
          return <span>★★★★★</span>
        } else {
          return <span>☆☆☆☆☆</span>
        }
    
      }
    
  return (
    <div className="joke">
        <h2 className='id'>{data.id}</h2>
        <p className='data'>{data.joke}</p>
        <p className='rating'>Rating: {ratingFun(data.rating)}</p>
    </div>
  )
}
export default Joke;