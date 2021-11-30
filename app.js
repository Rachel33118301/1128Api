const express=require('express');
const app=express();
const morgan=require('morgan');
const travels = require('./api/controllers/travelers');

const mongoose=require('mongoose');
// mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@travels.hkqn1.mongodb.net/<dbname>?retryWrites=true&w=majority`,{
    mongoose.connect(`mongodb://cos1128:C8EIwVE5y5lnWWEplsJKdeDBcBQuYO1g2bTYdvpgO9wNJFPbvrWrA3JorvXlSx27fsI5rveVfnR29EKjORKMjQ%3D%3D@cos1128.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@cos1128@`,{

useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
});
mongoose.connection.on('connected',()=>{
    console.log('MCo77!');
});

const placesRoutes=require('./api/routes/places');
const travelsRoutes=require('./api/routes/travels');

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({
    extended:false
}));
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept,Authorization");
    if(req.method==="OPTIONS")
    {
        res.header("Access-Control-Allow-Methods","PUT,POST,PATCH,DELETE,GET");
        return res.status(200).json({});
    }
    
    next();
});

//עכשיו לא צריך אותו app.use((req,res,next)=>{
//     req.on('data',(chank)=>{
//         console.log(chank.toString());
//     });
//     req.on('end',()=>{
//         next();
//     });
// })

//Routes
app.use('/places',placesRoutes);
app.use('/travels',travelsRoutes);
//היה צריך למחוק את 2 הmiddlewares האלה
// app.get('/',(req,res)=>{
//     res.status(200).json({
//         massage:'Hello World 4'
//     })
// });
// app.post('/articles',(req,res)=>{
//     res.status(200).json({
//         body:req.body
//     })
// })

app.use((req,res,next)=>{
    const error=new Error('Not Found');
    error.status=404;
    next(error);
})

app.use((error,req,res,next)=>{
    res.status(error.status||500);
    res.json({
        error:{
            message:error.message
        }
    })
})
module.exports=app;