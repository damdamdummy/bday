import React, { useState } from "react";
import "../BirthdayCard.css";

const BirthdayCard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasOpened, setHasOpened] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
        setHasOpened(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const letterClass = isOpen
        ? "small-card-letter--open"
        : hasOpened
            ? "small-card-letter--close"
            : "";

    return (
        <div className={`small-card-letter ${letterClass}`}>
            {/* Paper that flies up */}
            <div className="small-card-paper">
                {/* SVG decorations inside the card */}
                <svg
                    className="card-deco"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 350 300"
                    preserveAspectRatio="none"
                >
                    {/* Horizontal ruled lines */}
                    <line className="deco-line" x1="20" y1="60" x2="330" y2="60" stroke="#f4c2cc" strokeWidth="1" />
                    <line className="deco-line" x1="20" y1="80" x2="330" y2="80" stroke="#f4c2cc" strokeWidth="1" />
                    <line className="deco-line" x1="20" y1="100" x2="330" y2="100" stroke="#f4c2cc" strokeWidth="1" />
                    <line className="deco-line" x1="20" y1="120" x2="330" y2="120" stroke="#f4c2cc" strokeWidth="1" />
                    <line className="deco-line" x1="20" y1="140" x2="330" y2="140" stroke="#f4c2cc" strokeWidth="1" />
                    <line className="deco-line" x1="20" y1="160" x2="330" y2="160" stroke="#f4c2cc" strokeWidth="1" />
                    <line className="deco-line" x1="20" y1="180" x2="330" y2="180" stroke="#f4c2cc" strokeWidth="1" />
                    <line className="deco-line" x1="20" y1="200" x2="330" y2="200" stroke="#f4c2cc" strokeWidth="1" />
                    <line className="deco-line" x1="20" y1="220" x2="330" y2="220" stroke="#f4c2cc" strokeWidth="1" />
                    <line className="deco-line" x1="20" y1="240" x2="330" y2="240" stroke="#f4c2cc" strokeWidth="1" />
                    {/* Vertical margin line */}
                    <line className="deco-line" x1="45" y1="40" x2="45" y2="270" stroke="#f9a8b8" strokeWidth="1.5" />
                    {/* Corner sparkle dots */}
                    <circle className="deco-dot dot-1" cx="15" cy="15" r="3" fill="#d13852" />
                    <circle className="deco-dot dot-2" cx="335" cy="15" r="3" fill="#d13852" />
                    <circle className="deco-dot dot-3" cx="15" cy="285" r="3" fill="#d13852" />
                    <circle className="deco-dot dot-4" cx="335" cy="285" r="3" fill="#d13852" />
                    <circle className="deco-dot dot-5" cx="175" cy="15" r="2.5" fill="#f36363" />
                    <circle className="deco-dot dot-6" cx="175" cy="285" r="2.5" fill="#f36363" />
                </svg>

                {/* Close button */}
                {isOpen && (
                    <span className="small-card-paper-close" onClick={handleClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d13852" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </span>
                )}

                {/* Ribbon accent */}
                <div className="small-card-ribbon" />

                {/* Content */}
                <div className="small-card-paper-content">
                    <div className="card-title">🎂 Happy Birthday, Sophia!</div>
                    <div className="card-body">
                        Wishing you a day as bright and beautiful as you are.
                        May all your dreams bloom like flowers on this special day.
                        <br /><br />
                        With love &amp; warmest wishes 💕
                    </div>
                </div>
            </div>

            {/* Envelope */}
            <div className="small-card-envelope" onClick={!isOpen ? handleOpen : undefined}>
                <div className="small-card-envelope-paper" />
                <div className="small-card-envelope-flap" />
                <div className="small-card-envelope-detail" />
                <div className="small-card-envelope-fold" />
                <span className="small-card-envelope-label">Birthday Card 🎁</span>
            </div>
        </div>
    );
};

export default BirthdayCard;
