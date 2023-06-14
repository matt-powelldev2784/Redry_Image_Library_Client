export const addImageDetailsToDb = async (imageUrl: any) => {
  try {
    const imageProp = {
      path: imageUrl,
      uploadedBy: 'Matthew Powell',
      description: 'cat in a hat',
      tags: ['cat', 'hat'],
    }

    const url = 'http://18.134.11.162:5001/add-image-details-to-db'
    const newImage = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(imageProp),
    })

    const { data } = await newImage.json()
    console.log('data', data)
  } catch (err) {
    console.log(err)
    console.log('error adding image details to db')
  }
}
