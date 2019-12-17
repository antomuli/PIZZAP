$(document).ready(function () {
  $("#checkout-form").submit(function (event) {
    function UserOrder(size, crust, toppings, quantity, flavour) {
      this.flavour = flavour;
      this.size = size;
      this.toppings = toppings;
      this.crust = crust;
      this.quantity = quantity;
    }


    var pizzaFlavourPrice = function () {
      var pizzaFlavour = $("#pizzaflavour").val();
      return parseInt(pizzaFlavour);
    };

    var pizzaSizePrice = function () {
      var pizzaSize = $("#pizzasize").val();
      return parseInt(pizzaSize);
    };

    var pizzaToppingsPrice = function () {
      var pizzaToppings = $("#toppings").val();
      return parseInt(pizzaToppings);
    };

    var pizzaCrustPrice = function () {
      var pizzaCrust = $("#crust").val();
      return parseInt(pizzaCrust);
    };

    var pizzaQuantityPrice = function () {
      var pizzaQuantity = $("#quantity").val();
      return parseInt(pizzaQuantity);
    };


    var inputForUserOrder = new UserOrder(
      pizzaFlavourPrice(),
      pizzaSizePrice(),
      pizzaToppingsPrice(),
      pizzaCrustPrice(),
      pizzaQuantityPrice()
    );


    var totalPrice =
      (inputForUserOrder.flavour +
        inputForUserOrder.size +
        inputForUserOrder.toppings +
        inputForUserOrder.crust) *
      inputForUserOrder.quantity;




    if (totalPrice > 0) {

      alert("Your total order is amounting to = ksh " + totalPrice);


      var delivery = confirm(
        "For an additional ksh. 200, we can deliver your order to your location instantly. Would you want that?"
      );


      if (delivery === true) {

        for (;;) {
          var location = prompt(
            "Please enter your location to facilitate easy delivery: "
          );


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


        alert(
          "In case you missed it... Your total order is = ksh" +
          totalPrice +
          " + ksh. 200 delivery fee."
        );
      } else {
        alert(
          "Thank you for choosing us! Your order has been processed, pass by our restaurant to pick it."
        );


        alert(
          "In case you missed it... Your total order is = ksh " + totalPrice
        );
      }


      $("#get-pizza-order").reset();
    } else {
      alert("Please fill in all the form inputs to make an order!");
    }

    event.preventDefault();
  });
});