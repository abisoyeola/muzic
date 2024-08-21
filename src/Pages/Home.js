import React from 'react'
import ActiveButton from '../components/ActiveButton'
import fwd from './img/fwd.png'
import back from './img/back.png'
import Card from '../components/Card'
import as from './img/as.png'
import waves from './img/wave.png'

const Home = () => {
    return (
        <div style={styles.content}>
            <div style={styles.card}>
                <ActiveButton btn={styles.btnwest} content={<img src={back} width={24} />} />

                <Card songname={'Bloody Samaritan'} artistname={'Ayra Starr'} imagestyle={styles.cardbg} colorstyle={styles.cardbgcolor} />
                <Card songname={'Bad Influence'} artistname={'Omah Lay'} imagestyle={styles.cardbg} colorstyle={styles.cardbgcolor} />
                <Card songname={'Essence'} artistname={'Wizkid'} imagestyle={styles.cardbg} colorstyle={styles.cardbgcolor} />
                <Card songname={'Standing Ovation'} artistname={'Tiwa Savage'} imagestyle={styles.cardbg} colorstyle={styles.cardbgcolor} />
                <Card songname={'Yewah'} artistname={'Kizz Daniel'} imagestyle={styles.cardbg} colorstyle={styles.cardbgcolor} />

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