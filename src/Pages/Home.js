import React from 'react'
import ActiveButton from '../components/ActiveButton'
import fwd from './img/fwd.png'
import back from './img/back.png'
import play from './img/play.png'
import Card from '../components/Card'
import as from './img/as.png'
import waves from './img/wave.png'

const Home = () => {

    const musicList = [
        {
            id: 1,
            songname: 'Bloody Samaritan',
            artistname: 'Ayra Starr',
            music:'',
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
                color: 'white',
                justifyContent: 'flex-end'
            }
        },
        {
            id: 2,
            songname: 'Bad Influence',
            artistname: 'Omah Lay',
            music:'',
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
                backgroundImage: 'linear-gradient(rgba(255,255,0,0), #9B9E8F)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: 200,
                width: 150,
                borderRadius: 20,
                display: 'flex',
                flexDirection: 'column',
                color: 'white',
                justifyContent: 'flex-end'
            }
        },
        {
            id: 3,
            songname: 'Essence',
            artistname: 'WizKid',
            music:'',
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
                color: 'white',
                justifyContent: 'flex-end'
            }
        },
        {
            id: 4,
            songname: 'Standing Ovation',
            artistname: 'Tiwa Savage',
            music:'',
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
                color: 'white',
                justifyContent: 'flex-end'
            }
        },
        {
            id: 5,
            songname: 'Yewa',
            artistname: 'Kizz Daniel',
            music:'',
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
                color: 'white',
                justifyContent: 'flex-end'
            }
        },
    ]


    return (
        <div style={styles.content}>
            <div style={styles.card}>
                <ActiveButton btn={styles.btnwest} content={<img alt='back' src={back} width={24} />} />

                {
                    // for (let index = 0; index < array.length; index++) {
                       
                    //    <Card /> 
                    // }

                    // musicList.forEach(element => {
                    //     console.log(element);
                    //     <Card songname={element.songname} artistname={element.artistname} imagestyle={element.cardBG} colorstyle={element.cardBgColor} />
                    // })

                    musicList.map((music) => (
                        <Card play={music.id==3 && <ActiveButton btn={styles.btnplay} content={<img alt='back' src={play} width={24} />}/>} songname1={music.songname.split(" ")[0]} songname2={music.songname.split(" ")[1]} artistname={music.id != 3 ? music.artistname : '' } imagestyle={music.cardBG} colorstyle={music.cardBgColor} />
                    ))
                }

                <ActiveButton btn={styles.btneast} content={<img alt='fwd' src={fwd} width={24} />} />
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
        height: '92vh',
        
    },
    card: {
        height: '76.4vh',
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
    btnplay: {
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
        backgroundColor:'#3662CC'
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