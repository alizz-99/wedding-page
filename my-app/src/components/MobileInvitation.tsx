import React from "react";
import { Countdown } from "./Countdown";

const mobileScriptFont = {
  fontFamily: '"Alex Brush", "Snell Roundhand", "Apple Chancery", cursive',
};

interface MobileInvitationProps {
  onRSVPSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

function Garland() {
  return (
    <svg aria-hidden="true" viewBox="0 0 420 115" fill="none" className="mobile-garland">
      <path d="M-12 18C74 114 170 104 220 52S344 4 432 78" />
      <path d="M-20 42C65 125 164 120 223 68S351 20 436 99" />
      {Array.from({ length: 13 }, (_, index) => (
        <g key={index} transform={`translate(${index * 35 - 8} ${24 + Math.sin(index / 2) * 35})`}>
          <path d="M0 0v8m-5 3 5-3 5 3-5 9-5-9Z" />
          <circle cx="0" cy="23" r="1.5" />
          <path d="M-8 22h-2m20 0h-2" />
        </g>
      ))}
    </svg>
  );
}

function HeroIllustration() {
  return (
    <svg aria-hidden="true" viewBox="0 0 360 390" fill="none" className="mobile-hero-art">
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2">
        <path d="M25 270c80-18 221-6 308 38M45 305c93-17 188-8 270 17" />
        <path d="M85 240c-2-56 5-113 25-154 13-27 41-53 59-50 24 4 39 37 37 73-1 34-14 66-8 107" />
        <path d="M106 116c8-45 32-76 58-77 19 0 34 20 38 47m-74-38c-8 36 2 70 16 86m35-128c18 27 27 48 26 78m-91 6c-4 48 3 78 15 105m47-116c-8 31-4 64 10 96" />
        <path d="M139 179c-18 17-29 38-33 64m42-49c-10 22-17 45-17 68m27-67c-2 25 1 46 9 63m-74 3c-7 29-8 49-1 68m104-63c6 24 8 43 5 61" />
        <path d="M125 241c15-16 26-24 40-20 12-10 23-8 31 5 13-3 21 2 24 15-7 13-19 19-32 16-12 10-23 11-34 3-13 6-23 1-29-10Z" />
        <path d="M137 236c4 10 10 16 18 18m12-30c-5 10-5 20 0 29m18-21c4 8 12 12 22 13m-45 8c-4 11-4 20 1 28m-12-31c-8 6-13 14-15 23m-11-2c5-3 9-7 11-13" />
        <path d="M152 264c-2 22 1 37 10 46 7-7 10-21 9-42m-22 45c5 12 18 15 29 5l-10-8m-19 4c-5 7-3 13 4 16 11 4 26 3 33-6" />
        <path d="M266 154v123m21-99v104m-8-99c-1-9 2-15 8-19 6 5 8 12 6 20m-35-12c-1-10 2-16 8-20 6 5 8 12 6 21" />
        <path d="M260 278c8 5 14 5 20 0m-1 8c8 5 14 5 20 0m-35 8 8-7m17 10 8-7" />
        <path d="M223 302c-3 17-3 31 1 43h16l-3-40c-1-7-10-9-14-3Zm5 3 9 1m-4 7v27" />
        <path d="M249 318h18l-4 18h-10l-4-18Zm3 0c0-8 4-12 8-12 5 0 8 4 8 12m-11 18v9m-7 0h14" />
        <path d="M54 336h72m-67-7 9-23 10 23m-4-14-8-1m-3 8 15 1m10 6 8-22 10 22m-5-14-8-1m-2 8 15 1" />
        <ellipse cx="155" cy="342" rx="34" ry="12" />
        <path d="M132 341c12-7 32-7 46 0m-36 4c9 4 20 4 29 0m-21-10 13 10m-49 9h111" />
        <path d="M36 125c8-12 17-12 25 0-7 12-17 12-25 0Zm279-72c8-12 17-12 25 0-7 12-17 12-25 0ZM49 201l3 6 7 1-5 5 1 7-6-4-6 4 1-7-5-5 7-1 3-6Zm238 157 3 5 6 1-5 4 1 6-5-3-5 3 1-6-5-4 6-1 3-5Z" />
        <path d="M224 215c7-8 17-7 21 2-4 8-14 10-21 2m10-12-1 27m-8-12h17" />
        <path d="M306 225c5-7 12-7 17 0-4 7-12 7-17 0Zm-16 58c4-5 9-5 13 0-3 5-9 5-13 0Z" />
      </g>
      <g fill="#b4ab55">
        <circle cx="135" cy="242" r="4" /><circle cx="167" cy="231" r="4" /><circle cx="192" cy="249" r="4" />
        <circle cx="153" cy="266" r="4" /><circle cx="184" cy="269" r="4" /><circle cx="268" cy="151" r="4" />
        <path d="M265 149c-4-12-2-19 2-22 5 5 5 13-2 22Zm21-1c-3-10-1-16 3-19 4 5 4 12-3 19Z" />
        <path d="M228 305v10h11v-10c-2-5-9-5-11 0Z" />
      </g>
    </svg>
  );
}

function ToastIllustration() {
  return (
    <svg aria-hidden="true" viewBox="0 0 190 115" fill="none" className="mobile-toast-art">
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <path d="M30 54c-8 2-13 8-10 13 3 5 12 3 20-3m110-8c8 2 13 8 10 13-3 5-12 3-20-3" />
        <path d="M51 15c-3 10 3 19 15 22l8 2-3 32m5-48c5 5 11 8 19 10l-4 38m-7-57c2 10 11 17 24 19l-5 38m-25-4c-3 13-11 21-22 28m33-23c-3 9-3 17 0 24m17-29c3 9 10 15 22 19m-63-59c12 2 27 6 43 13 9 4 15 4 21 0" />
        <path d="M38 82c25 15 82 17 113 0m-113 0 8 13c30 13 67 13 98 0l7-13" />
        <ellipse cx="61" cy="77" rx="12" ry="4" /><ellipse cx="127" cy="77" rx="12" ry="4" />
        <path d="M91 69V31m-8 2h16m-14-5h12m-12 0c-3-10-2-17 4-22 6 5 7 12 3 22m-4 16h2" />
        <path d="M51 94v12m90-12v12m-7-28h2m-59-1h2m36 3h2" />
      </g>
      <g fill="#b4ab55"><circle cx="94" cy="19" r="4" /><circle cx="96" cy="53" r="2" /><circle cx="93" cy="59" r="2" /></g>
    </svg>
  );
}

function HaciendaIllustration() {
  return (
    <svg aria-hidden="true" viewBox="0 0 390 155" fill="none" className="mobile-hacienda-art">
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <path d="M15 111c38-35 72-46 111-47 51-24 94-19 137-3 39 1 74 16 112 48M22 124c43-25 78-31 117-28 48-19 97-17 140-3 37 3 63 13 90 29" />
        <path d="M117 65V40l11-11 11 11v25m3 0V50l10-9 9 9v13m8-1V34l16-12 16 12v32m4 0V46l12-10 12 10v22m7-3V32l17-12 17 12v40m1 1V47l12-8 12 8v28" />
        <path d="M111 65h167m-150-8h12m10 0h12m18-11h16m11 0h14m12-2h14m-109-8h8m78-2h11m-123 32c41-13 113-13 162 1M83 112c18-10 35-13 54-14m89-2c22 2 44 7 67 17" />
        <path d="M52 135c9-22 21-35 36-44m-23 53c7-20 17-36 30-47m-41 48c-5-13-12-22-23-27m39 30c0-14 2-25 7-35" />
        <path d="M142 115v31m-5-24 5-9 5 9m-5 5v19m105-28v30m-6-22 6-11 6 11m-6 1v21m28-29v29m-5-20 5-10 5 10m-5 4v16" />
        <path d="M24 91c9-9 18-12 29-9m67-44c8-6 16-8 25-5m180 13c12-5 22-4 32 2m-207 62c35-8 70-7 103 3" />
      </g>
      <g fill="#b4ab55"><circle cx="193" cy="12" r="3" /><circle cx="304" cy="18" r="3" /><circle cx="78" cy="130" r="3" /></g>
    </svg>
  );
}

function DiscoIllustration() {
  return (
    <svg aria-hidden="true" viewBox="0 0 390 200" fill="none" className="mobile-disco-art">
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <path d="M0 26c71 57 134 69 195 0 61 69 124 57 195 0M0 51c71 57 134 69 195 0 61 69 124 57 195 0" />
        <path d="M195 0v65m-48-16 2 4 5 1-4 3 1 5-4-3-4 3 1-5-4-3 5-1 2-4Zm94 0 2 4 5 1-4 3 1 5-4-3-4 3 1-5-4-3 5-1 2-4Z" />
        <circle cx="195" cy="119" r="29" />
        <path d="M172 103h46m-51 10h56m-56 11h56m-51 10h46m-36-42v55m12-57v59m12-57v55" />
        <path d="m160 112-17-12m94 12 17-12m-84 42-11 14m67-14 11 14m-39-90-8-18m15 18 12-18m-10 81h-2m-38-10h-2m75 3h-2" />
        <path d="M319 144c15-14 33-15 48-6-10 2-19 8-26 18-8 10-19 13-29 8 11 0 17-7 20-14m-13-5-11-9m55 1 8-9" />
      </g>
      <g fill="#b4ab55"><circle cx="65" cy="82" r="3" /><circle cx="115" cy="103" r="3" /><circle cx="278" cy="91" r="3" /><circle cx="346" cy="68" r="3" /></g>
    </svg>
  );
}

function ScooterIllustration() {
  return (
    <svg aria-hidden="true" viewBox="0 0 180 100" fill="none" className="mobile-scooter-art">
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <circle cx="45" cy="73" r="15" /><circle cx="137" cy="73" r="15" />
        <path d="M31 73c2-9 8-15 16-15s14 6 16 15m60 0c2-9 8-15 16-15s14 6 16 15" />
        <path d="M45 72c10-5 17-19 25-27 8-8 25-10 38-4l16 11 14 1 4 10-11 2-9-11-32 1-13 25H58m53-34 18-4 8 4m-6-5-3-16 9-3m-11 3 11-3m-75 22h23m-18 5c7 4 14 5 22 4" />
        <path d="M90 44c8 1 15 0 20-4m-58 36h78m-9-20 5 16m-69-1-5 7m67-1 5 6" />
        <path d="M69 37c-5-7-3-14 3-18 5-3 11-1 14 4m-18-4c-3-8-1-13 4-16 5 4 6 9 2 16m6 4c2-7 7-10 12-8 1 6-3 10-12 8m-15 1c-8-1-12-5-12-10 6-3 11 0 12 10Z" />
        <path d="M72 32c6 2 11 5 15 10m-22-9-7 10m23-12 7-8" />
        <path d="M82 64c3 3 7 4 12 4m-28-1 6 6m55-13 6 2" />
      </g>
      <path d="M87 52c4-5 9-4 10 1-3 5-7 5-10-1Z" fill="#b4ab55" />
      <g fill="#b4ab55"><circle cx="67" cy="21" r="2.5" /><circle cx="74" cy="12" r="2.5" /><circle cx="84" cy="24" r="2.5" /><circle cx="55" cy="24" r="2.5" /></g>
    </svg>
  );
}

function DinnerIllustration() {
  return (
    <svg aria-hidden="true" viewBox="0 0 390 220" fill="none" className="mobile-dinner-art">
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
        <path d="M20 144c-4-27 1-45 14-49 16-5 27 9 24 34m298 15c4-27-1-45-14-49-16-5-27 9-24 34M35 96c-4-14 2-24 13-24 12 0 18 12 15 25m279-1c4-14-2-24-13-24-12 0-18 12-15 25" />
        <path d="M37 118c10-8 22-8 32 1m250-1c10-9 22-9 32-1M45 137v52m300-52v52" />
        <path d="M115 100c-7-21 1-39 17-42 18-4 31 13 27 36m74 6c-7-21 1-39 17-42 18-4 31 13 27 36" />
        <path d="M128 62c7-9 21-9 29-1m83 0c7-9 21-9 29-1M119 88c8 7 16 8 25 6m96 0c8 2 17 0 25-7" />
        <path d="M105 106c-18 5-27 18-29 34m80-33c19 5 28 18 31 33m-82-33c9 11 18 16 31 16 12 0 21-5 31-16m42 0c-18 5-27 18-29 34m80-33c19 5 28 18 31 33m-82-33c9 11 18 16 31 16 12 0 21-5 31-16" />
        <ellipse cx="195" cy="145" rx="169" ry="38" />
        <path d="M27 147c3 26 10 40 22 49 84 31 208 31 292 0 12-9 19-23 22-49m-246 42 2 20m152-20-2 20" />
        <ellipse cx="102" cy="141" rx="23" ry="8" /><ellipse cx="287" cy="141" rx="23" ry="8" />
        <ellipse cx="150" cy="149" rx="20" ry="7" /><ellipse cx="241" cy="149" rx="20" ry="7" />
        <path d="M195 126v-54m-20 4h40m-34-7c-2-10 2-16 8-20 6 5 7 12 4 20m9 0c-2-10 2-16 8-20 6 5 7 12 4 20m-28 39h40m-23 0v-18m7 18v-18" />
        <path d="M75 118c-8-9-15-12-22-10m261 10c8-9 15-12 22-10m-185-5 4-11m79 11-4-11m-93 57h4m138 0h4" />
      </g>
      <g fill="#b4ab55"><circle cx="195" cy="54" r="3" /><circle cx="189" cy="91" r="2" /><circle cx="201" cy="91" r="2" /></g>
    </svg>
  );
}

export function MobileInvitation({ onRSVPSubmit }: MobileInvitationProps) {
  return (
    <div className="mobile-invitation">
      <a className="mobile-rsvp-fixed" href="#mobile-rsvp">RSVP</a>
      <div className="mobile-content">
        <section className="mobile-hero">
          <span className="mobile-star mobile-star-one">☆</span>
          <p className="mobile-kicker">Ezkontzera goaz</p>
          <h1 className="mobile-names" style={mobileScriptFont}>Maddalen <span>◦</span><br />Ainhoa</h1>
          <img className="mobile-hero-photo mobile-flower-image" src="./imgs/flor.png" alt="" />
          <span className="mobile-star mobile-star-two">☆</span>
          <p className="mobile-date">2027 uztailak 9</p>
        </section>
        <section className="mobile-countdown-wrap">
          <img className="mobile-hero-photo mobile-disco-photo" src="./imgs/luces.png" alt="" />
          <Countdown targetDate="July 9, 2027 18:00:00" mobile />
          <img className="mobile-hero-photo mobile-drink-photo" src="./imgs/topa.png" alt="" />
        </section>

        <section className="mobile-story">
          <span className="mobile-flower mobile-flower-one">♡</span>
          <h2 style={mobileScriptFont}>azkenean badugu eguna!</h2>
          <p>(algo escrito aqui)</p>
          <div className="mobile-gallery" role="region" aria-label="Galería de fotos">
            <div className="mobile-gallery-track">
              <div className="mobile-gallery-group">
                <img src="./gallery/pedida1.jpeg" alt="Una pareja celebra su boda" />
                <img src="./gallery/pedida2.jpeg" alt="Una pareja comparte un momento especial" />
                <img src="./gallery/pedida3.jpeg" alt="Una pareja disfruta de su celebración" />
                <img src="./gallery/pedida4.jpeg" alt="Una celebración de boda al aire libre" />
                <img src="./gallery/pedida5.jpeg" alt="Una pareja sonríe en su boda" />
                <img src="./gallery/pedida6.jpeg" alt="Una pareja feliz en su boda" />
              </div>
              <div className="mobile-gallery-group" aria-hidden="true">
                <img src="./gallery/pedida1.jpeg" alt="" />
                <img src="./gallery/pedida2.jpeg" alt="" />
                <img src="./gallery/pedida3.jpeg" alt="" />
                <img src="./gallery/pedida4.jpeg" alt="" />
                <img src="./gallery/pedida5.jpeg" alt="" />
                <img src="./gallery/pedida6.jpeg" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="mobile-venues">
          <header className="mobile-section-heading">
            <span className="mobile-star">☆</span>
            <h2 style={mobileScriptFont}>Lekua</h2>
            <p>Non ospatuko dugu</p>
            <span className="mobile-flower">❀</span>
          </header>
          {/* <article className="mobile-venue-card">
            <p className="mobile-script-label" style={mobileScriptFont}>Ceremonia</p>
            <h3>Parroquia de Santa Ana</h3>
            <p className="mobile-address">C/ Vázquez de Leca, 1 · Triana, Sevilla</p>
            <p className="mobile-time">18:30</p>
            <button onClick={() => onMapClick("Parroquia de Santa Ana, C/ Vázquez de Leca, 1, Triana, Sevilla")}>Ver en el mapa</button>
          </article> */}
          <img className="mobile-hero-photo mobile-place-photo" src="./imgs/sitio.png" alt="Ilustración de Hika Txakolindegia" />
          <article className="mobile-venue-card">
            <p className="mobile-script-label" style={mobileScriptFont}>Harrera</p>
            <h3>Hika Txakolindegia</h3>
            <p className="mobile-address">Otelarre auzoa 40, 20150 Billabona, Gipuzkoa</p>
            <p className="mobile-time">18:00</p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Hika Txakolindegia, Otelarre auzoa 40, 20150 Billabona, Gipuzkoa")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Mapan ikusi
            </a>
          </article>
        </section>

        <section className="mobile-program">
          <img className="mobile-hero-photo mobile-disco-photo" src="./imgs/disco.png" alt="" />
          <header className="mobile-section-heading">
            <h2 style={mobileScriptFont}>Programa del día</h2>
            <p>Lo que tenemos preparado</p>
          </header>
          <ol>
            <li><time>18:00</time><div><h3>Llegada a Santa Ana</h3><p>Nos vemos a las puertas de la parroquia, en pleno corazón de Triana</p></div></li>
            <li><time>18:30</time><div><h3>Ceremonia</h3><p>Nos daremos el sí en Santa Ana, la iglesia más antigua de Sevilla</p></div></li>
            <li><time>20:30</time><div><h3>Cóctel de bienvenida</h3><p>Copas y aperitivo bajo los naranjos de la hacienda</p></div></li>
            <li><time>22:00</time><div><h3>Cena</h3><p>Cena servida en el patio empedrado, al fresco de la noche</p></div></li>
            <li><time>00:30</time><div><h3>Barra libre y baile</h3><p>Se abre la pista y la noche sevillana hace el resto</p></div></li>
            <li><time>04:00</time><div><h3>Resopón</h3><p>Jamón ibérico, quesos y montaditos para cerrar la noche</p></div></li>
          </ol>
        </section>

        <section className="mobile-feast-art">
          <span className="mobile-cake-doodle">♡</span>
          <DinnerIllustration />
        </section>

        <section className="mobile-transport">
          <ScooterIllustration />
          <header className="mobile-section-heading">
            <h2 style={mobileScriptFont}>Transporte</h2>
            <p>Cómo llegar</p>
          </header>
          <p className="mobile-transport-intro">Habrá autobuses desde el centro de Sevilla hasta la hacienda, y de vuelta al final de la noche. El trayecto es de unos 25 minutos.</p>
          <div className="mobile-transport-times">
            <div><p>Salida de autobuses</p><span>Sevilla — Plaza de Cuba (junto al puente de San Telmo)</span><strong>19:45</strong></div>
            <div><p>Vuelta</p><strong>05:00</strong></div>
          </div>
          <p className="mobile-parking-note">Hay poco aparcamiento en la hacienda: os recomendamos venir en el autobús.</p>
        </section>

        <section id="mobile-rsvp" className="mobile-rsvp-section">
          <p className="mobile-script-label" style={mobileScriptFont}>Nos encantará verte</p>
          <h2 style={mobileScriptFont}>¿Vienes a celebrar?</h2>
          <p>Confírmanos tu asistencia antes del 1 de agosto de 2027.</p>
          <form onSubmit={onRSVPSubmit}>
            <label>Nombre completo<input type="text" required placeholder="Tu nombre" /></label>
            <label>Asistencia<select required><option value="si">Sí, allí estaré</option><option value="no">No podré asistir</option></select></label>
            <label>Alergias o intolerancias<textarea rows={2} placeholder="Cuéntanos si debemos tenerlo en cuenta" /></label>
            <button type="submit">Enviar confirmación</button>
          </form>
          <footer>Lucía & Álvaro <span>25.09.2027 · Sevilla</span></footer>
        </section>
      </div>
    </div>
  );
}