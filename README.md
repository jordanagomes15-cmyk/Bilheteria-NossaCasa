# Nossa Casa Events

Dashboard de performance da Nossa Casa alimentado pelos anexos locais:

- `Documentos/Nossa Casa/Gandaya` para planilhas `.xlsx`
- `Documentos/Nossa Casa/PNE` para relatorios `.pdf`

## Atualizar Localmente

```bash
npm run watch:data
```

Enquanto esse processo estiver rodando, novos arquivos nessas pastas regeneram `generated-data.js` e atualizam a previa local.

## Publicar Dados Atualizados

O site publicado e estatico. Ele nao consegue ler sozinho a pasta `Documentos` do computador.

Para deixar o terminal publicando automaticamente quando uma planilha ou PDF entrar nas pastas, rode:

```bash
npm run watch:publish
```

Enquanto esse processo estiver aberto, ele monitora:

- `Documentos/Nossa Casa/Gandaya`
- `Documentos/Nossa Casa/PNE`

Quando detectar mudanca, ele:

1. regenera `generated-data.js`;
2. roda o build;
3. cria um commit com os dados atualizados;
4. envia para o GitLab;
5. o Render publica a nova versao automaticamente.

Para parar, pressione `Ctrl+C` no terminal.

Fluxo manual para publicar a versao mais recente localmente:

```bash
npm run generate:data
npm run build
```

O deploy usa a pasta `dist`.

## Publicar no Render

1. Suba este projeto para o GitLab.
2. No Render, crie um `Static Site` conectado a esse repositorio.
3. Use:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
4. Depois de atualizar as planilhas/PDFs no computador, rode:

```bash
npm run watch:publish
```

5. Mantenha esse terminal aberto. O Render publica a nova versao automaticamente a cada novo push.

Para atualizacao publicada automatica, a base precisa sair do computador e ir para uma fonte online, como GitLab com deploy automatico, Google Drive conectado por backend, Supabase ou outro banco/API.
