import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const useStyles = makeStyles((theme) => ({

    containerprincipal: {
        display: 'flex',
        justifyContent: 'center',
        marginTop:20,
      },
      paperprincipal: {
        width: 620,
        height: 585,
      },
      divcardimg: {
        marginTop: 25,
        display: 'flex',
        justifyContent: 'center'
      },
      cardimg: {
        width: 285,
        height: 178,
        border: ' 0.5px #808080a6  solid',
      },
      containertitulo:{
          display:'flex',
          justifyContent:'center',
          marginTop:20,
      },
      contenedortextarea:{
          display:'flex',
          justifyContent:'center',
          marginTop:20,
      },
      textarea:{
        height: 49,
        width: 434,
      },
    
}));


export default function Obtenervalores() {
    const [profileImg, setState] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png');
    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.readyState === 2) {
            setState(reader.result)
          }
        }
        reader.readAsDataURL(e.target.files[0])
      };

  const classes = useStyles ();
  return(
        <div className={classes.containerprincipal}>
            <Paper elevation={8} className={classes.paperprincipal}>
            
            <Grid container spacing={2}  >
               
                    <Grid item xs={12}  className={classes.containertitulo}>
                      <Typography variant="caption" display="block" gutterBottom>
                        Detalle de la Imagen Seleccionada
                      </Typography>
                    </Grid>           
             </Grid>       
           
            <Grid item xs={12} >
                <div className={classes.divcardimg}>
                  <Card className={classes.cardimg} >
                    <div className="img-holder">
                      <img src={profileImg} alt="" id="img" className="img" />
                    </div>
                  </Card>
                </div>
              </Grid>
               
              <Grid container item xs={12} className={classes.contenedortextarea} >
              <Grid item xs={12} className={classes.contenedortextarea}>
              <TextareaAutosize    aria-label="minimum height" rowsMin={3} className={classes.textarea} />
              </Grid>
              </Grid>

              <Grid container item xs={12} >
              <Grid item xs={12} className={classes.contenedortextarea}>
              <TextareaAutosize    aria-label="minimum height" rowsMin={3} className={classes.textarea} />
              </Grid>
              </Grid>

              <Grid container item xs={12} >
              <Grid item xs={12} className={classes.contenedortextarea}>
              <TextareaAutosize    aria-label="minimum height" rowsMin={3} className={classes.textarea} />
              </Grid>
              </Grid>



                
            </Paper>
        </div>

  );
}