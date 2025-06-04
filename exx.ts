import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  menuOpen = false;

  // JEE Form
  jeeData = {
    jeeMain: '',
    jeeAdv: '',
    category: '',
    state: '',
    gender: ''
  };
  categories = ['General', 'OBC', 'SC', 'ST', 'EWS'];
  states = ['TN', 'MH', 'DL', 'KA'];
  genders = ['Male', 'Female', 'Other'];
  captcha = '';
  captchaInput = '';

  // To-do
  taskInput = '';
  tasks: { text: string; completed: boolean }[] = [];

  ngOnInit() {
    this.generateCaptcha();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  generateCaptcha() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    this.captcha = Array.from({ length: 5 }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
  }

  submitForm() {
    if (this.captchaInput.trim() !== this.captcha.trim()) {
      alert("Captcha does not match. Please try again.");
      this.generateCaptcha();
      return;
    }
    console.log("Form submitted successfully:", this.jeeData);
    alert("Form submitted successfully! (Check console for details)");
    this.jeeData = { jeeMain: '', jeeAdv: '', category: '', state: '', gender: '' };
    this.captchaInput = '';
    this.generateCaptcha();
  }

  addTask() {
    const text = this.taskInput.trim();
    if (!text) {
      alert("Please enter a task.");
      return;
    }
    this.tasks.push({ text, completed: false });
    this.taskInput = '';
  }

  deleteTask(task: any) {
    this.tasks = this.tasks.filter(t => t !== task);
  }

  toggleComplete(task: any) {
    task.completed = !task.completed;
  }
}

  