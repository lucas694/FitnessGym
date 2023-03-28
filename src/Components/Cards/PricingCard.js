import "./PricingCard.css";
import Basic from "../../assets/Cards/BasicIcon.svg";

const PricingCard = (props) => {
  const {id,icon,title,price,benefitsText,benefits,monstPopular} = props
  return(
    <div className={"PricingCardContainer"}>
      <div className={"PricingCardHeader"}>
        <section>
          <img src={icon} alt={"Basic"} className={"PricingCardIcon"}/>
          <h3 className={"PricingCardTitle"}>{title}</h3>
        </section>
        <div className={"PricingHeaderPricing"}>
          <h1 className={"PricingCardPrice"}>{price} / month</h1>
          {<h3 className={monstPopular? "PricingCardMonstPopular":"PricingCardBenefit"}>{benefitsText}</h3>}
        </div>
      </div>
        <ul className={"PricingFeatures"}>
          {benefits.map((benefit,index) => {
            return(
              <li key={index} className={"PricingLi"}>{benefit}</li>
            )
          })}
        </ul>
      <div>
        <button className={"PricingCardButton"}>Get Started</button>
      </div>

    </div>
  )
};export default PricingCard;