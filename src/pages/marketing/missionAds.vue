<template>
  <div>
    <h3 class="text-2xl font-bold text-left py-2">Nhiệm vụ Ads</h3>

    <div class="flex justify-between">
      <button class="mt-2.5 btn bg-white hover:bg-custom-color border border-gray-300 text-gray-500 text-sm font-base capitalize py-2 px-4  hover:text-white
      " onclick="my_modal_2.showModal()">Bộ lọc</button>
      <dialog id="my_modal_2" class="modal">
        <form method="dialog" class="modal-box bg-white h-[400px] max-w-2xl">
          <h3 class="text-2xl font-bold text-left py-2">Bộ lọc</h3>
          <div class="grid grid-cols-3 gap-4">
            <select class="m-2 select select-bordered menu p-2 shadow bg-white rounded-box px-17">
              <option disabled selected>Đối tượng</option>
              <option>Trống</option>
            </select>
            <select class="m-2 select select-bordered menu p-2 shadow bg-white rounded-box px-17">
              <option disabled selected>Loại hình DV</option>
              <option>Trống</option>
            </select>
            <select class="m-2 select select-bordered menu p-2 shadow bg-white rounded-box px-17">
              <option disabled selected>Hình thức DV</option>
              <option>Trống</option>
            </select>
            <select class="m-2 select select-bordered menu p-2 shadow bg-white rounded-box px-17">
              <option disabled selected>Thành phố</option>
              <option>Trống</option>
            </select>
            <select class="m-2 select select-bordered menu p-2 shadow bg-white rounded-box px-17">
              <option disabled selected>Loại công việc</option>
              <option>Trống</option>
            </select>
            <select class="m-2 select select-bordered menu p-2 shadow bg-white rounded-box px-17">
              <option disabled selected>Quận/Huyện</option>
              <option>Trống</option>
            </select>
            <select class="m-2 select select-bordered menu p-2 shadow bg-white rounded-box px-17">
              <option disabled selected>Phường/Xã</option>
              <option>Trống</option>
            </select>
          </div>
          <div class="pt-6 text-right">
            <button class="btn mr-2 bg-white border border-gray-400">Bỏ chọn</button>
            <button class="btn">Xem kết quả</button>
          </div>
        </form>
        <form method="dialog" class="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <div class="pr-2">
        <!-- Search bar -->
        <form class="pb-2">
          <label for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div class="relative ">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <!-- <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg> -->
            </div>
            <input type="search" id="default-search"
              class="block w-full p-2 pl-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Tìm theo mã nguồn" required>
          </div>
        </form>
        <form class="">
          <label for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div class="relative ">
            <input type="search" id="default-search"
              class="block w-full p-2 pl-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Tìm theo tên & SĐT" required>
          </div>
        </form>
        <!-- Button  -->
        <div>
          <button
            class="mt-2.5 ml-12 px-7 btn btn-sm bg-white hover:bg-custom-color border border-gray-300 text-gray-500 text-sm font-base capitalize hover:text-white "
            onclick="my_modal_job.showModal()">Tạo công việc</button>
          <dialog id="my_modal_job" class="modal">
            <form method="dialog" class="modal-box bg-white max-w-3xl h-[800px]">
              <h3 class="text-xl font-bold text-left py-2">Tạo mới công việc</h3>
              <div class="grid grid-cols-1 gap-3 pt-5">
                <div class="col-span-1">
                  <label for="small-input"
                    class="block mb-2 text-left text-base font-semibold text-gray-900 dark:text-white">Tên/Thông
                    tin</label>
                  <input type="text" id="small-input" placeholder="Mã nguồn Media"
                    class="block w-full p-2 text-gray-500 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                </div>
                <div>
                  <label for="entity"
                    class="block mb-2 text-left text-base font-semibold text-gray-900 dark:text-white">Đối
                    tượng</label>
                  <select id="entity"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected class="text-xs font-normal">Đối tượng</option>
                    <option value="demo" class="text-sm">Demo</option>
                  </select>
                </div>
                <div>
                  <label for="service"
                    class="block mb-2 text-left text-base font-semibold text-gray-900 dark:text-white">Dịch
                    vụ</label>
                  <select id="service"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected class="text-xs font-normal">Dịch vụ</option>
                    <option value="demo" class="text-sm">Demo</option>
                  </select>
                </div>
                <div>
                  <label for="form"
                    class="block mb-2 text-left text-base font-semibold text-gray-900 dark:text-white">Hình
                    thức</label>
                  <select id="form"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected class="text-xs font-normal">Hình thức</option>
                    <option value="demo" class="text-sm">Demo</option>
                  </select>
                </div>
                <div>
                  <label for="jobs"
                    class="block mb-2 text-left text-base font-semibold text-gray-900 dark:text-white">Loại
                    công việc</label>
                  <select id="jobs"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected class="text-xs font-normal">Loại công việc</option>
                    <option value="demo" class="text-sm">Demo</option>
                  </select>
                </div>
                <div>
                  <label for="staff"
                    class="block mb-2 text-left text-base font-semibold text-gray-900 dark:text-white">Nhân
                    viên</label>
                  <select id="staff"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected class="text-xs font-normal">Chọn nhân viên</option>
                    <option value="demo" class="text-sm">Demo</option>
                  </select>
                </div>
                <div class="w-full">
                  <label class="block mb-2 text-left text-base font-semibold text-gray-900 dark:text-white">Ghi
                    chú</label>
                  <textarea class="w-full textarea textarea-bordered border-gray-300 bg-white"
                    placeholder="Ghi chú"></textarea>
                </div>
              </div>
              <div class="pt-10 text-right">
                <button class="btn btn-sm mr-2 bg-white border-gray-400 capitalize">Hủy bỏ</button>
                <button class="btn btn-sm mr-2 border-gray-400 capitalize">Đồng ý</button>
              </div>
            </form>

            <form method="dialog" class="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>

      </div>

    </div>
    <div class="flex">
      <button
        class="mt-2.5 mr-2 btn bg-white hover:bg-custom-color border border-gray-300 text-gray-500 text-sm font-base capitalize py-2 px-4  hover:text-white"
        onclick="my_modal_3.showModal()">Cấu hình trạng thái</button>
      <dialog id="my_modal_3" class="modal">
        <form method="dialog" class="modal-box bg-white h-[450px] max-w-7xl">
          <h3 class=" font-bold text-left py-2">Cấu hình trạng thái</h3>
          <div class="text-right">
            <button class="btn capitalize">Tạo trạng thái</button>
          </div>
          <div class="overflow-x-auto mt-5">
            <table class="table">
              <!-- head -->
              <thead class="text-gray-500 text-base">
                <tr>
                  <th>Ngày tạo</th>
                  <th>Người tạo</th>
                  <th>Tên</th>
                  <th>Trạng thái</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                <!-- row 1 -->
                <tr class="hover hover:text-white">
                  <th>26/7</th>
                  <td>Đăng</td>
                  <td>Đăng</td>
                  <td>Hoạt động</td>
                  <td>Demo</td>
                </tr>
                <!-- row 2 -->
                <tr class="hover hover:text-white">
                  <th>26/7</th>
                  <td>Đăng</td>
                  <td>Đăng</td>
                  <td>Hoạt động</td>
                  <td>Demo</td>
                </tr>
                <!-- row 3 -->
                <tr class="hover hover:text-white">
                  <th>26/7</th>
                  <td>Đăng</td>
                  <td>Đăng</td>
                  <td>Hoạt động</td>
                  <td>Demo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
        <form method="dialog" class="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <button
        class="mt-2.5 mr-2 btn bg-white hover:bg-custom-color border border-gray-300 text-gray-500 text-sm font-base capitalize py-2 px-4  hover:text-white"
        onclick="my_modal_4.showModal()">Cấu hình công việc</button>
      <dialog id="my_modal_4" class="modal">
        <form method="dialog" class="modal-box bg-white h-[450px] max-w-7xl">
          <h3 class=" font-bold text-left py-2">Cấu hình công việc</h3>
          <div class="text-right">
            <button class="btn capitalize">Tạo công việc</button>
          </div>
          <div class="overflow-x-auto mt-5">
            <table class="table">
              <!-- head -->
              <thead class="text-gray-500 text-base">
                <tr>
                  <th>Ngày tạo</th>
                  <th>Người tạo</th>
                  <th>Công việc</th>
                  <th>Ngày</th>
                  <th>Giờ</th>
                  <th>Trạng thái</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                <!-- row 1 -->
                <tr class="hover hover:text-white">
                  <th>Demo</th>
                  <td>Demo</td>
                  <td>Demo</td>
                  <td>Demo</td>
                  <td>Demo</td>
                  <td>Demo</td>
                  <td>Demo</td>
                </tr>
                <!-- row 2 -->
                <tr class="hover hover:text-white">
                  <th>Demo</th>
                  <td>Demo</td>
                  <td>Demo</td>
                  <td>Demo</td>
                  <td>Demo</td>
                  <td>Demo</td>
                  <td>Demo</td>
                </tr>
                <!-- row 3 -->
                <tr class="hover hover:text-white">
                  <th>26/7</th>
                  <td>Demo</td>
                  <td>Demo</td>
                  <td>Demo</td>
                  <td>Demo</td>
                  <td>Demo</td>
                  <td>Demo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
        <form method="dialog" class="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <button
        class="mt-2.5 mr-2 btn bg-white hover:bg-custom-color border border-gray-300 text-gray-500 text-sm font-base capitalize py-2 px-4  hover:text-white"
        onclick="my_modal_5.showModal()">Cấu hình dịch vụ</button>
      <dialog id="my_modal_5" class="modal">
        <form method="dialog" class="modal-box bg-white h-[450px] max-w-7xl">
          <h3 class=" font-bold text-left py-2">Cấu hình dịch vụ</h3>
          <div class="text-right">
            <button class="btn capitalize">Tạo dịch vụ</button>
          </div>
          <div class="overflow-x-auto mt-5">
            <table class="table">
              <!-- head -->
              <thead class="text-gray-500 text-base">
                <tr>
                  <th>Ngày tạo</th>
                  <th>Người tạo</th>
                  <th>Tên dịch vụ</th>
                  <th>Trạng thái</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                <!-- row 1 -->
                <tr class="hover hover:text-white">
                  <th>Demo</th>
                  <td>Demo</td>
                  <td>Demo</td>
                  <td>Demo</td>
                  <td>Demo</td>
                </tr>
                <!-- row 2 -->
                <tr class="hover hover:text-white">
                  <th>Demo</th>
                  <td>Demo</td>
                  <td>Demo</td>
                  <td>Demo</td>
                  <td>Demo</td>
                </tr>
                <!-- row 3 -->
                <tr class="hover hover:text-white">
                  <th>Demo</th>
                  <td>Demo</td>
                  <td>Demo</td>
                  <td>Demo</td>
                  <td>Demo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
        <form method="dialog" class="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <button
        class="mt-2.5 mr-2 btn bg-white hover:bg-custom-color border border-gray-300 text-gray-500 text-sm font-base capitalize py-2 px-4  hover:text-white"
        onclick="my_modal_6.showModal()">Cấu hình hình thức</button>
      <dialog id="my_modal_6" class="modal">
        <form method="dialog" class="modal-box bg-white h-[450px] max-w-7xl">
          <h3 class=" font-bold text-left py-2">Cấu hình hình thức</h3>
          <div class="text-right">
            <button class="btn capitalize">Tạo hình thức</button>
          </div>
          <div class="overflow-x-auto mt-5">
            <table class="table">
              <!-- head -->
              <thead class="text-gray-500 text-base">
                <tr>
                  <th>Ngày tạo</th>
                  <th>Người tạo</th>
                  <th>Hình thức</th>
                  <th>Trạng thái</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                <!-- row 1 -->
                <tr class="hover hover:text-white">
                  <th>Demo</th>
                  <td>Demo</td>
                  <td>Demo</td>
                  <td>Demo</td>
                  <td>Demo</td>
                </tr>
                <!-- row 2 -->
                <tr class="hover hover:text-white">
                  <th>Demo</th>
                  <td>Demo</td>
                  <td>Demo</td>
                  <td>Demo</td>
                  <td>Demo</td>
                </tr>
                <!-- row 3 -->
                <tr class="hover hover:text-white">
                  <th>Demo</th>
                  <td>Demo</td>
                  <td>Demo</td>
                  <td>Demo</td>
                  <td>Demo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
        <form method="dialog" class="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <button
        class="mt-2.5 btn bg-white hover:bg-custom-color border border-gray-300 text-gray-500 text-sm font-base capitalize py-2 px-4  hover:text-white"
        onclick="my_modal_7.showModal()">Cấu hình đối tượng</button>
      <dialog id="my_modal_7" class="modal">
        <form method="dialog" class="modal-box bg-white h-[450px] max-w-7xl">
          <h3 class=" font-bold text-left py-2">Cấu hình đối tượng</h3>
          <div class="text-right">
            <button class="btn capitalize">Tạo đối tượng</button>
          </div>
          <div class="overflow-x-auto mt-5">
            <table class="table">
              <!-- head -->
              <thead class="text-gray-500 text-base">
                <tr>
                  <th>Ngày tạo</th>
                  <th>Người tạo</th>
                  <th>Đối tượng</th>
                  <th>Trạng thái</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                <!-- row 1 -->
                <tr class="hover hover:text-white">
                  <th>Demo</th>
                  <td>Demo</td>
                  <td>Demo</td>
                  <td>Demo</td>
                  <td>Demo</td>
                </tr>
                <!-- row 2 -->
                <tr class="hover hover:text-white">
                  <th>Demo</th>
                  <td>Demo</td>
                  <td>Demo</td>
                  <td>Demo</td>
                  <td>Demo</td>
                </tr>
                <!-- row 3 -->
                <tr class="hover hover:text-white">
                  <th>Demo</th>
                  <td>Demo</td>
                  <td>Demo</td>
                  <td>Demo</td>
                  <td>Demo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
        <form method="dialog" class="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
    <!-- Title - Table -->
    <div class="flex pt-5 pb-5">
      <button
        class="btn btn-sm bg-white hover:bg-custom-color border border-gray-300 text-gray-500 text-sm font-base capitalize hover:text-white mr-2">Tất
        cả 0</button>
      <button
        class="btn btn-sm bg-white hover:bg-custom-color border border-gray-300 text-gray-500 text-sm font-base capitalize hover:text-white mr-2">Khởi
        tạo 0</button>
      <button
        class="btn btn-sm bg-white hover:bg-custom-color border border-gray-300 text-gray-500 text-sm font-base capitalize hover:text-white mr-2">Hủy
        0</button>
      <button
        class="btn btn-sm bg-white hover:bg-custom-color border border-gray-300 text-gray-500 text-sm font-base capitalize hover:text-white mr-2">Done
        0</button>
      <button
        class="btn btn-sm bg-white hover:bg-custom-color border border-gray-300 text-gray-500 text-sm font-base capitalize hover:text-white mr-2">Đã
        hẹn 0</button>
    </div>
    <div class="flex pb-2">
      <button
        class="btn btn-sm bg-white border border-gray-300 text-gray-500 text-base font-base capitalize hover:text-white"
        onclick="my_modal_filter.showModal()">
        <i class='bx bx-filter-alt'></i>
      </button>
      <dialog id="my_modal_filter" class="modal">
        <form method="dialog" class="modal-box bg-white">
          <div class="form-control">
            <h3 class="text-base font-bold text-left py-2">Cột Table</h3>
            <div class="grid grid-cols-2 gap-2 items-center">
              <div>
                <input type="checkbox" checked="checked" class="checkbox mr-3" />
                <span>STT</span>
              </div>
              <div>
                <input type="checkbox" checked="checked" class="checkbox mr-3" />
                <span>STT</span>
              </div>
              <div>
                <input type="checkbox" checked="checked" class="checkbox mr-3" />
                <span>STT</span>
              </div>
              <div>
                <input type="checkbox" checked="checked" class="checkbox mr-3" />
                <span>STT</span>
              </div>
              <div>
                <input type="checkbox" checked="checked" class="checkbox mr-3" />
                <span>STT</span>
              </div>
              <div>
                <input type="checkbox" checked="checked" class="checkbox mr-3" />
                <span>STT</span>
              </div>
            </div>
          </div>
        </form>
        <form method="dialog" class="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
    <!-- Table -->
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
              <button class="btn btn-sm bg-white text-base border-gray-300" onclick="my_modal_edit.showModal()"><i
                  class='bx bx-edit-alt'></i>
              </button>
              <dialog id="my_modal_edit" class="modal">
                <form method="dialog" class="modal-box bg-white max-w-4xl">
                  <h3 class="text-base font-bold text-left py-2">Quản lý nhân viên</h3>
                  <div class="grid grid-cols-2 gap-3 pt-5">
                    <div class="col-span-1">
                      <label for="small-input"
                        class="block mb-2 text-left text-base font-semibold text-gray-900 dark:text-white">Tên/Thông
                        tin</label>
                      <input type="text" id="small-input"
                        class="block w-full p-2 text-gray-500 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </div>
                    <div class="col-span-1">
                      <label for="small-input"
                        class="block mb-2 text-left text-base font-semibold text-gray-900 dark:text-white">Số điện
                        thoại</label>
                      <input type="text" id="small-input"
                        class="block w-full p-2 text-gray-500 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </div>
                    <div class="col-span-1">
                      <label for="small-input"
                        class="block mb-2 text-left text-base font-semibold text-gray-900 dark:text-white">Email</label>
                      <input type="text" id="small-input"
                        class="block w-full p-2 text-gray-500 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </div>
                    <div>
                      <label for="local"
                        class="block mb-2 text-left text-base font-semibold text-gray-900 dark:text-white">Vị trí</label>
                      <select id="local"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected class="text-xs font-normal"></option>
                        <option value="demo" class="text-sm">Demo</option>
                      </select>
                    </div>
                    <div>
                      <label for="position"
                        class="block mb-2 text-left text-base font-semibold text-gray-900 dark:text-white">Chức vụ</label>
                      <select id="position"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected class="text-xs font-normal"></option>
                        <option value="demo" class="text-sm">Demo</option>
                      </select>
                    </div>
                    <div>
                      <label for="status"
                        class="block mb-2 text-left text-base font-semibold text-gray-900 dark:text-white">Trạng
                        thái</label>
                      <select id="status"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected class="text-xs font-normal"></option>
                        <option value="demo" class="text-sm">Demo</option>
                      </select>
                    </div>
                  </div>
                  <div class="pt-10 text-right">
                    <button class="btn btn-sm mr-2 bg-white border-gray-400 capitalize">Hủy bỏ</button>
                    <button class="btn btn-sm mr-2 border-gray-400 capitalize">Đồng ý</button>
                  </div>
                </form>
                <form method="dialog" class="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
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
              <button class="btn btn-sm bg-white text-base border-gray-300" onclick="my_modal_edit_two.showModal()"><i
                  class='bx bx-edit-alt'></i>
              </button>
              <dialog id="my_modal_edit_two" class="modal">
                <form method="dialog" class="modal-box bg-white max-w-4xl">
                  <h3 class="text-base font-bold text-left py-2">Quản lý nhân viên</h3>
                  <div class="grid grid-cols-2 gap-3 pt-5">
                    <div class="col-span-1">
                      <label for="small-input"
                        class="block mb-2 text-left text-base font-semibold text-gray-900 dark:text-white">Tên/Thông
                        tin</label>
                      <input type="text" id="small-input"
                        class="block w-full p-2 text-gray-500 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </div>
                    <div class="col-span-1">
                      <label for="small-input"
                        class="block mb-2 text-left text-base font-semibold text-gray-900 dark:text-white">Số điện
                        thoại</label>
                      <input type="text" id="small-input"
                        class="block w-full p-2 text-gray-500 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </div>
                    <div class="col-span-1">
                      <label for="small-input"
                        class="block mb-2 text-left text-base font-semibold text-gray-900 dark:text-white">Email</label>
                      <input type="text" id="small-input"
                        class="block w-full p-2 text-gray-500 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </div>
                    <div>
                      <label for="local"
                        class="block mb-2 text-left text-base font-semibold text-gray-900 dark:text-white">Vị trí</label>
                      <select id="local"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected class="text-xs font-normal"></option>
                        <option value="demo" class="text-sm">Demo</option>
                      </select>
                    </div>
                    <div>
                      <label for="position"
                        class="block mb-2 text-left text-base font-semibold text-gray-900 dark:text-white">Chức vụ</label>
                      <select id="position"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected class="text-xs font-normal"></option>
                        <option value="demo" class="text-sm">Demo</option>
                      </select>
                    </div>
                    <div>
                      <label for="status"
                        class="block mb-2 text-left text-base font-semibold text-gray-900 dark:text-white">Trạng
                        thái</label>
                      <select id="status"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected class="text-xs font-normal"></option>
                        <option value="demo" class="text-sm">Demo</option>
                      </select>
                    </div>
                  </div>
                  <div class="pt-10 text-right">
                    <button class="btn btn-sm mr-2 bg-white border-gray-400 capitalize">Hủy bỏ</button>
                    <button class="btn btn-sm mr-2 border-gray-400 capitalize">Đồng ý</button>
                  </div>
                </form>
                <form method="dialog" class="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
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
              <button class="btn btn-sm bg-white text-base border-gray-300" onclick="my_modal_edit_three.showModal()"><i
                  class='bx bx-edit-alt'></i>
              </button>
              <dialog id="my_modal_edit_three" class="modal">
                <form method="dialog" class="modal-box bg-white max-w-4xl">
                  <h3 class="text-base font-bold text-left py-2">Quản lý nhân viên</h3>
                  <div class="grid grid-cols-2 gap-3 pt-5">
                    <div class="col-span-1">
                      <label for="small-input"
                        class="block mb-2 text-left text-base font-semibold text-gray-900 dark:text-white">Tên/Thông
                        tin</label>
                      <input type="text" id="small-input"
                        class="block w-full p-2 text-gray-500 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </div>
                    <div class="col-span-1">
                      <label for="small-input"
                        class="block mb-2 text-left text-base font-semibold text-gray-900 dark:text-white">Số điện
                        thoại</label>
                      <input type="text" id="small-input"
                        class="block w-full p-2 text-gray-500 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </div>
                    <div class="col-span-1">
                      <label for="small-input"
                        class="block mb-2 text-left text-base font-semibold text-gray-900 dark:text-white">Email</label>
                      <input type="text" id="small-input"
                        class="block w-full p-2 text-gray-500 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </div>
                    <div>
                      <label for="local"
                        class="block mb-2 text-left text-base font-semibold text-gray-900 dark:text-white">Vị trí</label>
                      <select id="local"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected class="text-xs font-normal"></option>
                        <option value="demo" class="text-sm">Demo</option>
                      </select>
                    </div>
                    <div>
                      <label for="position"
                        class="block mb-2 text-left text-base font-semibold text-gray-900 dark:text-white">Chức vụ</label>
                      <select id="position"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected class="text-xs font-normal"></option>
                        <option value="demo" class="text-sm">Demo</option>
                      </select>
                    </div>
                    <div>
                      <label for="status"
                        class="block mb-2 text-left text-base font-semibold text-gray-900 dark:text-white">Trạng
                        thái</label>
                      <select id="status"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected class="text-xs font-normal"></option>
                        <option value="demo" class="text-sm">Demo</option>
                      </select>
                    </div>
                  </div>
                  <div class="pt-10 text-right">
                    <button class="btn btn-sm mr-2 bg-white border-gray-400 capitalize">Hủy bỏ</button>
                    <button class="btn btn-sm mr-2 border-gray-400 capitalize">Đồng ý</button>
                  </div>
                </form>
                <form method="dialog" class="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            </td>

          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style></style>