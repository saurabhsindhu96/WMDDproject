 const Joi = require('joi')

 exports.reservation = function (req, res, cb) {
     console.log("=",req.body)
  
    Joi.validate({
      Name: req.body.Name,
      Email: req.body.Email,
      Phone: req.body.Phone,
      Res_Date: req.body.ResDate,
      Total_people: req.body.TotalPeople,
      Add_notes: req.body.AddNotes,
    }, {
        Name: Joi.string().max(30).required(),
        Email: Joi.string().max(30).required(),
        Phone: Joi.string().max(15).required(),
        Res_Date: Joi.string().max(30).required(),
        Total_people: Joi.string().max(30).required(),
        Add_notes: Joi.string().max(150).required()
    },
      (err, value) => {
        if (err) {
          return res.status(400).json({
            message: err.details[0].message,
            code: 400,
            errorName: err.name
          });
        } else {
          console.log('clear')
          cb(null, true);
        }
      }
    );
  };