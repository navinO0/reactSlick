// Write your code here

import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

import './index.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const planetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="main-container" testid="planets">
      <h1 className="planets-heading">PLANETS</h1>
      <div className="slider-container">
        <Slider {...settings}>
          {planetsList.map(eachPlanet => (
            <PlanetItem key={eachPlanet.id} eachPlanet={eachPlanet} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default planetsSlider
