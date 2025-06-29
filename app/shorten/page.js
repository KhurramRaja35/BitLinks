"use client"
// import { Code } from 'mongodb'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'

const Shorten = () => {
    const [url, seturl] = useState("")
    const [shortUrl, setshortUrl] = useState("")
    const [generated, setgenerated] = useState("")

    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "text/plain");

        // const raw = "{\r\n  \"url\" : \"https://www.facebook.com\",\r\n  \"shorturl\" : \"google2\"\r\n}";
        const raw = JSON.stringify({
            "url": url,
            "shorturl": shortUrl
        })

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`)
                seturl("")
                setshortUrl("")
                console.log(result)
                alert(result.message)
            })
            .catch((error) => console.error(error));
    }

    return (
        
            <main className='h-[calc(100vh-9rem)] md:h-[calc(100vh-8rem)] box-border px-5 py-10 md:px-0 md:py-20'>
                <div className=' md:mx-auto max-w-lg bg-purple-100  p-8 rounded-lg flex flex-col gap-4'>
                    <h1 className='font-bold text-3xl text-center'>Generate Your Short URL&apos;s</h1>
                    <div className='flex flex-col items-center gap-5'>
                        <input className='px-4 py-2 bg-white focus:outline-purple-600 rounded-md w-full'
                            type="text"
                            value={url}
                            name=""
                            id=""
                            placeholder='Enter Your URL'
                            onChange={(e) => { seturl(e.target.value) }} />
                        <input className='px-4 py-2 bg-white focus:outline-purple-600 rounded-md w-full'
                            type="text"
                            value={shortUrl}
                            name=""
                            id=""
                            placeholder='Enter Your Preffered Short URL Text' onChange={(e) => { setshortUrl(e.target.value) }} />
                        <button onClick={generate} className='bg-purple-700 shadow-lg p-3 py-1 font-bold text-white cursor-pointer rounded-lg w-full'>Generate</button>
                    </div>

                    {generated && <> <span className='font-bold text-lg'>Your Link:</span> <code> <Link href={generated} target="_blank">{generated}</Link>
                    </code></>}

                </div>
            </main>
    )
}

export default Shorten
