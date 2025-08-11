export default function Third(probs) {

    const musicdata = probs.data

    console.log(musicdata);

    


    return (
        <>



        
          <h1 style={{marginTop:'200px',marginLeft:'400px'}}>Music playlist</h1>
         <div className="container-fluid" style={{display:'flex'}}>
                   {
                musicdata.map((el, index) => {
                    return (
                        <>
                        <div key={index}  className="card" style={{ width: '18rem', marginTop: '60px',marginLeft:'40px' }}>
                            <img src={musicdata[index].coverpic} className="card-img-top" style={{height:'200px'}} alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{musicdata[index].title }</h5>
                                <audio src={musicdata[index].pathofaudio}  controls style={{width:'16rem'}}></audio>
                                <p className="card-text">{musicdata[index].description }</p>

                            </div>
                        </div>
                       

                     
                       </>



                    )
                })
            }
               </div>

           



        </>
    )
}