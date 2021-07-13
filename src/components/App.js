import React from 'react'
import SearchBar from './SearchBar'
import ImageList from './ImageList'
import unsplash from '../api/unsplash'
class App extends React.Component {
     
     state = {images:[]}
     handleText =async (text) =>{
  
       const response = await unsplash.get('/search/photos',{
            params:{query:text}
        
        })
           
            this.setState({images:response.data.results})
         
            
    }

    
    render(){

    return (
        <div className='ui container' style={{margin:'1em'}}>
            <SearchBar handleText = {this.handleText}/>
            
            <ImageList images={this.state.images}/>
          
            
        </div>
    )
}
}
export default App
