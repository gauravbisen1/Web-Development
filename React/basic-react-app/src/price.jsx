export default function Price({oldPrice,newPrice}){
    let OLDstyles = {
        textDecorationLine: "line-through",
    }
    let NEWstyles = {
        fontWeight: "bold",
    }
    let styles = {
        backgroundColor: "#e0c367",
        height: "50px",
        width: "200px",
        borderBottomLeftRadius: "14px",
        borderBottomRightRadius: "14px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
    return (
        <div style={styles}>
            <span style={OLDstyles}>{oldPrice}</span>
            &nbsp; &nbsp; &nbsp;
            <span style={NEWstyles}>{newPrice}</span>
        </div>
    );
}