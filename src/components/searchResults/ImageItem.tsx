import { ImageData } from '../../TS/interfaces'

interface ImageItemProps {
  imageData: ImageData
}

export const ImageItem = ({ imageData }: ImageItemProps) => {
  const { _id, path, thumbnailPath, uploadedBy, description, tags } = imageData

  return (
    <article className="relative flex h-[250px] w-11/12 md:h-[230px] md:w-[360px] lg:h-[250px] lg:w-[460px]">
      <img
        className="absolute h-full w-full object-cover"
        src={thumbnailPath}
        alt={description}
      />

      {/* <p>{_id}</p>
      <p>{thumbnailPath}</p>
      <p>{uploadedBy}</p>
      <p>{description}</p>
      <p>{tags}</p> */}
    </article>
  )
}
