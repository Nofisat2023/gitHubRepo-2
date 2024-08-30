<template>
    <div class="pagination-controls">
      <button @click="prevPage" :disabled="currentPage <= 1">Previous</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="!hasMorePages">Next</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'paginationComponent',  // Ensure name is multi-word
    props: {
      currentPage: {
        type: Number,
        required: true
      },
      totalPages: {
        type: Number,
        required: true
      },
      hasMorePages: {
        type: Boolean,
        required: true
      }
    },
    methods: {
      prevPage() {
        this.$emit('change-page', this.currentPage - 1);
      },
      nextPage() {
        this.$emit('change-page', this.currentPage + 1);
      }
    }
  };
  </script>
  
  <style scoped>
  .pagination-controls {
    margin-bottom: 20px;
  }
  
  button {
    padding: 8px 12px;
    margin: 0 5px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
  
  span {
    margin: 0 10px;
  }
  </style>
  