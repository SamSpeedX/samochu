import Ac2 from './assets/img/ac2.png';
import Roma1 from './assets/img/roma1.jpg';
import Ac1 from './assets/img/ac1.jpg';
import Wire from './assets/img/wire.jpg';

export const Webshow = () => {
    return (
         <div className="electrician">

            <div className="container1">
                <div className="content">
                    <div>
                        <h2>Electrical installation information</h2>
                        <div className="info">
                            <p>I went to Vocation Education Training Authority TANGA.</p>
                            <p>I was study shortcourse for six month.</p>
                            <p>I went field at Temesa Tanga.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container1">
                <div className="ct">
                <div className="content1">
                    <div className="card1">
                        <div className="img">
                            <span className="p">
                                <img src={Roma1} alt="my" />
                            </span>
                        </div>
                        <div className="content">
                            <h3>Installation Planning</h3>
                            <p>Day to plan for Electrical installation in new house where to put the condruite piple.</p>
                        </div>
                    </div>

                    <div className="card1">
                        <div className="img">
                            <span className="p">
                            <img src={Wire} alt="my" />
                            </span>
                        </div>
                        <div className="content">
                            <h3>Wire installation.</h3>
                            <p>Client job, site Kabuku Tanga, </p>
                        </div>
                    </div>
                </div>
                

                <div className="content1">
                    <div className="card1">
                        <div className="img">
                            <span className="p">
                                <img src={Ac2} alt="my" />
                            </span>
                        </div>
                        <div className="content">
                            <h3>AirCondition maintanace.</h3>
                            <p>field work, Air Condition maintanace at NHIF office Tanga.</p>
                        </div>
                    </div>

                    <div className="card1">
                        <div className="img">
                            <span className="p">
                            <img src={Ac1} alt="my" />
                            </span>
                        </div>
                        <div className="content">
                            <h3>AirCondition installation.</h3>
                            <p>Field work Temmesa Tanga, on TRA office 2022 we installed four Air AirCondition</p>
                        </div>
                    </div>


                </div>
                </div>
            </div>
         </div>        
    );
};

export default Webshow;