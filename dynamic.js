function getfile(file,callback)
{
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("Application/json");
  xhr.open('GET',file,true);
  xhr.onreadystatechange=function()
  {
    if(xhr.readyState===4 && xhr.status=="200" )
    {
      callback(xhr.responseText);
    }
  }
  xhr.send(null);
}
getfile("dynamic.json",function(text)
{
  var data = JSON.parse(text);
  console.log(data);
  profile(data.basics);
  career(data.career);
  education(data.education);
  skills(data.skills);

}
)
var m=document.querySelector(".m");
var l=document.querySelector(".l");
var r=document.querySelector(".r");
function profile(pro)
{
  var image= document.createElement('img');
  image.src=pro.img;
  l.appendChild(image);
  m.appendChild(l);
  var head= document.createElement('h2');
  head.textContent= pro.name;
  l.appendChild(head);
  m.appendChild(l);
  var email= document.createElement('h3');
  email.textContent= pro.email;
  l.appendChild(email);
  m.appendChild(l);
  var job= document.createElement('h3');
  job.textContent= pro.job;
  l.appendChild(job);
  m.appendChild(l);
}
function career(c){
  var rh=document.createElement('h1');
  rh.textContent= "RESUME";
  r.append(rh);
  m.append(r);
  var hh =document.createElement('hr');
r.append(hh);
var ra = document.createElement('h2');
ra.textContent= "Carrer Objectives";
r.append(ra);
var ke =document.createElement('h3');
ke.textContent=c.info;
r.appendChild(ke);
m.appendChild(r);
var kk =document.createElement('hr');
r.append(kk);
var edu=document.createElement('h2');

}
function education (edu)
{
  var ex=document.createElement('h2');
  ex.textContent="Educational Details";
  r.appendChild(ex);
  var ke =document.createElement('hr');
  r.append(ke);
  var table = document.createElement('table')
  table.border="1";
  let row='';
  row += "<tr>"
  +"<td>"+ "sno"+"</td>"+
  "<td>"+ "degree"+"</td>"+
  "<td>"+ "institute"+"</td>"+
  "<td>"+ "per"+"</td>"+
  "<td>"+ "yop"+"</td>"+
  "</tr>";
  for (i in edu)
  {
    row += "<tr>"
    +"<td>"+ edu[i].sno+"</td>"+
    "<td>"+ edu[i].degree+"</td>"+
    "<td>"+ edu[i].institute+"</td>"+
    "<td>"+ edu[i].per+"</td>"+
    "<td>"+ edu[i].yop+"</td>"+
    "</tr>";
  }
table.innerHTML=row;
r.appendChild(table);
m.appendChild(r);

}
function skills(l)
{
  var ill= document.createElement('h2');
  ill.textContent="Technical Skills";
  r.append(ill);
  var ll=document.createElement('hr');
  r.append(ll);
  var ul =document.createElement('ul');
  r.append(ul);
  for(i in l)
  {
    var li =document.createElement('li');
    li.textContent=l[i].skills;
    ul.append(li);
  }
}
