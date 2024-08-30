<template>
  <div>
    <h2>My GitHub Repositories</h2>
    
    <!-- Search Input -->
    <input 
      type="text" 
      v-model="searchTerm" 
      placeholder="Search Repositories..." 
      @input="debouncedFilterRepositories" 
    />

    <!-- Pagination Component -->
    <PaginationComponent
      :currentPage="currentPage"
      :totalPages="totalPages"
      :hasMorePages="hasMorePages"
      @change-page="handlePageChange"
    />
    
    <div v-if="loading">Loading repositories...</div>
    <ul v-if="!loading && !error">
      <li v-for="repo in filteredRepos" :key="repo.id">
        <a :href="repo.html_url" target="_blank">{{ repo.name }}</a>
      </li>
    </ul>
    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>

<script>
import axios from 'axios';
import debounce from 'lodash/debounce';
import PaginationComponent from './paginationComponent.vue';  // Ensure this file exists

export default {
  components: {
    PaginationComponent,
  },
  data() {
    return {
      repos: [],
      filteredRepos: [],
      searchTerm: '',
      loading: true,
      error: null,
      currentPage: 1,
      perPage: 10,
      totalPages: 1,
      hasMorePages: true,
    };
  },
  created() {
    this.fetchRepositories();
  },
  methods: {
    async fetchRepositories() {
      this.loading = true;
      this.error = null;
      
      const username = 'nofisat2023';  // Replace with your GitHub username
      const page = this.currentPage;
      
      try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
          params: {
            page,
            per_page: this.perPage,
          },
          headers: {
            Accept: 'application/vnd.github.v3+json',
          },
        });
        
        this.repos = response.data;
        this.filteredRepos = this.repos;
        // GitHub API does not provide 'x-total-count' for repositories endpoint; adjust calculation as needed
        this.totalPages = Math.ceil(response.data.length / this.perPage);
        this.hasMorePages = this.currentPage < this.totalPages;
      } catch (error) {
        this.error = 'Failed to load repositories';
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    filterRepositories() {
      const term = this.searchTerm.toLowerCase();
      this.filteredRepos = this.repos.filter(repo => repo.name.toLowerCase().includes(term));
    },
    debouncedFilterRepositories: debounce(function() {
      this.filterRepositories();
    }, 300),
    handlePageChange(page) {
      this.currentPage = page;
      this.fetchRepositories();
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
  margin-top: 10px;
}

input {
  padding: 8px;
  margin-bottom: 20px;
  width: 100%;
  outline: none;
  max-width: 400px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>

