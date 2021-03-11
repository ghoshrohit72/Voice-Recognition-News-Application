import { makeStyles } from '@material-ui/core/styles';


export default makeStyles({
    container : {
        padding: '0 5%',
        width: '100%',
        margin: 0
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        height: '60vh',
        padding: '10%',
        borderRadius: 10,
        color: 'white'

    },
    infoCard: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center'
    }
})

//makestyles creates a hook called useStyles.