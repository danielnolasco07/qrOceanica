import React, {useState} from 'react';
import './App2.css';





export default function Valores() {

  const [profileImg, setState] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png');
   
   const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        setState( reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };

  
  return(
   
    <div className="page">
    <div className="container">
      <h1 className="heading">Add your Image</h1>
      <div className="img-holder">
        <img src={profileImg} alt="" id="img" className="img" />
      </div>
      <input type="file" accept="image/*" name="image-upload" id="input" onChange={imageHandler} />
      <div className="label">
      <label className="image-upload" htmlFor="input">
        <i className="material-icons">add_photo_alternate</i>
        Choose your Photo
      </label>
      </div>
    </div>
  </div>
  );
}