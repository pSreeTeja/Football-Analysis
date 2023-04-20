import ReportsImg from "../media/reports.png"
import "../css/containers/Reports.css"
import "../css/CommonCss.css"
import { useEffect } from "react"
function Reports(props) {
    useEffect(()=>{
        props.setActivePage("reports")
    },[])
    return ( 
        <div className="reportsMainDiv contentDiv">
            <div>
                <img src={ReportsImg} alt="ReportsImg" width={70}/>
                <span className="ReportsTxt pageHeadingTxt">Reports</span>
            </div>
            <div className="bottomBottomDiv">

            </div>
        </div> 
    );
}

export default Reports;