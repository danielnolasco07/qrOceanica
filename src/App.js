import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CropFreeIcon from '@material-ui/icons/CropFree';
import Img from './imagen/logoPira.svg';
import imgOceanica from './imagen/img.png'
import imgAlo from './imagen/Alo24.png'
import TextField from '@material-ui/core/TextField';
import Axios from "axios";
import GenerarQr from "./Component/generar.js";


//import img from ".imagen/img.png"

const useStyles = makeStyles((theme) => ({

  containerprincipal: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom:40,
  },
  paperprincipal: {
    width: 540,
    //height: 650,
   /// margin: 7,
  },

  containerImgPira: {
    marginRight: 41,
  },
  containerImgOcea: {
    marginLeft: 55,
  },

  appbarGeneQR: {
    height: 39,
    backgroundColor: '#3aa79e'
  },
  toolbarGeneQR: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: -13,
  },
  contenedorboton: {
    marginTop: 10,
    display: 'flex',
    justifyContent: 'center'

  },
  botonsubirimagen: {
    backgroundColor: '#3aa79e',
    fontSize: 11,
    borderRadius: 45
  },
  divcardimg: {
    marginTop: 30,
    display: 'flex',
    justifyContent: 'center'
  },
 /* cardimg: {
    width: 285,
    height: 178,
    border: ' 0.5px #808080a6  solid',
  },*/
  titulodescrip: {
    marginTop: 20,
    textAlign: 'center',
  },
  containerswitch: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 30,
  },
  textarea: {
    height: 49,
    width: 434,

  },
  buttonpreview: {
    textAlign: 'center',
    backgroundColor: '#3aa79e',
    margin: 30,
    fontSize: 11,
    borderRadius: 45
  },
  contenedorbutton: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 10,
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

  containertitulo: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20,
  },
  contenedortextarea: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20,
  },
  textareafun: {
    height: "45px !important",
    width: 434,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'center',
  },
  imgtoolbar: {
    width: 145,
    marginTop:18,


  },
  imgAlo24: {
    width: 120,
  },
  colortoolbar: {
    backgroundColor: 'white !important'
  },
  contedorbotones: {
    marginTop: 11,
  },
  buttonregresar: {
    textAlign: 'center',
    backgroundColor: '#47c0b6',
    margin:30,
    fontSize: 11,
    borderRadius: 45,
    marginLeft:123,
  },
  buttonQR: {
    textAlign: 'center',
    backgroundColor: '#47c0b6',
    margin:30,
    fontSize: 11,
    borderRadius: 45,
    marginRight:110
  },
}));



