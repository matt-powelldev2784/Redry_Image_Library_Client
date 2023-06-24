interface handleHrefClickProps {
  route: string
  newTab?: boolean
}

export const handleHrefClick = ({ route, newTab }: handleHrefClickProps) => {
  if (newTab) return window.open(route, '_blank')
  window.location.href = route
}
