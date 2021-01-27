var users_data = [];
document.addEventListener('DOMContentLoaded', function(){
    var plan = localStorage.getItem('packageData'); 
    if(plan){
        users_data = JSON.parse(plan);
      }
        console.log(users_data);
        getting_contact_id();
        display_user_details();
    });
  
function display_user_details(){
    var Name_of_user, Phone_of_user, MessageDate, MailOfUser, Message;
    Name_of_user = document.getElementById("name");
    Phone_of_user = document.getElementById("phone");
    MessageDate = document.getElementById('date_with_time');
    MailOfUser = document.getElementById('email');
    Message = document.getElementById('message');
    message_date=new Date();

    Name_of_user.innerHTML = users_data[users_data.length-1].sender_name;  
    Phone_of_user.innerHTML = users_data[users_data.length-1].phone_number;
    MessageDate.innerHTML = message_date.getDate() + "/" +  message_date.getMonth()+1 + "/" +  message_date.getFullYear();
    MailOfUser.innerHTML = users_data[users_data.length-1].mail_from;
    Message.innerHTML = users_data[users_data.length-1].message;
}      


function getting_contact_id(){
     var contact_id = Math.floor((Math.random() * 10e9));
    document.getElementById('o-number').innerHTML = "Contact Id: " + contact_id; 
}
