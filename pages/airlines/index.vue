<script setup lang="ts">
// compiler micro
definePageMeta({ layout: 'auth' })
useHead({ title: 'Airlines' })

const { airlines } = useAirlines();
const colorMode = useColorMode();


const links = [{
  label: 'Home',
  icon: 'i-heroicons-home',
  to: '/'
}, {
  label: 'Airlines',
  icon: 'i-heroicons-table-cells'
}
]


	
</script>

<template>
	 <LayoutsPageWrapper>
	 	<LayoutPageSection>
	 		<LayoutPageHeader>
                 <UBreadcrumb :links="links" />
             </LayoutPageHeader>
             <div class="airlines-grid">
        <AirlinesCard v-for="airline in airlines" :key="airline.id" :airline="airline" />
      </div>


	 	</LayoutPageSection>
	 </LayoutsPageWrapper>
</template>

<style scoped>
.airlines-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
  padding: 16px;
}
</style>