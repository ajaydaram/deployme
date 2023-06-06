
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField, RadioGroup, FormControlLabel, Radio, Button, Typography } from '@mui/material';

const SurveyForm = () => {
    const initialValues = {
        name: '',
        email: '',
        feedback: '',
        ageRange: '',
        error: '',


    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        feedback: Yup.string().required('Feedback is required'),
        ageRange: Yup.string().required('Age range is required'),
    });

    const onSubmit = (values, { setSubmitting }) => {
        // Submit the form data to your backend service here
        console.log('Form data:', values);
        setSubmitting(false);
    };

    let errors = {  };
    let touched = {  };
    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({ isSubmitting }) => (
                <Form>
                    <div>
                        <Field
                            as={TextField}
                            id="name"
                            name="name"
                            label="Name"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            helperText={<ErrorMessage name="name" />}

                        />
                        {errors.name && touched.name ? (
                            <div>{errors.name}</div>
                        ) : null}
                        <ErrorMessage name="name" />
                    </div>
                    <div>
                        <Field
                            as={TextField}
                            id="email"
                            name="email"
                            type="email"
                            label="Email"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            helperText={<ErrorMessage name="email" />}

                        />
                        {errors.email && touched.email ? (
                            <div>{errors.email}</div>
                        ) : null}
                        <ErrorMessage name="email" />
                    </div>
                    <div>
                        <Field
                            as={TextField}
                            id="feedback"
                            name="feedback"
                            label="Feedback"
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={4}
                            margin="normal"
                            helperText={<ErrorMessage name="feedback" />}
                            error={!!(errors.feedback && touched.feedback)}
                        />
                    </div>
                    <div>
                        <Typography variant="subtitle1" component="legend">
                            Age Range:
                        </Typography>
                        <Field as={RadioGroup} id="ageRange" name="ageRange" row>
                            <FormControlLabel value="18-24" control={<Radio />} label="18-24" />
                            <FormControlLabel value="25-34" control={<Radio />} label="25-34" />
                            <FormControlLabel value="35-44" control={<Radio />} label="35-44" />
                            <FormControlLabel value="45-54" control={<Radio />} label="45-54" />
                            <FormControlLabel value="55+" control={<Radio />} label="55+" />
                        </Field>
                        <ErrorMessage name="ageRange" />
                    </div>
                    <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
                        Submit
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

export default SurveyForm;
