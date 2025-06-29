import clientPromise from "@/lib/mongodb"



export async function POST(request) {
try {
    const body = await request.json()
    // console.log(body)
    const client =await clientPromise;
    const db = client.db("bitlinks")
    const collection = db.collection("url")

    // Check if url or shorturl are empty
    if (!body.url || !body.shorturl) {
        return Response.json({ success: false, error: true, message: 'URL and Preffered URL are required!' });
    }

    // Check if the short url exists
    const doc = await collection.findOne({ shorturl: body.shorturl });
    if (doc) {
        return Response.json({ success: false, error: true, message: 'Short URL already exists!' });
    }

   const result = await collection.insertOne({
        url : body.url, 
        shorturl : body.shorturl
    })

  return Response.json({success : true, error:false, message: 'URL generated succesfully' })
   } catch (error) {
        console.error("API Error:", error)
        return Response.json({ success: false, error: true, message: 'Internal Server Error' }, { status: 500 })
    }
}