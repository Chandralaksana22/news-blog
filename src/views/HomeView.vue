<script setup>
import Navbar from "../components/navigation/navbar.vue";
import Footer from '../components/navigation/footer.vue';
</script>

<template >
  <main>
    <Navbar />
    <div class="content">
      <SectionHeadline class="mt-5 mb-5" :data="topHeadlines" />
      <SectionUs class="mt-5" :data="usNews" />
      <SectionSports class="mt-5 mb-5" :data="sportNews" />
      <SectionEntertain class="mt-5 mb-5" :data="topHeadlines" />
    </div>
    <Footer />
  </main>
</template>


<script>
import SectionUs from "../components/home/american-section.vue";
import SectionHeadline from "../components/home/headline-section.vue";
import SectionSports from '../components/home/sports-section.vue';
import SectionEntertain from "../components/home/entertain-section.vue";
import { usData, topNews, sportData, entertainmentData} from "@/config/api.js";

export default {
  components: {
    SectionUs,
    SectionHeadline,
    SectionSports,
    SectionEntertain
  },
  data() {
    return {
      usNews: [],
      topHeadlines: [],
      sportNews:[],
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
    usData()
      .then((data) => {
        this.usNews = data.articles;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    sportData()
      .then((data) => {
        this.sportNews = data.articles;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    entertainmentData()
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