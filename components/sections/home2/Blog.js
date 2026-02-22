import Link from "next/link"


export default function Blog() {
    return (
        <>
            {/*Blog Two Start*/}
            <section className="blog-two" style={{marginBottom:'60px',marginTop:'30px'}}>
                <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                    <span className="section-title__tagline">Our Services
                    </span>
                    </div>
                    <h2 className="section-title__title">
AL-AZHAR AL-ARABIA is an engineering and technology company in Saudi Arabia specializing in:                    </h2>
                </div>
                <div className="row">
                    {/*Blog Two Single Start*/}
                    {/* 1 */}
                    <div
                    className="col-xl-6 col-lg-4 wow fadeInRight"
                    data-wow-delay="300ms"
                    >
                    <div className="blog-two__single">
                        <div className="blog-two__img-box">
                        <div className="blog-two__img">
                            <img src=".\assets\images\allimgs\service\Physical Security Systems.webp" alt="" />
                        </div>
                        {/* <div className="blog-two__date">
                            <p>
                            06
                            <br />
                            </p>
                        </div> */}
                        </div>
                        <div className="blog-two__content-inner">
                        <div className="blog-two__content">
                            {/* <ul className="blog-two__meta list-unstyled">
                            <li>
                                <Link href="/blog-details">
                                <span className="icon-user" />
                                By admin
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog-details">
                                <span className="icon-comments" />
                                Comments (05)
                                </Link>
                            </li>
                            </ul> */}
                            <h3 className="blog-two__title">
                            <Link href="/services">
                            Physical Security Systems
                            </Link>
                            </h3>
                        </div>
                        <div className="blog-two__btn-box">
                            <Link href="/services" className="thm-btn blog-two__btn" >
                            Read more
                            <span />
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                     {/* 1 */}

                     {/* 2*/}
                    <div
                    className="col-xl-6 col-lg-4 wow fadeInLeft"
                    data-wow-delay="100ms"
                    >



                    <div className="blog-two__single">
                        <div className="blog-two__img-box">
                        <div className="blog-two__img">
                            <img src=".\assets\images\allimgs\service\Data Center Infrastructure.webp" alt="" />
                            {/* <img src="./assets/images/allimgs/service/1.webp" alt="" /> */}
                        </div>
                        {/* <div className="blog-two__date">
                            <p>
                            01
                            <br />
                            </p>
                        </div> */}
                        </div>
                        <div className="blog-two__content-inner">
                        <div className="blog-two__content">
                            {/* <ul className="blog-two__meta list-unstyled">
                            <li>
                                <Link href="/blog-details">
                                <span className="icon-user" />
                                By admin
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog-details">
                                <span className="icon-comments" />
                                Comments (05)
                                </Link>
                            </li>
                            </ul> */}
                            <h3 className="blog-two__title">
                            <Link href="/services">
                            Data Center Infrastructure
                            </Link>
                            </h3>
                        </div>
                        <div className="blog-two__btn-box">
                            <Link href="/services" className="thm-btn blog-two__btn">
                            Read more
                            <span />
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* 2 */}


                    {/*Blog Two Single End*/}
                    {/*Blog Two Single Start*/}
                    {/* 3 */}
                    <div className="col-xl-6 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                    <div className="blog-two__single">
                        <div className="blog-two__img-box">
                        <div className="blog-two__img">
                            <img src=".\assets\images\allimgs\service\Low Current & ELV Systems.webp" alt="" />
                        </div>
                        {/* <div className="blog-two__date">
                            <p>
                            02
                            <br />
                            </p>
                        </div> */}
                        </div>
                        <div className="blog-two__content-inner">
                        <div className="blog-two__content">
                            {/* <ul className="blog-two__meta list-unstyled">
                            <li>
                                <Link href="/blog-details">
                                <span className="icon-user" />
                                By admin
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog-details">
                                <span className="icon-comments" />
                                Comments (05)
                                </Link>
                            </li>
                            </ul> */}
                            <h3 className="blog-two__title">
                            <Link href="/services">
                            Low Current & ELV Systems

                            </Link>
                            </h3>
                        </div>
                        <div className="blog-two__btn-box">
                            <Link href="/services" className="thm-btn blog-two__btn">
                            Read more
                            <span />
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* 3 */}
                    {/*Blog Two Single End*/}
                    {/*Blog Two Single Start*/}
                    {/* 4 */}
                    <div
                    className="col-xl-6 col-lg-4 wow fadeInRight"
                    data-wow-delay="300ms"
                    >
                    <div className="blog-two__single">
                        <div className="blog-two__img-box">
                        <div className="blog-two__img">
                            <img src=".\assets\images\allimgs\service\System Integration & Operations Support.webp" alt="" />
                        </div>
                       
                        </div>
                        <div className="blog-two__content-inner">
                        <div className="blog-two__content">
                            {/* <ul className="blog-two__meta list-unstyled">
                            <li>
                                <Link href="/blog-details">
                                <span className="icon-user" />
                                By admin
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog-details">
                                <span className="icon-comments" />
                                Comments (05)
                                </Link>
                            </li>
                            </ul> */}
                            <h3 className="blog-two__title">
                            <Link href="/services">
                            System Integration & Operations Support
                            </Link>
                            </h3>
                        </div>
                        <div className="blog-two__btn-box">
                            <Link href="/services" className="thm-btn blog-two__btn">
                            Read more
                            <span />
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* 4 */}
                    {/*Blog Two Single End*/}
                </div>





                </div>
            </section>
            {/*Blog Two End*/}
        </>


    )
}
