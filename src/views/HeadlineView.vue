<script setup>
import Navbar from "../components/navigation/navbar.vue";
import Footer from '../components/navigation/footer.vue';
</script>

<template >
  <main>
    <Navbar />
    <div class="content">
      <SectionHeadline class="mt-5 mb-5" :data="topHeadlines" />
    </div>
    <Footer />
  </main>
</template>


<script>
import SectionHeadline from "../components/headline/headline-section.vue";
import { topNews } from "@/config/api.js";

export default {
  components: {
    SectionHeadline,
  },
  data() {
    return {
      usNews: [],
      topHeadlines: [],
    };
  },
  mounted() {
    topNews()
      .then((data) => {
        this.topHeadlines = data.articles;
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
