import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Contact extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            isRedirect : false
        }
    }
    

    submitForm = (event) =>{

        event.preventDefault();

        this.setState({
            isRedirect : true
        });
    }

    isChange = (even) =>{
        const ten = even.target.name;
        const giatri = even.target.value;

        this.setState({
            [ten] : giatri
        })
    }

    isFileChange = (even) =>{
        const file = even.target.files[0];
        console.log(file);
    }

    render() {

        if(this.state.isRedirect === true)
        {
            console.log("Tên : " + this.state.fName  + "|  Email : " + this.state.fEmail  + "|  Phone : " + this.state.fPhone + "|  Lời nhắn : " + this.state.fMess + "|  Ngày" + this.state.fNgay);
            return <Redirect to = "/"></Redirect> ;
            
        }

        return (
            <div>
                <div>
                    <header className="masthead tintuc">
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-lg-12 my-auto">
                                    <div className="header-content mx-auto">
                                        <h1 className="mb-1 text-center">Trang Liên Hệ</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    {/* end-menu */}
                    {/* start-contact */}
                    <section className="page-section" id="contact">
                        <div className="container">
                            {/* Contact Section Heading */}
                            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Liên Hệ Với Chúng Tôi</h2>
                            {/* Icon Divider */}
                            <div className="divider-custom">
                                <div className="divider-custom-line" />
                                <div className="divider-custom-icon">
                                    <i className="fas fa-star" />
                                </div>
                                <div className="divider-custom-line" />
                            </div>
                            {/* Contact Section Form */}
                            <div className="row">
                                <div className="col-lg-8 mx-auto">
                                    {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. */}
                                    <form name="sentMessage" id="contactForm" noValidate="novalidate">
                                        <div className="control-group">
                                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                                <label>Name</label>
                                                <input onChange = {(even) => this.isChange(even)} name = "fName" className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                                                <p className="help-block text-danger" />
                                            </div>
                                        </div>
                                        <div className="control-group">
                                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                                <label>Email Address</label>
                                                <input onChange = {(even) => this.isChange(even)} name = "fEmail" className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                                                <p className="help-block text-danger" />
                                            </div>
                                        </div>
                                        <div className="control-group">
                                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                                <label>Phone Number</label>
                                                <input onChange = {(even) => this.isChange(even)} name = "fPhone" className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                                                <p className="help-block text-danger" />
                                            </div>
                                        </div>
                                        <div className="control-group">
                                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                                <label>Message</label>
                                                <textarea onChange = {(even) => this.isChange(even)} name = "fMess" className="form-control" id="message" rows={5} placeholder="Message" required="required" data-validation-required-message="Please enter a message." defaultValue={""} />
                                                <p className="help-block text-danger" />
                                            </div>
                                        </div>

                                        <div className="control-group">
                                           <div className="form-group">
                                             <label >Date</label>
                                             <select onChange = {(even) => this.isChange(even)} className="form-control" name="fNgay" >
                                               <option value = "Monday">Monday</option>
                                               <option value = "Tuesday">Tuesday</option>
                                               <option value = "Wednesday">Wednesday</option>
                                               <option value = "Thursday">Thursday</option>
                                               <option value = "Friday">Friday</option>
                                             </select>
                                           </div>
                                        </div>
                                        

                                        <div className="control-group">
                                            <div className="form-group">
                                              <label >Image</label>
                                              <input type="file" onChange = {(even) => this.isFileChange(even)} className="form-control-file" name="fAnh" aria-describedby="fileHelpId"/>
                                              
                                            </div>
                                        </div>

                                        <br />
                                        <div id="success" />
                                        <div className="form-group">
                                            <button type="submit" onClick = {(event) => this.submitForm(event)} className="btn btn-primary btn-xl" id="sendMessageButton">Send</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* end-contact */}
                </div>

            </div>
        );
    }
}

export default Contact;