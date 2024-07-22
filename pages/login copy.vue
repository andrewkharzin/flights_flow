<script setup>
const user = useSupabaseUser();
const email = ref("");
const password = ref("");
const errorMsg = ref("");
const { auth } = useSupabaseClient();

const userLogin = async () => {
  try {
    const { error } = await auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });

    email.value = "";
    password.value = "";

    if (error) throw error;
  } catch (error) {
    errorMsg.value = error.message;
    setTimeout(() => {
      errorMsg.value = "";
    }, 3000);
  }
};

watchEffect(() => {
  if (user.value) {
    return navigateTo("/");
  }
});
</script>

<template>
  <NuxtLayout name="login">
    <div class="logon leading-normal tracking-normal m-6 bg-cover bg-fixed">
      <div class="h-full">
         <!--Left Col-->
         <div class="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">

           <div class="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
            <h1 class="my-4 text-2xl md:text-5xl text-gray-200 opacity-75 font-bold leading-tight text-center md:text-left">
              Flights
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-pink-500">
                Flow
              </span>
              
            </h1>
           
              <form
                @submit.prevent="userLogin"
                class="bg-gray-900  w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4"
              >
                <h2 class="mb-5 text-lg font-medium text-[#aac8e4]">Login</h2>
                <div class="relative mb-4">
                  <label for="full-name" class="text-sm leading-7 text-gray-400"
                    >Email</label
                  >
                  <UInput
                    color="gray" 
                    variant="outline"
                    v-model="email"
                    type="email"
                    id="email"
                    name="email"
                    class="focus:ring transform transition hover:scale-102 duration-300 ease-in-out"
                    required
                  />
                </div>
        
                <div class="relative mb-4">
                  <label for="password" class="text-sm leading-7 text-gray-400"
                    >Password</label
                  >
                  <UInput
                    color="gray" 
                    variant="outline"
                    id="password"
                    v-model="password"
                    name="password"
                    type="password"
                    class="focus:ring transform transition hover:scale-102 duration-300 ease-in-out"
                    required
                  />
                </div>
        
                <UButton
                  color="primary" variant="solid"
                  
                >
                  Submit
                </UButton>
        
                <span
                  class="bg-opacity-50 absolute right-8 top-8 rounded-lg bg-[#242424] p-8 px-4 py-2 text-red-500"
                  v-if="errorMsg"
                  >{{ errorMsg }}</span
                >
              </form>
          </div>
         </div>
      </div>
    </div>
        
    
    
  </NuxtLayout>
</template>


<style scoped>

.logon {
  background-image: url('header.png');
  background-size: cover;
  background-position: relative;
  background-repeat: no-repeat;
  /* opacity: 0; */
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
 
}


</style>

<!-- <form
          @submit.prevent="userLogin"
          class="bg-opacity-50 mt-10 flex w-full flex-col rounded-lg bg-[#242424] p-8 md:mt-0"
        >
          <h2 class="mb-5 text-lg font-medium text-[#aac8e4]">Login</h2>
          <div class="relative mb-4">
            <label for="full-name" class="text-sm leading-7 text-gray-400"
              >Email</label
            >
            <input
              v-model="email"
              type="email"
              id="email"
              name="email"
              class="bg-opacity-20 w-full rounded border border-gray-600 bg-transparent py-1 px-3 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-[#42b883] focus:bg-transparent focus:ring-2 focus:ring-transparent"
              required
            />
          </div>
  
          <div class="relative mb-4">
            <label for="password" class="text-sm leading-7 text-gray-400"
              >Password</label
            >
            <input
              id="password"
              v-model="password"
              name="password"
              type="password"
              class="bg-opacity-20 w-full rounded border border-gray-600 bg-transparent py-1 px-3 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-[#42b883] focus:bg-transparent focus:ring-2 focus:ring-transparent"
              required
            />
          </div>
  
          <button
            class="rounded border-0 bg-[#42b883] py-2 px-8 font-sans font-bold text-[#213547] transition-colors duration-500 hover:bg-[#42d392] focus:outline-none"
          >
            Submit
          </button>
  
          <span
            class="bg-opacity-50 absolute right-8 top-8 rounded-lg bg-[#242424] p-8 px-4 py-2 text-red-500"
            v-if="errorMsg"
            >{{ errorMsg }}</span
          >
        </form> -->