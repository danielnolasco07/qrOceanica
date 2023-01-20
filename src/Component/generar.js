import react, { useRef, useState, useEffect } from "react"
//import QRCode from "react-qr-code"
//import Prueba from "./Prueba"
import QRCode from 'qrcode.react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import img from "./img.png"
import '../App.css';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useReactToPrint } from 'react-to-print';
import ReactToPrint from 'react-to-print';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';



const useStyles = makeStyles({

  container: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 60,
    /*marginLeft: 20,*/

    //margin:'auto',

  },

  top: {
    marginTop: 20,

  },

  root: {
    minWidth: 345,
    textAlign: 'center',
    marginBottom: 40
  },
  tituGenerar: {
    color: '#3aa79e',
    fontSize: 16,
    marginTop: 18,
  },
  media: {
    height: 70,
  },
  img: {

    width: 70,
    height: 60,


  },
  text: {
    // marginTop:-8,
    //width: '80%',
    display: 'none'

  },
  botonGnerarPDF: {


    padding: '5px',
    fontSize: 10,
    color: 'white !important',
    width: 110,
    height: 20,
    backgroundColor: '#3aa79e',
  },
  botonRegresar: {
    padding: '5px',
    fontSize: 10,
    color: 'white !important',
    width: 110,
    height: 20,
    backgroundColor: '#3aa79e',

  },
  containerDescripImg: {
    display: 'flex',
    justifyContent: 'center'

  },
  titulo: {
    fontSize: 12,
  },
  Descripcion: {
    fontSize: 13,
    textAlign: 'center'
  },
  containerQR: {
    display: 'flex',
    justifyContent: 'center',
  },

});

export default function GenerarQr(props) {


  const classes = useStyles();

  const componentRef = useRef();
  const [input, setinput] = useState('');

  const [input2, setinput2] = useState('');

  const [qrValue, setQrValue] = useState("Descargar Codigo QR Piramde");
  const handleOnChange = event => {
    const { value } = event.target;
    setQrValue(value);
    console.log(value)
  };
  // const downloadQRCode = () => {
  //   // Generate download with use canvas and stream
  //   const canvas = document.getElementById("qr-gen");
  //   const pngUrl = canvas
  //     .toDataURL("image/png")
  //     .replace("image/png", "image/octet-stream");
  //   let downloadLink = document.createElement("a");
  //   downloadLink.href = pngUrl;
  //   downloadLink.download = `${qrValue}.png`;
  //   document.body.appendChild(downloadLink);
  //   downloadLink.click();
  //   document.body.removeChild(downloadLink);
  // };

  useEffect(() => {
    // console.log('valor desde comp qr: *******'+ JSON.stringify(props.rutaImg))
    ///setQrValue('http://186.24.0.83:8089/node/express/' + props.rutaImg)
  
     
    setQrValue('https://docs.google.com/forms/u/0/d/1wkobaTuBLjP3jAEg9wqD919bHEjqjY17P7DtUDfFJyE/viewform?edit_requested=true')

    

    setinput(props.values1);
    props.setValues1(props.values1);

    setinput2(props.values2);
    props.setValues2(props.values2);
  }, [props.rutaImg, props.values1, props.setValues1, props.values2, props.setValues])
  return (
    <div className={classes.container}>
      <Card elevation={24} className={classes.root} id="contenedorCard">
        <div className={classes.top}>
          <Grid container spacing={0}>
            {/* <Grid item xs={4} >
              <Grid container spacing={0
                <Grid item xs={12} >
                  <Grid container justify="center" >
                    <img src={img} className={classes.img} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid> */}
            <Grid item xs={12} >
              <Grid container spacing={0}>
                <Grid item xs={12}>
                  <Grid container justify="center" >
                    <Typography variant="subtitle2" display="block" gutterBottom className={classes.tituGenerar}>
                      Generar Codigo QR
                   </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <div>
                    <TextField className={classes.text} id="standard" value={qrValue} onChange={handleOnChange} />
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <hr />
          <CardContent >
      {input !='' ? (
            <div style={{display:'flex',justifyContent:'center'}}>
            <div  id='tituloQRBorder'>
              <Grid container spacing={0} direction="row" justify="center" alignItems="center">
               
                <PhoneIphoneIcon />
                  {/* <TextField id="TextField" style={{width:'300px'}}   value={input} rowsMax={4} multiline  /> */}
                  <Typography variant="h6" className={classes.titulo}  >
                            
                    <b> {input}</b>
                  </Typography>
              
              </Grid>
            </div>
            </div>
      ):(null)}
            <div className={classes.containerQR}>
              <Typography variant="body2" color="textSecondary" component="p">
                <QRCode
                  id="qr-gen"
                  value={qrValue}       ///"https://segurospiramide.com/" 
                  size={200}
                  level={"H"}
                  includeMargin={true}
                />
              </Typography>
            </div>
            <div style={{ maxWidth: 400 }}>
              <Grid container spacing={2} className={classes.containerDescripImg}>
                <Grid item xs={8}>
                  {/* <TextField id="TextField1" style={{width:'300px'}}   value={input2} rowsMax={4} multiline  /> */}
                  <Typography variant="body2" className={classes.Descripcion} type="text"> {input2}</Typography>
                </Grid>
              </Grid>
            </div>
            <hr />
          </CardContent>
        </div>
        <div style={{ padding: 19 }} >

          <div id="botonesQR">
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <div >
                  <Button
                    id="Regresar"
                    size="small"
                    color="primary"
                    onClick={() => {
                      /*Regresar*/
                      props.setShow(false)
                    }}
                    className={classes.botonRegresar}
                    startIcon={<ArrowBackIosIcon />}>
                    Regresar
          </Button>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div>
                  <Button
                    id="GenerarPDF"
                    size="small"
                    color="primary"
                    endIcon={<PictureAsPdfIcon />}
                    className={classes.botonGnerarPDF}
                    onClick={() => window.print()}>
                    Generar PDF
          </Button>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </Card>
    </div>
  );
}
