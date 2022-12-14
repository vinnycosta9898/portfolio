import { Html,
         Head, 
         Main, 
         NextScript 
        } from 'next/document'

export default function Document(){
    return(
        <Html>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Poppins&display=swap" rel="stylesheet"></link>
            <title>Vinicius Costa</title>
            <Head/>
            <body>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
}   