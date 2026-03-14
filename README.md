# FDB - Fundamentos de Banco de Dados

Curso completo de Banco de Dados no formato INEMA.CLUB, com 3 trilhas progressivas.

## Trilhas

| Trilha | Tema | Modulos | Topicos | Nivel |
|--------|------|---------|---------|-------|
| T1 Iniciante | Fundamentos, modelagem e SQL essencial | 2 | 12 | Basico |
| T2 Tecnico | Indices, transacoes, tipos de BD e comparativos | 2 | 12 | Intermediario |
| T3 Avancado | Arquitetura, performance, IA aplicada e bancos vetoriais | 2 | 14 | Avancado |

Total: 6 modulos, 38 topicos, ~4.5h de conteudo.

## Estrutura

```
FDB/
├── index.html                          # Landing page
├── curso/
│   ├── trilha1/                        # Iniciante (Emerald)
│   │   ├── index.html                  # Index com cards e topicos expansiveis
│   │   ├── modulo-1-1.html             # Fundamentos e Modelagem
│   │   └── modulo-1-2.html             # SQL Essencial
│   ├── trilha2/                        # Tecnico (Blue)
│   │   ├── index.html
│   │   ├── modulo-2-1.html             # Indices e Transacoes
│   │   └── modulo-2-2.html             # Tipos e Comparativos de SGBDs
│   └── trilha3/                        # Avancado (Purple)
│       ├── index.html
│       ├── modulo-3-1.html             # Arquitetura e Performance
│       └── modulo-3-2.html             # IA Aplicada a Dados (RAG, vetores)
├── docs/                               # Versao anterior (referencia)
│   ├── *.html                          # Paginas antigas
│   ├── *.pdf                           # Materiais complementares
│   └── assets/                         # CSS e imagens antigos
└── README.md
```

## Tecnologias

- Tailwind CSS (CDN)
- Google Fonts (Inter)
- Dark/Light mode com overrides completos
- Topicos expansiveis com JavaScript vanilla
- Modais com iframe (sem duplicacao de conteudo)
- Responsivo (mobile/desktop)

## Como publicar

### GitHub Pages
1. Settings > Pages
2. Source: branch `main`, pasta `/` (raiz)
3. O `index.html` da raiz sera a entrada do site

### Local
Basta abrir `index.html` no navegador. Nao precisa de servidor.

## Formato

Segue o design system INEMA.CLUB:
- Cores por trilha (Emerald, Blue, Purple)
- Nav padrao com logo, INEMA.CLUB, trilhas e theme toggle
- Topicos com numero em circulo e 3 secoes (O que e / Por que / Conceitos-chave)
- Light mode com overrides de cor para contraste adequado

## Contato

E-mail: inematds@gmail.com
