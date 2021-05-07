import PropTypes from 'prop-types';

import Skeleton from 'react-loading-skeleton';


export default function Movie({search, nomination, addToNomination}) {

  return (
<>
<h3 className="text=dark">
Results:
</h3>
<div className='row justify-content-center'>
{search?.length > 1 ? search.map(movie =>
    <div  key={movie.imdbID} className="col-lg-3 col-md-4 col-sm-6 col-xs-12 ">
        <div className={`card addShadow rounded  ${nomination.filter(nominated => nominated?.imdbID === movie.imdbID).length > 0 ? 'selection-effect' : nomination.filter(nominated => nominated?.imdbID === movie.imdbID).length > 0 ? '' : 'nomin2'}`} style={{ width: '214px', minHeight: '450px', margin: 'auto', marginTop: '5%', marginBottom: '5%' }}>
            <img src={movie.Poster === "N/A" ?
                'https://user-images.githubusercontent.com/71358869/116933814-14120680-ac32-11eb-8136-6ce8c7c4be1d.png'
                : movie.Poster} className={`card-img-top rounded h-auto ${nomination.filter(nominated => nominated?.imdbID === movie.imdbID).length > 0 ? 'nomin' : ''}`} alt="..." />
            <div className="card-body text-center">
                <h5 className="card-title">{movie.Title}</h5>
                {movie.Title.length <= 20 ? <br></br> : null}
                <p className="card-text">{movie.Year}</p>
            </div>
            <button disabled={(nomination.filter(nominated => nominated?.imdbID === movie.imdbID).length > 0) || nomination.filter(nom => nom === false).length === 0} onClick={addToNomination} className="btn btn-dark " id={movie.imdbID} data-bs-toggle={`${nomination.filter(nom => nom === false).length === 1 ? 'modal' : ''}`} data-bs-target="#staticBackdrop">{(nomination.filter(nominated => nominated?.imdbID === movie.imdbID).length > 0) ? 'Nominated!' : `${nomination.filter(nom => nom === false).length === 0 ? 'Completed Selection' : 'Nominate'}`}</button>

        </div>
    </div>) : "No results yet!"}
</div>  </>)
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
