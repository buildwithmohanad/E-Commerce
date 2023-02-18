
import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    media: {
        height: 260,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat"
      },
      cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
      },
      cartActions: {
        justifyContent: 'space-between',
      },
      buttons: {
        display: 'flex',
        alignItems: 'center',
      },
}));