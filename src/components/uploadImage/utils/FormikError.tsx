import { FormikProps } from 'formik'

interface FormikErrorProps {
  formik: FormikProps<any>
  name: string
}

export const FormikError = ({ formik, name }: FormikErrorProps) => {
  if (formik.touched[name] && formik.errors[name]) {
    return <p className="text-sm text-red-500">{String(formik.errors[name])}</p>
  }
  return null
}
