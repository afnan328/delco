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
                            <span className="section-title__tagline">Why Choose Us</span>
                        </div>
                        <h2 className="section-title__title">
                        An unwavering commitment to excellence & innovation

                        </h2>
                        </div>
                        <p className="why-choose-one__text">
                        Delco is associated with regular and new customers according to their requirement and no wonder even though if their requirement is in short notice{" "}
                        </p>
                        <p className="why-choose-one__text">
                        We rise up to their expectation by providing them the required equipment in record time, no matter what type of equipment the customer requires.We have a professional Marketing Team comprising of a Marketing Manager and Business Development Executive{" "}
                        </p>
                        <div className="why-choose-one__btn-box">
                        <Link href="/about" className="thm-btn why-choose-one__btn">
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
                            src="./assets/images/allimgs/service/About.webp"
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
