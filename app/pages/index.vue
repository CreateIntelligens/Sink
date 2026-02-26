<script setup>
const { company } = useAppConfig()

definePageMeta({
  layout: false,
})

useHead({
  title: company?.name ? `${company.name} - ${company.nameEnglish || ''}` : 'Company Profile',
})
</script>

<template>
  <main
    class="
      flex min-h-screen items-center justify-center bg-gradient-to-br
      from-gray-50 to-gray-100
      dark:from-gray-900 dark:to-gray-800
    "
  >
    <div
      class="
        mx-4 max-w-2xl rounded-lg bg-white p-8 shadow-lg
        dark:bg-gray-800
      "
    >
      <h1
        class="
          mb-6 text-center text-3xl font-bold text-gray-900
          dark:text-gray-100
        "
      >
        {{ company?.name || 'Your Company Name' }}
      </h1>
      <h2
        v-if="company?.nameEnglish" class="
          mb-8 text-center text-xl font-semibold text-gray-700
          dark:text-gray-300
        "
      >
        {{ company.nameEnglish }}
      </h2>
      <div
        class="
          space-y-4 text-gray-700
          dark:text-gray-300
        "
      >
        <div
          v-if="company?.taxId" class="
            flex flex-col
            md:flex-row md:items-center
          "
        >
          <span
            class="
              mr-2 mb-1 font-semibold
              md:mb-0
            "
          >統編 (Tax ID)：</span>
          <span>{{ company.taxId }}</span>
        </div>
        <div
          v-if="company?.representative" class="
            flex flex-col
            md:flex-row md:items-center
          "
        >
          <span
            class="
              mr-2 mb-1 font-semibold
              md:mb-0
            "
          >代表人 (Representative)：</span>
          <span>{{ company.representative }}</span>
        </div>
        <div
          v-if="company?.address || company?.addressEnglish" class="
            flex flex-col
          "
        >
          <span class="mb-2 font-semibold">地址 (Address)：</span>
          <div
            class="
              ml-0 space-y-1
              md:ml-4
            "
          >
            <p v-if="company.address">
              {{ company.address }}
            </p>
            <p
              v-if="company.addressEnglish" class="
                text-sm text-gray-600
                dark:text-gray-400
              "
            >
              {{ company.addressEnglish }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
