import "./Product.css"
import Price from "./price";

function Product({title,idx}) {
    let styles = {
        backgroundColor: "green",
    }
    let oldPrices = ["11,100","25,000","17,500","45,011"];
    let newPrices = ["11,012","55,013","88,014","99,015"];
    let description  = [["Meet our team.","Our story, simply told."],["Services at a glance.","What we offer."],["Latest projects shown.","See our results."],[" Contact us now."," Let’s talk today."]];
    return (
        <div className="Product" style={styles}>
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    );
}

export default Product;