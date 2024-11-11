import React from 'react'
import Carousel from './Carousel'
import bg1 from './images/banner.jpg'

const CarouselDemo = () => {
  const carouselImages = [
    {
      src: "https://www.wallpapertip.com/wmimgs/4-40231_tracking-gps.jpg"
      
    },
    {
      src: "https://www.chetu.com/img/blogs/why-you-should-create/why-you-should-create-your-own-fleet-management-system-banner.jpg"
      
    },
    {
      src: "https://image.shutterstock.com/image-photo/3d-wallpaper-design-waterfall-sea-260nw-1380925703.jpg"
      
    },
  ];

  return (
    <>
      
      <Carousel carouselImages={carouselImages} />
    </>
  )
}

export default CarouselDemo