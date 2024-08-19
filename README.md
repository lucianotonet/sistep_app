# SISTEP App

O **SISTEP App** é a interface de usuário final da plataforma SISTEP, destinada à aplicação de testes psicológicos como o DASS-21. Esta aplicação foi desenvolvida para ser intuitiva e acessível, garantindo uma experiência de usuário simplificada para pacientes e participantes.

## Funcionalidades Implementadas

- **Aplicação de Testes**: Interface amigável para aplicação de testes psicológicos, com navegação por questões e suporte para acessibilidade.
- **Interface de Registro e Login**: Sistema de autenticação para pacientes, integrando com o backend (SISTEP Admin).
- **Exibição de Resultados**: Apresentação dos resultados dos testes logo após a conclusão.

## Funcionalidades a Implementar

- **Integração com API do SISTEP Admin**: Implementar comunicação completa com o backend para envio de respostas e recuperação de resultados.
- **Melhorias de Acessibilidade**: Ajustes na interface para garantir que todas as funcionalidades sejam acessíveis a pessoas com deficiências.
- **Relatórios Personalizados**: Permitir que os usuários visualizem e compartilhem relatórios detalhados dos resultados.
- **Modo Offline**: Implementação de um modo offline para a aplicação de testes sem conexão à internet.

## Tecnologias Utilizadas

- **Framework**: Nuxt 3
- **Frontend**: Vue.js, TailwindCSS
- **Backend**: Laravel API (integrado com o SISTEP Admin)
- **Banco de Dados**: MySQL (compartilhado com o SISTEP Admin)

## Requisitos

- Node.js 14.x+
- NPM ou Yarn
- A API do SISTEP Admin configurada e em execução

## Instalação

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/lucianotonet/sistep_app.git
   ```

2. **Navegue até o diretório do projeto**:
   ```bash
   cd sistep_app
   ```

3. **Instale as dependências**:
   ```bash
   npm install
   ```

4. **Configure o arquivo `.env`**:
   - Copie o arquivo `.env.example` para `.env` e configure as variáveis de ambiente, como a URL da API do SISTEP Admin.

5. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```

6. **Acesse a aplicação**:
   - Abra o navegador e vá para `http://localhost:3000`.

## Contribuição

Contribuições são bem-vindas! Se você tiver alguma ideia ou encontrar algum bug, por favor, abra uma issue ou envie um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
