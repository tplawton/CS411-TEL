import {useEffect, useState} from 'react'

const Home = () => {
    const [weather, testweather] = useState(null)
    useEffect(() => {
        const connection = async () => {
            const response = await fetch('/api/weather/hello')
            const json = await response.json()

            if (response.ok) {
                console.log("this is working")
                testweather(json)
            }
        }
        connection()

        console.log(weather)
    }, [])
    return (
        <div className="home">
            <h2>Home!</h2>
            <div className='weather'>
            </div>
        </div>
    )
}


export default Home