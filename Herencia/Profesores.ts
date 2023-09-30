class Profesores extends empleados {
    departamento:string;

    cambiarDepartamento(nuevoDepartamento: string) {
        this.departamento = nuevoDepartamento;
    }
}

const profesores = new Profesores();
profesores.departamento;
profesores.name;
profesores.apellido;
profesores.numeroidentificacion;
profesores.estadocivil;
profesores.numerodespacho
