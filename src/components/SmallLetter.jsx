import React, { useState, useRef } from 'react';
import '../SmallLetter.css';
import arrow from "../assets/arrow.png";
import tap from "../assets/taplove.gif";
import klik from "../assets/klik.png";
import BookCanvas from "../components/BookCanvas";
import { createPortal } from 'react-dom';

const SmallLetter = () => {
    const [Active, SetActive] = useState(true)

    const [isOpen, setIsOpen] = useState(false);


    const letterRef = useRef(null);


    const handleToggleLetter = () => {
        const letterElement = letterRef.current;
        if (!letterElement) return;

        if (isOpen) {

            letterElement.classList.add('small-letter--close');
            setIsOpen(false);


            setTimeout(() => {
                letterElement.classList.remove('small-letter--close');
            }, 600);

        } else {

            letterElement.classList.remove('small-letter--close');

            setIsOpen(true);
        }
    };



    const handleCloseLetter = () => {
        const letterElement = letterRef.current;
        if (!letterElement) return;


        letterElement.classList.remove('small-letter--open');
        letterElement.classList.add('small-letter--close');
        setIsOpen(false);


        setTimeout(() => {
            letterElement.classList.remove('small-letter--close');
        }, 600);
    };


    const letterStateClass = isOpen ? 'small-letter--open' : '';



    return (
        <>
            {createPortal(
                <BookCanvas active={Active} setActive={SetActive} />,
                document.body
            )}
            <div
                className={`small-letter ${letterStateClass}`}
                ref={letterRef}
            >
                <div
                    className="small-envelope"
                    onClick={handleToggleLetter}
                >
                    <div className="small-envelope-flap"></div>
                    <div className="small-envelope-paper"></div>
                    <div className="small-envelope-detail"></div>
                </div>

                <div className="small-paper">
                    <div className="small-paper-content">
                        <div
                            className="small-paper-close"
                            onClick={handleCloseLetter}
                        >
                            x
                        </div>
                        <p className="text-justify text-sm"><b>21 May 2026</b><br />
                            Today is your day... <br />
                            Maaf ya aku cuma bisa nyiapin ini buat hari spesial kamu, hope you like it ♡ </p>

                        <div className="flex items-center justify-center gap-1">

                            <div
                                className="tap flex items-center justify-center cursor-pointer"
                                onClick={() => SetActive(!Active)}
                            >
                                <img src={klik} alt="Klik" width="100" />
                            </div>

                        </div>
                    </div>
                    <svg className="diary-deco" viewBox="0 0 100 100" preserveAspectRatio="none">

                        <line x1="5" y1="0" x2="5" y2="100" stroke="#E0DDB7" strokeWidth="1" className="diary-line left-line" />

                        <line x1="95" y1="0" x2="95" y2="100" stroke="#E0DDB7" strokeWidth="1" className="diary-line right-line" />


                        <line x1="0" y1="5" x2="100" y2="5" stroke="#E0DDB7" strokeWidth="0.5" className="diary-line top-line" />
                        <line x1="0" y1="95" x2="100" y2="95" stroke="#E0DDB7" strokeWidth="0.5" className="diary-line bottom-line" />


                        <circle cx="5" cy="10" r="0.5" fill="#E0DDB7" className="diary-dot dot-1" />
                        <circle cx="5" cy="20" r="0.5" fill="#E0DDB7" className="diary-dot dot-2" />
                        <circle cx="5" cy="30" r="0.5" fill="#E0DDB7" className="diary-dot dot-3" />
                        <circle cx="5" cy="40" r="0.5" fill="#E0DDB7" className="diary-dot dot-4" />
                        <circle cx="5" cy="50" r="0.5" fill="#E0DDB7" className="diary-dot dot-5" />
                        <circle cx="5" cy="60" r="0.5" fill="#E0DDB7" className="diary-dot dot-6" />
                        <circle cx="5" cy="70" r="0.5" fill="#E0DDB7" className="diary-dot dot-7" />
                        <circle cx="5" cy="80" r="0.5" fill="#E0DDB7" className="diary-dot dot-8" />
                        <circle cx="5" cy="90" r="0.5" fill="#E0DDB7" className="diary-dot dot-9" />
                    </svg>

                </div>
            </div >
        </>
    )
}

export default SmallLetter;