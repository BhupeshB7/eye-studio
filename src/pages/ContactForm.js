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
      <MDBBtn type="submit" block>
        Submit
      </MDBBtn>
    </form>
  );
}
