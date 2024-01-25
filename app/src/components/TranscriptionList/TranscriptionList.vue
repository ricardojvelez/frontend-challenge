<script setup lang="ts">
import { useTranscriptionService } from '@/services/useTranscriptionService'
import TranscriptionItem from '../TranscriptionItem/TranscriptionItem.vue'
import AddTranscription from '@/assets/add-row.svg'

const { createTranscription, getAllTranscriptions } = useTranscriptionService()
const transcriptions = getAllTranscriptions()
</script>

<template>
  <div class="container">
    <ul v-if="transcriptions && transcriptions?.length > 0">
      <TranscriptionItem v-for="item in transcriptions" :key="item.id" :item="item"/>
    </ul>
    <button class="addButton" @click="createTranscription">
      <img :src="AddTranscription" alt="Click to create a transcription" />
    </button>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
}

ul {
  padding: 0;
  width: 100%;
}

.addButton {
  padding-top: 0.5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
</style>
