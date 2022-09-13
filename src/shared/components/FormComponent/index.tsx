import { useFormik, Formik, Form, Field } from 'formik'
import { useState } from 'react';
import { weatherDataFetching } from '../../utils';
import { WeatherCard } from '../WeatherCardComponent';

export const WheaterForm = () => {

  const [cities, setCities]= useState([]);

  const formik = useFormik({
    initialValues: {
      SearchedValue: ""
    },
    onSubmit: values => {
      setCities([]);
      weatherDataFetching(values.SearchedValue).then(data => {
        setCities([data.data]);
      });
    }
  });

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
            {cities.length === 0 && <p>Cidade não encontrada</p>} 
          </>
        )}
    </Formik>
  )
}