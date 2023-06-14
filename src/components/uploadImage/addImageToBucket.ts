export const addImageToBucket = async (file: any) => {
  try {
    const preSignedUrl = await fetch(
      'http://18.134.11.162:5001/get-presigned-url'
    )
    const { url } = await preSignedUrl.json()

    //upload image to s3 bucket
    await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: file,
    })

    const imageUrl = url.split('?')[0]

    return imageUrl
  } catch (err) {
    console.log(err)
    console.log('error getting presigned url')
  }
}
