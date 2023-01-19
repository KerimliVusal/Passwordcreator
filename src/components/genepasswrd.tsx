import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState ,useRef} from "react";
import logo2 from '../components/logo4.gif'
import Swal from 'sweetalert2'
const Genepaswrd=()=>{
    const[lengt,setLength]=useState<any>(20)
const numberref=useRef<any>()    
const symbolref=useRef<any>()    
const inputref=useRef<any>()    
function generatePassword() {
    let generatedPassword = '';
    
    let variationsCount = [numberref.current.checked, symbolref.current.checked].length
    
    for(let i = 0; i < lengt; i += variationsCount) {
      if (numberref.current.checked) {
        generatedPassword += getRandomNumber()
      } 
      if (symbolref.current.checked) {
        generatedPassword += getRandomSymbol()
      }
      generatedPassword += getRandomLower()
    }
    
    const finalPassword = generatedPassword.slice(0, lengt);
    
    return inputref.current.value=finalPassword;
  }
  
  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  
  function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }
  
  function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)];
  }
    
        function Copypassword() {
            // Get the text field
            // var copyText = document.getElementById("myInput");
          
            // Select the text field
            inputref.current.select();
            inputref.current.setSelectionRange(0, 99999); // For mobile devices
          
             // Copy the text inside the text field
            navigator.clipboard.writeText(inputref.current.value);
          
            // Alert the copied text
            Swal.fire({
                title: 'Copied!',
                text: `Copied Password : ${inputref.current.value}` ,
                imageUrl: logo2,
                imageWidth: '80%',
                imageHeight: '80%',
                imageAlt: 'Custom image',
              })

        }

    return(<Container>
        <Row lg={1} className='generate1'>
            <Col lg={5} xs={10} sm={10} className='generate2'>
            
            <Row lg={1} xs={1} sm={1} className='generate2row'>
                <Col className='generate2h2'><h2>Generate Password</h2></Col>
                <Col className='generate3'><input type='text' ref={inputref} placeholder="password" /><button onClick={()=>Copypassword()}>Copy Password</button></Col>
                <Col className='generate4'><p>Password Length</p> <input  type='range' className="rangeinput"  min="4" max="20" step='1' onChange={(event:React.ChangeEvent<HTMLInputElement>)=>setLength(event.target.value)}/><span className="lengthspan">{lengt}</span></Col>
                <Col className='generate5'><p>Include Numbers</p><input ref={numberref} type='checkbox'/></Col>
                <Col className='generate6'><p>Include Symbols</p><input ref={symbolref} type='checkbox'/></Col>
                <Col className='generate7'><button onClick={()=>generatePassword()}>Generate Password</button></Col>
            </Row>
            </Col>
           
        </Row>

    </Container>
        
        
        )
};export default Genepaswrd