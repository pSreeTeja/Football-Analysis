import WorkflowsImg from "../media/workflows.png"
import PlayerStatsImg from "../media/workflowPics/factPlayerStats.png"
import TeamStatsImg from "../media/workflowPics/factTeamStats.png"
import "../css/containers/Workflows.css"
import "../css/CommonCss.css"
import { useEffect } from "react"
function Workflows(props) {
    useEffect(()=>{
        props.setActivePage("workflows")
    },[]) 
    return ( 
        <div className="workflowsMainDiv contentDiv">
            <div className="bottomTopDiv">
                <img src={WorkflowsImg} alt="workflowsImg" width={70}/>
                <span className="workflowsTxt pageHeadingTxt">Workflows</span>
            </div>
            <div className="bottomBottomDiv workflowsImgsDiv">
                <div>
                    <img src={PlayerStatsImg} height={350} width={500} className="workflowImg"alt="playerStatsImg"/>
                    <span className="workflowName">Player Statistics</span>
                </div>
                <div>
                    <img src={TeamStatsImg} height={350} width={500} className="workflowImg"alt="playerStatsImg"/>
                    <span className="workflowName">Team Statistics</span>
                </div>
            </div>
        </div> 
    );
}

export default Workflows;