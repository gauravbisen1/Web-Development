import Product from "./Product";

function ProductTab() {
    return(
        <>
            <Product title="Phone" price={30000} />
            <Product title="Laptop" price={45000}/>
            <Product title="Tab" price={25000}/>
        </>
    );
}

export default ProductTab;