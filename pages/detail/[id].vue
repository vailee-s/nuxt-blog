<template>
  <div class="p-5">
    <div v-if="pending">加载中...</div>
    <div v-else-if="error">{{ (error as NuxtError).data.message }}</div>
    <div v-else>
      <h1 class="text-2xl">{{ data?.title }}</h1>
      <div v-html="data?.contentHtml"></div>
      <!-- 评论区 -->
      <div class="py-2">
        <UTextarea v-model="value" placeholder="输入评论" />
        <UButton @click="onSubmit">发送</UButton>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
// import { useLogin } from '~/composable/user';
import { useUser } from '~/store/user';

type NuxtError = {
  statusCode: number;
  message: string;
  data: any;
};
const router = useRouter();
const route = useRoute()
const fetchPost = () => $fetch(`/api/detail/${route.params.id}`);
const { data, pending, error } = await useAsyncData(fetchPost);
// 也可使用全局error页面，通过showError来显示错误
// console.log('error', error);

// if (error) {
//   showError({
//     statusCode: 404,
//     message: '文章不存在',
//     data: { message: '文章不存在' }
//   })
// }
// 增加评论相关逻辑，注意登录状态的获取和使用
const value = useState("comment", () => "");
// const isLogin = useLogin()

const store = useUser();
const { isLogin } = storeToRefs(store)
const toast = useToast()
const onSubmit = () => {
  if (isLogin.value) {
    // 提示用户
    toast.add({ title: '已提交评论!' })
    // 提交留言...
    value.value = ''
  } else {
    // 要求登录
    router.push('/login?callback=' + route.path)
  }
}
</script>
