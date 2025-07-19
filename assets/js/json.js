$(document).ready(function () {
    $.ajax({
        url: "../assets/data/data_json/iestp.json",
        method: "GET",
        datatype: "json",
        success: function (data) {
            $("#institucion").text(data.institucion);
            $("#tema").text(data.tema);
            $("#nombre").text(data.nombre);
            $("#unidad").text(data.unidad);
            $("#carrera").text(data.carrera);
            $("#periodo").text(data.periodo);
        } 
    })
    })
    
        
    $(document).ready(function () {
    $.ajax({
        url: "../assets/data/data_json/alumno.json",
        method: "GET",
        datatype: "json",
        success: function (data) {
        
            const estudiantes = data.estudiantes;
            estudiantes.forEach(function (estudiante) {
                 const fila =
                `<tr>
                    <td>${estudiante.dni}</td>
                    <td>${estudiante.nombre}</td>
                    <td>${estudiante.apellido}</td>
                    <td>${estudiante.edad}</td>
                 </tr>`;
                $("#alumnos tbody").append(fila);
            });
            
        } 
    })
    })
    
    
    
    $(document).ready(function () {
    $.ajax({
        url: "../assets/data/data_json/cursos.json",
        method: "GET",
        datatype: "json",
        success: function (data) {
            const cursos = data.cursos;
            cursos.forEach(function (curso) {
                 const fila =
                `<tr>
                    <td>${curso.id_curso}</td>
                    <td>${curso.nombre_curso}</td>
                    <td>${curso.n_horas}</td>
                 </tr>`;
                $("#cursos tbody").append(fila);
            });
    
        } 
    })
    })
    
    
    $(document).ready(function () {
    $.ajax({
        url: "../assets/data/data_json/docente.json",
        method: "GET",
        datatype: "json",
        success: function (data) {    
            const docentes = data.docentes;
            docentes.forEach(function (docente) {
                 const fila =
                `<tr>
                    <td>${docente.dni}</td>
                    <td>${docente.nombre}</td>
                    <td>${docente.apellido}</td>
                    <td>${docente.curso}</td>
                 </tr>`;
                $("#docentes tbody").append(fila);
            });
        } 
    })
    })
    
    