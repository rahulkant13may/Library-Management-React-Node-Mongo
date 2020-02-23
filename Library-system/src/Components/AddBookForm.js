import React from 'react';

class AddBookForm extends React.Component{
    render(){
        return(
        <div style={{display:"flex",justifyContent:"center"}}>   
            <form onSubmit={this.handleForm} style={{width:"30%"}}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Name.."/>
    
              <label htmlFor="description">Description</label>
              <input type="text" id="description" name="description" placeholder="Descripton.."/>
              <input type="submit" value="Submit"/>
            </form>     
        </div>
        )
    }
}

export default AddBookForm;