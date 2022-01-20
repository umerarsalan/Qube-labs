import React, { useRef, useState } from "react";
import Popup from "./CustomPopup";

// import car111 from "../assets/ast/car111.jpg";
import car1 from "../assets/ast/car1.png";
import car2 from "../assets/ast/car2.png";
import car3 from "../assets/ast/car3.png";
import car4 from "../assets/ast/car4.png";
import car5 from "../assets/ast/car5.png";
import car6 from "../assets/ast/car6.png";
import car7 from "../assets/ast/car7.png";
import car8 from "../assets/ast/car8.png";
import Boxbg from "../assets/Qubelabs-box.png";
import contentCapy from "../assets/content-copy.png";
import externallink from "../assets/external-link.png";
import questionCircle from "../assets/question-circle.png";
import { anim, ScrollReveal } from "../container/ScrollReveal";

export default function Staking() {
  const [ViewCards, setViewCards] = useState(false);
  // ==popup==
  const [isOpen, setIsOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef(null);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand("copy");

    e.target.focus();
    setCopySuccess("Copied!");
  }

  return (
    <section id="staking" className=" overflow-x-clip">
      <div className="sticky top-0 z-40 justify-center">
        {isOpen && (
          <Popup
            content={
              <>
                <div classs="container p-5">
                  <div className="container">
                    <div className="row d-flex justify-content-center">
                      <h1>{isOpen}</h1>
                      <div className="col-12 col-md-6">
                        <div class="media custom-object d-flex">
                          <img alt="..." src={car1} className="img-object" />
                          <div class="media-body">
                            <h4 className="fantom-card">Fantom (FTM)</h4>
                            <a href="https://www.w3docs.com/" target="_blank" className="p-card">
                              https://fantom.foundation <img src={externallink} alt="" />
                            </a>
                          </div>
                        </div>

                        {/* <div className="fantom-modal-header">
                      <img alt="..." src={car1} className="img111" />
                        <h4 className="fantom-card">
                          Fantom (FTM)
                        </h4>
                        <p className="p-card">ttps://fantom.foundation</p>
                      </div> */}
                      </div>
                    </div>
                    {/* <div class="tooltip">Hover over me
                      <span class="tooltiptext">Tooltip text</span>
                    </div> */}

                    {/* /-------------------------------------------------------------------------------- */}

                    <div className="row"></div>
                    <div className="row row-wrapper">
                      <div className="col-12 col-md-6 order-1 order-md-0 ">
                        <div className="card-headnig" onClick={copyToClipboard}>
                          <h4>Operator Address</h4> <img src={contentCapy} alt="" />
                        </div>
                        <p
                          className="p-card-link"
                          ref={textAreaRef}
                          href="certikvaloper1hdutpn340l29gwl3nyrkxwfdyu8q96zwpyxamn"
                        >
                          certikvaloper1hdutpn340l29gwl3nyrkx wfdyu8q96zwpyxamn
                        </p>

                        <a className=" d-flex   qustion-img">
                          <img src={questionCircle} alt="" />
                          <span>How to stake</span>
                        </a>
                      </div>
                      <div className="col-12 col-md-6 order-0 order-md-1 ">
                        <div className="row  justify-content-between">
                          <div className="col-8 ">
                            <div className="">
                              <div className="rate-card">
                                <h3 className="card-headnig">Annual Reward Rate</h3>
                                <p className="fantom-card1">15.00%</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="d-flex justify-content-start">
                              <div className="rate-card ">
                                <h3 className="card-headnig">Fees</h3>
                                <p className="fantom-card2">5.00%</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="steke-sm-btn-none">
                          <div className=" d-flex justify-content-center">
                            <button type="button" className="steke-model-btn  ">
                              Stake
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mobile-footer">
                      <div className="row">
                        <div className="col-6">
                          <div className=" steke-sm-btn-custom">
                            <div className=" d-flex justify-content-start">
                              <a className=" d-flex   qustion-img-mobile">
                                <img src={questionCircle} alt="" />
                                <span>How to stake</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className=" steke-sm-btn">
                            <div className=" d-flex justify-content-start">
                              <button type="button" className="steke-model-btn-mobile ">
                                Stake
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ------------------------------------------------------------------------------------------------ */}
                  </div>
                </div>
              </>
            }
            handleClose={togglePopup}
            handleCloseValue={"dddddddd"}
          />
        )}
      </div>

      <div className="container"></div>
      <div className="container-xxl relative">
        <img className="features-transition absolute  -left-4 -top-4 custom-left  w-96 transform" src={Boxbg} alt="" />

        <div className="pt-36">
          <div className="rounded-2xl bg-slate-200 bg-opacity-60 backdrop-blur-sm px-4 pb-4 pt-16 md:p-16">
            <div className="text-center">
              <ScrollReveal config={anim.animate5}>
                <h5 className="text-5xl font-bold text-primary ">Stake with us</h5>
              </ScrollReveal>
              <ScrollReveal config={anim.animate6}>
                <p className="text-primary-dark font-medium mt-6 mb-12">
                  Earn passive income in crypto by delegating your idle tokens. We contribute to secure the following
                  blockchains.
                </p>
              </ScrollReveal>
            </div>

            <div class="row">
              <div class=" stake-card-custom col-sm-2 mr-auto ml-auto">
                <ScrollReveal config={anim.animate8}>
                  <div className="stake-card">
                    <div className="d-flex p-1 no-gutters justify-center">
                      <div className="row justify-center">
                        <img alt="..." src={car1} className="img111" />
                        <div className="">
                          <div className="head-text">Fantom (FTM)</div>
                          <div className="font-bold font-bold-card">15.00%</div>
                        </div>
                      </div>
                    </div>
                    <button
                      className="btn is-primary w-full mt-2 btn-top"
                      type="button"
                      value="Click to Open Popup"
                      onClick={togglePopup}
                    >
                      Stake
                    </button>
                  </div>
                </ScrollReveal>
              </div>
              <div style={{ width: "14rem", padding: "12px" }} class="stake-card-custom col-sm-2 ml-auto mr-auto">
                <ScrollReveal config={anim.animate8}>
                  <div className="stake-card">
                    <div className="d-flex p-1 no-gutters justify-center">
                      <div className="row justify-center">
                        <img alt="..." src={car2} className="img111" />
                        <div className="">
                          <div className="head-text">Polkadot (DOT)</div>
                          <div className="font-bold font-bold-card">15.00%</div>
                        </div>
                      </div>
                    </div>
                    <button
                      className="btn is-primary w-full mt-2 btn-top"
                      type="button"
                      value="Click to Open Popup"
                      onClick={togglePopup}
                    >
                      Stake
                    </button>
                  </div>
                </ScrollReveal>
              </div>
              <div style={{ width: "14rem", padding: "12px" }} class="stake-card-custom col-sm-2 ml-auto mr-auto">
                <ScrollReveal config={anim.animate8}>
                  <div className="stake-card">
                    <div className="d-flex p-1 no-gutters justify-center">
                      <div className="row justify-center">
                        <img alt="..." src={car3} className="img111" />
                        <div className="">
                          <div className="head-text">Terra (LUNA)</div>
                          <div className="font-bold font-bold-card">15.00%</div>
                        </div>
                      </div>
                    </div>
                    <button
                      className="btn is-primary w-full mt-2 btn-top"
                      type="button"
                      value="Click to Open Popup"
                      onClick={togglePopup}
                    >
                      Stake
                    </button>
                  </div>
                </ScrollReveal>
              </div>
              <div style={{ width: "14rem", padding: "12px" }} class="stake-card-custom  col-sm-2 ml-auto mr-auto ">
                <ScrollReveal config={anim.animate8}>
                  <div className="stake-card">
                    <div className="d-flex p-1 no-gutters justify-center">
                      <div className="row justify-center">
                        <img alt="..." src={car4} className="img111" />
                        <div className="">
                          <div className="head-text">Cosmos (ATOM)</div>
                          <div className="font-bold font-bold-card">15.00%</div>
                        </div>
                      </div>
                    </div>
                    <button
                      className="btn is-primary w-full mt-2 btn-top"
                      type="button"
                      value="Click to Open Popup"
                      onClick={togglePopup}
                    >
                      Stake
                    </button>
                  </div>
                </ScrollReveal>
              </div>

            </div>

            {/* <div style={{ marginTop: "40px" }}>
              <div class="row ">
                <div style={{ width: "14rem", padding: "12px" }} class=" stake-card-custom col-sm-2 mr-auto ml-auto ">
                  <ScrollReveal config={anim.animate8}>
                    <div className="stake-card">
                      <div className="d-flex p-1 no-gutters  justify-center">
                        <div className="col w-12 h-10 m-1 flex mr-5 items-center bg-white rounded-lg">
                          <img alt="..." src={car5} />
                        </div>
                        <div className="col px-2 ml-5">
                          <div className="head-text">Kusama (KSM)</div>
                          <div className="font-bold text-2xl">15.00%</div>
                        </div>
                      </div>
                      <button
                        className="btn btn-btm w-full mt-2 btn-top"
                        type="button"
                        value="Click to Open Popup"
                        onClick={togglePopup}
                      >
                        Upcoming
                      </button>
                    </div>
                  </ScrollReveal>
                </div>
                <div style={{ width: "14rem", padding: "12px" }} class="stake-card-custom col-sm-2 ml-auto mr-auto ">
                  <ScrollReveal config={anim.animate8}>
                    <div className="stake-card">
                      <div className="d-flex p-1 no-gutters justify-center">
                        <div className="col w-12 h-10 m-1 mr-5 flex items-center bg-white rounded-lg">
                          <img alt="..." src={car6} />
                        </div>
                        <div className="col px-2 ml-5">
                          <div className="head-text">Crypto (CRO)</div>
                          <div className="font-bold text-2xl">15.00%</div>
                        </div>
                      </div>
                      <button
                        className="btn btn-btm w-full mt-2 btn-top"
                        type="button"
                        value="Click to Open Popup"
                        onClick={togglePopup}
                      >
                        Upcoming
                      </button>
                    </div>
                  </ScrollReveal>
                </div>
                <div style={{ width: "14rem", padding: "12px" }} class="stake-card-custom col-sm-2 ml-auto mr-auto ">
                  <ScrollReveal config={anim.animate8}>
                    <div className="stake-card">
                      <div className="d-flex p-1 no-gutters justify-center">
                        <div className="col w-12 h-10 m-1 mr-4 flex items-center bg-white rounded-lg">
                          <img alt="..." src={car7} />
                        </div>
                        <div className="col px-2 ml-4">
                          <div className="head-text">xDai (STAKE)</div>

                          <div className="font-bold text-2xl">15.00%</div>
                        </div>
                      </div>
                      <button
                        className="btn btn-btm w-full mt-2 btn-top"
                        type="button"
                        value="Click to Open Popup"
                        onClick={togglePopup}
                      >
                        Upcoming
                      </button>
                    </div>
                  </ScrollReveal>
                </div>
                <div style={{ width: "14rem", padding: "12px" }} class="stake-card-custom col-sm-2 ml-auto mr-auto ">
                  <ScrollReveal config={anim.animate8}>
                    <div className="stake-card">
                      <div className="d-flex p-1 no-gutters justify-center">
                        <div className="col w-12 h-10 mr-4 m-1 flex items-center bg-white rounded-lg">
                          <img alt="..." src={car8} />
                        </div>
                        <div className="col px-2 ml-4 text">
                          <div className="head-text">Avalanche (AVAX)</div>
                          <div className="font-bold text-2xl">15.00%</div>
                        </div>
                      </div>
                      <button
                        className="btn btn-btm w-full mt-2 btn-top"
                        type="button"
                        value="Click to Open Popup"
                        onClick={togglePopup}
                      >
                        Upcoming
                      </button>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </div> */}
            <div className="row no-gutters -ml-1 -mr-1">
              {/* <ScrollReveal config={anim.animate8}>
                <div className="col w-full sm:w-6/12 md:w-3/12 py-1 sm:p-1">
                  <div className="card w-full h-full card-body text-center rounded-lg p-3 bg-[#F8FAFD] border-blue-100 hover:border-blue-300 hover:shadow-lg transition-colors transition-colors border-2">
                    <div className="row no-gutters justify-center">
                      <div className="col w-14 flex items-center bg-white rounded-lg">
                        <img alt="..." src={car1} />
                      </div>
                      <div className="col px-2">
                        <div className="head-text">Cosmos (ATOM)</div>
                        <div className="font-bold text-2xl">15.00%</div>
                      </div>
                    </div>
                    <button
                      className="btn is-primary w-full mt-2"
                      type="button"
                      value="Click to Open Popup"
                      onClick={togglePopup}
                    >
                      Stake
                    </button>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal config={anim.animate8}>
                <div className="col w-full sm:w-6/12 md:w-3/12 py-1 sm:p-1">
                  <div className="card w-full h-full card-body text-center rounded-lg p-3 bg-[#F8FAFD] border-blue-100 hover:border-blue-300 hover:shadow-lg transition-colors transition-colors border-2">
                    <div className="row no-gutters justify-center">
                      <div className="col w-14 flex items-center bg-white rounded-lg">
                        <img alt="..." src={car4} />
                      </div>
                      <div className="col px-2">
                        <div className="head-text">Polkadot (DOT)</div>
                        <div className="font-bold text-3xl">N/A</div>
                      </div>
                    </div>

                    <button className="btn is-primary w-full mt-2">Stake</button>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal config={anim.animate8}>
                <div className="col w-full sm:w-6/12 md:w-3/12 py-1 sm:p-1">
                  <div className="card w-full h-full card-body text-center rounded-lg p-3 bg-[#F8FAFD] border-blue-100 hover:border-blue-300 hover:shadow-lg transition-colors transition-colors border-2">
                    <div className="row no-gutters justify-center">
                      <div className="col w-14 flex items-center bg-white rounded-lg">
                        <img alt="..." src={car3} />
                      </div>
                      <div className="col px-2">
                        <div className="head-text">Terra (LUNA)</div>
                        <div className="font-bold text-3xl">15.00%</div>
                      </div>
                    </div>

                    <button className="btn is-primary w-full mt-2">Stake</button>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal config={anim.animate8}>
                <div className="col w-full sm:w-6/12 md:w-3/12 py-1 sm:p-1">
                  <div className="card w-full h-full card-body text-center rounded-lg p-3 bg-[#F8FAFD] border-blue-100 hover:border-blue-300 hover:shadow-lg transition-colors transition-colors border-2">
                    <div className="row no-gutters justify-center">
                      <div className="col w-14 flex items-center bg-white rounded-lg">
                        <img alt="..." src={car4} />
                      </div>
                      <div className="col px-2">
                        <div className="head-text" >Cosmos (ATOM)</div>
                        <div className="font-bold text-3xl">15.00%</div>
                      </div>
                    </div>
                    <button className="btn is-primary w-full mt-2">Stake</button>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal config={anim.animate8}>
                <div className="col w-full sm:w-6/12 md:w-3/12 py-1 sm:p-1">
                  <div className="card w-full h-full card-body text-center rounded-lg p-3 bg-[#F8FAFD] border-blue-100 hover:border-blue-300 hover:shadow-lg transition-colors transition-colors border-2">
                    <div className="row no-gutters justify-center">
                      <div className="col w-14 flex items-center bg-white rounded-lg">
                        <img alt="..." src={car5} />
                      </div>
                      <div className="col px-2">
                        <div className="head-text">Kusama (KSM)</div>
                        <div className="font-bold text-3xl">15.00%</div>
                      </div>
                    </div>

                    <button className="btn w-b w-full mt-2">Upcoming</button>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal config={anim.animate8}>
                <div className="col w-full sm:w-6/12 md:w-3/12 py-1 sm:p-1">
                  <div className="card w-full h-full card-body text-center rounded-lg p-3 bg-[#F8FAFD] border-blue-100 hover:border-blue-300 hover:shadow-lg transition-colors transition-colors border-2">
                    <div className="row no-gutters justify-center">
                      <div className="col w-14 flex items-center bg-white rounded-lg">
                        <img alt="..." src={car6} />
                      </div>
                      <div className="col px-2">
                        <div>Crypto (CRO)</div>
                        <div className="font-bold text-3xl">15.00%</div>
                      </div>
                    </div>

                    <button className="btn w-b w-full mt-2">Upcoming</button>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal config={anim.animate8}>
                <div className="col w-full sm:w-6/12 md:w-3/12 py-1 sm:p-1">
                  <div className="card w-full h-full card-body text-center rounded-lg p-3 bg-[#F8FAFD] border-blue-100 hover:border-blue-300 hover:shadow-lg transition-colors transition-colors border-2">
                    <div className="row no-gutters justify-center">
                      <div className="col w-14 flex items-center bg-white rounded-lg">
                        <img alt="..." src={car7} />
                      </div>
                      <div className="col px-2">
                        <div>xDai (STAKE)</div>
                        <div className="font-bold text-3xl">15.00%</div>
                      </div>
                    </div>

                    <button className="btn w-b w-full mt-2">MAINNET Active</button>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal config={anim.animate8}>
                <div className="col w-full sm:w-6/12 md:w-3/12 py-1 sm:p-1">
                  <div className="card w-full h-full card-body text-center rounded-lg p-3 bg-[#F8FAFD] border-blue-100 hover:border-blue-300 hover:shadow-lg transition-colors transition-colors border-2">
                    <div className="row no-gutters justify-center">
                      <div className="col w-14 flex items-center bg-white rounded-lg">
                        <img alt="..." src={car8} />
                      </div>
                      <div className="col px-2">
                        <div>Avalanche (AVAX)</div>
                        <div className="font-bold text-3xl">15.00%</div>
                      </div>
                    </div>

                    <button className="btn w-b w-full mt-2">TESTNET Active</button>
                  </div>
                </div>
              </ScrollReveal> */}
              {/* ------------------------------------------View-More---- */}
              {/* {ViewCards ? (
                <>
                  <div className="col w-full sm:w-6/12 md:w-3/12 py-1 sm:p-1">
                    <div className="card w-full h-full card-body text-center rounded-lg p-3 bg-[#F8FAFD] border-blue-100 hover:border-blue-300 hover:shadow-lg transition-colors transition-colors border-2">
                      <div className="row no-gutters justify-center">
                        <div className="col w-14 flex items-center bg-white rounded-lg">
                          <img alt="..." src={car5} />
                        </div>
                        <div className="col px-2">
                          <div>Fantom (FTM)</div>
                          <div className="font-bold text-3xl">15.00%</div>
                        </div>
                      </div>

                      <button className="btn is-primary w-full mt-2">Stake</button>
                    </div>
                  </div>

                  <div className="col w-full sm:w-6/12 md:w-3/12 py-1 sm:p-1">
                    <div className="card w-full h-full card-body text-center rounded-lg p-3 bg-[#F8FAFD] border-blue-100 hover:border-blue-300 hover:shadow-lg transition-colors transition-colors border-2">
                      <div className="row no-gutters justify-center">
                        <div className="col w-14 flex items-center bg-white rounded-lg">
                          <img alt="..." src={car6} />
                        </div>
                        <div className="col px-2">
                          <div>Fantom (FTM)</div>
                          <div className="font-bold text-3xl">15.00%</div>
                        </div>
                      </div>

                      <button className="btn is-primary w-full mt-2">Stake</button>
                    </div>
                  </div>

                  <div className="col w-full sm:w-6/12 md:w-3/12 py-1 sm:p-1">
                    <div className="card w-full h-full card-body text-center rounded-lg p-3 bg-[#F8FAFD] border-blue-100 hover:border-blue-300 hover:shadow-lg transition-colors transition-colors border-2">
                      <div className="row no-gutters justify-center">
                        <div className="col w-14 flex items-center bg-white rounded-lg">
                          <img alt="..." src={car7} />
                        </div>
                        <div className="col px-2">
                          <div>Fantom (FTM)</div>
                          <div className="font-bold text-3xl">15.00%</div>
                        </div>
                      </div>

                      <button className="btn is-primary w-full mt-2">Stake</button>
                    </div>
                  </div>

                  <div className="col w-full sm:w-6/12 md:w-3/12 py-1 sm:p-1">
                    <div className="card w-full h-full card-body text-center rounded-lg p-3 bg-[#F8FAFD] border-blue-100 hover:border-blue-300 hover:shadow-lg transition-colors transition-colors border-2">
                      <div className="row no-gutters justify-center">
                        <div className="col w-14 flex items-center bg-white rounded-lg">
                          <img alt="..." src={car8} />
                        </div>
                        <div className="col px-2">
                          <div>Fantom (FTM)</div>
                          <div className="font-bold text-3xl">15.00%</div>
                        </div>
                      </div>

                      <button className="btn is-primary w-full mt-2">Stake</button>
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
              {/* ------------------------------------------View-More---- */}
              {/* </div>
            {ViewCards ? (
              ""
            ) : (
              <ScrollReveal config={anim.animate11}>
                <div className="mt-4 text-center" onClick={() => setViewCards(true)}>
                  <div className="btn is-primary is-expanded">View More</div>
                </div>
              </ScrollReveal>
            )} */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
