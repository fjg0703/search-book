import React from "react";
import "../index.css";
import { useSelector, useDispatch } from "react-redux";
import { addToWishlist, deleteFromWishlist } from "../features/wishlistSlice";




const Wishlist = () =>{

    const dispatch = useDispatch()
    const wishlistBooks = useSelector(state => state.wishlist.wishlist)
    //console.log(books)


    return(
        <div>
            <h1>This is a Wishlist</h1>
            <ul>
                {wishlistBooks.map(book =>(
                    <li key={book.id}>
                    <div className="bookCard">
                        <img src={book.volumeInfo.imageLinks.thumbnail} width="180px" height="300px">
                        </img>
                        <div className="bookInfo" >
                            <p><b>Title:</b> {book.volumeInfo.title}</p>
                            <button className="wishlishDeleteButt" onClick={() => dispatch(deleteFromWishlist())}>Delete</button>
                            
        
                        </div>
        
                    </div>
        
                </li>

                ))}
                
            </ul>


        </div>
        
    
        
        );

}

export default Wishlist;