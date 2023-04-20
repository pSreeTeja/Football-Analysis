import AbstractImg from "../media/coloredAbstract.png"
import "../css/containers/Home.css"
import SoccerBckg from "../media/soccerplay1.jpg"
function Home(props) {
    return ( 
        <div className="homeMainDiv contentDiv">
                <div className="bottomTopDiv">
                    <img src={AbstractImg} alt="AbstractImg" width={70}/>
                    <span className="abstractTxt">Abstract</span>
                </div>
                <div className="imageAndTextDiv bottomBottomDiv">
                    <img src={SoccerBckg} alt="soccerbckg" className="soccerImgBckg"/>
                    <div className="abstractInfoDiv">
                        <span>
                        Football is a team sport that is played worldwide. It is a sport that requires teamwork, game plans and strategies. For planning and strategies we need a good statistics and analysis and for that we need reports.
                        <br/>
                        <br/>
The purpose of this project is to develop Analysis & Reporting System of Football. Various reports has been generated to analyze the club as well as the individual player’s performance like the top performers , the foul makers , club’s Win/loss Ratio  and many more . It collects the data on various attributes like country, goals scored, penalty, wins, position, league. The countries have been further divided under various regions such as Europe, South-America for Region-wise Analysis.
                        </span>
                    </div>
                </div>
        </div>
    );
}

export default Home;