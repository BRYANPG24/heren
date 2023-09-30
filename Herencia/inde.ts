import { estudiantes } from "./Estudiantes";

const persona1 = new Personas();
persona1.name = "Angelo";
persona1.apellido = "Morales";
persona1.numeroidentificacion = "1555646789";
persona1.estadocivil = "Soltero";
persona1.imprimirInformacion();

persona1.cambiodeestado("Casado");
persona1.imprimirInformacion();

const Estudiante1 = new estudiantes();
Estudiante1.name = "Anita";
Estudiante1.apellido = "Lopez";
Estudiante1.numeroidentificacion = "987654321";
Estudiante1.estadocivil = "Soltera";
Estudiante1.curso= "Cálculo";
Estudiante1.imprimirInformacion();

Estudiante.matriculaNuevoCurso("Álgebra");
Estudiante.imprimirInformacion();

const profesor1 = new Profesores();
profesor1.name = "Oscar";
profesor1.apellido = "Lucas";
persona1.numeroidentificacion = "786756123";
profesor1.estadocivil = "Casado";
profesor1.departamento = "Matematicas";

profesor1.cambiarDepartamento("fisica general");
profesor1.imprimirInformacion();

const Empleados1 = new empleados();
Empleados1.name = "Henry";
Empleados1.apellido = "Lopez";
Empleados1.numeroidentificacion = "789123456";
Empleados1.estadocivil = "Soltero";
Empleados1.anoincorporacion = 2015;
Empleados1.numerodespacho = "D-201";


Empleados1.Reasignaciondespacho("C-123")
Empleados1.imprimirInformacion();

const PersonalServicio1 = new personalservicio();
PersonalServicio1.name = "Anabel";
PersonalServicio1.apellido = "Moreira";
PersonalServicio1.numeroidentificacion = "654321987"
PersonalServicio1.estadocivil = "casada";
PersonalServicio1.anoincorporacion = 2018;
PersonalServicio1.numerodespacho = "A-101";
PersonalServicio1.seccion = "Biblioteca";


PersonalServicio1.transladarsección("Decanato");
PersonalServicio1.imprimirInformacion();
