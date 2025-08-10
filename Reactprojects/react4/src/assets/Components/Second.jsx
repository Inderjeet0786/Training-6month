import Third from "./Third"

export default function Second(probs) {

    const music = [
        {
            title: 'Apna Bna Le',
            coverpic: 'https://www.bing.com/th/id/OIP.DbIafqBj7zUQEg3q71AdsQHaFj?w=231&h=211&c=8&rs=1&qlt=70&o=7&cb=thws4&dpr=1.3&pid=3.1&rm=3',
            pathofaudio: '../../../Music/Apna Bana Le-128kbps.mp3',
            Singername: 'Arijit Singh',
            description: 'Apna Bana Le — a soulful romantic track where the depth of love and the longing for togetherness flow straight to the heart through Arijit Singh’s voice.'
        },
        {
            title: 'batten yeh kabhi naa',
            coverpic: 'https://mixjio.com/siteuploads/thumb/sft39/19490_6.jpg',
            pathofaudio: '../../../Music/Baatein Ye Kabhi Na Tu Bhoolna - Arijit Singh(MixJio.In).mp3',
            Singername: 'Arijit Singh',
            description:' "Battein Ye Kabhi Na" — a heart-touching romantic song sung by Arijit Singh, featured in the movie Khamoshiyan (2015).Composed by Jeet Gannguli and written by Sayeed Quadri, it expresses the desire to never let go of someone you love, with emotions of longing, closeness, and eternal connection.'

        }
    ]

    const arr = probs.data
    return (
        <>
            <div className="container1" style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div className="image1">
                    <img style={{ height: '200px', width: '300px' }} src={arr[0]} alt="" />
                </div>

                <div className="image2">
                    <img style={{ height: '200px', width: '300px' }} src={arr[1]} alt="" />
                </div>

                <div className="image3">
                    <img style={{ height: '200px', width: '300px', }} src={arr[2]} alt="" />
                </div>

                <div className="image4">
                    <img style={{ height: '200px', width: '300px', }} src={arr[3]} alt="" />
                </div>

                <div className="image5">
                    <img style={{ height: '200px', width: '300px', }} src={arr[4]} alt="" />
                </div>

            </div>


            <div className="container2" style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div className="image6">
                    <img style={{ height: '200px', width: '300px' }} src={arr[5]} alt="" />
                </div>

                <div className="image7">
                    <img style={{ height: '200px', width: '300px' }} src={arr[6]} alt="" />
                </div>

                <div className="image8">
                    <img style={{ height: '200px', width: '300px', }} src={arr[7]} alt="" />
                </div>

                <div className="image9">
                    <img style={{ height: '200px', width: '300px', }} src={arr[8]} alt="" />
                </div>

                <div className="image10">
                    <img style={{ height: '200px', width: '300px', }} src={arr[9]} alt="" />
                </div>

            </div>



            {/* <table>
                <tbody>
                    {arr.map((src, index) => (
                        index > 4 ? (
                            <tr key={index}>
                                <td>
                                    <img src={src} style={{ height: '200px', width: '300px' }} />
                                </td>
                            </tr>
                        ) : (
                            <td key={index}>
                                <img src={src} style={{ height: '200px', width: '300px' }} />
                            </td>
                        )
                    ))}
                </tbody>
            </table> */}



            <Third data={music} />

        </>
    )
}