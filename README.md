# Minhas tarefas 📝
Este é um projeto de uma aplicação de lista de tarefas desenvolvida utilizando **React** e **Redux**. A aplicação permite gerenciar tarefas, cadastrando novas, filtrando por critérios e editando o status delas. Projeto desenvolvido no curso da @EBAC

🔗 Link da produção: https://minhas-tarefaslbonan.vercel.app/
<hr>

## ✨Funcionalidades
- **📝Adicionar Tarefas**: O usuário pode cadastrar novas tarefas com título, descrição e prioridades.
- **🔍Filtrar Tarefas**: O usuário pode filtrar as tarefas por prioridade, status e por uma pesquisa.
- **🗑️Remover e Editar Tarefas**: As tarefas podem ser editadas ou removidas.

## 💻 Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
   - **React Redux**: Integração do Redux com o React.
   - **React Router**: Biblioteca para gerenciar as rotas da aplicação.
- **Redux**: Biblioteca para gerenciamento de estado.
- **Styled Components**: Para estilização da aplicação.
- **TypeScript**: Linguagem usada no projeto para adicionar tipagem estática ao JavaScript.
<hr>

## 📂 Estrutura do Projeto
````csharp
├── .vscode/                       # Configurações do VS Code
├── public/                        # Arquivos públicos, incluindo index.html
├── src/                           # Código-fonte do projeto
│   ├── components/                # Componentes reutilizáveis
│   │   ├── BotaoAdicionar/        # Componente para adicionar tarefas
│   │   ├── FiltroCard/            # Componente de filtro de tarefas
│   │   └── Tarefa/                # Componente de tarefa individual
│   ├── containers/                # Containers da aplicação
│   │   ├── BarraLateral/          # Barra lateral de navegação e filtros
│   │   ├── Formulario/            # Formulário de adição e edição de tarefas
│   │   └── ListaDeTarefas/        # Lista para exibição de tarefas
│   ├── models/                    # Definições de modelos de dados
│   ├── pages/                     # Páginas da aplicação
│   ├── store/                     # Configuração e gerenciamento do estado global (Redux)
│   ├── styles/                    # Estilos globais e temas
│   ├── utils/                     # Funções utilitárias
│   │   └── enums/                 # Definições de enums
│   ├── App.tsx                    # Componente principal da aplicação
│   ├── index.tsx                  # Ponto de entrada da aplicação
│   ├── react-app-env.d.ts         # Declarações de tipos
│   └── reportWebVitals.ts         # Métricas de desempenho
├── .editorconfig                  # Configurações do EditorConfig
├── .eslintrc.json                 # Configurações do ESLint
├── .prettierrc                    # Configurações do Prettier
├── package-lock.json              # Controle de versão das dependências
├── package.json                   # Dependências e scripts
└── tsconfig.json                  # Configurações do TypeScript

`````

## 🚀 Como Clonar e Executar o Projeto

1.**Clone o repositório:**
```bash
git clone https://github.com/Lbonan/minhas-tarefas.git
```
2.**Navegue até a pasta do projeto:**
```bash
cd minhas-tarefas
```
3.**Instale as dependências:**
```bash
npm install
```
4.**Execute o projeto em modo de desenvolvimento:**
```bash
npm start
```
O projeto será iniciado no endereço http://localhost:3000.
<br>
## 🏖️Imagens do projeto
![Imagem da home do projeto](https://github.com/user-attachments/assets/b82782a2-fe0b-41e3-8173-c1505bc3248c)
![Imagem da parte de cadastro de tarefa](https://github.com/user-attachments/assets/3f4eedd0-9d61-41d0-8383-58a9bb12acab)
