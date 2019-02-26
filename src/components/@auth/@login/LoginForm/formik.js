/* eslint-disable no-console */
import { withFormik } from 'formik'
import * as Yup from 'yup'

const formik = withFormik({
  validationSchema: Yup.object()
    .shape({
      email: Yup.string().required('Please enter your email'),
      password: Yup.string().required('Please enter your password'),
    }),

  mapPropsToValues: () => ({
    email: '',
    password: '',
  }),
  handleSubmit: async ({ email, password }, { props, setSubmitting }) => {
    try {
      await props.actions.login({ email, password })
      setSubmitting(false)
      props.history.push('/home')
    } catch (e) {
      console.error(e)
    }
  },
  displayName: 'LoginForm',
})

export default formik
