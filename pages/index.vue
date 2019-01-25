<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the lastest tech news!</h1>
    </section>
    <PostList />
  </div>
</template>

<script>
import PostList from "~/components/Posts/PostList.vue";

export default {
  components: {
    PostList
  }
};
</script>

<style scoped>
.intro{
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url('~assets/images/main-page-background.jpg');
  background-position: center;
  background-size: cover;
}

.intro h1{
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;

}
</style>
