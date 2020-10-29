import React from 'react'
import Records from '../records/Records';
import RecordForm from '../records/RecordForm';


const Home = () => {
  return (
    <div className="grid-2">
      <div>
        <RecordForm />
      </div>
      <div>
        <Records />
      </div>
    </div>
  )
}

export default Home
