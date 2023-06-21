import { useAppDispatch } from './../../../redux/hooks/reduxHooks'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { addImageToBucket } from '../../../redux/slice/imageUploadSlice'
import { addImageDetailsToDb } from '../../../redux/slice/imageUploadSlice'

export const useFormikProps = () => {
  const dispatch = useAppDispatch()

  const formik = useFormik({
    initialValues: {
      uploadedBy: '',
      description: '',
      tags: '',
      file: null,
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
      const { uploadedBy, description, tags, file } = values

      if (file === null) return
      
      const newImage = await dispatch(addImageToBucket(file))
      const imageUrl = newImage.payload
      await dispatch(
        addImageDetailsToDb({ imageUrl, uploadedBy, description, tags })
      )
    },
  })

  return formik
}
