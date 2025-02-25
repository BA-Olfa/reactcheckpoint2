import React from 'react'
import dataProduit from './product'

const Image = ({ src }) => {
  return (
    <div><img src={src} className="card-img-top" /></div>
  )
}

export default Image