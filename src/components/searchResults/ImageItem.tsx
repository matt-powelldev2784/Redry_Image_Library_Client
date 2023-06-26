import { ImageData } from '../../TS/interfaces'
import { useAppSelector } from '../../redux/hooks/reduxHooks'

interface ImageItemProps {
  imageData: ImageData
}

export const ImageItem = ({ imageData }: ImageItemProps) => {
  const images = useAppSelector((state) => state.dataReducer.imageData)

  const onDownloadClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const imageId = (event.target as HTMLButtonElement).id
    const image = images.find((image) => image._id === imageId)
    const path = image?.path
    if (path) window.open(path)
  }

  const { thumbnailPath, uploadedBy, description, _id } = imageData

  return (
    <article className="group relative flex h-[250px] w-11/12 items-end rounded-xl md:h-[200px] md:w-5/12 lg:h-[200px] lg:w-3/12 ">
      <div className="absolute z-10 h-full w-full rounded-xl group-hover:bg-radial-black"></div>
      <img
        className="absolute h-full w-full rounded-xl object-cover"
        src={thumbnailPath}
        alt={description}
      />

      <div className="relative bottom-0 z-50 hidden h-fit w-full flex-row items-center justify-between rounded-b-lg px-4 py-3 group-hover:flex ">
        <div className="flex flex-row items-center justify-start gap-4">
          <img
            className="w-12"
            src="/re_dry_flower_circle_black.svg"
            alt="Redry logo"
          />
          <div className="flex flex-col text-slate-200">
            <p className="text-xs ">Uploaded by:</p>
            <p className="text-sm ">{uploadedBy.toUpperCase()}</p>
          </div>
        </div>
        <button
          onClick={onDownloadClick}
          id={_id}
          className="block rounded-lg bg-slate-200 p-2 hover:bg-slate-50 md:text-xs"
        >
          Download
        </button>
      </div>
    </article>
  )
}
