import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import Photo from '../components/Photo.js'
function Gallery() {
  return (
    <Card>
      <Photo />
      <Photo />
      <Photo />
    </Card>
  )
}

export default Gallery
