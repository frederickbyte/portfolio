---
title: 'Articles and Notes'
layout: 'layouts/feed.html'
pagination:
  data: collections.articles
  size: 10
permalink: 'articles{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Newer posts'
paginationNextText: 'Older posts'
paginationAnchor: '#post-list'
---

Recent articles and notes from yours truly. These articles are of anything that piques my interest, so I have added some <b>#hashtags</b> to let you know what each article discusses.
