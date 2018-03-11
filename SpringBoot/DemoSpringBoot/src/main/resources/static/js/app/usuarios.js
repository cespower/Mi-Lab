$( document ).ready(function() {
	//Recuperar listado de usuarios
	listadoDeUsuarios();
	
	$("#guardarBTN").click(guardar);
	
	$("#editarBTN").click(actualizar);
	
	$("#elimnarBTN").click(eliminar);
});

function listadoDeUsuarios(){
	$.get("api/user/", function(data) {
	  //console.log(data);
	  
	  $("#listaUsuarios > tbody").html('');
	  
	  $.each(data, function( index, value ) {
		  
		  var cad = '<tr>' +  
			'<th scope="row">' + value.id + '</th>' +
			'<td>' + value.name + '</td>' +  
			'<td>' + value.age + '</td>' +
			'<td>' + value.salary + '</td>' + 
			'<td><span style="cursor:pointer;" class="glyphicon glyphicon-pencil" onclick="cargarEditar(' + value.id + ', \'' + value.name + '\', ' + value.age + ', ' + value.salary + ')"></span></td>' +
			'<td><span style="cursor:pointer;" class="glyphicon glyphicon-trash" onclick="cargarEliminar(' + value.id + ', \'' + value.name + '\')"></span></td>'
		'</tr>';
		  
		  $("#listaUsuarios > tbody").append(cad);
	  });
	});
}

function guardar(){	
	var user = {};
	user.name=$("#nombre").val();
	user.age=$("#edad").val();
	user.salary=$("#salario").val();
	
	$.ajax({
        url: "api/user/",
        method: "POST",
        data: JSON.stringify(user),
        dataType: 'json',
        contentType: "application/json",
        success: function(result){
        	console.log(result);
 			$('#altaModal').modal('hide');
 			listadoDeUsuarios();
         },
         error(jqXHR, textStatus, errorThrown){
             //Do something
         }
    }); 
}

function cargarEditar( id, name, age, salary){
	console.log(id);
	console.log(name);
	console.log(age);
	console.log(salary);
	
	$("#idEditar").val(id);
	$("#nombreEditar").val(name);
	$("#edadEditar").val(age);
	$("#salarioEditar").val(salary);
	
	$('#editarModal').modal('show');
}

function actualizar(){	
	var user = {};
	user.name=$("#nombreEditar").val();
	user.age=$("#edadEditar").val();
	user.salary=$("#salarioEditar").val();
	
	$.ajax({
        url: "api/user/" + $("#idEditar").val(),
        method: "PUT",
        data: JSON.stringify(user),
        dataType: 'json',
        contentType: "application/json",
        success: function(result){
        	console.log(result);
 			$('#editarModal').modal('hide');
 			listadoDeUsuarios();
         },
         error(jqXHR, textStatus, errorThrown){
             //Do something
         }
    }); 
}

function cargarEliminar(id, name){
	$("#idEliminar").val(id);
	$("#nombreUsuarioEti").html(name);
	
	$('#eliminarModal').modal('show');
}

function eliminar(){
	
	$.ajax({
        url: "api/user/" + $("#idEliminar").val(),
        method: "DELETE",
        dataType: 'json',
        contentType: "application/json",
        success: function(result){
        	console.log(result);
 			$('#eliminarModal').modal('hide');
 			listadoDeUsuarios();
         },
         error(jqXHR, textStatus, errorThrown){
             //Do something
         }
    });
}