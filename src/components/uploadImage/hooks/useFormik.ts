import { useAppDispatch, useAppSelector } from '../../../redux/hooks/reduxHooks'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
  addImageToBucket,
  addImageDetailsToDb,
} from '../../../redux/slice/imageUploadSlice'
import { getSingleImage } from '../../../redux/slice/dataSlice'
import { useNavigate } from 'react-router-dom'

export const useFormikProps = () => {
  const dispatch = useAppDispatch()
  const { errors } = useAppSelector((state) => state.imageUploadReducer)
  const navigate = useNavigate()

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
      file: Yup.mixed().required('Please select an image'),
    }),
    onSubmit: async (values) => {
      const { uploadedBy, description, tags, file } = values

      if (file === null) return

      const newImage = await dispatch(addImageToBucket(file))
      const imageUrl = newImage.payload
      const imageDbRecord = await dispatch(
        addImageDetailsToDb({ imageUrl, uploadedBy, description, tags })
      )
      const imageDbId = imageDbRecord.payload.data._id
      await dispatch(getSingleImage(imageDbId))

      if (!errors) {
        navigate('/search-results')
      }
    },
  })

  return formik
}
