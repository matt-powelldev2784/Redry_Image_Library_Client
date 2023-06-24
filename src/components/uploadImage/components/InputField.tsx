import { FormikError } from './FormikError'
import { FormikProps } from 'formik'

interface InputFieldProps {
  formik: FormikProps<any>
  htmlFor: string
  labelText: string
  inputType: string
  spanText?: string
}

export const InputField = ({
  formik,
  htmlFor,
  labelText,
  inputType,
  spanText,
}: InputFieldProps) => {
  return (
    <>
      <label htmlFor={htmlFor} className="w-full p-1 text-sm">
        {labelText}
        {spanText ? <span className="text-xs">{spanText}</span> : null}
      </label>
      <input
        id={htmlFor}
        name={htmlFor}
        type={inputType}
        placeholder={labelText}
        onChange={formik.handleChange}
        value={formik.values[htmlFor]}
        onBlur={formik.handleBlur}
        className={`w-full rounded-lg border-2 border-darkBlack p-2 px-4 outline-none ${
          formik.touched[htmlFor] &&
          formik.errors[htmlFor] &&
          'border-2 border-red-500'
        }`}
      />
      <FormikError formik={formik} name={htmlFor} />
    </>
  )
}
