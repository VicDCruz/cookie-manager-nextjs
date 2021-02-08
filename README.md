# cookie-manager-nextjs
How to create &amp; manage cookies for auto sign in

# How-to

## First steps
- Verify you have docker and **docker-compose**
- Exec `docker-compose pull`
- Exec `docker-compose build`
- Exec `docker-compose up -d`
- Verify all ports are fine
    - 1337: Back-end (CMS - Strapi)
    - 3010: Front-end (Next.js) / Blogs
    - 3020: Front-end (Next.js) / Notes
    - 3030: Front-end (Next.js) / Photos

## Simple commands
Using a `makefile`, there are commands to simplify larger ones
- `init`: Start containers & network
- `stop`: Stop & delete containers & network
- `open_db`: Open a session for MySQL database

# References
- [Sticky Header and Footer with Tailwind](https://dev.to/cryptic022/sticky-header-and-footer-with-tailwind-2oik)
- [Centered Page with TailwindCss](https://www.tailwindtoolbox.com/components/centered-page)
- [Utilizando Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch)
