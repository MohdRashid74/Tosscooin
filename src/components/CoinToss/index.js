import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    changeImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    Headcount: 0,
    TailCount: 0,
  }

  onClickButton = () => {
    const toss = Math.floor(Math.random() * 2)
    let tossChangeImage = ''
    let headCount = 0
    let tailCount = 0
    if (toss === 0) {
      tossChangeImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      headCount += 1
      console.log(headCount)
    } else {
      tossChangeImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
      tailCount += 1
    }
    this.setState({
      changeImage: tossChangeImage,
      Headcount: headCount,
      TailCount: tailCount,
    })
    console.log(toss)
  }

  render() {
    const {changeImage, Headcount, TailCount} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="pargraph">Heads (or) Tails</p>
          <img src={changeImage} className="image" alt="toss result" />
          <button type="button" className="button" onClick={this.onClickButton}>
            Toss Coin
          </button>
          <div className="container2">
            <p className="pargraph1">Total: 0</p>
            <p className="pargraph1">Heads: {Headcount}</p>
            <p className="pargraph1">Tails: {TailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
