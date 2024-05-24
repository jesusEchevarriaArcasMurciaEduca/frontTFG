import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrabajadoresService } from '../../services/trabajadores/trabajadores.service';
import { Trabajador } from '../../modelo/trabajador';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-trabajador',
  templateUrl: './trabajador.component.html',
  styleUrls: ['./trabajador.component.scss']
})
export class TrabajadorComponent implements OnInit {

  public trabajadores: Trabajador[] = [];
  trabajadorForm: FormGroup;

  constructor(private router: Router, private ts: TrabajadoresService,public fb: FormBuilder) { }

  ngOnInit(): void {
    this.obtenerTrabajadores();
    this.trabajadorForm = this.fb.group({
      id : [''],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      clave: ['', Validators.required],
      especialidad: ['', Validators.required]
    })
  }


  obtenerTrabajadores() {
    this.ts.getAllTrabajadores().subscribe(resp => {
      {
        this.trabajadores = resp;
        console.log(resp);
      }
      (error: any) => {
        console.error('Error al obtener los médicos:', error);
      }
    });
  }
  
  guardar(): void {
    this.ts.saveTrabajador(this.trabajadorForm.value).subscribe(resp=>{

    }
    ,(error: any) => {
      console.error('Error al obtener los médicos:', error);
    }
  )
  }

  editar(trabajador:Trabajador){
    this.trabajadorForm.setValue({
      id : trabajador.id,
      nombre : trabajador.nombre,
      apellidos: trabajador.apellidos,
      clave: trabajador.clave,
      especialidad: trabajador.especialidad
    })
    
  }

  eliminar( id:any){
    this.ts.deleteTrabajador(id).subscribe(resp=>{
      
    },
  )
  }

}
