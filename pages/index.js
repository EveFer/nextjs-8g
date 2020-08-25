
import { Form, Input, Button, Checkbox } from 'antd'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Layout from '../components/Layout'

const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
}
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
}
export default function Home () {
  // const onFinish = values => {
  //   console.log('Success:', values)
  // }

  // const onFinishFailed = errorInfo => {
  //   console.log('Failed:', errorInfo)
  // }

  const router = useRouter()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('El email no es valido').required('Campo Requerido'),
      password: Yup.string().min(8, 'El password debe ...').required('Campo Requerido')
    }),
    onSubmit: async (value) => {
      console.log(value)
      // request
      router.push({
        pathname: '/dashboard',
        query: { name: 'Vercel' }
      })
    }
  })

  return (
    <>
      <Layout>

        <form
          onSubmit={formik.handleSubmit}
        >
          <input type='email' name='email' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} />
          {
            formik.errors.email && formik.touched.email ? (
              <p>{formik.errors.email}</p>
            ) : null
          }
          <input name='password' type='password' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} />
          {
            formik.errors.password && formik.touched.password ? (
              <p>{formik.errors.password}</p>
            ) : null
          }
          <Link href='/dashboard'>
            <a>Redired</a>
          </Link>
          <button type='submit'>send</button>
        </form>
      </Layout>
    </>
  )
}
