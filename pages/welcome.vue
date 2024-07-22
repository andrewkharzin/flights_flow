<template>
  <NuxtLayout>
    <div
      class="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gradient-to-b from-slate-800 to-slate-950 text-white p-4">
      <!-- Content -->

      <div class="container text-center max-w-screen-md">
        <IconPlane class="" :fontControlled="false" />

        <!-- Main Title Section -->
        <div class="text-3xl md:text-5xl font-bold mb-4">
          <h1>
            <span class="bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 bg-clip-text text-transparent">
              Flights Flow
            </span>
          </h1>
        </div>
        <h3 id="typewriter-text" class="text-2xl md:text-4xl font-semibold mb-6 typewriter"></h3>

        <!-- User Greeting Display -->
        <div id="greeting-container" class="flex items-center justify-center mb-8">
          <NuxtImg v-if="showAvatar" :src="avatar_path" class="rounded-full w-[50px] bounce mr-2" />
          <p id="greeting-text" class="text-lg text-gray-400 typewriter"></p>
        </div>

        <!-- Dashboard Button -->
        <button v-if="showButton" class="px-4 py-2 bg-gray-900 hover:dark:bg-gray-600 text-white rounded-md">
          <NuxtLink to="/ramp/check/list">
            <span class="uppercase text-lg">
              Flow
            </span>
          </NuxtLink>
        </button>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { ref, onMounted, watchEffect } from 'vue';
import IconPlane from '~/assets/images/plane.svg'
import Flow from '~/assets/images/flow.svg'
import Logo from '~/assets/images/f_logo.png'

const isOpen = ref(false)

const { auth } = useSupabaseClient();
const supabase = useSupabaseClient();
const user = useSupabaseUser();
const colorMode = useColorMode();

const loading = ref(true);
const username = ref('');
const website = ref('');
const avatar_path = ref('');
const showAvatar = ref(false);
const showButton = ref(false);

loading.value = true;

const { data } = await supabase
  .from('profiles')
  .select(`username, website, avatar_url`)
  .eq('id', user.value.id)
  .single();

if (data) {
  username.value = data.username;
  website.value = data.website;
  avatar_path.value = data.avatar_url;
}

loading.value = false;

const userLogout = async () => {
  await auth.signOut();
};

watchEffect(() => {
  if (!user.value) {
    return navigateTo('/login');
  }
});

// Typewriter effect
onMounted(() => {
  const textElement = document.getElementById('typewriter-text');
  const greetingElement = document.getElementById('greeting-text');
  const textToType = 'Make your job better';
  const greetingToType = `Dear ${username.value}`;
  let index = 0;

  function typeWriter(text, element, callback) {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
      setTimeout(() => typeWriter(text, element, callback), 100); // Adjust typing speed here
    } else {
      index = 0;
      element.classList.remove('typewriter'); // Remove blinking cursor after typing
      if (callback) callback();
    }
  }

  typeWriter(textToType, textElement, () => {
    typeWriter(greetingToType, greetingElement, () => {
      greetingElement.classList.remove('typewriter'); // Ensure cursor is removed after greeting
      showAvatar.value = true; // Show avatar after greeting is fully typed
      setTimeout(() => {
        showButton.value = true; // Show button after avatar is fully loaded
      }, 2000); // Adjust delay if necessary
    });
  });
});
</script>

<style scoped>
.typewriter::after {
  content: '|';
  display: inline-block;
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.bounce {
  animation: bounce 2s;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0); /* Starting position */
  }
  40% {
    transform: translateY(-30px); /* Move up */
  }
  60% {
    transform: translateY(-15px); /* Move up less */
  }
}
</style>
