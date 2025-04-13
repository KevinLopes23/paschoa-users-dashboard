# 📊 PaschoaUsers - Dashboard de Gestão
Painel de gerenciamento de usuários com integração à API [Random User Generator](https://randomuser.me), utilizando front-end moderno e estilizado com HTML, CSS e JavaScript puro, e back-end em .NET + PostgreSQL.
---
## ✨ Funcionalidades
- ✅ Listar usuários cadastrados
- ✅ Criar usuário aleatório com dados reais
- ✅ Editar dados de qualquer usuário
- ✅ Excluir usuário
- ✅ Integração com API externa (Random User)
- ✅ Design estilo dashboard com responsividade
---
## 🧰 Tecnologias utilizadas
### Front-end
- HTML5
- CSS3 (customizado, responsivo)
- JavaScript (puro)
- FontAwesome para ícones
### Back-end
- ASP.NET Core Web API (.NET 9)
- PostgreSQL
- Entity Framework Core

---
## 📁 Estrutura do Projeto
```
PaschoaUsers/
├── frontend/              # Interface do usuário
│   ├── index.html         # Página principal
│   ├── script.js          # Lógica JavaScript
│   └── style.css          # Estilos CSS
│
├── PaschoaApi/            # Projeto ASP.NET Core (backend)
│   ├── bin/               # Diretório de compilação
│   ├── Controllers/       # Controladores da API
│   ├── Data/              # Camada de acesso a dados
│   ├── Migrations/        # Migrações do Entity Framework
│   ├── Models/            # Modelos de dados
│   ├── obj/               # Arquivos temporários de compilação
│   ├── Properties/        # Configurações do projeto
│   ├── appsettings.Development.json # Configurações de desenvolvimento
│   ├── appsettings.json   # Configurações gerais
│   ├── PaschoaApi.csproj  # Arquivo de projeto .NET
│   ├── PaschoaApi.http    # Arquivo para testes HTTP
│   └── Program.cs         # Ponto de entrada da aplicação
│
├── .gitattributes         # Configurações do Git
└── README.md              # Este arquivo
```

---
## 🚀 Como executar o projeto

### Pré-requisitos
- [.NET 9 SDK](https://dotnet.microsoft.com/download/dotnet/9.0)
- [PostgreSQL](https://www.postgresql.org/download/)
- [Node.js](https://nodejs.org/) (opcional, para servidor de desenvolvimento local)

### Configuração do Banco de Dados
1. Instale o PostgreSQL e crie um banco de dados chamado `paschoausers`:
```sql
CREATE DATABASE paschoausers;
```

2. Anote as credenciais de acesso (servidor, porta, usuário e senha)

### Executando o Back-end
1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/paschoausers.git
cd paschoausers
```

2. Configure a string de conexão com o banco de dados no arquivo `PaschoaApi/appsettings.json`:
```json
"ConnectionStrings": {
  "DefaultConnection": "Host=localhost;Port=5432;Database=paschoausers;Username=seu_usuario;Password=sua_senha;"
}
```

3. Execute as migrações para criar a estrutura do banco de dados:
```bash
cd PaschoaApi
dotnet ef database update
```

4. Inicie a API:
```bash
dotnet run
```

A API estará disponível em `https://localhost:5001` ou em `http://localhost:5000`.

### Executando o Front-end
1. Navegue até a pasta do front-end:
```bash
cd ../frontend
```

2. Você pode abrir o arquivo `index.html` diretamente no navegador ou usar um servidor local:

   - Usando Node.js com http-server (recomendado):
     ```bash
     npm install -g http-server
     http-server -p 8080
     ```
     Acesse `http://localhost:8080` no navegador.

   - Ou simplesmente abra o arquivo `index.html` no seu navegador.

3. Se necessário, configure a URL da API no arquivo `script.js`:
```javascript
const API_URL = 'http://localhost:5000/api';
```

---
## 📝 Informações adicionais

### Endpoints da API
- `GET /api/users` - Lista todos os usuários
- `GET /api/users/{id}` - Obtém um usuário específico
- `POST /api/users` - Cria um novo usuário
- `PUT /api/users/{id}` - Atualiza um usuário existente
- `DELETE /api/users/{id}` - Remove um usuário
- `GET /api/users/random` - Obtém um usuário aleatório da API externa

### Recursos utilizados
- **Random User Generator API**: Utilizada para gerar dados realistas de usuários
- **Entity Framework Core**: ORM para acesso ao banco de dados
- **CORS**: Configurado para permitir chamadas do front-end para a API

### Solução de problemas comuns
- Se ocorrer erro de CORS, verifique se o back-end está configurado para aceitar requisições do domínio do front-end
- Em caso de falha de conexão com o banco de dados, confirme se as credenciais estão corretas e se o PostgreSQL está em execução
- Para problemas com a API externa, verifique sua conexão com a internet e se a Random User API está operacional

### Ambiente de produção
Para implantar em ambiente de produção:
1. Publique a API .NET:
```bash
cd PaschoaApi
dotnet publish -c Release
```

2. Configure um servidor web (Nginx, Apache) para servir os arquivos estáticos do front-end
3. Configure um servidor de aplicação para hospedar a API .NET
4. Atualize as URLs de API no front-end conforme necessário

---
---
## 👨‍💻 Autor
**Kevin Lopes**

* GitHub: [@KevinLopes23](https://github.com/KevinLopes23)
* LinkedIn: [@kevin-lopes](https://www.linkedin.com/in/kevin-lopes-151797221/)
