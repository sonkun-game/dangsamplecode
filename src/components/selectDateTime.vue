<template>
  <div class="flex items-center">
    <input ref="dateTimeInput" v-model="selectedDate" class="w-40 p-2 border rounded focus:outline-none"
      placeholder="Chọn ngày giờ" />
  </div>
</template>

<script>
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.css";
import { ref, watchEffect } from "vue";

export default {
  setup() {
    const dateTimeInput = ref(null);
    const selectedDate = ref("");

    // Khi component được mounted, sử dụng Flatpickr để biến input thành calendar popup
    watchEffect(() => {
      flatpickr(dateTimeInput.value, {
        enableTime: true,
        dateFormat: "Y-m-d H:i",
        // Tùy chỉnh các tùy chọn khác của Flatpickr tại đây
        onChange: (selectedDates) => {
          selectedDate.value = selectedDates[0];
        },
      });
    });

    return {
      dateTimeInput,
      selectedDate,
    };
  },
};
</script>

<style>
/* Tùy chỉnh giao diện của input nếu cần */
</style>
