import { useEffect, useState } from 'react';
import "./style.css";

import API from "../../utils/API";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Nomination from '../../components/Nomination';
import Movie from '../../components/Movie';
import Details from '../../components/Details';
import Banner from '../../components/Banner';

export default function Home() {

    const [search, setSearch] = useState([]);
    const [details, setDetails] = useState({});
    const [nomination, setNomination] = useState([false, false, false, false, false]);

    useEffect(() => {
        document.title = 'Omdb Nomination';
        getFromLocalStorage()
    }, []);

    async function getFromLocalStorage() {
        let x = JSON.parse(localStorage.getItem('nominations'))
        x && setNomination(x)
    }

    function removeNominated(event) {
        let id = event.target.id
        for (let i = 0; i < nomination.length; i++) {
            if (nomination[i]?.imdbID === id) {
                let trying = [...nomination]
                trying[i] = false
                setNomination(trying)
                localStorage.setItem('nominations', JSON.stringify(trying))
            }
        }
    }

    async function changeinpt(event) {
        if (event.target.value.length > 1) {
            API.searchByTitle(event.target.value.trim())
                .then(res => (res.data.Response !== 'False') && setSearch(res.data.Search))
                .catch(err => console.log(err));
        }
    }

    async function addToNomination(event) {
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
        let id = event.target.id
        let result = nomination.filter(movie => movie?.imdbID === id)
        setDetails(result)
    }

    return (
        <>
            <Header />

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
            <Footer />
        </>
    )
}

