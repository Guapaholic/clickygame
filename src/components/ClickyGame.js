import React, { PureComponent } from 'react'
import { arrayOf, shape, string } from 'prop-types'

const shuffle = (out, current) => {
  if (out.length === 0) return out.concat(current)
  const i = Math.floor(Math.random() * out.length)
  const temp = out[i]
  out[i] = current
  return out.concat(temp)
}

class ClickyGame extends PureComponent {
  static propTypes = {
    images: arrayOf(shape({
      url: string.isRequired,
      name: string.isRequired,
    })).isRequired,
  }

  state = {
    clicked: this.props.images.reduce((images, img) => ({
      ...images,
      [img.name]: false,
    }), {}),
    score: 0,
    finished: false,
  }

  onCorrectGuess = imageName => this.setState(state => ({
    ...state,
    score: state.score + 1,
    clicked: {
      ...state.clicked,
      [imageName]: true,
    },
  }))

  onIncorrectGuess = () => this.setState(state => ({
    finished: true,
  }))

  onImageClick = imageName => () => {
    if (this.state.finished) {
      return this.setState(state => ({
        clicked: this.props.images.reduce((images, img) => ({
          ...images,
          [img.name]: img.name === imageName,
        }), {}),
        score: 1,
        finished: false,
      }))
    }
    if (this.state.clicked[imageName]) return this.onIncorrectGuess()
    return this.onCorrectGuess(imageName)
  }

  renderImages = images => images.reduce(shuffle, []).map(image => (
    <img
      onClick={this.onImageClick(image.name)}
      src={image.url}
      alt={image.name}
      key={image.name}
    />
  ))

  render() {
    return (
      <React.Fragment>
        <div>
          Score: {this.state.score}
          <br />
          {
            this.state.finished ?
              <span>FAILURE</span> :
              this.state.score > 0 ?
                <span>Correct!</span> :
                <span>Click to Start</span>
          }
        </div>
        <div>
          {this.renderImages(this.props.images)}
        </div>
      </React.Fragment>
    )
  }
}

export default ClickyGame
