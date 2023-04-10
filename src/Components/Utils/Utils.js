import ClassPilates from  "../../assets/Cards/CardClass/ClassPilates.png";
import ClassAerobic from "../../assets/Cards/CardClass/ClassAerobic.png";
import CrossFit from "../../assets/Cards/CardClass/ClassCrossFit.png";
import ClassYoga from "../../assets/Cards/CardClass/ClassYoga.png";
import ClassBox from "../../assets/Cards/CardClass/ClassBox.png";
import ClassDance from "../../assets/Cards/CardClass/ClassDance.png";
//Class
import Amanda from "../../assets/Cards/CardTeam/Amanda.png";
import Madison from "../../assets/Cards/CardTeam/Madison.png";
import Joshua from "../../assets/Cards/CardTeam/Joshua.png";
import Jhon from "../../assets/Cards/CardTeam/Jhon.png";
import Steve from "../../assets/Cards/CardTeam/Steve.png";
import Kane from "../../assets/Cards/CardTeam/Kane.png";
//Trainers

const classData = [
  {id:1, img:ClassPilates, title:"Pilates Training", description:"Containing Lorem Ipsum passagesand more recently with",},
  {id:2, img:ClassAerobic, title:"Aerobic Training", description:"Containing Lorem Ipsum passagesand more recently with"},
  {id:3, img:CrossFit, title:"CrossFit Workout", description:"Containing Lorem Ipsum passagesand more recently with"},
  {id:4, img:ClassYoga, title:"Yoga As Therapy", description:"Containing Lorem Ipsum passagesand more recently with"},
  {id:5, img:ClassBox, title:"Boxing", description:"Containing Lorem Ipsum passagesand more recently with"},
  {id:6, img:ClassDance, title:"Energy Dance", description:"Containing Lorem Ipsum passagesand more recently with"},
];

const TrainersData = [
  {id:1, img:Amanda, name:"Amanda", specialitis:"Crossfit Expoort, Nutrition & Rehab", instagram:"#AmandaSocial", facebook:"#AmandaSocial",phone:"(+1) 123 456 7890",email:"Amanda@Gmail.com"},
  {id:2, img:Madison, name:"Madison Froning", specialitis:"Crossfit Expoort, Nutrition & Rehab", instagram:"#MadisonSocial", facebook:"#MadisonSocial", twitter:"#MadisonSocial",phone:"(+1) 123 456 7890",email:"Madison@Gmail.com"},
  {id:3, img:Joshua, name:"Joshua Frankilin", specialitis:"Crossfit Expoort, Nutrition & Rehab", instagram:"#JoshuaSocial", facebook:"#JoshuaSocial",phone:"(+1) 123 456 7890",email:"Joshua@Gmail.com"},
  {id:4, img:Jhon, name:"Jhon Willson", specialitis:"Crossfit Expoort, Nutrition & Rehab", instagram:"#JhonSocial", facebook:"#JhonSocial",phone:"(+1) 123 456 7890",email:"Jhon@Gmail.com"},
  {id:5, img:Steve, name:"Steve Smith", specialitis:"Crossfit Expoort, Nutrition & Rehab", instagram:"#SteveSocial", facebook:"#SteveSocial", twitter:"#SteveSocial",phone:"(+1) 123 456 7890",email:"Steve@Gmail.com"},
  {id:6, img:Kane, name:"Kane Lucy", specialitis:"Crossfit Expoort, Nutrition & Rehab", instagram:"#KaneSocial", facebook:"#KaneSocial",phone:"(+1) 123 456 7890",email:"Kane@Gmail.com"},
]


export function getTrainersData() {
  return TrainersData;
}

export function getClassData() {
  return classData;
}