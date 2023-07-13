import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
export default function FirstPost(){
    return <>
        <Head>
            <title>First Post</title>
        </Head>
        <h1>First Post</h1>
        {/* <Image 
            src="/images/profile-pic.jpg"
            height={144}
            width={144}
            alt="Profile Picture"
        ></Image> */}
        <h2>
            <Link href="/">Back to Home</Link>
        </h2>
    </>
}

