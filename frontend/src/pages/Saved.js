import { useEffect, useState } from "react"
import { CardLg } from "../components/CardLg"
const Saved = () => {
  const [records, setRecords] = useState([])

   const deleteRecord = async (record) => {
    console.log('delete')
    
    // add url which is for delete
    // add the _id for the ':id' param
    const response = await fetch(`http://localhost:4000/record-scraper/record/${record._id}`, {
        // method type?
        method: 'DELETE',
        // content type?
        headers: {
            'Content-Type': 'application/json'
        }
    })
    // convert to json
    const json = await response.json()
    // return json
    let newRecords = [...records]
    newRecords = newRecords.filter((item) => item._id !== record._id)
    setRecords(newRecords)
    return json
}
  useEffect(() => {
    const fetchRecords = async () => {
        console.log('making call')
        const response = await fetch(`http://localhost:4000/record-scraper/get-saved-records`)
        let data = await response.json()
        setRecords(data)
    }
    fetchRecords()
}, [])
if(!records) return <h2>loading...</h2>
  return (
    <div>
        <h1>Saved</h1>
        {records.map((record) => {
          return <CardLg key={record._id} handler={() => deleteRecord(record)} buttonText='Remove' record={record} />
        })}
    </div>
  )
}

export default Saved