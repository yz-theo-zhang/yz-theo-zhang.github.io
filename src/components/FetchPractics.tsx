import { useState } from "react";

export default function FetchPractice() {
    const [title, setTitle] = useState('test')

    async function loadPost() {
        try {
            const reponse = await fetch(
                'https://jsonplaceholder.typicode.com/posts/1'
            )
            if (!reponse.ok) {
                throw new Error('Wrong')
            }

            const post = await reponse.json()
            setTitle(post.title)


        }
        catch {
            setTitle('bad')
        }
    }
    return (
        <section className="p-8">
            <button onClick={loadPost}>
                test
            </button>
            <p>{title}</p>
        </section>
    )
}