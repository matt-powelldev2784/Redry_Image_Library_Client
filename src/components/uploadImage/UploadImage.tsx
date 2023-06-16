import { useState } from 'react'
import { SecondaryNav } from '../componentIndex'
import { Button } from '../ui/ui-index'
import { addImageToBucket } from './addImageToBucket'
import { addImageDetailsToDb } from './addImageDetailsToDb'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export const UploadImage = () => {
  const [file, setFile] = useState<File | null>(null)

  const onSelectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0]
      file.size > 1 && alert('File is too big!')
      setFile(file)
      formik.setFieldValue('file', file)
    }
  }

  const formik = useFormik({
    initialValues: {
      uploadedBy: '',
      description: '',
      tags: '',
      file: file,
    },
    validationSchema: Yup.object({
      uploadedBy: Yup.string().required(
        'Please input a value for uploader name'
      ),
      description: Yup.string().required('Please input a image description'),
      tags: Yup.string().required(
        'Please input image tags separated by commas'
      ),
      file: Yup.mixed().required('Please upload an image'),
    }),
    onSubmit: async (values) => {
      const { uploadedBy, description, tags } = values
      const imageUrl = await addImageToBucket(file)
      await addImageDetailsToDb({ imageUrl, uploadedBy, description, tags })
    },
  })

  return (
    <section>
      <SecondaryNav />
      <article className="m-4 flex min-h-screen w-full items-center justify-center">
        <div className="flex w-1/2 flex-col items-center justify-center bg-primaryGreen">
          <h1 className="m-4">Upload Image</h1>
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col items-center justify-center"
          >
            <input
              id="uploadedBy"
              name="uploadedBy"
              type="text"
              placeholder="Uploader Name"
              onChange={formik.handleChange}
              value={formik.values.uploadedBy}
            ></input>
            <input
              id="description"
              name="description"
              type="text"
              placeholder="Image description"
              onChange={formik.handleChange}
              value={formik.values.description}
            ></input>
            <input
              id="tags"
              name="tags"
              type="text"
              placeholder="Image tags"
              onChange={formik.handleChange}
              value={formik.values.tags}
            ></input>
            <input
              id="file"
              type="file"
              name="file"
              onChange={onSelectFile}
              accept="image/jpeg"
            />
            <Button
              type="submit"
              optionalClasses="my-2 mt-4 rounded-xl border-2 border-darkBlack bg-primaryGreen px-4 py-1 text-xl font-semibold text-darkBlack lg:w-[28rem]"
              buttonText="Upload File"
            />
          </form>
          {formik.errors.uploadedBy ? <p>{formik.errors.uploadedBy}</p> : null}
          {formik.errors.description ? (
            <p>{formik.errors.description}</p>
          ) : null}
          {formik.errors.tags ? <p>{formik.errors.tags}</p> : null}
          {formik.errors.file ? <p>{formik.errors.file}</p> : null}
        </div>
      </article>
    </section>
  )
}
