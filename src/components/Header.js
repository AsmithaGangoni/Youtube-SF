import { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth, provider } from "../firebase";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../features/user/userSlice";

const Header = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history.push("/home");
      }
    });
  }, [userName]);

  const handleAuth = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history.push("/");
        })
        .catch((err) => alert(err.message));
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <Nav>
      

      {!userName ? (
        <Login onClick={handleAuth}>
          <LoginImg />
          Login with google</Login>
      ) : (
        <>
        <Container>
        <CTALogoOne src='/images/image 2775.png' />
            <RedLine></RedLine>
            <Text>SHORT FILMS</Text>
         
          </Container>
          <SignOut>
            <UserImg src={"https://cdn.britannica.com/77/22877-050-9EFB35D4/Charminar-city-Hyderabad-India-Telangana.jpg"} alt={userName} />
            <DropDown>
              <span onClick={handleAuth}>Sign out</span>
            </DropDown>
          </SignOut>
          
        </>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: #000;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
 
`;
const LoginImg = styled.div`
width: 36px;
height: 36.06px;
flex-shrink: 0;
flex-shrink: 0;
background : url('/images/image 2801.png');
margin-right: 5px;
padding: 1px;

`
const CTALogoOne = styled.img`

width: 131.246px;
height: 42.408px;
flex-shrink: 0;
background: lightgray -24.86px -27.053px / 140.638% 244.828% no-repeat;
margin-bottom: 8px;



`


const RedLine = styled.div`
width: 1.738px;
height: 44px;
background: #E60000;
margin-left: 10px;
margin-right: 10px;
margin-bottom: 5px;
margin-top: 2px;
`
const Container = styled.div`
align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;

  position: relative;
  margin-right: auto;
  margin-left: 0px;

`

const Text = styled.div`
color: #FFF;
text-align: center;
font-family: Manrope;
font-size: 19.592px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 2px;
text-transform: uppercase;
display: flex;
align-items: center;
justify-content: center;
margin-top: 4.px;
`





const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  display: flex;
  margin-top: 3px;
  align-items: center;
  cursor: pointer;
  
  
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const UserImg = styled.img`
  height: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 2px;
  width: 100px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
 

  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

export default Header;