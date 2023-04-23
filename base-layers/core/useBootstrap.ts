import { initFlowbite } from "flowbite";

const useBootstrap = () => {
  // initialize components based on data attribute selectors
  onMounted(() => {
    initFlowbite();
  });
};
export default useBootstrap;
