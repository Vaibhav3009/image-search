import React from 'react'

class SearchBar extends React.Component{
 constructor(props){
    super(props)
    this.state = {text:''}
    this.handleForm = this.handleForm.bind(this)
    this.handleChange = this.handleChange.bind(this)
 }
  handleChange = (e) => {
  const value = e.target.value

  this.setState({text:value})

 }

 handleForm(event)
 {
event.preventDefault()//to prevent refresh


this.props.handleText(this.state.text)
 }
 render()
 {
    
     return(
      
        <div style={{background:'black'}} className='ui segment'>
        <form className='ui form' onSubmit={this.handleForm}>
        <div className='field'>
            <label style={{color:'white',fontSize:'1.2em',fontWeight:'bolder'}}>SEARCH IMAGE</label>
            <input type='text' placeholder='Search here' value={this.state.text} onChange = { (e) => this.handleChange(e)}></input>
            </div>
            </form>
            
        </div>



     )
 }
    
}

export default SearchBar