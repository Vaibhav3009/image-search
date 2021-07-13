import React, { Component } from 'react'

 class ImageCard extends Component {

        constructor(props)
        {
            super(props)
            this.imageRef = React.createRef()
            this.state = {
                span:0
            }
        }

        componentDidMount()

        {
            //WE ADDED EVENT LISTENER TO LET IT LOAD BECAUSE AS SOON AS 
            // COMPONENT GOT MOUNTED THE IMAGE REF STILL DID NOT HAD THE COMPLERTE IMG OBJECT SO HEIGHT WAS UNAVAILABE 
            // IT REQUIRED TIME
            this.imageRef.current.addEventListener('load',this.setSpans)

    

        }
        setSpans = () =>{
            const height= this.imageRef.current.clientHeight
            const spans = Math.ceil(height / 10)
            this.setState({span:spans})
            
                        }
    render() {
        return (
            <div style={{gridRowEnd:`span ${this.state.span}`,textAlign:'center', 
            boxShadow: ' 0px 15px 10px -15px #111;  '}} className='cardBox'>
                <img ref={this.imageRef} alt={this.props.image.description} src={this.props.image.urls.regular}></img>
            </div>
        )
    }
}

export default ImageCard
