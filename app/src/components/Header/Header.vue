<script setup lang="ts">
import FetchDataIcon from '@/assets/fetch-document.svg';
import UploadIcon from '@/assets/upload.svg';
import { useTranscriptionService } from '@/services/useTranscriptionService';

const { fetchTranscriptions, uploadTranscriptions } = useTranscriptionService()
</script>

<template>
  <header class="header">
    <h2 class="title">Transcriptions</h2>
    <div class="buttonGroup">
      <button class="button" @click="uploadTranscriptions">
        <img :src="FetchDataIcon" alt="Click to fetch transcriptions" />
      </button>
      <button class="button" @click="fetchTranscriptions">
        <img :src="UploadIcon" alt="Click to upload existing transcriptions" />
      </button>
    </div>
  </header>
</template>

<style scoped>
.header {
  align-items: center;
  background-color: #edebeb;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width:100%;
}
.title {
  color: #414C5E;        
  font-family: 'Montserrat', sans-serif;  
  font-size: 18px;       
  font-weight: 500;      
  padding-left: 1rem;
}

.buttonGroup {
  padding-right:1rem;
}
.button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}
</style>
