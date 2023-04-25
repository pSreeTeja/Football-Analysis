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
                                The team sport of football is practiced all over the world. It is a sport that calls for cooperation, preparation, and strategies. We need accurate statistics and analysis for planning and strategies. The development of a football analysis and reporting system is the goal of this project. 
                                <br/>
                                Reports such as the top performers, foul-makers, the club's win/loss ratio have been created for analyzing the performance of the team as well as the performance of each individual player. 
                                It gathers information on a variety of factors, including league, position, victories, wins with penalties, and country. For region-wise analysis, the countries have further been separated into groups according to continents like Europe and South America.
                                </span> 
                            </div>
                        </div>

                    </div>
                </div>
        </div>
    );
}

export default Home;