import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {data} = props

  return (
    <Popup
      modal
      trigger={
        <div className="movie-item-cont">
          <img src={data.thumbnailUrl} alt="thumbnail" className="thumbnail" />
        </div>
      }
      className="popup-content"
    >
      {close => (
        <div className="modal">
          <div className="button-container" data-testid="closeButton">
            <button
              type="button"
              className="trigger-button"
              onClick={() => close()}
            >
              <IoMdClose />
            </button>
          </div>
          <ReactPlayer url={data.videoUrl} controls />
        </div>
      )}
    </Popup>
  )
}

export default MovieItem
