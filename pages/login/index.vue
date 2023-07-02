<script setup lang="ts">
import { reactive } from 'vue'
import Link from "../../components/ui/Link.vue"
import Layout from "../../layouts/page.vue"

const data = reactive({
  isLoginMode: true, // Login / Sign up
})
</script>

<template>
  <Layout>
    <div class="text-center">
      <div :class="{
        'hidden': !data.isLoginMode,
      }">
        <div class="text-2xl">Login</div>
        <div>
          または<a @click="data.isLoginMode = false"><Link>新規登録</Link></a>
        </div>
      </div>
      <div :class="{
        'hidden': data.isLoginMode,
      }">
        <div class="text-2xl">Sign up</div>
        <div>
          または<a @click="data.isLoginMode = true"><Link>ログイン</Link></a>
        </div>
      </div>
    </div>
  </Layout>
</template>