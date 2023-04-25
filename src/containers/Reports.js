import ReportsImg from "../media/reports.png"
import "../css/containers/Reports.css"
import "../css/CommonCss.css"
import { useEffect } from "react"
import First from "../media/reports/1.png"
import Second from "../media/reports/2.png"
import Third from "../media/reports/3.png"
function Reports(props) {
    useEffect(()=>{
        props.setActivePage("reports")
    },[])
    return ( 
        <div className="reportsMainDiv contentDiv">
            <div className="bottomTopDiv">
                <img src={ReportsImg} alt="ReportsImg" width={70}/>
                <span className="ReportsTxt pageHeadingTxt">Reports</span>
            </div>
            <div className="bottomBottomDiv reportsBottomDiv">
                <div className="firstAndSecondImgDiv">
                    <figure>
                        <img src={First} alt="firstImg" className="firstReportImg"/>
                        <figcaption className="imgCaption">Top 10 Players</figcaption>
                    </figure>
                    <figure>
                        <img src={Second} alt="secondImg" className="secondReportImg"/> 
                        <figcaption className="imgCaption" >Total Sum of Fouls made</figcaption>
                    </figure>
                </div>

                <div className="thirdImgDiv">
                    <figure>
                        <img src={Third} alt="thirdImg" className="thirdReportImg"/>    
                        <figcaption className="imgCaption">Win To Loss Ratio</figcaption>
                    </figure>
                </div>
            </div>
        </div> 
    );
}

export default Reports;