import { useEffect, useState } from 'react'
import logo from '../public/broken.png'
import Image from 'next/image'

export const FallbackImage = ({ src, ...rest }) => {
  const [imgSrc, setImgSrc] = useState(src)

  useEffect(() => {
    setImgSrc(src)
  }, [src])

  return (
    <Image
      {...rest}
      src={imgSrc ? imgSrc : logo}
      onError={() => {
        setImgSrc(logo)
      }}
      objectFit="cover"
    />
  )
}