# PROJECT   - D O N O R G

## Important Contents:

1.  Donorg.sol - The smart contract.
2.  donorg - Geth Chain Data Backup.
3.  Public Test Network Deployment Details - Contains Contract Address & Etherscan Link


## Setting Up the project:


**Step 1:** Download the repository using the command:  
```
 Git Clone "https://gitlab.com/thevargheseshibu/donorg.git"  

 ```


**Step 2:** Enter into the repository folder, install all the dependencies using the below command: 
```
 npm Install  
 ```


**Step 3:** Smart contract deployment
```

 a. Goto "http://remix.ethereum.org/". 
 b. Under file section click open and select donorg.sol from the repository folder.
 c. Go to the compiler section and compile donorg.sol

 ```

 
**Step 4:** Setting up metamask 
```

 a. Goto "https://metamask.io/". 
 b. Install metamask for your browser.
 c. Setup an account and keeping the valuables(password,seedphrase) safe.
 d. Find the "Import Account " option from the top right side icon.
 e. Import the "UTC--2020-12-29T18-22-38.831656800Z--b4b16218e6ad1d58f089e536f9a6672bfe85a958" from "/data/keystore" by selecting "Select Type" as json file from metamask(Password:click enter).

 ```



**Step 5:** Use below steps to connect to the private or public chain:  

**Private chain:** 
```
a. Run the following command on a terminal: (Password is empty,click enter)
 geth --identity "KBA" --networkid "5777" --datadir "data" --http --http.port "8545" --unlock "0" --http.corsdomain "*" --http.api "eth,net,web3,personal,miner" --allow-insecure-unlock console

b. Run the below command before starting any transactions:
 miner.start()

c. Select "Injected Web3" as Environment in the remix.

d. Select  "Localhost:8545" in metamask(make sure the account has enough ethers. If not start the mining using step b.).

e. Deploy the "donorg.sol" using deploy button from remix.

f. Copy the ABI and contract address from compile and deploy section of the remix

g. Paste the ABI and contract address data into the contractAbi & contractAddress variables in "/app.js" respectively.

h. Run the following command inside the folder repository to initiate the  dapp using the command  
 npm start

i. Click the "connect to metamask" button under "DONORG" in the "http://localhost:3000/" of the browser to finish the connection.



```
 

**Ropsten:**  
```

a. Select "Injected Web3" as Environment in remix.

b. Select  "Ropsten Test Network" in metamask
(make sure the account has enough ethers. If not get ethers from "https://faucet.dimensions.network/)".

c. Deploy the "donorg.sol" using deploy button from remix.

d. Copy the ABI and contract address from compile and deploy section of the remix

e. Paste the ABI and contract address data into the contractAbi & contractAddress variables in "/app.js" respectively.

f. Run the following command inside the folder repository to initiate the  dapp using the command  
 npm start

g. Click the "connect to metamask" button under "DONORG" in the "http://localhost:3000/" of the browser to finish the connection.

Contract Address : "0x11B67C18C3515e94CeAE802637A4A6bc17Ebe992"

Etherscan Link : "https://ropsten.etherscan.io/address/0x11B67C18C3515e94CeAE802637A4A6bc17Ebe992"

```

## Execution Flow:


**Step 7:**  Under http://localhost:3000/ in browser, 

             **Authentication**

            Select the action "LOGIN AS NOTTO ADMIN"
            Enter Username as :"Admin"
            Enter Password as :"admin@trial"
            Click "Login" Button
            Select the action "Validate Medical Center Nodes" 

            Select the action "Maintain Donor List"

            In another tab , Goto  http://localhost:3000/ , 

            Select Action "MEDICAL CENTER PORTAL"

            1. Do the registration.
            
            In Previous tab click "Validate Medical node" button and accept the Medical Node.

            2. Do the Login in second tab.

            And Click on "Add donor " Action


            a. Enter the donor details:

            ex:  
            
            Donor Name : Dean Winchester
            Donor Sex : Male
            Date of Birth: 03/18/1981
            Donor BloodGroup: O-
            Organ List 1 : Heart
            Organ List 2 : Lung
            Organ List 3 : None

            b. Retrieve the above donor details :
                Enter the "Mobile" and click submit.

**Step 8:**  Go back on the browser and Select the action "Add Patient"

            a. Enter the patient details:

            ex:  

            First time :
                Donor ID : 1
                Donor Name : Sam Winchester
                Donor Sex : Male
                Date of Birth: 03/18/1982
                Donor BloodGroup: O-
                Organ List 1 : Heart
                Organ List 2 : Lung
                Organ List 3 : None 
            
            Second time :
                Donor ID : 2
                Donor Name : Mary Winchester
                Donor Sex : Male
                Date of Birth: 03/18/1960
                Donor BloodGroup: O-
                Organ List 1 : Heart
                Organ List 2 : Lung
                Organ List 3 : None 



            b. Retrieve the Waiting list :
                click "Get waiting list".

            c. Remove patient from waiting list :
                Enter the "ID" from waiting list and click submit.
                Ex: 1


**Step 9:**  Go back on the browser and Select the action "Match Portal"

                a. Enter the donor and patient id to and click submit to match:

                    ex:  Donor id: 9712345678
                        Patient id : 2
                

                    b. Retrieve Match list:
                        Enter the sum of donor id and patient id to retrieve the "Match Details" :" 9712345680".


**Step 10:** Public Portal:

        a.  Select action Donor portal: "Enter Donor Phone Number to view Donor details"
        b.  Select action Patient portal: "Enter Patient Phone Number to view Patient details"

        Check waiting list and donor details to know that they have been erased from their respective database and added to match list database.


```
END

