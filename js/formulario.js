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

		Swal.fire({
		  position: 'bottom-end',
		  icon: 'error',
		  title: 'Clave obligatorio',
		  showConfirmButton: true
		})
		$("#password").select();
		return false;
	}

	let pw2=$("#password_confirm").val();
	if(pw !== pw2){

		Swal.fire({
		  position: 'bottom-end',
		  icon: 'error',
		  title: 'Claves no coinciden',
		  showConfirmButton: true
		})

		$("#password_confirm").select();
		return false;
	}

	let city=$("#ciudad").val();
	if(city==""){
		Swal.fire({
		  position: 'bottom-end',
		  icon: 'error',
		  title: 'Debe elegir una ciudad',
		  showConfirmButton: true
		})

		$("#ciudad").focus();
		return false;
	}
})