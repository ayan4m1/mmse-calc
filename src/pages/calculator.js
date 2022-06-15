import { Fragment, useCallback, useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useFormik } from 'formik';

import Layout from '~components/Layout';

export default function CalculatorPage() {
  const [results, setResults] = useState({});
  const { errors, touched, handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      age: 0
    },
    validate: useCallback((vals) => {
      const { age } = vals;
      const result = {};

      if (age < 1) {
        result.age = 'Patient is too young.';
      } else if (age > 30) {
        result.age = 'Patient is too old.';
      }

      return result;
    }, []),
    onSubmit: useCallback(
      (vals) => {
        const { age } = vals;

        setResults({ age });
      },
      [setResults]
    )
  });

  return (
    <Layout>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Patient Age</Form.Label>
          <Form.Control
            name="age"
            value={values.age}
            onChange={handleChange}
            isInvalid={Boolean(errors.age)}
          />
          {errors.age && touched.age && (
            <Form.Control.Feedback type="invalid">
              {errors.age}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group className="my-2">
          <Button type="submit">Submit</Button>
        </Form.Group>
      </Form>
      {results.age && (
        <Fragment>
          <Row>
            <Col>Age: {results.age}</Col>
          </Row>
        </Fragment>
      )}
    </Layout>
  );
}
