import React from 'react'
import ActiveButton from '../components/ActiveButton'
import fwd from './img/fwd.png'
import back from './img/back.png'
import Card from '../components/Card'
import as from './img/as.png'
import waves from './img/wave.png'

const Home = () => {

    const musicList = [
        {
            id: 1,
            songname: 'Bloody Samaritan',
            artistname: 'Ayra Starr',
            cardBG: {
                backgroundImage: "url(/musicimg/as.png)",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: 200,
                width: 150,
                borderRadius: 20,
                display: 'flex',
                marginRight: 40,
            },
            cardBgColor: {
                backgroundImage: 'linear-gradient(rgba(255,255,0,0), black)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: 200,
                width: 150,
                borderRadius: 20,
                display: 'flex',
                flexDirection: 'column',
                color: 'white'
            }
        },
        {
            id: 2,
            songname: 'Bad Influence',
            artistname: 'Omah Lay',
            cardBG: {
                backgroundImage: "url(/musicimg/ol.jpeg)",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: 200,
                width: 150,
                borderRadius: 20,
                display: 'flex',
                marginRight: 40,
            },
            cardBgColor: {
                backgroundImage: 'linear-gradient(rgba(255,255,0,0), lemon)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: 200,
                width: 150,
                borderRadius: 20,
                display: 'flex',
                flexDirection: 'column',
                color: 'white'
            }
        },
        {
            id: 3,
            songname: 'Essence',
            artistname: 'WizKid',
            cardBG: {
                backgroundImage: "url(/musicimg/wk.jpeg)",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: 300,
                width: 200,
                borderRadius: 20,
                display: 'flex',
                marginRight: 40,
            },
            cardBgColor: {
                backgroundImage: 'linear-gradient(rgba(255,255,0,0), black)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: 300,
                width: 200,
                borderRadius: 20,
                display: 'flex',
                flexDirection: 'column',
                color: 'white'
            }
        },
        {
            id: 4,
            songname: 'Standing Ovation',
            artistname: 'Tiwa Savage',
            cardBG: {
                backgroundImage: "url(/musicimg/tw.jpeg)",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: 200,
                width: 150,
                borderRadius: 20,
                display: 'flex',
                marginRight: 40,
            },
            cardBgColor: {
                backgroundImage: 'linear-gradient(rgba(255,255,0,0), blue)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: 200,
                width: 150,
                borderRadius: 20,
                display: 'flex',
                flexDirection: 'column',
                color: 'white'
            }
        },
        {
            id: 5,
            songname: 'Yewa',
            artistname: 'Kizz Daniel',
            cardBG: {
                backgroundImage: "url(/musicimg/kd.jpeg)",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: 200,
                width: 150,
                borderRadius: 20,
                display: 'flex',
                marginRight: 40,
            },
            cardBgColor: {
                backgroundImage: 'linear-gradient(rgba(255,255,0,0), black)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: 200,
                width: 150,
                borderRadius: 20,
                display: 'flex',
                flexDirection: 'column',
                color: 'white'
            }
        },
        {
            id: 6,
            songname: 'Gwagwalada',
            artistname: 'Buju',
            cardBG: {
                backgroundImage: "url(/musicimg/kd.jpeg)",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: 200,
                width: 150,
                borderRadius: 20,
                display: 'flex',
                marginRight: 40,
            },
            cardBgColor: {
                backgroundImage: 'linear-gradient(rgba(255,255,0,0), black)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: 200,
                width: 150,
                borderRadius: 20,
                display: 'flex',
                flexDirection: 'column',
                color: 'white'
            }
        }
    ]


    return (
        <div style={styles.content}>
            <div style={styles.card}>
                <ActiveButton btn={styles.btnwest} content={<img src={back} width={24} />} />

                {
                    musicList.map((music) => (
                        music.id <= 5 && <Card songname={music.songname} artistname={music.artistname} imagestyle={music.cardBG} colorstyle={music.cardBgColor} />
                    ))
                }




                <ActiveButton btn={styles.btneast} content={<img src={fwd} width={24} />} />
            </div>
            <div style={styles.wave}>

            </div>
        </div>
    )
}

export default Home

const styles = {
    content: {
        // backgroundColor: 'blue',
        height: 615,
    },
    card: {
        height: 465,
        // backgroundColor: 'yellow',
        display: 'flex',
        flexDirection: 'row',
        gap: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    wave: {
        height: 150,
        // backgroundColor: 'green',
        backgroundImage: `url(${waves})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    btnwest: {
        padding: 10,
        marginRight: 40,
        color: 'blue',
        width: 50,
        height: 50,
        borderStyle: 'none',
        border: 'none',
        borderTopLeftRadius: 40,
        borderBottomLeftRadius: 40,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
    },
    btneast: {
        padding: 10,
        color: 'blue',
        width: 50,
        height: 50,
        borderStyle: 'none',
        border: 'none',
        borderTopLeftRadius: 40,
        borderBottomLeftRadius: 40,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
    },
    cardbg: {
        backgroundImage: `url(${as})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: 200,
        width: 150,
        borderRadius: 20,
        display: 'flex',
        marginRight: 40,
    },
    cardbgcolor: {
        backgroundImage: 'linear-gradient(rgba(255,255,0,0), #0E2915)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: 200,
        width: 150,
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'column',
        color: 'white'
    }
}