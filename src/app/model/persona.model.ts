export class Persona{
    id?:number;
    nombre: string;
    apellido: string;
    description: string;
    img: string;
    constructor( nombre:string,apellido:string,description:string,img:string){
        this.nombre = nombre;
        this.apellido =apellido;
        this.description= description;
        this.img = img;
    }}