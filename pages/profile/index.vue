<script setup>
const user = useSupabaseUser()
</script>

<template>
	<NuxtLayout name="auth">
		<LayoutsPageWrapper>

			<LayoutPageSection>

				<div class="w-full h-full">
			
				  <!--Main-->
				  <div class="container  mx-auto flex flex-wrap flex-col md:flex-row items-center">
					<!--Left Col-->
					<div class="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
					 
		             <ProfileAccount v-if="user" />
					 
					  
					</div>
			
					<!--Right Col-->
					
			
					<div class="mx-auto md:pt-16">
					  <p class="text-blue-400 font-bold pb-8 lg:pb-6 text-center">
						Download our app:
					  </p>
					  
					</div>
			
					<!--Footer-->
					<div class="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
					  <a class="text-gray-500 no-underline hover:no-underline" href="#">&copy; App 2020</a>
					  - Template by
					  <a class="text-gray-500 no-underline hover:no-underline" href="https://www.tailwindtoolbox.com">TailwindToolbox.com</a>
					</div>
				  </div>
				</div>
			</LayoutPageSection>
		</LayoutsPageWrapper>
		
	</NuxtLayout>
			
	
	
</template>
