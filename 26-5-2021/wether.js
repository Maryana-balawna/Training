var url = "http://api.weatherapi.com/v1/current.json?key=7e69a98eed07441b9d3173415210605&q=palestine&aqi=no";
fetch (url).then(respone=> {return respone.json()})
           .then(data=>{console.log(data);
           document.getElementById("country").innerHTML+= data.country

           document.getElementById("submit").innerHTML+= data.submit
})
           .catch(error=>{console.log(error);})

          
          
          
          
          
          
          
          
          
          
          
          
          
           /*async function wether(url
            , data ) {
                var respone= await function(url ,{
                    method : "get",
                    headers: { "Content-Type": "application/json" },
                });
                return response.json(); 

               }*/
             



             //mahmoud solve
             var country = document.getElementById("country").value || 'Egypt' // the country witch been enterd by the user
var url = "http://api.weatherapi.com/v1/current.json?key=7e69a98eed07441b9d3173415210605&q=%22+country+%22&aqi=no"; //API LINK

//start of GetTodayForcast
async function GetTodayForcast(){
    var results = await fetch(this.url).then( 
        res => {
            return res.json()
        }).then(results => {
            console.log(results)
        });
    return await results;
}
//end of GetTodayForcast