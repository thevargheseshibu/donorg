//Metamask connector
function connectToMetMask() {    
  ethereum.enable().then(result => {
      accounts = result[0];
      console.log(result);
  })
}

//Web3
$(document).ready(function () {
  if (typeof web3 !== 'undefined') {
      web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
      console.log(web3)
  } else {
      // set the provider you want from Web3.providers
      window.web3 = new Web3("http://localhost:8545");
  }

  const contractAddress1 = "0x5706c35B080a1ceafe6f609D96b088a9Ca740C36";

  const contractAbi1=[
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "donorid",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "recipientid",
          "type": "uint256"
        }
      ],
      "name": "matchDonor",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "val",
          "type": "uint256"
        }
      ],
      "name": "NottoAccept",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "val",
          "type": "uint256"
        }
      ],
      "name": "NottoDelete",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "a",
          "type": "uint256"
        }
      ],
      "name": "popPatient",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "Did",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "Dname",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "dob",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "sex",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "bg",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "dorg1",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "dorg2",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "dorg3",
          "type": "string"
        }
      ],
      "name": "setDonor",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "loc",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "email",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "phone",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "addres",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "musername",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "mpassword",
          "type": "string"
        }
      ],
      "name": "setMN",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "Dname",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "dob",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "sex",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "ph",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "bg",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "dorg1",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "dorg2",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "dorg3",
          "type": "string"
        }
      ],
      "name": "setPatient",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "Did",
          "type": "uint256"
        }
      ],
      "name": "getDonor",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getMNW",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "Did",
          "type": "uint256"
        }
      ],
      "name": "getPatientDet",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getWaitingList",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "MatchView",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "phone",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "uname",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "pwd",
          "type": "string"
        }
      ],
      "name": "MCNLoginCheck",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "a",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "b",
          "type": "string"
        }
      ],
      "name": "NottoLoginCheck",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]

  myContract = new web3.eth.Contract(contractAbi1, contractAddress1);
 





  console.log(myContract);
})




//Notto Admin Login check
$("#NASbutton").click(function () {
 

  var username =document.getElementById("NAusername").value;
  var password = document.getElementById("NApassword").value;


  web3.eth.getAccounts().then(function (accounts) {
    
        
  
    web3.eth.getAccounts().then(function (accounts) {
        myContract.methods.NottoLoginCheck(username,password).call({ from: accounts[0] })
            .then(function (result) {
              if(result=="true"){
                alert( "Welcome" )
                location.replace("../admin/Admin.html")
              }
              else{
                alert( "Invalid Login Credentials , Try Again " )
              }
            });
    }); 
      
  });
})

function RefreshTable(){
  location.reload();
}
//MCNsubmit
$("#MCNsubmit").click(function () {
 

  var mname =document.getElementById("Mname").value;
  var mloc=document.getElementById("Mloc").value;
  var mphon=document.getElementById("Mnum").value;
  var memail=document.getElementById("Memail").value;
  var madd=document.getElementById("Madd").value;
  var musername=document.getElementById("Muser").value;
  var mpass = document.getElementById("Mpass").value;


  console.log(mname);
  console.log(mloc)
  console.log(mphon)
  console.log(memail)
  console.log(madd)
  console.log(musername)
  console.log(mpass)
  

        web3.eth.getAccounts().then(function (accounts) {
      
          console.log("accounts", accounts[0])
        
          myContract.methods.setMN(mname,mloc,memail,parseInt(mphon),madd,musername,mpass).send({ from: accounts[0] })
              .then(function (result, error) {
                  if (!error) {
                  
                      console.log(result);
                  } else {
                      console.log(error);
                  }
              });
      });



})





