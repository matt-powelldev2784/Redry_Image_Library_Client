import { useFormikProps } from './useFormik'
import { DropFile } from './DropFile'
import { Button } from '../../ui/ui-index'
import { InputField } from './InputField'
import { useAppSelector } from '../../../redux/hooks/reduxHooks'

export const Form = () => {
  const formik = useFormikProps()
  const { errors } = useAppSelector((state) => state.imageUploadReducer)

  const errorsJSX = errors?.map((err) => {
    return <p className="text-center text-red-500">Server Error: {err}</p>
  })

  return (
    <article className="flex w-full items-center justify-center">
      <div className="justify-cente my-4 mb-8 flex flex-col items-center md:w-1/2">
        <h1 className="text-3xl">Upload Image</h1>
        {errorsJSX ? errorsJSX : null}
        <form
          onSubmit={formik.handleSubmit}
          className="flex w-11/12 flex-col items-center justify-center md:w-full"
        >
          <DropFile formik={formik} />

          <InputField
            formik={formik}
            htmlFor="uploadedBy"
            labelText="Uploader Name"
            inputType="text"
          />

          <InputField
            formik={formik}
            htmlFor="description"
            labelText="Image Description"
            inputType="text"
          />

          <InputField
            formik={formik}
            htmlFor="tags"
            labelText="Image Tags"
            inputType="text"
            spanText="(seperate each tag by a comma)"
          />

          <Button
            type="submit"
            optionalClasses="my-2 mt-4 rounded-xl border-2 border-darkBlack bg-primaryGreen px-4 py-1 text-xl font-semibold text-darkBlack lg:w-[28rem]"
            buttonText="Upload File"
          />
        </form>
      </div>
    </article>
  )
}
