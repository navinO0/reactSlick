// Write your code here

import './index.css'

const planetItem = props => {
  const {eachPlanet} = props
  const {name, imageUrl, description} = eachPlanet
  return (
    <div className="planet-item-container">
      <img src={imageUrl} alt={name} className="planet-image" />
      <h1 className="planet-name">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default planetItem
