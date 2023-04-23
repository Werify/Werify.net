<template>
  <!-- Block start -->
  <div
    id="banner"
    tabindex="-1"
    class="flex justify-between rounded-sm top-0 py-3 px-4 w-full bg-white border border-b border-gray-200 dark:border-gray-700 dark:bg-gray-800"
  >
    <div class="flex items-center mx-auto">
      <p class="text-sm font-medium text-gray-900 md:my-0 dark:text-white">
        <span
          class="hidden md:inline-flex rtl:ml-2 bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800"
          >{{ item.badge }}</span
        >
        <!-- We have launched Flowbite Blocks including over 120+ website sections! -->
        {{ item.title }}
        <!-- <a
          href="#"
          class="inline-flex items-center ml-0 text-sm font-medium text-blue-600 md:ml-2 dark:text-blue-500 hover:underline">
          {{ item.link.text }}
          <svg
            class="ml-1 w-4 h-4 text-blue-600 dark:text-blue-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
        </a> -->
        <NuxtLink
          class="inline-flex items-center ml-0 rtl:mr-2 text-sm font-medium text-blue-600 md:ml-2 dark:text-blue-500 hover:underline"
          :to="item.link.src"
        >
          {{ item.link.text }}
          <svg
            class="ml-1 mt-1 w-4 h-4 rtl:mr-1 rtl:mt-1 text-blue-600 dark:text-blue-500 rtl:rotate-180"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </NuxtLink>
      </p>
    </div>
    <button
      data-collapse-toggle="banner"
      type="button"
      class="inline-flex justify-center items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-sm text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
    >
      <svg
        class="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
  </div>
  <!-- Block end -->
</template>

<script setup lang="ts">
interface IAnnouncement {
  title: string;
  badge: string;
  link: ILink;
}
interface ILink {
  text: string;
  src: string;
}
const item = ref<IAnnouncement>({
  title: "Hello ! here is the announcement test from the Trader4",
  badge: "new",
  link: {
    text: "Homepage",
    src: "/",
  },
});
</script>
