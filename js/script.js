
const callHistory = [];

// get value
function getValue(id) {
  const getValue = parseInt(document.getElementById(id).innerText);
  return getValue;
}
// set value
function setValue(id, value) {
  const setValue = document.getElementById(id);
  setValue.innerText = value;
}

// heart button event handler
const heartBtns = document.getElementsByClassName("heart-btn");
for (const heartBtn of heartBtns) {
  heartBtn.addEventListener("click", function () {
    const previousHeartValue = getValue("heart-storage");
    const newValue = previousHeartValue + 1;
    setValue("heart-storage", newValue);
  });
}

// reuseable function------------

function callHistoryAndCoin(id1,id2){
     const getHeadline = document.getElementById(id1).innerText;
    const getNumber = document.getElementById(id2).innerText;
    const getCoinStorage = document.getElementById("coin-storage").innerText;
    if (getCoinStorage >= 20 ) {
        alert("Calling" + " " + getHeadline + " " + getNumber);
        const newCoin = getCoinStorage - 20;
        document.getElementById("coin-storage").innerText = newCoin;
    } 
    else {
      alert("you do not have available coin");
      return;
    }
    const callData = {
                service:getHeadline,
                number:getNumber,
                date:new Date().toLocaleTimeString()
    }

    callHistory.unshift(callData);
   const historyContainer = document.getElementById('call-history');
   const div = document.createElement('div');
   div.innerHTML = `
   <div id="history" class="flex justify-between bg-[#fafafa] my-2 p-3 ">
                        <div class = "max-w-[210px]">
                            <h1 class="text-xl font-semibold">${callHistory[0].service}</h1>
                            <h2>${callHistory[0].number}</h2>
                        </div>
                        <div class = "flex justify-center items-center text-xl font-semibold">
                            <p>${callHistory[0].date}</p>
                        </div>
                    </div>
   `;
   historyContainer.appendChild(div);

}

// call button event handler

document
  .getElementById("call-btn-emergency")
  .addEventListener("click", function () {
   callHistoryAndCoin('National-emergency','emergency-number');
  });

  document.getElementById('call-btn-police').addEventListener('click',function(){
    callHistoryAndCoin('police-helpline','police-helpline-number');
  })



  document.getElementById('call-btn-fireService').addEventListener('click',function(){
    callHistoryAndCoin('fire-service','fire-service-number');
  })


  document.getElementById('call-btn-women').addEventListener('click',function(){
    callHistoryAndCoin('women-child','women-child-number');
  })


  document.getElementById('call-btn-anti').addEventListener('click',function(){
    callHistoryAndCoin('Anti-Corruption','Anti-Corruption-number');
  })


  document.getElementById('call-btn-electricity').addEventListener('click',function(){
    callHistoryAndCoin('Electricity','Electricity-number');
  })

  
  document.getElementById('call-btn-brac').addEventListener('click',function(){
    callHistoryAndCoin('brac-helpline','brac-helpline-number');
  })


  document.getElementById('call-btn-railway').addEventListener('click',function(){
    callHistoryAndCoin('Railway','Railway-number');
  })

//   clear button functionality 

document.getElementById('clear-btn').addEventListener('click',function() {
    document.getElementById('call-history').innerText = ' ';
})


 
