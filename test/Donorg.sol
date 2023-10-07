//SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.7.3;

/**
 * @title Owner
 * @dev Set & change owner
 */





contract Don {

struct Details {   // Universal details for both donor and patient
    
   uint id;
   string name;
   string dob;
   string sex;
   string bg; //blood group
   string org1;
   string org2;
   string org3;
   
}




struct MatchDetails {  // Universal details for match
    
   uint did;
   string dname;
   string ddob;
   string dsex;
   string dbg; //blood group
   string dorg1;
   string dorg2;
   string dorg3;
   
    uint pid;
   string pname;
   string pdob;
   string psex;
   string pbg; //blood group
   string porg1;
   string porg2;
   string porg3;
   
}

   uint rQ=1; // count for patient waiting list 

     
     mapping(uint => Details) Recieve;
       mapping(uint => Details) Patient;
  mapping(uint => MatchDetails) Match;
     
      mapping(uint => Details) Donate;
      
      
              //Set donor details to chain
     function setDonor(uint Did,string memory Dname,string memory dob,string memory sex,string memory bg,string memory dorg1,string memory dorg2,string memory dorg3) public {
      Donate[Did] = Details(Did,Dname,dob,sex,bg,dorg1,dorg2,dorg3);
      
   }
   
   
   
   
   
   
   //get donor details from the chain
   function getDonor(uint Did) public view returns (string memory,string memory,string memory,string memory,string memory,string memory,string memory) {
     return  (Donate[Did].name,Donate[Did].dob,Donate[Did].sex,Donate[Did].bg,Donate[Did].org1,Donate[Did].org2,Donate[Did].org3);
   }
 
    
    //set patient details to the chain
     function setPatient(string memory Dname,string memory dob,string memory sex,uint256 ph,string memory bg,string memory dorg1,string memory dorg2,string memory dorg3) public {
      Recieve[rQ] = Details(rQ,Dname,dob,sex,bg,dorg1,dorg2,dorg3);
      Patient[ph]= Details(rQ,Dname,dob,sex,bg,dorg1,dorg2,dorg3);
      rQ++;
      
   }
   
   
  
   function getPatientDet (uint Did) public view returns (string memory,string memory,string memory,string memory,string memory,string memory,string memory) {
     return  (Patient[Did].name,Patient[Did].dob,Patient[Did].sex,Patient[Did].bg,Patient[Did].org1,Patient[Did].org2,Patient[Did].org3);
   }
   
   

   
   
   //get the patient waiting list from the chain
   function getWaitingList() public view returns (string memory,uint256,string memory,uint256,string memory,uint256,string memory,uint256) {
     return  (Recieve[1].name,Recieve[1].id,Recieve[2].name,Recieve[2].id,Recieve[3].name,Recieve[3].id,Recieve[4].name,Recieve[4].id);
   }
   
   
   
   
   
   //removes a patient from the waiting list
    function popPatient(uint a) public  
    {
         uint j=a;
         
      
       
          
          while (j <= rQ) {
                              if(  j==rQ )
                              {
                                  delete Recieve[j] ;
                              }
                              else{
                                Recieve[j] = Recieve[j+1];
                                
                               delete Recieve[j+1] ;
                               j=j+1;
                                 
                                      }
                                      
                                        rQ=rQ-1;
                      
                    }
            
          
    }
    
    
   // matches a patient
        function matchDonor(uint donorid,uint recipientid) public {
            Match[donorid+recipientid].did=Donate[donorid].id ;
          
   Match[donorid+recipientid].dname =Donate[donorid].name ;
   Match[donorid+recipientid].ddob=Donate[donorid].dob ;
   Match[donorid+recipientid].dsex=Donate[donorid].sex ;
   Match[donorid+recipientid].dbg=Donate[donorid].bg ;
   Match[donorid+recipientid].dorg1=Donate[donorid].org1 ;
   Match[donorid+recipientid].dorg2=Donate[donorid].org2 ;
   Match[donorid+recipientid].dorg3=Donate[donorid].org3 ;
   
   Match[donorid+recipientid].did=Donate[donorid].id ;
          
Match[donorid+recipientid].pid=Recieve[recipientid].id ;
   Match[donorid+recipientid].pname=Recieve[recipientid].name ;
   Match[donorid+recipientid].pdob=Recieve[recipientid].dob ;
   Match[donorid+recipientid].psex=Recieve[recipientid].sex ;
   Match[donorid+recipientid].pbg=Recieve[recipientid].bg ;
   Match[donorid+recipientid].porg1=Recieve[recipientid].org1 ;
   Match[donorid+recipientid].porg2=Recieve[recipientid].org2 ;
   Match[donorid+recipientid].porg3=Recieve[recipientid].org3 ;
   
   
   

    
    delete Donate[donorid] ;
       popPatient(recipientid);   
          
    }  
    
 
       
    
    
    //View the matched donor and patient details
       function MatchView(uint id) public view returns (string memory,string memory) {
     return  (Match[id].dname,Match[id].pname);
   }



// Authentication Part
    
    
    
    struct MNDetails {   // Universal details for MCN
    
   uint id;
   string name;
   string location;
   string email;
   uint phone;
   string addres;
   string username;
   string password;
   bool valid;

   
}


   
   
   
   uint VIc=0;

uint[100] Valinfo;

 
    uint mQ=1; // count for patient waiting list 
    
     

     
   
     
     mapping(uint => MNDetails) MNReg;
     
      string NottoAdminU ="Admin"; //Default ID
     string NottoAdminP= "admin@trial";
     
     
   //Notto Admin login check
     
     function NottoLoginCheck(string memory a,string memory b)public view returns (string memory )
     {
         if(keccak256(bytes(a)) == keccak256(bytes(NottoAdminU)) && keccak256(bytes(b)) == keccak256(bytes(NottoAdminP)) )
         {
             return "true";
         }
         
         else
         {
             return "false";
         }
         
         
         
     }
     
     
         //Medical center login check
     function MCNLoginCheck(uint phone,string memory uname,string memory pwd)public view returns (string memory )
     {
         if(keccak256(bytes( MNReg[phone].username )) == keccak256(bytes(uname)) && keccak256(bytes(MNReg[phone].password)) == keccak256(bytes(pwd)) &&  MNReg[phone].valid  == true )
         {
             return "true";
         }
         
         else
         {
             return "false";
         }
         
         
         
     }
     
   //medical center registration
       function setMN(string memory name,string memory loc,string memory email ,uint256 phone ,string memory addres,string memory musername,string memory mpassword) public   {
      MNReg[phone] = MNDetails(phone,name,loc,email,phone,addres,musername,mpassword,false);
      Valinfo[VIc]=phone;
      VIc=VIc+1;
      

   }
   
   
 //Validate medical center
       function getMNW() public view returns (uint256,string memory,string memory,string memory) 
       {
      
           
           for(uint256 i =0;i<VIc ;i++)
           {
               if(MNReg[Valinfo[i]].valid==false)
               {
                return (MNReg[Valinfo[i]].id,MNReg[Valinfo[i]].name,MNReg[Valinfo[i]].location,MNReg[Valinfo[i]].email);
               }
                 
             
        
              
      
      
            }
            
            return (1,"error","error","error");
       }
       
       //accept medical center
       function NottoAccept(uint256 val) public 
       {
          MNReg[val].valid=true;
         
        
           
        
           
       }
       
       
       //delete medical node
        function NottoDelete(uint256 val) public 
       {
             delete MNReg[val];
            
       
               
           
        
           
       }
       
       
       

 
}














