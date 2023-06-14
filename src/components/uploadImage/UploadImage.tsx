import { useState } from 'react'
import { SecondaryNav } from '../componentIndex'
import { Button } from '../ui/ui-index'
import { addImageToBucket } from './addImageToBucket'
import { addImageDetailsToDb } from './addImageDetailsToDb'

export const UploadImage = () => {
  const [file, setFile] = useState<File | null>(null)

  const onSelectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0])
      console.log('event.target.files[0]', event.target.files[0])
    }
  }

  const onFileUplolad = async (event: any) => {
    event.preventDefault()
    const imageURL = await addImageToBucket(file)
    await addImageDetailsToDb(imageURL)
  }

  return (
    <section>
      <SecondaryNav />
      <article className="m-4 flex min-h-screen w-full items-center justify-center">
        <div className="flex w-1/2 flex-col items-center justify-center bg-primaryGreen">
          <h1 className="m-4">Upload Image</h1>
          <form className="flex flex-col items-center justify-center">
            <input type="file" name="file" onChange={onSelectFile} />
            <Button
              onClick={onFileUplolad}
              optionalClasses="my-2 mt-4 rounded-xl border-2 border-darkBlack bg-primaryGreen px-4 py-1 text-xl font-semibold text-darkBlack lg:w-[28rem]"
              buttonText="Upload File"
            />
          </form>
        </div>
      </article>
    </section>
  )
}
