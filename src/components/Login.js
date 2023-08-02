
import styled from "styled-components";

const Login = (props) =>{
  return(<Container>
   // <CTALogoTwo src = '/images/image (1).png' />
    <Content>
        <CTA>
            <CTALogoOne src='/images/logo.png' />
            
            
        </CTA>
        
        <Description>Get all here</Description>
      
    </Content>
  
  </Container>
  );
};

const Container = styled.section`
overflow: hidden;
display: flex;
flex-direction: row;
text-align: center;
height: 100vh;
`
const Content = styled.div`
    margin-bottom: 100vh;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;//horizontal shift
    align-items: center;//vertical shift
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
    margin-right: 200px;

`
/*const CTALogoTwo  = styled.img`
display: flex;
align-items: center;
width: 381px;
height: 650px;
justify-content: left;

` */
const CTA = styled.div`
margin-bottom: 2vw;
max-width: 900px;

display: flex;
flex-direction: row;

margin-top: -100px;

margin-right: auto;
margin-left: auto;
width: 100%;
`

const CTALogoOne = styled.img`


width: 700px;
height: 200px;
flex-shrink: 0;
display: flex;
margin-left: 90px;
align-items: center;
justify-content: center;
@media (max-width: 768px){
  justify-content: center;
  align-items: center;
  margin-left: auto;
  width:400px;
  height: 150px;

 }


`



const Description = styled.p`

width: 570px;
height: 58px;
flex-shrink: 0;
border-radius: 4px;
background: #E60000;
display: flex;
align-items: center;
justify-content: center;
text-transform: uppercase;
color: #F9F9F9;
text-align: center;
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: 1.5px;
margin-top: 10px;
@media (max-width: 768px){
  width: 400px;
  height: 40px;

 }

`


export default Login;
