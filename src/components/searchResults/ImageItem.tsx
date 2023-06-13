import { ImageData } from '../../TS/interfaces'
import { Button } from '../ui/ui-index'

interface ImageItemProps {
  imageData: ImageData
}
// TODO
//----------------------------------------------------------------------------------
const onDownloadClick = (event: React.MouseEvent) => {}

export const ImageItem = ({ imageData }: ImageItemProps) => {
  const { path, thumbnailPath, uploadedBy, description } = imageData

  return (
    <article className="group relative flex h-[250px] w-11/12 items-end rounded-xl md:h-[230px] md:w-[360px] lg:h-[250px] lg:w-[460px] ">
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
            alt={description}
          />
          <div className="flex flex-col text-slate-200">
            <p className="text-xs ">Uploaded by:</p>
            <p className="lg:text-lg ">{uploadedBy.toUpperCase()}</p>
          </div>
        </div>
        <button
          onClick={onDownloadClick}
          className="md:font-sm rounded-lg bg-slate-200 p-2 hover:bg-slate-50"
        >
          Download
        </button>
      </div>

      {/* <p>{_id}</p>
      <p>{thumbnailPath}</p>
      <p>{uploadedBy}</p>
      <p>{description}</p>
      <p>{tags}</p> */}
    </article>
  )
}
