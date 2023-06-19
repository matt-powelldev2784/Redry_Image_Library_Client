import { useState, DragEvent } from 'react'
import { SecondaryNav } from '../componentIndex'
import { Button } from '../ui/ui-index'
import { addImageToBucket } from './addImageToBucket'
import { addImageDetailsToDb } from './addImageDetailsToDb'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useAppDispatch, useAppSelector } from '../../redux/hooks/reduxHooks'
import {
  setImageUploadErrorState,
  resetImageUploadErrorState,
} from '../../redux/slice/imageUploadSlice'

export const UploadImage = () => {
  const dispatch = useAppDispatch()
  const { fileSizeError } = useAppSelector((state) => state.imageUploadReducer)
  const [file, setFile] = useState<File | null>(null)
  const [dragActive, setDragActive] = useState(false)

  const fileIsToBig = (file: File) => {
    const maxFileSize = 1024 * 1024 * 2
    if (file.size > maxFileSize) {
      dispatch(setImageUploadErrorState('File must be smaller than 2MB'))
      return true
    }
    return false
  }

  const onSelectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(resetImageUploadErrorState())
    if (event.target.files) {
      const file = event.target.files[0]
      if (fileIsToBig(file)) return
      setFile(file)
      formik.setFieldValue('file', file)
    }
  }

  const handleDrag = function (event: DragEvent<HTMLLabelElement>) {
    event.preventDefault()
    event.stopPropagation()
    if (event.type === 'dragenter' || event.type === 'dragover') {
      setDragActive(true)
    } else if (event.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = function (event: DragEvent<HTMLLabelElement>) {
    event.preventDefault()
    event.stopPropagation()
    setDragActive(false)
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      const file = event.dataTransfer.files[0]
      if (fileIsToBig(file)) return
      setFile(file)
      formik.setFieldValue('file', file)
    }
  }

  const handleDragOver = function (event: DragEvent<HTMLLabelElement>) {
    event.preventDefault()
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
            <label
              htmlFor="file"
              className={`m-4 flex w-full flex-col items-center justify-center rounded-xl border-2 border-dotted border-primaryGreen bg-primaryGreen/25 ${
                dragActive ? 'bg-primaryGreen/50' : null
              } `}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <img
                src="/image_upload.svg"
                alt="upload file"
                className="m-4 mb-2 w-24"
              />
              <p className="text-lg">Drag & Drop your image here</p>
              <p className="mb-3 text-sm">Accepted types jpg, png and webp</p>
              <p className="mb-3 text-lg font-bold text-primaryGreen/50">OR</p>
              <div className="mb-5 w-48 cursor-pointer rounded-lg bg-primaryGreen p-2 text-center">
                <input
                  id="file"
                  type="file"
                  name="file"
                  onChange={onSelectFile}
                  accept="image/jpeg, image/png, image/webp"
                  className="hidden"
                />
                Upload image
              </div>
              {fileSizeError ? (
                <p className="text-red-500">{fileSizeError}</p>
              ) : null}
            </label>

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
