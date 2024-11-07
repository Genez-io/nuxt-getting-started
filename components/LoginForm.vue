<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useLoginMutation } from '@/graphql/mutations';

const email = ref('');
const password = ref('');
const errorMessage = ref('');

const { mutate: login } = useLoginMutation();

const handleLogin = async () => {
  try {
    const response = await login({ email: email.value, password: password.value });
    console.log('Login successful:', response);
    // Handle successful login, e.g., redirect or store token
  } catch (error) {
    console.error('Login error:', error);
    errorMessage.value = 'Login failed. Please check your credentials.';
  }
};
</script>
