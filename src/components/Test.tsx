
import { useEffect, useState } from 'react'

const API_URL = 'https://economics-lab-api.ambitiousbeach-281d2f32.australiaeast.azurecontainerapps.io'

export default function Test() {
    const [data, setData] = useState<unknown>(null)
    const [error, setError] = useState('')

    useEffect(() => {
        async function getData() {
            try {
                const response = await fetch(`${API_URL}/test`)

                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`)
                }

                const result = await response.json()
                setData(result)
            } catch (err) {
                setError(String(err))
            }
        }

        getData()
    }, [])

    return (
        <div>
            <h1>Test API</h1>

            {error && <p>{error}</p>}

            {data === null
                ? <p>Loading...</p>
                : <pre>{JSON.stringify(data, null, 2)}</pre>}
        </div>
    )
}
