<template>
  <!-- Block start -->
  <teleport to="body">
    <div v-show="showModal">
      <div
        class="p-4 w-full fixed bottom-0 z-50 right-0 max-w-xl h-full md:h-auto"
      >
        <div class="relative bg-white rounded-sm shadow dark:bg-gray-800">
          <div class="p-5 text-sm font-light text-gray-500 dark:text-gray-400">
            <p class="mb-2">
              We use cookies, including third party cookies, for operational
              purposes, statistical analyses, to personalize your experience,
              provide you with targeted content tailored to your interests and
              to analyze the performance of our advertising campaigns.
            </p>
            <p>
              To find out more about the types of cookies, as well as who sends
              them on our website, please visit our dedicated guide to
              <a
                href="#"
                class="font-normal text-gray-900 hover:underline dark:text-white"
                >managing cookies</a
              >.
            </p>
          </div>
          <div
            class="justify-between items-center p-6 pt-0 space-y-4 sm:flex sm:space-y-0"
          >
            <button
              id="close-modal"
              type="button"
              class="py-2 px-4 w-full text-sm font-medium text-center text-white rounded-sm bg-primary-700 sm:w-auto hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Personalize my choices
            </button>
            <div
              class="items-center space-y-4 sm:space-x-4 sm:flex sm:space-y-0"
            >
              <button
                id="block-cookies"
                type="button"
                class="py-2 px-4 w-full text-sm font-medium text-gray-500 bg-white rounded-sm border border-gray-200 sm:w-auto hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                Reject all
              </button>
              <button
                id="accept-cookies"
                type="button"
                class="py-2 px-4 w-full text-sm font-medium text-center text-white rounded-sm bg-primary-700 sm:w-auto hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Accept all
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </teleport>
  <!-- Block end -->
</template>
<script lang="ts" setup>
// accept all cookies

const accCookies = useCookie<boolean>("accCookies");
const showModal = ref(false);
onMounted(() => {
  // check if cookie is set
  if (accCookies.value === undefined) initModal();
});
const initModal = () => {
  // Learn more on how to use the Modal object from Flowbite: https://flowbite.com/docs/components/modal/#javascript-behaviour

  showModal.value = true;

  const closeModalEl = document.getElementById("close-modal") as Element;
  closeModalEl.addEventListener("click", function () {
    showModal.value = false;
  });

  const acceptCookiesEl = document.getElementById("accept-cookies") as Element;
  acceptCookiesEl.addEventListener("click", function () {
    // handle cookie accept nuxt3

    accCookies.value = true;
    showModal.value = false;
  });

  const blockCookiesEl = document.getElementById("block-cookies") as Element;
  blockCookiesEl.addEventListener("click", function () {
    // handle cookie block
    accCookies.value = false;
    showModal.value = false;
  });
};
</script>
