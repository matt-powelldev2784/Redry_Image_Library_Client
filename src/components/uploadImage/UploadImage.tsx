import { SecondaryNav } from '../componentIndex'
import { Button } from '../ui/ui-index'
import { useFormikProps } from './utils/useFormik'
import { DropFile } from './utils/DropFile'

export const UploadImage = () => {
  const formik = useFormikProps()

  const errorJsx = (children: string) => {
    return <p className="text-sm text-red-500">{children}</p>
  }

  return (
    <section className="min-h-screen min-w-[320px]">
      <SecondaryNav />
      <div className="flex w-full items-center justify-center">
        <article className="justify-cente my-4 mb-8 flex flex-col items-center md:w-1/2">
          <h1 className="text-3xl">Upload Image</h1>
          <form
            onSubmit={formik.handleSubmit}
            className="flex w-11/12 flex-col items-center justify-center md:w-full"
          >
            <DropFile formik={formik} />
            <label htmlFor="uploadedBy" className="w-full p-1 text-sm">
              Uploader Name
            </label>
            <input
              id="uploadedBy"
              name="uploadedBy"
              type="text"
              placeholder="Uploader Name"
              onChange={formik.handleChange}
              value={formik.values.uploadedBy}
              onBlur={formik.handleBlur}
              className={`w-full rounded-lg border-2 border-darkBlack p-2 px-4 outline-none ${
                formik.touched.uploadedBy &&
                formik.errors.uploadedBy &&
                'border-2 border-red-500'
              }`}
            />
            {formik.touched.uploadedBy && formik.errors.uploadedBy
              ? errorJsx(formik.errors.uploadedBy)
              : null}

            <label htmlFor="description" className="mt-2 w-full p-1 text-sm">
              Image Description
            </label>
            <input
              id="description"
              name="description"
              type="text"
              placeholder="Image description"
              onChange={formik.handleChange}
              value={formik.values.description}
              onBlur={formik.handleBlur}
              className={`w-full rounded-lg border-2 border-darkBlack p-2 px-4 outline-none ${
                formik.touched.description &&
                formik.errors.description &&
                'border-2 border-red-500'
              }`}
            ></input>
            {formik.touched.description && formik.errors.description
              ? errorJsx(formik.errors.description)
              : null}

            <label htmlFor="tags" className="mt-2 w-full p-1 text-sm">
              Image Tags{' '}
              <span className="text-xs">(seperate each tag by a comma)</span>
            </label>
            <input
              id="tags"
              name="tags"
              type="text"
              placeholder="Image tags"
              onChange={formik.handleChange}
              value={formik.values.tags}
              onBlur={formik.handleBlur}
              className={`w-full rounded-lg border-2 border-darkBlack p-2 px-4 outline-none ${
                formik.touched.tags &&
                formik.errors.tags &&
                'border-2 border-red-500'
              }`}
            />
            {formik.touched.tags && formik.errors.tags
              ? errorJsx(formik.errors.tags)
              : null}

            <Button
              type="submit"
              optionalClasses="my-2 mt-4 rounded-xl border-2 border-darkBlack bg-primaryGreen px-4 py-1 text-xl font-semibold text-darkBlack lg:w-[28rem]"
              buttonText="Upload File"
            />
          </form>
        </article>
      </div>
    </section>
  )
}
