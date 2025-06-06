const mongoose = require("mongoose");
const{Schema} = mongoose;

main()
    .then(()=>{
        console.log("connection success!");
    })
    .catch((err)=> console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
};


const orderSchema = new Schema({
    item: String,
    price: Number,
});

const customerSchema = new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,//id type
            ref: "Order",//to reference store
        },
    ],
});

//mongoose middlewares pre and post
// customerSchema.pre("findOneAndDelete", async ()=>{
//     console.log("PRE MIDDLEWARES");
// });

customerSchema.post("findOneAndDelete", async (customer)=>{
    if (customer.orders.length) {
        let res = await Order.deleteMany({_id: {$in: customer.orders} });
        console.log(res);
    }
});

//models
const Order = mongoose.model("Order",orderSchema);
const Customer = mongoose.model("Customer",customerSchema);


//ORDER SCHEMA FUNCTION
// const addOrder = async ()=> {
//     let res = await Order.insertMany([
//         {item: "Samosa" , price: 12},
//         {item: "Chips" , price: 10},
//         {item: "chai" , price: 10},
//     ]);
//     console.log(res);
// }

// addOrder();

//Customer SCHEMA FUNCTION
// const addCustomer = async ()=>{
//     let cust1 = new Customer({
//         name: "Gaurav Bisen",
//     });
//     //extracting object id
//     let order1 = await Order.findOne({item: "Chips"});//chips items data store in order1
//     let order2 = await Order.findOne({item: "chai"});

//     cust1.orders.push(order1);
//     cust1.orders.push(order2);

//     let result = await cust1.save();
//     console.log(result);
// };

// addCustomer();

//to convert object id with info to print
const findCustomer = async ()=> {
    let result = await Customer.find({}).populate("orders");
    console.log(result);
};
findCustomer();

//func 1 - to add a customer to DB
const addCust = async ()=>{
    let newCust = new Customer({
        name: "Karan Arjun",
    }); 
    let newOrder = new Order({
        item: "burger",
        price: 250,
    });

    newCust.orders.push(newOrder);

    await newOrder.save();
    await newCust.save();

    console.log("added new customer");
}

//addCust();

//func 2 - to delete a customer from DB
const delCust = async ()=>{
    let data = await Customer.findByIdAndDelete('68430421b91df2f05e92ac9e');
    console.log(data);
};

delCust();
