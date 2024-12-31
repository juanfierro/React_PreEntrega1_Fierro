import "bulma/css/bulma.css";


import ProfileCard from "./ProfileCard";

import AlexaImg from "./img/alexa.png";

import SiriImg from "./img/siri.png";

import CortanaImg from "./img/cortana.png";

function App() {
  return (
      <div>
        <section className="hero is-primary">
          <div className="hero-body">
            <h1 className="title">Asistentes</h1>
          </div>
        </section>
        <div className="container">
          <section className="section">
            <div className="columns">
              <div className="column is-4">
                <ProfileCard titulo="Alexa" handle="@alexa22" urlImg={AlexaImg}/>
              </div>

              <div className="column is-4">
                <ProfileCard titulo="Siri" handle="@Siri10" urlImg={SiriImg}/>
              </div>

              <div className="column is-4">

                <ProfileCard titulo="Cortana" handle="@Cortana99" urlImg={CortanaImg}/>

              </div>

            </div>

          </section>

        </div>       
      </div>

  );

}

export default App;