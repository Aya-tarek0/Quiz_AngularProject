# 📝 Exam Management System – Frontend (Angular)

This is the **Frontend** for the Exam Management System built using **Angular**.  
It connects to a .NET Web API backend and provides a responsive and role-based interface for both teachers and students.

🔗 **Backend Repository:**  
[➡️ Click here to view the ASP.NET Web API Backend](https://github.com/Aya-tarek0/ExamSystem)

---

## 🎯 Key Features

- **Student View**
  - Take assigned exams with multiple questions
  - View final score automatically after submission

- **Teacher View (Admin)**
  - Create exams and add/edit/delete questions
  - Choose the correct answer for each question
  - View list of students and their results

- **Shared Functionality**
  - Full CRUD for exams and questions
  - Role-based redirection (Student / Teacher)

---

## 🔐 Authentication & Authorization

- JWT-based login
- Two roles:
  - **Admin**: for teachers
  - **Student**
- Angular Guards for secure route protection and redirection
- Token storage and handling via `localStorage`

---

## 🧰 Technologies Used

- **Angular 18**
- **Angular Router**
- **Angular Guards**
- **Bootstrap**
- **JWT handling**

---
