data=[{
    Title:"Rai Bular",
    Currency:"Pkr",
    IBN:"pkr124",
    Bal:100000
}]

Init();
function Init() {
    document.getElementById("title").innerText+=data[0].Title;
    document.getElementById("balance").innerText+=data[0].Bal;
    document.getElementById("currency").innerText+=data[0].Currency;
    document.getElementById("IBAN").innerText+=data[0].IBN;


}
function depositAmount(e) {
    if(e.key=="Enter"){
        var i=parseInt(document.getElementById("deposit").value);
        if(isNaN(i)){
           document.getElementById("deposit-msg").innerText="Please Enter some values";
        }
        else{
             table = document.getElementById("transaction-table");
            table.innerHTML +=
                '<tr>'
                + '<th align="left" valign="middle" scope="col">'+ new Date() +'</th>'
                + '<th align="left" valign="middle" scope="col">'+ 'Credit' +'</th>'
                + '<th align="left" valign="middle" scope="col">'+ document.getElementById("deposit").value +'</th>'
                + '</tr>';
                data[0].Bal=data[0].Bal+i;
            document.getElementById("balance").innerText=data[0].Bal;

        }
            }

}
function withdrawAmount(A){
    if(A.key=="Enter"){
        var i=parseInt(document.getElementById("withdraw").value);
        if(isNaN(i)){
            document.getElementById("withdraw-msg").innerText="Please Enter some values";
        }
        else if(document.getElementById("withdraw").value>data[0].Bal)
        {
            document.getElementById("withdraw-msg").innerText="Don't have sufficient Balance";
        }
        else{
            table = document.getElementById("transaction-table");
            table.innerHTML +=
                '<tr>'
                + '<th align="left" valign="middle" scope="col">'+ new Date() +'</th>'
                + '<th align="left" valign="middle" scope="col">'+ 'Debit' +'</th>'
                + '<th align="left" valign="middle" scope="col">'+ document.getElementById("withdraw").value +'</th>'
                + '</tr>';
            data[0].Bal=data[0].Bal-i;
            document.getElementById("balance").innerText=data[0].Bal;
        }
    }


}
