<script setup lang="ts">
import { reactive } from 'vue'
import Link from "../../components/ui/Link.vue"
import Button from "../../components/ui/Button.vue"
import Layout from "../../layouts/page.vue"

const data = reactive({
  isLoginMode: true, // Login / Sign up
})

const login = () => {
  alert("ToDo")
}
</script>

<template>
  <Layout>
    <div class="text-center bg-white">
      <div :class="{
        'hidden': !data.isLoginMode,
      }">
        <div class="text-2xl">Login</div>
        <div>
          <div>
            <label>User ID</label>
            <input type="text" placeholder="UserID" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" placeholder="Password" />
          </div>
          <div>
            <Button @click="login">Login</Button>
          </div>
        </div>
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