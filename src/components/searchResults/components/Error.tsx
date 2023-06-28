import { useAppSelector } from '../../../redux/hooks/reduxHooks'

export const Error = () => {
  const errors = useAppSelector((state) => state.dataReducer.errors)

  const errorJSX = (
    <p className="m-2 text-red-500">Server Error. Unable to load data.</p>
  )

  return (
    <div className="flex w-full items-center justify-center overflow-hidden ">
      {errors ? errorJSX : null}
    </div>
  )
}
