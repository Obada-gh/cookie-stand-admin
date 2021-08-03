import { useState } from "react"
export default function  Main(){
  let newArr = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']

  const [store,setStore] = useState('');
  
  

  function handler(e){
    e.preventDefault();

    let store = {
      location: e.target.location.value,
      min: e.target.min.value,
      max: e.target.max.value,
      avg: e.target.avg.value,
      random: Math.floor(Math.random() * (e.target.max.value - e.target.min.value + 1 ) + e.target.min.value),
    }
    setStore(store)
     
    
  }

  function table(e){
    
    return     <tbody>
    <td>{JSON.stringify(store.location)}</td>
      {
        
        newArr.map(item => {
          return(
            
            <td>{JSON.stringify(store.random)}</td>
          )
        })
      }
      <td>{JSON.stringify(store.max)}</td>

    </tbody>

    
  }




  

  return(

    
    
        <main className='grid w-full p-10 px-0 text-center bg-green-200 justify-items-stretch'>
        <h1 className = "p-5 text-2xl">Create Cookie Stand</h1>

        <form onSubmit = {handler}>
        <label for='loc' className = "inline-block m-3" >Location</label>
        <input name="location" type='text'></input>
        <label className = "inline-block m-3" for='loc'>Minimum Customers Per Hour</label>
        <input name="min" type='number'></input>
        <label for='loc' className = "inline-block m-3">Maximum Customers Per Hour</label>
        <input name="max" type='number'></input>
        <label for='loc' className = "inline-block m-3">Average Cookies per Sale</label>
        <input name="avg" type='number'></input>
        <button className = "p-8 py-5 m-3 bg-green-500" type = "submit">Create</button>

        <p className='m-5 text-gray-800'>No Cookie Stands Available</p>
        {/* <p className="m-3">{JSON.stringify(store.min)}</p> */}
        <table className="w=1/2 mx-auto my-4">
          <thead>
            <tr>
              <th className="border border-green-600">Location</th>
              <th className="border border-green-600">6am</th> 
              <th className="border border-green-600">7am</th>
              <th className="border border-green-600">8am</th>
              <th className="border border-green-600">9am</th>
              <th className="border border-green-600">10am</th> 
              <th className="border border-green-600">11am</th>
              <th className="border border-green-600">12pm</th>
              <th className="border border-green-600">1pm</th>
              <th className="border border-green-600">2pm</th> 
              <th className="border border-green-600">3pm</th>
              <th className="border border-green-600">4pm</th>
              <th className="border border-green-600">5pm</th>
              <th className="border border-green-600">6pm</th> 
              <th className="border border-green-600">7pm</th>
              <th className="border border-green-600">Totals</th>                  
            </tr>
          </thead>

          {table()}

        </table>
        




        </form>




        </main>  
  )
  
    
      
    }




