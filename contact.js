function generate_receipt(){
    get_value();
}

var package = [];
let currdata;
var sender_name, phone_number, mail_from, message, message_date;

function get_value(event){
    sender_name = document.getElementById('name').value; 
    phone_number = document.getElementById('number').value;
    message_date = new Date();
    mail_from = document.getElementById('email').value;
    message = document.getElementById('message').value;   
    let data={ 
        sender_name,
        phone_number,
        message_date,
        mail_from,
        message,
    }
    var old_data = localStorage.getItem('packageData');
    if(old_data){
        package = JSON.parse(old_data);
    }
    package.push(data);
    localStorage.setItem('packageData', JSON.stringify(package));
    console.log(package);
}
