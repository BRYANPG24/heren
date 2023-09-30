class empleados extends Persona {
    tipo:string;
    anoincorporacion:number;
    numerodespacho:string;

    Reasignaciondespacho(Nuevodespacho){
        this.numerodespacho = Nuevodespacho;

    }


}
const Empleados = new empleados ();
Empleados.tipo;
Empleados.anoincorporacion;
Empleados.numerodespacho;
Empleados.name;
Empleados.apellido;
Empleados.numeroidentificacion;
