import Second from '../Components/Second'
export default function First() {

    const arr = ['/image.png', '/image2.png', '/image3.png','/image4.png','/image5.png','/image6.jpg','/image7.jpg','/image8.png','/image9.png','/image10.png'
        ,'/image11.png'
    ]

    return (
        <>
           <Second data={arr}/>
        </>
    )
}