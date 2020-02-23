import React from 'react';
import './LandingPage.css';
import BookList from '../Components/BookList';
import { Link } from 'react-router-dom'

class LandingPage extends  React.Component {
  constructor(props){
    super(props);
    this.state = {
      addBook: false,
      bookList: true,
      books : [{
        "name": "Sample Book",
        "description": "Sample Description"
      }],
      isSearching:false,
      searchWord: '',
      searchedBooks: ''

    }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleForm = this.handleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

componentDidMount(){
  fetch("http://localhost:3001/")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState({books: [...this.state.books, ...data]})
    })
}

 handleAdd(){
  this.setState({bookList:false, addBook: true })
}

handleForm(event){
  const form = event.target;
  const data = new FormData(form);

  const book = {
    "name": data.get("name"),
    "description":  data.get("description")
  }

  fetch('http://localhost:3001/books', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    })
      .then((response) => response.json())
      .then((book) => {
        console.log('Success:', book);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      this.setState({books: [...this.state.books, book]})
    }

    handleChange(e){
      console.log(e.target.value)
      var searchedResult = this.state.books.filter((book) => book.name.startsWith(e.target.value))
      console.log(searchedResult)
      this.setState({isSearching: true, searchedBooks: searchedResult})

    }

  render() {
    return (
    <div>
        <div className="book-header" style={{backgroundColor: "azure"}}>
          <input type="search" onChange={this.handleChange}/>
          <h1 >Books</h1>
          <button onClick={this.handleAdd} className= "add-book">Add Book</button>
        </div>

        { this.state.bookList ? <BookList 
                                    isSearching={this.state.isSearching} 
                                    books={this.state.books}
                                    searchedBooks={this.state.searchedBooks}/> : '' }
{
//Add Book Form
  this.state.addBook ?  
    <div style={{display:"flex",justifyContent:"center"}}>   
        <form onSubmit={this.handleForm} style={{width:"30%"}}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Name.."/>

          <label htmlFor="description">Description</label>
          <input type="text" id="description" name="description" placeholder="Descripton.."/>
          <input type="submit" value="Submit"/>
        </form>     
    </div>

:

''

}       
    </div>
  );
}
}

export default LandingPage;
