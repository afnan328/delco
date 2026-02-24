'use client'
import Link from "next/link"


export default function ServicesTwo() {
    
    return (
        <>
            {/*Services Two Start*/}
            <section className="services-two" style={{marginTop:'-200px'}}>
                <div className="container">
                <div className="section-title text-center">
                    {/* <div className="section-title__tagline-box">
                    <span className="section-title__tagline">lATEST sERVICE</span>
                    </div> */}
                    {/* <h2 className="section-title__title">
                    Your supply chain partner
                    <br /> the for success
                    </h2> */}
                </div>
                <div className="row">
                    {/*Services Two Single Start*/}
                    <div
                    className="col-xl-6 col-lg-4 wow fadeInLeft"
                    data-wow-delay="100ms"
                    >
                    <div className="services-two__single">
                        <div className="services-two__icon">
                        <span >
                        <img src="./assets/images/allimgs/icon/vision.png" style={{height:'40px'}}/>
                        </span>
                        </div>
                        <h3 className="services-two__title">
                        {/* <Link href="/express-freight-solutions"> */}
                        Vision
                        {/* </Link> */}
                        </h3>
                        <p className="services-two__text">
                        To be the trusted partner in secure Critical infrastructure and Data Center solutions.
                        Our services are delivered to mission-critical environments across the Kingdom of Saudi Arabia, where reliability, compliance, security, and uninterrupted operations are essential.
                        </p>
                    </div>
                    </div>
                    {/*Services Two Single End*/}
                    {/*Services Two Single Start*/}
                    {/* <div className="col-xl-6 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                    <div className="services-two__single">
                        <div className="services-two__icon">
                        <span >
                        <img src="./assets/images/allimgs/icon/policy.png" style={{height:'40px'}}/>
                        </span>
                        </div>
                        <h3 className="services-two__title">
                        Our HSEQ Policy
                        </h3>
                        <p className="services-two__text">
                        Committed to top-tier HSE management with zero tolerance, DACO ensures stakeholder protection while delivering superior services that exceed client expectations.
                        </p>
                    </div>
                    </div> */}
                  
                    <div
                    className="col-xl-6 col-lg-4 wow fadeInRight"
                    data-wow-delay="300ms"
                    >
                    <div className="services-two__single">
                        <div className="services-two__icon">
                        <span >
                        <img src="./assets/images/allimgs/icon/mission.png" style={{height:'40px'}}/>
                        </span>
                        </div>
                        <h3 className="services-two__title">
                            {" "}
                            Mission
                        </h3>
                        <p className="services-two__text">
                       Our mission is to deliver end-to-end, secure, and resilient infrastructure and data center solutions through engineering excellence, strict compliance, and disciplined execution-guided by integrity, reliability, and a strong commitment to international standards and localization.
                        </p>
                       
                    </div>
                    </div>

                    {/* <div
                    className="col-xl-6 col-lg-4 wow fadeInRight"
                    data-wow-delay="300ms"
                    >
                    <div className="services-two__single">
                        <div className="services-two__icon">
                        <span >
                        <img src="./assets/images/allimgs/icon/Quality.png" style={{height:'40px'}}/>
                        </span>
                        </div>
                        <h3 className="services-two__title">
                            {" "}
                            Our Quality Policy
                        </h3>
                        <p className="services-two__text">
                        It is explicit policy of our company to provide service to customer and meet
their demanding expectation in confirm with highest standard and highest
quality. We have also a quality trend to monitor our quality effectiveness to
ensure the company function to determined company procedure and guidelines
                        </p>
                    </div>
                    </div> */}
                </div>
                </div>
            </section>
        </>


    )
}
