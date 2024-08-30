<template>
    <div>
      <h2>Create a New GitHub Repository</h2>
      
      <!-- Form to Create a New Repository -->
      <form @submit.prevent="createRepository">
        <input 
          type="text" 
          v-model="repoName" 
          placeholder="Enter repository name" 
          required 
        />
        <button type="submit" class="button">Create Repository</button>
      </form>
  
      <!-- Feedback Messages -->
      <div v-if="loading">Creating repository...</div>
      <div v-if="successMessage" class="success">{{ successMessage }}</div>
      <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import '../style/createRepo.module.css'; // Importing the style file
  
  export default {
    data() {
      return {
        repoName: '',
        loading: false,
        successMessage: '',
        errorMessage: '',
      };
    },
    methods: {
      async createRepository() {
        this.loading = true;
        this.successMessage = '';
        this.errorMessage = '';
        
        const token = 'YOUR_PERSONAL_ACCESS_TOKEN';  // Replace with your GitHub token
  
        try {
          const response = await axios.post(
            `https://api.github.com/user/repos`, 
            { name: this.repoName },
            {
              headers: {
                Authorization: `token ${token}`,
                Accept: 'application/vnd.github.v3+json',
              },
            }
          );
          this.successMessage = `Repository "${response.data.name}" created successfully!`;
          this.repoName = '';  // Clear the input field after success
        } catch (error) {
          this.errorMessage = 'Failed to create repository. Please try again.';
          console.error(error);
        } finally {
          this.loading = false;
        }
      },
    },
  };
  </script>