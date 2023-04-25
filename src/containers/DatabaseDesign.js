import DBImage from "../media/databases.png"
import "../css/containers/DatabaseDesign.css"
import "../css/CommonCss.css"
import DBDesignImg from "../media/dbDesign3.png"
import { useEffect } from "react"
import Design1 from "../media/design1.png"
function DatabaseDesign(props) {
    useEffect(()=>{
        props.setActivePage("databasedesign")
    },[])
    return (  
        <div className="dbDesignMainDiv contentDiv">
            <div className="dbHeadingDiv bottomTopDiv">
                <img src={DBImage} alt="dbImg" width={69}/>
                <span className="dbTxt pageHeadingTxt">Database Design</span>
            </div>
            <div className="dbImgDiv bottomBottomDiv">
                <img src={DBDesignImg} alt="DbDesignImg"  className="dbDesignImg"/>
            </div>
        </div> 
    );
}

export default DatabaseDesign;