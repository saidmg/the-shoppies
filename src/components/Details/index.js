
import PropTypes from 'prop-types';

import Skeleton from 'react-loading-skeleton';


export default function Details({details}) {

    return (
        <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">{details[0]?.Title}</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <div className="card mb-3" style={{ maxWidth: ' 540px' }}>
                    <div className="row g-0">
                        <div className="col-md-4" >
                            <img src={details[0]?.Poster} alt="..." width='120px' height='auto' />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <p className="card-text fw-bolder">{details[0]?.Plot}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className='col-6'>
                        <h5>Genre</h5>
                        <p>{details[0]?.Genre}</p>
                    </div>
                    <div className='col-6'>
                        <h5>IMDb Rating</h5>
                        <p>{details[0]?.imdbRating}</p>
                    </div>
                    <div className='col-6'>
                        <h5>Country</h5>
                        <p>{details[0]?.Country}</p>
                    </div>
                    <div className='col-6'>
                        <h5>Year</h5>
                        <p>{details[0]?.Year}</p>
                    </div>
                    <div className='col-12'>
                        <h5>Actors</h5>
                        <p>{details[0]?.Actors}</p>
                    </div>
                    <div className='col-6'>
                        <h5>Director</h5>
                        <p>{details[0]?.Director}</p>
                    </div>
                    <div className='col-6'>
                        <h5>Production</h5>
                        <p>{details[0]?.Production}</p>
                    </div>
                    <div className='col-6'>
                        <h5>BoxOffice</h5>
                        <p>{details[0]?.BoxOffice}</p>
                    </div>
                    <div className='col-6'>
                        <h5>Awards</h5>
                        <p>{details[0]?.Awards}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Movie.propTypes = {
//     content: PropTypes.shape({
//         username: PropTypes.string.isRequired,
//         imageSrc: PropTypes.string.isRequired,
//         caption: PropTypes.string.isRequired,
//         docId: PropTypes.string.isRequired,
//         userLikedPhoto: PropTypes.bool.isRequired,
//         likes: PropTypes.array.isRequired,
//         comments: PropTypes.array.isRequired,
//         dateCreated: PropTypes.number.isRequired
//     })
// };
