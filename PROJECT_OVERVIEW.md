**Visão Geral do Projeto: Plataforma Online para Aplicação e Correção de Testes Psicológicos _SYSTEP_**

---

### Contexto do Projeto

Um time multidisciplinar composto por um desenvolvedor de software e uma estudante de mestrado em psicologia está trabalhando em um projeto para desenvolver uma plataforma online destinada à aplicação e correção de testes psicológicos. O foco principal do projeto é avaliar a aceitação dessa plataforma por parte de psicólogos e seus pacientes/clientes, levando em consideração aspectos como facilidade de uso, confiabilidade, confidencialidade e satisfação geral dos usuários. O primeiro teste a ser implementado na plataforma será o DASS-21 (Depression Anxiety Stress Scales), amplamente utilizado para avaliar sintomas de depressão, ansiedade e estresse.

### Objetivo

O objetivo central deste projeto é avaliar a aceitação de uma plataforma online para aplicação e correção de testes psicológicos por psicólogos e seus pacientes/clientes, com foco em fatores como facilidade de uso, confiabilidade, confidencialidade e satisfação geral dos usuários. Inicialmente, será implementado o teste DASS-21 (Depression Anxiety Stress Scales), um instrumento consagrado para avaliação de sintomas de depressão, ansiedade e estresse.

### Principais Características da Plataforma

1. **Acessibilidade**: A plataforma permitirá que usuários realizem testes psicológicos online a partir de qualquer localidade com acesso à internet, aumentando a acessibilidade e conveniência, especialmente para áreas remotas.

2. **Eficiência**: A automação da aplicação e correção de testes irá otimizar o processo e economizar tempo para os psicólogos.

3. **Coleta e Análise de Dados**: A plataforma centralizará a coleta de dados, facilitando análises e comparações.

4. **Confidencialidade e Segurança**: A confidencialidade e segurança dos dados dos usuários serão priorizadas, com implementação de armazenamento seguro e cumprimento de regulamentos de privacidade.

5. **Escalabilidade**: Inicialmente com o DASS-21, o design da plataforma permitirá a expansão para incluir diferentes testes psicológicos no futuro.

### Abordagem Técnica

O desenvolvimento técnico da plataforma utilizará o framework Laravel com a biblioteca Filament para a interface administrativa de gerenciamento e correção de testes por psicólogos, proporcionando um ambiente de desenvolvimento eficiente e uma interface robusta.

#### Componentes Principais

1. **Modelagem de Testes e Perguntas**: Haverá um modelo base para testes, contendo informações gerais como nome, descrição e instruções. Testes específicos (como o DASS-21) herdarão ou serão associados a esse modelo base.
   - O DASS-21 terá um conjunto fixo de 21 perguntas armazenadas no banco de dados.
   - Futuros testes com perguntas dinâmicas utilizarão um modelo "Pergunta" associado ao modelo "Teste".

2. **Tipos de Resposta**: A plataforma implementará diferentes tipos de resposta, com foco inicial na escala Likert, utilizada pelo DASS-21. Essa abordagem facilitará a adição de novos tipos de resposta para outros testes. Para a escala Likert, serão oferecidos dois estilos de opções de resposta: formato tradicional de texto e formato com emojis. Os usuários poderão alternar entre os estilos de acordo com suas preferências e necessidades.

3. **Interface Dinâmica**: Para suportar uma interface dinâmica e responsiva, a plataforma utilizará tecnologias como Vue.js, Laravel Blade ou Alpine.js, permitindo a renderização de diferentes formatos de perguntas com base nos dados estruturados.

4. **Recursos Administrativos**: A biblioteca Filament será empregada para criar uma interface de administração elegante, na qual os psicólogos poderão gerenciar testes, visualizar resultados e realizar correções.

### Considerações para Implementação

1. **Clareza nas Instruções**: Garantir que as instruções dos testes sejam claras e compreensíveis para evitar mal-entendidos durante a realização dos testes online.

2. **Confidencialidade e Privacidade**: Implementar protocolos de segurança e privacidade rigorosos para o armazenamento e tratamento dos dados dos usuários.

3. **Recursos de Suporte**: Fornecer recursos e canais de suporte psicológico para usuários que possam necessitar de assistência adicional após a realização dos testes.

4. **Comunicação Objetiva**: Comunicar de forma clara os objetivos do estudo e as limitações da plataforma em relação a previsões e diagnósticos individuais.

### Interface com Emojis e Opção de Alternar Estilos

Para tornar a experiência do usuário mais envolvente e intuitiva, a plataforma oferecerá a opção de utilizar emojis como opções de resposta para perguntas com escala Likert. No entanto, reconhecendo que alguns usuários podem preferir um formato mais tradicional, também será disponibilizada a opção de exibir as opções de resposta em formato de texto.

Os usuários poderão alternar facilmente entre os estilos de resposta, escolhendo o formato que melhor se adequa às suas preferências e necessidades. Essa abordagem visa garantir a acessibilidade e clareza das opções de resposta, atendendo a diferentes perfis de usuários.

A implementação da interface com emojis e a opção de alternar entre estilos de resposta para a escala Likert será feita utilizando Vue.js, permitindo uma experiência dinâmica e responsiva.

### Conclusão

A plataforma online proposta para aplicação e correção de testes psicológicos representa um projeto valioso e promissor, com potenciais benefícios tanto para psicólogos quanto para seus pacientes/clientes. Com foco na aceitação do usuário e na manutenção de uma estrutura técnica flexível e escalável, a plataforma visa oferecer uma solução eficiente e confiável para a realização de testes psicológicos em um formato remoto e acessível.