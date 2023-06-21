import { useFormik } from 'formik'
import * as Yup from 'yup'
import { addImageToBucket } from '../addImageToBucket'
import { addImageDetailsToDb } from '../addImageDetailsToDb'

export const useFormikProps = () => {
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
      console.log('values', values)
      const { uploadedBy, description, tags, file } = values
      const imageUrl: string = await addImageToBucket(file)
      await addImageDetailsToDb({ imageUrl, uploadedBy, description, tags })
    },
  })

  return formik
}
