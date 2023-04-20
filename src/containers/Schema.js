import SchemaImg from "../media/schema.png"
import "../css/containers/Schema.css"
import "../css/CommonCss.css"
import DependencyGraph from "../media/dependencyGraph.png"
import { useEffect } from "react"
function Schema(props) {
    useEffect(()=>{
        props.setActivePage("schema")
    },[])
    return ( 
        <div className="schemaMainDiv contentDiv">
            <div className="schemaHeadingDiv bottomTopDiv">
                <img src={SchemaImg} alt="schemaImg" width={70}/>
                <span className="schemaTxt pageHeadingTxt">Schema</span>
            </div>
            <div className="schemaImgDiv bottomBottomDiv">
                <img className="dgImg" src={DependencyGraph} alt="dependencyGraph" height={1200}/>

            </div>
        </div> 
    );
}

export default Schema;