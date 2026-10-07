import React, { useState } from "react";
import { Countdown } from "./components/Countdown";
import { MobileInvitation } from "./components/MobileInvitation";
import { RSVPModal } from "./components/RSVPModal";

export function App() {
  const [isRSVPModalOpen, setIsRSVPModalOpen] = useState(false);

  const handleRSVPSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsRSVPModalOpen(true);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>M ◦ A</title>

        {/* Tailwind CSS & Fonts externas */}
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Montserrat:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />

        <style>{`
          body {
            background-color: #F7F4EE;
            color: #2C2C2C;
            font-family: 'Montserrat', sans-serif;
          }
          .sketch-border {
            border: 1px solid rgba(74, 93, 78, 0.2);
            border-radius: 20px;
          }
          .sketch-shadow {
            box-shadow: 0 10px 25px -5px rgba(74, 93, 78, 0.08);
          }
          .font-cursive { font-family: 'Alex Brush', cursive; }
          .font-serif { font-family: 'Cormorant Garamond', serif; }

          .desktop-invitation { display: none; }

            body { background: #f4f1e9; color: #302f28; }
            .mobile-invitation {
              --mobile-paper: #f4f1e9;
              --mobile-ink: #292a22;
              --mobile-olive: #666640;
              --mobile-muted: #88877b;
              display: block;
              min-height: 100vh;
              background: var(--mobile-paper);
              color: var(--mobile-ink);
              font-family: 'Cormorant Garamond', serif;
              padding-bottom: 56px;
            }
            .mobile-content { width: 100%; max-width: 520px; margin: 0 auto; overflow: hidden; }
            .mobile-hero {
              position: relative;
              display: flex;
              flex-direction: column;
              align-items: center;
              padding: max(72px, env(safe-area-inset-top)) 22px 30px;
              text-align: center;
            }
            .mobile-kicker, .mobile-date, .mobile-section-heading > p,
            .mobile-program li h3, .mobile-transport-times > div > p,
            .mobile-countdown-wrap .countdown-card > div:first-child > p,
            .mobile-countdown-wrap .countdown-card .grid > div > span:last-child {
              color: var(--mobile-muted);
              font-family: 'Montserrat', sans-serif;
              font-size: 11px;
              font-weight: 500;
              letter-spacing: .16em;
              line-height: 1.6;
              text-transform: uppercase;
            }
            .mobile-kicker { margin: 0 0 18px; color: var(--mobile-olive); font-size: 13px; }
            .mobile-names {
              margin: 0;
              color: var(--mobile-ink);
              font-family: 'Alex Brush', cursive;
              font-size: 57px;
              font-weight: 400;
              line-height: .86;
            }
            .mobile-names span { color: var(--mobile-olive); font-family: 'Cormorant Garamond', serif; font-size: .55em; font-style: italic; }
            .mobile-hero-art { width: min(100%, 355px); height: auto; flex: 1 1 auto; min-height: 300px; max-height: 445px; margin: 12px auto 22px; color: var(--mobile-ink); }
            .mobile-content img { display: block; max-width: 100%; height: auto; }
            .mobile-hero-photo { width: 100%; height: auto; object-fit: contain; object-position: center; }
            .mobile-flower-image { width: min(78%, 280px); margin: 8px auto 0; }
            .mobile-drink-photo { width: min(100%, 520px); margin: 0 auto; }
            .mobile-place-photo { width: min(100%, 520px); margin: 0 auto 14px; }
            .mobile-disco-photo { width: 100%; margin: 0 auto; }
            .mobile-star, .mobile-flower { position: absolute; color: var(--mobile-olive); font-family: 'Cormorant Garamond', serif; font-size: 34px; line-height: 1; }
            .mobile-star-one { top: 44px; left: 28px; }
            .mobile-star-two { right: 20px; bottom: 52px; font-size: 43px; }
            .mobile-date { margin: 0 34px; color: var(--mobile-olive); font-size: 12px; }
            .mobile-countdown-wrap { position: relative; padding: 4px 0 28px; text-align: center; }
            .mobile-garland { display: block; width: 100%; height: auto; max-height: 130px; margin: -8px auto 30px; color: var(--mobile-olive); stroke: currentColor; stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; }
            .mobile-countdown-wrap .countdown-card {
              margin: 0 !important;
              padding: 0 20px !important;
              border: 0 !important;
              border-radius: 0 !important;
              background: transparent !important;
              box-shadow: none !important;
            }
            .mobile-countdown-wrap .countdown-card > div:first-child { margin-bottom: 20px; }
            .mobile-countdown-wrap .countdown-card > div:first-child > svg { display: none; }
            .mobile-countdown-wrap .countdown-card h2,
            .mobile-section-heading h2,
            .mobile-story h2,
            .mobile-rsvp-section h2 {
              margin: 0;
              color: var(--mobile-ink);
              font-family: 'Alex Brush', cursive;
              font-size: 42px;
              font-weight: 400;
              line-height: 1.1;
            }
            .mobile-countdown-wrap .countdown-card > div:first-child > p { margin-top: 8px; font-size: 0; }
            .mobile-countdown-wrap .countdown-card > div:first-child > p::after { content: 'Hasta el 25 de septiembre de 2027'; display: block; font-size: 11px; }
            .mobile-countdown-wrap .countdown-card > div:nth-child(2) { gap: 4px; margin: 22px 0 28px; }
            .mobile-countdown-wrap .countdown-card .grid > div {
              padding: 0 !important;
              border: 0 !important;
              border-radius: 0 !important;
              background: transparent !important;
            }
            .mobile-countdown-wrap .countdown-card .grid > div > span:first-child { color: var(--mobile-ink); font-size: 31px; font-weight: 400; line-height: 1.2; }
            .mobile-countdown-wrap .countdown-card .grid > div > span:last-child { display: block; margin-top: 7px; font-size: 10px; letter-spacing: .11em; }
            .mobile-countdown-wrap .countdown-card > div:last-child { margin-top: 0; }
            .mobile-countdown-wrap .countdown-card button {
              min-height: 52px;
              padding: 12px 18px;
              border-radius: 0;
              background: var(--mobile-olive);
              box-shadow: none;
              color: #fffdf6;
              font-size: 12px;
              letter-spacing: .14em;
            }
            .mobile-toast-art { display: block; width: 170px; height: auto; margin: 56px auto 18px; color: var(--mobile-olive); }
            .mobile-story { position: relative; padding: 34px 24px 48px; text-align: center; }
            .mobile-story h2 { margin: 0 0 20px; font-size: 46px; }
            .mobile-story > p { max-width: 430px; margin: 0 auto 28px; color: #706e64; font-size: 18px; line-height: 1.55; }
            .mobile-gallery { overflow: hidden; width: 100%; }
            .mobile-gallery-track { display: flex; width: max-content; animation: mobile-gallery-scroll 48s linear infinite; }
            .mobile-gallery:hover .mobile-gallery-track { animation-play-state: paused; }
            .mobile-gallery-group { display: flex; flex: none; gap: 12px; padding-right: 12px; }
            .mobile-gallery img { width: min(78vw, 320px); height: auto; aspect-ratio: 4 / 3; object-fit: cover; }
            @keyframes mobile-gallery-scroll { to { transform: translateX(-50%); } }
            .mobile-flower-one { top: 58px; left: 22px; transform: rotate(-15deg); }
            .mobile-venues { padding: 16px 16px 30px; }
            .mobile-section-heading { position: relative; padding: 12px 10px 34px; text-align: center; }
            .mobile-section-heading .mobile-star { top: 0; left: 20%; }
            .mobile-section-heading .mobile-flower { right: 4%; bottom: 31px; }
            .mobile-section-heading h2 { margin: 0; font-size: 45px; }
            .mobile-section-heading > p { margin: 8px 0 0; font-size: 12px; }
            .mobile-venue-card {
              margin: 0 2px;
              padding: 30px 20px 26px;
              border: 1px solid rgba(102, 102, 64, .15);
              border-radius: 8px;
              background: rgba(255, 255, 255, .42);
              text-align: center;
            }
            .mobile-script-label { margin: 0 0 10px; color: var(--mobile-ink); font-family: 'Alex Brush', cursive; font-size: 28px; line-height: 1.1; }
            .mobile-venue-card h3 { margin: 0; color: #55554b; font-family: 'Montserrat', sans-serif; font-size: 19px; font-weight: 400; }
            .mobile-address { max-width: 330px; margin: 12px auto 16px; color: #88877b; font-size: 17px; line-height: 1.4; }
            .mobile-time { margin: 0 0 10px; color: var(--mobile-ink); font-size: 43px; font-style: italic; line-height: 1.1; }
            .mobile-venue-card a { display: inline-block; padding: 4px 0; color: var(--mobile-muted); font-family: 'Montserrat', sans-serif; font-size: 12px; letter-spacing: .13em; text-decoration: underline; text-underline-offset: 5px; text-transform: uppercase; }
            .mobile-hacienda-art { display: block; width: 100%; max-width: 390px; height: auto; margin: 54px auto 46px; color: var(--mobile-olive); }
            .mobile-program { padding: 10px 24px 28px; }
            .mobile-disco-art { display: block; width: calc(100% + 48px); height: auto; margin: 0 -24px 20px; color: var(--mobile-olive); }
            .mobile-program .mobile-section-heading { padding: 5px 0 30px; }
            .mobile-program ol { display: flex; flex-direction: column; gap: 29px; margin: 0; padding: 0; list-style: none; }
            .mobile-program li { display: grid; grid-template-columns: 54px minmax(0, 1fr); gap: 14px; align-items: start; }
            .mobile-program li time { padding-top: 2px; color: #a2a092; font-family: 'Montserrat', sans-serif; font-size: 12px; }
            .mobile-program li h3 { margin: 0 0 6px; color: #79786d; font-size: 12px; letter-spacing: .12em; }
            .mobile-program li p { margin: 0; color: #77756b; font-size: 18px; line-height: 1.5; }
            .mobile-feast-art { position: relative; min-height: 290px; padding: 24px 20px; }
            .mobile-feast-art .mobile-toast-art { width: min(100%, 380px); margin: 45px auto 54px; transform: scale(1.45); }
            .mobile-feast-art .mobile-scooter-art { width: 150px; margin: 0 auto; opacity: .75; }
            .mobile-cake-doodle { position: absolute; top: 3px; right: 12%; color: var(--mobile-olive); font-size: 38px; }
            .mobile-transport { padding: 5px 24px 36px; text-align: center; }
            .mobile-transport > .mobile-scooter-art { display: block; width: 145px; margin: 0 auto 12px; color: var(--mobile-olive); }
            .mobile-transport .mobile-section-heading { padding-bottom: 20px; }
            .mobile-transport-intro { margin: 0 auto 42px; color: #77756b; font-size: 18px; line-height: 1.55; }
            .mobile-transport-times { display: grid; gap: 32px; }
            .mobile-transport-times > div > p { margin: 0 0 5px; }
            .mobile-transport-times span { display: block; color: #77756b; font-size: 18px; line-height: 1.4; }
            .mobile-transport-times strong { display: block; margin-top: 3px; color: var(--mobile-ink); font-size: 42px; font-style: italic; font-weight: 400; line-height: 1.2; }
            .mobile-parking-note { margin: 34px -24px 0; padding: 20px 24px; background: rgba(255,255,255,.28); color: #77756b; font-size: 17px; line-height: 1.5; }
            .mobile-rsvp-section { scroll-margin-top: 20px; padding: 48px 24px 32px; background: #e9e6dc; text-align: center; }
            .mobile-rsvp-section h2 { font-size: 40px; }
            .mobile-rsvp-section > p:not(.mobile-script-label) { max-width: 320px; margin: 10px auto 24px; color: #77756b; font-size: 16px; line-height: 1.45; }
            .mobile-rsvp-section form { display: grid; gap: 15px; text-align: left; }
            .mobile-rsvp-section label { display: grid; gap: 7px; color: var(--mobile-olive); font-family: 'Montserrat', sans-serif; font-size: 11px; letter-spacing: .08em; text-transform: uppercase; }
            .mobile-rsvp-section input, .mobile-rsvp-section select, .mobile-rsvp-section textarea { width: 100%; border: 1px solid rgba(102,102,64,.2); border-radius: 3px; padding: 13px; background: #fbfaf6; color: var(--mobile-ink); font-family: 'Montserrat', sans-serif; font-size: 14px; letter-spacing: 0; text-transform: none; }
            .mobile-rsvp-section form > button { min-height: 50px; border: 0; background: var(--mobile-olive); color: white; font-family: 'Montserrat', sans-serif; font-size: 12px; letter-spacing: .12em; text-transform: uppercase; }
            .mobile-rsvp-section footer { display: grid; gap: 5px; margin-top: 36px; padding-top: 18px; border-top: 1px solid rgba(102,102,64,.18); color: var(--mobile-olive); font-family: 'Alex Brush', cursive; font-size: 27px; }
            .mobile-rsvp-section footer span { color: #88877b; font-family: 'Montserrat', sans-serif; font-size: 10px; letter-spacing: .12em; text-transform: uppercase; }
            .mobile-rsvp-fixed { position: fixed; z-index: 45; right: 0; bottom: 0; left: 0; display: flex; min-height: 54px; align-items: center; justify-content: center; padding: 10px 16px max(10px, env(safe-area-inset-bottom)); border-top: 1px solid rgba(102,102,64,.12); background: rgba(248,246,240,.96); color: var(--mobile-olive); font-family: 'Montserrat', sans-serif; font-size: 12px; letter-spacing: .16em; text-decoration: none; text-transform: uppercase; backdrop-filter: blur(10px); }

          @media (min-width: 768px) {
            .mobile-content { max-width: 760px; }
            .mobile-hero { padding-right: 48px; padding-left: 48px; }
            .mobile-hero-art { max-width: 410px; }
            .mobile-gallery img { width: min(42vw, 320px); }
            .mobile-venues { max-width: 700px; margin: 0 auto; }
            .mobile-venue-card { max-width: 570px; margin-right: auto; margin-left: auto; }
            .mobile-program { max-width: 620px; margin: 0 auto; }
            .mobile-dinner-art { display: block; width: min(100%, 520px); margin: 0 auto; }
            .mobile-transport, .mobile-rsvp-section { padding-right: 56px; padding-left: 56px; }
            .mobile-rsvp-section form { max-width: 560px; margin: 0 auto; }
            .mobile-rsvp-fixed { right: auto; left: 50%; width: min(100%, 760px); transform: translateX(-50%); border-right: 1px solid rgba(102,102,64,.12); border-left: 1px solid rgba(102,102,64,.12); }
          }
          @media (prefers-reduced-motion: reduce) {
            .mobile-gallery { overflow: visible; }
            .mobile-gallery-track { display: block; width: 100%; animation: none; }
            .mobile-gallery-group { display: grid; grid-template-columns: 1fr; gap: 12px; padding: 0; }
            .mobile-gallery-group[aria-hidden="true"] { display: none; }
            .mobile-gallery img { width: 100%; }
          }
        `}</style>
      </head>

      <body className="bg-[#F7F4EE] text-[#2C2C2C] antialiased selection:bg-[#4A5D4E] selection:text-white">
        <MobileInvitation
          onRSVPSubmit={handleRSVPSubmit}
        />

        {/* Modales dinámicos gestionados por estado */}
        <RSVPModal
          isOpen={isRSVPModalOpen}
          onClose={() => setIsRSVPModalOpen(false)}
        />
      </body>
    </html>
  );
}