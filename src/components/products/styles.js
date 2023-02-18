
import { makeStyles } from '@mui/styles';
import { Fade } from '@mui/material';
const drawerWidth = 0;

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
    root: {
      flexGrow: 1,
    },
    
}));