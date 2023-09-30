class personalservicio extends empleados{
    seccion:string;

    transladarsección(nuevasección: string) {
        this.seccion = nuevasección;
    }
}

const Personalservicio = new personalservicio();
Personalservicio.seccion;
Personalservicio.name;
Personalservicio.apellido;
Personalservicio.numeroidentificacion;
Personalservicio.estadocivil;
Personalservicio.numerodespacho;