$("#MVsubmit").click(function () {


  

  var x1= document.getElementById("Mo1");
  

  var x2= document.getElementById("po2");
  var x3= document.getElementById("po3");
  var x4= document.getElementById("po4");
  var x5= document.getElementById("po5");


  web3.eth.getAccounts().then(function (accounts) {
      myContract.methods.getMNW().call({ from: accounts[0] })
          .then(function (result) {
            
              
              
              

              x1= document.getElementById("Mo1");

              if(result[1]!="error"){
                x1.insertCell(0).innerHTML =  result[0] ;
                x1.insertCell(1).innerHTML =  result[1] ;
                x1.insertCell(2).innerHTML =  result[2]
                x1.insertCell(3).innerHTML=result[0];
                x1.insertCell(4).innerHTML=result[3];
                var btn = document.createElement("BUTTON");
                var t = document.createTextNode("CLICK ME");
            
                btn.setAttribute("style","color:red;font-size:23px");
        
            
                x1.insertCell(5).innerHTML="<button id='NAbtn'  > Accept </button>";
                x1.insertCell(6).innerHTML="<button id='NDbtn'  > Delete </button>";


          }
          else{
            x1.deleteCell(0) ;
          }
              
               $(document).on("click","#NAbtn",function() {
                
                web3.eth.getAccounts().then(function (accounts) {
    
                  myContract.methods.NottoAccept(parseInt(result[0]) ).send({ from: accounts[0] })
                      .then(function (result, error) {
                          if (!error) {
                              console.log(result);
                              location.reload();
                              var x1= document.getElementById("Mo1");

                              x1.deleteCell(0);
                              x1.deleteCell(1) ;
                              x1.deleteCell(2) ;
                              x1.deleteCell(3) ;
                              x1.deleteCell(4) ;
                              x1.deleteCell(5) ;
                              x1.deleteCell(6) ;
                             
                          } else {
                              console.log(error);
                          }
                      });
              });


              $(document).on("click","#NDbtn",function() {
                
                web3.eth.getAccounts().then(function (accounts) {
    
                  myContract.methods.NottoAccept(parseInt(result[0]) ).send({ from: accounts[0] })
                      .then(function (result, error) {
                          if (!error) {
                            location.reload();
                              console.log(result);
                              var x1= document.getElementById("Mo1");
                           
                              x1.deleteCell(0);
                              x1.deleteCell(1) ;
                              x1.deleteCell(2) ;
                              x1.deleteCell(3) ;
                              x1.deleteCell(4) ;
                              x1.deleteCell(5) ;
                              x1.deleteCell(6) ;
                              location.reload();
                              

                          } else {
                              console.log(error);
                          }
                      });
              });

            });
                
                

       
















              
          });
  });

});

});








//Notto Admin Login check
$("#MASbutton").click(function () {
 
  var phone =document.getElementById("MAphone").value;
  var username =document.getElementById("MAusername").value;
  var password = document.getElementById("MApassword").value;


  web3.eth.getAccounts().then(function (accounts) {
    
        
  
    web3.eth.getAccounts().then(function (accounts) {
        myContract.methods.MCNLoginCheck(parseInt(phone),username,password).call({ from: accounts[0] })
            .then(function (result) {
              if(result=="true"){
                alert( "Welcome" )
                location.replace("../MedicalNode/MNHome.html")
              }
              else{
                alert( "Invalid Login Credentials , Try Again " )
              }
            });
    }); 
      
  });
})













//setDonor details

$("#Dsubmit").click(function () {
 
  var uid = parseInt(document.getElementById("Dnumber").value);
var name= document.getElementById("Dname").value;
var sex= document.getElementById("Dsex").value;
var dob= document.getElementById("Ddob").value;
var bg= document.getElementById("Dbg").value;
var ol1= document.getElementById("Dol1").value;
var ol2= document.getElementById("Dol2").value;
var ol3= document.getElementById("Dol3").value;



  web3.eth.getAccounts().then(function (accounts) {
 
      console.log("accounts", accounts[0])
      console.log(ol3)
      myContract.methods.setDonor(uid, name,sex,dob,bg,ol1,ol2,ol3).send({ from: accounts[0] })
          .then(function (result, error) {
              if (!error) {
                  console.log(result);
              } else {
                  console.log(error);
              }
          });
  });
})


//Set recipient patient detaills
$("#PWsubmit").click(function () {


  
var name= document.getElementById("Rname").value;
var sex= document.getElementById("Rsex").value;
var ph=parseInt(document.getElementById("Ranumber").value);
var dob= document.getElementById("Rdob").value;
var bg= document.getElementById("Rbg").value;
var ol1= document.getElementById("Rol1").value;
var ol2= document.getElementById("Rol2").value;
var ol3= document.getElementById("Rol3").value;



  web3.eth.getAccounts().then(function (accounts) {
    
    
      myContract.methods.setPatient(name,dob,sex,ph,bg,ol1,ol2,ol3).send({ from: accounts[0] })
          .then(function (result, error) {
              if (!error) {
                  console.log(result);
              } else {
                  console.log(error);
              }
          });
  });
})




//Matches donor and recipient

$("#Match").click(function () {
 

  Doid = document.getElementById("Doid").value;
  Reid = document.getElementById("Reid").value;


  web3.eth.getAccounts().then(function (accounts) {
    
     
      myContract.methods.matchDonor(Doid,Reid).send({ from: accounts[0] })
          .then(function (result, error) {
              if (!error) {
                  console.log(result);
              } else {
                  console.log(error);
              }
          });
  });

  web3.eth.getAccounts().then(function (accounts) {
    
     
    myContract.methods.matchDonorM(Doid,Reid).send({ from: accounts[0] })
        .then(function (result, error) {
            if (!error) {
                console.log(result);
            } else {
                console.log(error);
            }
        });
});
})




//Removes patient from waiting list

$("#PPsubmit").click(function () {
  

  uid = document.getElementById("Pid").value;

  web3.eth.getAccounts().then(function (accounts) {
    
      myContract.methods.popPatient(uid).send({ from: accounts[0] })
          .then(function (result, error) {
              if (!error) {
                  console.log(result);
              } else {
                  console.log(error);
              }
          });
  });
})


