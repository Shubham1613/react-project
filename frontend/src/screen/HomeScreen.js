import React from 'react'
import { Row, Col } from 'react-bootstrap'
import photos from '../photos'
import Photo from '../components/Photo'
function HomeScreen() {
  return (
    <div>
      <h1>OUR GALLERY</h1>
      <Row>
        {photos.map(photo => (
          <Col key={photo._id} sm={12} md={6} lg={4} xl={3}>
            <Photo photo={photo} />
          </Col>

        ))}
      </Row>
    </div>
  )
}

export default HomeScreen
