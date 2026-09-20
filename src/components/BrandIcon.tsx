import type { SimpleIcon } from 'simple-icons'

type BrandIconProps = {
  icon: SimpleIcon
  size?: number
}

export function BrandIcon({
  icon,
  size = 18,
}: BrandIconProps) {
  return (
    <svg
      role="img"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  )
}