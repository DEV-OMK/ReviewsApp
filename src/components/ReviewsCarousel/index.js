// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  onClickLeftArrow = () => {
    const {index} = this.state
    if (index > 0) {
      this.setState({index: index - 1})
    }
  }

  onClickRightArrow = () => {
    const {reviewsList} = this.props
    const {index} = this.state
    if (index < reviewsList.length - 1) {
      this.setState({index: index + 1})
    }
  }

  render() {
    const {reviewsList} = this.props
    const {index} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[index]

    return (
      <div className="bg-container">
        <h1 className="title">Reviews</h1>
        <div className="carousel">
          <div className="arrow-container">
            <button
              type="button"
              className="button"
              onClick={this.onClickLeftArrow}
              data-testid="leftArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                className="arrow-image"
                alt="left arrow"
              />
            </button>
          </div>
          <div className="review-container">
            <img src={imgUrl} className="review-image" alt={username} />
            <p className="username">{username}</p>
            <p className="company-name">{companyName}</p>
            <p className="description">{description}</p>
          </div>
          <div className="arrow-container">
            <button
              type="button"
              className="button"
              onClick={this.onClickRightArrow}
              data-testid="rightArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                className="arrow-image"
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
