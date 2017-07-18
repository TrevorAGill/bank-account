var globalBalance = 0;
$(document).ready(function(){
  $("form#account").submit(function(event) {
    event.preventDefault();
    var inputtedNames = $("input#names").val();
    var inputtedInitial = parseInt($("input#initial").val());


    var account = new Account(inputtedNames, inputtedInitial);

    function Account(name, initial) {
      this.names = names;
      this.initial = initial;
      return this.initial;
    }

    $(".result").text("Balance: $" +  account.initial);
    globalBalance = globalBalance + account.initial;
    alert(globalBalance);
    });

$("form#transactions").submit(function(event) {
  event.preventDefault();

  var inputtedDeposit = parseInt($("input#deposit").val());
  var inputtedWithdrawal = parseInt($("input#withdrawal").val());

  var inputtedDeposit = 0;
  var inputtedWithdrawal = 0;
  var inputtedInitial = 0;



  var transactions = new Transactions(inputtedDeposit, inputtedWithdrawal, inputtedInitial)

  $(".result2").text("Balance: $" + Account);
  function Transactions(deposit, withdrawal, initial, balance) {
    this.deposit = deposit;
    this.withdrawal= withdrawal;
    this.initial= initial;
    this.balance= balance;
  }

    Transactions.prototype.deposit = function() {
      
    }

    Transactions.prototype.withdrawal = function() {

    }

    Account.prototype.Balance = function() {
      return 0 + this.Age() + this.Showtime();
    }



    Account.prototype.receipt = function() {
    return this.names + " " + this.initial + " " + this.deposit + " " + this.withdrawal + ' ' + this.balance();
    }





    $("#result").text(currentStatus.Balance())
  event.preventDefault();
  });
});
