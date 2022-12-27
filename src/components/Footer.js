import React from "react";
import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";
function Footer() {
  return (
    <div>
      <div class='row'>
        <div class='container'>
          <div>
            <h3>Ready Talk US today </h3>
            <button type='button' class='btn btn-primary'>
              {" "}
              GET STARTED
            </button>
          </div>
          <div class='row row-cols-2'>
            <div class='col'>Rahul Maroju</div>
            <div class='col'>LOREMK</div>
            <div class='col'>
              <form>
                <p>Subscribe to get important updates</p>
                <input
                  name='email'
                  placeholder='Enter your email'
                  type='email'
                ></input>
                <input name='submit' value='subscribe' type='submit'></input>
              </form>
            </div>

            <div class='col'>
              <p>Follow Us</p>
              <div>
                <a href='https://www.instagram.com/raaul_maroju/'>
                  <AiOutlineInstagram />
                </a>
              </div>
              <div>
                <a href='https://www.facebook.com/rahulmaroju8'>
                  <AiOutlineFacebook />
                </a>
              </div>
            </div>
            <div class='row row-cols-2'>
              <div class='col'>
                <p>Call Us</p>
              </div>
              <div class='col'>
                <a href='tel:12345678'>+91 8019464690</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='container'>
        <footer class='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top'>
          <p class='col-md-4 mb-0 text-muted'>
            ©{new Date().getFullYear()}Rahul Maroju. All Rights Reserved{" "}
          </p>
          <div>
            <p>PRIVACY POLICY </p>
            <p>TERMS AND CONDITIONS </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
