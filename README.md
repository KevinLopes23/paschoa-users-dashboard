<div align="center">

# 📊 Paschoa Users Dashboard

**Painel de gestão de usuários com API em ASP.NET Core, PostgreSQL e integração com a Random User API.**

![C#](https://img.shields.io/badge/C%23-512BD4?style=for-the-badge&logo=dotnet&logoColor=white)
![.NET](https://img.shields.io/badge/.NET_9-512BD4?style=for-the-badge&logo=dotnet&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

</div>

## 💡 Sobre

Dashboard para listar, editar e excluir usuários, com um botão que gera usuários com dados realistas a partir da [Random User Generator](https://randomuser.me). O back-end é uma Web API em .NET 9 com Entity Framework Core e PostgreSQL; o front-end é HTML, CSS e JavaScript puro.

## ✨ Funcionalidades

- Listagem de usuários com foto, nome, e-mail, gênero e cidade
- Criação de usuário aleatório via Random User API
- Edição e exclusão de usuários
- Layout de dashboard responsivo

## 🛠️ Tecnologias

- **Back-end:** C# / ASP.NET Core Web API (.NET 9), Entity Framework Core, PostgreSQL, Swagger
- **Front-end:** HTML5, CSS3, JavaScript, Font Awesome

## 📌 Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| `GET` | `/api/users` | Lista os usuários |
| `GET` | `/api/users/{id}` | Busca um usuário pelo ID |
| `POST` | `/api/users` | Cria um usuário |
| `PUT` | `/api/users/{id}` | Atualiza um usuário |
| `DELETE` | `/api/users/{id}` | Remove um usuário |
| `POST` | `/api/users/random` | Gera e salva um usuário da Random User API |

## 🚀 Como rodar

Requer .NET 9 SDK, PostgreSQL e a ferramenta `dotnet-ef`.

1. Ajuste `ConnectionStrings:DefaultConnection` em `PaschoaUsers/PaschoaApi/appsettings.json` (ou use a variável de ambiente `ConnectionStrings__DefaultConnection`).
2. Suba a API (`http://localhost:5234`):

```bash
git clone https://github.com/KevinLopes23/paschoa-users-dashboard.git
cd paschoa-users-dashboard/PaschoaUsers/PaschoaApi
dotnet ef database update
dotnet run
```

3. Abra `PaschoaUsers/frontend/index.html` no navegador (ou sirva a pasta com qualquer servidor estático). O front-end aponta para `http://localhost:5234/api/users` em `script.js`.

## 👤 Autor

Feito por [Kevin Lopes](https://github.com/KevinLopes23)
