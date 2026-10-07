import React from "react";
import { Countdown } from "./Countdown";

const mobileScriptFont = {
  fontFamily: '"Alex Brush", "Snell Roundhand", "Apple Chancery", cursive',
};

interface MobileInvitationProps {
  onRSVPSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export function MobileInvitation({ onRSVPSubmit }: MobileInvitationProps) {
  return (
    <div className="mobile-invitation">
      {/* <a className="mobile-rsvp-fixed" href="#mobile-rsvp">RSVP</a> */}
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
            <h2 style={mobileScriptFont}>Eguneko plangintza</h2>
            <p>Prest duguna</p>
          </header>
          <ol>
            <li><time>17:45</time><div><h3>Hika txakolindegira iritsiera</h3><p>Hika Txakolindegian ikusiko dugu elkar, mahasti, topa eta ospatzeko gauza askoren artean</p></div></li>
            <li><time>18:00</time><div><h3>Zeremonia</h3><p>Hikan emango diogu baiezkoa, txakolina eta lagunak lekuko</p></div></li>
            <li><time>19:00</time><div><h3>Ongietorri Koktela</h3><p>Kopa pare bat, pintxo batzuk eta berriketa ugari</p></div></li>
            <li><time>21:00</time><div><h3>Afaria</h3><p>Zutikako banketea, denen artean erlazionatzea derrigorrezkoa!</p></div></li>
            <li><time>23:00</time><div><h3>Dantzaldia</h3><p>Atera zuen animalia barrutik</p></div></li>
          </ol>
        </section>

        <section className="mobile-feast-art">
          <span className="mobile-cake-doodle">♡</span>
          <img className="mobile-hero-photo mobile-dinner-photo" src="./imgs/cena.png" alt="" />
        </section>

        <section className="mobile-transport">
          <img className="mobile-hero-photo mobile-moto-photo" src="./imgs/moto.png" alt="" />
          <header className="mobile-section-heading">
            <h2 style={mobileScriptFont}>Garraioa</h2>
            <p>Nola iritsi</p>
          </header>
          <p className="mobile-transport-intro">Autobusak Usurbiletik eta Donostitik aterako dira. Ibilbidea 25 minutu ingurukoa da.</p>
          <div className="mobile-transport-times">
            <div><p>Irteera</p><strong>17:15</strong></div>
            <div><p>Itzulera</p><strong>02:00</strong></div>
          </div>
        </section>

        <section id="mobile-rsvp" className="mobile-rsvp-section">
          <p className="mobile-script-label" style={mobileScriptFont}>Atsegin handiz ikusiko dugu elkar</p>
          <h2 style={mobileScriptFont}>Ospatzera al zatoz?</h2>
          <p>Etortzekoa bazara, jakinarazi 2027ko ekainaren 1a baino lehen</p>
          <button className="mobile-rsvp-form-link" type="button" disabled>
            Google Forma laster
          </button>
          <footer>Maddalen ◦ Ainhoa <span>2027.07.09</span></footer>
        </section>
      </div>
    </div>
  );
}