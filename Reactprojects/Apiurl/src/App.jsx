import axios from "axios"
import { useEffect, useState } from "react"

function App() {
  let [data, setData] = useState([]);
  useEffect(() => {
    axios.post("https://kizaapi.ksesystem.com/api/category/all")
      .then((res) => {

        console.log('Response:', res.data.data);
        setData(res.data.data)

      })
      .catch((err) => {

        console.log(err.message);


      })
  }, [])



  return (
    <>

      {/* {
        data.map((el, index) => (
          <h1 key={index}>{el.name}</h1>
        ))
      } */}
      <table className="table table-primary table-striped">
        <thead>
          <tr>
            <th>Sno</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
         {
          data.map((el,index)=>{
            return(
              <tr key={index}>
                <td >{el.category}</td>
                <td>{el.name}</td>
              </tr>
            )
          })
         }
        </tbody>
      </table>
    </>
  )
}

export default App
