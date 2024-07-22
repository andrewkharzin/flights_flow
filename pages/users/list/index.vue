<script setup lang="ts">
import { ref, onMounted } from 'vue';

const { profiles, fetchProfiles } = useProfile();

onMounted(() => {
  fetchProfiles();
});
</script>

<template>
  <NuxtLayout name="auth">
    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <UsersListCard
        v-for="profile in profiles"
        :key="profile.id"
        :id="profile.id"
        :name="profile.name"
        :role="profile.role"
        :location="profile.location"
        :followers="profile.followers"
        :avatarUrl="profile.avatarUrl"
      />
    </div>
  </NuxtLayout>
</template>

<style scoped>
.grid {
  display: grid;
  gap: 1rem;
}
</style>
