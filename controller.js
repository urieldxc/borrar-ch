const path = require('path');
const db = require(path.join(__dirname, "/services/db.js"));

exports.userData = async (req, res) =>{
    let data = await db.query(' SELECT * FROM student');
    res.send(data);
}

exports.newStudent = async(req,res)=>{
    let response = await db.query(
        `INSERT INTO student(name, first_surname, second_surname, email, telephone, description) 
        VALUES ("${req.body.iName}", "${req.body.iFirstSurname}", "${req.body.iSecondSurname}", "${req.body.iEmail}", "${req.body.iPhone}", "${req.body.iDescription}")`
        );
    res.redirect("/userData");
}