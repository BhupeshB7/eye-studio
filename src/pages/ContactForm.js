import React from "react";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBTextArea,
} from "mdb-react-ui-kit";

export default function ContactForm() {
  return (
    <div>
      <div>
        <p className="p-text1">Hi! Let us Know how we can help and we'll respond shortly.</p>
      </div>
    <form className="m-3">
      <MDBInput
        id="form4Example1"
        wrapperClass="mb-4"
        label="Name"
        required
        style={{ height: "40px" }}
      />
      <MDBInput
        type="email"
        id="form4Example2"
        wrapperClass="mb-4"
        label="Email address"
        required
        style={{ height: "40px" }}
      />
      <MDBTextArea wrapperClass="mb-4" label="Message" id="textAreaExample" rows={4} />
      <MDBBtn className="contact-button" type="submit" block>
        Submit
      </MDBBtn>
    </form>
    </div>
  );
}
