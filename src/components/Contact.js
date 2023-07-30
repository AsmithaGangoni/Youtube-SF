import React, {useState} from 'react';
import "../App.css";
import db from '../firebase';
import { styled } from 'styled-components';


const Contact = () => {
    const [title, setTitle] = useState("");
    const [subTitle, setSubTitle] = useState("");
    const [backgroundImg, setBackgroundImg] = useState("");
    const [cardImg, setCardImg] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [youtube, setYoutube] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection("movies").add({
            title: title,
            subTitle: subTitle,
            backgroundImg: backgroundImg,
            cardImg: cardImg,
            type: type,
            description: description,
            youtube: youtube

        })
        .then(()=>{
            alert('Message has been submitted');
        })
        .catch(error => {
            alert(error.message);
        })
        setTitle("");
        setSubTitle("");
        setBackgroundImg("");
        setCardImg("");
        setType("");
        setDescription("");
        setYoutube("");
    };

  return (
    <form className="form" onSubmit={handleSubmit}>
        <Container>UPLOAD YOUR Favourite short films to the list!</Container>

        <label>Title</label>
        <input placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />

        <label>Sub-Title</label>
        <input placeholder="subTitle" 
         value={subTitle}
         onChange={(e) => setSubTitle(e.target.value)}
         />


        <label>Background Image</label>
        <input placeholder="backgroundImg" 
         value={backgroundImg}
         onChange={(e) => setBackgroundImg(e.target.value)}
         />

        <label>Card Image</label>
        <input placeholder="cardImg" 
         value={cardImg}
         onChange={(e) => setCardImg(e.target.value)}
         />

        <label>Youtube link</label>
        <input placeholder="youtube" 
         value={youtube}
         onChange={(e) => setYoutube(e.target.value)}
         />

        <label>Type Of Movie</label>
        <input placeholder="type" 
         value={type}
         onChange={(e) => setType(e.target.value)}
         />
        <label>Description</label>
        <textarea placeholder="description" 
         value={description}
         onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Submit</button>
    </form>
  )
}

const Container = styled.div`
margin-top: 300px;
margin-bottom: 15px;
color: #FFF;
font-family: Manrope;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: normal;
text-transform:uppercase;


`

export default Contact