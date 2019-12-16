
// business logic section
$(document).ready(function() {
  // form submission function
  $("#checkout-form").submit(function(event) {
    // a constructor to define data needed in ordering pizzas
    function UserOrder(size, crust, toppings, quantity, flavour) {
      this.flavour = flavour;
      this.size = size;
      this.toppings = toppings;
      this.crust = crust;
      this.quantity = quantity;
    }

    // getting user data - price
    var pizzaFlavourPrice = function getFlavour() {
      var pizzaFlavour = document.getElementById("pizzaflavour").value;
      return parseInt(pizzaFlavour);
    };

    var pizzaSizePrice = function getSize() {
      var pizzaSize = document.getElementById("pizzasize").value;
      return parseInt(pizzaSize);
    };

    var pizzaToppingsPrice = function getToppings() {
      var pizzaToppings = document.getElementById("toppings").value;
      return parseInt(pizzaToppings);
    };

    var pizzaCrustPrice = function getCrust() {
      var pizzaCrust = document.getElementById("crust").value;
      return parseInt(pizzaCrust);
    };

    var pizzaQuantityPrice = function getQuantity() {
      var pizzaQuantity = document.getElementById("quantity").value;
      return parseInt(pizzaQuantity);
    };

    //initializing a new order
    var inputForUserOrder = new UserOrder(
      pizzaFlavourPrice(),
      pizzaSizePrice(),
      pizzaToppingsPrice(),
      pizzaCrustPrice(),
      pizzaQuantityPrice()
    );

    //a variable to get the total price of the user's order
    var totalPrice =
      (inputForUserOrder.flavour +
        inputForUserOrder.size +
        inputForUserOrder.toppings +
        inputForUserOrder.crust) *
      inputForUserOrder.quantity;

    //control user input
    if (totalPrice > 0) {
      //total user order price
      alert("Your total order is amounting to = ksh" + totalPrice);

      //prompt for delivery
      var delivery = confirm(
        "For an additional ksh200, we can deliver your order to your location instantly. Would you want that?"
      );

      //delivery control flow
      if (delivery === true) {
        //infinite loop to control correct location entry
        for (;;) {
          var location = prompt(
            "Please enter your location to facilitate easy delivery: "
          );

          //checking validity of user input
          if (location !== "") {
            alert(
              "Your order will be delivered here: " +
                location +
                ". Thank you for choosing us! Order again soon and win!"
            );

            break;
          } else {
            alert(
              "Please enter a valid location to have your order delivered!"
            );
          }
        }

        //final prompt
        alert(
          "In case you missed it... Your total order is = ksh" +
            totalPrice +
            " + ksh200 delivery fee."
        );
      } else {
        alert(
          "Thank you for choosing us! Your order has been processed, pass by our restaurant to pick it."
        );

        //final prompt
        alert(
          "In case you missed it... Your total order is = ksh" + totalPrice
        );
      }

      //reset form
      $("#get-pizza-order").reset();
    } else {
      alert("Please fill in all the form inputs to make an order!");
    }

    event.preventDefault();
  });
});

