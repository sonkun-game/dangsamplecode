<template>
  <div>
    <h3 class="text-2xl font-bold text-left py-2">Tài khoản</h3>

    <div class="flex justify-end mr-5">
      <button class="btn btn-sm capitalize font-base bg-white border border-gray-300 text-gray-500 hover:text-white"
        onclick="my_modal_create_staff.showModal()">Tạo nhân viên</button>
      <dialog id="my_modal_create_staff" class="modal">
        <form method="dialog" class="modal-box bg-white max-w-5xl h-[550px]">
          <h3 class="text-base font-bold text-left py-2">Quản lý nhân viên</h3>
          <div class="grid grid-cols-2 gap-3 pt-5">
            <div class="col-span-1">
              <label for="small-input" class="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white">Tên
                đăng
                nhập *</label>
              <input v-model="name" @blur="validate" @change="validate" type="text" id="small-input"
                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <div class="text-left">
                <i v-if="error" class="error text-sm font-light text-red-500 ">Vui lòng nhập đủ</i>
              </div>
            </div>
            <div class="col-span-1">
              <label for="small-input" class="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white">Mật
                khẩu *</label>
              <input type="password" id="small-input"
                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <div class="text-left">
                <i v-if="error" class="error text-sm font-light text-red-500 ">Vui lòng nhập đủ</i>
              </div>
            </div>
            <div class="col-span-1">
              <label for="small-input" class="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white">Họ
                và tên *</label>
              <input type="text" id="small-input"
                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <div class="text-left">
                <i v-if="error" class="error text-sm font-light text-red-500 ">Vui lòng nhập đủ</i>
              </div>
            </div>
            <div class="col-span-1">
              <label for="small-input" class="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white">Số
                điện thoại *</label>
              <input type="text" id="small-input"
                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <div class="text-left">
                <i v-if="error" class="error text-sm font-light text-red-500 ">Vui lòng nhập đủ</i>
              </div>
            </div>
            <div class="col-span-1">
              <label for="small-input"
                class="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white">Email</label>
              <input type="text" id="small-input"
                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>
            <div class="col-span-1">
              <label for="location" class="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white">Vị
                trí</label>
              <select id="location"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected></option>
                <option value="med" class="text-sm">Media</option>
                <option value="ads" class="text-sm">Ads</option>
                <option value="chat" class="text-sm">Chat page</option>
                <option value="bkmedia" class="text-sm">Biên kịch Media</option>
              </select>
            </div>
            <div class="col-span-1">

              <label for="position" class="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white">Chức
                vụ</label>
              <select id="position"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected></option>
                <option value="qlmark" class="text-sm">Quản lý phòng Marketing</option>
              </select>
            </div>
            <div class="col-span-1">
              <label for="status" class="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white">Trạng
                thái</label>
              <select id="status"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected></option>
                <option value="on" class="text-sm">Làm việc</option>
                <option value="off" class="text-sm">Đã nghỉ</option>
              </select>
              <div class="pt-10 text-right">
                <button class="btn btn-sm mr-2 bg-white border-gray-400 capitalize">Hủy bỏ</button>
                <button class="btn btn-sm mr-2 border-gray-400 capitalize">Tiếp tục</button>
              </div>
            </div>
          </div>
        </form>
        <form method="dialog" class="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
    <div class="flex justify-between">
      <div class="flex p-5 space-x-4">
        <label for="status" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
        <select id="status"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected>Tất cả trạng thái</option>
          <option value="on">Làm việc</option>
          <option value="off">Đã nghỉ</option>
        </select>
        <label for="status" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
        <select id="status"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected>Tất cả chức vụ</option>
          <option value="on">QL phòng Marketing</option>
        </select>
        <label for="status" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
        <select id="status"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected>Tất cả vị trí</option>
          <option value="med">Media</option>
          <option value="ads">Ads</option>
          <option value="cpage">Chat Page</option>
          <option value="bkmed">Biên kịch Media</option>
        </select>
      </div>
      <div>
        <form class="p-5">
          <label for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div class="relative ">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="search" id="default-search"
              class="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Tìm kiếm bằng tên..." required>
          </div>
        </form>

      </div>
    </div>
    <h5 class="p-5 text-xl font-medium text-left">Thành viên đang hoạt động và ngừng hoạt động</h5>
    <div class="overflow-x-auto relative  sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="py-3 px-6">
              Tên nhân viên
            </th>
            <th scope="col" class="py-3 px-6">
              <div class="flex items-center">
                Tài khoản
              </div>
            </th>
            <th scope="col" class="py-3 px-6">
              <div class="flex items-center">
                Email
              </div>
            </th>
            <th scope="col" class="py-3 px-6">
              <div class="flex items-center">
                Phòng ban
              </div>
            </th>
            <th scope="col" class="py-3 px-6">
              <div class="flex items-center">
                Vị trí
              </div>
            </th>
            <th scope="col" class="py-3 px-6">
              <div class="flex items-center">
                Ngày tạo
              </div>
            </th>
            <th scope="col" class="py-3 px-6">
              <div class="flex items-center">
                Trạng thái
              </div>
            </th>

            <th scope="col" class="py-3 px-6">
              <div class="flex items-center">
                Thao tác
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Đăng
            </th>
            <td class="py-4 px-6">
              dang123
            </td>
            <td class="py-4 px-6">
              dang@gmail.com
            </td>
            <td class="py-4 px-6">
              Marketing
            </td>
            <td class="py-4 px-6">
              Dev
            </td>
            <td class="py-4 px-6">
              24/07/2023 13:39
            </td>
            <td class="text-green-500 py-4 px-6">
              Làm việc
            </td>
            <td class="py-4 px-6">
              <button>Edit</button>
            </td>

          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Đăng
            </th>
            <td class="py-4 px-6">
              dang123
            </td>
            <td class="py-4 px-6">
              dang@gmail.com
            </td>
            <td class="py-4 px-6">
              Marketing
            </td>
            <td class="py-4 px-6">
              Dev
            </td>
            <td class="py-4 px-6">
              24/07/2023 13:39
            </td>
            <td class="text-green-500 py-4 px-6">
              Làm việc
            </td>
            <td class="py-4 px-6">
              <button>Edit</button>
            </td>

          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Đăng
            </th>
            <td class="py-4 px-6">
              dang123
            </td>
            <td class="py-4 px-6">
              dang@gmail.com
            </td>
            <td class="py-4 px-6">
              Marketing
            </td>
            <td class="py-4 px-6">
              Dev
            </td>
            <td class="py-4 px-6">
              24/07/2023 13:39
            </td>
            <td class="text-green-500 py-4 px-6">
              Làm việc
            </td>
            <td class="py-4 px-6">
              <button>Edit</button>
            </td>

          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>

export default {
  data() {
    return {
      name: '',
      password: '',
      error: false
    }
  },
  methods: {
    validate() {
      if (!this.name.trim()) {
        this.error = true;
      } else {
        this.error = false;
      }
    }
  }
}
</script>

<style></style>