<script setup lang="ts">
// compiler micro
definePageMeta({ layout: 'auth' })
useHead({ title: 'Airlines' })


const colorMode = useColorMode();

const { airlines } = useAirlines(); // Use the composable to fetch airlines data

const links = [{
  label: 'Home',
  icon: 'i-heroicons-home',
  to: '/'
}, {
  label: 'Airlines',
  icon: 'arcticons:united-airlines'
}
]

import { defineProps } from 'vue';

const props = defineProps({
  airline: {
    type: Object as () => {
      id: string;
      iata: string | null;
      icao: string | null;
      name: string | null;
      aircraft_id: string | null;
      logo: string | null;
      awb_code: string | null;
    },
    required: true,
  },
});
	
</script>

<template>
	 <UCard class="hover:shadow-lg">
        <template #header>
          <div>
            <h3 class="text-lg font-bold dark:text-gray-200 text-cyan-600">
              {{ airline.name}}
            </h3>
          </div>
        </template>
         <div class="grid grid-cols-2">
          <NuxtImg :src="airline.logo" alt="Logo" v-if="airline.logo" class="w-20 rounded-lg"  />
          <div>
             <p class="text-md font-normal text-gray-400">IATA: 
            <span class="text-lg font-bold text-cyan-600">{{ airline.iata }}</span>
        </p>
          <p class="text-md font-normal text-gray-400">ICAO: 
          <span class="text-lg font-bold text-cyan-600">{{ airline.icao }}</span>
        </p>
            
          </div>
         
          
        </div>
        <template #footer>
          <div>
            <p class="text-md font-normal text-gray-400">Account: 
      <span class="text-lg font-bold text-cyan-600">{{ airline.awb_code }}</span>
      </p>
          </div>
        </template>
      </UCard>
</template>