<!DOCTYPE html>
<html lang="en">
    <head>
    	<meta charset="utf-8">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	    <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>${title}</title>
        
	    <link href="css/bootstrap.css" type="text/css" rel="stylesheet" />
	    <link href="css/bootstrap-theme.min.css" type="text/css" rel="stylesheet" />
	    <link href="css/ie10-viewport-bug-workaround.css" type="text/css" rel="stylesheet" />
	    <link href="css/theme.css" type="text/css" rel="stylesheet" />
	        
        <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
	    <!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
	    <script src="js/lib/ie-emulation-modes-warning.js"></script>
	    
	    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
	    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	    <!--[if lt IE 9]>
	      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
	      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	    <![endif]-->
    </head>
    <body>
		<!-- Fixed navbar -->
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">CesPower Demo</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" class="divider"></li>
                <li class="dropdown-header">Nav header</li>
                <li><a href="#">Separated link</a></li>
                <li><a href="#">One more separated link</a></li>
              </ul>
            </li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>

    <div class="container" theme-showcase" role="main">
        <div class="jumbotron">
        	
        	<table class="table" id="listaUsuarios"> 
				<caption>Listado de usuarios</caption> 
				<thead> 
					<tr> 
						<th>#</th> 
						<th>Nombre</th> 
						<th>Edad</th> 
						<th>Salario</th>
						<th>Editar</th>
						<th>Eliminar</th>
					</tr> 
				</thead>
				<tbody></tbody>
        	</table>
        	
        	<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#altaModal">
			Alta
			</button>
        </div>
    </div>
    
    <!-- Modal -->
<div class="modal fade" id="altaModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Alta de usuario</h4>
      </div>
      <div class="modal-body">
        
         <form action="#">
		  <div class="form-group">
		    <label for="nombre">Nombre:</label>
		    <input type="text" class="form-control" id="nombre" />
		  </div>
		  <div class="form-group">
		    <label for="edad">Edad</label>
		    <input type="number" class="form-control" id="edad" min="1" max="100" />
		  </div>
		  <div class="form-group">
		    <label for="salario">Salario</label>
		    <input type="number" class="form-control" id="salario" />
		  </div>
		</form> 
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary" id="guardarBTN">Guardar</button>
      </div>
    </div>
  </div>
</div>

<!-- Modal -->
<div class="modal fade" id="editarModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Editar usuario</h4>
      </div>
      <div class="modal-body">
        
         <form action="#">
         <input type="hidden" id="idEditar" />
		  <div class="form-group">
		    <label for="nombre">Nombre:</label>
		    <input type="text" class="form-control" id="nombreEditar" />
		  </div>
		  <div class="form-group">
		    <label for="edad">Edad</label>
		    <input type="number" class="form-control" id="edadEditar" min="1" max="100" />
		  </div>
		  <div class="form-group">
		    <label for="salario">Salario</label>
		    <input type="number" class="form-control" id="salarioEditar" />
		  </div>
		</form> 
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary" id="editarBTN">Guardar</button>
      </div>
    </div>
  </div>
</div>

<!-- Modal -->
<div class="modal fade" id="eliminarModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Eliminar usuario</h4>
      </div>
      <div class="modal-body">
        
         <form action="#">
          <input type="hidden" id="idEliminar" />
		  <div class="form-group">
		    <label for="nombre">Esta seguro de eliminar el usuario <strong id="nombreUsuarioEti"></strong>?</label>
		  </div>
		</form> 
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary" id="elimnarBTN">Eliminar</button>
      </div>
    </div>
  </div>
</div>

    
    <script src="js/lib/jquery-1.12.4.min.js"></script>
    <script src="js/lib/bootstrap.min.js"></script>
    <script src="js/lib/docs.min.js"></script>
    <script src="js/lib/ie10-viewport-bug-workaround.js"></script>
    
    <script src="js/app/usuarios.js"></script>
    </body>
</html>