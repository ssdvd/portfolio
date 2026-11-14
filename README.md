# Portfólio

Meu portfólio pessoal, com foco em Cloud, DevOps e SRE: experiência, formação, skills, certificações e projetos.

🌐 **No ar em [portfolio.ssdvdlab.tech](https://portfolio.ssdvdlab.tech/)**

## Sobre o site

- Página única e estática, em HTML, CSS e JavaScript puros, sem frameworks nem etapa de build.
- Tema claro e escuro, seguindo a preferência do sistema e lembrando a escolha no `localStorage`.
- Filtro de projetos por categoria.
- Publicado no Coolify (app `portfolio`) a partir da branch `main`.

## Rodando localmente

Basta abrir o `index.html` no navegador ou, se preferir, servir a pasta:

```bash
python3 -m http.server 8000
```

Acesse <http://localhost:8000>.

## Estrutura

```
index.html   # conteúdo da página
style.css    # estilos e temas
script.js    # alternância de tema e filtro de projetos
assets/      # avatar, favicon e badges das certificações
```

## Publicação

Depois do merge na `main`, implante o app `portfolio` no Coolify (botão Deploy ou `POST /api/v1/deploy?uuid=mdpfxgkaejmhprwkoalkta8m`).

## Contato

[LinkedIn](https://www.linkedin.com/in/-dss/) · [Credly](https://www.credly.com/users/dss) · [Medium](https://medium.com/@ssdvd) · [GitHub](https://github.com/ssdvd)
