import React from 'react';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function ContactForm() {
  return (
    <form className='m-3'>
      <MDBInput id='form4Example1' wrapperClass='mb-4' label='Name' required />
      <MDBInput type='email' id='form4Example2' wrapperClass='mb-4' label='Email address' required/>
      <MDBInput wrapperClass='mb-4' textarea id='form4Example3' rows={4} label='Message' required />
      <MDBBtn type='submit' block>
        Submit
      </MDBBtn>
    </form>
  );
}