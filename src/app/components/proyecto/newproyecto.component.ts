import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImageService } from 'src/app/service/image.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent {
  proyecto: Proyecto=null; 
  nombreP:string;
  descriptionP:string;
  img:string;

  constructor(private proyectoS: ProyectoService, private router: Router, public imageService: ImageService,private activatedRouter: ActivatedRoute){}
  ngOnInit(): void {}

  onCreate():void{
    const educacion= new Proyecto(this.nombreP, this.descriptionP, this.img);
    const id = this.activatedRouter.snapshot.params['id'];
  this.proyecto.img=this.imageService.url
    this.proyectoS.save(educacion).subscribe(
      data=>{
        alert("Proyecto añadido correctamente");
        this.router.navigate(['']);
      }, error=>{
        alert("Fallo");
        this.router.navigate(['']);
      })
   }
   uploadImage($event:any) {
    const id= this.activatedRouter.snapshot.params[2];
    const name="proyecto_" + id;
  this.imageService.uploadImage($event, name);
  }
}
