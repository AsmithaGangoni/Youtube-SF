import styled from 'styled-components';
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import NewDisney from './NewDisney';
import Originals from './Originals';
import Trending from './Trending';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import db from '../firebase';
import { setMovies } from '../features/movie/movieSlice';
import { selectUserName } from '../features/user/userSlice';
import Award from './Award';
import Horror from './Horror';
import Contact from "./Contact";

const Home = (props) => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    let awards = [];
    let hindi = [];
    let thriller = [];
    let telugu = [];
    let horror = [];

    useEffect(() => {
        console.log("hello");
        db.collection("movies").onSnapshot((snapshot) => {
          snapshot.docs.map((doc) => {
            console.log(awards);
            switch (doc.data().type) {
              case "awards":
                awards = [...awards, { id: doc.id, ...doc.data() }];
                break;
    
              case "hindi":
                hindi = [...hindi, { id: doc.id, ...doc.data() }];
                break;
    
              case "thriller":
                thriller = [...thriller, { id: doc.id, ...doc.data() }];
                break;
    
              case "telugu":
                telugu = [...telugu, { id: doc.id, ...doc.data() }];
                break;

                case "horror":
                  horror = [...horror, { id: doc.id, ...doc.data() }];
                  break;
            }
          });
       
          dispatch(
            setMovies({
              award: awards,
              hindi: hindi,
              thriller: thriller,
              telugu: telugu,
              horror: horror,
            })
          );
        });
      }, [userName]);


    return (
        <Container>
            <ImgSlider />
           <Award />
           <NewDisney />
          
           <Originals />
           <Trending />
           <Horror />
           <Contact />
        </Container>
    )
};


const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;
    background-color: black;
    
    &:before{
        background: url("/images/home-background.png") center center /cover no-repeat fixed;
        content:"";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;

    }
    
`
export default Home;