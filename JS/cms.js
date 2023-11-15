// LECT-16,17
var arr_ids=[];
var arr_name=[];
var arr_address=[];
var arr_mobile=[];
function add_click()
{
let id=document.getElementById('txtId').value;
let name=document.getElementById('txtName').value;
let address=document.getElementById('txtAddress').value;
let mobile_no=document.getElementById('txtMobile').value;
arr_ids.push(id);
arr_name.push(name);
arr_address.push(address);
arr_mobile.push(mobile_no);
alert('Customer Added SuccessFully!!');
display_data();
//alert('OK ADD');
}
function search_click()
{
    let id=document.getElementById('txtId').value;
    let i=arr_ids.indexOf(id);
    if(i==-1)
    {
        alert('ID Not Found!!');
    }
    else
    {
        document.getElementById('txtName').value=arr_name[i];
        document.getElementById('txtAddress').value=arr_address[i];
        document.getElementById('txtMobile').value=arr_mobile[i];
    }
    //alert('OK SEARCH');
}
function modify_click()
{
    let id=document.getElementById('txtId').value;
    let i=arr_ids.indexOf(id);
    if(i==-1)
    {
        alert('ID Not Found!!');
    }
    else
    {
        arr_name[i]=document.getElementById('txtName').value;
        arr_address[i]= document.getElementById('txtAddress').value;
        arr_mobile[i]=document.getElementById('txtMobile').value;
        alert('Customer Updated SuccessFully!!');
        display_data();
    }
    //alert('OK MODIFY');
}
function delete_click()
{
    let id=document.getElementById('txtId').value;
    let i=arr_ids.indexOf(id);
    if(i==-1)
    {
        alert('Id not Found!!');
    }
    else
    {
        arr_ids.splice(i,1);
        arr_name.splice(i,1);
        arr_address.splice(i,1);
        arr_mobile.splice(i,1);
        alert('Customer Deleted SuccessFully!!');
        display_data();
    }
    //alert('OK DELETE');
}
var cur_index=0;
function first_click()
{
   cur_index=0;
   show_data_by_index(cur_index);
   resetColor();
   var cus_row=document.getElementById(cur_index.toString());
   cus_row.style.backgroundColor='green';
   //alert('OK FIRST');
}
function last_click()
{
    cur_index=arr_ids.length-1;
    show_data_by_index(cur_index);
    resetColor();
    var cus_row=document.getElementById(cur_index.toString());
    cus_row.style.backgroundColor='pink';
    //alert('OK LAST');
}
function prev_click()
{
    if(cur_index!=0)
    {
    cur_index--;
    }
    show_data_by_index(cur_index);
    resetColor();
    var cus_row=document.getElementById(cur_index.toString());
    cus_row.style.backgroundColor='cyan';
    //alert('OK PREV');
}
function resetColor()
{
    for(let i=0;i<arr_ids.length;i++)
    {
        var cus_row=document.getElementById(i.toString());
        cus_row.style.backgroundColor='white';
    }
}
function next_click()
{
    if(cur_index!=arr_ids.length-1)
    {
    cur_index++;
    }
    show_data_by_index(cur_index);
    resetColor();
    var cus_row=document.getElementById(cur_index.toString());
    cus_row.style.backgroundColor='blue';
    //alert('OK NEXT');
}
function showall_click()
{
   display_data();
}
function show_data_by_index(i)
{
    document.getElementById('txtId').value=arr_ids[i];
    document.getElementById('txtName').value=arr_name[i];
    document.getElementById('txtAddress').value=arr_address[i];
    document.getElementById('txtMobile').value=arr_mobile[i];
}
function display_data()
{
    var div_table=document.getElementById("div_table");
    var myTable=`<table border="3" align="center" bgcolor="white" width="40%">
        <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>ADDRESS</th>
            <th>MOBILE</th>
        </tr>`
        for(let i=0;i<arr_ids.length;i++)
        {
        myTable+=`<table border="3" align="center" bgcolor="white" width="40%">
        <tr id="${i.toString()}">
        <td>${arr_ids[i]}</td>
        <td>${arr_name[i]}</td>
        <td>${arr_address[i]}</td>
        <td>${arr_mobile[i]}</td>
        </tr>`
        }
       myTable+="</table>";
       div_table.innerHTML=myTable;
    //div_table.innerText="I am trying to modify inner text  of div.";
    // <td>`+arr_ids[i]+`</td>
    // <td>`+arr_name[i]+`</td>
    // <td>`+arr_address[i]+`</td>
    // <td>`+arr_mobile[i]+`</td>
}