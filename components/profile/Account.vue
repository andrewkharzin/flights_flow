<script setup lang="ts">
import { ref, onMounted } from 'vue';


const supabase = useSupabaseClient();
const user = useSupabaseUser();

const loading = ref(true);
const username = ref('');
const website = ref('');
const avatar_path = ref('');

const fetchProfile = async () => {
  loading.value = true;
  const { data, error } = await supabase
    .from('profiles')
    .select('username, website, avatar_url')
    .eq('id', user.value.id)
    .single();

  if (data) {
    username.value = data.username;
    website.value = data.website;
    avatar_path.value = data.avatar_url;
  } else if (error) {
    console.error('Error fetching profile:', error.message);
  }

  loading.value = false;
};

const updateProfile = async () => {
  try {
    loading.value = true;

    const updates = {
      id: user.value.id,
      username: username.value,
      website: website.value,
      avatar_url: avatar_path.value,
      updated_at: new Date(),
    };

    const { error } = await supabase.from('profiles').upsert(updates, {
      returning: 'minimal', // Don't return the value after inserting
    });

    if (error) throw error;
  } catch (error) {
    alert(error.message);
  } finally {
    loading.value = false;
  }
};

const signOut = async () => {
  try {
    loading.value = true;
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  } catch (error) {
    alert(error.message);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchProfile();
});
</script>

<template>
  <form class="" @submit.prevent="updateProfile">
    <ProfileUserAvatar v-model:path="avatar_path" @upload="updateProfile" class="md:flex md:flex-col md:items-start sm:w-full" />
     <!-- <ProfileAvatar v-model:path="avatar_path" @upload="updateProfile" /> -->
     
    <div class="space-y-4">
      <UFormGroup
						
						
					>
						<UInput
            :placeholder="user.email"
            icon="i-heroicons-envelope"
            disabled 
            class="sm:w-full md:w-[400px] lg:w-[400px]"
             />
			</UFormGroup>
      <UFormGroup
						
						
					>
						<UInput
            id="username" 
            :placeholder="username"
            icon="i-heroicons-user"
            v-model="username"
            
            class="sm:w-full md:w-[400px] lg:w-[400px]"
             />
			</UFormGroup>
      					
      <UButton
      type="submit"
      class="w-full"
      :disabled="loading"
      >
      {{ loading ? 'Loading ...' : 'Update' }}
    </UButton>
      <UButton
        size="sm"
        color="red"
        class="w-full"
        variant="soft"
        @click="signOut" 
        :disabled="loading"
        >
        Sign Out
      </UButton>
    
    </div>
  </form>
</template>

<style scoped>
.form-widget {
  display: flex;
  /* flex-direction: column; */
  gap: 1rem;
  padding: 1rem;
}
</style>
