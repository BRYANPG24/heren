class estudiantes extends Personas {
    curso: string;

    matricarNuevoCurso(nuevoCurso: string) {
        this.curso = nuevoCurso;
    }
}


const Estudiante = new estudiantes();
Estudiante.curso;
Estudiante.name;
Estudiante.apellido;
Estudiante.numeroidentificacion;
Estudiante.estadocivil;
