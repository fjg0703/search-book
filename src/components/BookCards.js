import React, { useEffect, useState } from "react";
import "../index.css";

const BaseUrl =  "https://www.googleapis.com/books/v1/volumes?q=bookname&startIndex=0&maxResults=20";


const BookCards = () =>{

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [books, setBooks] = useState([]);


    useEffect(() => {
        fetch(BaseUrl)
            .then(res => res.json())
            .then(
                
                (result) => {
                
                    setIsLoaded(true);
                    setBooks(result);
                    console.log(books)
                },

            (error) => {
                setIsLoaded(true);
                setError(error);
            }
            )
    }, [])



    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <ul>
                {books.items.map(item =>(
                    <li key={item.id}>
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
        );
    }

}





export default BookCards;
