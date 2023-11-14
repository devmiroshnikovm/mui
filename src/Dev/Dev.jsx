import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import styles from './styles.module.css'

import postUpdate from '../services/postUpdate'

const SignupSchema = Yup.object().shape({
  comments: Yup.string()
    .min(1, 'Минимум 1 символов') // Minimum 8 characters
    //.matches(/[A-Z]/, "Необходима хотя бы одна заглавная буква") // At least one uppercase letter
    //.matches(/[a-z]/, "Необходима хотя бы одна строчная буква") // At least one lowercase letter
    //.matches(/[0-9]/, "Необходима хотя бы одна цифра") // At least one digit
    //.matches(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/, "Необходим хотя бы один специальный символ") // At least one special character
    .required('Обязательное поле'),
})

function Dev({ onSubmitHandle, initialValue, rowId, handleUpdate }) {
  const [successMessage, setSuccessMessage] = useState('')

  const columnName = ''

  useEffect(() => {
    const timer = successMessage
      ? setTimeout(() => setSuccessMessage(''), 5000)
      : null
    return () => clearTimeout(timer)
  }, [successMessage])

  return (
    <div className="App">
      <center>
        <h2>Comments</h2>

        <Formik
          enableReinitialize
          initialValues={{ comments: initialValue }}
          onSubmit={async (values, { setSubmitting, setErrors }) => {
            try {
              const response = await postUpdate(
                rowId,
                columnName,
                values.comments
              )
              if (response.status === 200) {
                handleUpdate(rowId, values.comments)
                setSuccessMessage(response.status)
              } else {
                setErrors({ submit: response.status })
              }
            } catch (error) {
              setErrors({ submit: error.message })
            }

            setSubmitting(false)
          }}
          validationSchema={SignupSchema}
        >
          {({ isSubmitting, errors, touched, dirty, isValid }) => (
            <Form>
              <div className={styles['form-container']}>
                {/* Display Form-Level Error */}
                {errors.submit && (
                  <div className={styles['form-level-error']}>
                    {errors.submit}
                  </div>
                )}

                <Field
                  as="textarea"
                  name="comments"
                  //placeholder="your comments"
                  className={`${styles['form-control']} ${
                    styles['form-control-large']
                  } ${
                    touched.comments && errors.comments
                      ? styles['is-invalid']
                      : touched.comments && !errors.comments
                        ? styles['is-valid']
                        : ''
                  }`}
                />

                <ErrorMessage
                  component="div"
                  name="comments"
                  className={`${styles['invalid-feedback']} ${styles['mui-style-error']}`}
                />

                {isValid && dirty && !isSubmitting && (
                  <button
                    type="submit"
                    className={`${styles['mui-style-button']}`}
                  >
                    отправить
                  </button>
                )}
                {isSubmitting && (
                  <button
                    disabled={true}
                    className={`${styles['mui-style-button']} ${styles['blinking-button']}`}
                  >
                    Loading...
                  </button>
                )}
              </div>
            </Form>
          )}
        </Formik>

        {successMessage && (
          <div className={styles['form-level-success']}>{successMessage}</div>
        )}
      </center>
    </div>
  )
}
export default Dev
