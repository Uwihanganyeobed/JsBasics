const myServer = require('express')
const database = require('mysql')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const students = require('./students')
const cors = require ('cors')

//initialize app
const app =myServer();
app.use(myServer.json())
app.use(cors({
  origin:"http://localhost:5173"

  
}))


//databse connection
const db = database.createConnection({
    user: 'root',
    password: '',
    host: 'localhost',
    database: 'SDMS'
})

db.connect(function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log('databse is connected')
    }
})

//verifytoken
const verifyToken = async(req,res,next)=>{
    const token = req.headers.authorization;
    if(!token){
        return res.status(500).json({message: 'no token provided'})
    }
    const actualToken = token.split(" ")[1];
    const realToken = await jwt.verify(actualToken, 'secretKey')
    req.user = realToken
    next()
}
//

const checkRole = (...roles)=>{
    return (req,res,next)=>{
        if(!roles.includes(req.user.role)){
                return res.status(403).json({message: 'No authorized'})
        }
        next()
    }
}

//authentication
app.post('/api/register',async function (request,response) {
    const {name,email,age,password,role}=request.body;
    //check if user is not in system
    const sqlCheck='select * from users where email=?';
    db.query(sqlCheck,[email], async function (err,results) {
    if(err){
        return response.status(500).json({message: 'error creating user',err})
    }
    if(results.length >0){
        return response.status(500).json({message: 'user already registered',err})
    }
    const hashPassword = await bcrypt.hash(password,10)
    const sql = 'insert into users(name,email,age,password,role) values(?,?,?,?,?)'
    db.query(sql,[name,email,age,hashPassword,role], async function(err,results){
         if(err){
        return response.status(500).json({message: 'error creating user',err})
    }
        return response.status(201).json({message: 'user is created',results})
    })
})
})


//authentication
app.post('/api/login',async function (request,response) {
    const {email,password}=request.body;
    //check if user is not in system
    const sqlCheck='select * from users where email=?';
    db.query(sqlCheck,[email], async function (err,results) {
    if(err){
        return response.status(500).json({message: 'error creating user',err})
    }
    if(results.length === 0){
        return response.status(500).json({message: 'user is not registered',err})
    }
    const token = await jwt.sign({
        id: results[0].id,
        email: results[0].email,
        role: results[0].role,
        
    },'secretKey', { expiresIn: '1d'})
    
      if(!token){
        return response.status(500).json({message: 'No token provided plz try again',err})
    }
        return response.status(200).json({message: 'login Successfull',token})
    })
})




//CRUD Ccourses
app.get('/api/courses',function(request,response){
    const sql ='SELECT * FROM courses';
    db.query(sql,function(err,results){
        if(err){
            return response.json({message: 'Error fetching courses',err})
        }
        return response.json({message: 'Got Courses',results})
    })
})  

app.post('/api/courses', function(request,response){
    const {courseName,courseCode,courseCredits,coursedepartment,courseperiods}=request.body;
    const sql = 'insert into courses(courseName,courseCode,courseCredits,coursedepartment,courseperiods) values(?,?,?,?,?)';
    db.query(sql,[courseName,courseCode,courseCredits,coursedepartment,courseperiods], function(err,results){
          if(err){
            return response.json({message: 'Error fetching courses',err})
        }
        return response.json({message: 'Got Courses',results})
    })
})
//CRUD Ccourses
app.get('/api/courses/:id',function(request,response){
    const id = request.params.id
    const sql ='SELECT * FROM courses WHERE courseId=?';
    db.query(sql,[id],function(err,results){
        if(err){
            return response.json({message: 'Error fetching courses',err})
        }
        return response.json({message: 'Got Course',results})
    })
})  

app.put('/api/courses/:id', function(request,response){
    const id = request.params.id
    const {courseName,courseCode,courseCredits,coursedepartment,courseperiods}=request.body;
    const sql = 
    'update courses set courseName=?,courseCode=?,courseCredits=?,coursedepartment=?,courseperiods=? where courseId =?';
    db.query(sql,[courseName,courseCode,courseCredits,coursedepartment,courseperiods,id], function(err,results){
          if(err){
            return response.json({message: 'Error updating courses',err})
        }
        return response.json({message: 'Got Courses',results})
    })
})
app.delete('/api/courses/:id',function(request,response){
    const id = request.params.id
    const sql ='DELETE FROM courses WHERE courseId=?';
    db.query(sql,[id],function(err,results){
        if(err){
            return response.json({message: 'Error deleting courses',err})
        }
        return response.json({message: ' Course deleted',results})
    })
}) 

app.get('/',function(request, response){
    response.send('Hello Your Server is Live')
})

app.get('/home', function(request,response){
    response.send('<button>Hello </button>')
})


app.get('/data', function(request,response){
    response.send(students)
})


//


app.listen(5000,function(){
    console.log('Server is running on port 5000')
})