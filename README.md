<h1 align="center">To do List</h1>

<p align="center">
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
  <img src="https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white"/>
  <img src="https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white"/>
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>

</p>

<div align="center">

  ![Last commit](https://img.shields.io/github/last-commit/JosivalJr/to-do-list?color=4DA1CD 'Last commit') &nbsp;
  ![Repo size](https://img.shields.io/github/repo-size/JosivalJr/to-do-list?color=4DA1CD 'Repo size') &nbsp;
  ![Languages](https://img.shields.io/github/languages/count/JosivalJr/to-do-list?color=4DA1CD 'Languages') &nbsp;

</div>

<br>

## 💻 Project
This project was developed to demonstrate  knowledge in the backend and frontend technologies used specifically in this project, and is also used for portfolio and tests in selection processes.

The project consists of two applications, an API with CRUD developed in Python with Django and SQLite, and an interface developed with React.
It will be possible to list, create, edit and delete tasks.

<br>

## 🧪 Technologies

This project was developed with the following technologies:

- [Node.js](https://nodejs.org/en)
- [React](https://react.dev/reference/react)
- [Django](https://docs.djangoproject.com/en/5.0/)
- [SQLite](https://www.sqlite.org/)
- [Styled Components](https://styled-components.com/docs)

<br>

## 💻  Required
<br>

- Locally installed [Node.js](https://nodejs.org/en) and [Python](https://www.python.org/doc/)

<br>

## 🚀 How Execute

<br>

- Clone the project and access its folder.

```bash
  git clone https://github.com/JosivalJr/to-do-list.git
  
  cd to-do-list/
```
<br>

- [Windows] Access backend project and create and activate python environment.

```bash
  cd backend/
  python -m venv venv
  . venv/Scripts/activate
```
<br>

- [Linux] Access backend project and create and activate python environment.

```bash
  cd backend/
  python -m venv venv
  source ./.venv/bin/activate
```
<br>

- Install all librarys.

```bash
  python.exe -m pip install --upgrade pip
  pip install -r requirements.txt
  python manage.py migrate
```
<br>

- Go back to frontend and install all dependencies.

```bash
  cd ..
  cd frontend/
  npm install
```
<br>

- Create and fill ```.env``` file:

```bash
  echo "REACT_APP_API_URL=http://localhost" >> .env
  echo "REACT_APP_API_PORT=8000" >> .env
```
<br>

- Build frontend application:

```bash
  npm run build
```
<br>

- Run server:

```bash
  cd ..
  cd backend/
  . venv/Scripts/activate
  python manage.py runserver
```
<br>

Application will be running locally on: http://localhost:8000/

<br>




## 📝 License

This project is under the MIT license. see the file [LICENSE](./LICENSE.md) for more details.

---

 
[![Linkedin Badge](https://img.shields.io/badge/-Josival-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/josivaloliveira/)](https://www.linkedin.com/in/josivaloliveira/)
[![Gmail Badge](https://img.shields.io/badge/-josivaljgoliveira@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:josivaljgoliveira@gmail.com)](mailto:josivaljgoliveira@gmail.com)
