import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Hello: NextPage = () => {

    return (
        <>
            <Head>
                <title>Hello World Page Title</title>
                <meta property="og:title" content="Hello World" key="title" />
            </Head>
            <h1>Hello World!</h1>
            <p>
                Use the HTML anchor for an
                <a href="https://nostarch.com" > external link</a>
                {' '} and the Link component for an
                <Link href="/components/weather"> internal page
                </Link>.
                <Image
                    src="/vercel.svg"
                    alt="Vercel Logo"
                    width={72}
                    height={16}
                />
            </p>
        </>
    );
}

export default Hello;