export default function App() {
  const classes = useStyles();

  useEffect(() => {

    const ruta = window.location;
    //alert(ruta);
  }, [])

const [PaperPrin, setPaperPrin] = useState('');
  const [show, setShow] = useState(false);

  const [profileImg, setState] = useState(false);

  const [file, setFile] = useState();
  //https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setState(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
    const input = e.target.files[0];
    setinput(input);
  };
 
  const [input, setinput] = useState();
  



  const [values, setValues] = useState("");
  const onChange = (e) => {
    setValues(e.target.value)
  };

  const [values2, setValues2] = useState('');
  const onChange2 = (e) => {
    setValues2(e.target.value)
  }

  const [values3, setValues3] = useState('');
  const onChange3 = (e) => {
    setValues3(e.target.value)
  }


  const [checked, setChecked] = React.useState(false);

  const toggleChecked = () => {

    setChecked(!checked);
  };

  const [checked2, setChecked2] = React.useState(false);
  const toggleChecked2 = () => {

    setChecked2(!checked2);

  };

  const [checked3, setChecked3] = React.useState(false);
  const toggleChecked3 = () => {

    setChecked3(!checked3);

  };

  const [rutaImg, setRutaImg] = useState('');

  return (
    <div className={classes.root}>

      <AppBar  id="Appbar" position="static" className={classes.colortoolbar} >
        <Toolbar className={classes.toolbar} id="Paper_Principal">
          <div id="containerimgOcea" className={classes.containerImgPira}>
            <img src={imgOceanica} id="imgOcea" className={classes.imgtoolbar} />
          </div>
          <div >
            <img src={imgAlo} id="imgAlo24" className={classes.imgAlo24} />
          </div>
          {/* <div id="containerimgOcea" className={classes.containerImgOcea}>
            <img src={imgOceanica} id="imgOcea" className={classes.imgtoolbar} />
          </div>  */}
          </Toolbar>               
      </AppBar>

      {!show ? (
        <div className={classes.containerprincipal}   value={PaperPrin}>

          <Paper   elevation={24} id="paperPrincipal" className={classes.paperprincipal}>

            <AppBar position="static" className={classes.appbarGeneQR}>
              <Toolbar className={classes.toolbarGeneQR}  >
                Generar QR
        </Toolbar>
            </AppBar>
            <div className="page">
              <div className="container">
                <Grid container spacing={2} className={classes.contenedorboton} >
                  <Grid item xs={6} >
                    <Typography id="tituloboton" variant="caption" display="block" gutterBottom>
                      Por favor Seleccione la Imagen
                   </Typography>
                  </Grid>
                  <Grid item xs={6} >
                  <form action="#">
                    <input type="file" accept="" name="image-upload" id="input" onChange={imageHandler} />
                    <label htmlFor="input">
                      <Button size="small" variant="contained" id="BotonSubirImag" color="primary" component="span" className={classes.botonsubirimagen} startIcon={<ArrowUpwardIcon />}>
                        Subir Imagen
                      </Button>
                    </label>
                  </form>                 
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
              </div>
            </div>

            {profileImg ? (
         <div>
            <Grid container spacing={2} className={classes.titulodescrip} >
              <Grid item xs={12} >
                <Typography id="descripImagen" variant="caption" display="block" gutterBottom>
                <hr></hr>
                  <b>Titulo de la Imagen</b>                  
               </Typography>
              </Grid>
            </Grid>
            <Grid container item xs={12} className={classes.containerswitch}>
              <FormGroup>
                <Grid item xs={1}>
                  <FormControlLabel
                    control={<Switch size="small" checked={checked} onChange={toggleChecked} />}
                  />
                </Grid>
              </FormGroup>
              {checked ? (<Grid item xs={10}>
                {/* <TextareaAutosize valor="valorProp" aria-label="minimum height" rowsMin={3} className={classes.textarea} onChange={onChange} /> */}
              
                <TextField id="TextField1"  value={values}  style={{width:'400px'}} rowsMax={4} multiline onChange={onChange} />                
              </Grid>) : (<Grid item xs={10}></Grid>)} 
            </Grid>
             <Grid container spacing={2} className={classes.titulodescrip} >
              <Grid item xs={12} >
                <Typography id="descripImagen" variant="caption" display="block" gutterBottom>
                <hr></hr>
                  <b>Descripcion de la Imagen </b>                  
               </Typography>
              </Grid>
            </Grid>
            <Grid container item xs={12} className={classes.containerswitch}>
              <Grid item xs={1}>
                <FormGroup>
                  <FormControlLabel
                    control={<Switch size="small" checked={checked2}    onChange={toggleChecked2} />}
                  />
                </FormGroup>
              </Grid>
              {checked2 ? (<Grid item xs={10}>
                {/* <TextareaAutosize aria-label="minimum height" rowsMin={3} className={classes.textarea} onChange={onChange2} /> */}
                <TextField id="TextField2"  value={values2}   style={{width:'400px'}}    rowsMax={4} multiline onChange={onChange2} />
              </Grid>) : (<Grid item xs={10}></Grid>)}
            </Grid>
                  {/* Se quito aqui el tercer Switch */}  
            <Grid container spacing={2} >
              <Grid item xs={12}>
                <div className={classes.contenedorbutton} >
                  <Button id="botonpreview"
                    variant="contained"
                    size="small"
                    color="primary"
                    className={classes.buttonpreview}
                    onClick={() => {
                      if (profileImg != '') {

                        setShow(true) 
                         
                      //   const data = new FormData();
                      //    data.append("input", input);                   
                        
                      //  // Axios.post("http://186.24.0.83:8089/node/express/myapp/upload", data) 
                      //   Axios.post("http://localhost:3001/upload", data)                      
                      //     .then(res =>{ 
                      //       console.log('valor de App:'+res.data)
                      //       setRutaImg(res.data); 
                      //       setShow(true)                         
                      //       // console.log(rutaImg);
                      //     })        
                      //     .catch(err => console.log(err));                           
                      } else {
                        alert('debe seleccionar una imagen para continuar el proceso!')
                      }
                    }}
                    endIcon={<NavigateNextIcon />}
                  >
                    Preview
                  {/* <Link to="/obtenervalores" >Preview</Link> */}

                  </Button>
                </div>
              </Grid>
            </Grid>
            </div>
            ):('')}
          </Paper>
        </div>
      ) : ('')}

      {show ? (
            <div>  
              <GenerarQr 
              rutaImg={rutaImg} 
              setShow={setShow}  
              values1={values} 
              setValues1={setValues}
              values2={values2} 
              setValues2={setValues2}          
              />       
             </div>
      ) : (
          ''
        )}
    </div>
  );
}

// function TextArea2(props) {
//   const classes = useStyles();
//   return (
//     <Typography id="textarea1" type="text" className={classes.textareafun} >
//       {props.valorText}
//     </Typography>
//   )
// };
// function TextArea3(props) {
//   const classes = useStyles();
//   return (
//     <Typography id="textarea2" type="text" className={classes.textareafun}>
//       {props.valorText2}
//     </Typography>
//   )
// };
// function TextArea4(props) {
//   const classes = useStyles();
//   return (
//     <Typography  id="textarea3" type="text" className={classes.textareafun} >
//       {props.valorText3}
//     </Typography>
//   )
// };

