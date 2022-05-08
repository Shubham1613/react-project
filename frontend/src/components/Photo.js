import React from 'react'
import { Card } from 'react-bootstrap'

function Photo({ photo }) {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={'/photo/${photo_id}'}>
        <Card.Img src={photo.image}  height="300px" width="400px"/>
      </a>

      <Card.Title as="div" >
        <div className="my-3 mx-2">
        <h4>{photo.name}</h4>
        </div>
      </Card.Title>

      <Card.Title as="div">
        <div className="my-3">
        <strong>{photo.description}</strong>
        </div>
      </Card.Title>
    </Card>
  )
}

export default Photo

