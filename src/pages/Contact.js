import React from "react";

function Contact() {
  return (
    <>
      <h2>Contact</h2>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15235.060790367288!2d78.55355195!3d17.3268745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba20fc9905c55%3A0x408a7584cca2ed4a!2sHastinapuram%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1672141159944!5m2!1sen!2sin'
        style={{ border: "0px", width: "50%", height: "50%" }}
        allowFullScreen=''
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
      <form action='https://formspree.io/f/mnqyardl' method='POST'>
        <div class='row mb-3'>
          <div class='col-sm-10'>
            <input
              type='text'
              class='form-control'
              name='username'
              id='inputEmail3'
              placeholder='USER NAME'
            />
          </div>
        </div>
        <div class='row mb-3'>
          <div class='col-sm-10'>
            <input
              type='text'
              class='form-control'
              name='email'
              id='inputPassword3'
              placeholder='EMAIL'
            />
          </div>
        </div>
        <div class='row mb-3'>
          <div class='col-sm-10'>
            <textarea
              name='message'
              type='text'
              class='form-control'
              id='inputPassword3'
              placeholder='Messages'
            />
          </div>
        </div>

        <button type='submit' class='btn btn-primary'>
          Sign in
        </button>
      </form>
    </>
  );
}

export default Contact;
