<template>
  <section id="welcome" class="overflow-hidden">
    <v-row no-gutters>
      <v-col class="hidden-sm-and-down" md="6">
        <v-img :src="require('@/assets/welcome.png')" height="100vh" />
      </v-col>

      <v-col
        class="align-content-space-between layout wrap"
        cols="12"
        md="6"
        :pa-5="$vuetify.breakpoint.smAndDown"
      >
        <base-bubble-1 style="transform: rotate(180deg) translateY(25%)" />

        <v-row align="center" justify="center">
          <v-col cols="10" md="6">
            <base-heading>Welcome!</base-heading>
            <base-text>
              You found my personal home page.
              I don't even know how because I don't advertise it to anyone.
              But since you're here, feel free to poke around.
              <br />Mostly I just use this site to experiment with new stuff.
              If you're trying to get in touch with me for some reason,
              there's a form down below.
            </base-text>
            <base-btn v-if="false" class="mt-4">Learn More!</base-btn>
          </v-col>
        </v-row>

        <base-bubble-2 style="transform: rotate(180deg) translate(-200px, -15%)" />
      </v-col>
    </v-row>
  </section>
</template>
