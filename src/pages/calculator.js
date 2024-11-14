import { useCallback, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';

import Layout from '../components/Layout';
import { scoringData } from '../utils/scoring';

export default function CalculatorPage() {
  const [tScore, setTScore] = useState(null);
  const { errors, touched, handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      age: 0,
      educationLevel: 0,
      score: 0
    },
    validate: useCallback((vals) => {
      const { age, educationLevel, score } = vals;
      const result = {};

      if (age < 0) {
        result.age = 'Patient is too young.';
      }

      if (educationLevel < 0) {
        result.educationLevel =
          'Patient cannot have less than zero years education.';
      }

      if (score < 0) {
        result.score = 'Score is too low.';
      } else if (score > 30) {
        result.score = 'Score is too high.';
      }

      return result;
    }, []),
    onSubmit: useCallback(
      (vals) => {
        const { age, educationLevel, score } = vals;

        for (const { ages, educationLevels } of scoringData) {
          if (age >= ages.min && age <= ages.max) {
            for (const { years, results } of educationLevels) {
              if (educationLevel >= years.min && educationLevel <= years.max) {
                setTScore(results[30 - score]);
                return;
              }
            }
          }
        }

        setTScore(-1);
      },
      [setTScore]
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
        <Form.Group>
          <Form.Label>Patient Education Level (Years)</Form.Label>
          <Form.Control
            name="educationLevel"
            value={values.educationLevel}
            onChange={handleChange}
            isInvalid={Boolean(errors.educationLevel)}
          />
          {errors.educationLevel && touched.educationLevel && (
            <Form.Control.Feedback type="invalid">
              {errors.educationLevel}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label>Raw Score</Form.Label>
          <Form.Control
            name="score"
            value={values.score}
            onChange={handleChange}
            isInvalid={Boolean(errors.score)}
          />
          {errors.score && touched.age && (
            <Form.Control.Feedback type="invalid">
              {errors.score}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group className="my-2">
          <Button type="submit">Submit</Button>
        </Form.Group>
      </Form>
      {Boolean(tScore) && (
        <h1 className="m-4">T-score is {tScore === -1 ? 'Unknown' : tScore}</h1>
      )}
    </Layout>
  );
}
