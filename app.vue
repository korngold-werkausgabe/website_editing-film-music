<script setup>
useScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js')
useScript('https://code.jquery.com/jquery-3.2.1.slim.min.js')
const { locale, locales, setLocale } = useI18n()

const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})

const data = {
  program: {
    key: { speaker: 'Ben Winters', title: 'Reflections on the Multimedia Film-Score Edition and the Textual Instability of Film', time: '13:30–14:45', abstract: 'Lorem ipsum' },
    fr1: [{ speaker: 'Derek Greten-Harrison', title: 'TBA', time: '14:45', abstract: 'Lorem ipsum' },
    { speaker: 'Simone Nowicki', title: 'Edition von Filmmusik Herausforderungen der Multimedialität (Un-) Sichtbarer Krach: Die Marginalisierung und Visualisierung von Geräuschemacher*innen in der Edition von Filmmusik', time: '15:30', abstract: 'Lorem ipsum' }],
    fr2: [{ speaker: 'Roberto Calabretto, Luca Cossettini', title: 'The New Musical Writings for Cinema: History, Sources and Compositional Practices', time: '16:45', abstract: 'Lorem ipsum' },
    { speaker: 'Jörg Holzmann', title: 'Tonfilme, Interpretationsforschung und die Herausforderungen der Notation von Bewegungen', time: '17:30', abstract: 'Lorem ipsum' },],
    sa1: [
      { speaker: 'Oliver Huck', title: 'Eine Phänomenologie der „Stummfilm-Partitur“. Prolegomena zur Edition von Filmmusik', time: '9:00', abstract: 'Lorem ipsum' },
      { speaker: 'Fabian Müller', title: 'Komponieren und Inkorporieren. Herausforderungen der Edition von Musik und Film am Beispiel von Joseph Carl Breil', time: '9:45', abstract: 'Lorem ipsum' },

    ],
    sa2: [{ speaker: 'Johannes C. Gall, Silke Reich', title: 'Hybrid Edition of ›The Adventures of Robin Hood‹', time: '11:00', abstract: 'Lorem ipsum' },
    { speaker: 'Dennis Ried', title: 'Hybride Edition – Der Inbegriff von Multimedialität?', time: '11:45', abstract: 'Lorem ipsum' }],
    sa3: [
      { speaker: 'Axel Berndt, Andreas Münzmay', title: 'Digitale Interpretationsedition undFilmmusikedition als multimodale Schwestern – Gemeinsame Herausforderungen und Lösungsansätze', time: '14:00', abstract: 'Lorem ipsum' },
      { speaker: 'Tessa Gengnagel', title: 'Singende Cowboys, Superstrukturen und die Stille in der Nacht', time: '14:45', abstract: 'Lorem ipsum' },
      { speaker: 'Dennis Friedl', title: 'Multimedialität in der Editionssoftware Edirom-Online. Voraussetzungen und Möglichkeiten.', time: '15:30', abstract: 'Lorem ipsum' }
    ]
  }
}
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

    <div class="mt-5 mb-3  mx-lg-6 mx-md-5 mx-sm-3">
      <h2 id="prgrm" class="mb-3">{{ $t('headlinePrgrm') }}</h2>
      <!-- Day 1 -->
      <h3 class="my-3 secondary">{{ $t('prgrm.day1') }}</h3>
      <p>{{ $t('prgrm.room1') }}</p>
      <!-- Keynote -->
      <h4 class="mb-3 primary">{{ $t('prgrm.keynote') }}</h4>
      <Container class="mb-3 keynote">
        <Row>
          <Col col="1">{{ data.program.key.time }}</Col>
          <Col col="3">{{ data.program.key.speaker }}</Col>
          <Col col="8">{{ data.program.key.title }}</Col>
        </Row>
      </Container>
      <!-- Block 1 -->
      <Container class="my-4">
        <Row class="mb-2" v-for="(entry, index) in data.program.fr1" :key="index">
          <Col col="1">{{ entry.time }}</Col>
          <Col col="3">{{ entry.speaker }}</Col>
          <Col>{{ entry.title }}</Col>
        </Row>
      </Container>
      <p>{{ $t('prgrm.pause1') }}</p>
      <Container class="my-4">
        <Row class="mb-2" v-for="(entry, index) in data.program.fr2" :key="index">
          <Col col="1">{{ entry.time }}</Col>
          <Col col="3">{{ entry.speaker }}</Col>
          <Col>{{ entry.title }}</Col>
        </Row>
      </Container>
      <!-- Day2 -->
      <h3 class="mt-4 mb-3 secondary">{{ $t('prgrm.day2') }}</h3>
      <p>{{ $t('prgrm.room2') }}</p>
      <!-- Block 2 -->
      <Container class="my-4">
        <Row class="mb-2" v-for="(entry, index) in data.program.sa1" :key="index">
          <Col col="1">{{ entry.time }}</Col>
          <Col col="3">{{ entry.speaker }}</Col>
          <Col col="8">{{ entry.title }}</Col>
        </Row>
      </Container>
      <p>{{ $t('prgrm.pause1') }}</p>
      <Container class="my-4">
        <Row class="mb-2" v-for="(entry, index) in data.program.sa2" :key="index">
          <Col col="1">{{ entry.time }}</Col>
          <Col col="3">{{ entry.speaker }}</Col>
          <Col col="8">{{ entry.title }}</Col>
        </Row>
      </Container>
      <p>{{ $t('prgrm.pause2') }}</p>
      <!-- Block 3 -->
      <Container class="my-4">
        <Row class="mb-2" v-for="(entry, index) in data.program.sa2" :key="index">
          <Col col="1">{{ entry.time }}</Col>
          <Col col="3">{{ entry.speaker }}</Col>
          <Col col="8">{{ entry.title }}</Col>
        </Row>
      </Container>
      <p>{{ $t('prgrm.pause1') }}</p>
      <h4 class="my-4 primary">16:45 – 17:30 {{ $t('prgrm.roundtable') }}</h4>
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
      <div class="row my-2 align-items-center justify-content-around">
        <div class="col-10 col-sm-5 col-md-4 col-lg-3">
          <a href="https://www.uni-frankfurt.de">
            <img class="img-fluid" src="./assets/gu-logo.png" />
          </a>
        </div>
        <div class="col-10 col-sm-5 col-md-4 col-lg-3">
          <a href="https://www.adwmainz.de/">
            <img class="img-fluid" src="./assets/adw-logo.png" />
          </a>
        </div>
        <div class="col-10 col-sm-5 col-md-4 col-lg-3">
          <a href="https://www.akademienunion.de/">
            <img class="img-fluid" src="./assets/union-logo.png" />
          </a>
        </div>
      </div>
      <div class="row">
        <div class="col-sm col-md-last col-lg-normal">© 2021–2024 Erich Wolfgang Korngold Werkausgabe</div>
      </div>
    </footer>
  </div>

</template>
