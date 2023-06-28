import { useAppSelector } from '../../../redux/hooks/reduxHooks'

export const Loading = () => {
  const isLoading = useAppSelector((state) => state.dataReducer.isLoading)

  const loadingJSX = (
    <img src="./loading.svg" alt="" className="mt-6 animate-spin" />
  )

  return (
    <div className="flex w-full items-center justify-center overflow-hidden ">
      {isLoading ? loadingJSX : null}
    </div>
  )
}
