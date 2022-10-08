
import React,{useRef} from 'react';
import './Join.css'
import emailjs from '@emailjs/browser';
const Join = () => {
    const form=useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_h53rag2', 'template_ui99j4n', form.current, '1i4okjbvqpSGAgxsk')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className='Join'>
        <div className='left-j'>
            <hr/>
            <div>
                <span className='stroke-text'>READY TO </span>
                <span>LEVEL UP ?</span>
            </div>
            <div>
                <span> JOIN THE </span>
                <span className='stroke-text'> TEAM</span>
            </div>


        </div>
        <div className='right-j'>
            <form ref={form} className='email' onSubmit={sendEmail}>
                <input type='email' name="user_email" placeholder='Enter your Email address '/>
                <button className='btn btn-j'>Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join