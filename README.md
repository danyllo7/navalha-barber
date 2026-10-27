# NAVALHA — Barbearia & Studio

Conceito de demonstração com interface em HTML, CSS e JavaScript, API JavaScript e base de dados SQLite/D1. A marca, os profissionais e os preços são exemplos.

## Ficheiros principais

- public/index.html: página completa em HTML.
- public/styles.css: estilos, adaptação ao telemóvel e redução de movimento.
- public/script.js: catálogo, filtros e assistente de reservas.
- public/catalog.js: catálogo usado no navegador.
- lib/catalog.js: catálogo e regras validadas pelo servidor.
- lib/content.js: cópia do HTML servida pela rota principal.
- app/api/availability/route.js: disponibilidade por serviço, profissional e data.
- app/api/bookings/route.js: validação e gravação atómica da reserva.
- db/schema.ts e drizzle/: estrutura da base de dados e migração.

## O que funciona

11 serviços, três profissionais, agenda de segunda a sábado, pausa de almoço, duração variável, exclusão de datas passadas, janela de 90 dias, antecedência mínima de 30 minutos no próprio dia, validação no servidor, confirmação com referência e exportação para calendário.

A base de dados usa uma restrição única por profissional/data/bloco de 15 minutos. A inserção da reserva e dos blocos acontece na mesma transação. Duas pessoas a tentar reservar horários sobrepostos não conseguem confirmar ambas. Serviços de 20 minutos ocupam dois blocos de 15 minutos.

## Personalizar

Edite o HTML, cores e fotografia. Atualize os serviços e profissionais nos dois ficheiros catalog.js. Após editar public/index.html, atualize lib/content.js com o mesmo HTML (export const html = uma string com o conteúdo). Os horários e limites são definidos nas funções validDate e timeAllowed, em lib/catalog.js.

## Executar

Requer Node.js 22.13 ou superior. Instale as dependências com pnpm install. Execute pnpm build para gerar dist/server/wrangler.json. Aplique cada migração pendente à base local com:

node --import ./scripts/sites-env.mjs ./node_modules/wrangler/bin/wrangler.js d1 execute DB --local --config dist/server/wrangler.json --persist-to .wrangler/state --file drizzle/0000_smooth_cerebro.sql

Depois execute pnpm dev. Não reaplique uma migração já executada. A publicação necessita de alojamento com execução do servidor e uma base D1 ligada como DB. GitHub Pages e outros alojamentos apenas estáticos não executam esta API.

Abrir apenas index.html ou servir public/ permite visualizar a interface; as reservas precisam da API e da base de dados. As fontes online são opcionais e têm alternativas locais de sistema.

## Antes de utilizar num negócio real

Substitua os conteúdos de exemplo, os horários e preços. Este projeto não inclui painel de gestão, cancelamento/reagendamento, SMS, emails, pagamentos, controlo de férias dos profissionais ou sincronização com agendas externas. A exportação .ics permite guardar um evento manualmente no calendário.

Defina os dados do negócio, política de privacidade, responsável pelo tratamento, prazo de conservação e procedimento para eliminação dos dados antes de recolher contactos reais. A versão atual está identificada como demonstração e pede apenas dados fictícios.

Fotografia ilustrativa: Unsplash, https://images.unsplash.com/photo-1503951914875-452162b0f3f1
