// deposit

function deposit_btn(){
    let deposit_amount = document.getElementById("deposit_amount").value;
    let deposit_amount_int = parseInt(deposit_amount);
    let current_deposit = document.getElementById("current_deposit").innerText;
    let current_deposit_int = parseInt(current_deposit);
    let total_deposit = deposit_amount_int + current_deposit_int;
    document.getElementById("current_deposit").innerText = total_deposit;
    let total_balance = document.getElementById("total_balance").innerText;
    let total_balance_int = parseInt(total_balance);
    let new_total_balance = total_balance_int + deposit_amount_int;
    document.getElementById("total_balance").innerText = new_total_balance;
    document.getElementById("deposit_amount").value = " ";
    document.getElementById("current_deposit").innerText = total_deposit;
    document.getElementById("total_balance").innerText = new_total_balance;


}

// withdraw
function withdraw_btn(){
    let withdraw_amount = document.getElementById("withdraw_amount").value;
    let withdraw_amount_int = parseInt(withdraw_amount);
    let current_withdraw = document.getElementById("current_withdraw").innerText;
    let current_withdraw_int = parseInt(current_withdraw);
    let total_withdraw = withdraw_amount_int + current_withdraw_int;
    document.getElementById("current_withdraw").innerText = total_withdraw;
    let total_balance = document.getElementById("total_balance").innerText;
    let total_balance_int = parseInt(total_balance);
    if(withdraw_amount_int>total_balance_int){
        alert("you have insufficient balance");
        return false;
    }
    let new_total_balance = total_balance_int - withdraw_amount_int;
    document.getElementById("total_balance").innerText = new_total_balance;
    document.getElementById("withdraw_amount").value = " ";
    document.getElementById("current_withdraw").innerText = total_withdraw;
    document.getElementById("total_balance").innerText = new_total_balance;
    

}