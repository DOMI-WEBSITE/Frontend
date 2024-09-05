import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-update-account',
  standalone: true,
  imports: [],
  templateUrl: './update-account.component.html',
  styleUrl: './update-account.component.css'
})
export class UpdateAccountComponent {

  private backendUrl = `${environment.APIURL}/api/usuario`;

  selectedFile: File | null = null;

  constructor(private http: HttpClient) { }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      // Llamada HTTP para subir el archivo
      this.http.post(this.backendUrl, formData)
        .subscribe(response => {
          console.log('Archivo subido exitosamente', response);
        }, error => {
          console.error('Error subiendo el archivo', error);
        });
    }
  }

}
