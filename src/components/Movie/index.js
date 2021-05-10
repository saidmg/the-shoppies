import PropTypes from 'prop-types';

export default function Movie({ search, nomination, addToNomination }) {

    return (
        <>
            <h3 className="text=dark">Results:</h3>
            <div className='row justify-content-center'>
                {search?.length > 1 ? search.map(movie =>
                    <div key={movie.imdbID} className="col-lg-3 col-md-4 col-sm-6 col-xs-12 ">
                        <div className={`card addShadow rounded ${nomination.filter(nominated => nominated?.imdbID === movie.imdbID).length > 0 ?
                            'selection-effect' : nomination.filter(nominated => nominated?.imdbID === movie.imdbID).length > 0 ? '' : 'nomin2'}`}
                            style={{ width: '214px', minHeight: '495px', margin: 'auto', marginTop: '5%', marginBottom: '5%' }}>
                            <img src={movie.Poster === "N/A" ?
                                'https://user-images.githubusercontent.com/71358869/116933814-14120680-ac32-11eb-8136-6ce8c7c4be1d.png'
                                : movie.Poster} className={`card-img-top border-bottom h-auto ${nomination.filter(nominated =>
                                    nominated?.imdbID === movie.imdbID).length > 0 ? 'nomin' : ''}`} width="100%" height="100%" alt={movie.Title + "'s poster"}
                                style={{ borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px' }} />
                            <div className="card-body text-center">
                                <h5 className="card-title">{movie.Title}</h5>
                                <p className="card-text">{movie.Year}</p>
                            </div>
                            {/* Disable the button and make visual effect in case it was nominated.  In case 5 nominations were done , disable all */}
                            <button disabled={(nomination.filter(nominated => nominated?.imdbID === movie.imdbID).length > 0) || nomination.filter(
                                nom => nom === false).length === 0} onClick={addToNomination} className="btn btn-dark " id={movie.imdbID}
                                data-bs-toggle={`${nomination.filter(nom => nom === false).length === 1 ? 'modal' : ''}`} data-bs-target="#staticBackdrop"
                                style={{ borderTopLeftRadius: '0px', borderTopRightRadius: '0px' }}>{(nomination.filter(nominated =>
                                    nominated?.imdbID === movie.imdbID).length > 0) ? 'Nominated!' : `${nomination.filter(nom =>
                                        nom === false).length === 0 ? 'Completed Selection' : 'Nominate'}`}</button>

                        </div>
                    </div>) : "No results!"}
            </div>
        </>
    )
}
//Validating the props used in this component
Movie.propTypes = {
    search: PropTypes.array,
    nomination: PropTypes.array.isRequired,
    addToNomination: PropTypes.func.isRequired,
};
