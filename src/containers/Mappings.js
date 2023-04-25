import MappingsImg from "../media/mappings.png"
import Club from "../media/mappingPics/Club.png"
import Country from "../media/mappingPics/Country.png"
import League from "../media/mappingPics/League.png"
import MatchType from "../media/mappingPics/MatchType.png"
import Player from "../media/mappingPics/Player.png"
import PlayerStats from "../media/mappingPics/Player_Stats.png"
import TeamStats from "../media/mappingPics/Team_Stats.png"
import Time from "../media/mappingPics/Time.png"
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from "react-icons/fa"
import "../css/containers/Mappings.css"
import "../css/CommonCss.css"
import { useEffect,useState } from "react"


function Mappings(props) {
    useEffect(()=>{
        props.setActivePage("mappings")
    },[])
    const [current,setCurrent]=useState(0);
    const imagesData=[
      {imageSrc:Club,name:"Club"},
      {imageSrc:Country,name:"Country"},
      {imageSrc:League,name:"League"},
      {imageSrc:MatchType,name:"Match Type"},
      {imageSrc:Player,name:"Player"},
      {imageSrc:PlayerStats,name:"Player Statistics"},
      {imageSrc:TeamStats,name:"Team Statistics"},
      {imageSrc:Time,name:"Time"},
    ]
    const goNext=()=>{
      setCurrent(current===imagesData.length-1?0:current+1)
      console.log(current)
    }
    const goPrev=()=>{
      setCurrent(current===0?imagesData.length-1:current-1)
      console.log(current)
    }

    return (  
        <div className="mappingsMainDiv contentDiv">
            <div className="bottomTopDiv">
                <img src={MappingsImg} alt="dbImg" width={70}/>
                <span className="mappingsTxt pageHeadingTxt">Mappings</span>
            </div>
            <div className="bottomBottomDiv mappingImagesDiv">
              <FaArrowAltCircleLeft onClick={goPrev} className="navigateIcons leftIcon"/>
              {/* {imagesData.map((image)=>{
                return(

                  <div key={imagesData.indexOf(image)}>
                    <img src={image.imageSrc} alt="img" className="mappingImg"/>
                  </div>

              )})} */}
              <div className="imageAndDescDiv">
                <img src={imagesData[current].imageSrc} alt="img" className="mappingImg"/>
                <span className="imageName">{imagesData[current].name}</span>  
              </div>

              <FaArrowAltCircleRight onClick={goNext} className="navigateIcons rightIcon"/>
            </div>
        </div> 
    );
}

export default Mappings;