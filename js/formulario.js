// $ = selector de Jquery
$(document).on("click",".btn_registrar",function(){

	let us=$("#user_name").val();
	if(us.trim().length<5){

		Swal.fire({
		  position: 'bottom-end',
		  icon: 'error',
		  title: 'Usuario es obligatorio',
		  showConfirmButton: true
		})
		$("#user_name").select();
		return false;
	}

	let pw=$("#password").val();

	if(pw.trim().length<5){
		alert("Clave obligatorio");
		$("#password").select();
		return false;
	}

	let pw2=$("#password_confirm").val();
	if(pw !== pw2){
		alert("Claves no coinciden");
		$("#password_confirm").select();
		return false;
	}

	let city=$("#ciudad").val();
	if(city==""){
		alert("Elija una ciudad");
		$("#ciudad").focus();
		return false;
	}
})