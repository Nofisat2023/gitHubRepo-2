<template>
  <div :class="$style.container">
    <div :class="$style.note">
      <h1>Welcome to SCISSORS</h1>
      <p>Your ultimate tool for managing GitHub repositories efficiently. Whether you’re searching, creating, or analyzing your repositories, SCISSORS provides a seamless and powerful interface to enhance your productivity.</p>
      <p>Explore our features:</p>
      <ul>
        <li>Search and filter your GitHub repositories</li>
        <li>Create new repositories effortlessly</li>
        <li>View detailed repository information</li>
        <li>Access comprehensive analytics</li>
      </ul>
      <p>Get started now and make the most out of your GitHub experience!</p>
    </div>
  </div>
</template>

<script>
import styles from '../style/homeComponent.module.css';

export default {
  name: 'HomeComponent',
  data() {
    return {
      $style: styles,
    };
  },
};
</script>

