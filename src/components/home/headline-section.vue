<template>
    <main>
      <div class="container mx-auto">
        <h1 class="mb-5" v-if="showHeading">Headline News</h1>
        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
          <div v-for="item in slicedData" :key="item.id">
            <div class="card w-96 bg-base-100 shadow-xl">
              <figure><img class="w-full h-60 object-cover" :src="item.urlToImage" :alt="item.title" /></figure>
              <div class="card-body">
                <h2 class="text-xl font-bold truncate">{{ item.title }}</h2>
                <p class="truncate overflow-ellipsis">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </template>
  
  <script>
export default {
  props: ["data"],
  computed: {
    slicedData() {
      if (this.data) {
        return this.data.slice(0, 3);
      } else {
        return [];
      }
    },
    showHeading() {
      return this.slicedData.length > 0;
    },
  },
};
  </script>
  