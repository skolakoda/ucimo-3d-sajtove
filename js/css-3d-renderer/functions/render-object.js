import {Matrix4} from 'three'
import {CSS3DObject} from '../CSS3DObject'
import {CSS3DSprite} from '../CSS3DSprite'
import {cache, cameraElement} from '../shared'
import {getObjectCSSMatrix} from './renderer-helpers'

export const renderObject = function (object, camera) {
  if (object instanceof CSS3DObject) {
    let defaultMatrix = object.matrixWorld

    if (object instanceof CSS3DSprite) {
      // http://swiftcoder.wordpress.com/2008/11/25/constructing-a-billboard-matrix/
      const matrix = new Matrix4()
      matrix.copy(camera.matrixWorldInverse)
      matrix.transpose()
      matrix.copyPosition(object.matrixWorld)
      matrix.scale(object.scale)

      matrix.elements[ 3 ] = 0
      matrix.elements[ 7 ] = 0
      matrix.elements[ 11 ] = 0
      matrix.elements[ 15 ] = 1

      defaultMatrix = matrix
    }

    const style = getObjectCSSMatrix(defaultMatrix)
    const element = object.element
    const cachedStyle = cache.objects[ object.id ]

    if (cachedStyle === undefined || cachedStyle !== style) {
      element.style.transform = style
      cache.objects[ object.id ] = style
    }

    if (element.parentNode !== cameraElement) {
      cameraElement.appendChild(element)
    }
  }

  for (let i = 0, l = object.children.length; i < l; i++) {
    renderObject(object.children[ i ], camera)
  }
}
