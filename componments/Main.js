import { useState } from "react"
export default function  Main(){
  let newArr = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']

  const [store,setStore] = useState([]);
  const [total_V,settotal_V]=useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])
  
  
  

  function handler(e){
    e.preventDefault();

    let loc = {
      location: e.target.location.value,

      random: creatArray(e),
    }
    setStore([...store,loc])
   
    
     
    
  }

  function creatArray(e)
  {
    let temp_total_v=[...total_V]
    let temp=[]
    let sum=0
    for (let i = 0; i<14; i++){
      let rand = (Math.ceil(Math.random() * (e.target.max.value - e.target.min.value + 1 ) + e.target.min.value))*e.target.avg.value
      sum+= rand
      temp.push(rand)
      temp_total_v[i]+=rand
    }
    temp_total_v[14]+=sum
    temp.push(sum)
    settotal_V(temp_total_v)
    return temp

  }


  function table(props,total){
    console.log(total)
    
    return     <tbody className="border border-green-600">



{
      
      
      props.map(item => {
        return(
          <tr className="border border-green-600">
          
          <td className="border border-green-600">{JSON.stringify(item.location)}</td>
          {item.random.map(num =>{
            return (
              <td className="border border-green-600">{num}</td>
            )
          })}
          {/* <td>{JSON.stringify(item.random)}</td> */}
          </tr>
        )
      })
    }


    <tr className="border border-green-600">
    <td className="border border-green-600">Total</td>
      {
      
        
        total.map(item => {
          return(
            
            <td className="border border-green-600">{JSON.stringify(item)}</td>
          )
        })
      }
</tr>
      {/* <td>{JSON.stringify(props.max)}</td> */}

    </tbody>

    
  }




  

  return(

    
    
        <main className='grid w-full p-10 px-0 text-center bg-green-200 justify-items-stretch'>
        <h1 className = "p-5 text-2xl">Create Cookie Stand</h1>

        <form onSubmit = {handler}>
        <label  className = "inline-block m-3" >Location</label>
        <input name="location" type='text'></input>
        <label className = "inline-block m-3" >Minimum Customers Per Hour</label>
        <input name="min" type='number'></input>
        <label  className = "inline-block m-3">Maximum Customers Per Hour</label>
        <input name="max" type='number'></input>
        <label  className = "inline-block m-3">Average Cookies per Sale</label>
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

          {table(store,total_V)}

        </table>
        




        </form>




        </main>  
  )
  
    
      
    }




