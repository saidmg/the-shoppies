import PropTypes from 'prop-types';

import Skeleton from 'react-loading-skeleton';


export default function Banner() {
    function goTop(){
        window.scrollTo(0, 0)
    }

  return (
      
      <>
  {/* <!-- Modal --> */}
  <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content" style={{color:'white',height:'500px',backgroundImage:'url(./movieAward.jpg)',backgroundRepeat:'no-repeat',backgroundPosition: '50% 50%',backgroundSize:'cover'
}}>
          <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Good Luck!</h5>
              <button onClick={goTop}  type="button" className="btn-sm btn-close " data-bs-dismiss="modal" aria-label="Close" style={{color:'white'}}></button>
          </div>
          <div className="modal-body" style={{textAlign:'center'}}>
              <p>You have successfully selected your 5 nominees!  </p> 
              <p>You can still check the movies details or edit the nomination list.</p>
              <h4>Thank you for your participation!</h4></div>
          <div className="modal-footer">
              <button onClick={goTop} type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
              {/* <button type="button" className="btn btn-dark">Understood</button> */}
          </div>
      </div>
  </div>
</div>
</>
  )
}

// Movie.propTypes = {
//   content: PropTypes.shape({
//     username: PropTypes.string.isRequired,
//     imageSrc: PropTypes.string.isRequired,
//     caption: PropTypes.string.isRequired,
//     docId: PropTypes.string.isRequired,
//     userLikedPhoto: PropTypes.bool.isRequired,
//     likes: PropTypes.array.isRequired,
//     comments: PropTypes.array.isRequired,
//     dateCreated: PropTypes.number.isRequired
//   })
// };