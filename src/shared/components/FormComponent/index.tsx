import { useFormik, Formik, Form, Field } from 'formik'
import { useState } from 'react';
import { weatherDataFetching } from '../../utils';
import { WeatherCard } from '../WeatherCardComponent';

export const WheaterForm = () => {

  const [cities, setCities] = useState([]);
  const [citiesError, setCitiesError] = useState([]);

  const formik = useFormik({
    initialValues: {
      SearchedValue: ""
    },
    onSubmit: values => {
      setCities([]);
      weatherDataFetching(values.SearchedValue)
        .then(data => {
          setCitiesError([]);
          setCities([data.data]);
        })
        .catch(error => {
          setCitiesError([error]);
        })
    }
  });

  console.count("render: ");

  return (
    <Formik 
    initialValues={{
      SearchedValue: ""
    }}
    onSubmit={values => {
      console.log("values");
    }}
    >
        {({ errors, touched }) => (
          <>
            <Form onSubmit={formik.handleSubmit}>
              <input name="SearchedValue" id="weatherInput" onChange={formik.handleChange}/>
              <input type="submit" value="Buscar"/>
            </Form>
            {cities.length > 0 && <WeatherCard props={cities}/>} 
            {citiesError.length > 0 && <div>Cidade não encontrada!</div>} 
          </>
        )}
    </Formik>
  )
}