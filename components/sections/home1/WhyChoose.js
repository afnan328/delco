import { Bebas_Neue } from "next/font/google"
import Link from "next/link"
export default function WhyChoose() {
    return (
        <>
            {/*Why Choose One Start*/}
            <section className="why-choose-one" style={{marginTop:'40px'}}>
                <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                    <div className="why-choose-one__left">
                        <div className="section-title text-left">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline" style={{color:'#02377D ',font:'Gilroy'}}>Company Overview</span>
                        </div>
                        <h2 className="section-title__title" style={{font:'Bebas Nue'}}>
                        Powering Data - Protecting Critical Infrastructure

                        </h2>
                        </div>
                        <p className="why-choose-one__text">
<p className="why-choose-one__text">
AL-AZHAR AL-ARABIA is an engineering and technology company in Saudi Arabia specializing in:
</p>

<ul className="why-choose-one__list">
  <li>
    <span className="arrow-icon">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M7 6L13 12L7 18" stroke="#02377D" strokeWidth="2"/>
        <path d="M11 6L17 12L11 18" stroke="#02377D" strokeWidth="2"/>
      </svg>
    </span>
    Physical Security Systems
  </li>

  <li>
    <span className="arrow-icon">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M7 6L13 12L7 18" stroke="#02377D" strokeWidth="2"/>
        <path d="M11 6L17 12L11 18" stroke="#02377D" strokeWidth="2"/>
      </svg>
    </span>
    Data Center Infrastructure
  </li>

  <li>
    <span className="arrow-icon">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M7 6L13 12L7 18" stroke="#02377D" strokeWidth="2"/>
        <path d="M11 6L17 12L11 18" stroke="#02377D" strokeWidth="2"/>
      </svg>
    </span>
    Low Current & ELV Systems
  </li>

  <li>
    <span className="arrow-icon">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M7 6L13 12L7 18" stroke="#02377D" strokeWidth="2"/>
        <path d="M11 6L17 12L11 18" stroke="#02377D" strokeWidth="2"/>
      </svg>
    </span>
    System Integration & Operations Support
  </li>
</ul>


<p className="why-choose-one__text">
Our services are delivered to mission-critical environments across the Kingdom of Saudi Arabia, where reliability, compliance, security, and uninterrupted operations are essential.
</p> </p>
                        {/* <p className="why-choose-one__text">
                        We rise up to their expectation by providing them the required equipment in record time, no matter what type of equipment the customer requires.We have a professional Marketing Team comprising of a Marketing Manager and Business Development Executive{" "}
                        </p> */}
                        <div className="why-choose-one__btn-box"  >
                        <Link href="/about" className="thm-btn why-choose-one__btn" style={{ backgroundColor: "#02377D", color: "#ffffff" }}>
                        
                            Read more
                            <span />
                        </Link>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                    <div className="why-choose-one__right">
                        <div
                        className="why-choose-one__img wow slideInRight"
                        data-wow-delay="100ms"
                        data-wow-duration="2500ms"
                        >
                        <img
                            src=".\assets\images\allimgs\service\4. Image.webp"
                            alt=""
                        />
                        {/* <div className="why-choose-one__delivery-box">
                            <div className="icon">
                            <span className="icon-airplane" />
                            </div>
                            <p>
                            2 dAYS
                            <br /> DELIVARY
                            </p>
                        </div> */}
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/*Why Choose One End*/}
        </>


    )
}
