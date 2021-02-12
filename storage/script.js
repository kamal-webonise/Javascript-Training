var session = {storage: sessionStorage};
var local = {storage: localStorage};

// Sets List Item

function set()
{
     //alert("hello");
     var Key=document.getElementById("key").value;
     var Value=document.getElementById("value").value;  
     
     if(Key.length==0 || Value.length==0)
         alert("Missing Field");
     else
     {
        this.storage.setItem(Key,Value);
        console.log("Set Item in Storage"); 
     }
}

// show List Items

function getItems()
{
    var i=this.storage.length;
    while(i--)
    {
        var Key=this.storage.key(i);
        console.log(this.storage.key(i));
        console.log(this.storage.getItem(Key));
    }  
}


// Delete ALL List Items

function deleteItems()
{
    var records=this.storage.length;
    while(records--)
    {
        var Key=this.storage.key(records);
        this.storage.removeItem(Key);
    }
  
}

// Delete one Item

function deleteO()
{
    var records=this.storage.length;
    while(records--)
    {
        var Key=this.storage.key(records);
        var userinput=document.getElementById("key1").value;
        if(userinput == Key)
          this.storage.removeItem(Key);
    }
}





var set_local_storage = set.bind(local);
var set_session_storage = set.bind(session);

var get_local_storage = getItems.bind(local);
var get_session_storage = getItems.bind(session);

var delete_local_storage = deleteItems.bind(local);
var delete_session_storage = deleteItems.bind(session);

var delete_key_pair_local = deleteO.bind(local);
var delete_key_pair_session = deleteO.bind(session);




// Set Function 

var localButton=document.getElementById("setLocal");

localButton.addEventListener("click",set_local_storage);



var sessionButton=document.getElementById("setSession");

sessionButton.addEventListener("click",set_session_storage);


//To show the listItems

var getLSitems=document.getElementById("getLocal");

getLSitems.addEventListener("click",get_local_storage);



var getSSlist=document.getElementById("getSession");

getSSlist.addEventListener("click",get_session_storage);


// Delete List items Fuction


var delLSitems=document.getElementById("deleteLocal");

delLSitems.addEventListener("click",delete_local_storage);


var delSSitems=document.getElementById("deleteSession");

delSSitems.addEventListener("click",delete_session_storage);


// Delete a Key Value Pair

var del=document.getElementById("deleteLoc");

del.addEventListener("click",delete_key_pair_local);

var del=document.getElementById("deleteses");

del.addEventListener("click",delete_key_pair_session);
