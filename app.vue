<script setup>
const { locale, locales, setLocale } = useI18n()

const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})
</script>

<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img src="./assets/Logo-einfarbig-rgb-150dpi.png" alt="Logo" width="30" height="24"
            class="d-inline-block align-text-top me-1">
          Korngold-Werkausgabe
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item me-2">
              <a class="nav-link active" aria-current="page" href="/">{{ $t('nav.home') }}</a>
            </li>
            <li class="nav-item me-2">
              <a class="nav-link" href="#cfp">{{ $t('nav.cfp') }}</a>
            </li>
            <li class="nav-item me-2">
              <a class="nav-link" href="#prgrm">{{ $t('nav.program') }}</a>
            </li>
            <li class="nav-item me-2">
              <a class="nav-link" href="#contact">{{ $t('nav.contact') }}</a>
            </li>
          </ul>
        </div>
        <div class="d-flex">
          <button type="button" class="btn btn-outline-secondary" v-for="locale in availableLocales" :key="locale.code"
            @click.prevent.stop="setLocale(locale.code)">{{
              locale.name }}</button>
        </div>
      </div>
    </nav>

    <div class="my-3 mx-lg-6 mx-md-5 mx-sm-3">
      <h1 class="main">{{ $t('headlineMain') }} </h1>
      <h1 class="sub">{{ $t('headlineSub') }}</h1>
      <i18n-t keypath="msg" tag="p">
        <template v-slot:website>
          <a href="https://www.korngold-werkausgabe.de">korngold-werkausgabe.de</a>
        </template>
      </i18n-t>
    </div>

    <div class="mt-5 mb-3 mx-lg-6 mx-md-5 mx-sm-3">
      <h2 id="cfp" class="mb-3">{{ $t('headlineCfp') }}</h2>
      <div class="container">
        <div class="row row-border pt-3">
          <div class="col-sm col-md-last col-lg-normal">
            <h3 class="cfp font-center">{{ $t('cfpInfo.place.title') }}</h3>
            <p class="light font-center">{{ $t('cfpInfo.place.value') }}</p>
          </div>
          <div class="col-sm col-md-last col-lg-normal">
            <h3 class="cfp  font-center">{{ $t('cfpInfo.date.title') }}</h3>
            <p class="light font-center">{{ $t('cfpInfo.date.value') }}</p>
          </div>
          <div class="col-sm col-md-last col-lg-normal font-center">
            <h3 class="cfp font-center">{{ $t('cfpInfo.deadline.title') }}</h3>
            <p class="light font-center">{{ $t('cfpInfo.deadline.value') }}</p>
          </div>

        </div>
      </div>
      <i18n-t keypath="msgCfp1" tag="p">
        <template v-slot:vortrag>
          <span class="bold">Vorträgen (max. 30 Minuten)</span>
        </template>
        <template v-slot:vortrag-en>
          <span class="bold">presentations (maximum 30 minutes)</span>
        </template>
        <template v-slot:types>
          <span class="bold">Referaten</span> auch <span class="bold">Installationen</span>, <span
            class="bold">Modelle</span> und <span class="bold">interaktive Anwendungen</span>
        </template>
        <template v-slot:types-en>
          <span class="bold">papers</span>, <span class="bold">installations</span>, <span class="bold">models</span>,
          and <span class="bold">interactive applications</span>
        </template>
      </i18n-t>
      <p>{{ $t('topicsCfp.preline') }}</p>

      <ul>
        <li class="mb-2" v-for="topic in $tm('topicsCfp.topics')" :key="topic">{{ topic }}</li>
      </ul>

      <i18n-t keypath="msgCfp2" tag="p">
        <template v-slot:disciplines>
          <span class="bold">Musikwissenschaft</span>, <span class="bold">Film-</span>, <span class="bold">Theater- und
            Medienwissenschaften</span> sowie <span class="bold">Digital Humanities</span>
        </template>
        <template v-slot:disciplines-en>
          <span class="bold">musicology</span>, <span class="bold">film studies</span>, <span class="bold">theatre and
            media studies</span>, and <span class="bold">digital humanities</span>
        </template>
        <template v-slot:mail>
          <a href="mailto:editing-film-music@korngold-werkausgabe.de">editing-film-music@korngold-werkausgabe.de</a>
        </template>
        <template v-slot:expose>
          <span class="bold">Exposé</span>
        </template>
        <template v-slot:expose-en>
          <span class="bold">abstract</span>
        </template>
        <template v-slot:date>
          <span class="bold">19.08.2024</span>
        </template>
        <template v-slot:date-en>
          <span class="bold">19 August 2024</span>
        </template>
      </i18n-t>
    </div>

    <div class="mt-5 mb-3  mx-lg-6 mx-md-5 mx-sm-3">
      <h2 id="prgrm" class="mb-3">{{ $t('headlinePrgrm') }}</h2>
      <p>{{ $t('msgPrgrm') }}</p>
    </div>

    <div class="mt-5 mb-3  mx-lg-6 mx-md-5 mx-sm-3">
      <h2 id="contact" class="mb-3">{{ $t('headlineContact') }}</h2>
      <i18n-t keypath="msgContact" tag="p">
        <template v-slot:mail>
          <a href="mailto:editing-film-music@korngold-werkausgabe.de">editing-film-music@korngold-werkausgabe.de</a>
        </template>
      </i18n-t>
    </div>


    <footer class="sticky mt-5 mb-3 mx-lg-6 mx-md-5 mx-sm-3">
      <div class="row my-2">
        <div class="col-sm col-md-last col-lg-normal">
          <a href="https://dev.korngold-werkausgabe.de/de/about/imprint" class="me-3">Impressum</a>
          <a href="https://dev.korngold-werkausgabe.de/de/about/privacy">Datenschutz</a>
        </div>
      </div>
      <div class="row">
        <div class="col-sm col-md-last col-lg-normal">© 2021–2024 Erich Wolfgang Korngold Werkausgabe</div>
      </div>
    </footer>
  </div>
</template>
