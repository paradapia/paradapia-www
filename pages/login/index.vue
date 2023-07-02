<script setup lang="ts">
import { ref } from 'vue'
import Link from "../../components/ui/Link.vue"

definePageMeta({
  layout: 'page',
})

const isLoginMode = ref(true) // Login / Sign up
</script>

<template>
  <div>
    <div class="text-center">
      <div>
        <div class="text-2xl">Login</div>
        <div>
          または<a @click="isLoginMode.value = false"><Link>新規登録</Link></a>
        </div>
      </div>
      <div>
        <div class="text-2xl">Sign up</div>
        <div>
          または<a @click="isLoginMode.value = false"><Link>ログイン</Link></a>
        </div>
      </div>
    </div>
  </div>
</template>