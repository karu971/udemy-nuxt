<template>
  <section class="posts-list">
    <PostPreview
      id="1"
      title="Hello there!"
      previewText="This is my first Post"
      thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCvJ5YlCZSUr3uPouAetbd7pe7BghuFt8WETSqibVsOUdSQzoV"
    />
    <PostPreview
      id="2"
      title="Hello there!"
      previewText="This is my first Post"
      thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCvJ5YlCZSUr3uPouAetbd7pe7BghuFt8WETSqibVsOUdSQzoV"
    />
    <PostPreview
      id="3"
      title="Hello there!"
      previewText="This is my first Post"
      thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCvJ5YlCZSUr3uPouAetbd7pe7BghuFt8WETSqibVsOUdSQzoV"
    />
  </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'
export default {
    components: {
        PostPreview
    }
};
</script>

<style scoped>
.posts-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
