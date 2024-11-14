<script setup>
const { $formatMarkdown } = useNuxtApp()
const { locale, locales, setLocale } = useI18n();

const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
});

const data = {
  program: {
    key: { speaker: 'Ben Winters', title: 'Reflections on the Multimedia Film-Score Edition and the Textual Instability of Film', time: { hh: 13, mm: 30 }, id: "winters" },
    fr1: [{ speaker: 'Derek Greten-Harrison', title: "The 20th Century-Fox Songbook: Restoring a Hollywood Studio's Musical Legacy", time: { hh: 14, mm: 45 }, id: "harrison" },
    { speaker: 'Simone Nowicki', title: 'Edition von Filmmusik Herausforderungen der Multimedialität (Un-) Sichtbarer Krach: Die Marginalisierung und Visualisierung von Geräuschemacher*innen in der Edition von Filmmusik', time: { hh: 15, mm: 30 }, id: "nowicki" }],
    fr2: [{ speaker: 'Roberto Calabretto, Luca Cossettini', title: 'The New Musical Writings for Cinema: History, Sources and Compositional Practices', time: { hh: 16, mm: 45 }, id: "calabretto" },
    { speaker: 'Jörg Holzmann', title: 'Tonfilme, Interpretationsforschung und die Herausforderungen der Notation von Bewegungen', time: { hh: 17, mm: 30 }, id: "holzmann" },],
    sa1: [
      { speaker: 'Oliver Huck', title: 'Eine Phänomenologie der „Stummfilm-Partitur“. Prolegomena zur Edition von Filmmusik', time: { hh: 9, mm: 0 }, id: "huck" },
      { speaker: 'Fabian Müller', title: 'Komponieren und Inkorporieren. Herausforderungen der Edition von Musik und Film am Beispiel von Joseph Carl Breil', time: { hh: 9, mm: 45 }, id: "mueller" },

    ],
    sa2: [{ speaker: 'Johannes C. Gall, Silke Reich', title: 'Hybrid Film Music Edition of “The Adventures of Robin Hood”', time: { hh: 11, mm: 0 }, id: "gall" },
    { speaker: 'Dennis Ried', title: 'Hybride Edition – Der Inbegriff von Multimedialität?', time: { hh: 11, mm: 45 }, id: "ried" }],
    sa3: [
      { speaker: 'Axel Berndt, Andreas Münzmay', title: 'Digitale Interpretationsedition und Filmmusikedition als multimodale Schwestern – Gemeinsame Herausforderungen und Lösungsansätze', time: { hh: 14, mm: 0 }, id: "berndt" },
      { speaker: 'Tessa Gengnagel', title: 'Superstrukturen', time: { hh: 14, mm: 45 }, id: "gengnagel" },
      { speaker: 'Dennis Friedl', title: 'Multimedia in the Scholarly Editing Software Edirom-Online. Current and Future Possibilities', time: { hh: 15, mm: 30 }, id: "friedl" }
    ]
  },
}
</script>

