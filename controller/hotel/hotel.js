const hotel = require("../../model/hotel");

exports.post_res= async(req, res)=>{
console.log("this",req.body)


var saveData = {
    Name: req.body.Name,
    Email:  req.body.Email,
    Phone:  req.body.Phone,
    Res_Date: req.body.ResDate,
    Total_people: req.body.TotalPeople,
    Add_notes: req.body.AddNotes,

  };
  hotel.create(saveData, function (err, results) {
    if (err) {
      let msg ="Something went wrong"
      reject({
        httpCode: 400,
        code: 400,
        message: msg
      });
    } else {
      let msg = "successfull"
      res.status(200).send({
        message: msg,
        code: 200,
        data: results
      });
    }
})
}

exports.get_menu= async(req, res)=>{
 
  

  Menu.find({}, function (err, results) {
      if (err) {
        let msg ="Something went wrong"
        reject({
          httpCode: 400,
          code: 400,
          message: msg
        });
      } else {
        let msg = "successfull"
        res.status(200).send({
          message: msg,
          code: 200,
          data: results
        });
      }
  })
  }