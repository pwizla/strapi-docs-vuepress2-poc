---
home: true
icon: home
title: Home
heroText: Strapi Documentation
tagline: Design APIs fast, manage content easily.

copyright: false
---

<div class="wrapper">
  <div class="card">
    <h2 class="role">Content Manager</h2>
    <img class="persona" src="/persona1.svg" />
    <div class="description">Learn how to play with Strapi's Admin Panel and quickly build and add content by reading the User Guide.</div>
    <a class="card-link" href="/user-guide/intro"></a>
  </div>

  <div class="card">
    <h2 class="role">Developer</h2>
    <img class="persona persona2" src="/persona2.svg" />
    <div class="description description2">Learn how to customize Strapi's core, create plugins, and more by reading the Developer Documentation.</div>
    <a class="card-link" href="/dev-docs/intro"></a>
  </div>

  <div class="card">
    <h2 class="role">API Consumer</h2>
    <img class="persona persona3" src="/persona3.svg" />
    <div class="description">Learn how to consume Strapi's REST APIs by reading our API reference documentation.</div>
    <a class="card-link" href="/dev-docs/api/rest-api"></a>
  </div>
</div>

<style>
.hero {
  background-color: #4945ff;
  padding: 2em 0;
  margin-left: -15%;
  margin-right: -15%;
  color: white;
  margin-bottom: 3em;
}
.hero-info > .description {
  color: white !important;
  font-family: var(--font-family) !important;
}
.hero .main-title {
}
.card-link {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: all .4s ease-in-out;
  box-shadow: 0px 0px 0px rgba(0,0,0,0.2);
}
.card-link:hover {
  box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
}
.card:hover h2 {
  color: #4945ff;
}
.card:hover .persona {
  transform: scale(1.05, 1.05)
}
.wrapper {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.card {
  position: relative;
  text-align: center;
  width: 300px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.persona {
  width: 150px;
  height: 200px;
  transition: all .2s ease-in-out
}
.persona2 {
  width: 165px;
}
.persona3 {
  width: 130px;
}
.description {
  padding-top: 20px
}
.description2 {
}

</style>