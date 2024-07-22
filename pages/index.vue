<script setup lang="ts">

// compiler micro
definePageMeta({ layout: 'auth' })
useHead({ title: 'Home' })

const colorMode = useColorMode();


const links = [{
  label: 'Home',
  icon: 'i-heroicons-home',
  to: '/'
},
]
	
</script>

<template>
	<LayoutsPageWrapper>
		 <LayoutPageSection>
		 	

		 </LayoutPageSection>
		
	</LayoutsPageWrapper>


   
</template>