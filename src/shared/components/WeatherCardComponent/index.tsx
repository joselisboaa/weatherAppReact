

export const WeatherCard = (prop) => { 
  return (
    <>
    <h1>{prop.props[0].name}</h1>
    <p>{prop.props[0].weather[0].main}</p>
    <p>{prop.props[0].weather[0].description}</p>
    <p>{prop.props[0].sys.country}</p>
    <p>{prop.props[0].weather[0].description}</p>
    </>
  )
}