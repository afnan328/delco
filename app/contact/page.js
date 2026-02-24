
import Breadcrumb from "@/components/layout/Breadcrumb"
import Layout from "@/components/layout/Layout"
import Form from "@/components/sections/home1/Form"
import Link from "next/link"
export default function Home() {

    return (
        <>
   <Layout>
   {/* <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="CONTACT US" page="contact"> */}
    <Breadcrumb breadcrumbTitle="CONTACT US" page="contact" />
                <div>

                    {/*Contact One Start*/}
                    <section className="contact-one">
                        <div className="container">
                        <div className="section-title text-center">
                            <div className="section-title__tagline-box">
                            <span className="section-title__tagline">Contact us</span>
                            </div>
                            <h2 className="section-title__title">Get in Touch With Us</h2>
                        </div>
                        <div className="contact-one__inner">
                            <ul className="contact-one__contact-list list-unstyled">
                            <li>
                                <div className="icon">
                                <span className="icon-call" />
                                </div>
                                <div className="content">
                                <h3>Lets Talk us</h3>
                                <p>
                                    <a href="tel:+966 13 363 3369 
">+966 13 363 3369 
</a>
                                </p>
                                {/* <p>
                                    <a href="tel:+966 58 176 5070  
">+966 58 176 5070 
</a>
                                </p> */}
                                {/* <p>
                                    Fax: <a href="tel:123458963007">1234 -58963 - 007</a>
                                </p> */}
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                <span className="icon-location location-icon" />
                                </div>
                                <div className="content">
                                <h3>Address</h3>
                                <p> DAHRAN TOWER, </p>
                                <p> # 103,</p>
                                <p> Custodian of the Two Holy Mosque Road</p>
                                <p>Al-Khobar, Kingdom of Saudi Arabia</p>

                                {/* <p>
                                Ibn Al-Jawazi St. Makkah Al Mukarama Road,<br/>Al-Jubail Industrial City 35514,<br/> Kingdom of Saudi Arabia
                                </p> */}
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                <span className="icon-envolop email-icon" />
                                </div>
                                <div className="content">
                                <h3>Send us email</h3>
                                <p>
                                    <a href="mailto:info@alazharalarabia.com">
                                   info@alazharalarabia.com
                                    </a>
                                </p>
                                
                                </div>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </section>
                    {/*Contact One End*/}


                    {/*Contact Two Start*/}
                    {/* <section className="contact-two">
                        <div className="container">
                        <div className="row">
                            <div className="col-xl-7">
                            <div className="contact-two__left">
                                <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">Contact</span>
                                </div>
                                <h2 className="section-title__title">Get In Touch Here</h2>
                                </div>
                                <form
                                className="contact-form-validated contact-two__form"
                                action="assets/inc/sendemail.php"
                                method="post"
                                noValidate="novalidate"
                                >
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6">
                                    <div className="contact-two__input-box">
                                        <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        required=""
                                        />
                                    </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6">
                                    <div className="contact-two__input-box">
                                        <input
                                        type="email"
                                        name="email"
                                        placeholder="E-mail"
                                        required=""
                                        />
                                    </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12">
                                    <div className="contact-two__input-box">
                                        <input
                                        type="text"
                                        name="text"
                                        placeholder="Subject"
                                        required=""
                                        />
                                    </div>
                                    </div>
                                    <div className="col-xl-12">
                                    <div className="contact-two__input-box text-message-box">
                                        <textarea
                                        name="message"
                                        placeholder="Message"
                                        defaultValue={""}
                                        />
                                    </div>
                                    </div>
                                    <div className=" col-xl-12">
                                    <div className="contact-two__btn-box">
                                        <button type="submit" className="thm-btn contact-two__btn">
                                        Submit Now
                                        <span />
                                        </button>
                                    </div>
                                    </div>
                                </div>
                                </form>
                                <div className="result" />
                            </div>
                            </div>
                            <div className="col-xl-5">
                            <div className="contact-two__right">
                                <div className="contact-two__img">
                                <img src="./assets/images/allimgs/contactpage/contact .webp" alt="" />
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </section> */}
                    <Form/>
                    {/*Contact Two End*/}
                   
                    {/*Google Map Start*/}
                    <section className="google-map-one google-map-two">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.1242914111117!2d50.20041049999999!3d26.3375746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e8b9b8e64ddb%3A0x302e4d362d595388!2sDhahran%20Tower%20Compound!5e1!3m2!1sen!2sin!4v1771921922896!5m2!1sen!2sin"
    className="google-map__one"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</section>
                    {/*Google Map End*/}

                    {/*CTA One Start*/}
                    <section className="cta-one">
                        <div className="container">
                        <div className="cta-one__inner">
                            <div
                            className="cta-one__bg-img"
                            style={{
                                backgroundImage: "url(./assets/images/allimgs/contactpage/footer.webp)"
                            }}
                            />
                            <div className="cta-one__content-box">
                            <div className="cta-one__icon">
                                <span className="icon-call" />
                                <div className="cta-one__shape-1">
                                <img src="assets/images/shapes/cta-one-shape-1.png" alt="" />
                                </div>
                            </div>
                            <h3 className="cta-one__title">
                                Need any help?
                                <br /> contact us!
                            </h3>
                            <div className="cta-one__contact-box">
                                <div className="icon">
                                <span className="icon-phone" />
                                </div>
                                <div className="content">
                                <p>Need help?</p>
                                <h3>
                                    <a href="tel: 966 13 363 3369
 
"> +966 13 363 3369
 
</a><br/>
{/* <a href="tel:966 58 176 5070  
">+966 58 176 5070 
</a> */}
                                </h3>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>
                    {/*CTA One End*/}



                </div>

            </Layout>
        </>
    )
}