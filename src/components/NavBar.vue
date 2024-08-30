<template>
  <nav :class="$style.nav">
    <ul :class="$style.ul">
      <li :class="[ $style.li, $style.homeLink ]"><router-link :class="$style.a" to="/">Home</router-link></li>
      <li :class="$style.li"><router-link :class="$style.a" to="/about">About</router-link></li>
      <li :class="$style.li"><router-link :class="$style.a" to="/gitRepo">GitHub Repositories</router-link></li>
      <li :class="$style.li"><router-link :class="$style.a" to="/createRepo">Create New Repo</router-link></li>
    </ul>
  </nav>
</template>

<script>
import styles from '../style/navBar.module.css';

export default {
  name: 'NavBar',
  data() {
    return {
      $style: styles, // Make styles available in the template
    };
  },
};
</script>
