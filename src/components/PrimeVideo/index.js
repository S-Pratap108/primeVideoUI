import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {movies} = props

  const ActionMovies = movies.filter(each => each.categoryId === 'ACTION')

  const ComedyMovies = movies.filter(each => each.categoryId === 'COMEDY')
  return (
    <div className="app-bg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="img"
      />
      <div className="bottom-sect">
        <h1> Action Movies </h1>
        <MoviesSlider movies={ActionMovies} />
        <h1> Comedy Movies </h1>
        <MoviesSlider movies={ComedyMovies} />
      </div>
    </div>
  )
}

export default PrimeVideo
