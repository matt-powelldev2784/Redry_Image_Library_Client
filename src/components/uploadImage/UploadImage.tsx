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

  // handle drag events
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
            <label
              htmlFor="file"
              className={`h-20 w-full border-2 border-red-500 ${
                dragActive ? 'bg-blue-500' : null
              } `}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              Upload File
            </label>
            <input
              id="file"
              type="file"
              name="file"
              onChange={onSelectFile}
              accept="image/jpeg, image/png, image/webp"
            />
            <label htmlFor="uploadedBy">Uploader Name</label>
            <input
              id="uploadedBy"
              name="uploadedBy"
              type="text"
              placeholder="Uploader Name"
              onChange={formik.handleChange}
              value={formik.values.uploadedBy}
            ></input>
            <label htmlFor="description">Image Description</label>
            <input
              id="description"
              name="description"
              type="text"
              placeholder="Image description"
              onChange={formik.handleChange}
              value={formik.values.description}
            ></input>
            <label htmlFor="tags">
              Image Tags (seperate each tag by a comma)
            </label>
            <input
              id="tags"
              name="tags"
              type="text"
              placeholder="Image tags"
              onChange={formik.handleChange}
              value={formik.values.tags}
            ></input>

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
          {fileSizeError ? <p>{fileSizeError}</p> : null}
        </div>
      </article>
    </section>
  )
}
