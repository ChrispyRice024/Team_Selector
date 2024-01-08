
import react from 'react'
import { json } from 'react-router-dom';

export default function Teams () {
    const localStorageMap = () => {
        let localStorageArray = [];

        for (let i = 0; i < localStorage.length; i++) {

          let key = localStorage.key(i)
          let value = JSON.parse(localStorage.getItem(key))

          localStorageArray.push([key, localStorage.getItem(key)])
          console.log(key)
        }
        console.log('localStorageArray', localStorageArray)


        const handleDelete = (id) => {

            localStorage.removeItem(id)
            console.log(id)
            window.location.reload()

          // console.log(localStorage.getItem(id))
          // localStorage.removeItem(id)
          // window.location.reload()
        }
        
        return localStorageArray.map(([key, value]) => (
            <div className='member' key={key}>
              <h4><p>ID</p></h4>
              <p>{JSON.parse(value).id} </p>

              <h4><p>Name</p></h4>
              <p>{JSON.parse(value).last_name + ', ' + JSON.parse(value).first_name}</p>

              <h4><p>Role</p></h4>
              <p>{JSON.parse(value).role} </p>

              <h4><p>Duties</p></h4>
              <p>{JSON.parse(value).duties} </p>
              {console.log('additional_thoughts', JSON.parse(value).additional_thoughts)}
            
              {!JSON.parse(value).additional_thoughts ? ('') : (<h4><p>Additional Thoughts</p></h4>)}
              <p>{JSON.parse(value).additional_thoughts}</p>
            
              <button onClick={() => {handleDelete(JSON.parse(key))}}>Delete</button>
              {console.log('key', JSON.parse(key))}
            </div>
        ));
      };
      console.log(localStorage)


    return(
        <div id='teams'>
            {localStorage.length ? localStorageMap() : <h3>You Have No Teams</h3>}
        </div>
    )
}