import React from 'react';
import { Link } from 'react-router-dom'

class BookList extends React.Component {
    render(){
        return (
            <div className=" book-list" >
            {this.props.isSearching == false ?  this.props.books.map((book) => {
              return(
              <div className="card" style={{width:"15%"}} key={book.id}>
                {book.name}
                <h4>{book.description}</h4>
                  <Link to={{
                        pathname:`/book_detail/${book.name}` ,
                        state: {
                          book: book
                        }
                    }}
            > 
                  <h3 style={{color:"red"}}> Book Detail</h3>
                  </Link>
              </div>
              )
            })   : 
            
            this.props.searchedBooks.map((book) => {
              return(
              <div className="card" style={{width:"15%"}} key={book.id}>
                {book.name}
                <h4>{book.description}</h4>
                  <Link to={{
                        pathname:`/book_detail/${book.name}` ,
                        state: {
                          book: book
                        }
                    }}
            > 
                  <h3 style={{color:"red"}}> Book Detail</h3>
                  </Link>
              </div>
              )
            })
            }
            </div>           
        )
    }

}

export default BookList;