Para acessar o projeto finalizado, basta clicar em: https://repositorio-red.vercel.app/

Qual problema estamos resolvendo?
Saber quanto cobrar por hora de serviço, como desenvolvedor freelancer, pode ser um verdadeiro desafio até mesmo para profissionais mais experientes (imagine então, para quem está apenas começando neste universo). Nessa hora, é comum se perguntar: “será que estou pedindo muito?”
Bem, seu cérebro provavelmente responderá: “definitivamente!”
O que acontece a seguir é simples: você diminui seu preço com medo de perder oportunidades, o que gera uma desvalorização das suas habilidades como dev, uma péssima remuneração no final do mês e uma queda na qualidade dos projetos. Este é um jogo que você não quer jogar, acredite!
É aí que surge o desafio de encontrar um valor médio por hora, dentro do planejado pelos clientes e do esperado pelo profissional.

Qual é a Solução? 
Com essa questão em mente, trabalharemos em uma aplicação capaz de calcular, com base em dados concretos, quanto um desenvolvedor pode cobrar por hora do projeto. Mas, não se preocupe! É levada em consideração a linguagem utilizada, o tempo de experiência do profissional e a região do país em que ele se encontra, tudo para deixar a informação mais precisa.
Na página principal, há uma espécie de “calculadora”, onde é possível precificar o serviço prestado. Além disso, o dev tem acesso a um painel de controle, onde pode adicionar seus projetos em andamento, dando “play” nas atividades e verificando o tempo investido em cada um deles. Assim, não há dúvidas quanto ao valor a ser cobrado no final!


MVP:

Calculadora que leva em consideração a linguagem utilizada, o tempo de experiência do profissional e a região do país em que ele se encontra;
painel de controle, onde pode adicionar seus projetos em andamento;
Exibir a imagem da foto de perfil do usuário;

Usuário logado:

-Pode ter acesso a calculadora;
-Pode verificar a hora trabalhada;
-Pode editar o perfil por completo (Foto do usuário, nome);
-Pode editar e deletar os projetos realizados;
-Pode atualizar o status do projeto realizado.

Usuário não logado:

APENAS tem permissão para acessar o blog, sobre, login e register.

EndPoints:

-Register:Post/users;
-Login:Post/sessions;
-Editar Perfil: Post/user;
-Adicionar projeto: (Post/users/projects);
-Editar projetos: (Patch/users/projects/:id);
-Deletar projetos: (Delete/users/projects/:id).

Rotas:

-login;
-register;
-home;
-painel de controle;
-calculadora;
-blog;
-sobre.

Qual é a complexidade estimada do Frontend?

Projeto completo: 8.5
Login: 5
Cadastrar: 5
Home: 6
Painel de controle: 9
Calculadora: 9
Blog: 4
Sobre: 4
Figma: 10

Quais são as Ferramentas, Tecnologias e Habilidades Necessárias para Construir este App?

Ferramentas/Bibliotecas:

Axios;
-Framer Motion;
-React icons;
-React lottie;
-Hook Form;
-Hookforn Resolvers;
-React Router dom;
-Styled Components;
-Toastify;
-Yup;
-Animate.css.

Tecnologias:

-React;
-Vercel;
-ContextAPI;
-Trello;
-JSON Server.
