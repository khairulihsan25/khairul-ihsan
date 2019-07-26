function cari() {
	var kata = document.formcari.keyword.value;
	var hasil = "https://www.google.co.id/?hl=id="+kata;
	window.open(hasil,'google', config='height=500, width=auto,scrollbars=yes, location=yes')
}
function displaydate(){
	document.getElementById("demo").innerHTML = Date();
}
function daftar(){
	var name= document.formdaftar.nama.value;
	if (nama=="") alert("nama tidak boleh kosong");
}