//View the patient and donor matched details

$("#Matchv").click(function () {
  
  Mview = document.getElementById("Mview").value;
  web3.eth.getAccounts().then(function (accounts) {
      myContract.methods.MatchView(Mview).call({ from: accounts[0] })
          .then(function (result) {
           
              alert( "\r\n" +"Donor Name :  " + result[0] + "\r\n" + "Patient Name : " + result[1]  )
          });
  }); 


});


//view the waiting list

$("#GPsubmit").click(function () {

  web3.eth.getAccounts().then(function (accounts) {
      myContract.methods.getWaitingList().call({ from: accounts[0] })
          .then(function (result) {
            console.log(result[0])
              alert( "\r\n" +"Patient 1 " + result[0] + "\r\n" + "Patient 2 " + result[1] + "\r\n" + "Patient 3 " + result[2]+ "\r\n"+"Patient 4 " + result[3] + "\r\n"+"Patient 5: "+result[4] )
          
              var x1= document.getElementById("Rec1");
              

              var x2= document.getElementById("Rec2");
              var x3= document.getElementById("Rec3");
              var x4= document.getElementById("Rec4");
           

              

           
           

                if(result[1]!="error"){
                        if(result[1]=='0' && result[1]=='' ){
                   
                      }
                      else{
                        x1.insertCell(0).innerHTML =  result[1]  ;
                        x1.insertCell(1).innerHTML =  result[0] ;
                      }
                      if(result[3]=='0'){
                       
                      }
                      else{
                        x2.insertCell(0).innerHTML =  result[3]  ;
                        x2.insertCell(1).innerHTML =  result[2] ;
                      }

                      if(result[5]=='0'){
                       
                      }
                      else{
                        x3.insertCell(0).innerHTML =  result[5] ;
                        x3.insertCell(1).innerHTML =  result[4] ;
                      }
                      if(result[7]=='0'){
                   
                      }
                      else{
                        x4.insertCell(0).innerHTML =  result[7] ;
                        x4.insertCell(1).innerHTML =  result[6] ;
                      }
                      
                  
              
                }
              });
            }); 
          

});

































//view the donor details

$("#Gsubmit").click(function () {

  uid = document.getElementById("Gid").value;
  

  var x1= document.getElementById("po1");

  var x2= document.getElementById("po2");
  var x3= document.getElementById("po3");
  var x4= document.getElementById("po4");
  var x5= document.getElementById("po5");






  
  web3.eth.getAccounts().then(function (accounts) {
      myContract.methods.getDonor(uid).call({ from: accounts[0] })
          .then(function (result) {
            console.log(result[7])
              alert( "\r\n" +"Name: " + result[0] + "\r\n" + "Sex: " + result[1] + "\r\n" + "DOB: " + result[2]+ "\r\n"+"bloodgroup: " + result[3] + "\r\n"+"Organ 1: " + result[4] + "\r\n"+"Organ 2: " + result[5] + "\r\n" +"Organ 3: " + result[6] )
              
              var x1= document.getElementById("DP1");

              if(result[1]=='')
              {
             
             
              }
else{
  x1.insertCell(0).innerHTML =  result[0] ;
  x1.insertCell(1).innerHTML =  result[1] ;
  x1.insertCell(2).innerHTML =   result[2] ;
  x1.insertCell(3).innerHTML = result[3] ;
  x1.insertCell(4).innerHTML =   result[4] ;
  x1.insertCell(5).innerHTML = result[5] ;
  x1.insertCell(6).innerHTML =  result[6] ;
}















              
          });
  });



});

$("#Recsubmit").click(function () {
  console.log('hai');

  uid = parseInt(document.getElementById("Recid").value);
  
  console.log('hai'+uid);



  
  web3.eth.getAccounts().then(function (accounts) {
      myContract.methods.getPatientDet(uid).call({ from: accounts[0] })
          .then(function (result) {
            console.log( 'hai3');
              alert( "\r\n" +"Name: " + result[0] + "\r\n" + "Sex: " + result[1] + "\r\n" + "DOB: " + result[2]+ "\r\n"+"bloodgroup: " + result[3] + "\r\n"+"Organ 1: " + result[4] + "\r\n"+"Organ 2: " + result[5] + "\r\n" +"Organ 3: " + result[6] )
              
              var x1= document.getElementById("Recd1");
              if(result[1]=='')
              {
             
             
              }
else{
  x1.insertCell(0).innerHTML =  result[0] ;
  x1.insertCell(1).innerHTML =  result[1] ;
  x1.insertCell(2).innerHTML =   result[2] ;
  x1.insertCell(3).innerHTML = result[3] ;
  x1.insertCell(4).innerHTML =   result[4] ;
  x1.insertCell(5).innerHTML = result[5] ;
  x1.insertCell(6).innerHTML =  result[6] ;
}

















              
          });
  });



});