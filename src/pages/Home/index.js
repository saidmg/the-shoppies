import { useEffect, useState } from 'react';
import "./style.css";

import API from "../../utils/API";
import Nomination from '../../components/Nomination';
import Movie from '../../components/Movie';
import Details from '../../components/Details';
import Banner from '../../components/Banner';

export default function Home() {

    const [search, setSearch] = useState([]);
    const [details, setDetails] = useState([]);
    const [nomination, setNomination] = useState([false, false, false, false, false]);
// setting the document title and getting the nomination list if the user have done it before, from the local storage 
    useEffect(() => {
        document.title = 'Omdb Nomination';
        getFromLocalStorage()
    }, []);

    async function getFromLocalStorage() {
//Try get the local storage that has the key "nominations if available , and then setting it for our nomination list"
        let x = JSON.parse(localStorage.getItem('nominations'))
        x && setNomination(x)
    }

    function removeNominated(event) {
        let id = event.target.id
//Get the id which is equal to the imdbID of the clicked nominated movie card and then removing 
// it from the nomination list and updating the local storage 
        for (let i = 0; i < nomination.length; i++) {
            if (nomination[i]?.imdbID === id) {
                let removing = [...nomination]
                removing[i] = false
                setNomination(removing)
                localStorage.setItem('nominations', JSON.stringify(removing))
            }
        }
    }

    async function changeinpt(event) {
//Once the user starts typing in the search input, make an API call and get the results to show 
        if (event.target.value.length > 1) {
            API.searchByTitle(event.target.value.trim())
                .then(res => {
                    let result = res.data.Search;
                    //Removing the duplicate movies that sometimes the API gives us
                    let check = new Set();
                    let removedDuplicate= result?.filter(obj => !check.has(obj['imdbID']) && check.add(obj['imdbID']));
                    setSearch(removedDuplicate)})
                    .catch(err => console.log(err));
        }
    }

    async function addToNomination(event) {
        // Get the imdbID of the movie selected and then get From the omdb API the details for that movie to store it in case
        //the user wants to check it later. And then update the nomination list and the local storage.
        let id = event.target.id
        let searchResult = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=100ee64f`).then(r => r.json())
        let result1 = [...nomination]
        for (let i = 0; i < 5; i++) {
            if (result1[i] === false) {
                result1[i] = searchResult
                setNomination(result1)
                localStorage.setItem('nominations', JSON.stringify(result1))
                break
            }
        }
    }

    async function showDetails(event) {
        //get the imdbID of the movie selected and then get the details of the movie from the nomination list.
        let id = event.target.id
        let result = nomination.filter(movie => movie?.imdbID === id)
        setDetails(result)
    }

    return (
        <>

            <div className="container mt-4" style={{ minHeight: '80vh' }}>

                <Details
                    details={details}
                />

                <Nomination
                    nomination={nomination}
                    showDetails={showDetails}
                    removeNominated={removeNominated}
                />

                <div className="input-group mb-3">
                    <div className="input-group-text bg-dark">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-search" viewBox="-2 -2 20 20">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </div>
                    <input onChange={changeinpt} type="text" id="exampleDataList" className="form-control" placeholder="Type to search for a movie..." aria-label="Text input with button" />
                </div>

                <Movie
                    search={search}
                    nomination={nomination}
                    addToNomination={addToNomination}
                />

            </div>

            <Banner />
        </>
    )
}

