<script setup lang="ts">
  const {
    email,
    phone,
    password,
    mainSubmit, 
    resetForm, 
    errors,
    mainToggle,
  } = useMainForm();
</script>
<template>
  <button @click="mainToggle = 'email'">email</button>
  <button @click="mainToggle = 'phone'">phone</button>
  {{ mainToggle }}

  <form @submit.prevent="mainSubmit">
    <div v-if="mainToggle === 'email'">
      email
      <input type="text" v-model="email">
      <div>
        {{ errors.email }}
      </div>
    </div>

    <div v-if="mainToggle === 'phone'">
      <input type="text" v-model="phone">
      <div>
        {{ errors.phone }}
      </div>
    </div>

    <div>
      <input type="text" v-model="password">
      <div>
        {{ errors.password }}
      </div>
    </div>
    <button type="submit">submit</button>
  </form>
</template>
