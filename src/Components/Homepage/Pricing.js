import "./Pricing.css";
import PricingCard from "../Cards/PricingCard";
import Basic from "../../assets/Cards/BasicIcon.svg";
import Standart from "../../assets/Cards/StandartIcon.svg";
import Premium from "../../assets/Cards/PremiumIcon.svg";


const Pricing = () => {
  const PricingCards = [
    {id:1,icon:Basic,title:"Basic",price:"$25",benefitsText:"30% Off for Beginners",benefits:["1 Day Free Trial","20 Minutes Of Heart-Pumping Spin","20 Minutes Of Strength Training","50 Class Times Available","20 Minutes Of Invigorating Yoga"]},
    {id:1,icon:Standart,title:"Standart",price:"$35",monstPopular:true,benefitsText:"Monst Popular" ,benefits:["2 Week Free Trial","30 Minutes Of Heart-Pumping Spin","30 Minutes Of Strength Training","50 Class Times Available","20 Minutes Of Invigorating Yoga"]},
    {id:1,icon:Premium,title:"Premium",price:"$50",benefitsText:"10% Off for Yoga Class",benefits:["2 Week Free Trial","50 Minutes Of Heart-Pumping Spin","50 Minutes Of Strength Training","60 Class Times Available","50 Minutes Of Invigorating Yoga"]},
  ]
  return(
    <div className={"PricingContainer"}>
      <h3 className={"PricingSubTitle"}>Our Plan</h3>
      <h1 className={"PricingTitle"}>Choose the Program</h1>

      <div className={"PricingCardsContainer"}>
        {PricingCards.map((card,index) => {
          return(
            <PricingCard
                        id={card.id}
                        icon={card.icon}
                        title={card.title}
                        price={card.price}
                        benefitsText={card.benefitsText}
                        benefits={card.benefits}
                        monstPopular={card.monstPopular}
            />
          )})}
      </div>

    </div>
  )
};export default Pricing;