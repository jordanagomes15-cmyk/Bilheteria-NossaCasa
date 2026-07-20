# Nossa Casa Events

Dashboard interno de performance de eventos da Nossa Casa.

O projeto usa JS puro (`index.html`, `app.js`, `styles.css`) e dados gerados por `scripts/generate-data.py` a partir de:

- planilhas Gandaya `.xlsx`;
- relatórios PNE `.pdf`.

## Fluxo Oficial

```text
Arquivos fonte privados -> GitHub Actions -> generated-data.js -> GitHub main -> Vercel Git Deploy
```

A Vercel deve ficar conectada ao repositório GitHub `jordanagomes15-cmyk/Bilheteria-NossaCasa`. Cada push na `main` dispara deploy de produção; branches e PRs recebem Preview Deployments pelo comportamento padrão da integração Git da Vercel.

## Privacidade

`generated-data.js` contém somente dados agregados e estatísticos, sem arrays de participantes.

Dados com PII de audiência/mailing ficam separados em `private-data/audience.json`, ignorado pelo Git, e só podem ser servidos por:

- `/api/audience`
- `/api/mailing`

Essas rotas exigem cookie de sessão httpOnly assinado no servidor.

## Variáveis de Ambiente na Vercel

Configure no painel da Vercel:

- `SESSION_SECRET`: segredo longo e aleatório para assinar sessões.
- `LOGIN_PASSWORD_HASH`: SHA-256 da senha de acesso.
- `LOGIN_EMAIL`: e-mail permitido no login, opcional mas recomendado.
- `AUDIENCE_DATA_B64`: conteúdo base64 de `private-data/audience.json` para liberar as APIs privadas em produção.

Gerar hash da senha:

```bash
node -e "const crypto=require('crypto');console.log(crypto.createHash('sha256').update(process.argv[1]).digest('hex'))" "SUA_SENHA"
```

Gerar base64 dos dados privados:

```bash
base64 -i private-data/audience.json | tr -d '\n' | pbcopy
```

## Atualizar Dados Localmente

```bash
npm run generate:data
npm run build
```

Por padrão, o gerador lê:

```text
~/Documents/Nossa Casa/Gandaya
~/Documents/Nossa Casa/PNE
```

Para usar outro diretório:

```bash
NOSSA_CASA_DATA_DIR=data/incoming npm run generate:data
```

## Monitor Local Opcional

O monitor local não faz deploy. Ele apenas regenera dados e, se habilitado, cria commit local:

```bash
npm run watch:local
```

Sem commit:

```bash
npm run watch:data
```

## Enviar Fontes Para CI

Arquivos `.xlsx` e `.pdf` podem conter PII. Use um repositório ou bucket privado para os fontes.

Para copiar os anexos locais para um checkout privado ou para `data/incoming`:

```bash
npm run upload:sources -- --target /caminho/do/repositorio-privado/data/incoming
```

O workflow `.github/workflows/update-data.yml` roda quando houver push em `data/incoming/**` ou manualmente por `workflow_dispatch`.

## CI

`.github/workflows/ci.yml` roda em Pull Requests:

```bash
npm run build
```

Se o build falhar, o PR deve ser corrigido antes do merge.

## Desenvolvimento

Para testar as Serverless Functions localmente, prefira:

```bash
vercel dev
```

O servidor estático simples (`npm run dev`) não executa `/api/*`.
