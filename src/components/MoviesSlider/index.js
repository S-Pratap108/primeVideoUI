import Slider from 'react-slick'
import MovieItem from '../MovieItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

const MoviesSlider = props => {
  const {movies} = props
  console.log(movies)
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 4,
  }

  return (
    <div className="slider-cont">
      <Slider {...settings}>
        {movies.map(eachMovie => (
          <MovieItem data={eachMovie} key={eachMovie.id} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
