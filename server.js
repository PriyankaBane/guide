var express = require('express');
var app = express();
var path    = require("path");
app.use(express.static('public'));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/main_page.html'));
  //__dirname : It will resolve to your project folder.
});
 
//******************************* HR MANAGER **************************************//
app.get('/hr_managers',function(req,res){
  res.sendFile(path.join(__dirname+'/hr_home.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/hr_managers/dashboard',function(req,res){
  res.sendFile(path.join(__dirname+'/dashboard.html'));
  //__dirname : It will resolve to your project folder.
});
app.get('/hr_managers/management',function(req,res){
  res.sendFile(path.join(__dirname+'/management.html'));
  //__dirname : It will resolve to your project folder.
});
app.get('/hr_managers/jobs',function(req,res){
  res.sendFile(path.join(__dirname+'/Jobs.html'));
  //__dirname : It will resolve to your project folder.
});
app.get('/hr_managers/resumes',function(req,res){
  res.sendFile(path.join(__dirname+'/resumes.html'));
  //__dirname : It will resolve to your project folder.
});
app.get('/hr_managers/employees',function(req,res){
  res.sendFile(path.join(__dirname+'/employees.html'));
  //__dirname : It will resolve to your project folder.
});
app.get('/hr_managers/gamification',function(req,res){
  res.sendFile(path.join(__dirname+'/gamification.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/hr_managers/reports',function(req,res){
  res.sendFile(path.join(__dirname+'/reports.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/hr_managers/header',function(req,res){
  res.sendFile(path.join(__dirname+'/header.html'));
  //__dirname : It will resolve to your project folder.
});
app.get('/hr_managers/settings',function(req,res){
  res.sendFile(path.join(__dirname+'/settings.html'));
  //__dirname : It will resolve to your project folder.
});

//****************************** RECRUITER ************************************//

app.get('/recruiter',function(req,res){
  res.sendFile(path.join(__dirname+'/recruiter_home.html'));
  //__dirname : It will resolve to your project folder.
});
app.get('/recruiter/dashboard',function(req,res){
  res.sendFile(path.join(__dirname+'/dashboard2.html'));
  //__dirname : It will resolve to your project folder.
});
app.get('/recruiter/jobs',function(req,res){
  res.sendFile(path.join(__dirname+'/jobs2.html'));
  //__dirname : It will resolve to your project folder.
});
app.get('/recruiter/employees',function(req,res){
  res.sendFile(path.join(__dirname+'/employees2.html'));
  //__dirname : It will resolve to your project folder.
});
app.get('/recruiter/resumes',function(req,res){
  res.sendFile(path.join(__dirname+'/resumes2.html'));
  //__dirname : It will resolve to your project folder.
});
app.get('/recruiter/header',function(req,res){
  res.sendFile(path.join(__dirname+'/header2.html'));
  //__dirname : It will resolve to your project folder.
});

//***************************************************	 EMPLOYEES ***************************************//


app.get('/employees',function(req,res){
  res.sendFile(path.join(__dirname+'/employees_home.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/employees/dashboard',function(req,res){
  res.sendFile(path.join(__dirname+'/dashboard3.html'));
  //__dirname : It will resolve to your project folder.
});
app.get('/employees/current_openings',function(req,res){
  res.sendFile(path.join(__dirname+'/current_openings.html'));
  //__dirname : It will resolve to your project folder.
});
app.get('/employees/resumes',function(req,res){
  res.sendFile(path.join(__dirname+'/resumes3.html'));
  //__dirname : It will resolve to your project folder.
});
app.get('/employees/header',function(req,res){
  res.sendFile(path.join(__dirname+'/header3.html'));
  //__dirname : It will resolve to your project folder.
});


//******************************************* FRIENDS ****************************************//

app.get('/friends',function(req,res){
  res.sendFile(path.join(__dirname+'/friends_home.html'));
  //__dirname : It will resolve to your project folder.
});
app.get('/friends/current_openings',function(req,res){
  res.sendFile(path.join(__dirname+'/dashboard4.html'));
  //__dirname : It will resolve to your project folder.
});
app.get('/friends/job_tweets',function(req,res){
  res.sendFile(path.join(__dirname+'/job_tweets.html'));
  //__dirname : It will resolve to your project folder.
});
app.get('/friends/share_resumes',function(req,res){
  res.sendFile(path.join(__dirname+'/share_resumes.html'));
  //__dirname : It will resolve to your project folder.
});
app.get('/friends/resumes',function(req,res){
  res.sendFile(path.join(__dirname+'/resumes4.html'));
  //__dirname : It will resolve to your project folder.
});
app.get('/friends/my_profile',function(req,res){
  res.sendFile(path.join(__dirname+'/my_profile.html'));
  //__dirname : It will resolve to your project folder.
});
app.get('/friends/header',function(req,res){
  res.sendFile(path.join(__dirname+'/header4.html'));
  //__dirname : It will resolve to your project folder.
});






























var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)

})
