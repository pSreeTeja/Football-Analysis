import AbstractImg from "../media/coloredAbstract.png"
import "../css/containers/Home.css"
import SoccerBckg from "../media/soccerplay2.png"
import KickBall from "../media/kickball2.jpg"
import Design1 from "../media/design1.png"
function Home(props) {
    return ( 
        <div className="homeMainDiv contentDiv"> 
                <div className="imageAndTextDiv bottomBottomDiv">
                    {/* <img src={Design1} alt="design1" className="design1"/> */}
                    <img src={SoccerBckg} alt="soccerbckg" className="soccerImgBckg"/>
                    <img src={KickBall} alt="kickball" className="kickBallImg"/>
                    <div className="abstractInfoDiv">
                        <span className="bigTextHome">FOOTBALL IS A <br/>TEAM SPORT</span><br/>
                        <div className="descriptionAboutFBallDiv">
                            <div>
                                <span className="abstractTxt">
                                It is played worldwide. It is a sport that requires teamwork, game plans and strategies. For planning and strategies we need a good statistics and analysis and for that we need reports.
                                <br/>
                                <br/>
        The purpose of this project is to develop Analysis & Reporting System of Football. Various reports has been generated to analyze the club as well as the individual player’s performance like the top performers, the foul makers, club’s Win/loss Ratio  and many more. It collects the data on various attributes like country, goals scored, penalty, wins, position, league. The countries have been further divided under various regions such as Europe, South-America for Region-wise Analysis.
                                </span> 
                            </div>
                        </div>

                    </div>
                </div>
        </div>
    );
}

export default Home;