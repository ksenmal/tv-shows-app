<script setup>
defineProps({
  actor: Object,
});
</script>

<template>
  <img
    v-if="
      actor.character && actor.character.image && actor.character.image.medium
    "
    :src="actor.character.image.medium"
    :alt="actor.character.name"
  />
  <div>
    <p v-if="actor.person" class="actor-name">{{ actor.person.name }}</p>
    <p v-if="actor.character">
      as <span class="character-name">{{ actor.character.name }}</span>
    </p>
  </div>
</template>

<style scoped>
img {
  width: 150px;
  height: auto;
  margin-right: 1rem;
}
.actor-name {
  font-size: 20px;
}
.character-name {
  font-weight: bold;
}
</style>