<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/website_editing-film-music">
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
              <a class="nav-link active" aria-current="page" href="/website_editing-film-music">{{ $t('nav.home') }}</a>
            </li>
            <li class="nav-item me-2">
              <a class="nav-link" href="#prgrm">{{ $t('nav.program') }}</a>
            </li>
            <li class="nav-item me-2">
              <a class="nav-link" href="#plan">{{ $t('nav.plan') }}</a>
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
      <i18n-t keypath="msg1" tag="p">
        <template v-slot:website>
          <a href="https://www.korngold-werkausgabe.de">korngold-werkausgabe.de</a>
        </template>
      </i18n-t>
      <p>{{ $t('msg2') }}</p>
      <p>{{ $t('msg3') }}</p>
    </div>

    <div class="mt-5 mb-3  mx-lg-6 mx-md-5 mx-sm-3">
      <h2 id="prgrm" class="mb-3">{{ $t('headlinePrgrm') }}</h2>

      <!-- Day 1 -->
      <h3 class="mt-5 my-3 secondary">{{ $t('prgrm.day1') }}</h3>
      <h4>Goethe-Universität Frankfurt am Main || Uni-Campus Westend || {{ $t('prgrm.room1') }}</h4>
      <!-- Keynote -->
      <Container class="mt-5 mb-3 keynote">
        <h4 class="mb-3">{{ $t('prgrm.keynote') }}</h4>
        <Row :id="data.program.key.id">

          <Col col="1">{{ $d(new Date(0, 0, 0, data.program.key.time.hh, data.program.key.time.mm, 0), 'short') }}
          </Col>
          <Col col="3">{{ data.program.key.speaker }}</Col>
          <Col col="8"><a class="none" :href="'#' + data.program.key.id + '-abs'">{{ data.program.key.title }}</a></Col>
        </Row>
      </Container>
      <!-- Block 1 -->
      <Container class="my-4">
        <Row :id="entry.id" class="mb-2" v-for="(entry, index) in data.program.fr1" :key="index">
          <Col col="1">{{ $d(new Date(0, 0, 0, entry.time.hh, entry.time.mm, 0), 'short') }}</Col>
          <Col col="3">{{ entry.speaker }}</Col>
          <Col col="8"><a class="none" :href="'#' + data.program.key.id + '-abs'">{{ entry.title }}</a></Col>
        </Row>
      </Container>
      <p class="it font-center">{{ $t('prgrm.pause1') }}</p>
      <Container class="my-4">
        <Row :id="entry.id" class="mb-2" v-for="(entry, index) in data.program.fr2" :key="index">

          <Col col="1">{{ $d(new Date(0, 0, 0, entry.time.hh, entry.time.mm, 0), 'short') }}</Col>
          <Col col="3">{{ entry.speaker }}</Col>
          <Col col="8"><a class="none" :href="'#' + data.program.key.id + '-abs'">{{ entry.title }}</a></Col>
        </Row>
      </Container>
      <!-- Day2 -->
      <h3 class="mt-5 mb-3 secondary">{{ $t('prgrm.day2') }}</h3>
      <h4 class="mb-5 ">Goethe-Universität Frankfurt am Main || Uni-Campus Westend || {{ $t('prgrm.room2') }}
      </h4>
      <!-- Block 2 -->
      <Container class="my-4">
        <Row :id="entry.id" class="mb-2" v-for="(entry, index) in data.program.sa1" :key="index">

          <Col col="1">{{ $d(new Date(0, 0, 0, entry.time.hh, entry.time.mm, 0), 'short') }}</Col>
          <Col col="3">{{ entry.speaker }}</Col>
          <Col col="8"><a class="none" :href="'#' + data.program.key.id + '-abs'">{{ entry.title }}</a></Col>
        </Row>
      </Container>
      <p class="it font-center">{{ $t('prgrm.pause1') }}</p>
      <Container class="my-4">
        <Row class="mb-2" v-for="(entry, index) in data.program.sa2" :key="index">
          <Col col="1">{{ $d(new Date(0, 0, 0, entry.time.hh, entry.time.mm, 0), 'short') }}</Col>
          <Col col="3">{{ entry.speaker }}</Col>
          <Col col="8"><a class="none" :href="'#' + data.program.key.id + '-abs'">{{ entry.title }}</a></Col>
        </Row>
      </Container>
      <p class="it font-center">{{ $t('prgrm.pause2') }}</p>
      <!-- Block 3 -->
      <Container class="my-4">
        <Row :id="entry.id" class="mb-2" v-for="(entry, index) in data.program.sa3" :key="index">
          <Col col="1">{{ $d(new Date(0, 0, 0, entry.time.hh, entry.time.mm, 0), 'short') }}</Col>
          <Col col="3">{{ entry.speaker }}</Col>
          <Col col="8"><a class="none" :href="'#' + data.program.key.id + '-abs'">{{ entry.title }}</a></Col>
        </Row>
      </Container>
      <p class="it font-center">{{ $t('prgrm.pause1') }}</p>
      <h4 class="my-4 primary">{{ $d(new Date(0, 0, 0, 16, 45, 0), 'short') }}–{{ $d(new Date(0, 0, 0, 17, 30, 0),
        'short') }} {{ $t('prgrm.roundtable') }}</h4>
    </div>

    <div class="mt-5 mb-3  mx-lg-6 mx-md-5 mx-sm-3">
      <h2 id="abstracts" class="mb-3">{{ $t('abstracts.headlineAbstracts') }}</h2>
      <Container class="my-4 keynote">
        <h4 class="mb-3">Keynote</h4>
        <Row :id="$t('abstracts.keynote.id') + '-abs'">
          <Col col="12">
          <h4 class="caps secondary">{{ $t('abstracts.keynote.speaker') }}</h4>
          <a class="none" :href="'#' + $t('abstracts.keynote.id')">
            <h3 class="my-3">{{ $t('abstracts.keynote.title') }}</h3>
          </a>
          <p class="mb-0" v-for="(p, i) in $tm('abstracts.keynote.text')" :key="i" v-html="$formatMarkdown(p)"></p>
          </Col>
        </Row>
      </Container>
      <Container class="my-4">
        <Row class="mb-4" v-for="(entry, index) in $tm('abstracts.abstracts')" :key="index"
          :id="'#' + entry.id + '-abs'">
          <Col col="12">
          <h4 class="caps secondary">{{ entry.speaker }}</h4>
          <a class="none" :href="'#' + entry.id">
            <h3 class="my-3">{{ entry.title }}</h3>
          </a>
          <p v-for="(p, i) in entry.text" :key="i" v-html="$formatMarkdown(p)">
          </p>
          </Col>
          <!-- <Col col="1">
          <a :href="entry.download">
            PDF
          </a>
          </Col> -->
        </Row>
      </Container>
    </div>

    <div class="mt-5 mb-3  mx-lg-6 mx-md-5 mx-sm-3">
      <h2 id="plan" class="mb-3">{{ $t('headlinePlan') }}</h2>
      <a href="https://www.uni-frankfurt.de/86262292/lage-und-anfahrtsplan-campus-westend-stand-juni-2024.pdf">
        <img class="img-fluid" src="./assets/GU_Lageplan_Campus_Westend_crop.png" />
      </a>
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
