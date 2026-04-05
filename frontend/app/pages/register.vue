<template>
  <div class="auth-page">
    <div class="container">
      <div class="auth-card">
        <h1 class="auth-card__title">Create an account</h1>
        <p class="auth-card__subtitle">Join DevBit Tech today</p>

        <form class="auth-form" novalidate @submit.prevent="handleSubmit">
          <div v-if="apiError" class="form-error form-error--global">{{ apiError }}</div>

          <div class="form-group">
            <label class="form-label" for="name">Name</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              class="form-control"
              :class="{ 'form-control--error': errors.name }"
              placeholder="Your full name"
              autocomplete="name"
            />
            <span v-if="errors.name" class="form-error">{{ errors.name }}</span>
          </div>

          <div class="form-group">
            <label class="form-label" for="email">Email</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              class="form-control"
              :class="{ 'form-control--error': errors.email }"
              placeholder="you@example.com"
              autocomplete="email"
            />
            <span v-if="errors.email" class="form-error">{{ errors.email }}</span>
          </div>

          <div class="form-group">
            <label class="form-label" for="password">Password</label>
            <input
              id="password"
              v-model="form.password"
              type="password"
              class="form-control"
              :class="{ 'form-control--error': errors.password }"
              placeholder="Min. 8 characters with letters and numbers"
              autocomplete="new-password"
            />
            <span v-if="errors.password" class="form-error">{{ errors.password }}</span>
          </div>

          <div class="form-group">
            <label class="form-label" for="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              v-model="form.confirmPassword"
              type="password"
              class="form-control"
              :class="{ 'form-control--error': errors.confirmPassword }"
              placeholder="Re-enter your password"
              autocomplete="new-password"
            />
            <span v-if="errors.confirmPassword" class="form-error">{{ errors.confirmPassword }}</span>
          </div>

          <button type="submit" class="btn btn--primary btn--full" :disabled="loading">
            {{ loading ? 'Creating account…' : 'Create Account' }}
          </button>
        </form>

        <p class="auth-card__footer">
          Already have an account? <NuxtLink to="/login">Sign in</NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Create Account – DevBit Tech',
  description: 'Create a new DevBit Tech account.'
})

const { register } = useAuth()

const form = reactive({ name: '', email: '', password: '', confirmPassword: '' })
const errors = reactive({ name: '', email: '', password: '', confirmPassword: '' })
const apiError = ref('')
const loading = ref(false)

function validate() {
  errors.name = ''
  errors.email = ''
  errors.password = ''
  errors.confirmPassword = ''
  let valid = true

  if (!form.name.trim()) {
    errors.name = 'Name is required.'
    valid = false
  }

  if (!form.email) {
    errors.email = 'Email is required.'
    valid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address.'
    valid = false
  }

  if (!form.password) {
    errors.password = 'Password is required.'
    valid = false
  } else if (!/^(?=.*[a-zA-Z])(?=.*\d).{8,}$/.test(form.password)) {
    errors.password = 'Password must be at least 8 characters and include letters and numbers.'
    valid = false
  }

  if (!form.confirmPassword) {
    errors.confirmPassword = 'Please confirm your password.'
    valid = false
  } else if (form.password !== form.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match.'
    valid = false
  }

  return valid
}

async function handleSubmit() {
  apiError.value = ''
  if (!validate()) return

  loading.value = true
  try {
    await register(form.name.trim(), form.email, form.password)
  } catch (err: unknown) {
    const e = err as { data?: { message?: string }; message?: string }
    apiError.value = e?.data?.message ?? e?.message ?? 'Registration failed. Please try again.'
  } finally {
    loading.value = false
  }
}
</script>
