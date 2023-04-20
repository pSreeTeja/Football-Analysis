import DBImage from "../media/databases.png"
import "../css/containers/DatabaseDesign.css"
import "../css/CommonCss.css"
import DBDesignImg from "../media/dbDesign.png"
import { useEffect } from "react"
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
                <img src={DBDesignImg} alt="DbDesignImg" width={900}/>
            </div>
        </div> 
    );
}

export default DatabaseDesign;