import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

interface ContactData {
  privacy: boolean;
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  http = inject(HttpClient);
  isSubmitting = false;
  mailTest = false;
  showSuccessMessage = false;

  contactData: ContactData = {
    name: '',
    email: '',
    message: '',
    privacy: false,
  };

  post = {
    endPoint: 'https://portfolio.joshuaplischek.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text as const',
      },
    },
  };

  onSubmit(ngForm: NgForm, form: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(
          this.post.endPoint,
          this.post.body(this.contactData),
          this.post.options
        )
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.showSuccessMessage = true; // Overlay anzeigen

            // Optional: Overlay nach 5 Sekunden automatisch schließen
            setTimeout(() => {
              this.showSuccessMessage = false;
            }, 5000);
          },
          error: (error) => {
            console.error(error);
            // Hier könntest du auch ein Error-Overlay anzeigen
          },
          complete: () => console.info('send mail complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
      this.showSuccessMessage = true; // Auch für Test-Modus
    }
  }

  closeSuccessMessage() {
    this.showSuccessMessage = false;
  }
}
