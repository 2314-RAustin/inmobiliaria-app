import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    typography : {
        useNextVariants: true
    },
    palette : {
        primary : {
            main : '#009be5'
        },
        common : {
            white : 'white'
        },
        secondary : {
            main : '#e53935'
        },
        background : {
            default : 'rgb(47, 70, 92)'
        }
    },
    spacing : 10
});

export default theme;