import './joke.scss'

export const Joke = () => {

    const data = {
        ID: 1,
        joke: 'Why did the chicken cross the road?',
        rating: 4
    }
  return (
    <div className="joke">
        <h2 className='id'>{data.ID}</h2>
        <p className='data'>{data.joke}</p>
        <p className='rating'>Rating: {data.rating}</p>
    </div>
  )
}
export default Joke;