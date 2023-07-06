"use strict";


var $ = function (id) {
    return document.getElementById(id); 
};

var processEntries = function(){

	var sub = parseFloat($("subtotal").value);
	var taxRate = parseFloat($("tax_rate").value);
    var income = parseFloat($("income").value);

	if (isNaN(sub) || isNaN(taxRate)){
		alert("Both entries must be numeric");
	} else{
		var salesTax=sub*taxRate;
		var saleTotal=sub+salesTax;
        var incomeTax=income*taxRate;
        var incomeTotal=income-incomeTax
		var taxReduction=incomeTax-salesTax

		$('sales_tax').value=parseFloat(salesTax);
		$('total').value=parseFloat(saleTotal);
		$('Itotal').value=parseFloat(incomeTotal);
		$('tax').value=parseFloat(incomeTax);
		$('reduce').value=parseFloat(taxReduction);
		
	}	
};

var clear = function(){
	$("subtotal").value="";
	$("tax_rate").value="";
    $("income").value="";
	$("total").value="";
	$("sales_tax").value="";
	$("Itotal").value="";
	$("tax").value="";
	$("reduce").value="";
	$("subtotal").focus();
};

var clearSub = function(){
	$("subtotal").value="";
};

var clearRate = function(){
	$("tax_rate").value="";
};

var clearRate = function(){
	$("income").value="";
};

window.onload=function(){
	$("calculate").onclick=processEntries;
	$("subtotal").focus();
	$("clear").onclick=clear;
	$("subtotal").onclick=clearSub;
	// $("income").onclick=clear;
	$("Itotal").onclick=clear();
	$("total").onclick=clear();
	$("tax").onclick=clear();
	$("reduce").onclick=clear();
	$("tax_rate").onclick=clearRate;

}