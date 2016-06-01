$(document).ready(function(){
    
    $("#Quotebutton").click(function(){
        //var url ="http://quotes.rest/qod.json";
      var url2 ="http://api.adviceslip.com/advice";
        //alert("hellllo LAdy");
        $.getJSON(url2, function(response) {
                    
                //console.log(response.slip["advice"]);
                var advice= response.slip["advice"];
           
                
              $("#quotes").empty();
              $("#quotes").append("<h1>"+advice+"</h1>");
              
              $("a.twitter-share-button").attr("href","https://twitter.com/intent/tweet?text="+advice)
                      
                       
                       
                });
      
     
        
        
    });
    
     
      //$("#tweetbutton").click(function(){
       //  $("#tweetbutton").attr("href",function(i,href){
         //     return href + 
         // })
      
      //});
        
    
}
    
    
    
);