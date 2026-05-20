import React, { useEffect, useState } from "react";
import png from '../assets/1.png'
import ballon1 from '../assets/balloon1.png'
import ballon2 from '../assets/balloon2.png'
import decorate from '../assets/decorate.png'
import decoFlowers from '../assets/decorate_flower.png'
import decoHeart from '../assets/heart.png'
import hat from '../assets/hat.png'
import smileIcon from '../assets/smiley_icon.png'
import { Link } from "react-router";
import BookCanvas from "../components/BookCanvas";
import SmallLetter from "../components/SmallLetter";
import sophia from "../assets/kmj.jpg";
import meong from "../assets/mewmew.gif";

const Home = () => {

    const [Active, SetActive] = useState(true)
    return (
        <>
            <div id="wrapper">
                <div className="flag__birthday">
                    <img src={png} alt="" width="350" className="flag__left" />
                    <img src={png} alt="" width="350" className="flag__right" />
                </div>

                <div className="content">
                    <div className="left">
                        <div className="title">
                            <h1 className="happy">
                                <span style={{ "--t": "4s" }}>H</span>
                                <span style={{ "--t": "4.2s" }}>a</span>
                                <span style={{ "--t": "4.4s" }}>p</span>
                                <span style={{ "--t": "4.6s" }}>p</span>
                                <span style={{ "--t": "4.8s" }}>y</span>
                            </h1>
                            <h1 className="birthday">
                                <span style={{ "--t": "5s" }}>B</span>
                                <span style={{ "--t": "5.2s" }}>i</span>
                                <span style={{ "--t": "5.4s" }}>r</span>
                                <span style={{ "--t": "5.6s" }}>t</span>
                                <span style={{ "--t": "5.8s" }}>h</span>
                                <span style={{ "--t": "6s" }}>d</span>
                                <span style={{ "--t": "6.2s" }}>a</span>
                                <span style={{ "--t": "6.4s" }}>y</span>
                            </h1>
                            <div className="hat">
                                <img src={hat} alt="" width="100" />
                            </div>
                        </div>

                    </div>

                    <div className="right">
                        <div className="box__account">
                            <div className="image">
                                <img src={sophia} alt="" />
                            </div>
                            <div className="name">
                                <i className="fa-solid fa-heart"></i>
                                <span>Sophia</span>
                                <i className="fa-solid fa-heart"></i>
                            </div>
                            <div className="balloon_one">
                                <img width="200px" src={ballon1} alt="" />
                            </div>
                            <div className="balloon_two">
                                <img width="150px" src={ballon2} alt="" />
                            </div>
                        </div>

                        {/* <div className="cricle">
                            <div className="text__cricle">
                                {["h", "a", "p", "p", "y", "-", "b", "i", "r", "t", "h", "d", "a", "y", "-"].map(
                                    (char, i) => (
                                        <span key={i} style={{ "--i": i + 1 }}>
                                            {char}
                                        </span>
                                    )
                                )}


                            </div>
                            <i className="fa-solid fa-heart"></i>
                        </div> */}
                    </div>
                </div>

                {[1, 2, 3, 4, 5].map((n, i) => (
                    <div key={i} className={`decorate_star star${n}`} style={{ "--t": `${15 + i * 0.2}s` }}></div>
                ))}

                <div className="decorate_flower--one" style={{ "--t": "15s" }}>
                    <img width="20" src={decoHeart} alt="" />
                </div>
                <div className="decorate_flower--two" style={{ "--t": "15.3s" }}>
                    <img width="20" src={decoHeart} alt="" />
                </div>
                <div className="decorate_flower--three" style={{ "--t": "15.6s" }}>
                    <img width="20" src={decoHeart} alt="" />
                </div>

                <div className="decorate_bottom">
                    <img src={decorate} alt="" width="100" />
                </div>

                <div className="decorate_bottom2">
                    <img src={meong} alt="" width="100" />
                </div>

                <div className="smiley__icon">
                    <img src={smileIcon} alt="" width="50" />
                </div>

                <section className="smallLetter absolute md:-bottom-26 -bottom-20 md:left-[45%] left-[50%] -translate-x-1/2" style={{ "--t": "15.6s" }}>
                    <SmallLetter />

                </section>
            </div>
        </>
    );
};

export default Home;
