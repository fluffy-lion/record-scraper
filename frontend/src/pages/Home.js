import React from 'react'
import { useState, useEffect } from 'react'
import { Card } from '../components/Card'
const Home = () => {
    const [records, setRecords] = useState([])
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
                    return <Card record={record} key={index} />
                })}
            </div>
        </div>
    )
}
export default Home