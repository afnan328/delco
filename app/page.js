import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home1/Banner"
import About from "@/components/sections/home1/About"
import ServicesOne from "@/components/sections/home1/ServicesOne"
import WhyChoose from "@/components/sections/home1/WhyChoose"
import Project from "@/components/sections/home1/Project"
import Brand from "@/components/sections/home1/Brand"
import Counter from "@/components/sections/home1/Counter"
import Team from "@/components/sections/home1/Team"
import Start from "@/components/sections/home1/Start"
import Faq from "@/components/sections/home1/Faq"
import Testimonial from "@/components/sections/home1/Testimonial"
import Blog from "@/components/sections/home2/Blog"
import Cta from "@/components/sections/home1/Cta"
import ServicesTwo from "@/components/sections/home2/ServicesTwo"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Banner />
                {/* <ServicesOne /> */}
                <WhyChoose />
                 
                  <section className="about-one about-two">
                        <div className="container">
                        <div className="row">
                            <div className="col-xl-6">
                            <div className="about-one__left">
                                <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">About Us</span>
                                </div>
                                <h2 className="section-title__title">
                              <span style={{color:'#02377d'}}> AL-AZHAR AL-ARABIA </span>   is an engineering and technology company in Saudi Arabia.

                                </h2>
                                </div>
                                <p className="about-one__text">
                                We provide end-to-end, turnkey solutions covering the complete project lifecycle-starting from concept development, feasibility assessment, and design coordination, through engineering, procurement, installation, system integration, testing, and commissioning, and extending into long-term operations, maintenance, and lifecycle support.


                                </p>
                                {/* <p className="about-one__text">Delco Arabia’s Trading Division specializes in high-quality Industrial Valves, Pipes, Fittings, Plumbing, Sanitary, and Safety Materials. We serve Oil & Gas, Marine, and Industrial projects with competitive pricing and a strong reputation. Our operations cover power plants, petrochemicals, refineries, chemicals, fertilizers, paper, cement, and sugar industries. Committed to superior quality and compliance, we ensure 100% customer satisfaction.
</p> */}
                                <div className="about-one__list-box">
                                <div className="about-one__shape-1">
                                    <img src="assets/images/shapes/about-one-shape-1.png" alt="" />
                                </div>
                                {/* <ul className="about-one__list list-unstyled">
                                    <li>
                                    <div className="about-one__icon">
                                        <span className="icon-conveyor-1" />
                                    </div>
                                    <h3>
                                        Delivering successthe <br /> through logistics
                                    </h3>
                                    </li>
                                    <li>
                                    <div className="about-one__icon">
                                        <span className="icon-clock" />
                                    </div>
                                    <h3>
                                        Logistics expertise for your
                                        <br /> competitive{" "}
                                    </h3>
                                    </li>
                                    <li>
                                    <div className="about-one__icon">
                                        <span className="icon-fragile" />
                                    </div>
                                    <h3>
                                        Streamliningm supply chain
                                        <br /> processes
                                    </h3>
                                    </li>
                                </ul> */}
                                </div>
                                {/* <div className="about-one__btn-box">
                                <Link href="/about" className="thm-btn about-one__btn">
                                    Read more
                                    <span />
                                </Link>
                                </div> */}
                            </div>
                            </div>
                            <div className="col-xl-6">
                            <div
                                className="about-one__right wow fadeInRight"
                                data-wow-delay="300ms"
                            >
                                <div className="about-one__img-box">
                                <div className="about-one__img-1">
                                    <img src="./assets/images/allimgs/new/3. Image.webp" alt="" />
                                </div>
                                <div className="about-one__img-2">
                                    <img src="./assets/images/allimgs/new/4. Image (1).webp" alt="" />
                                </div>
                                {/* <div className="about-one__trusted-box">
                                    <div className="about-one__trust-icon">
                                    <span className="icon-ionic-ios-people" />
                                    </div>
                                    <div className="about-one__trust-content">
                                    <div className="about-one__trust-count count-box">
                                        <h3 className="count-text">
                                            <CounterUp end={100} />
                                        </h3>
                                        <span></span>
                                        <span className="about-one__trust-plus">%</span>
                                    </div>
                                    <p className="about-one__trust-text">Customer Satisfaction</p>
                                    </div>
                                </div> */}
                                </div>
                            </div>
                            </div>
                        </div>


                        
                        </div>
                    </section>
                      <ServicesTwo/>
                {/* <Project /> */}
                <Blog/>
                {/* <Brand /> */}
                {/* <About /> */}
                {/* <Counter /> */}
                {/* <Team /> */}
                {/* <Start /> */}
                {/* <Faq /> */}
                {/* <Testimonial /> */}
                {/* <Blog /> */}
<Brand />
                <Cta/>
            </Layout>
        </>
    )
}