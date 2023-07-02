<script setup lang="ts">
import { ref } from 'vue'
import Link from "../../components/ui/Link.vue"
import Layout from "../../layouts/page.vue"

const isLoginMode = ref(true) // Login / Sign up
</script>

<template>
  <Layout>
    <div class="text-center">
      <div v-show="isLoginMode.value">
        <div class="text-2xl">Login</div>
        <div>
          または<a @click="isLoginMode.value = false"><Link>新規登録</Link></a>
        </div>
      </div>
      <div v-show="!isLoginMode.value">
        <div class="text-2xl">Sign up</div>
        <div>
          または<a @click="isLoginMode.value = false"><Link>ログイン</Link></a>
        </div>
      </div>
    </div>
  </Layout>
</template>