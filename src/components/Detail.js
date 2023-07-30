import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import db from "../firebase";
import firebase from 'firebase/compat/app';
import { getAuth } from "firebase/auth";

const Detail = (userName) => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState([]);
  const auth = getAuth();
  const user = auth.currentUser;
  if (user !== null) {
    const displayName = user.displayName;}

  useEffect(() => {
  
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
        } else {
          console.log("no such document in firebase 🔥");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [id],
);

useEffect(() => {
  let unsubscribe;
  if (id) {
      unsubscribe = db
          .collection("movies")
          .doc(id)
          .collection("comments")
          .orderBy('timestamp', 'desc')
          .onSnapshot((snapshot) => {
              setComments(snapshot.docs.map
                  ((doc) => ({
                      id: doc.id,
                      comment: doc.data(),
                  }))
              );
          });
  }
  return () => {
      unsubscribe();
  };

}, [id])

const postComment = (event) => {
  event.preventDefault();
  db.collection("movies").doc(id).collection("comments").add({
    text: newComment,
    username: user.displayName,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
})
setNewComment('');
}
  

  return (
    <Container>
      <Background>
        <img alt={detailData.title} src={detailData.backgroundImg} />
      </Background>

      <ImageTitle>
        <img alt={detailData.title} src={detailData.titleImg} />
      </ImageTitle>
      <ContentMeta>
        <Controls>
          <a href={detailData.youtube}>
          <Player>
            <img src="/images/play-icon-black.png" alt="" />
            <span>PLAY</span>
          </Player>
          </a>
          
          
        </Controls>
        <SubTitle>{detailData.subTitle}</SubTitle>
        <Description>{detailData.description}</Description>
      </ContentMeta>
     <CommentBox>
      {user && <>
                <form className="post__commentbox">
                    <input
                        className="post__input"
                        type="text"
                        placeholder="Add a comment..."
                        value={newComment}
                       
                        onChange={(e) => setNewComment(e.target.value)}
                    />
                    <button
                        className="post__button"
                        disabled={!newComment}
                        type="submit"
                        onClick={postComment}
                    >
                        POST
                    </button>
                    </form>
                    </>
      }</CommentBox>
       <Commenting className="post_comments">
      {comments.map(({ id, comment }) => (
                    <>
                        <p key={id}>
                            <b>{comment.username}</b>: &nbsp;{comment.text}
                        </p>

                    </>
                      ))}
      </Commenting>
    </Container>
  );
};

const Container = styled.div`
   min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`;

const Commenting = styled.div`
width: 1308px;
height: 142px;
flex-shrink: 0;
border-radius: 10px;
border: 1px solid #BABABA;
background: #1F1F1F;
text-align: start;
padding: 10px;


`
const CommentBox = styled.div`
margin-bottom: 10px;
margin-top: 15px;


`


const Background = styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

const ImageTitle = styled.div`
align-items: flex-end;
display: flex;
-webkit-box-pack: start;
justify-content: flex-start;
margin: 0px auto;
height: 30vw;
min-height: 170px;
padding-bottom: 24px;
width: 100%;

img {
  max-width: 600px;
  min-width: 200px;
  width: 35vw;
}
`;

const ContentMeta = styled.div`
  max-width: 874px;
`;

const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
`;

const Player = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb (249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);
  width: 200px;

  img {
    width: 32px;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;

    img {
      width: 25px;
    }
  }
`;






const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default Detail;