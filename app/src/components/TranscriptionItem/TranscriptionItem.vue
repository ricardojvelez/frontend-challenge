<script setup lang="ts">
import PersonIcon from '@/assets/person.svg'
import RecycleBinIcon from '@/assets/delete.svg'
import { defineProps } from 'vue'
import type { Transcription } from '@/models/transcription'
import { useTranscriptionService } from '@/services/useTranscriptionService'

const { item } = defineProps<{ item: Transcription }>()
const { deleteTranscription, updateTranscription } = useTranscriptionService()
</script>

<template>
  <div class="item">
    <input type="checkbox" class="checkbox" />
    <img class="itemImage" :src="PersonIcon" alt="Drawing of a face" />
    <div class="itemContent">
      <input
        class="itemVoice"
        type="text"
        name="itemVoice"
        :value="item.voice"
        alt="Transcription title"
        @input="updateTranscription({ ...item, voice: $event.target.value })"
      />
      <input
        class="itemText"
        name="itemText"
        :value="item.text"
        alt="Transcription description"
        @input="updateTranscription({ ...item, text: $event.target.value })"
      />
    </div>
    <button class="button" @click="deleteTranscription(item.id)">
      <img :src="RecycleBinIcon" alt="Click to delete transcription" />
    </button>
  </div>
</template>

<style scoped>
.button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  visibility: hidden;
}
.item {
  align-items: center;
  background-color: #fff;
  border: 1px solid #d4d5d6;
  display: flex;
  padding: 0 1.5rem 1.5rem 1.5rem;
}
.item:hover > .button {
  visibility: visible;
}
.itemImage {
  margin: 0 0.5rem;
}
.itemContent {
  display: flex;
  flex-direction: column;
  white-space: normal;
  width: 100%;
  word-wrap: break-word;
}
.itemVoice {
  border: none;
  color: #566074;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 0.25rem;
  margin-top: 1rem;
}
.itemText {
  border: none;
  color: #778195;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: 400;
}
.checkbox {
  background-color: #859eff;
  width: 16px;
  height: 16px;
  cursor: pointer;
}
</style>
