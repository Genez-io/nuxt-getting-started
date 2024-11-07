<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent="handleRegister">
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Register</button>
    </form>
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRegisterMutation } from '@/graphql/mutations';

const email = ref('');
const password = ref('');
const errorMessage = ref('');

const { mutate: register } = useRegisterMutation();

const handleRegister = async () => {
  try {
    const response = await register({ email: email.value, password: password.value });
    console.log('Registration successful:', response);
    // Handle successful registration, e.g., redirect or show success message
  } catch (error) {
    console.error('Registration error:', error);
    errorMessage.value = 'Registration failed. Please try again.';
  }
};
</script>
