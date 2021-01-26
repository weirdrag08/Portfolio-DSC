var transactions = [];
document.addEventListener('DOMContentLoaded', function(){
    var plan = localStorage.getItem('packageData'); 
    if(plan){
        transactions = JSON.parse(plan);
      }
        console.log(transactions);
        getting_order_number();
        display_payment_details();
    });
  
function display_payment_details(){
    var Name_of_user, Cardnumber_of_user, PurchasedDate, MailOfUser, Message;
    Name_of_user = document.getElementById("name");
    Cardnumber_of_user = document.getElementById("phone");
    PurchasedDate = document.getElementById('date_with_time');
    MailOfUser = document.getElementById('email');
    Message = document.getElementById('message');
    message_date=new Date();

    Name_of_user.innerHTML = transactions[transactions.length-1].sender_name;  
    Cardnumber_of_user.innerHTML = transactions[transactions.length-1].phone_number;
    PurchasedDate.innerHTML = message_date.getDate() + "/" +  message_date.getMonth()+1 + "/" +  message_date.getFullYear();
    MailOfUser.innerHTML = transactions[transactions.length-1].mail_from;
    Message.innerHTML = transactions[transactions.length-1].message;
}      


function getting_order_number(){
    order_number = Math.floor((Math.random() * 10e9));
    document.getElementById('o-number').innerHTML = "Contact Id: " + order_number; 
}
