---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
  import Cool from '../../components/Author.astro'
title: Moving to Astro from Handlebars.
publishDate: Thu 23 Jun. 2022 · 20.20
name: Michael Andreuzza
value: 128
description: Converting my projects to Astro!
---

<Cool name={frontmatter.name} href="https://twitter.com/mike_andreuzza" client:load />

# H1 - The quick brown fox jumps over the lazy dog
## H2 - The quick brown fox jumps over the lazy dog
### H3 - The quick brown fox jumps over the lazy dog
#### H4 - The quick brown fox jumps over the lazy dog

###### P - The quick brown fox jumps over the lazy dog

--
# Code block
```
{
  "firstName": "Mike",
  "lastName": "Andreuzza",
  "age": 500
}