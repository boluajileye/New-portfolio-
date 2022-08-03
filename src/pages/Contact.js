import React, { useState } from 'react';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

export const Contact = () => {
    const form = useRef();
    const [contact, setContact] = useState({
        fname: '',
        email: '',
        message: ''
    });


    const handleSubmit = ( event ) => {
        event.preventDefault();
        emailjs.sendForm(
            'service_jyuspu5',
             'template_e3518kn', 
             form.current, 
             'I1wL5Lr-uHukAwcxe')
      .then((result) => {
          console.log(result.text);
          alert('Mail Sent will reply as soon as possible. Thank you');
      }, (error) => {
          console.log(error.text);
          alert("FAILED...", error);
      });
        setContact({fname: '', email: '', message: ''});
      };


    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className="cpx-1 cpy-2 mx-auto lg:gap-8 xl:gap-0 xl:cpy-24 xl:grid-cols-12">
                    <div className='container mt-1 mb-6'>
                        <div className="card bg-white shadow-soft border-light cp-2 cp-md-3 cp-lg-5">
                            <div className="card-header">
                                <div className="row justify-content-center">
                                    <div className="col-12 col-md-8 text-center mb-5">
                                        <h1 className="display-2 mb-3">Get in touch today</h1>
                                        <cp className="lead">I am Available for software engineer roles on a Full-Time, Part-Time or Contract basis as well as Internship positions..</cp>
                                    </div>
                                </div>
                                <div className="row mb-5">
                                    <div className="col-md-4 col-lg-4 text-center">
                                        <div className="icon-box mb-4">
                                            <div className="icon icon-shape shadow-soft border-light rounded-circle mb-4">
                                                <span className="fas fa-map-marker-alt"></span>
                                            </div>
                                            <h2 className="h5 icon-box-title">Where to find me</h2>
                                            <span>
                                                Lagos, Nigeria
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-lg-4 text-center">
                                        <div className="icon-box mb-4">
                                            <div className="icon icon-shape shadow-soft border-light rounded-circle mb-4">
                                                <span className="fas fa-phone-alt"></span>
                                            </div>
                                            <h2 className="h5 icon-box-title">Call</h2>
                                            <span>+234 (706) 560 5600</span>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-lg-4 text-center">
                                        <div className="icon-box mb-4">
                                            <div className="icon icon-shape shadow-soft border-light rounded-circle mb-4">
                                                <span className="fas fa-paper-plane"></span>
                                            </div>
                                            <h2 className="h5 icon-box-title">Email</h2>
                                            <a href="mailto:boluwatifeajileye@gmail.com">boluwatifeajileye@gmail.com</a>
                                            <br /><a href="mailto:aobatechdigitals@gmail.com">aobatechdigitals@gmail.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <form ref={form} onSubmit={handleSubmit} className="col-12 col-md-8 mx-auto">
                                <div className="form-group">
                                    <label for="nameInputIcon2">Your Name</label>
                                    <div className="input-group mb-4">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><span className="fa fa-user-circle"></span></span>
                                        </div>
                                        <input className="form-control" id="nameInputIcon2" placeholder="e.g. Bolu Ajileye" type="text" aria-label="contact name input" name="fname" required
                                        value={contact.fname}
                                        onChange={(e) => setContact({ ...contact, fname: e.target.value})}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="emailInputIcon2">Your Email</label>
                                    <div className="input-group mb-4">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><span className="fa fa-envelope"></span></span>
                                        </div>
                                        <input className="form-control" id="emailInputIcon2" placeholder="example@company.com" type="email" aria-label="contact email input" name="email" required
                                        value={contact.email}
                                        onChange={(e) => setContact({ ...contact, email: e.target.value})}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlTextarea2">Your Message</label>
                                    <textarea className="form-control" placeholder="Enter your message..." id="exampleFormControlTextarea2" rows="4" name="message" required
                                    value={contact.message}
                                    onChange={(e) => setContact({ ...contact, message: e.target.value})}
                                    ></textarea>
                                </div>
                                <div className="card-footer cpx-0 mx-auto">
                                    <button type="submit" className="btn btn-primary" >Send message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
