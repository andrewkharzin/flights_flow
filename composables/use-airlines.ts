// composables/use-airlines.ts
import { ref, onMounted } from 'vue';




export function useAirlines() {
  const airlines = ref([]);
  const supabase = useSupabaseClient();

  async function fetchAirlines() {
    const { data, error } = await supabase.from('airlines').select();
    if (error) {
      console.error('Error fetching airlines:', error);
    } else {
      airlines.value = data;
    }
  }

  onMounted(() => {
    fetchAirlines();
  });

  return {
    airlines,
    fetchAirlines,
  };
}
