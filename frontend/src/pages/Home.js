import React from 'react'
import { useState, useEffect } from 'react'
import { Card } from '../components/Card'
const Home = () => {
    const [records, setRecords] = useState([])
    const addRecord = async (e, record) => {
        e.preventDefault()
        console.log('adding')
        const item = record
        console.log(item)
        const response = await fetch('http://localhost:4000/record-scraper/create-record', {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
    
        console.log(json)
    }
    useEffect(() => {
        const fetchRecords = async () => {
            console.log('making call')
            const response = await fetch(`http://localhost:4000/record-scraper/get-records`)
            let data = await response.json()
            setRecords(data)
        }
        fetchRecords()
    }, [])
    if (!records) return <h1>loading...</h1>
    return (
        <div>
            <div>
                <h1>home</h1>
            </div>
            <div className='cardWrapper'>
                {records.map((record, index) => {
                    return <Card handler={(e) => addRecord(e, record)} record={record} buttonText='Add' key={index} />
                })}
            </div>
        </div>
    )
}
export default Home