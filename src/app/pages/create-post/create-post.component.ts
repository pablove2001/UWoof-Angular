import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostService } from 'src/app/shared/services/post.service';
import { PetPost } from 'src/app/shared/interface/pet-post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {
  CreatePostForm: FormGroup;

  postCreated: PetPost = {
    kind_animal: '',
    images: [],
    user_id: '',
    purpose: ''
  }

  especie: string = '';
  descripcion: string = '';
  foto: string = '';
  raza: string = '';
  nombre: string = '';
  edad: number = 0;
  alto: number = 0;
  largo: number = 0;
  peso: number = 0;
  vacunado: boolean = false;
  castrado: boolean = false;

  constructor(formBuilder: FormBuilder, private postService: PostService, private router: Router) {
    this.CreatePostForm = formBuilder.group({
      especie: ["", [Validators.required]],
      descripcion: ["", [Validators.required]],
      foto: ["", [Validators.required]],
      raza: [""],
      nombre: [""],
      edad: [0],
      alto: [0],
      largo: [0],
      peso: [0],
      vacunado: [false],
      castrado: [false],
    })

  }

  createPost() {
    this.postCreated.kind_animal = this.especie;
    this.postCreated.images.push(this.foto);
    this.postCreated.user_id = '6442dbd086e41abfbcf09858';
    this.postCreated.purpose = 'adoption';
    this.postCreated.race = this.raza;
    this.postCreated.name = this.nombre;
    this.postCreated.age = this.edad;
    this.postCreated.vaccinated = this.vacunado;
    this.postCreated.castrated = this.castrado;
    this.postCreated.description = this.descripcion;
    this.postCreated.height_cm = this.alto;
    this.postCreated.long_cm = this.largo;
    this.postCreated.weight_kg = this.peso;

    if (this.especie == '' || this.foto == '' || this.descripcion == '') {
      window.alert('Faltan campos por llenar.');
    } else {
      this.postService.postPost(this.postCreated).subscribe((Response: any) => {
        this.router.navigate(['/posts']);
        window.alert('Se creo el post');
        console.log(Response);
      })
    }

    console.log(this.postCreated);
  }





}
