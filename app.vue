<script setup>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
provideHeadlessUseId(() => useId())
const colorMode = useColorMode();
const { locale, setLocale } = useI18n()
const changeColor = () => (colorMode.preference = (colorMode.value === 'light' ? 'dark' : 'light'))

const { awesome } = useAppConfig()

useHead({
  title: awesome.name,
  titleTemplate: `%s - ${awesome.name}`,
})

</script>


<template>
  <Body
    class="antialiased duration-300 transition-colors text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-950" :class="{ dark: colorMode.value === 'dark' }"
  >
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </Body>
</template>
