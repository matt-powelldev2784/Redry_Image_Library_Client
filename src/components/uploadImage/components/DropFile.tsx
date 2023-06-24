import { DragEvent, useState } from 'react'
import { FormikProps } from 'formik'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/reduxHooks'
import {
  resetImageUploadErrorState,
  setImageUploadErrorState,
} from '../../../redux/slice/imageUploadSlice'

interface DropFileProps {
  formik: FormikProps<{
    uploadedBy: string
    description: string
    tags: string
    file: File | any
  }>
}

export const DropFile = ({ formik }: DropFileProps) => {
  const dispatch = useAppDispatch()
  const { fileSizeError } = useAppSelector((state) => state.imageUploadReducer)
  const [dragActive, setDragActive] = useState(false)
  const selectedFile = formik.values.file?.name

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
      formik.setFieldValue('file', file)
    }
  }

  const handleDragOver = function (event: DragEvent<HTMLLabelElement>) {
    event.preventDefault()
  }

  return (
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
        {selectedFile ? `${selectedFile}` : 'Upload image'}
      </div>
      {fileSizeError ? <p className="text-red-500">{fileSizeError}</p> : null}
    </label>
  )
}
