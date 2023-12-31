
const axios = require('axios')
axios.defaults.headers.common['User-Agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
const cheerio = require('cheerio')
const Record = require('../models/record')

const getRecordData = async (req, res) => {
    console.log('getting data')
    const url = 'https://www.discogs.com/sell/list?sort=listed%2Cdesc&limit=50&genre=Rock&ships_from=United+Kingdom&format=Vinyl&condition=Mint+%28M%29'
    // pass a url and get a response back
    const main = 'https://www.discogs.com'
    let data = await axios(url)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const releases = []
            $('.shortcut_navigable', html).each(function () {
                const title = $(this).find(".item_description_title").text()
                const img = $(this).find(".marketplace_image").attr('data-src')
                const release = main + $(this).find(".item_release_link").attr('href')
                const price = $(this).find(".item_price .price").text()
                //.hasClass('item_description_title')
                // const title = $(this).find('.item_description_title').attr('href')
                releases.push({
                    title,
                    img,
                    release,
                    price,
                })
            })
            return releases
        }).catch(err => console.log('error', err))

    res.status(200).json(data)
}


const getSavedRecords = async (req, res) => {
    let response = await Record.find({}).sort({ createdAt: -1 });
    res.status(200).json(response)
}

const createRecord = async (req, res) => {
    const { title, img, release, price } = req.body
    const record = new Record({
        title: title,
        img: img,
        release: release,
        price: price
    })
    await record.save()
    res.status(200).json(record)
}

const deleteRecord = async (req, res) => {
    let { id } = req.params
    let response = await Record.findByIdAndDelete(id)
    res.status(200).json(response)
}

module.exports = {
    getRecordData,
    createRecord,
    deleteRecord,
    getSavedRecords
}