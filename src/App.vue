<template>
  <div id="app">
    <sma-header/>
    <router-view/>
    <sma-footer/>
  </div>
</template>

<script>
  import SmaHeader from './components/SmaHeader'
  import SmaFooter from './components/SmaFooter'

  export default {
    name: 'app',
    components: {
      SmaHeader,
      SmaFooter
    }
  }
</script>

<style lang="scss">
  // Import Bulma's core
  @import "~bulma/sass/utilities/_all";

  // App colors
  // SASS style sheet */
  // Palette color codes */
  // Palette URL: http://paletton.com/#uid=33x0u0ksBrug3SlmV-SulguyH47 */

  // Feel free to copy&paste color codes to your application */

  // As hex codes */

  $color-primary-0: #175A8D;	// Main Primary color */
  $color-primary-1: #7AB7E6;
  $color-primary-2: #3B7EB2;
  $color-primary-3: #0A3454;
  $color-primary-4: #010C15;

  $color-secondary-1-0: #DBAA17;	// Main Secondary color (1) */
  $color-secondary-1-1: #FFDF7F;
  $color-secondary-1-2: #FFD148;
  $color-secondary-1-3: #836407;
  $color-secondary-1-4: #211900;

  $color-secondary-2-0: #DB4F17;	// Main Secondary color (2) */
  $color-secondary-2-1: #FFA37F;
  $color-secondary-2-2: #FF7C48;
  $color-secondary-2-3: #832A07;
  $color-secondary-2-4: #210900;

  // Set your colors
  $primary: $color-primary-0;
  $primary-invert: findColorInvert($primary);
  $twitter: #4099FF;
  $twitter-invert: findColorInvert($twitter);

  // Setup $colors to use as bulma classes (e.g. 'is-twitter')
  $colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($color-primary-1, findColorInvert($color-primary-1)),
    "dark": ($color-primary-4, findColorInvert($color-primary-4)),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($color-secondary-1-2, findColorInvert($color-secondary-1-2)),
    "danger": ($color-secondary-2-0, findColorInvert($color-secondary-2-0)),
    "twitter": ($twitter, $twitter-invert)
  );

  // Links
  $link: $primary;
  $link-invert: $primary-invert;
  $link-focus-border: $primary;

  // Import Bulma and Buefy styles
  @import "~bulma";
  @import "~bulma-badge";
  @import "~buefy/src/scss/buefy";
</style>