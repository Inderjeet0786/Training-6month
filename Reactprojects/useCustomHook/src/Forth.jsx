import { data } from "./App";
import { useContext } from "react";
export default function Forth() {
  var items = useContext(data)
  console.log(items.items.item);
  var product = items.items.item;

  console.log(product);
  

  let donut = product.filter((el) => {
    if (el.type == 'donut') {
      return (el)
    }
  })

  let muffin = product.filter((el) => {
    if (el.type == 'muffin') {
      return (el)
    }
  })

  let pasty = product.filter((el) => {
    if (el.type == 'pastry') {
      return (el)
    }
  })

  return (
    <>
      <div className="container">
        <div className="row">

          <h1>Donut</h1>

          {

            donut.map((el, index) => (

              <div className="col-md-4 d-flex" key={index}>

                <div className="card" style={{ width: "18rem", backgroundColor: 'black', margin: '10px' }}>
                  <img src={el.image} className="card-img-top" alt="..." style={{ height: '300px' }} />
                  <div className="card-body">
                    <h5 className="card-title" style={{ color: 'whitesmoke' }}>{el.type}</h5>
                   
                      <ul className="card-text " style={{ color: 'whitesmoke' }}>{
                        el.batters.batter.map((singlebatter,index)=>{
                          return(
                            <li key={index}>{singlebatter.type}</li>
                          )
                        })
                        }
                        
                      </ul>
                   
                    <a href="#" className="btn btn-light">Buy</a>
                  </div>
                </div>



              </div>

            ))

          }


          <h1>Muffin</h1>
          {

            muffin.map((el, index) => (

              <div className="col-md-4 d-flex" key={index}>

                <div className="card" style={{ width: "18rem", backgroundColor: 'black', margin: '10px' }}>
                  <img src={el.image} className="card-img-top" alt="..." style={{ height: '300px' }} />
                  <div className="card-body">
                    <h5 className="card-title" style={{ color: 'whitesmoke' }}>{el.type}</h5>
                    <p className="card-text " style={{ color: 'whitesmoke' }}>{el.name}</p>
                    <a href="#" className="btn btn-light">Buy</a>
                  </div>
                </div>



              </div>

            ))

          }
          <h1>Pastry</h1>

          {

            pasty.map((el, index) => (

              <div className="col-md-4 d-flex" key={index}>

                <div className="card" style={{ width: "18rem", backgroundColor: 'black', margin: '10px' }}>
                  <img src={el.image} className="card-img-top" alt="..." style={{ height: '300px' }} />
                  <div className="card-body">
                    <h5 className="card-title" style={{ color: 'whitesmoke' }}>{el.type}</h5>
                    <p className="card-text " style={{ color: 'whitesmoke' }}>{el.name}</p>
                    <a href="#" className="btn btn-light">Buy</a>
                  </div>
                </div>



              </div>

            ))

          }

        </div>


      </div>
    </>
  )
}
