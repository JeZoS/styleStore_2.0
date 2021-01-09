import React from "react";
import MainPage from "./mainpage";
import { Link, Redirect ,Route} from 'react-router-dom';
import "./lookbook.css";
import HinaKhan from '../lookbook/hinakhan'

class LookBook extends React.Component {
  constructor(){
    super();
    this.state={
      hina:false,
      anushka:false,
      priyanka:false,
      samantha:false,
      sonam:false,
      deepika:false,
    }
  }
  render() {
    return (
      <div>
        <MainPage />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="looktag">
            <b>Celebrity Look Book</b>
          </div>
          <div className="look">
            <div className="lookbook">
              <Link to='/lookBook/Hina_khan'>
                <div className="celebrity" onClick={<Route exact path="lookBook/Hina_khan"><HinaKhan/></Route>}>
                <img
                  className="HinaKhan"
                  src="https://instagram.fdel29-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/124815664_424202618568286_430038991439331392_n.jpg?_nc_ht=instagram.fdel29-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=tsA_gNvMGk0AX8SUTTY&tp=1&oh=57cb0cb98c7ec0cf0989a6562a3a9ad2&oe=601AB4B9"
                  alt="img"
                />
                <div className="statement">
                  Hina Khan's glamourous Look which will inspire you to look
                  confident.
                </div>
              </div></Link>

              <Link to='/lookBook/Deepika'>
                <div className="celebrity" onClick={()=>{this.setState({deepika:true,})}}>
                <img
                  alt="img"
                  className="DeepikaPadukone"
                  src="https://instagram.fdel29-1.fna.fbcdn.net/v/t51.2885-15/e35/122683463_4738558246185792_3011640091311361146_n.jpg?_nc_ht=instagram.fdel29-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=GzG66KO79hwAX82ArY6&tp=1&oh=420b806ec5bc090cd0139b146efc9929&oe=60177440"
                />
                <div className="statement">
                  Saris,dresses and trackSuits:Deepika Padukone's Memorable
                  looks from 2020.
                </div>
              </div>
              </Link>

              <Link to='/lookBook/Sonam'>
                <div className="celebrity" onClick={()=>{this.setState({sonam:true,})}}>
                <img
                  alt="img"
                  className="sonamkapoor"
                  src="https://assets.vogue.in/photos/5fb78711e1dbc5660f056d5c/2:3/w_1920%2cc_limit/SonamKapoor%20Ahuja%20in%20anamika%20khanna%20sari%20and%20jacket.jpg"
                />
                <div className="statement">
                  How Sonam Kapoor Ahuja, Samantha Akkineni and other stars
                  style their lehengas, kurtas and saris for the winter.
                </div>
              </div>
              </Link>

              <Link to='/lookBook/Samantha'>
                <div className="celebrity" onClick={()=>{this.setState({samantha:true,})}}>
                <img
                  alt="img"
                  className="HinaKhan"
                  src="https://assets.vogue.in/photos/5fe45dd348e5d0f97bb0e46b/2:3/w_1920%2cc_limit/Samantha%20Akkineni%20sari%20Myntra.png"
                />
                <div className="statement">
                  7 saris handpicked by Samantha Akkineni that you can shop on
                  Myntra now.
                </div>
              </div>
              </Link>

              <Link to='/lookBook/Anushka'>
                <div className="celebrity" onClick={()=>this.setState({anushka:true,})}>
                <img
                  alt="img"
                  className="Anushka"
                  src="https://instagram.fdel29-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/72791039_2516102138479586_996049696303198156_n.jpg?_nc_ht=instagram.fdel29-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=ZupLs8H9Sc8AX_ytwYe&tp=1&oh=0afbdfb526c54a62401f6991747a1296&oe=601A664A"
                />
                <div className="statement" >
                  Style that you've must try once from Anushka Sharma's
                  LookBook.
                </div>
              </div>
              </Link>
              <Link to='/lookBook/Priyanka'>
                <div className="celebrity" onClick={()=>this.setState({priyanka:true,})}>
                <img
                  alt="img"
                  className="Priyanka"
                  src="https://instagram.fdel29-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/125437818_2746867082267442_1312594391432203295_n.jpg?_nc_ht=instagram.fdel29-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=CCRtQ7RqBjsAX-rTxsy&tp=1&oh=c24ec29ca7c62c22547bf729fc54793d&oe=6019E119"
                />
                <div className="statement">
                  Worried about Winter Fashion? Checkout Priyanka ,Deepika,
                  Sonam winter lookbook.
                </div>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default LookBook;
