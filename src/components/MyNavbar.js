import {Link} from "react-router-dom"
import Football from "../media/football3.png"
import AbstractImg from "../media/coloredAbstract.png"
import DBImage from "../media/databases.png"
import MappingsImg from "../media/mappings.png"
import ReportsImg from "../media/reports.png"
import SchemaImg from "../media/schema.png"
import WorkflowsImg from "../media/workflows.png"
import "../css/components/MyNavbar.css"
function MyNavbar(props) {
    return ( 
    <div className="navbarMainDiv">
        <div className="navbarLeftDiv">
            <img src={Football} height={36}/>    
            <span id="titleTxt">FOOTBALL ANALYSIS</span>
        </div>
        <div className="navbarRightDiv">
            <Link to="/" className={props.activePage==="abstract"?"navbarLink navbarLinkActive":"navbarLink"} onClick={()=>{props.handleActivePage("abstract")}}>Abstract</Link>
            <Link to="/databasedesign" className={props.activePage==="databasedesign"?"navbarLink navbarLinkActive":"navbarLink"} onClick={()=>{props.handleActivePage("databasedesign")}}>
                Database Design</Link>
            <Link to="/schema" className={props.activePage==="schema"?"navbarLink navbarLinkActive":"navbarLink"} onClick={()=>{props.handleActivePage("schema")}}>Schema</Link>
            <Link to="/mappings" className={props.activePage==="mappings"?"navbarLink navbarLinkActive":"navbarLink"} onClick={()=>{props.handleActivePage("mappings")}}>Mappings</Link>
            <Link to="/workflows" className={props.activePage==="workflows"?"navbarLink navbarLinkActive":"navbarLink"} onClick={()=>{props.handleActivePage("workflows")}}>Workflows</Link>
            <Link to="/reports" className={props.activePage==="reports"?"navbarLink navbarLinkActive":"navbarLink"} onClick={()=>{props.handleActivePage("reports")}}>Reports</Link>
        </div>
    </div> );
}

export default MyNavbar;