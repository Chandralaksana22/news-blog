<script setup>
import Navbar from "../components/navigation/navbar.vue";
import Footer from '../components/navigation/footer.vue';
</script>

<template >
  <main>
    <Navbar />
    <div class="content">
    <SectionSports class="mt-5 mb-5" :data="sportNews" />
    </div>
    <Footer />
  </main>
</template>


<script>
import SectionSports from '../components/sports/sports-section.vue';
import { sportData} from "@/config/api.js";

export default {
  components: {
    SectionSports,
  },
  data() {
    return {
      sportNews:[],
    };
  },
  mounted() {
    sportData()
      .then((data) => {
        this.sportNews = data.articles;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  },
};
</script>
<style>
.content {
  min-height: calc(100vh - 100px); /* Sesuaikan tinggi footer */
}
</style>