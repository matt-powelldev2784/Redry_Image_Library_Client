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
    <article className="group relative flex h-[250px] w-11/12 items-end rounded-xl md:w-5/12 lg:w-[400px] ">
      <div className="absolute z-10 h-full w-full rounded-xl group-hover:bg-radial-black"></div>
      <img
        className="absolute h-full w-full rounded-xl object-cover"
        src={thumbnailPath}
        alt={description}
      />

      <div className="relative z-50 flex h-fit w-full flex-row items-center justify-between rounded-b-lg bg-black/50 px-4 py-2 group-hover:flex">
        <div className="flex w-full flex-row items-center justify-between gap-4">
          <img
            className="h-10"
            src="/re_dry_flower_green.svg"
            alt="Redry logo"
          />
          <div className="flex flex-col text-slate-200">
            <p className="text-center text-xs">Uploaded by:</p>
            <p className="text-center text-sm">{uploadedBy.toUpperCase()}</p>
          </div>
          <button
            onClick={onDownloadClick}
            id={_id}
            className="block rounded-lg bg-slate-200 px-1 py-2 hover:bg-slate-50 md:text-xs"
          >
            Download
          </button>
        </div>
      </div>
    </article>
  )
}
