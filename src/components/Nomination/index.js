
import PropTypes from 'prop-types';
import ReactCardFlip from 'react-card-flip';
import Skeleton from 'react-loading-skeleton';


export default function Nomination({ nomination, showDetails, removeNominated }) {

    return (
        <div>
            <h2 style={{ textAlign: 'center', color: 'black' }}>Nomination List</h2>
            <div className="row justify-content-center my-5" >
                {nomination.map(nominated =>
                    <div className='col-lg-1 col-md-2 col-sm-4 my-2' style={{ width: 'fit-content' }} >
                        <ReactCardFlip isFlipped={!nominated}>
                            <div className="shadow-lg" key="front">
                                <div className="card bg-dark text-white  rounded" style={{ width: "120px", height: '180px' }}>
                                    {nominated.Poster && <img src={nominated.Poster === "N/A" ?
                                        'https://user-images.githubusercontent.com/71358869/116933814-14120680-ac32-11eb-8136-6ce8c7c4be1d.png'
                                        : nominated.Poster} className="card-img" alt="..." style={{ opacity: '40%', }} />}
                                    <div className="card-img-overlay">
                                        <svg onClick={showDetails} id={nominated.imdbID} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" className="card-title btn btn-sm float-end" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-question-square" viewBox="0 0 16 16" style={{ position: 'absolute', right: '5%', top: '5%' }}>
                                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                            <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                                        </svg>
                                        <button onClick={removeNominated} id={nominated.imdbID} className="btn btn-dark btn-sm" style={{ marginLeft: '-20%', marginTop: '153%', width: '140%' }}>Remove</button>
                                    </div>
                                </div>
                            </div>
                            <div style={{ margin: '2%' }} key="back">
                                {/* bg-dark */}
                                <div className="card bg-dark text-white" style={{ width: "120px", height: '180px', boxShadow: 'inset 0px 0px 30px 30px rgba(0,0,0,0.9)' }}>
                                    <div className="card-img-overlay">
                                    </div>
                                </div></div>
                        </ReactCardFlip>
                    </div>)}

            </div>

        </div>

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

