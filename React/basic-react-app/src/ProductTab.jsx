import Product from "./Product";

function ProductTab() {
    let styles = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        
    };
    return(
        <div style={styles}>
            
            <Product title="Learn More About Us" idx={0}/>
            <Product title="Discover What We Do" idx={1}/>
            <Product title="Explore Our Recent Work" idx={2}/>
            <Product title="Get in Touch Today" idx={3}/>
        </div>
    );
}

export default ProductTab;