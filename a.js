
      var apiKey = "T1QtMTE3MDQwOkItcWEyLTAtNTk1NjRlNWMtMC0zMDJjMDIxNDdmMDU4M2I2OGY4ZWQyNjkxNDIxMDczMzZiYWIyMTZmOWMzZGJiNTEwMjE0MTgwYzY1NGQ3OTgzZmI2NTliYzEzZWY4YWMyZmQ1MTliMjVhOTQxZQ==";
            
      var options = {

        environment: "TEST",

        fields: {
          cardNumber: {
            selector: "#cardNumber",
            placeholder: "Card number"
          },
          expiryDate: {
            selector: "#expiryDate",
            placeholder: "Expiry date"
          },
          cvv: {
            selector: "#cvv",
            placeholder: "CVV"
          }
        }
      };

      paysafe.fields.setup(apiKey, options, function(instance, error) {

      
        document.getElementById("payNow").addEventListener("click", function(event) {
          instance.tokenize(function(instance, error, result) {
            if (error) {
              
              alert(JSON.stringify(error));
            } else {


              $( "#token" ).text( "Token: " + result.token );

              console.log(result.token);
            }
          });
        }, false);
      });
