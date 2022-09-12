import { useFormik, Formik, Form, Field } from 'formik'
import { weatherDataFetching } from '../../utils';

export const WheaterForm = () => {

  const formik = useFormik({
    initialValues: {
      SearchedValue: ""
    },
    onSubmit: values => {
      weatherDataFetching(values.SearchedValue);
      console.log(values);
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
            <Form onSubmit={formik.handleSubmit}>
              <input name="SearchedValue" id="weatherInput" onChange={formik.handleChange}/>
              <input type="submit" value="Buscar"/>
            </Form>
        )}
    </Formik>
  )
}