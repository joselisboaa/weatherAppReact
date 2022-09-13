

export const WeatherCard = (prop) => { 
  console.log(prop.props);
  return (
    <>
    <h1>{prop.props[0].name}</h1>
    <p>{prop.props[0].weather[0].main}</p>
    <p>{prop.props[0].weather[0].description}</p>
    <p>{prop.props[0].sys.country}</p>
    <p>Temp: {prop.props[0].main.temp}</p>
    <p>Sensação térmica: {prop.props[0].main.feels_like}</p>
    <p>Temp max: {prop.props[0].main.temp_max}</p>
    <p>Temp min: {prop.props[0].main.temp_min}</p>
    <img src={`${prop.props[0].weather[0].icon}.svg`}/>
    </>
  )
}