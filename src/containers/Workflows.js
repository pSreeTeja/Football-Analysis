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
            <div>
                <img src={WorkflowsImg} alt="workflowsImg" width={70}/>
                <span className="workflowsTxt pageHeadingTxt">Workflows</span>
            </div>
            <div className="bottomBottomDiv workflowsImgsDiv">
                <div>
                    <img src={PlayerStatsImg} className="workflowImg"alt="playerStatsImg"/>
                    <span>Player Statistics</span>
                </div>
                <div>
                    <img src={TeamStatsImg} className="workflowImg"alt="playerStatsImg"/>
                    <span>Team Statistics</span>
                </div>
            </div>
        </div> 
    );
}

export default Workflows;