import React from 'react'
import { useState, useEffect } from 'react'
import { CardLg } from '../components/CardLg'
import { CardMd } from '../components/CardMd'
import Data from '../dataResponse/get-records.json'
import { useMediaQueries } from '../media/mediaQueries'
import { CardSm } from '../components/CardSm'
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
            // const response = await fetch(`http://localhost:4000/record-scraper/get-records`)
            // let data = await response.json()
            // using mock data
            const response = Data
            setRecords(response)
        }
        fetchRecords()
    }, [])
    const { md, lg } = useMediaQueries();
    if (!records) return <h1>loading...</h1>
    if (lg) {
        return (
            <div className='cardWrapper'>
                {records.map((record, index) => {
                    return <CardLg handler={(e) => addRecord(e, record)} record={record} buttonText='Add' key={index} />
                })}
            </div>
        )
    }
    if (md) {
        return (
            <div className='cardWrapper'>
            {records.map((record, index) => {
                return <CardMd handler={(e) => addRecord(e, record)} record={record} buttonText='+' key={index} />
            })}
        </div>
        )
    }
    return (
        <div className='cardWrapper'>
        {records.map((record, index) => {
            return <CardSm handler={(e) => addRecord(e, record)} record={record} buttonText='+' key={index} />
        })}
    </div>
    )
    // return (
    //     <div>
    //         <div>
    //             <h1>home</h1>
    //         </div>
    //        
    //     </div>
    // )
}
export default Home