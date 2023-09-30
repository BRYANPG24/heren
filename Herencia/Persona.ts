class personas {
    name:string;
    apellido:string;
    numeroidentificacion:string;
    estadocivil:string;

    cambiodeestado(nuevoestadocivil:string) {
        this.estadocivil = nuevoestadocivil;
    }

    imprimirInformacion() {
        console.log("Nombre:",this.name);
        console.log("Apelliudos:", this.apellido);
        console.log("Nuero de identificacion", this.numeroidentificacion);
        console.log("Estado Civil:",this.estadocivil);
    }
}
