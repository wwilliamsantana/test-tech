### Gerenciador de Entregas por Drone - Crystal

Este é um projeto full-stack de um sistema de gerenciamento para uma frota de drones de entrega. A aplicação web permite a criação de pedidos, a visualização do status dos drones e, mais importante, o cálculo e despacho de rotas de entrega otimizadas.

<img width="820"  alt="Screenshot 2025-09-01 at 04-18-59 Crystal Drones" src="https://github.com/user-attachments/assets/2cf4937a-3000-450a-b7ad-45f24c5301fc" />

✨ Funcionalidades Principais

O sistema foi projetado para simular e gerenciar um centro de operações de logística por drones, com as seguintes funcionalidades:

  📦 Criação de Pedidos:
  *  Formulário para registrar novos pedidos de entrega.
  *  Campos para coordenadas de destino (X, Y), peso da carga (kg) e nível de prioridade (Baixa, Média, Alta).
  *  Validação de dados robusta utilizando Zod para garantir a integridade das informações.

 🛰️ Dashboard de Drones:
 
*  Visualização em tempo real do status de cada drone da frota (IDLE, DELIVERING, RETURNING, MAINTENANCE, etc.).
*  Exibição das especificações de cada drone, como capacidade máxima de carga, alcance e nível da bateria.

 🧠 Cálculo de Rota Inteligente:

   O coração do sistema: um algoritmo que processa todos os pedidos com status PENDING e os aloca para os drones com status IDLE.
   O algoritmo utiliza uma heurística para otimizar as rotas, considerando múltiplos fatores:
   Prioridade do Pedido: Pedidos de alta prioridade são favorecidos.
   Proximidade Geográfica: O drone busca o próximo pedido mais próximo para economizar bateria e tempo.
   Restrições do Drone: Respeita a capacidade máxima de carga (maxPayloadKg) e o alcance total da viagem (maxRangeKm), incluindo o trajeto de volta à base.

 🚀 Despacho de Rotas (Gerenciamento de Missões):

  -  Após o cálculo, o sistema apresenta as rotas propostas para cada drone disponível.
  -   O operador pode revisar a rota (pedidos incluídos, distância total) e, com um clique, despachar o drone.
  -   Esta ação é uma transação atômica no banco de dados que:
  -   Altera o status do drone para DELIVERING.
  -   Altera o status de todos os pedidos da rota para IN_TRANSIT.
  -   Associa permanentemente os pedidos ao drone despachado.

 ⚠️ Gerenciamento de Pedidos Não Alocados:

  - O sistema identifica e exibe de forma destacada quaisquer pedidos que não puderam ser alocados em nenhuma rota.
  - A interface mostra detalhes do pedido (peso, destino, prioridade), ajudando o operador a diagnosticar o motivo da falha (ex: pedido muito pesado, falta de drones com alcance suficiente, etc.).

💻 Tecnologias Utilizadas

Este projeto foi construído com uma stack moderna, focada em performance, escalabilidade e na melhor experiência para o desenvolvedor.

  * Framework Principal: Next.js 14+ (App Router)
  * Utilizando Server Components para renderização rápida e estática sempre que possível.
  * Client Components para interatividade na UI.
  *  Server Actions para mutações de dados seguras e diretas do cliente para o servidor, sem a necessidade de criar rotas de API manualmente para cada ação.
  *  API Routes para fornecer dados, como a lista de rotas calculadas.
  *  Linguagem: TypeScript. Garantindo a segurança de tipos em todo o projeto, do frontend ao banco de dados.
  *  Banco de Dados & ORM: PostgreSQL: Um banco de dados relacional robusto e confiável.
  *  Prisma ORM: Para acesso ao banco de dados com segurança de tipos, migrações automáticas e um cliente poderoso. Os tipos do Prisma são usados como a "fonte da verdade" em toda a aplicação.
  *  Estilização: Tailwind CSS: Um framework CSS utility-first para criar interfaces modernas e responsivas rapidamente.
  *  Validação de Dados: Zod: Para declaração e validação de schemas, garantindo que os dados que entram no sistema (seja via formulários ou APIs) estejam sempre corretos.
  *   UI & Ícones: Lucide React: Pacote de ícones SVG, leve e fácil de usar.

⚙️ Como Rodar o Projeto Localmente

Siga os passos abaixo para configurar e executar o projeto no seu ambiente de desenvolvimento.

1. Pré-requisitos:

   *  Node.js (versão 18 ou superior)

   *  npm, yarn ou pnpm

   *  Git

 

2. Clone o Repositório:

```
git clone https://github.com/seu-usuario/test-tech.git
cd test-tech
```
3. Instale as Dependências:

```
npm install
```

4. Sincronize o Banco de Dados:
```
npx prisma migrate dev
npx prisma db seed
```
5. Rode o Servidor de Desenvolvimento:
```
npm run dev
```
6. Abra a Aplicação:
   
 * Acesse http://localhost:3000 no seu navegador.

🗺️ Roadmap de Melhorias Futuras

O projeto tem uma base sólida e pode ser expandido com novas funcionalidades:

  [ ] Interface de Mapa: Visualizar a localização dos drones e pedidos em um mapa interativo (usando Leaflet ou Mapbox).

  [ ] Dashboard Analítico: Gráficos com métricas como pedidos por dia, eficiência dos drones, tempo médio de entrega, etc.

  [ ] Autenticação de Usuários: Sistema de login para operadores e administradores.

  [ ] Atualizações em Tempo Real: Usar WebSockets para que as atualizações de status apareçam na tela sem a necessidade de recarregar a página.

  [ ] Ciclo de Vida Completo da Entrega: Implementar a lógica para quando um drone retorna à base e os pedidos são marcados como DELIVERED.


