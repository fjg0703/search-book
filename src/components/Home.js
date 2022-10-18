import React, { useState, useEffect } from "react";
import "../index.css";
import { addToWishlist } from "../features/wishlistSlice";
import { useSelector, useDispatch } from "react-redux";



const BaseUrl =  "https://www.googleapis.com/books/v1/volumes?q=bookname&startIndex=0&maxResults=20";



const Home = () =>{
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [books, setBooks] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [filteredBooks, setFilteredBooks] = useState([])

    const dispatch = useDispatch()


    useEffect(() => {
        fetch(BaseUrl)
            .then(res => res.json())
            .then(
                
                (result) => {
                
                    setIsLoaded(true);
                    setBooks(result);
                },

            (error) => {
                setIsLoaded(true);
                setError(error);
            }
            )
    }, [])

    const searchBooks = (searchValue) => {
        setSearchInput(searchValue)
        console.log(searchValue)
        if(searchInput !== "" ) {
            
            const searchResults = books.items.filter((book) => {

                return Object.values(book.volumeInfo).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            console.log(searchResults)
            setFilteredBooks(searchResults)
        }
    }

    // const book = ;



    // const handleClick = () => {
    //     dispatch(addToWishlist(book))
    // }


    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="home">
                <section className="searchBar">
                    <input className="searchBar" onChange={(e) => searchBooks(e.target.value)}></input>
                    <button>submit</button>
                </section>

                <section>
                <ul>
                    {filteredBooks.map(item =>(
                    <li key={item.id} >
                    <div className="bookCard">
                        <img src={item.volumeInfo.imageLinks.thumbnail} width="180px" height="300px">
                        </img>
                        <div className="bookInfo" >
                            <p><b>Title:</b> {item.volumeInfo.title}</p>
                            <p><b>Authors:</b> {item.volumeInfo.authors}</p>
                            <p><b>Publisher:</b> {item.volumeInfo.publisher}</p>
                            <p><b>Description:</b> { item.volumeInfo.description }</p>
        
                        </div>
        
                    </div>
        
                    </li>

                ))}
                
                </ul>
                
                </section>
                


            </div>
            
        );
    }

}

export default Home;