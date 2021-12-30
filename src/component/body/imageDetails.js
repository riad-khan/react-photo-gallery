import React from 'react'

const imageDetails = props => {
    const data = props.history.location.state.image
    return (
        <div className='container'>
            <div className='row'>
             <div className='col-lg-12'>
             <img style={{width:'100%',height:'450px'}} className="img-fluid" src= {data.url} />
             <h3>{data.title}</h3>
             <p>{data.description}</p>
             </div>

            </div>
            
        </div>
    )
}

export default imageDetails

